import { Phone, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react'
import { siteConfig, whatsappUrl, telUrl } from '@/config/site'

const navLinks = [
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#0D1B36' }}>
      {/* Main footer */}
      <div className="container-site py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Col 1 — Brand */}
          <div>
            <p className="font-heading font-bold text-white text-xl tracking-wide mb-1">
              BERNARDI
            </p>
            <p className="font-body text-white/50 text-sm mb-5">
              Arquitetura & Engenharia · Taubaté e Região
            </p>
            <p className="font-body text-white/60 text-sm leading-relaxed">
              Do projeto à obra — arquitetura e engenharia civil completa com uma
              única responsabilidade técnica. Atendemos Taubaté e todo o Vale do Paraíba.
            </p>
          </div>

          {/* Col 2 — Links */}
          <div>
            <p className="font-body font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Navegação
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-body text-white/60 text-sm hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contato */}
          <div>
            <p className="font-body font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Fale Conosco
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={telUrl}
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm font-body transition-colors"
              >
                <Phone size={15} className="text-accent flex-shrink-0" />
                {siteConfig.phoneFormatted}
              </a>

              <a
                href={whatsappUrl(siteConfig.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm font-body transition-colors"
              >
                <MessageCircle size={15} className="text-accent flex-shrink-0" />
                WhatsApp
              </a>

              {siteConfig.instagram && (
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm font-body transition-colors"
                >
                  <Instagram size={15} className="text-accent flex-shrink-0" />
                  Instagram
                </a>
              )}

              <div className="flex items-start gap-3 text-white/60 text-sm font-body">
                <MapPin size={15} className="text-accent flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>

              <div className="flex items-start gap-3 text-white/60 text-sm font-body">
                <Clock size={15} className="text-accent flex-shrink-0 mt-0.5" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: 'rgba(0,0,0,0.2)' }}>
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {siteConfig.company}. Todos os direitos reservados.
          </p>
          <p className="font-body text-white/30 text-xs">
            Site criado por{' '}
            <span className="text-accent/70">The Best</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
