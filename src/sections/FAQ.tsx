import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'Qual o prazo para ter um projeto de arquitetura pronto?',
    answer:
      'Depende da complexidade, mas projetos residenciais de médio porte saem em 30 a 60 dias. Na primeira conversa, te passamos um prazo realista com base nas suas necessidades — sem enrolação.',
  },
  {
    id: 2,
    question: 'O projeto já vem pronto para aprovação na prefeitura?',
    answer:
      'Sim. Nossos projetos já seguem as exigências da Prefeitura de Taubaté. Entregamos toda a documentação necessária para protocolo, e acompanhamos o processo de aprovação.',
  },
  {
    id: 3,
    question: 'Vocês fazem regularização de imóvel já construído?',
    answer:
      'Fazemos. Levantamento, projeto conforme a obra, laudo técnico e acompanhamento até o Habite-se. Se o imóvel precisa ser regularizado, é exatamente o que fazemos.',
  },
  {
    id: 4,
    question: 'Qual o valor de um projeto de arquitetura?',
    answer:
      'Varia conforme metragem, tipo (residencial, comercial, industrial) e escopo (só projeto ou projeto + execução). O orçamento é gratuito e sem compromisso — nos chame no WhatsApp e te enviamos em até 24 horas.',
  },
  {
    id: 5,
    question: 'Vocês fazem a obra também ou só o projeto?',
    answer:
      'Fazemos os dois. Você pode contratar só o projeto, ou o pacote completo de projeto + administração de obra. Nossa recomendação é sempre o pacote completo — menos risco para você e mais controle para nós.',
  },
  {
    id: 6,
    question: 'Atendem fora de Taubaté?',
    answer:
      'Sim, atendemos toda a região do Vale do Paraíba — São José dos Campos, Pindamonhangaba, Guaratinguetá e municípios próximos. Fale conosco e confirmamos a cobertura para sua cidade.',
  },
  {
    id: 7,
    question: 'Como funciona o processo depois que eu entro em contato?',
    answer:
      '1) Você nos manda uma mensagem; 2) Agendamos uma conversa rápida para entender o projeto; 3) Enviamos proposta com escopo, prazo e valor; 4) Com aprovação, iniciamos o projeto. Simples assim.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => setOpenId(openId === id ? null : id)

  return (
    <section id="faq" className="section-py bg-surface">
      <div className="container-site">

        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-heading font-semibold text-text-main mb-3"
            style={{ fontSize: 'clamp(26px, 4vw, 36px)' }}
          >
            Perguntas Frequentes
          </h2>
          <p className="font-body text-text-secondary text-base">
            Tire suas dúvidas antes de nos chamar — mas pode nos chamar também.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-faq mx-auto">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="border-b border-border last:border-b-0"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span
                    className={`font-body font-semibold text-base transition-colors duration-200 ${
                      isOpen ? 'text-primary' : 'text-text-main'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 text-primary transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(0deg)' : '' }}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  className={`faq-answer ${isOpen ? 'open' : ''}`}
                >
                  <p className="font-body text-text-secondary text-sm leading-[1.75] pb-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
