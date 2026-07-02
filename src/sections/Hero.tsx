import { whatsappUrl } from '@/config/site'

export default function Hero() {
  const handleScrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1C1C1C 55%, #2C2C2C 100%)' }}
    >
      {/* Background image — right side */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[48%] opacity-20 md:opacity-100"
        aria-hidden="true"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/hero-obra.jpg')" }}
        />
        {/* Overlay gradiente — integra imagem com fundo grafite */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #1C1C1C 0%, rgba(28,28,28,0.6) 40%, rgba(28,28,28,0.2) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="container-site relative z-10 py-32 md:py-0">
        <div className="max-w-[600px]">

          {/* Supertítulo */}
          <p
            className="font-body font-semibold uppercase tracking-[3px] text-sm mb-5 animate-fade-in"
            style={{ color: '#C9A96E', animationDelay: '0ms' }}
          >
            Taubaté · Arquitetura & Engenharia
          </p>

          {/* Headline */}
          <h1
            className="font-heading font-bold text-white leading-[1.15] mb-6 animate-fade-in"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', animationDelay: '100ms' }}
          >
            Do Projeto à Obra — Tudo sob Uma Única Responsabilidade
          </h1>

          {/* Subheadline */}
          <p
            className="font-body text-white/90 leading-[1.65] mb-8 animate-fade-in"
            style={{ fontSize: 'clamp(15px, 2vw, 18px)', animationDelay: '200ms' }}
          >
            Projetos residenciais, comerciais e industriais com aprovação na prefeitura,
            acompanhamento de obra e entrega dentro do prazo. Atendemos Taubaté e toda
            a região do Vale do Paraíba.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in"
            style={{ animationDelay: '300ms' }}
          >
            <a
              href={whatsappUrl('Olá, Camila! Vi o seu site e gostaria de solicitar um orçamento. Pode me atender?')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-body font-semibold text-sm uppercase tracking-wide rounded-btn px-8 py-4 text-white transition-all duration-200 shadow-btn hover:shadow-lg"
              style={{ background: '#C9A96E' }}
            >
              Solicitar Orçamento Grátis
            </a>

            <a
              href="#portfolio"
              onClick={handleScrollToPortfolio}
              className="inline-flex items-center justify-center font-body font-semibold text-sm uppercase tracking-wide rounded-btn px-8 py-4 border-2 border-white/50 text-white hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              Ver nossos projetos ↓
            </a>
          </div>

          {/* Prova Social */}
          <div
            className="flex items-center gap-2 font-body text-white/80 text-sm animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            <span style={{ color: '#C9A96E' }}>⭐</span>
            <span>4.7 no Google · 13 clientes avaliaram · Taubaté e região</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  )
}
