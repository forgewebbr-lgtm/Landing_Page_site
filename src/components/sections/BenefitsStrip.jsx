import Icon from '../ui/Icon'
import TextLines from '../ui/TextLines'

const items = [
  ['target', 'Diagnóstico\nprecoce', 'Aumenta as chances de\ntratamentos eficazes.'],
  ['shield', 'Prevenção e\nqualidade de vida', 'Acompanhamento\nregular para viver com\nmais saúde.'],
  ['person', 'Tratamento\nindividualizado', 'Cada paciente é único e\nrecebe um plano de\ncuidado personalizado.'],
  ['users', 'Mais tranquilidade\npara toda a família', 'Cuidar de quem você\nama é prevenir\npreocupações futuras.'],
]

export default function BenefitsStrip() {
  return (
    <section className="benefits-strip" id="beneficios" data-track-section="benefits">
      <div className="page-shell benefits-layout">
        <h2><TextLines text={'POR QUE PROCURAR\nUM UROLOGISTA?'} /></h2>
        {items.map(([icon, title, description]) => (
          <article className="benefit-item" key={title}>
            <Icon name={icon} size={34} />
            <div>
              <h3><TextLines text={title} /></h3>
              <p><TextLines text={description} /></p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
