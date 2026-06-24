interface Differential {
  id: number
  icon: string
  title: string
  description: string
  featured?: boolean
}

const differentials: Differential[] = [
  {
    id: 1,
    icon: '🏗️',
    title: 'Projeto e Obra — Um Único Responsável',
    description:
      'Você não precisa coordenar arquiteto, engenheiro e construtora separados. Na Bernardi, do projeto ao alvará, da fundação ao acabamento, existe um único ponto de contato e uma única responsabilidade técnica. Menos risco, menos retrabalho, mais tranquilidade.',
    featured: true,
  },
  {
    id: 2,
    icon: '📋',
    title: 'Aprovação na Prefeitura Incluída',
    description:
      'Nossos projetos já saem do escritório prontos para aprovação. Conhecemos as exigências da Prefeitura de Taubaté — e antecipamos cada uma delas antes de submeter.',
  },
  {
    id: 3,
    icon: '📍',
    title: 'Locais. Somos de Taubaté.',
    description:
      'Não somos uma franquia. Conhecemos os bairros, as construtoras locais, os fornecedores confiáveis e as particularidades do solo e da legislação da cidade. Isso poupa tempo e evita surpresas.',
  },
  {
    id: 4,
    icon: '📅',
    title: 'Cronograma Real, Não Estimativa',
    description:
      'Na primeira reunião, definimos datas. O cronograma de projeto e obra é entregue por escrito e revisado com o cliente. Sem "depois a gente vê".',
  },
  {
    id: 5,
    icon: '⭐',
    title: '4.7 no Google — Sem Pedir Favor',
    description:
      '13 clientes avaliaram espontaneamente. A nota fala por si: quando o resultado é bom, as pessoas contam para todo mundo.',
  },
]

export default function Differentials() {
  const featured = differentials.find((d) => d.featured)
  const rest = differentials.filter((d) => !d.featured)

  return (
    <section id="diferenciais" className="section-py bg-bg">
      <div className="container-site">

        {/* Header */}
        <div className="mb-10">
          <h2
            className="font-heading font-semibold text-text-main mb-3"
            style={{ fontSize: 'clamp(26px, 4vw, 36px)' }}
          >
            Por Que Escolher a Bernardi
          </h2>
          <p className="font-body text-text-secondary text-base leading-relaxed">
            Arquitetura e engenharia sob o mesmo teto — e uma equipe que conhece cada rua de Taubaté.
          </p>
        </div>

        {/* Featured Card — largura total */}
        {featured && (
          <div
            className="rounded-card p-8 md:p-10 mb-6 flex flex-col md:flex-row items-start gap-5 animate-on-scroll"
            style={{ background: '#1B3A6B' }}
          >
            <span className="text-4xl flex-shrink-0" aria-hidden="true">{featured.icon}</span>
            <div>
              <h3 className="font-heading font-semibold text-white text-xl md:text-2xl mb-3">
                {featured.title}
              </h3>
              <p className="font-body text-white/85 text-sm md:text-base leading-[1.75]">
                {featured.description}
              </p>
            </div>
          </div>
        )}

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rest.map((diff) => (
            <article
              key={diff.id}
              className="rounded-card bg-white p-7 shadow-diff-card animate-on-scroll"
              style={{ borderTop: '4px solid #1B3A6B' }}
            >
              <span className="text-3xl mb-4 block" style={{ color: '#E8A020' }} aria-hidden="true">
                {diff.icon}
              </span>
              <h3 className="font-heading font-semibold text-text-main text-lg mb-3">
                {diff.title}
              </h3>
              <p className="font-body text-text-secondary text-sm leading-[1.75]">
                {diff.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
