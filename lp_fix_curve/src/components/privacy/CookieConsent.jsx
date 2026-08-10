import { useEffect, useRef, useState } from 'react'
import { MARKETING } from '../../config/marketing'
import {
  OPEN_CONSENT_EVENT,
  readConsent,
} from '../../lib/consent'
import { updateConsent } from '../../lib/tracking'

export default function CookieConsent() {
  const initialConsent = readConsent()
  const panelRef = useRef(null)
  const previousFocusRef = useRef(null)
  const [open, setOpen] = useState(!initialConsent.decided)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [preferences, setPreferences] = useState({
    analytics: initialConsent.analytics,
    marketing: initialConsent.marketing,
  })

  useEffect(() => {
    document.body.classList.toggle('consent-open', open)
    return () => document.body.classList.remove('consent-open')
  }, [open])

  useEffect(() => {
    const showSettings = () => {
      const current = readConsent()
      setPreferences({ analytics: current.analytics, marketing: current.marketing })
      setSettingsOpen(true)
      setOpen(true)
    }

    window.addEventListener(OPEN_CONSENT_EVENT, showSettings)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, showSettings)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    previousFocusRef.current = document.activeElement
    const focusableSelector = 'button:not([disabled]), a[href], input:not([disabled])'
    const focusable = () => [...(panelRef.current?.querySelectorAll(focusableSelector) || [])]
    window.requestAnimationFrame(() => focusable()[0]?.focus())

    const onKeyDown = (event) => {
      if (event.key === 'Escape' && readConsent().decided) {
        setOpen(false)
        return
      }

      if (event.key !== 'Tab') return
      const elements = focusable()
      if (!elements.length) return
      const first = elements[0]
      const last = elements.at(-1)

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      if (previousFocusRef.current instanceof HTMLElement) previousFocusRef.current.focus()
    }
  }, [open, settingsOpen])

  const save = (nextPreferences) => {
    updateConsent(nextPreferences)
    setPreferences(nextPreferences)
    setOpen(false)
    setSettingsOpen(false)
  }

  if (!open) return null

  return (
    <div className="consent-layer" role="presentation">
      <section
        ref={panelRef}
        className={`consent-panel ${settingsOpen ? 'consent-panel--settings' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-title"
        aria-describedby="consent-description"
      >
        <div className="consent-copy">
          <span className="consent-label">Privacidade e controle</span>
          <h2 id="consent-title">Sua escolha vem primeiro.</h2>
          <p id="consent-description">
            Utilizamos armazenamento necessário para manter suas preferências. Com sua autorização,
            também usamos medição de audiência e publicidade para entender o desempenho desta página.
          </p>
          <a href={MARKETING.privacyPolicyUrl} target="_blank" rel="noopener noreferrer">
            Ler a Política de Privacidade
          </a>
        </div>

        {settingsOpen && (
          <div className="consent-options">
            <div className="consent-option consent-option--locked">
              <div>
                <strong>Necessários</strong>
                <span>Guardam sua escolha de privacidade e permitem o funcionamento básico.</span>
              </div>
              <span className="consent-status">Sempre ativos</span>
            </div>

            <label className="consent-option">
              <div>
                <strong>Medição de audiência</strong>
                <span>Permite medir visitas, seções visualizadas e cliques no WhatsApp.</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(event) => setPreferences((current) => ({
                  ...current,
                  analytics: event.target.checked,
                }))}
              />
              <span className="consent-switch" aria-hidden="true" />
            </label>

            <label className="consent-option">
              <div>
                <strong>Publicidade</strong>
                <span>Permite atribuir conversões a campanhas do Google, Instagram e Facebook.</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(event) => setPreferences((current) => ({
                  ...current,
                  marketing: event.target.checked,
                }))}
              />
              <span className="consent-switch" aria-hidden="true" />
            </label>
          </div>
        )}

        <div className="consent-actions">
          {!settingsOpen ? (
            <>
              <button type="button" className="consent-button consent-button--primary" onClick={() => save({ analytics: true, marketing: true })}>
                Aceitar todos
              </button>
              <button type="button" className="consent-button" onClick={() => save({ analytics: false, marketing: false })}>
                Rejeitar não essenciais
              </button>
              <button type="button" className="consent-link-button" onClick={() => setSettingsOpen(true)}>
                Configurar
              </button>
            </>
          ) : (
            <>
              <button type="button" className="consent-button consent-button--primary" onClick={() => save(preferences)}>
                Salvar preferências
              </button>
              <button type="button" className="consent-button" onClick={() => save({ analytics: false, marketing: false })}>
                Manter somente necessários
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
