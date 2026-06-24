import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        surface: '#F4F5F7',
        primary: '#1B3A6B',
        'primary-hover': '#142D55',
        'text-main': '#1A1A2E',
        'text-secondary': '#5A6478',
        accent: '#E8A020',
        whatsapp: '#25D366',
        border: '#DDE1EA',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['52px', { lineHeight: '1.2', fontWeight: '700' }],
        'hero-mobile': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'section-title': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'section-title-mobile': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'card-title': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
      },
      spacing: {
        'section': '96px',
        'section-mobile': '60px',
      },
      maxWidth: {
        'container': '1200px',
        'faq': '760px',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.14)',
        'diff-card': '0 2px 8px rgba(0,0,0,0.06)',
        'testimonial': '0 2px 12px rgba(0,0,0,0.07)',
        'header': '0 2px 16px rgba(0,0,0,0.08)',
        'whatsapp': '0 4px 16px rgba(37,211,102,0.4)',
        'btn-primary': '0 4px 16px rgba(27,58,107,0.3)',
      },
      borderRadius: {
        'btn': '6px',
        'card': '8px',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '350ms',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
