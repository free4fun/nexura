'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Lock } from 'lucide-react';

function DossierContent() {
  const searchParams = useSearchParams();
  const assetRef = searchParams.get('ref');

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-nexura-black">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
        <div className="mb-12 border-b border-nexura-white/10 pb-8">
            <div className="flex items-center gap-2 text-nexura-gold text-xs tracking-widest uppercase mb-4">
              <Lock size={14} /> Solicitud de Documentación
            </div>
            <h1 className="font-serif text-3xl md:text-5xl text-nexura-white mb-4">Dossier de Inversión</h1>
            {assetRef ? (
               <p className="text-nexura-white/60">Solicitando acceso al activo referencia: <span className="text-nexura-gold font-mono">{assetRef}</span></p>
            ) : (
               <p className="text-nexura-white/60">Solicitud general de oportunidades</p>
            )}
        </div>

        <form className="space-y-8">
            <div className="bg-nexura-surface p-8 border border-nexura-white/5">
                <h3 className="text-nexura-white font-serif text-xl mb-6">Requisitos de Compliance</h3>
                
                <div className="space-y-6">
                    <div className="group">
                        <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">Entidad Inversora</label>
                        <input type="text" className="w-full bg-nexura-black border border-nexura-white/10 p-4 text-nexura-white focus:border-nexura-gold outline-none" placeholder="Nombre Legal" />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                         <div className="group">
                            <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">Email Corporativo</label>
                            <input type="email" className="w-full bg-nexura-black border border-nexura-white/10 p-4 text-nexura-white focus:border-nexura-gold outline-none" />
                        </div>
                        <div className="group">
                            <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">Teléfono</label>
                            <input type="tel" className="w-full bg-nexura-black border border-nexura-white/10 p-4 text-nexura-white focus:border-nexura-gold outline-none" />
                        </div>
                    </div>

                    <div className="group">
                        <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">Referencia de Interés</label>
                        <input type="text" readOnly value={assetRef || "General"} className="w-full bg-nexura-black/50 border border-nexura-white/10 p-4 text-nexura-white/50 font-mono" />
                    </div>

                     <div className="flex items-start gap-4 pt-4">
                        <input type="checkbox" className="mt-1 bg-nexura-black border-nexura-white/20" />
                        <p className="text-xs text-nexura-white/50 leading-relaxed">
                            Certifico que soy un inversor cualificado y acepto firmar un NDA específico antes de recibir el Cuaderno de Venta (IM).
                        </p>
                    </div>
                </div>
            </div>

            <button className="w-full bg-nexura-gold text-nexura-black font-serif uppercase tracking-widest py-5 text-sm hover:bg-nexura-goldLight transition-colors">
                Enviar Solicitud Formal
            </button>
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