import Icon from '../ui/Icon'
import TextLines from '../ui/TextLines'
import WhatsAppButton from '../ui/WhatsAppButton'
import KidneyLogo from '../ui/KidneyLogo'
import { SITE } from '../../config/site'

const points = [
  ['shield', 'Atendimento\nparticular'],
  ['lock', 'Consulta\nindividualizada'],
  ['pin', 'Goiânia e\ntelemedicina'],
  ['message', 'Resposta rápida\ne humanizada'],
]

export default function FinalCTA() {
  return (
    <section className="final-cta-section" id="contato" data-track-section="final_cta">
      <div className="page-shell final-grid">
        <div className="final-left">
          <h2><TextLines text={'Quando algo preocupa, buscar orientação\né o primeiro passo para cuidar com segurança.'} /></h2>
          <div className="final-points">
            {points.map(([icon, text]) => (
              <div key={text}>
                <Icon name={icon} size={25} />
                <span><TextLines text={text} /></span>
              </div>
            ))}
          </div>
        </div>

        <div className="final-middle">
          <WhatsAppButton location="final_cta">Verificar disponibilidade</WhatsAppButton>
          <small>Atendimento particular e reservado pelo WhatsApp.</small>
        </div>

        <div className="final-brand">
          <KidneyLogo size={78} className="kidney-mark" />
          <div>
            <strong>{SITE.doctorName}</strong>
            <span>{SITE.specialty}</span>
            <small>{SITE.crm}&nbsp;&nbsp;|&nbsp;&nbsp;{SITE.rqe}</small>
          </div>
        </div>
      </div>
    </section>
  )
}
