import { SITE } from '../../config/site'
import './DoctorPlaque.css'

export default function DoctorPlaque() {
  return (
    <article
      className="doctor-plaque"
      aria-labelledby="doctor-plaque-name"
    >
      {/* Reflexo suave sobre o vidro */}
      <span
        className="doctor-plaque__reflection"
        aria-hidden="true"
      />

      {/* Fixadores decorativos */}
      <span
        className="doctor-plaque__fastener doctor-plaque__fastener--top-left"
        aria-hidden="true"
      />

      <span
        className="doctor-plaque__fastener doctor-plaque__fastener--top-right"
        aria-hidden="true"
      />

      <span
        className="doctor-plaque__fastener doctor-plaque__fastener--bottom-left"
        aria-hidden="true"
      />

      <span
        className="doctor-plaque__fastener doctor-plaque__fastener--bottom-right"
        aria-hidden="true"
      />

      <div className="doctor-plaque__content">
        <h2
          id="doctor-plaque-name"
          className="doctor-plaque__name"
        >
          {SITE.doctorName}
        </h2>

        <div
          className="doctor-plaque__divider"
          aria-hidden="true"
        >
          <span />
          <i />
          <span />
        </div>

        <p className="doctor-plaque__specialties">
          {SITE.specialty}
        </p>

        <p className="doctor-plaque__robotic">
          Cirurgia Robótica
        </p>
      </div>
    </article>
  )
}