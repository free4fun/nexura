import { LuGlobe, LuKeyRound, LuNetwork, LuShieldCheck } from 'react-icons/lu';

export default function OperacionesGlobalesPage() {
  return (
    <>
      <section
        id="hero"
        className="relative py-24 sm:py-32 flex items-center justify-center overflow-hidden bg-nexura-black"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/background.webp"
            alt="Abstract structural field"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nexura-black/10 via-nexura-black/30 to-nexura-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <LuGlobe className="mx-auto h-12 w-12 text-nexura-gold" />
          <h1 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed text-nexura-white tracking-tight">
            Operaciones Globales
          </h1>
          <p className="mt-6 font-light text-nexura-white/80 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed tracking-wide">
            Base jurídica en Uruguay y ejecución transfronteriza mediante red de contrapartes y operadores especializados, con criterio selectivo y enfoque de confidencialidad.
          </p>
        </div>
      </section>

      <section id="operaciones" className="py-24 bg-nexura-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-nexura-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                01. Operaciones
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-nexura-white mb-6">Marco operativo</h2>
              <div className="w-12 h-[2px] bg-nexura-gold mb-8"></div>
            </div>
            <div>
              <p className="text-nexura-white/70 font-light leading-relaxed text-lg">
                “Estructuramos y ejecutamos operaciones de manera distribuida: canales privados, exposición mínima y coordinación precisa entre jurisdicciones.”
              </p>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-nexura-white/10" />
              <p className="text-xs lg:text-sm uppercase tracking-[0.2em] text-nexura-white/40 text-center whitespace-nowrap">
                Resumen operativo
              </p>
              <div className="h-px flex-1 bg-nexura-white/10" />
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6 md:pr-px lg:pr-0">
            <div className="p-8 border border-nexura-white/5 md:border-nexura-white/10 lg:border-nexura-white/5 bg-nexura-surface">
              <h3 className="text-xs uppercase tracking-widest text-nexura-white mb-4">Base Legal</h3>
              <p className="text-sm text-nexura-white/60 font-light leading-relaxed">Uruguay</p>
            </div>
            <div className="p-8 border border-nexura-white/5 md:border-nexura-white/10 lg:border-nexura-white/5 bg-nexura-surface">
              <h3 className="text-xs uppercase tracking-widest text-nexura-white mb-4">Alcance</h3>
              <p className="text-sm text-nexura-white/60 font-light leading-relaxed">
                LATAM · Europa · Operaciones selectivas globales
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-nexura-white/10" />
              <p className="text-xs lg:text-sm uppercase tracking-[0.2em] text-nexura-white/40 text-center whitespace-nowrap">
                Principios
              </p>
              <div className="h-px flex-1 bg-nexura-white/10" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 pt-6 lg:pt-8 md:pr-px lg:pr-0">
            {[
              {
                title: 'Confidencialidad',
                icon: <LuShieldCheck className="w-7 h-7 text-nexura-gold" strokeWidth={1} />,
                desc: 'Ejecución en canales privados, exposición mínima y coordinación por necesidad.'
              },
              {
                title: 'Acceso por referencia',
                icon: <LuKeyRound className="w-7 h-7 text-nexura-gold" strokeWidth={1} />,
                desc: 'Entrada exclusiva por referencia directa o proceso de calificación.'
              },
              {
                title: 'Red distribuida',
                icon: <LuNetwork className="w-7 h-7 text-nexura-gold" strokeWidth={1} />,
                desc: 'Contrapartes, asesores y operadores especializados por jurisdicción y función.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-6 lg:p-8 border border-nexura-white/5 md:border-nexura-white/10 lg:border-nexura-white/5 bg-nexura-surface hover:border-nexura-gold/30 transition-all duration-500"
              >
                <div className="flex items-center gap-2 mb-3">
                  {item.icon}
                  <h3 className="font-sans text-xl text-nexura-white group-hover:text-nexura-gold transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-nexura-white/60 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:pr-px lg:pr-0">
            <div className="p-8 border border-nexura-white/5 md:border-nexura-white/10 lg:border-nexura-white/5 bg-nexura-surface">
              <h4 className="text-xs uppercase tracking-widest text-nexura-white mb-4">Descripción</h4>
              <p className="text-sm text-nexura-white/60 font-light leading-relaxed">
                Nexura opera como firma privada de estructuración e intermediación, con base jurídica en la República Oriental del Uruguay y actividad transfronteriza mediante una red de contrapartes, asesores y operadores especializados.
                La gestión se realiza sin oficinas abiertas al público, priorizando discreción, confidencialidad y eficiencia operativa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
