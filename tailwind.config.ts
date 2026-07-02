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
        surface: '#FAF8F5',
        primary: '#2C2C2C',
        'primary-hover': '#1a1a1a',
        'text-main': '#1C1C1C',
        'text-secondary': '#6B6B6B',
        accent: '#C9A96E',
        whatsapp: '#25D366',
        border: '#E8E2D9',
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
        'card': '0 2px 12px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.12)',
        'diff-card': '0 2px 8px rgba(0,0,0,0.05)',
        'testimonial': '0 2px 12px rgba(0,0,0,0.06)',
        'header': '0 2px 16px rgba(0,0,0,0.06)',
        'whatsapp': '0 4px 16px rgba(37,211,102,0.4)',
        'btn-primary': '0 4px 16px rgba(44,44,44,0.25)',
      },
      borderRadius: {
        'btn': '4px',
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
