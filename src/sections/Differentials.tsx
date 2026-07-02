interface Differential {
  id: number
  image: string
  title: string
  description: string
  featured?: boolean
}

const differentials: Differential[] = [
  {
    id: 1,
    image: '/assets/diff-projeto.jpg',
    title: 'Projeto e Obra — Um Único Responsável',
    description:
      'Você não precisa coordenar arquiteto, engenheiro e construtora separados. Na Bernardi, do projeto ao alvará, da fundação ao acabamento, existe um único ponto de contato e uma única responsabilidade técnica. Menos risco, menos retrabalho, mais tranquilidade.',
    featured: true,
  },
  {
    id: 2,
    image: '/assets/diff-prefeitura.jpg',
    title: 'Aprovação na Prefeitura Incluída',
    description:
      'Nossos projetos já saem do escritório prontos para aprovação. Conhecemos as exigências da Prefeitura de Taubaté — e antecipamos cada uma delas antes de submeter.',
  },
  {
    id: 3,
    image: '/assets/diff-local.jpg',
    title: 'Locais. Somos de Taubaté.',
    description:
      'Não somos uma franquia. Conhecemos os bairros, as construtoras locais, os fornecedores confiáveis e as particularidades do solo e da legislação da cidade. Isso poupa tempo e evita surpresas.',
  },
  {
    id: 4,
    image: '/assets/diff-cronograma.jpg',
    title: 'Cronograma Real, Não Estimativa',
    description:
      'Na primeira reunião, definimos datas. O cronograma de projeto e obra é entregue por escrito e revisado com o cliente. Sem "depois a gente vê".',
  },
  {
    id: 5,
    image: '/assets/diff-google.jpg',
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

        {/* Featured Card — largura total com imagem de fundo */}
        {featured && (
          <div
            className="rounded-card mb-6 overflow-hidden relative animate-on-scroll"
            style={{ minHeight: 220 }}
          >
            {/* Imagem de fundo */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${featured.image}')` }}
            />
            {/* Overlay azul-escuro */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(20,45,85,0.88)' }}
            />
            {/* Conteúdo */}
            <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-start gap-6">
              {/* Linha dourada vertical */}
              <div
                className="hidden md:block flex-shrink-0 w-1 self-stretch rounded-full"
                style={{ background: '#E8A020' }}
              />
              <div>
                <p
                  className="font-body font-semibold uppercase tracking-widest text-xs mb-3"
                  style={{ color: '#E8A020' }}
                >
                  Diferencial principal
                </p>
                <h3 className="font-heading font-semibold text-white text-xl md:text-2xl mb-3">
                  {featured.title}
                </h3>
                <p className="font-body text-white/80 text-sm md:text-base leading-[1.8]">
                  {featured.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Grid 2×2 — cards com imagem de fundo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rest.map((diff) => (
            <article
              key={diff.id}
              className="rounded-card overflow-hidden relative animate-on-scroll group"
              style={{ minHeight: 260 }}
            >
              {/* Imagem de fundo */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${diff.image}')` }}
              />
              {/* Overlay degradê — escurece de baixo para cima */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(14,28,55,0.97) 0%, rgba(14,28,55,0.80) 50%, rgba(14,28,55,0.50) 100%)',
                }}
              />
              {/* Linha dourada no topo */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: '#E8A020' }}
              />
              {/* Conteúdo — ancorado na base */}
              <div className="relative z-10 p-7 flex flex-col justify-end h-full" style={{ minHeight: 260 }}>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">
                  {diff.title}
                </h3>
                <p className="font-body text-white/75 text-sm leading-[1.75]">
                  {diff.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
