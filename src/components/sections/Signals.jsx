import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import WhatsAppButton from '../ui/WhatsAppButton'

const topics = [
  {
    icon: 'male',
    title: 'Disfunção erétil e saúde sexual',
    text: 'Dificuldade para obter ou manter uma ereção, redução do desempenho ou mudanças persistentes na vida sexual podem ter diferentes causas. Uma avaliação urológica ajuda a investigar o que está acontecendo e indicar a melhor abordagem.',
  },
  {
    icon: 'bladder',
    title: 'Alterações urinárias e próstata',
    text: 'Jato urinário fraco, dificuldade para urinar, aumento da frequência ou necessidade de levantar várias vezes à noite são sintomas que podem justificar avaliação urológica.',
  },
  {
    icon: 'intimate',
    title: 'Fimose e saúde íntima',
    text: 'Dor, desconforto, dificuldade para exposição da glande ou alterações recorrentes na região íntima podem ser avaliados pelo urologista, inclusive na vida adulta.',
  },
  {
    icon: 'vasectomy',
    title: 'Vasectomia e planejamento familiar',
    text: 'A vasectomia é uma alternativa de contracepção definitiva para homens que já decidiram não ter filhos ou não desejam ampliar a família. A consulta permite entender indicação, procedimento e recuperação.',
  },
]

const otherReasons = [
  'sangue na urina',
  'dor lombar ou abdominal',
  'histórico familiar de câncer urológico',
  'prevenção da próstata',
  'desconfortos na região íntima',
]

export default function Signals() {
  return (
    <section className="signals-section signals-section--hub" id="sinais" data-track-section="signals">
      <div className="page-shell signals-hub">
        <header className="signals-hub__header">
          <Reveal as="p" className="signals-hub__eyebrow" delay={0}>
            QUANDO VALE PROCURAR UM UROLOGISTA
          </Reveal>

          <Reveal as="h2" className="signals-hub__title" delay={70} distance={14}>
            Algumas mudanças merecem ser avaliadas com mais atenção.
          </Reveal>

          <Reveal as="p" className="signals-hub__intro" delay={140} distance={12}>
            Alterações urinárias, sexuais ou relacionadas à saúde masculina nem sempre significam algo grave.
            Mas quando persistem, uma avaliação especializada pode trazer clareza e segurança.
          </Reveal>
        </header>

        <div className="signals-topic-grid">
          {topics.map((topic, index) => (
            <Reveal
              as="article"
              className="signals-topic-card"
              delay={180 + index * 70}
              distance={14}
              key={topic.title}
            >
              <span className="signals-topic-card__icon" aria-hidden="true">
                <Icon name={topic.icon} size={43} strokeWidth={1.55} />
              </span>

              <div className="signals-topic-card__copy">
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="signals-other" delay={500} distance={10}>
          <span className="signals-other__icon" aria-hidden="true">
            <Icon name="info" size={22} strokeWidth={1.7} />
          </span>
          <strong>Também avaliamos:</strong>
          <div className="signals-other__items">
            {otherReasons.map((reason) => (
              <span key={reason}>{reason}</span>
            ))}
          </div>
        </Reveal>

        <Reveal className="signals-action" delay={570} distance={12}>
          <span className="signals-action__icon" aria-hidden="true">
            <Icon name="heart" size={47} strokeWidth={1.45} />
          </span>

          <div className="signals-action__copy">
            <h3>Percebeu alguma mudança?</h3>
            <p>Buscar orientação pode ser o primeiro passo para entender o que está acontecendo.</p>
          </div>

          <WhatsAppButton className="signals-action__cta" location="signals">
            Verificar disponibilidade
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  )
}
