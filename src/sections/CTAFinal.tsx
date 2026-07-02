import { useState } from 'react'
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react'
import { siteConfig, whatsappUrl, telUrl } from '@/config/site'

type ProjectType = '' | 'Residencial' | 'Comercial' | 'Industrial' | 'Regularização' | 'Outro'

export default function CTAFinal() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    projectType: '' as ProjectType,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    const msg = `Olá, Camila! Meu nome é ${form.name}. Vim pelo site e gostaria de solicitar um orçamento gratuito.${
      form.projectType ? ` Tipo de projeto: ${form.projectType}.` : ''
    } Meu WhatsApp é ${form.phone}. Pode me atender?`
    window.open(whatsappUrl(msg), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="contato" className="section-py" style={{ background: '#1C1C1C' }}>
      <div className="container-site">

        {/* Headline */}
        <div className="text-center mb-12">
          {/* Linha decorativa */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12" style={{ background: '#C9A96E' }} />
            <span
              className="font-body font-semibold uppercase tracking-[3px] text-xs"
              style={{ color: '#C9A96E' }}
            >
              Vamos conversar
            </span>
            <div className="h-px w-12" style={{ background: '#C9A96E' }} />
          </div>

          <h2
            className="font-heading font-bold text-white mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Pronto para Iniciar seu Projeto?
          </h2>
          <p
            className="font-body text-white/75 max-w-xl mx-auto"
            style={{ fontSize: '18px', lineHeight: '1.6' }}
          >
            Fale comigo agora — orçamento gratuito e sem compromisso.
            Respondo em até 2 horas.
          </p>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">

          {/* Coluna esquerda: WhatsApp */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <a
              href={whatsappUrl(siteConfig.whatsappMessageCTA)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body font-semibold text-base rounded-btn px-10 py-4 transition-all duration-200 shadow-lg w-full justify-center"
              style={{ background: '#C9A96E', color: '#FFFFFF' }}
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>

            <p className="text-white/50 text-sm text-center lg:text-left font-body">
              Clique e inicie a conversa diretamente — sem formulário, sem espera.
            </p>

            <div className="flex flex-col gap-3 w-full">
              <a
                href={telUrl}
                className="flex items-center gap-3 text-white/70 hover:text-white text-sm font-body transition-colors"
              >
                <Phone size={16} style={{ color: '#C9A96E' }} className="flex-shrink-0" />
                {siteConfig.phoneFormatted}
              </a>
              <div className="flex items-center gap-3 text-white/70 text-sm font-body">
                <MapPin size={16} style={{ color: '#C9A96E' }} className="flex-shrink-0" />
                {siteConfig.address} — Atendemos o Vale do Paraíba
              </div>
              <div className="flex items-start gap-3 text-white/70 text-sm font-body">
                <Clock size={16} style={{ color: '#C9A96E' }} className="flex-shrink-0 mt-0.5" />
                {siteConfig.hours}
              </div>
            </div>
          </div>

          {/* Coluna direita: Formulário */}
          <div
            className="rounded-card p-8"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,169,110,0.2)' }}
          >
            {submitted ? (
              <div className="text-center py-6">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading font-semibold text-white text-xl mb-2">
                  Mensagem enviada!
                </h3>
                <p className="font-body text-white/70 text-sm">
                  Redirecionamos você para o WhatsApp. Em breve entrarei em contato.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-heading font-semibold text-white text-lg mb-2">
                  Solicitar Orçamento
                </h3>

                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="font-body text-white/60 text-xs font-semibold uppercase tracking-wide">
                    Seu Nome *
                  </label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Seu nome completo"
                    value={form.name} onChange={handleChange} required
                    className="cta-input" autoComplete="name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="font-body text-white/60 text-xs font-semibold uppercase tracking-wide">
                    WhatsApp *
                  </label>
                  <input
                    id="phone" name="phone" type="tel"
                    placeholder="(12) 9 0000-0000"
                    value={form.phone} onChange={handleChange} required
                    className="cta-input" autoComplete="tel"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="projectType" className="font-body text-white/60 text-xs font-semibold uppercase tracking-wide">
                    Tipo de Projeto
                  </label>
                  <select
                    id="projectType" name="projectType"
                    value={form.projectType} onChange={handleChange}
                    className="cta-input cta-select"
                  >
                    <option value="">Selecione (opcional)</option>
                    <option value="Residencial">Residencial</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Regularização">Regularização de Imóvel</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full inline-flex items-center justify-center font-body font-semibold text-sm uppercase tracking-wide rounded-btn px-6 py-4 text-white transition-colors duration-200"
                  style={{ background: '#C9A96E' }}
                >
                  Solicitar Orçamento Grátis
                </button>

                <p className="text-white/30 text-xs text-center font-body">
                  Ao enviar, você será redirecionado para o WhatsApp.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
