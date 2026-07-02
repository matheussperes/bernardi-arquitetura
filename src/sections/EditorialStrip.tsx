export default function EditorialStrip() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: 420 }}
      aria-hidden="true"
    >
      {/* Foto full-width */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/editorial-strip.jpg')" }}
      />
      {/* Overlay escuro com leve gradiente lateral */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(10,20,45,0.82) 0%, rgba(10,20,45,0.60) 60%, rgba(10,20,45,0.40) 100%)',
        }}
      />

      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: 420 }}
      >
        {/* Linha decorativa */}
        <div
          className="w-12 h-px mb-8"
          style={{ background: '#E8A020' }}
        />

        <p
          className="font-heading font-semibold text-white leading-[1.25] mb-6"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)', maxWidth: 720 }}
        >
          Arquitetura é mais do que construir.
          <br />
          <span style={{ color: '#E8A020' }}>É desenhar a forma como você vive.</span>
        </p>

        <p
          className="font-body text-white/70 leading-[1.75]"
          style={{ fontSize: 'clamp(14px, 2vw, 17px)', maxWidth: 520 }}
        >
          Cada projeto começa numa conversa. Termina num espaço que você vai chamar de lar.
        </p>

        {/* Linha decorativa */}
        <div
          className="w-12 h-px mt-8"
          style={{ background: '#E8A020' }}
        />
      </div>
    </section>
  )
}
