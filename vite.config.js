import { defineConfig, loadEnv } from 'vite'
import { SITE } from './src/config/site.js'

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function normalizeSiteUrl(value) {
  return String(value || 'https://SEU-DOMINIO.com.br').trim().replace(/\/+$/, '')
}

function siteDataPlugin(siteUrl) {
  return {
    name: 'site-data-index-html',
    transformIndexHtml(html) {
      const physicianSchema = {
        '@context': 'https://schema.org',
        '@type': 'Physician',
        name: SITE.doctorName,
        url: `${siteUrl}/`,
        image: `${siteUrl}/og-image.jpg`,
        description: SITE.socialDescription,
        medicalSpecialty: SITE.medicalSpecialtySchema,
        areaServed: {
          '@type': 'City',
          name: SITE.city,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.streetAddress,
          addressLocality: SITE.city,
          addressRegion: SITE.state,
          postalCode: SITE.postalCode,
          addressCountry: 'BR',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SITE.whatsappInternational,
          contactType: 'atendimento',
          availableLanguage: SITE.availableLanguageSchema,
        },
      }

      const replacements = {
        '{{SITE_URL}}': siteUrl,
        '{{DOCTOR_NAME}}': escapeHtml(SITE.doctorName),
        '{{SEO_TITLE}}': escapeHtml(SITE.seoTitle),
        '{{SEO_DESCRIPTION}}': escapeHtml(SITE.seoDescription),
        '{{SOCIAL_DESCRIPTION}}': escapeHtml(SITE.socialDescription),
        '{{OG_IMAGE_ALT}}': escapeHtml(SITE.ogImageAlt),
        '{{PHYSICIAN_SCHEMA}}': JSON.stringify(physicianSchema, null, 2).replaceAll('<', '\\u003c'),
      }

      return Object.entries(replacements).reduce(
        (result, [token, value]) => result.replaceAll(token, value),
        html,
      )
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL)

  return {
    plugins: [siteDataPlugin(siteUrl)],
    esbuild: {
      jsx: 'automatic',
    },
    server: {
      host: true,
      port: 5173,
    },
  }
})
