import officeImage from '../../assets/web/office-consultation.webp'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import TextLines from '../ui/TextLines'

const steps = [
  ['phone', 'Contato reservado', 'Você fala com nossa equipe\nde forma rápida e discreta.'],
  ['person', 'Avaliação\nindividualizada', 'Entendemos o histórico\ne realizamos a avaliação clínica.'],
  ['clipboard', 'Investigação e\ndiagnóstico', 'Analisamos os resultados com atenção\npara identificar a causa do problema.'],
  ['message', 'Orientação e\nconduta', 'Explicamos tudo com clareza\ne definimos o melhor plano para o seu caso.'],
  ['shield', 'Acompanhamento', 'Seguimos ao seu lado para garantir\nsegurança e tranquilidade.'],
]

export default function Process() {
  return (
    <section className="process-section" id="consulta" data-track-section="process">
      <div className="process-copy">
        <Reveal className="process-heading" duration={1180} distance={14}>
          <span className="process-heading-line" aria-hidden="true" />
          <h2>COMO É A CONSULTA</h2>
          <span className="process-heading-line" aria-hidden="true" />
        </Reveal>

        <div className="process-steps">
          {steps.map(([icon, title, description], index) => (
            <article className="process-step" key={title}>
              <span className="step-number">{index + 1}</span>
              <Icon name={icon} size={34} />
              <h3><TextLines text={title} /></h3>
              <p><TextLines text={description} /></p>
            </article>
          ))}
        </div>
      </div>

      <Reveal className="process-image-panel" variant="scale" duration={1520} delay={120} distance={10}>
        <img
          className="process-image"
          src={officeImage}
          alt="Consultório particular e reservado"
          width="1200"
          height="734"
          loading="lazy"
          decoding="async"
        />
        <div className="process-image-shade" aria-hidden="true" />
      </Reveal>
    </section>
  )
}
