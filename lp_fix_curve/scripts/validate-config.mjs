import { loadProjectEnv, normalizeSiteUrl } from './env-utils.mjs'
import { SITE } from '../src/config/site.js'

const env = loadProjectEnv(process.cwd())
const strict = process.argv.includes('--strict')
const errors = []
const warnings = []
const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL)

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
const meta = env.VITE_META_PIXEL_ID || ''

if (gtm && !/^GTM-[A-Z0-9]+$/i.test(gtm)) errors.push('VITE_GTM_ID está em formato inválido.')
if (ga4 && !/^G-[A-Z0-9]+$/i.test(ga4)) errors.push('VITE_GA4_MEASUREMENT_ID está em formato inválido.')
if (ads && !/^AW-\d+$/i.test(ads)) errors.push('VITE_GOOGLE_ADS_ID está em formato inválido.')
if (meta && !/^\d{8,20}$/.test(meta)) errors.push('VITE_META_PIXEL_ID está em formato inválido.')

if (!gtm && !ga4) warnings.push('Nenhum GTM ou GA4 foi configurado; a interface de consentimento funcionará, mas não haverá medição externa.')
if (gtm && (ga4 || ads || meta)) warnings.push('Com GTM configurado, os IDs diretos são ignorados para evitar eventos duplicados.')
if (ads && !env.VITE_GOOGLE_ADS_CONVERSION_LABEL) warnings.push('Google Ads possui ID, mas falta VITE_GOOGLE_ADS_CONVERSION_LABEL.')

warnings.forEach((message) => console.warn(`[aviso] ${message}`))
errors.forEach((message) => console.error(`[erro] ${message}`))

if (errors.length && strict) process.exit(1)
if (!errors.length) console.log('Configuração validada sem erros de formato.')
else console.warn('A validação encontrou pendências. Use --strict para bloquear a publicação.')
