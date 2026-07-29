import Icon from '../ui/Icon'
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
          <h2 className="section-kicker">SINAIS QUE MERECEM ATENÇÃO</h2>
          <div className="signals-list">
            {signals.map(([icon, text]) => (
              <div className="signal-item" key={text}>
                <Icon name={icon} size={25} />
                <span><TextLines text={text} /></span>
              </div>
            ))}
          </div>
        </div>

        <div className="emotional-copy">
          <h2>
            <TextLines text={'Você conhece. Você percebe.\nE você pode fazer a diferença.'} />
          </h2>
          <p>
            <TextLines text={'Muitas vezes, os homens ignoram sinais importantes.\nPor isso, seu cuidado e atenção podem ser decisivos\npara a saúde e o futuro dele.'} />
          </p>
          <div className="emotional-note">
            <Icon name="heart" size={34} />
            <span>
              <TextLines text={'Cuidar da saúde dele é cuidar de\nquem você ama e de tudo que construíram juntos.'} />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
