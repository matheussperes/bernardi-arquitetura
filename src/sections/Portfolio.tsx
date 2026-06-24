import { useState } from 'react'
import { whatsappUrl } from '@/config/site'

type Category = 'Todos' | 'Residencial' | 'Comercial' | 'Regularização'

interface Project {
  id: number
  title: string
  category: Exclude<Category, 'Todos'>
  description: string
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Residência Unifamiliar',
    category: 'Residencial',
    description: 'Residência unifamiliar · 180m² · Taubaté',
    image: '/assets/portfolio-01.jpg',
    // PLACEHOLDER: substituir por foto real do projeto
  },
  {
    id: 2,
    title: 'Residência Térrea',
    category: 'Residencial',
    description: 'Residência térrea · 140m² · Taubaté',
    image: '/assets/portfolio-02.jpg',
    // PLACEHOLDER: substituir por foto real do projeto
  },
  {
    id: 3,
    title: 'Espaço Comercial',
    category: 'Comercial',
    description: 'Espaço comercial · 200m² · Taubaté',
    image: '/assets/portfolio-03.jpg',
    // PLACEHOLDER: substituir por foto real do projeto
  },
  {
    id: 4,
    title: 'Galpão Industrial',
    category: 'Comercial',
    description: 'Galpão industrial · 500m² · Vale do Paraíba',
    image: '/assets/portfolio-04.jpg',
    // PLACEHOLDER: substituir por foto real do projeto
  },
  {
    id: 5,
    title: 'Regularização Residencial',
    category: 'Regularização',
    description: 'Regularização + Habite-se · Taubaté',
    image: '/assets/portfolio-05.jpg',
    // PLACEHOLDER: substituir por foto real do projeto
  },
  {
    id: 6,
    title: 'Sobrado Residencial',
    category: 'Residencial',
    description: 'Sobrado · 220m² · São José dos Campos',
    image: '/assets/portfolio-06.jpg',
    // PLACEHOLDER: substituir por foto real do projeto
  },
]

const categories: Category[] = ['Todos', 'Residencial', 'Comercial', 'Regularização']

export default function Portfolio() {
  const [active, setActive] = useState<Category>('Todos')

  const filtered = active === 'Todos'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="section-py bg-bg">
      <div className="container-site">

        {/* Header */}
        <div className="mb-10">
          <h2 className="font-heading font-semibold text-text-main mb-3" style={{ fontSize: 'clamp(26px, 4vw, 36px)' }}>
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
              className="group relative overflow-hidden rounded-card bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                {/* PLACEHOLDER: foto do projeto — substituir src pelo caminho real */}
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.description}`}
                  className="w-full h-full object-cover transition-transform duration-[350ms] ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback placeholder enquanto as fotos reais não chegam
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    target.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                {/* Placeholder visual quando a imagem ainda não existe */}
                <div className="hidden absolute inset-0 bg-surface flex items-center justify-center">
                  <div className="text-center text-text-secondary">
                    <div className="text-4xl mb-2">🏗️</div>
                    <p className="text-sm font-body font-semibold">{project.title}</p>
                    <p className="text-xs text-text-secondary mt-1">Foto em breve</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(27,58,107,0.78)' }}
                >
                  <p className="font-heading font-semibold text-white text-lg text-center px-4 mb-2">
                    {project.title}
                  </p>
                  <p className="font-body text-white/80 text-sm text-center px-4">
                    {project.description}
                  </p>
                </div>

                {/* Category Tag */}
                <span className="absolute top-3 left-3 filter-pill text-xs py-1 px-2.5 bg-white/95 border-transparent text-primary z-10">
                  {project.category}
                </span>
              </div>

              {/* Card Body (visible without hover on mobile) */}
              <div className="p-5 md:hidden">
                <h3 className="font-heading font-semibold text-text-main text-base mb-1">
                  {project.title}
                </h3>
                <p className="font-body text-text-secondary text-sm">{project.description}</p>
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
    </section>
  )
}
