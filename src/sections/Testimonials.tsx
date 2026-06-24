import { siteConfig } from '@/config/site'

interface Testimonial {
  id: number
  text: string
  name: string
  context: string
  stars: number
}

// TODO: substituir pelos 3 melhores reviews reais do Google da Bernardi
// (dado público — autorização implícita para uso de reviews do GMB)
const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'Ótimo atendimento e profissionalismo. O projeto ficou exatamente como queríamos e a aprovação na prefeitura foi rápida. Recomendo muito!',
    name: 'Cliente Bernardi',
    context: 'Projeto residencial · Taubaté',
    stars: 5,
    // PLACEHOLDER: substituir por depoimento real com nome do cliente
  },
  {
    id: 2,
    text: 'Equipe muito competente e atenciosa. Desde o primeiro contato até a entrega final, tudo foi transparente e dentro do prazo combinado.',
    name: 'Cliente Bernardi',
    context: 'Projeto comercial · Taubaté',
    stars: 5,
    // PLACEHOLDER: substituir por depoimento real com nome do cliente
  },
  {
    id: 3,
    text: 'Precisávamos regularizar um imóvel antigo e a Bernardi cuidou de tudo. Processo tranquilo, sem surpresas. Valeu cada centavo investido.',
    name: 'Cliente Bernardi',
    context: 'Regularização · Vale do Paraíba',
    stars: 5,
    // PLACEHOLDER: substituir por depoimento real com nome do cliente
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-accent text-sm">⭐</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-py bg-surface">
      <div className="container-site">

        {/* Header */}
        <div className="mb-12">
          <h2
            className="font-heading font-semibold text-text-main mb-3"
            style={{ fontSize: 'clamp(26px, 4vw, 36px)' }}
          >
            O Que Dizem Nossos Clientes
          </h2>
          <p className="font-body text-text-secondary text-base">
            Avaliação real no Google:{' '}
            <a
              href={siteConfig.gmb.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:underline"
            >
              ⭐ {siteConfig.gmb.rating} com {siteConfig.gmb.reviewCount} avaliações verificadas
            </a>
          </p>
        </div>

        {/* Cards — desktop: 3 colunas | mobile: scroll horizontal */}
        <div className="testimonials-carousel grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-white rounded-card shadow-testimonial p-7 flex flex-col gap-4 animate-on-scroll"
              style={{ borderLeft: '4px solid #E8A020' }}
            >
              {/* Aspas decorativas */}
              <span
                className="font-heading font-bold text-accent leading-none select-none"
                style={{ fontSize: '48px', lineHeight: 1, opacity: 0.25 }}
                aria-hidden="true"
              >
                "
              </span>

              {/* Texto do depoimento */}
              <p className="font-body text-text-main text-sm leading-[1.75] italic flex-1">
                {t.text}
              </p>

              {/* Divisor */}
              <hr className="border-border" />

              {/* Rodapé do card */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-body font-semibold text-primary text-sm">{t.name}</p>
                  <p className="font-body text-text-secondary text-xs mt-0.5">{t.context}</p>
                </div>
                <StarRating count={t.stars} />
              </div>
            </article>
          ))}
        </div>

        {/* Nota de rodapé */}
        <p className="text-center font-body text-text-secondary text-xs mt-8 opacity-70">
          {/* NOTA DE IMPLEMENTAÇÃO: substituir os depoimentos acima pelos reviews reais do Google antes do lançamento */}
          Avaliações verificadas no Google Meu Negócio · Bernardi Arquitetura e Engenharia
        </p>
      </div>
    </section>
  )
}
