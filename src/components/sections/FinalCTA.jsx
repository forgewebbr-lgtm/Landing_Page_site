import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import TextLines from '../ui/TextLines'
import WhatsAppButton from '../ui/WhatsAppButton'
import KidneyLogo from '../ui/KidneyLogo'
import { SITE } from '../../config/site'

const points = [
  {
    icon: 'shield',
    lines: ['Atendimento', 'particular'],
  },
  {
    icon: 'lock',
    lines: ['Consulta', 'individualizada'],
  },
  {
    icon: 'pin',
    lines: SITE.serviceLocationLines,
  },
  {
    icon: 'message',
    lines: ['Resposta rápida', 'e humanizada'],
  },
]

export default function FinalCTA() {
  return (
    <section
      className="final-cta-section"
      id="contato"
      data-track-section="final_cta"
    >
      <div className="page-shell final-grid">
        <div className="final-left">
          <Reveal as="h2">
            <TextLines
              text={'Quando algo preocupa, buscar orientação\né o primeiro passo para cuidar com segurança.'}
            />
          </Reveal>

          <div className="final-points">
            {points.map(({ icon, lines }, index) => (
              <Reveal delay={130 + index * 90} distance={14} key={icon}>
                <Icon name={icon} size={25} />
                <span>
                  {lines.map((line) => (
                    <span className="text-line" key={line}>
                      {line}
                    </span>
                  ))}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="final-middle" delay={320} variant="scale">
          <WhatsAppButton location="final_cta">
            Verificar disponibilidade
          </WhatsAppButton>
          <small>Atendimento particular e reservado pelo WhatsApp.</small>
        </Reveal>

        <Reveal className="final-brand" delay={460} variant="fade">
          <KidneyLogo size={78} className="kidney-mark" />
          <div>
            <strong>{SITE.doctorName}</strong>
            <span>{SITE.specialty}</span>
            <small>
              {SITE.crm}&nbsp;&nbsp;|&nbsp;&nbsp;{SITE.rqe}
            </small>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
