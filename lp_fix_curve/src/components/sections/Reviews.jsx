import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import TextLines from '../ui/TextLines'
import { SITE } from '../../config/site'

const reviews = [
  'Médico atencioso, explica\ntudo com clareza e transmite\nmuita segurança.',
  'Consulta completa e\nobjetiva. Ambiente acolhedor\ne atendimento excelente.',
  'Profissional extremamente\ncompetente e humano.\nMe senti muito seguro.',
]

function Stars({ size = 18 }) {
  return (
    <div className="review-stars" aria-label="5 estrelas">
      {[1, 2, 3, 4, 5].map((number) => <Icon name="star" size={size} key={number} />)}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="reviews-section" id="avaliacoes" data-track-section="reviews">
      <div className="page-shell reviews-shell">
        <Reveal as="h2" className="reviews-title">
          A CONFIANÇA DOS PACIENTES
        </Reveal>

        <div className="reviews-grid">
          <Reveal className="rating-card" delay={120} variant="scale">
            <div className="rating-score">
              <strong>{SITE.rating}</strong><span>/{SITE.ratingScale}</span>
            </div>
            <Stars size={23} />
            <small>em avaliações de pacientes</small>
          </Reveal>

          {reviews.map((text, index) => (
            <Reveal
              as="blockquote"
              className="review-card"
              delay={230 + index * 120}
              distance={18}
              key={text}
            >
              <b aria-hidden="true">“</b>
              <p><TextLines text={text} /></p>
              <Stars size={16} />
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal as="small" className="reviews-note" delay={620} variant="fade">
        Avaliações coletadas de forma espontânea.
      </Reveal>
    </section>
  )
}
