// ============================================================
// FONTE DA VERDADE — CAMILA BERNARDI ARQUITETA
// Altere aqui para atualizar em todo o site
// ============================================================

export const siteConfig = {
  company: 'Camila Bernardi Arquiteta',
  companyShort: 'Camila Bernardi',
  segment: 'Arquitetura e Engenharia',
  city: 'Taubaté',
  region: 'Taubaté e Vale do Paraíba',

  // Contato
  phone: '12988199491',
  phoneFormatted: '(12) 98819-9491',
  whatsappMessage: 'Olá, Camila! Vi o seu site e gostaria de solicitar um orçamento. Pode me atender?',
  whatsappMessageCTA: 'Olá, Camila! Vim pelo site e gostaria de solicitar um orçamento gratuito. Pode me atender?',

  // Endereço e horário
  address: 'Taubaté, SP',
  hours: 'Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h',

  // Redes sociais
  instagram: 'https://instagram.com/camilabernardiarquiteta',
  email: '',

  // Google My Business
  gmb: {
    rating: 4.7,
    reviewCount: 13,
    profileUrl: 'https://www.google.com/maps/search/Bernardi+Arquitetura+e+Engenharia+Taubaté',
  },

  // Métricas para o ProofBar
  proofBar: [
    { value: '4.7★', label: 'Avaliação no Google' },
    { value: '13+', label: 'Clientes Satisfeitos' },
    { value: 'Taubaté', label: 'e toda a região do Vale' },
    { value: 'Projeto + Obra', label: 'tudo com você' },
  ],

  // SEO
  seo: {
    title: 'Camila Bernardi Arquiteta · Taubaté e Vale do Paraíba',
    description:
      'Arquitetura, engenharia e fiscalização de obra em Taubaté — do projeto ao Habite-se, com ART/INSS e aprovação na prefeitura. Orçamento gratuito.',
    ogImage: '/og-image.jpg',
  },

  // Integrações
  googleAnalyticsId: null as string | null,
  metaPixelId: null as string | null,
  gtmId: null as string | null,
} as const

export const whatsappUrl = (message?: string) =>
  `https://wa.me/55${siteConfig.phone}?text=${encodeURIComponent(
    message ?? siteConfig.whatsappMessage
  )}`

export const telUrl = `tel:+55${siteConfig.phone}`
