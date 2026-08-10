import Icon from './Icon'
import { getWhatsAppUrl, SITE } from '../../config/site'
import { appendCampaignCode, getSafeAttributionParameters } from '../../lib/campaign'
import { trackEvent } from '../../lib/tracking'

export default function WhatsAppButton({
  children = 'Verificar disponibilidade',
  variant = 'gold',
  className = '',
  message,
  location = 'unknown',
}) {
  const href = getWhatsAppUrl(appendCampaignCode(message || SITE.whatsappMessage))

  const handleClick = () => {
    trackEvent('whatsapp_click', {
      cta_location: location,
      link_domain: 'wa.me',
      ...getSafeAttributionParameters(),
    }, { category: 'conversion' })
  }

  return (
    <a
      className={`cta-button cta-button--${variant} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} pelo WhatsApp`}
      data-cta-location={location}
      onClick={handleClick}
    >
      <Icon name="whatsapp" size={21} strokeWidth={1.8} />
      <span>{children}</span>
    </a>
  )
}
