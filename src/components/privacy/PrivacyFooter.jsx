import { MARKETING } from '../../config/marketing'
import { openConsentSettings } from '../../lib/consent'
import { SITE } from '../../config/site'

export default function PrivacyFooter() {
  return (
    <footer className="privacy-footer">
      <div className="page-shell privacy-footer__inner">
        <small>© {new Date().getFullYear()} {SITE.doctorName}. Conteúdo informativo; não substitui avaliação médica.</small>
        <nav aria-label="Privacidade">
          <a href={MARKETING.privacyPolicyUrl}>Política de Privacidade</a>
          <button type="button" onClick={openConsentSettings}>Configurar cookies</button>
        </nav>
      </div>
    </footer>
  )
}
