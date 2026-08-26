import doctorOfficeImage from '../../assets/web/doctor-office-section.webp'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import TextLines from '../ui/TextLines'
import WhatsAppButton from '../ui/WhatsAppButton'
import { SITE } from '../../config/site'

const credentials = [
  {
    icon: 'person',
    text: <>Formação em Medicina pela <strong>Universidade Federal do Estado do RJ</strong>.</>,
  },
  {
    icon: 'shield',
    text: <>Residência em <strong>Cirurgia Geral e Urologia</strong> nos melhores centros do país.</>,
  },
  {
    icon: 'ribbon',
    text: <>Fellow em <strong>Uro-Oncologia e Cirurgia Robótica no Hospital Albert Einstein</strong>.</>,
  },
  {
    icon: 'building',
    text: <>Atuação no <strong>Corpo Clínico do Hospital Albert Einstein Goiânia</strong>.</>,
  },
  {
    icon: 'users',
    text: <>Líder de Urologia no <strong>Hospital Municipal de Aparecida de Goiânia (Einstein Público)</strong>.</>,
  },
  {
    icon: 'robot',
    text: <>Proctor (instrutor) em <strong>Cirurgia Robótica da Rede Einstein</strong>.</>,
  },
]

export default function Doctor() {
  return (
    <section
      className="doctor-section doctor-section--profile"
      id="especialista"
      data-track-section="doctor"
    >
      <Reveal className="doctor-photo-panel" variant="scale" duration={1520} distance={12}>
        <img
          className="doctor-office-bg"
          src={doctorOfficeImage}
          alt={`${SITE.doctorName} em consultório particular`}
          width="1200"
          height="734"
          loading="lazy"
          decoding="async"
        />
        <div className="doctor-office-shade" aria-hidden="true" />
        <div className="doctor-photo-vignette" aria-hidden="true" />
      </Reveal>

      <div className="doctor-content doctor-profile-content">
        <Reveal as="h2" delay={80}>
          <TextLines text={'EXPERIÊNCIA E CREDIBILIDADE\nPARA CUIDAR COM EXCELÊNCIA'} />
        </Reveal>

        <Reveal className="doctor-profile-intro" delay={150} distance={14}>
          <span className="doctor-profile-kicker">Quem é o Dr. Antonio Flávio?</span>
          <h3>Urologista Oncológico e especialista em Cirurgia Robótica.</h3>
        </Reveal>

        <div className="doctor-credentials-list" aria-label="Formação e experiência profissional">
          {credentials.map(({ icon, text }, index) => (
            <Reveal
              as="div"
              className="doctor-credential-row"
              delay={140 + index * 55}
              duration={620}
              distance={10}
              key={index}
            >
              <span className="doctor-credential-icon" aria-hidden="true">
                <Icon name={icon} size={26} strokeWidth={1.65} />
              </span>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="doctor-profile-statement" delay={680} distance={12}>
          <span className="doctor-profile-quote" aria-hidden="true">“</span>
          <p>
            Com experiência e tecnologia, o objetivo é oferecer um tratamento que una
            <strong> precisão, segurança e recuperação otimizada.</strong>
          </p>
        </Reveal>

        <Reveal className="doctor-callout doctor-profile-callout" delay={760} distance={12}>
          <WhatsAppButton variant="outline" location="doctor">
            Falar com a equipe de forma reservada
          </WhatsAppButton>
          <small>Tire dúvidas iniciais e verifique a disponibilidade para atendimento particular.</small>
        </Reveal>
      </div>
    </section>
  )
}
