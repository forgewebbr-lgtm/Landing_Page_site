import { loadProjectEnv, normalizeSiteUrl } from './env-utils.mjs'
import { SITE } from '../src/config/site.js'

const env = loadProjectEnv(process.cwd())
const strict = process.argv.includes('--strict')
const errors = []
const warnings = []
const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL)

function productionRequirement(message) {
  if (strict) errors.push(message)
  else warnings.push(message)
}

if (!SITE.doctorName?.trim()) errors.push('Defina SITE.doctorName em src/config/site.js.')
if (!SITE.crm?.trim()) errors.push('Defina SITE.crm em src/config/site.js.')
if (!SITE.rqe?.trim()) errors.push('Defina SITE.rqe em src/config/site.js.')
if (!/^55\d{10,11}$/.test(SITE.whatsappNumber || '')) {
  errors.push('SITE.whatsappNumber deve conter somente dígitos no formato internacional, começando por 55.')
}
if (!SITE.whatsappMessage?.includes(SITE.doctorName)) {
  errors.push('SITE.whatsappMessage deve usar o mesmo nome definido em SITE.doctorName.')
}

if (!/^https:\/\//.test(siteUrl) || siteUrl.includes('SEU-DOMINIO')) {
  errors.push('Defina VITE_SITE_URL com o domínio HTTPS definitivo.')
}

const gtm = env.VITE_GTM_ID || ''
const ga4 = env.VITE_GA4_MEASUREMENT_ID || ''
const ads = env.VITE_GOOGLE_ADS_ID || ''
const adsLabel = env.VITE_GOOGLE_ADS_CONVERSION_LABEL || ''
const meta = env.VITE_META_PIXEL_ID || ''

if (gtm && !/^GTM-[A-Z0-9]+$/i.test(gtm)) errors.push('VITE_GTM_ID está em formato inválido.')
if (ga4 && !/^G-[A-Z0-9]+$/i.test(ga4)) errors.push('VITE_GA4_MEASUREMENT_ID está em formato inválido.')
if (ads && !/^AW-\d+$/i.test(ads)) errors.push('VITE_GOOGLE_ADS_ID está em formato inválido.')
if (meta && !/^\d{8,20}$/.test(meta)) errors.push('VITE_META_PIXEL_ID está em formato inválido.')

if (!gtm && !ga4) {
  productionRequirement('Configure VITE_GTM_ID ou VITE_GA4_MEASUREMENT_ID antes da publicação para não perder a medição da campanha.')
}

if (gtm && (ga4 || ads || meta)) {
  warnings.push('Com GTM configurado, os IDs diretos são ignorados pelo código para evitar eventos duplicados. Administre GA4/Ads/Meta dentro do contêiner GTM.')
}

if (!gtm && ads && !adsLabel) {
  productionRequirement('Google Ads possui ID direto, mas falta VITE_GOOGLE_ADS_CONVERSION_LABEL para registrar o clique no WhatsApp como conversão.')
}

if (!gtm && adsLabel && !ads) {
  errors.push('VITE_GOOGLE_ADS_CONVERSION_LABEL foi informado sem VITE_GOOGLE_ADS_ID.')
}

warnings.forEach((message) => console.warn(`[aviso] ${message}`))
errors.forEach((message) => console.error(`[erro] ${message}`))

if (errors.length && strict) process.exit(1)
if (!errors.length) console.log('Configuração validada sem erros de formato.')
else console.warn('A validação encontrou pendências. Use --strict para bloquear a publicação.')
