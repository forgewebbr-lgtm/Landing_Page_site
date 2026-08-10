import { SITE } from '../../config/site'
import './DoctorPlaque.css'

const FASTENER_POSITIONS = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
]

export default function DoctorPlaque() {
  return (
    <article
      className="doctor-plaque"
      aria-label={`${SITE.doctorName}. ${SITE.specialty}. ${SITE.roboticSurgery}. ${SITE.crm}. ${SITE.rqe}.`}
    >
      <span
        className="doctor-plaque__reflection"
        aria-hidden="true"
      />

      {FASTENER_POSITIONS.map((position) => (
        <span
          className={`doctor-plaque__fastener doctor-plaque__fastener--${position}`}
          aria-hidden="true"
          key={position}
        />
      ))}

      <div className="doctor-plaque__content">
        <h2 className="doctor-plaque__name">
          {SITE.doctorPlaqueNameLines.map((line) => (
            <span className="doctor-plaque__name-line" key={line}>
              {line}
            </span>
          ))}
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
          {SITE.roboticSurgery}
        </p>

        <div className="doctor-plaque__registration">
          <span>{SITE.crm}</span>
          <i aria-hidden="true" />
          <span>{SITE.rqe}</span>
        </div>
      </div>
    </article>
  )
}
