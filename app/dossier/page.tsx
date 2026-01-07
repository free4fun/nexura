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
            <div className="inline-flex items-center gap-2 text-nexura-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <Lock size={14} className="shrink-0" />
              <span>Solicitud de Documentación</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-nexura-white mb-4">Dossier Privado</h1>
            <div className="w-12 h-[2px] bg-nexura-gold mb-8"></div>
            {assetRef ? (
               <>
                 <p className="text-nexura-white/60 md:hidden">
                   <span className="block">Solicitando acceso al activo:</span>
                   <span className="block text-right mt-2">
                     <span className="text-nexura-white/60">REFERENCIA:</span>{' '}
                     <span className="text-nexura-gold font-mono">{assetRef}</span>
                   </span>
                 </p>
                 <p className="text-nexura-white/60 hidden md:block">
                   Solicitando acceso al activo referencia:{' '}
                   <span className="text-nexura-gold font-mono">{assetRef}</span>
                 </p>
               </>
            ) : (
               <p className="text-nexura-white/60">Solicitud general de oportunidades</p>
            )}
        </div>

        <form className="space-y-8">
            <div className="bg-nexura-surface p-8 ring-1 ring-inset ring-nexura-white/5">
            <h3 className="text-nexura-white font-sans text-xl mb-6">Validación de Perfil</h3>
                
                <div className="space-y-6">
                    <div className="group">
                        <label className="block text-[10px] md:text-xs uppercase tracking-widest text-nexura-gold mb-2">Entidad Inversora</label>
                      <input type="text" className="w-full bg-nexura-black ring-1 ring-inset ring-nexura-white/10 p-4 text-nexura-white focus:ring-nexura-gold outline-none" placeholder="Nombre Legal" />
                    </div>

              <div className="group">
                <label className="block text-[10px] md:text-xs uppercase tracking-widest text-nexura-gold mb-2">Rol / Cargo</label>
                <input
                  type="text"
                  className="w-full bg-nexura-black ring-1 ring-inset ring-nexura-white/10 p-4 text-nexura-white focus:ring-nexura-gold outline-none"
                  placeholder="Socio / Director / CFO / Inversiones"
                />
              </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                         <div className="group">
                            <label className="block text-[10px] md:text-xs uppercase tracking-widest text-nexura-gold mb-2">Email Corporativo</label>
                  <input
                    type="email"
                    className="w-full bg-nexura-black ring-1 ring-inset ring-nexura-white/10 p-4 text-nexura-white focus:ring-nexura-gold outline-none"
                    placeholder="nombre@empresa.com"
                  />
                  <p className="mt-2 text-[8px] md:text-[10px] uppercase tracking-widest text-nexura-white/30">
                    Preferimos dominios corporativos.
                  </p>
                        </div>
                        <div className="group">
                            <label className="block text-[10px] md:text-xs uppercase tracking-widest text-nexura-gold mb-2">Teléfono</label>
                          <input type="tel" className="w-full bg-nexura-black ring-1 ring-inset ring-nexura-white/10 p-4 text-nexura-white focus:ring-nexura-gold outline-none" />
                        </div>
                    </div>

              <div className="group">
                <label className="block text-[10px] md:text-xs uppercase tracking-widest text-nexura-gold mb-2">Capacidad operativa</label>
                <select
                  required
                  defaultValue=""
                  className="w-full bg-nexura-black ring-1 ring-inset ring-nexura-white/10 p-4 text-nexura-white invalid:text-nexura-white/30 focus:ring-nexura-gold outline-none appearance-none rounded-none cursor-pointer"
                >
                  <option value="" disabled hidden className="bg-nexura-black">
                    Seleccione su capacidad operativa
                  </option>
                  <option value="< USD 50k" className="bg-nexura-black">&lt; USD 50k</option>
                  <option value="USD 50k–200k" className="bg-nexura-black">USD 50k–200k</option>
                  <option value="USD 200k–1M" className="bg-nexura-black">USD 200k–1M</option>
                  <option value="USD 1M+" className="bg-nexura-black">USD 1M+</option>
                </select>
              </div>

                    <div className="group">
                <label className="block text-[10px] md:text-xs uppercase tracking-widest text-nexura-gold mb-2">Referencia</label>
                <input
                  type="text"
                  disabled
                  value={assetRef || "Consulta general"}
                  className="w-full bg-nexura-black/50 ring-1 ring-inset ring-nexura-white/10 p-4 text-nexura-white/50 font-mono disabled:opacity-100 disabled:cursor-default"
                />
                    </div>

              <div className="group">
                <label className="block text-[10px] md:text-xs uppercase tracking-widest text-nexura-gold mb-2">Enfoque / interés (1 línea)</label>
                <input
                  type="text"
                  className="w-full bg-nexura-black ring-1 ring-inset ring-nexura-white/10 p-4 text-nexura-white focus:ring-nexura-gold outline-none"
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
                          <Link href="/legal/terms" className="nexura-text-link transition-colors">
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
                          <Link href="/legal/ncnda" className="nexura-text-link transition-colors">
                            Política de No Elusión
                          </Link>
                          .
                        </label>
                      </div>
                    </div>
                </div>
            </div>

          <div className="space-y-5">
            <button className="w-full bg-nexura-gold text-nexura-black font-sans font-semibold uppercase tracking-widest py-5 text-sm hover:bg-nexura-goldLight transition-colors">
              Solicitar Acceso
            </button>
            <p className="text-center text-[10px] md:text-xs lg:text-sm uppercase tracking-widest text-nexura-white/90">
            Se habilita solo bajo acuerdos de confidencialidad
            </p>
            <div className="text-xs md:text-sm lg:text-base text-nexura-white/40  leading-relaxed space-y-2 text-center">
            <p>Nexura habilita documentación de forma progresiva según la fase de cada operación.</p>
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