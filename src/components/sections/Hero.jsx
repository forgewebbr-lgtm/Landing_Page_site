import heroImage from '../../assets/web/hero-casal.png'
import heroMobileImage from '../../assets/web/hero-casal-mobile.webp'
import doctorImage from '../../assets/web/dr-antonio-real-sem-fundo.webp'
import doctorCard from '../../assets/web/placa-dr-antonio.webp'
import Icon from '../ui/Icon'
import WhatsAppButton from '../ui/WhatsAppButton'
import { SITE } from '../../config/site'

const trustItems = [
  ['shield', 'Atendimento\nparticular'],
  ['lock', 'Discrição e\nconfidencialidade'],
  ['pin', 'Goiânia e\ntelemedicina'],
]

export default function Hero() {
  return (
    <section className="hero-section" id="inicio" data-track-section="hero">
      <picture>
        <source media="(max-width: 600px)" srcSet={heroMobileImage} />
        <img
          className="hero-bg"
          src={heroImage}
          alt="Casal em momento de acolhimento"
          width="1672"
          height="941"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <div className="hero-shade" />

      <div className="page-shell hero-inner">
        <div className="hero-copy">
          <h1>
            Quando algo
            <br />
            muda,{' '}
            <em>
              você é
              <br />a primeira a perceber.
            </em>
          </h1>

          <p>
            Uma avaliação urológica particular,
            <br />
            cuidadosa e discreta pode trazer clareza,
            <br />
            segurança e a orientação que ele precisa.
          </p>

          <div className="hero-trust">
            {trustItems.map(([icon, label]) => (
              <div className="trust-item" key={label}>
                <Icon name={icon} size={30} />
                <span>
                  {label.split('\n').map((text) => (
                    <span key={text}>{text}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>

          <WhatsAppButton location="hero">
            Verificar disponibilidade
          </WhatsAppButton>

          <small>Atendimento particular e reservado pelo WhatsApp.</small>
        </div>

        <aside
          className="hero-doctor-card"
          aria-label={`${SITE.doctorName}. ${SITE.specialty}.`}
        >
          <img
            className="hero-doctor-card__plate"
            src={doctorCard}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />

          <img
            className="hero-doctor-card__photo"
            src={doctorImage}
            alt={SITE.doctorName}
            loading="eager"
            decoding="async"
          />
        </aside>
      </div>
    </section>
  )
}
