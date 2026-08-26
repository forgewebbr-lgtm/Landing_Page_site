import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import { SITE } from '../../config/site'
import { trackEvent } from '../../lib/tracking'
import './Location.css'

const mapQuery = encodeURIComponent(
  `${SITE.facilityName}, ${SITE.streetAddress}, ${SITE.neighborhood}, ${SITE.city} - ${SITE.state}`,
)

const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`

export default function Location() {
  const trackDirections = () => {
    trackEvent('directions_click', { location_name: 'einstein_goiania' }, { category: 'conversion' })
  }

  return (
    <section
      className="location-section"
      id="localizacao"
      data-track-section="location"
      aria-labelledby="location-title"
    >
      <div className="page-shell location-shell">
        <Reveal className="location-heading">
          <span className="location-kicker">Localização</span>
          <h2 id="location-title">Atendimento no Einstein, no Órion Complex.</h2>
          <p>
            Consultórios no 6º andar, no Setor Marista, em Goiânia.
          </p>
        </Reveal>

        <Reveal className="location-map" delay={120} variant="scale">
          <div className="location-map__stage">
            <iframe
              src={mapEmbedUrl}
              title={`Mapa de ${SITE.facilityName}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="location-map__footer">
            <address className="location-address">
              <span className="location-address__icon" aria-hidden="true">
                <Icon name="pin" size={21} />
              </span>
              <span className="location-address__text">
                <strong>{SITE.streetAddress}</strong>
                <span>{SITE.neighborhood} · {SITE.city} - {SITE.state} · CEP {SITE.postalCode}</span>
              </span>
            </address>

            <a
              className="location-directions"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackDirections}
            >
              <Icon name="pin" size={19} />
              <span>Como chegar</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
