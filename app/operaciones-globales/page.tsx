import { LuBadgeCheck, LuGlobe, LuMapPin, LuScale, LuWorkflow } from 'react-icons/lu';

export default function OperacionesGlobalesPage() {
  return (
      <section id="operaciones" className="py-24 bg-nexura-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-nexura-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                01. Ubicación
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-nexura-white mb-6">Operaciones Globales</h2>
              <div className="w-12 h-[2px] bg-nexura-gold mb-8"></div>
            </div>
            <div>
              <p className="text-nexura-white/70 font-light leading-relaxed text-lg">
                Nexura opera como una firma privada de estructuración e intermediación, con base jurídica en la República Oriental del Uruguay y actividad transfronteriza mediante una red de contrapartes, asesores y operadores especializados.
              </p>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-nexura-white/10" />
              <p className="text-xs lg:text-sm uppercase tracking-[0.2em] text-nexura-white/40 text-center whitespace-nowrap">
                Marco geográfico
              </p>
              <div className="h-px flex-1 bg-nexura-white/10" />
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6 md:pr-px lg:pr-0">
            <div className="p-8 ring-1 ring-inset ring-nexura-white/5 md:ring-nexura-white/10 lg:ring-nexura-white/5 bg-nexura-surface">
              <h3 className="flex items-center gap-2 text-xs uppercase tracking-widest text-nexura-white mb-4">
                <LuScale className="w-4 h-4 text-nexura-gold" />
                Base Legal
              </h3>
              <p className="text-sm text-nexura-white/60 font-light leading-relaxed">Uruguay</p>
            </div>
            <div className="p-8 ring-1 ring-inset ring-nexura-white/5 md:ring-nexura-white/10 lg:ring-nexura-white/5 bg-nexura-surface">
              <h3 className="flex items-center gap-2 text-xs uppercase tracking-widest text-nexura-white mb-4">
                <LuMapPin className="w-4 h-4 text-nexura-gold" />
                Alcance Operativo
              </h3>
              <p className="text-sm text-nexura-white/60 font-light leading-relaxed">
                LATAM · Europa · Operaciones Selectivas Globales
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-nexura-white/10" />
              <p className="text-xs lg:text-sm uppercase tracking-[0.2em] text-nexura-white/40 text-center whitespace-nowrap">
                Criterios geográficos
              </p>
              <div className="h-px flex-1 bg-nexura-white/10" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 pt-6 lg:pt-8 md:pr-px lg:pr-0">
            {[
              {
                title: 'Ejecución distribuida',
                icon: <LuWorkflow className="w-7 h-7 text-nexura-gold" strokeWidth={1} />,
                desc: 'La gestión se realiza de forma distribuida, sin oficinas abiertas al público, priorizando la discreción y la eficiencia operativa.'
              },
              {
                title: 'Acceso selectivo',
                icon: <LuBadgeCheck className="w-7 h-7 text-nexura-gold" strokeWidth={1} />,
                desc: 'El acceso a Nexura se gestiona exclusivamente por referencia directa o proceso de calificación.'
              },
              {
                title: 'Operación transfronteriza',
                icon: <LuGlobe className="w-7 h-7 text-nexura-gold" strokeWidth={1} />,
                desc: 'Actividad transfronteriza mediante una red de contrapartes, asesores y operadores especializados.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-6 lg:p-8 ring-1 ring-inset ring-nexura-white/5 md:ring-nexura-white/10 lg:ring-nexura-white/5 bg-nexura-surface hover:ring-nexura-gold/30 transition-all duration-500"
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

          <div className="mt-20">
            <div className="mb-16">
              <span className="text-nexura-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">02. Síntesis</span>
              <h2 className="font-serif text-3xl md:text-4xl text-nexura-white mb-6">Contexto</h2>
              <div className="w-12 h-[2px] bg-nexura-gold mb-8"></div>
              <div className="space-y-4">
                <p className="text-nexura-white/60 font-light leading-relaxed text-base md:text-lg">
                  Nexura opera como una firma privada de estructuración e intermediación, con base jurídica en la República Oriental del Uruguay y actividad transfronteriza mediante una red de contrapartes, asesores y operadores especializados.
                </p>
                <p className="text-nexura-white/60 font-light leading-relaxed text-base md:text-lg">
                  La gestión se realiza de forma distribuida, sin oficinas abiertas al público, priorizando la discreción, la confidencialidad y la eficiencia operativa.
                </p>
                <p className="text-nexura-white/60 font-light leading-relaxed text-base md:text-lg">
                  El acceso a Nexura se gestiona exclusivamente por referencia directa o proceso de calificación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
