import { whatsappUrl } from '@/config/site'

export default function About() {
  return (
    <section id="sobre" className="section-py bg-bg overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Texto — esquerda */}
          <div className="animate-on-scroll">
            {/* Label */}
            <p
              className="font-body font-semibold uppercase tracking-[3px] text-xs mb-5"
              style={{ color: '#C9A96E' }}
            >
              Quem assina cada projeto
            </p>

            <h2
              className="font-heading font-semibold text-text-main mb-6"
              style={{ fontSize: 'clamp(26px, 4vw, 38px)', lineHeight: 1.2 }}
            >
              Camila Bernardi,
              <br />
              <span style={{ color: '#C9A96E' }}>Arquiteta e Engenheira</span>
            </h2>

            <p className="font-body text-text-secondary text-base leading-[1.8] mb-5">
              Sou Camila Bernardi, arquiteta e engenheira formada e registrada no CREA.
              Atuo em Taubaté e em toda a região do Vale do Paraíba com projetos residenciais,
              comerciais e industriais — do estudo de viabilidade até a entrega da obra.
            </p>

            <p className="font-body text-text-secondary text-base leading-[1.8] mb-8">
              Cada projeto tem minha assinatura técnica e meu acompanhamento direto.
              Emito ART junto ao CREA e cuido de toda a documentação para aprovação
              na Prefeitura de Taubaté — para você não ter surpresas nem retrabalho.
            </p>

            {/* Credenciais */}
            <div className="flex flex-col gap-3 mb-10">
              {[
                'Arquiteta e Engenheira · CREA ativo',
                'Emissão de ART para projetos e obras',
                'Aprovação na Prefeitura de Taubaté incluída',
                'Fiscalização de obra com visitas técnicas',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: '#C9A96E' }}
                  >
                    ✓
                  </span>
                  <span className="font-body text-text-main text-sm leading-[1.7]">{item}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl('Olá, Camila! Vi seu perfil no site e gostaria de conversar sobre um projeto.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-wide px-8 py-4 rounded-btn transition-colors duration-200"
              style={{ background: '#2C2C2C', color: '#FFFFFF' }}
            >
              Falar com a Camila
            </a>
          </div>

          {/* Foto — direita */}
          <div className="relative animate-on-scroll flex justify-center lg:justify-end">
            {/* Moldura decorativa atrás da foto */}
            <div
              className="absolute"
              style={{
                width: '85%',
                height: '92%',
                bottom: '-20px',
                right: '-12px',
                border: '2px solid #C9A96E',
                borderRadius: '8px',
                opacity: 0.4,
              }}
            />
            {/* Foto */}
            <img
              src="/assets/camila-bernardi.jpg"
              alt="Camila Bernardi — Arquiteta e Engenheira em Taubaté"
              className="relative z-10 w-full object-cover object-top"
              style={{
                maxWidth: 440,
                maxHeight: 560,
                borderRadius: '8px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
              }}
            />
            {/* Badge flutuante */}
            <div
              className="absolute z-20 bottom-6 left-0 lg:-left-8 px-5 py-3 rounded-card"
              style={{
                background: '#2C2C2C',
                boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
              }}
            >
              <p className="font-body font-semibold text-white text-sm">Camila Bernardi</p>
              <p className="font-body text-xs mt-0.5" style={{ color: '#C9A96E' }}>
                Arquiteta · CREA ativo
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
