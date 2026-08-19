import { MARKETING } from '../config/marketing'

const TRACKED_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_id',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
]

let volatileCampaign = null

function sanitize(value, maxLength = 120) {
  if (typeof value !== 'string') return ''
  return value
    .trim()
    .replace(/[<>"'`]/g, '')
    .slice(0, maxLength)
}

function hash(value) {
  let result = 2166136261
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index)
    result = Math.imul(result, 16777619)
  }
  return (result >>> 0).toString(36).toUpperCase().padStart(6, '0').slice(0, 6)
}

function sourcePrefix(data) {
  const source = `${data.utm_source || ''} ${data.utm_medium || ''}`.toLowerCase()

  if (data.gclid || data.gbraid || data.wbraid || source.includes('google')) return 'GGL'
  if (data.fbclid || /facebook|instagram|meta/.test(source)) return 'META'
  if (/bing|microsoft/.test(source)) return 'BING'
  if (/organic|seo/.test(source)) return 'ORG'
  if (/email|newsletter/.test(source)) return 'MAIL'
  return 'WEB'
}

function createCampaignCode(data) {
  const fingerprint = [
    MARKETING.landingPageVariant,
    ...TRACKED_PARAMS.map((key) => data[key] || ''),
  ].join('|')

  return `${sourcePrefix(data)}-${hash(fingerprint)}`
}

function readStoredCampaign() {
  try {
    return JSON.parse(window.sessionStorage.getItem(MARKETING.campaignStorageKey) || 'null')
  } catch {
    return null
  }
}

function persistCampaignData(data) {
  try {
    window.sessionStorage.setItem(MARKETING.campaignStorageKey, JSON.stringify(data))
  } catch {
    // A atribuição continua disponível apenas em memória nesta página.
  }
}

function buildCampaign(existing = null) {
  const params = new URLSearchParams(window.location.search)
  const captured = {}

  TRACKED_PARAMS.forEach((key) => {
    const current = sanitize(params.get(key))
    if (current) captured[key] = current
  })

  const hasNewCampaign = Object.keys(captured).length > 0
  const data = {
    ...(existing || {}),
    ...(hasNewCampaign ? captured : {}),
    landingPageVariant: MARKETING.landingPageVariant,
    landingPath: window.location.pathname,
  }

  data.campaignCode = createCampaignCode(data)
  return data
}

/**
 * Captura a origem da visita sem exigir armazenamento no navegador.
 * O sessionStorage só é usado quando `persist` é explicitamente habilitado
 * pelo módulo de consentimento/tracking.
 */
export function captureCampaign({ persist = false, includeStored = false } = {}) {
  if (typeof window === 'undefined') return null

  const existing = includeStored ? (readStoredCampaign() || volatileCampaign) : volatileCampaign
  volatileCampaign = buildCampaign(existing)

  if (persist) persistCampaignData(volatileCampaign)
  return volatileCampaign
}

export function enableCampaignPersistence() {
  if (typeof window === 'undefined') return null
  return captureCampaign({ persist: true, includeStored: true })
}

export function clearCampaignPersistence() {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.removeItem(MARKETING.campaignStorageKey)
  } catch {
    // Nenhuma ação adicional é necessária.
  }
}

export function getCampaign() {
  if (typeof window === 'undefined') {
    return {
      campaignCode: `WEB-${hash(MARKETING.landingPageVariant)}`,
      landingPageVariant: MARKETING.landingPageVariant,
      landingPath: '/',
    }
  }

  return volatileCampaign || captureCampaign({ persist: false, includeStored: false })
}

export function getSafeAttributionParameters() {
  const campaign = getCampaign() || {}
  return {
    campaign_code: campaign.campaignCode || 'WEB-DIRETO',
    traffic_source: sanitize(
      campaign.utm_source || (campaign.gclid ? 'google' : campaign.fbclid ? 'meta' : 'direct'),
      40,
    ),
    traffic_medium: sanitize(campaign.utm_medium || 'none', 40),
    traffic_campaign: sanitize(campaign.utm_campaign || 'none', 80),
    traffic_content: sanitize(campaign.utm_content || 'none', 80),
    landing_variant: MARKETING.landingPageVariant,
    landing_path: sanitize(campaign.landingPath || '/', 120),
  }
}

export function appendCampaignCode(message) {
  const baseMessage = message || ''
  const campaign = getCampaign()
  const code = campaign?.campaignCode || 'WEB-DIRETO'
  return `${baseMessage}\n\nCódigo de atendimento: ${code}`
}
