// ============================================================
// FONTE DA VERDADE — BERNARDI ARQUITETURA E ENGENHARIA
// Altere aqui para atualizar em todo o site
// ============================================================

export const siteConfig = {
  company: 'Bernardi Arquitetura e Engenharia',
  companyShort: 'Bernardi',
  segment: 'Arquitetura e Engenharia',
  city: 'Taubaté',
  region: 'Taubaté e Vale do Paraíba',

  // Contato
  phone: '12988199491', // sem formatação — usado nos links wa.me e tel:
  phoneFormatted: '(12) 98819-9491',
  whatsappMessage: 'Olá! Vi o site de vocês e gostaria de solicitar um orçamento. Podem me atender?',
  whatsappMessageCTA: 'Olá! Vim pelo site e gostaria de solicitar um orçamento gratuito. Podem me atender?',

  // Endereço e horário
  address: 'Taubaté, SP',
  hours: 'Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h',

  // Redes sociais
  instagram: '', // TODO: inserir URL do Instagram quando criado
  email: '', // TODO: inserir e-mail de contato

  // Google My Business
  gmb: {
    rating: 4.7,
    reviewCount: 13,
    profileUrl: 'https://www.google.com/maps/search/Bernardi+Arquitetura+e+Engenharia+Taubaté',
  },

  // Métricas para o ProofBar
  // TODO: substituir pelos dados reais quando disponíveis
  proofBar: [
    { value: '4.7★', label: 'Avaliação no Google' },
    { value: '13+', label: 'Clientes Satisfeitos' },
    { value: 'Taubaté', label: 'e toda a região do Vale' },
    { value: 'Projeto + Obra', label: 'tudo na mesma empresa' },
  ],

  // SEO
  seo: {
    title: 'Bernardi Arquitetura e Engenharia · Taubaté e Vale do Paraíba',
    description:
      'Projetos de arquitetura e engenharia civil em Taubaté — do projeto à obra, sob uma única responsabilidade técnica. Aprovação na prefeitura incluída. Orçamento gratuito.',
    ogImage: '/og-image.jpg', // TODO: criar imagem OG 1200×630px
  },

  // Integrações — preencher quando disponíveis
  googleAnalyticsId: null as string | null, // ex: 'G-XXXXXXXXXX'
  metaPixelId: null as string | null,       // ex: '1234567890123'
  gtmId: null as string | null,             // ex: 'GTM-XXXXXXX'
} as const

// URLs geradas automaticamente
export const whatsappUrl = (message?: string) =>
  `https://wa.me/55${siteConfig.phone}?text=${encodeURIComponent(
    message ?? siteConfig.whatsappMessage
  )}`

export const telUrl = `tel:+55${siteConfig.phone}`
