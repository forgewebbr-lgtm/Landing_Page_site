import { useEffect, useState } from 'react'
import Icon from '../ui/Icon'
import WhatsAppButton from '../ui/WhatsAppButton'
import doctorLogo from '../../assets/logos/logo-dr-antonio.svg'
import { SITE } from '../../config/site'
import { trackEvent } from '../../lib/tracking'

const links = [
  { href: '#sinais', label: 'Sinais de atenção' },
  { href: '#especialista', label: 'O especialista' },
  { href: '#consulta', label: 'Como é a consulta' },
  { href: '#avaliacoes', label: 'Avaliações' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1101px)')
    const closeMenuOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false)
    }

    desktopQuery.addEventListener('change', closeMenuOnDesktop)
    return () => desktopQuery.removeEventListener('change', closeMenuOnDesktop)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    if (menuOpen) window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="page-shell header-inner">
        <a href="#inicio" className="brand" aria-label="Voltar ao início" onClick={() => trackEvent('menu_click', { menu_location: 'brand', link_target: 'inicio' })}>
          <img
            className="brand-symbol"
            src={doctorLogo}
            alt=""
            aria-hidden="true"
          />
          <span className="brand-copy">
            <strong>{SITE.doctorName}</strong>
            <small>{SITE.specialtyShort}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => trackEvent('menu_click', { menu_location: 'desktop', link_target: link.href.slice(1) })}>{link.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <WhatsAppButton className="header-cta" location="header">Verificar disponibilidade</WhatsAppButton>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={25} />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="page-shell" aria-label="Navegação para celular">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => { setMenuOpen(false); trackEvent('menu_click', { menu_location: 'mobile', link_target: link.href.slice(1) }) }}>{link.label}</a>
          ))}
          <WhatsAppButton location="mobile_menu">Verificar disponibilidade</WhatsAppButton>
        </nav>
      </div>
    </header>
  )
}
