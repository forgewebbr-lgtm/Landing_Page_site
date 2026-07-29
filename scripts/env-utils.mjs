import fs from 'node:fs'
import path from 'node:path'

export function loadProjectEnv(root = process.cwd()) {
  const result = { ...process.env }

  for (const filename of ['.env', '.env.local', '.env.production', '.env.production.local']) {
    const filepath = path.join(root, filename)
    if (!fs.existsSync(filepath)) continue

    const content = fs.readFileSync(filepath, 'utf8')
    for (const rawLine of content.split(/\r?\n/)) {
      const line = rawLine.trim()
      if (!line || line.startsWith('#')) continue
      const separator = line.indexOf('=')
      if (separator < 1) continue
      const key = line.slice(0, separator).trim()
      const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '')
      if (!(key in result)) result[key] = value
    }
  }

  return result
}

export function normalizeSiteUrl(value) {
  return String(value || '').trim().replace(/\/+$/, '')
}
