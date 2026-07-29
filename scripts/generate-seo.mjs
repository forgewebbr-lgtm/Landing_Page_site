import fs from 'node:fs'
import path from 'node:path'
import { loadProjectEnv, normalizeSiteUrl } from './env-utils.mjs'

const root = process.cwd()
const env = loadProjectEnv(root)
const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL || 'https://SEU-DOMINIO.com.br')
const publicDir = path.join(root, 'public')
const today = new Date().toISOString().slice(0, 10)

fs.mkdirSync(publicDir, { recursive: true })

fs.writeFileSync(path.join(publicDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`, 'utf8')

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`, 'utf8')

if (siteUrl.includes('SEU-DOMINIO')) {
  console.warn('[SEO] VITE_SITE_URL ainda está com o domínio de exemplo.')
} else {
  console.log(`[SEO] robots.txt e sitemap.xml gerados para ${siteUrl}`)
}
