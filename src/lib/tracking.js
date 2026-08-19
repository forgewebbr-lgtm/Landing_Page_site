import {
  MARKETING,
  isValidGa4Id,
  isValidGoogleAdsId,
  isValidGtmId,
  isValidMetaPixelId,
} from '../config/marketing'
import {
  captureCampaign,
  clearCampaignPersistence,
  enableCampaignPersistence,
  getSafeAttributionParameters,
} from './campaign'
import {
  CONSENT_EVENT,
  readConsent,
  storeConsent,
  toGoogleConsent,
} from './consent'

let activeConsent = readConsent()
let initialized = false
let gtmLoaded = false
let googleScriptLoaded = false
let ga4Configured = false
let adsConfigured = false
let metaLoaded = false

function log(...args) {
  if (MARKETING.debug) console.info('[tracking]', ...args)
}

function ensureGoogleQueue() {
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments)
  }
}

function loadScript(id, src) {
  if (document.getElementById(id)) return
  const script = document.createElement('script')
  script.id = id
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

function setDefaultConsent() {
  ensureGoogleQueue()
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    personalization_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500,
  })
}

function updateGoogleConsent(consent) {
  ensureGoogleQueue()
  window.gtag('consent', 'update', toGoogleConsent(consent))
}

function syncCampaignPersistence(consent) {
  if (consent.analytics || consent.marketing) {
    enableCampaignPersistence()
    return
  }
  clearCampaignPersistence()
}

function loadGtm() {
  if (gtmLoaded || !isValidGtmId()) return
  ensureGoogleQueue()
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
  loadScript(
    'google-tag-manager',
    `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(MARKETING.gtmId)}`,
  )
  gtmLoaded = true
  log('Google Tag Manager carregado', MARKETING.gtmId)
}

function loadDirectGoogle() {
  const shouldConfigureGa4 = activeConsent.analytics && isValidGa4Id()
  const shouldConfigureAds = activeConsent.marketing && isValidGoogleAdsId()
  if (!shouldConfigureGa4 && !shouldConfigureAds) return

  ensureGoogleQueue()

  if (!googleScriptLoaded) {
    const primaryId = shouldConfigureGa4 ? MARKETING.ga4MeasurementId : MARKETING.googleAdsId
    loadScript('google-tag', `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryId)}`)
    window.gtag('js', new Date())
    googleScriptLoaded = true
  }

  if (shouldConfigureGa4 && !ga4Configured) {
    window.gtag('config', MARKETING.ga4MeasurementId, {
      send_page_view: true,
      anonymize_ip: true,
      allow_google_signals: activeConsent.marketing,
      allow_ad_personalization_signals: activeConsent.marketing,
    })
    ga4Configured = true
  }

  if (shouldConfigureAds && !adsConfigured) {
    window.gtag('config', MARKETING.googleAdsId)
    adsConfigured = true
  }

  log('Google tag direto atualizado')
}

function syncDirectGooglePrivacySettings() {
  if (!ga4Configured || !window.gtag || !isValidGa4Id()) return
  window.gtag('config', MARKETING.ga4MeasurementId, {
    send_page_view: false,
    allow_google_signals: activeConsent.marketing,
    allow_ad_personalization_signals: activeConsent.marketing,
  })
}

function createMetaQueue() {
  if (window.fbq) return
  const fbq = function fbq() {
    if (fbq.callMethod) fbq.callMethod.apply(fbq, arguments)
    else fbq.queue.push(arguments)
  }
  fbq.push = fbq
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.queue = []
  window.fbq = fbq
  window._fbq = fbq
}

function loadMetaPixel() {
  if (metaLoaded || !isValidMetaPixelId()) return
  createMetaQueue()
  loadScript('meta-pixel', 'https://connect.facebook.net/en_US/fbevents.js')
  window.fbq('consent', 'grant')
  window.fbq('init', MARKETING.metaPixelId)
  window.fbq('track', 'PageView')
  metaLoaded = true
  log('Meta Pixel carregado')
}

function updateMetaConsent(consent) {
  if (!window.fbq) return
  window.fbq('consent', consent.marketing ? 'grant' : 'revoke')
}

function loadAllowedProviders() {
  if (!activeConsent.analytics && !activeConsent.marketing) return

  if (isValidGtmId()) {
    loadGtm()
    return
  }

  if (activeConsent.analytics || activeConsent.marketing) loadDirectGoogle()
  if (activeConsent.marketing) loadMetaPixel()
}

export function initializeTracking() {
  if (typeof window === 'undefined' || initialized) return
  initialized = true

  // O estado padrão precisa existir antes de qualquer tag opcional.
  setDefaultConsent()

  // A origem da URL fica somente em memória até existir consentimento opcional.
  captureCampaign({ persist: false, includeStored: false })
  syncCampaignPersistence(activeConsent)

  if (activeConsent.decided) {
    updateGoogleConsent(activeConsent)
    loadAllowedProviders()
    syncDirectGooglePrivacySettings()
    updateMetaConsent(activeConsent)
  }

  window.addEventListener(CONSENT_EVENT, (event) => {
    activeConsent = event.detail
    updateGoogleConsent(activeConsent)
    syncCampaignPersistence(activeConsent)
    loadAllowedProviders()
    syncDirectGooglePrivacySettings()
    updateMetaConsent(activeConsent)
    log('Consentimento atualizado', activeConsent)
  })
}

export function updateConsent(preferences) {
  activeConsent = storeConsent(preferences)
  return activeConsent
}

export function getConsent() {
  return { ...activeConsent }
}

export function trackEvent(eventName, parameters = {}, options = {}) {
  if (typeof window === 'undefined') return false
  if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(eventName)) {
    log('evento ignorado por nome inválido', eventName)
    return false
  }

  const category = options.category || 'analytics'
  const canSendAnalytics = activeConsent.analytics
  const canSendMarketing = activeConsent.marketing
  const allowed = category === 'conversion'
    ? canSendAnalytics || canSendMarketing
    : canSendAnalytics

  if (!allowed) return false

  const payload = {
    ...getSafeAttributionParameters(),
    ...parameters,
  }

  if (isValidGtmId()) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: eventName, ...payload })
  } else {
    if (canSendAnalytics && isValidGa4Id() && window.gtag) {
      window.gtag('event', eventName, payload)
    }

    if (
      eventName === 'whatsapp_click'
      && canSendMarketing
      && isValidGoogleAdsId()
      && MARKETING.googleAdsConversionLabel
      && window.gtag
    ) {
      window.gtag('event', 'conversion', {
        send_to: `${MARKETING.googleAdsId}/${MARKETING.googleAdsConversionLabel}`,
        transport_type: 'beacon',
      })
    }

    if (eventName === 'whatsapp_click' && canSendMarketing && metaLoaded && window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: 'WhatsApp',
        content_category: 'Contato',
      })
    }
  }

  log('evento', eventName, payload)
  return true
}
