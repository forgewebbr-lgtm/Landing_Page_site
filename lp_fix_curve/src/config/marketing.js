const ENV = {
  VITE_SITE_URL: import.meta.env.VITE_SITE_URL,
  VITE_LANDING_PAGE_VARIANT: import.meta.env.VITE_LANDING_PAGE_VARIANT,
  VITE_GTM_ID: import.meta.env.VITE_GTM_ID,
  VITE_GA4_MEASUREMENT_ID: import.meta.env.VITE_GA4_MEASUREMENT_ID,
  VITE_GOOGLE_ADS_ID: import.meta.env.VITE_GOOGLE_ADS_ID,
  VITE_GOOGLE_ADS_CONVERSION_LABEL: import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL,
  VITE_META_PIXEL_ID: import.meta.env.VITE_META_PIXEL_ID,
  VITE_TRACKING_DEBUG: import.meta.env.VITE_TRACKING_DEBUG,
  DEV: import.meta.env.DEV,
}

function value(name, fallback = '') {
  const current = ENV[name]
  return typeof current === 'string' ? current.trim() : fallback
}

export const MARKETING = {
  siteUrl: value('VITE_SITE_URL', 'https://SEU-DOMINIO.com.br'),
  landingPageVariant: value('VITE_LANDING_PAGE_VARIANT', 'urologia_mulheres_v1'),
  gtmId: value('VITE_GTM_ID'),
  ga4MeasurementId: value('VITE_GA4_MEASUREMENT_ID'),
  googleAdsId: value('VITE_GOOGLE_ADS_ID'),
  googleAdsConversionLabel: value('VITE_GOOGLE_ADS_CONVERSION_LABEL'),
  metaPixelId: value('VITE_META_PIXEL_ID'),
  privacyPolicyUrl: '/politica-de-privacidade.html',
  consentStorageKey: 'dr_antonio_consent_v1',
  campaignStorageKey: 'dr_antonio_campaign_v1',
  debug: Boolean(ENV.DEV) || value('VITE_TRACKING_DEBUG') === 'true',
}

export function isValidGtmId(id = MARKETING.gtmId) {
  return /^GTM-[A-Z0-9]+$/i.test(id)
}

export function isValidGa4Id(id = MARKETING.ga4MeasurementId) {
  return /^G-[A-Z0-9]+$/i.test(id)
}

export function isValidGoogleAdsId(id = MARKETING.googleAdsId) {
  return /^AW-\d+$/i.test(id)
}

export function isValidMetaPixelId(id = MARKETING.metaPixelId) {
  return /^\d{8,20}$/.test(id)
}
