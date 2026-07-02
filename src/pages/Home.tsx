import { useEffect } from 'react'
import Header from '@/components/thebest/Header'
import Footer from '@/components/thebest/Footer'
import WhatsAppFloatingButton from '@/components/thebest/WhatsAppFloatingButton'
import Hero from '@/sections/Hero'
import ProofBar from '@/sections/ProofBar'
import About from '@/sections/About'
import Portfolio from '@/sections/Portfolio'
import EditorialStrip from '@/sections/EditorialStrip'
import Testimonials from '@/sections/Testimonials'
import Differentials from '@/sections/Differentials'
import FAQ from '@/sections/FAQ'
import CTAFinal from '@/sections/CTAFinal'

export default function Home() {
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
      <Header />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Proof Bar */}
        <ProofBar />

        {/* 3. Sobre a Camila */}
        <About />

        {/* 4. Portfolio */}
        <Portfolio />

        {/* 5. Faixa Editorial */}
        <EditorialStrip />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. Differentials */}
        <Differentials />

        {/* 8. FAQ */}
        <FAQ />

        {/* 9. CTA Final */}
        <CTAFinal />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </>
  )
}
