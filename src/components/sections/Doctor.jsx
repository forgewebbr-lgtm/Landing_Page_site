import doctorImage from '../../assets/web/dr-antonio-real-sem-fundo.webp'
import officeImage from '../../assets/web/office-consultation.webp'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import TextLines from '../ui/TextLines'
import WhatsAppButton from '../ui/WhatsAppButton'
import { SITE } from '../../config/site'

const credentials = [
  ['person', 'Especialista\nem Urologia', 'Título de especialista\npela SBU.'],
  ['ribbon', 'Uro-oncologia', 'Experiência no diagnóstico\ne tratamento de câncer\nurológico.'],
  ['robot', SITE.roboticSurgery, 'Abordagem minimamente\ninvasiva com tecnologia\navançada.'],
  ['building', 'Hospitais e\ninstituições', 'Atuação em hospitais\ne instituições de\nreferência.'],
]

export default function Doctor() {
  return (
    <section className="doctor-section" id="especialista" data-track-section="doctor">
      <Reveal className="doctor-photo-panel" variant="scale" duration={1520} distance={12}>
        <img className="doctor-office-bg" src={officeImage} alt="Consultório particular" width="1200" height="734" loading="lazy" decoding="async" />
        <div className="doctor-office-shade" />
        <div className="doctor-portrait-frame">
          <img src={doctorImage} alt={SITE.doctorName} width="486" height="486" loading="lazy" decoding="async" />
        </div>
      </Reveal>

      <div className="doctor-content">
        <Reveal as="h2" delay={80}>
          <TextLines text={'EXPERIÊNCIA E CREDIBILIDADE\nPARA CUIDAR COM EXCELÊNCIA'} />
        </Reveal>

        <div className="credentials-grid">
          {credentials.map(([icon, title, description], index) => (
            <Reveal
              as="article"
              className="credential-card"
              delay={170 + index * 105}
              distance={18}
              key={title}
            >
              <Icon name={icon} size={43} />
              <h3><TextLines text={title} /></h3>
              <p><TextLines text={description} /></p>
            </Reveal>
          ))}
        </div>

        <Reveal className="doctor-callout" delay={560} distance={12}>
          <WhatsAppButton variant="outline" location="doctor">Falar com a equipe de forma reservada</WhatsAppButton>
          <small>Tire dúvidas iniciais e verifique a disponibilidade para atendimento particular.</small>
        </Reveal>
      </div>
    </section>
  )
}
