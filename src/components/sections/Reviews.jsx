import Icon from '../ui/Icon'
import TextLines from '../ui/TextLines'
import { SITE } from '../../config/site'

const reviews = [
  'Médico atencioso, explica\ntudo com clareza e transmite\nmuita segurança.',
  'Consulta completa e\nobjetiva. Ambiente acolhedor\ne atendimento excelente.',
  'Profissional extremamente\ncompetente e humano.\nMe senti muito seguro.',
]

export default function Reviews() {
  return (
    <section className="reviews-section" id="avaliacoes" data-track-section="reviews">
      <div className="page-shell reviews-grid">
        <h2><TextLines text={'A CONFIANÇA\nDOS PACIENTES'} /></h2>
        <div className="rating-card">
          <div><strong>{SITE.rating}</strong><span>/{SITE.ratingScale}</span></div>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((number) => <Icon name="star" size={21} key={number} />)}
          </div>
          <small>em avaliação de pacientes</small>
        </div>
        {reviews.map((text) => (
          <blockquote key={text}>
            <b>“</b>
            <p><TextLines text={text} /></p>
          </blockquote>
        ))}
      </div>
      <small className="reviews-note">Avaliações coletadas de forma espontânea.</small>
    </section>
  )
}
