import { useState, useEffect, useCallback } from 'react'
import { whatsappUrl } from '@/config/site'

type Category = 'Todos' | 'Residencial' | 'Comercial' | 'Regularização'

interface Project {
  id: number
  title: string
  category: Exclude<Category, 'Todos'>
  description: string
  image: string
  images: string[] // galeria completa para o lightbox
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Residência Unifamiliar',
    category: 'Residencial',
    description: 'Residência unifamiliar · 180m² · Taubaté',
    image: '/assets/portfolio-01.jpg',
    images: [
      '/assets/portfolio-01.jpg',
      '/assets/portfolio-01b.jpg',
      '/assets/portfolio-01c.jpg',
    ],
  },
  {
    id: 2,
    title: 'Residência Térrea',
    category: 'Residencial',
    description: 'Residência térrea · 140m² · Taubaté',
    image: '/assets/portfolio-02.jpg',
    images: [
      '/assets/portfolio-02.jpg',
      '/assets/portfolio-02b.jpg',
      '/assets/portfolio-02c.jpg',
    ],
  },
  {
    id: 3,
    title: 'Espaço Comercial',
    category: 'Comercial',
    description: 'Espaço comercial · 200m² · Taubaté',
    image: '/assets/portfolio-03.jpg',
    images: [
      '/assets/portfolio-03.jpg',
      '/assets/portfolio-03b.jpg',
      '/assets/portfolio-03c.jpg',
    ],
  },
  {
    id: 4,
    title: 'Galpão Industrial',
    category: 'Comercial',
    description: 'Galpão industrial · 500m² · Vale do Paraíba',
    image: '/assets/portfolio-04.jpg',
    images: [
      '/assets/portfolio-04.jpg',
      '/assets/portfolio-04b.jpg',
      '/assets/portfolio-04c.jpg',
    ],
  },
  {
    id: 5,
    title: 'Regularização Residencial',
    category: 'Regularização',
    description: 'Regularização + Habite-se · Taubaté',
    image: '/assets/portfolio-05.jpg',
    images: [
      '/assets/portfolio-05.jpg',
      '/assets/portfolio-05b.jpg',
      '/assets/portfolio-05c.jpg',
    ],
  },
  {
    id: 6,
    title: 'Sobrado Residencial',
    category: 'Residencial',
    description: 'Sobrado · 220m² · São José dos Campos',
    image: '/assets/portfolio-06.jpg',
    images: [
      '/assets/portfolio-06.jpg',
      '/assets/portfolio-06b.jpg',
      '/assets/portfolio-06c.jpg',
    ],
  },
]

const categories: Category[] = ['Todos', 'Residencial', 'Comercial', 'Regularização']

// ─── Lightbox ────────────────────────────────────────────────
interface LightboxProps {
  project: Project
  initialIndex: number
  onClose: () => void
}

function Lightbox({ project, initialIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex)
  // Filtra apenas imagens que existem (as que não carregaram ficam fora)
  const [validImages, setValidImages] = useState<string[]>([project.images[0]])

  useEffect(() => {
    // Testa quais imagens do projeto existem de fato
    const check = async () => {
      const results = await Promise.all(
        project.images.map(
          (src) =>
            new Promise<string | null>((resolve) => {
              const img = new Image()
              img.onload = () => resolve(src)
              img.onerror = () => resolve(null)
              img.src = src
            })
        )
      )
      const valid = results.filter(Boolean) as string[]
      setValidImages(valid.length > 0 ? valid : [project.images[0]])
    }
    check()
  }, [project])

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + validImages.length) % validImages.length),
    [validImages.length]
  )
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % validImages.length),
    [validImages.length]
  )

  // Navegação por teclado
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const safeIndex = Math.min(current, validImages.length - 1)

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{ background: 'rgba(10,15,30,0.96)' }}
      onClick={onClose}
    >
      {/* Conteúdo — impede propagação do clique */}
      <div
        className="relative flex flex-col items-center w-full max-w-5xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fechar */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-4 text-white/70 hover:text-white text-4xl leading-none transition-colors"
          aria-label="Fechar"
        >
          ×
        </button>

        {/* Imagem principal */}
        <div className="relative w-full flex items-center justify-center" style={{ maxHeight: '70vh' }}>
          <img
            key={validImages[safeIndex]}
            src={validImages[safeIndex]}
            alt={`${project.title} — foto ${safeIndex + 1}`}
            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            style={{ transition: 'opacity 0.25s ease' }}
          />

          {/* Seta esquerda */}
          {validImages.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-0 -translate-x-2 md:-translate-x-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl transition-all"
              style={{ background: 'rgba(27,58,107,0.85)' }}
              aria-label="Foto anterior"
            >
              ‹
            </button>
          )}

          {/* Seta direita */}
          {validImages.length > 1 && (
            <button
              onClick={next}
              className="absolute right-0 translate-x-2 md:translate-x-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl transition-all"
              style={{ background: 'rgba(27,58,107,0.85)' }}
              aria-label="Próxima foto"
            >
              ›
            </button>
          )}
        </div>

        {/* Info + contador */}
        <div className="mt-5 text-center">
          <p className="text-white font-semibold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {project.title}
          </p>
          <p className="text-white/60 text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            {project.description}
          </p>
          {validImages.length > 1 && (
            <p className="text-white/40 text-xs mt-3">
              {safeIndex + 1} / {validImages.length}
            </p>
          )}
        </div>

        {/* Thumbnails */}
        {validImages.length > 1 && (
          <div className="flex gap-2 mt-4 flex-wrap justify-center">
            {validImages.map((src, i) => (
              <button
                key={src}
                onClick={() => setCurrent(i)}
                className="rounded overflow-hidden transition-all duration-200"
                style={{
                  width: 56,
                  height: 42,
                  outline: i === safeIndex ? '2px solid #E8A020' : '2px solid transparent',
                  outlineOffset: 2,
                  opacity: i === safeIndex ? 1 : 0.5,
                }}
                aria-label={`Ver foto ${i + 1}`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Portfolio ───────────────────────────────────────────────
export default function Portfolio() {
  const [active, setActive] = useState<Category>('Todos')
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null)

  const filtered = active === 'Todos'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="section-py bg-bg">
      <div className="container-site">

        {/* Header */}
        <div className="mb-10">
          <h2
            className="font-heading font-semibold text-text-main mb-3"
            style={{ fontSize: 'clamp(26px, 4vw, 36px)' }}
          >
            Projetos Entregues em Taubaté e Região
          </h2>
          <p className="font-body text-text-secondary" style={{ fontSize: '17px', lineHeight: '1.7' }}>
            Residenciais, comerciais e regularizações — cada projeto com a mesma atenção técnica
            e prazos cumpridos.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`filter-pill ${active === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              onClick={() => setLightbox({ project, index: 0 })}
              className="group relative overflow-hidden rounded-card bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Imagem */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.description}`}
                  className="w-full h-full object-cover transition-transform duration-[350ms] ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const placeholder = target.parentElement?.querySelector('.img-placeholder')
                    if (placeholder) (placeholder as HTMLElement).style.display = 'flex'
                  }}
                />

                {/* Placeholder quando imagem não existe */}
                <div
                  className="img-placeholder absolute inset-0 bg-surface items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <div className="text-center text-text-secondary">
                    <div className="text-4xl mb-2">🏗️</div>
                    <p className="text-sm font-body font-semibold">{project.title}</p>
                    <p className="text-xs text-text-secondary mt-1">Foto em breve</p>
                  </div>
                </div>

                {/* Hover overlay — só escurece, sem texto (texto vai abaixo) */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: 'rgba(27,58,107,0.55)' }}
                >
                  <span
                    className="text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/50"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Ver fotos
                  </span>
                </div>
              </div>

              {/* Card body — sempre visível, com categoria e título */}
              <div className="px-4 py-3 flex items-center gap-3">
                <span
                  className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: 'rgba(27,58,107,0.08)',
                    color: '#1B3A6B',
                  }}
                >
                  {project.category}
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading font-semibold text-text-main text-sm truncate">
                    {project.title}
                  </h3>
                  <p className="font-body text-text-secondary text-xs truncate mt-0.5">
                    {project.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-14">
          <p className="font-body text-text-secondary mb-5 text-base">
            Tem um projeto em mente? Vamos conversar.
          </p>
          <a
            href={whatsappUrl('Olá! Vi os projetos no site e gostaria de um orçamento. Podem me atender?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-body font-semibold text-sm uppercase tracking-wide rounded-btn px-8 py-4 bg-primary text-white hover:bg-primary-hover transition-colors duration-200 shadow-btn hover:shadow-lg"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          project={lightbox.project}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
