import { CONSENT_EVENT } from './consent'
import { trackEvent } from './tracking'

const metrics = {
  lcp: null,
  cls: 0,
  inp: null,
}

const sent = new Set()

function rating(name, value) {
  if (name === 'lcp') return value <= 2500 ? 'good' : value <= 4000 ? 'needs_improvement' : 'poor'
  if (name === 'cls') return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs_improvement' : 'poor'
  if (name === 'inp') return value <= 200 ? 'good' : value <= 500 ? 'needs_improvement' : 'poor'
  return 'unknown'
}

function sendMetric(name) {
  if (sent.has(name) || metrics[name] === null) return
  const rawValue = metrics[name]
  const value = name === 'cls' ? Number(rawValue.toFixed(4)) : Math.round(rawValue)
  const wasSent = trackEvent('web_vital', {
    metric_name: name,
    metric_value: value,
    metric_rating: rating(name, value),
  })
  if (wasSent) sent.add(name)
}

function flush() {
  sendMetric('lcp')
  sendMetric('cls')
  sendMetric('inp')
}

export function startWebVitals() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return

  try {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries.at(-1)
      if (lastEntry) metrics.lcp = lastEntry.startTime
    })
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
  } catch {
    // Métrica não disponível neste navegador.
  }

  try {
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (!entry.hadRecentInput) metrics.cls += entry.value
      })
    })
    clsObserver.observe({ type: 'layout-shift', buffered: true })
  } catch {
    // Métrica não disponível neste navegador.
  }

  try {
    const inpObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration && (metrics.inp === null || entry.duration > metrics.inp)) {
          metrics.inp = entry.duration
        }
      })
    })
    inpObserver.observe({ type: 'event', buffered: true, durationThreshold: 40 })
  } catch {
    // Métrica não disponível neste navegador.
  }

  const onVisibilityChange = () => {
    if (document.visibilityState === 'hidden') flush()
  }

  document.addEventListener('visibilitychange', onVisibilityChange)
  window.addEventListener('pagehide', flush)
  window.addEventListener(CONSENT_EVENT, flush)
}
