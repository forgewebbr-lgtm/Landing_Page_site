import waitingImage from '../../assets/web/waiting-room.webp'
import ultrasoundImage from '../../assets/web/ultrasound.webp'
import privateRoomImage from '../../assets/web/private-room.webp'
import locationImage from '../../assets/web/location-goiania.webp'
import Icon from '../ui/Icon'
import TextLines from '../ui/TextLines'

const cards = [
  { img: waitingImage, width: 755, height: 700, icon: 'chair', title: 'Ambiente acolhedor\ne reservado', text: 'Privacidade e conforto do\ninício ao fim.' },
  { img: ultrasoundImage, width: 805, height: 700, icon: 'monitor', title: 'Tecnologia e\nrecursos', text: 'Tecnologia e recursos para uma\navaliação mais precisa.' },
  { img: privateRoomImage, width: 712, height: 700, icon: 'person', title: 'Atendimento\nhumanizado', text: 'Tempo dedicado para ouvir, orientar\ne esclarecer dúvidas.' },
  { img: locationImage, width: 706, height: 700, icon: 'pin', title: 'Localização\nconveniente', text: 'Fácil acesso em Goiânia e opção\nde telemedicina.' },
]

export default function Comfort() {
  return (
    <section className="comfort-section" id="ambiente" data-track-section="comfort">
      <h2>AMBIENTE E RECURSOS PARA SEU CONFORTO</h2>
      <div className="page-shell comfort-grid">
        {cards.map((card) => (
          <article className="comfort-card" key={card.title}>
            <img src={card.img} alt="" width={card.width} height={card.height} loading="lazy" decoding="async" />
            <div>
              <Icon name={card.icon} size={31} />
              <h3><TextLines text={card.title} /></h3>
              <p><TextLines text={card.text} /></p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
