import { siteConfig } from '@/config/site'

export default function ProofBar() {
  const metrics = siteConfig.proofBar

  return (
    <section className="bg-surface border-y border-border">
      <div className="container-site">
        <div
          className="grid grid-cols-2 md:grid-cols-4 py-10 md:py-0"
          style={{ minHeight: '120px' }}
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-8 md:py-10 text-center
                ${index < metrics.length - 1 ? 'border-b md:border-b-0 md:border-r border-border' : ''}
                ${index % 2 === 0 && index < metrics.length - 1 ? 'border-r md:border-r-0' : ''}
              `}
            >
              <span className="font-heading font-bold text-primary text-3xl md:text-4xl leading-none mb-2">
                {metric.value}
              </span>
              <span className="font-body text-text-secondary text-sm leading-tight max-w-[120px]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
