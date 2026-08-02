import { useEffect, useRef, useState } from 'react'

const DEFAULT_THRESHOLD = 0.01
const DEFAULT_ROOT_MARGIN = '0px 0px -24% 0px'
const DEFAULT_TRIGGER_LINE = 0.76
const DEFAULT_BASE_DELAY = 90

function isInsideTriggerZone(element, triggerLine = DEFAULT_TRIGGER_LINE) {
  const rect = element.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight

  return rect.bottom > 0 && rect.top <= viewportHeight * triggerLine
}

export default function Reveal({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  baseDelay = DEFAULT_BASE_DELAY,
  duration = 1320,
  distance = 18,
  blur = 0,
  threshold = DEFAULT_THRESHOLD,
  rootMargin = DEFAULT_ROOT_MARGIN,
  triggerLine = DEFAULT_TRIGGER_LINE,
  variant = 'up',
  style,
  ...props
}) {
  const elementRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [settled, setSettled] = useState(false)
  const effectiveDelay = Math.max(0, baseDelay + delay)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    let frameOne
    let frameTwo
    let observer
    let cleanupFallback
    let settleTimer
    let revealed = false
    let revealScheduled = false

    const reveal = () => {
      if (revealed) return

      revealed = true
      setVisible(true)
      settleTimer = window.setTimeout(
        () => setSettled(true),
        effectiveDelay + duration + 80,
      )

      if (observer) observer.unobserve(element)
      if (cleanupFallback) cleanupFallback()
    }

    // Mantém o estado inicial oculto por dois quadros antes de iniciar a
    // transição. Isso evita que a animação seja concluída antes da primeira
    // pintura visível, especialmente após recarregar ou navegar por âncoras.
    const revealAfterPaint = () => {
      if (revealScheduled || revealed) return
      revealScheduled = true

      frameOne = window.requestAnimationFrame(() => {
        frameTwo = window.requestAnimationFrame(reveal)
      })
    }

    if (isInsideTriggerZone(element, triggerLine)) {
      revealAfterPaint()
    } else if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) revealAfterPaint()
        },
        {
          threshold,
          rootMargin,
        },
      )

      observer.observe(element)
    } else {
      const checkPosition = () => {
        if (isInsideTriggerZone(element, triggerLine)) revealAfterPaint()
      }

      window.addEventListener('scroll', checkPosition, { passive: true })
      window.addEventListener('resize', checkPosition)
      cleanupFallback = () => {
        window.removeEventListener('scroll', checkPosition)
        window.removeEventListener('resize', checkPosition)
      }

      checkPosition()
    }

    return () => {
      if (frameOne) window.cancelAnimationFrame(frameOne)
      if (frameTwo) window.cancelAnimationFrame(frameTwo)
      if (observer) observer.disconnect()
      if (cleanupFallback) cleanupFallback()
      if (settleTimer) window.clearTimeout(settleTimer)
    }
  }, [duration, effectiveDelay, rootMargin, threshold, triggerLine])

  const classes = [
    'reveal',
    `reveal--${variant}`,
    visible ? 'reveal--visible' : '',
    settled ? 'reveal--settled' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <Component
      ref={elementRef}
      className={classes}
      data-reveal-state={visible ? 'visible' : 'hidden'}
      style={{
        '--reveal-delay': `${effectiveDelay}ms`,
        '--reveal-duration': `${duration}ms`,
        '--reveal-distance': `${distance}px`,
        '--reveal-blur': `${blur}px`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
