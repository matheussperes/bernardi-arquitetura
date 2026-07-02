import { useEffect } from 'react'
import Header from '@/components/thebest/Header'
import Footer from '@/components/thebest/Footer'
import WhatsAppFloatingButton from '@/components/thebest/WhatsAppFloatingButton'
import Hero from '@/sections/Hero'
import ProofBar from '@/sections/ProofBar'
import Portfolio from '@/sections/Portfolio'
import EditorialStrip from '@/sections/EditorialStrip'
import Testimonials from '@/sections/Testimonials'
import Differentials from '@/sections/Differentials'
import FAQ from '@/sections/FAQ'
import CTAFinal from '@/sections/CTAFinal'

export default function Home() {
  // IntersectionObserver para animações de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const els = document.querySelectorAll('.animate-on-scroll')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── HEADER (fixo, fora do fluxo) ── */}
      <Header />

      {/* ── MAIN ── */}
      <main>
        {/* 1. Hero — objetivo primário: WhatsApp */}
        <Hero />

        {/* 2. Proof Bar — credibilidade imediata */}
        <ProofBar />

        {/* 3. Portfolio — objetivo secundário: ver obras reais */}
        <Portfolio />

        {/* 4. Faixa Editorial — pausa emocional / atmosfera de arquitetura */}
        <EditorialStrip />

        {/* 5. Testimonials — prova social qualitativa */}
        <Testimonials />

        {/* 6. Differentials — por que Bernardi vs. concorrentes */}
        <Differentials />

        {/* 7. FAQ — eliminar últimas objeções */}
        <FAQ />

        {/* 8. CTA Final — última chance de conversão */}
        <CTAFinal />
      </main>

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── WHATSAPP FIXO — sempre visível ── */}
      <WhatsAppFloatingButton />
    </>
  )
}
