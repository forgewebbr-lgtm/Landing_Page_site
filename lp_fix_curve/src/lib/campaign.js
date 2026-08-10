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

export function captureCampaign() {
  if (typeof window === 'undefined') return null

  let existing = null
  try {
    existing = JSON.parse(window.sessionStorage.getItem(MARKETING.campaignStorageKey) || 'null')
  } catch {
    existing = null
  }

  const params = new URLSearchParams(window.location.search)
  const captured = {}
  TRACKED_PARAMS.forEach((key) => {
    const value = sanitize(params.get(key))
    if (value) captured[key] = value
  })

  const hasNewCampaign = Object.keys(captured).length > 0
  const data = {
    ...(existing || {}),
    ...(hasNewCampaign ? captured : {}),
    landingPageVariant: MARKETING.landingPageVariant,
    landingPath: window.location.pathname,
  }

  data.campaignCode = createCampaignCode(data)

  try {
    window.sessionStorage.setItem(MARKETING.campaignStorageKey, JSON.stringify(data))
  } catch {
    // O código de origem ainda funciona durante a sessão atual.
  }

  return data
}

export function getCampaign() {
  if (typeof window === 'undefined') {
    return {
      campaignCode: `WEB-${hash(MARKETING.landingPageVariant)}`,
      landingPageVariant: MARKETING.landingPageVariant,
      landingPath: '/',
    }
  }

  try {
    const stored = JSON.parse(window.sessionStorage.getItem(MARKETING.campaignStorageKey) || 'null')
    return stored || captureCampaign()
  } catch {
    return captureCampaign()
  }
}

export function getSafeAttributionParameters() {
  const campaign = getCampaign() || {}
  return {
    campaign_code: campaign.campaignCode || 'WEB-DIRETO',
    traffic_source: sanitize(campaign.utm_source || (campaign.gclid ? 'google' : campaign.fbclid ? 'meta' : 'direct'), 40),
    traffic_medium: sanitize(campaign.utm_medium || 'none', 40),
    landing_variant: MARKETING.landingPageVariant,
  }
}

export function appendCampaignCode(message) {
  const baseMessage = message || ''
  const campaign = getCampaign()
  const code = campaign?.campaignCode || 'WEB-DIRETO'
  return `${baseMessage}\n\nCódigo de atendimento: ${code}`
}
