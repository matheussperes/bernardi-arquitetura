import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig, whatsappUrl } from '@/config/site'

const navLinks = [
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const closeDrawer = () => setDrawerOpen(false)

  const handleNavClick = (href: string) => {
    closeDrawer()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled ? 'bg-white header-scrolled' : 'bg-transparent'
        }`}
        style={{ height: '72px' }}
      >
        <div
          className="container-site h-full flex items-center justify-between"
        >
          {/* Logo */}
          <a href="#inicio" onClick={() => handleNavClick('#inicio')} className="flex flex-col leading-none">
            <span
              className={`logo-text font-heading font-bold text-xl tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              BERNARDI
            </span>
            <span
              className={`logo-sub font-body text-xs transition-colors duration-300 ${
                scrolled ? 'text-text-secondary' : 'text-white/70'
              }`}
            >
              Arquitetura & Engenharia
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`nav-link font-body font-semibold text-sm transition-colors duration-200 hover:text-accent border-b-2 border-transparent hover:border-accent pb-0.5 ${
                  scrolled ? 'text-text-main' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={whatsappUrl(siteConfig.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`header-cta hidden md:inline-flex items-center font-body font-semibold text-sm rounded-btn transition-all duration-200 ${
              scrolled
                ? 'bg-primary text-white hover:bg-primary-hover px-5 py-2.5'
                : 'bg-white/10 text-white border border-white/40 hover:bg-white/20 px-5 py-2.5'
            }`}
          >
            Solicitar Orçamento
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menu de navegação"
          >
            <Menu
              size={26}
              className={scrolled ? 'text-primary' : 'text-white'}
            />
          </button>
        </div>
      </header>

      {/* ── MOBILE DRAWER OVERLAY ── */}
      <div
        className={`drawer-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* ── MOBILE DRAWER ── */}
      <div className={`drawer ${drawerOpen ? 'open' : ''}`} role="dialog" aria-label="Menu de navegação">
        <div className="flex justify-between items-center mb-10">
          <span className="font-heading font-bold text-white text-lg tracking-wide">BERNARDI</span>
          <button onClick={closeDrawer} aria-label="Fechar menu">
            <X size={24} className="text-white" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="font-body font-semibold text-white/90 text-base py-3 border-b border-white/10 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl(siteConfig.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeDrawer}
          className="mt-8 flex items-center justify-center w-full bg-accent text-white font-body font-semibold text-sm rounded-btn py-3 hover:bg-accent/90 transition-colors"
        >
          Solicitar Orçamento
        </a>

        <div className="mt-8 text-white/50 text-sm font-body">
          <p>{siteConfig.phoneFormatted}</p>
          <p className="mt-1">{siteConfig.hours}</p>
        </div>
      </div>
    </>
  )
}
