import officeImage from '../../assets/web/office-consultation.webp'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import TextLines from '../ui/TextLines'

const steps = [
  ['phone', 'Contato reservado', 'Você fala com nossa equipe\nde forma rápida e discreta.'],
  ['person', 'Avaliação\nindividualizada', 'Entendemos o histórico\ne realizamos a avaliação clínica.'],
  ['clipboard', 'Investigação e\ndiagnóstico', 'Analisamos os resultados com atenção\npara identificar a causa do problema.'],
  ['message', 'Orientação e\nconduta', 'Explicamos tudo com clareza\ne definimos o melhor plano para o seu caso.'],
]

export default function Process() {
  return (
    <section className="process-section" id="consulta" data-track-section="process">
      <div className="process-copy">
        <Reveal as="h2">COMO É A CONSULTA</Reveal>

        <Reveal className="process-steps" variant="fade" duration={1380}>
          {steps.map(([icon, title, description], index) => (
            <Reveal
              as="article"
              className="process-step"
              delay={210 + index * 125}
              distance={18}
              key={title}
            >
              <span className="step-number">{index + 1}</span>
              <Icon name={icon} size={33} />
              <h3><TextLines text={title} /></h3>
              <p><TextLines text={description} /></p>
            </Reveal>
          ))}
        </Reveal>
      </div>

      <Reveal
        as="img"
        className="process-image"
        variant="scale"
        duration={1520}
        delay={140}
        src={officeImage}
        alt="Consultório particular e reservado"
        width="1200"
        height="734"
        loading="lazy"
        decoding="async"
      />
    </section>
  )
}
