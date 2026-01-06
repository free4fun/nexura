'use client';

import React from 'react';
import {
  LuSearch as Search,
  LuFileCheck as FileCheck,
  LuTrendingUp as TrendingUp,
  LuFileText as FileText,
  LuEye as Eye,
} from 'react-icons/lu';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

function formatActivityStamp(date: Date): string {
  const day = date.toLocaleString('es-ES', { day: '2-digit' });
  const monthRaw = date.toLocaleString('es-ES', { month: 'short' });
  const month = monthRaw.replace('.', '').toLowerCase();
  const time = date.toLocaleString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false });
  return `${day} ${month} · ${time}`;
}

function getFileContext(name: string): { context: string; note: string } {
  const match = name.match(/NX[-_]?([0-9]{4})/i);
  const ref = match ? `NX-${match[1]}` : '';

  const isTeaser = /^Teaser[_-]/i.test(name);
  const isNda = /nda/i.test(name);
  const kind = isTeaser ? 'Teaser' : isNda ? 'NDA' : 'Documento';

  return {
    context: ref ? `${kind} · ${ref}` : kind,
    note: 'Uso restringido',
  };
}

export default function Dashboard() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  // Simple protection check
  React.useEffect(() => {
    // In a real app, this would be a server check or middleware
    const stored = localStorage.getItem('nexura_auth');
    if (!stored) {
      router.push('/');
    }
  }, [router]);

  if (!isLoggedIn) return null;

  const activityStamp = formatActivityStamp(new Date());

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-8 md:mb-12">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-nexura-gold text-xs font-bold tracking-[0.2em] uppercase">Acceso Privado · Estado de Cartera</span>
              <span className="inline-flex items-center px-3 py-1 border border-nexura-red/30 bg-nexura-red/10 text-nexura-red text-[10px] uppercase tracking-widest">
                Demo
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-nexura-white">Panorama de Activos</h2>
            <p className="mt-2 text-[10px] uppercase tracking-widest text-nexura-white/40">
              Perfil validado · Acceso restringido · Nivel: Privado
            </p>
          </div>

          <div className="md:text-right">
            <span className="text-xs text-nexura-white/40 uppercase tracking-widest whitespace-nowrap">
              <span className="md:hidden">Actividad</span>
              <span className="hidden md:inline">Registro de actividad</span>
            </span>
            <p className="text-nexura-white mt-1 font-mono text-sm whitespace-nowrap">{activityStamp}</p>
          </div>
        </div>

        {(() => {
          const stats = [
            {
              label: 'Activos en Encuadre',
              labelShort: 'Encuadre',
              val: '3',
              iconMobile: <Search size={14} />,
              iconDesktop: <Search size={16} />,
            },
            {
              label: 'Estructuras en Análisis',
              labelShort: 'Análisis',
              val: '1',
              iconMobile: <FileCheck size={14} />,
              iconDesktop: <FileCheck size={16} />,
            },
            {
              label: 'Procesos Abiertos',
              labelShort: 'Abiertos',
              val: '0',
              iconMobile: <TrendingUp size={14} />,
              iconDesktop: <TrendingUp size={16} />,
            },
            {
              label: 'Documentación Activa',
              labelShort: 'Docs',
              val: '12',
              iconMobile: <FileText size={14} />,
              iconDesktop: <FileText size={16} />,
            },
          ];

          return (
            <>
              {/* Mobile: una sola línea (sin bloques) */}
              <div className="md:hidden mb-10">
                <div className="bg-nexura-surface border border-nexura-white/5">
                  <div className="grid grid-cols-4 divide-x divide-nexura-white/10">
                    {stats.map((stat, i) => (
                      <div key={i} className="px-2 py-3 text-center">
                        <div className="flex items-center justify-center gap-1.5 text-nexura-gold">
                          {stat.iconMobile}
                          <span className="font-serif text-lg text-nexura-white leading-none">
                            {stat.val === '0' ? '—' : stat.val}
                          </span>
                        </div>
                        <div className="mt-1 text-[9px] uppercase tracking-widest text-nexura-white/40 whitespace-nowrap">
                          {stat.labelShort}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop: cards */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-nexura-surface border border-nexura-white/5 p-6 rounded-sm">
                    <div className="flex flex-col items-center justify-center text-center gap-5">
                      <div className="w-12 h-12 bg-nexura-gold/10 border border-nexura-gold/20 rounded-full flex items-center justify-center text-nexura-gold">
                        {stat.iconDesktop}
                      </div>
                      <div className="text-3xl font-serif text-nexura-white leading-none">
                        {stat.val === '0' ? '—' : stat.val}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-nexura-white/40 leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          );
        })()}

        <div className="bg-nexura-black border border-nexura-white/10 p-8">
           <h3 className="text-lg font-serif text-nexura-white mb-8 border-b border-nexura-white/5 pb-4">Documentación Activa</h3>
           <p className="text-xs text-nexura-white/50 font-light mb-8">
             La información se habilita de forma progresiva según el estado de cada operación.
           </p>
           <div className="space-y-4">
              {[
                { name: "Teaser_Logistica_NX8842.pdf", date: "Hace 2 horas", size: "2.4 MB" },
                { name: "NDA_Signed_NX2109.pdf", date: "Ayer", size: "1.1 MB" },
                { name: "Market_Analysis_Q3.pdf", date: "01 Oct 2023", size: "4.8 MB" }
              ].map((file, idx) => (
                (() => {
                  const meta = getFileContext(file.name);
                  return (
                <div key={idx} className="flex flex-col md:flex-row items-center justify-between p-4 hover:bg-nexura-white/5 transition-colors border border-transparent hover:border-nexura-white/5 group cursor-pointer">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="w-10 h-10 bg-nexura-white/5 flex items-center justify-center text-nexura-gold">
                           <FileText size={20} strokeWidth={1} />
                        </div>
                        <div>
                           <p className="text-sm text-nexura-white font-serif">{meta.context}</p>
                           <p className="text-xs text-nexura-white/30">{meta.note} · {file.name}</p>
                           <p className="text-xs text-nexura-white/30 mt-1">{file.date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 mt-4 md:mt-0 w-full md:w-auto justify-end">
                       <span className="text-xs text-nexura-white/20 font-mono">{file.size}</span>
                       <button
                         className="text-nexura-white/40 hover:text-nexura-gold transition-colors"
                         aria-label="Acceso habilitado"
                         title="Acceso habilitado"
                         type="button"
                       >
                          <Eye size={18} />
                       </button>
                    </div>
                </div>
                  );
                })()
              ))}
           </div>

           <div className="mt-10 pt-8 border-t border-nexura-white/10">
             <p className="text-[10px] uppercase tracking-widest text-nexura-white/30">
               Este entorno no constituye una oferta pública. La información se habilita por invitación y bajo criterios de confidencialidad.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}