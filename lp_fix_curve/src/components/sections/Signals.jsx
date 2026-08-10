import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import TextLines from '../ui/TextLines'

const signals = [
  ['droplet', 'Dificuldade ou dor ao urinar'],
  ['moon', 'Acordar várias vezes à noite\npara urinar'],
  ['target', 'Jato urinário fraco ou interrompido'],
  ['droplet', 'Sangue na urina'],
  ['person', 'Dor na região lombar\nou abdominal'],
  ['heart', 'Queda no desempenho sexual'],
  ['users', 'Histórico familiar de câncer\nurológico'],
  ['person', 'Desconforto ou dores na\nregião pélvica'],
]

export default function Signals() {
  return (
    <section className="signals-section" id="sinais" data-track-section="signals">
      <div className="page-shell signals-grid">
        <div className="signals-content">
          <Reveal as="h2" className="section-kicker" delay={0}>
            SINAIS QUE MERECEM ATENÇÃO
          </Reveal>

          <div className="signals-list">
            {signals.map(([icon, text], index) => (
              <Reveal
                className="signal-item"
                delay={100 + index * 75}
                distance={14}
                key={text}
              >
                <Icon name={icon} size={25} />
                <span><TextLines text={text} /></span>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="emotional-copy">
          <Reveal as="h2" delay={130} distance={18}>
            <TextLines text={'Você conhece. Você percebe.\nE você pode fazer a diferença.'} />
          </Reveal>

          <Reveal as="p" delay={260} distance={16}>
            <TextLines text={'Muitas vezes, os homens ignoram sinais importantes.\nPor isso, seu cuidado e atenção podem ser decisivos\npara a saúde e o futuro dele.'} />
          </Reveal>

          <Reveal className="emotional-note" delay={390} variant="scale">
            <Icon name="heart" size={34} />
            <span>
              <TextLines text={'Cuidar da saúde dele é cuidar de\nquem você ama e de tudo que construíram juntos.'} />
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
