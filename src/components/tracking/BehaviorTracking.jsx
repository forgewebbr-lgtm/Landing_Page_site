import { useEffect } from 'react'
import { CONSENT_EVENT } from '../../lib/consent'
import { trackEvent } from '../../lib/tracking'

const SCROLL_THRESHOLDS = [25, 50, 75, 90]

function inViewport(element) {
  const rect = element.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15
}

export default function BehaviorTracking() {
  useEffect(() => {
    const seenSections = new Set()
    const sentScroll = new Set()
    const startTime = Date.now()
    let engagementSent = false

    const trackSection = (element) => {
      const sectionName = element.dataset.trackSection
      if (!sectionName || seenSections.has(sectionName)) return
      const sent = trackEvent('section_view', { section_name: sectionName })
      if (sent) seenSections.add(sectionName)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) trackSection(entry.target)
      })
    }, { threshold: 0.35 })

    const sections = [...document.querySelectorAll('[data-track-section]')]
    sections.forEach((section) => observer.observe(section))

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable <= 0) return
      const depth = Math.round((window.scrollY / scrollable) * 100)

      SCROLL_THRESHOLDS.forEach((threshold) => {
        if (depth >= threshold && !sentScroll.has(threshold)) {
          const sent = trackEvent('scroll_depth', { percent_scrolled: threshold })
          if (sent) sentScroll.add(threshold)
        }
      })
    }

    const sendEngagement = () => {
      if (engagementSent || Date.now() - startTime < 30000) return
      engagementSent = trackEvent('engaged_30s', { engagement_time_seconds: 30 })
    }

    const timer = window.setTimeout(sendEngagement, 30000)

    const onConsentUpdated = () => {
      sections.filter(inViewport).forEach(trackSection)
      onScroll()
      sendEngagement()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener(CONSENT_EVENT, onConsentUpdated)
    onScroll()

    return () => {
      observer.disconnect()
      window.clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener(CONSENT_EVENT, onConsentUpdated)
    }
  }, [])

  return null
}
