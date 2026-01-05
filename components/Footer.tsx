'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-nexura-black border-t border-nexura-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
            <div className="text-center md:text-left">
                <h3 className="font-serif text-2xl tracking-[0.2em] text-nexura-white mb-2">NEXURA</h3>
                <span className="text-[10px] uppercase tracking-[0.3em] text-nexura-gold">Private Office</span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-right">
                <div>
                    <h4 className="text-xs uppercase tracking-widest text-nexura-white/40 mb-4">Legal</h4>
                    <ul className="space-y-2">
                        <li><Link href="/legal/terms" className="text-sm text-nexura-white/70 hover:text-nexura-gold transition-colors">Términos de Confidencialidad</Link></li>
                        <li><Link href="/legal/ncnda" className="text-sm text-nexura-white/70 hover:text-nexura-gold transition-colors">Política de No-Elusión (NCNDA)</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs uppercase tracking-widest text-nexura-white/40 mb-4">Ubicación</h4>
                    <span className="text-sm text-nexura-white/70">Operaciones Globales</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-nexura-white/5 pt-8">
            <p className="text-[10px] text-nexura-white/20 uppercase tracking-widest mb-4 md:mb-0">
                © {new Date().getFullYear()} Nexura Private Office. All Rights Reserved.
            </p>
            <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-widest text-nexura-white/40 hover:text-nexura-gold transition-colors">
                <CheckCircle2 size={12} />
                LinkedIn Official
            </a>
        </div>
      </div>
    </footer>
  );
}