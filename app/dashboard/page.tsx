'use client';

import React from 'react';
import { Search, FileCheck, TrendingUp, FileText, Download } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

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

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
           <div>
              <span className="text-nexura-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Dashboard de Inversor</span>
              <h2 className="font-serif text-3xl md:text-4xl text-nexura-white">Estado de Cartera</h2>
           </div>
           <div className="text-right">
              <span className="text-xs text-nexura-white/40 uppercase tracking-widest">Último acceso</span>
              <p className="text-nexura-white mt-1 font-mono text-sm">{new Date().toLocaleString()}</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Activos en Revisión", val: "3", icon: <Search size={16} /> },
              { label: "Due Diligence", val: "1", icon: <FileCheck size={16} /> },
              { label: "Ofertas Activas", val: "0", icon: <TrendingUp size={16} /> },
              { label: "Documentos", val: "12", icon: <FileText size={16} /> },
            ].map((stat, i) => (
              <div key={i} className="bg-nexura-surface border border-nexura-white/5 p-6 rounded-sm">
                <div className="flex justify-between items-start mb-4 text-nexura-gold">
                   {stat.icon}
                </div>
                <div className="text-3xl font-serif text-nexura-white mb-2">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-nexura-white/40">{stat.label}</div>
              </div>
            ))}
        </div>

        <div className="bg-nexura-black border border-nexura-white/10 p-8">
           <h3 className="text-lg font-serif text-nexura-white mb-8 border-b border-nexura-white/5 pb-4">Documentación Reciente</h3>
           <div className="space-y-4">
              {[
                { name: "Teaser_Logistica_NX8842.pdf", date: "Hace 2 horas", size: "2.4 MB" },
                { name: "NDA_Signed_NX2109.pdf", date: "Ayer", size: "1.1 MB" },
                { name: "Market_Analysis_Q3.pdf", date: "01 Oct 2023", size: "4.8 MB" }
              ].map((file, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center justify-between p-4 hover:bg-nexura-white/5 transition-colors border border-transparent hover:border-nexura-white/5 group cursor-pointer">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="w-10 h-10 bg-nexura-white/5 flex items-center justify-center text-nexura-gold">
                           <FileText size={20} strokeWidth={1} />
                        </div>
                        <div>
                           <p className="text-sm text-nexura-white group-hover:text-nexura-gold transition-colors">{file.name}</p>
                           <p className="text-xs text-nexura-white/30">{file.date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 mt-4 md:mt-0 w-full md:w-auto justify-end">
                       <span className="text-xs text-nexura-white/20 font-mono">{file.size}</span>
                       <button className="text-nexura-white/40 hover:text-nexura-gold transition-colors">
                          <Download size={18} />
                       </button>
                    </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}