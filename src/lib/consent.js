import { MARKETING } from '../config/marketing'

export const CONSENT_EVENT = 'lp:consent-updated'
export const OPEN_CONSENT_EVENT = 'lp:open-consent-settings'

export const DEFAULT_CONSENT = Object.freeze({
  necessary: true,
  analytics: false,
  marketing: false,
  decided: false,
  updatedAt: null,
})

function normalizeConsent(value) {
  return {
    necessary: true,
    analytics: Boolean(value?.analytics),
    marketing: Boolean(value?.marketing),
    decided: Boolean(value?.decided),
    updatedAt: typeof value?.updatedAt === 'string' ? value.updatedAt : null,
  }
}

export function readConsent() {
  if (typeof window === 'undefined') return { ...DEFAULT_CONSENT }

  try {
    const raw = window.localStorage.getItem(MARKETING.consentStorageKey)
    if (!raw) return { ...DEFAULT_CONSENT }
    return normalizeConsent(JSON.parse(raw))
  } catch {
    return { ...DEFAULT_CONSENT }
  }
}

export function storeConsent(preferences) {
  const next = normalizeConsent({
    ...preferences,
    decided: true,
    updatedAt: new Date().toISOString(),
  })

  try {
    window.localStorage.setItem(MARKETING.consentStorageKey, JSON.stringify(next))
  } catch {
    // O site continua funcionando mesmo quando o armazenamento está bloqueado.
  }

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: next }))
  return next
}

export function openConsentSettings() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(OPEN_CONSENT_EVENT))
  }
}

export function toGoogleConsent(preferences) {
  const consent = normalizeConsent(preferences)

  return {
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    ad_storage: consent.marketing ? 'granted' : 'denied',
    ad_user_data: consent.marketing ? 'granted' : 'denied',
    ad_personalization: consent.marketing ? 'granted' : 'denied',
    personalization_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
  }
}
