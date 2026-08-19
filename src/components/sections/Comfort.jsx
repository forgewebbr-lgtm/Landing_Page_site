import waitingImage from '../../assets/web/waiting-room.webp'
import ultrasoundImage from '../../assets/web/ultrasound.webp'
import privateRoomImage from '../../assets/web/private-room.webp'
import locationImage from '../../assets/web/location-goiania.webp'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import TextLines from '../ui/TextLines'
import { SITE } from '../../config/site'

const resources = [
  {
    img: ultrasoundImage,
    width: 805,
    height: 700,
    icon: 'monitor',
    title: 'Estrutura de \natendimento',
    text: 'Ambientes planejados para oferecer organização, privacidade e conforto.',
  },
  {
    img: privateRoomImage,
    width: 712,
    height: 700,
    icon: 'person',
    title: 'Atendimento\nhumanizado',
    text: 'Tempo dedicado para ouvir, orientar\ne esclarecer dúvidas.',
  },
  {
    img: locationImage,
    width: 706,
    height: 700,
    icon: 'pin',
    title: 'Localização\nconveniente',
    text: `Fácil acesso em ${SITE.city}\ne opção de telemedicina.`,
  },
]

export default function Comfort() {
  return (
    <section className="comfort-section" id="ambiente" data-track-section="comfort">
      <div className="comfort-layout">
        <Reveal className="comfort-story" delay={80} variant="scale" duration={1400}>
          <img
            className="comfort-story-image"
            src={waitingImage}
            alt="Ambiente de espera acolhedor e reservado"
            width="755"
            height="700"
            loading="lazy"
            decoding="async"
          />
          <div className="comfort-story-overlay" aria-hidden="true" />

          <div className="comfort-intro">
            <span className="comfort-kicker">ESTRUTURA E ACOLHIMENTO</span>
            <h2>AMBIENTE E RECURSOS<br />PARA SEU CONFORTO</h2>
            <p>
              Estrutura moderna e acolhedora, pensada para oferecer segurança,
              privacidade e uma experiência cuidadosa em cada detalhe.
            </p>
          </div>

          <div className="comfort-feature-caption">
            <Icon name="chair" size={27} />
            <div>
              <strong>Ambiente acolhedor e reservado</strong>
              <span>Privacidade e conforto do início ao fim.</span>
            </div>
          </div>
        </Reveal>

        <div className="comfort-stack">
          {resources.map((resource) => (
            <article className="comfort-card" key={resource.title}>
              <div className="comfort-card__copy">
                <Icon name={resource.icon} size={27} />
                <div>
                  <h3><TextLines text={resource.title} /></h3>
                  <p><TextLines text={resource.text} /></p>
                </div>
              </div>
              <img
                src={resource.img}
                alt=""
                width={resource.width}
                height={resource.height}
                loading="lazy"
                decoding="async"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
