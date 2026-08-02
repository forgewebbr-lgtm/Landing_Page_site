import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
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
        <Reveal as="h2">
          <TextLines text={'A CONFIANÇA\nDOS PACIENTES'} />
        </Reveal>

        <Reveal className="rating-card" delay={140} variant="scale">
          <div><strong>{SITE.rating}</strong><span>/{SITE.ratingScale}</span></div>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((number) => <Icon name="star" size={21} key={number} />)}
          </div>
          <small>em avaliação de pacientes</small>
        </Reveal>

        {reviews.map((text, index) => (
          <Reveal
            as="blockquote"
            delay={250 + index * 115}
            distance={18}
            key={text}
          >
            <b>“</b>
            <p><TextLines text={text} /></p>
          </Reveal>
        ))}
      </div>

      <Reveal as="small" className="reviews-note" delay={610} variant="fade">
        Avaliações coletadas de forma espontânea.
      </Reveal>
    </section>
  )
}
