const doctorName = 'Dr. Antonio Flávio Rodrigues'
const doctorShortName = 'Dr. Antonio Flávio'
const city = 'Goiânia'
const state = 'GO'
const stateName = 'Goiás'
const whatsappNumber = '5562992147794'

export const SITE = Object.freeze({
  // Identificação profissional
  doctorName,
  doctorShortName,
  doctorPlaqueNameLines: Object.freeze([
  'Dr. Antonio',
  'Flávio Rodrigues',
  ]),
  specialty: 'Urologista · Uro-oncologista',
  specialtyShort: 'Urologia · Uro-oncologia',
  roboticSurgery: 'Cirurgia Robótica',
  crm: 'CRM-GO 29.818',
  rqe: 'RQE 16.078',

  // Localização e formato de atendimento
  city,
  state,
  stateName,
  cityState: `${city} · ${state}`,
  serviceLocation: `${city} e telemedicina`,
  serviceLocationLines: Object.freeze([city, 'e telemedicina']),

  // Contato
  whatsappNumber,
  whatsappDisplay: '(62) 99214-7794',
  whatsappInternational: '+55 62 99214-7794',
  whatsappMessage:
    `Olá, gostaria de informações e de verificar a disponibilidade para atendimento particular com o ${doctorName}.`,

  // Reputação
  rating: '4,9',
  ratingScale: '5,0',

  // SEO e compartilhamento
  seoTitle: `${doctorShortName} | Urologista em ${city}`,
  seoDescription:
    `Avaliação urológica particular em ${city}, com discrição, atenção individualizada e orientação clara.`,
  socialDescription:
    `Atendimento urológico particular, reservado e individualizado em ${city} e por telemedicina.`,
  ogImageAlt: `${doctorName} — Urologia particular em ${city}`,

  // Dados estruturados e documentos
  medicalSpecialtySchema: 'Urologic',
  availableLanguageSchema: 'Portuguese',
  privacyUpdatedAt: '27 de julho de 2026',
})

export function getWhatsAppUrl(message = SITE.whatsappMessage) {
  const finalMessage = message || SITE.whatsappMessage
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(finalMessage)}`
}
