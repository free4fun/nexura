'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { LuLock as Lock } from 'react-icons/lu';

function DossierContent() {
  const searchParams = useSearchParams();
  const assetRef = searchParams.get('ref');

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-nexura-black">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
        <div className="mb-12 border-b border-nexura-white/10 pb-8">
            <div className="flex items-center gap-2 text-nexura-gold text-xs tracking-widest uppercase mb-4">
              <Lock size={14} /> Solicitud de Documentación
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-nexura-white mb-4">Dossier Privado</h1>
            {assetRef ? (
               <p className="text-nexura-white/60">Solicitando acceso al activo referencia: <span className="text-nexura-gold font-mono">{assetRef}</span></p>
            ) : (
               <p className="text-nexura-white/60">Solicitud general de oportunidades</p>
            )}
        </div>

        <form className="space-y-8">
            <div className="bg-nexura-surface p-8 border border-nexura-white/5">
            <h3 className="text-nexura-white font-sans text-xl mb-6">Validación de Perfil</h3>
                
                <div className="space-y-6">
                    <div className="group">
                        <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">Entidad Inversora</label>
                        <input type="text" className="w-full bg-nexura-black border border-nexura-white/10 p-4 text-nexura-white focus:border-nexura-gold outline-none" placeholder="Nombre Legal" />
                    </div>

              <div className="group">
                <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">Rol / Cargo</label>
                <input
                  type="text"
                  className="w-full bg-nexura-black border border-nexura-white/10 p-4 text-nexura-white focus:border-nexura-gold outline-none"
                  placeholder="Socio / Director / CFO / Inversiones"
                />
              </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                         <div className="group">
                            <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">Email Corporativo</label>
                  <input
                    type="email"
                    className="w-full bg-nexura-black border border-nexura-white/10 p-4 text-nexura-white focus:border-nexura-gold outline-none"
                    placeholder="nombre@empresa.com"
                  />
                  <p className="mt-2 text-[10px] uppercase tracking-widest text-nexura-white/30">
                    Preferimos dominios corporativos. Si no aplica, indíquelo en notas.
                  </p>
                        </div>
                        <div className="group">
                            <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">Teléfono</label>
                            <input type="tel" className="w-full bg-nexura-black border border-nexura-white/10 p-4 text-nexura-white focus:border-nexura-gold outline-none" />
                        </div>
                    </div>

              <div className="group">
                <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">Capacidad operativa</label>
                <select className="w-full bg-nexura-black border border-nexura-white/10 p-4 text-nexura-white focus:border-nexura-gold outline-none appearance-none rounded-none cursor-pointer">
                  <option className="bg-nexura-black">&lt; USD 50k</option>
                  <option className="bg-nexura-black">USD 50k–200k</option>
                  <option className="bg-nexura-black">USD 200k–1M</option>
                  <option className="bg-nexura-black">USD 1M+</option>
                </select>
              </div>

                    <div className="group">
                <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">Referencia</label>
                <input type="text" readOnly value={assetRef || "Consulta general"} className="w-full bg-nexura-black/50 border border-nexura-white/10 p-4 text-nexura-white/50 font-mono" />
                    </div>

              <div className="group">
                <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">Enfoque / interés (1 línea)</label>
                <input
                  type="text"
                  className="w-full bg-nexura-black border border-nexura-white/10 p-4 text-nexura-white focus:border-nexura-gold outline-none"
                  placeholder="Busco: renta logística / salida M&A / activo ocioso / etc."
                />
              </div>

                    <div className="pt-4 space-y-3">
                      <div className="flex items-start gap-4">
                        <input
                          id="accept-terms"
                          name="acceptTerms"
                          type="checkbox"
                          required
                          className="mt-1 bg-nexura-black border-nexura-white/20"
                        />
                        <label htmlFor="accept-terms" className="text-xs text-nexura-white/50 leading-relaxed">
                          He leído y acepto los{' '}
                          <Link href="/legal/terms" className="text-nexura-gold hover:text-nexura-gold/80 underline underline-offset-4">
                            Términos de Confidencialidad
                          </Link>
                          .
                        </label>
                      </div>

                      <div className="flex items-start gap-4">
                        <input
                          id="accept-ncnda"
                          name="acceptNcnda"
                          type="checkbox"
                          required
                          className="mt-1 bg-nexura-black border-nexura-white/20"
                        />
                        <label htmlFor="accept-ncnda" className="text-xs text-nexura-white/50 leading-relaxed">
                          He leído y acepto la{' '}
                          <Link href="/legal/ncnda" className="text-nexura-gold hover:text-nexura-gold/80 underline underline-offset-4">
                            Política de No Elusión
                          </Link>
                          .
                        </label>
                      </div>
                    </div>
                </div>
            </div>

          <div className="space-y-5">
            <button className="w-full bg-nexura-gold text-nexura-black font-serif uppercase tracking-widest py-5 text-sm hover:bg-nexura-goldLight transition-colors">
              Solicitar Acceso
            </button>
            <p className="text-center text-[10px] uppercase tracking-widest text-nexura-white/30">
            Se habilita solo bajo acuerdos.
            </p>
            <div className="text-xs text-nexura-white/50 font-light leading-relaxed space-y-2 text-center">
            <p>Nexura habilita documentación de forma progresiva según el estado de cada operación.</p>
            <p>Si la solicitud encaja, enviaremos el NDA correspondiente y el siguiente paso.</p>
            <p>Tiempo estimado de respuesta: 48–72 hs hábiles.</p>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default function DossierPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-nexura-black flex items-center justify-center text-nexura-white">Loading...</div>}>
      <DossierContent />
    </Suspense>
  );
}