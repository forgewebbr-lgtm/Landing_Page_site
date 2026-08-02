import { useEffect, useRef } from 'react'

import heroImage from '../../assets/web/hero-casal.png'
import heroMobileImage from '../../assets/web/hero-casal-mobile.webp'
import doctorImage from '../../assets/web/dr-antonio-real-sem-fundo.webp'

import Icon from '../ui/Icon'
import WhatsAppButton from '../ui/WhatsAppButton'
import DoctorPlaque from '../DoctorPlaque'

import { SITE } from '../../config/site'

import './Hero.css'

const trustItems = [
  {
    icon: 'shield',
    lines: ['Atendimento', 'particular'],
  },
  {
    icon: 'lock',
    lines: ['Discrição e', 'confidencialidade'],
  },
  {
    icon: 'pin',
    lines: SITE.serviceLocationLines,
  },
]

export default function Hero() {
  const sectionRef = useRef(null)

  // Parallax discreto: a iluminação do Hero se desloca um pouco mais devagar
  // que o scroll, dando profundidade à composição. Não altera a foto do
  // casal nem a placa — só as camadas de luz, que já são puramente decorativas.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const section = sectionRef.current
    if (!section) return undefined

    let frame = null

    const updateParallax = () => {
      frame = null
      const shift = Math.max(-14, Math.min(14, window.scrollY * -0.03))
      section.style.setProperty('--hero-parallax', `${shift}px`)
    }

    const onScroll = () => {
      if (frame !== null) return
      frame = window.requestAnimationFrame(updateParallax)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="hero-section hero-section--refined"
      id="inicio"
      data-track-section="hero"
    >
      <picture className="hero-media" aria-hidden="true">
        <source
          media="(max-width: 600px)"
          srcSet={heroMobileImage}
        />

        <img
          className="hero-bg"
          src={heroImage}
          alt=""
          width="1600"
          height="893"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <div className="hero-shade" aria-hidden="true" />

      <span
        className="hero-lighting hero-lighting--lamp"
        aria-hidden="true"
      />
      <span
        className="hero-lighting hero-lighting--couple"
        aria-hidden="true"
      />
      <span
        className="hero-lighting hero-lighting--vignette"
        aria-hidden="true"
      />

      <div className="page-shell hero-inner">
        <div className="hero-copy">
          <h1 className="hero-intro hero-intro--title">
            <span>Quando algo</span>
            <span>
              muda, <em>você é</em>
            </span>
            <span>
              <em>a primeira a perceber.</em>
            </span>
          </h1>

          <p className="hero-intro hero-intro--text">
            Uma avaliação urológica particular,
            <br />
            cuidadosa e discreta pode trazer clareza,
            <br />
            segurança e a orientação que ele precisa.
          </p>

          <div
            className="hero-trust hero-intro hero-intro--trust"
            aria-label="Diferenciais do atendimento"
          >
            {trustItems.map(({ icon, lines }) => (
              <div className="trust-item" key={icon}>
                <Icon name={icon} size={28} />

                <span>
                  {lines.map((text) => (
                    <span key={text}>{text}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>

          <div className="hero-action hero-intro hero-intro--action">
            <WhatsAppButton location="hero">
              Verificar disponibilidade
            </WhatsAppButton>

            <small>
              Atendimento particular e reservado pelo WhatsApp.
            </small>
          </div>
        </div>

        <aside
          className="hero-doctor-card hero-intro hero-intro--doctor"
          aria-label={`${SITE.doctorName}. ${SITE.specialty}.`}
        >
          <div className="hero-doctor-card__portrait">
            <img
              className="hero-doctor-card__photo"
              src={doctorImage}
              alt={SITE.doctorName}
              loading="eager"
              decoding="async"
            />

            <img
              className="hero-doctor-card__photo hero-doctor-card__photo--warm"
              src={doctorImage}
              alt=""
              aria-hidden="true"
              decoding="async"
            />

            <img
              className="hero-doctor-card__photo hero-doctor-card__photo--shade"
              src={doctorImage}
              alt=""
              aria-hidden="true"
              decoding="async"
            />
          </div>

          <span
            className="hero-doctor-card__base-fade"
            aria-hidden="true"
          />

          <div className="hero-doctor-card__plate">
            <DoctorPlaque />
          </div>
        </aside>
      </div>

      <span className="hero-bottom-accent" aria-hidden="true" />
    </section>
  )
}
