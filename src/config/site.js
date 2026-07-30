export const SITE = {
  doctorName: 'Dr. Antônio Flávio Rodrigues',
  specialty: 'Urologista · Uro-oncologista',
  specialtyShort: 'Urologia · Uro-oncologia',
  crm: 'CRM-GO 29.818',
  rqe: 'RQE 16.078',
  city: 'Goiânia · GO',
  whatsappNumber: '5562992147794',
  whatsappMessage:
    'Olá, gostaria de informações e de verificar a disponibilidade para atendimento particular com o Dr. Antônio Flávio Macedo.',
  rating: '4,9',
  ratingScale: '5,0',
}

export function getWhatsAppUrl(message = SITE.whatsappMessage) {
  const finalMessage = message || SITE.whatsappMessage
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(finalMessage)}`
}
