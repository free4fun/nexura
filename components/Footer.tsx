'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function Footer() {
    const { isLoggedIn } = useAuth();

  return (
    <footer className="bg-nexura-black border-t border-nexura-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
            <div className="text-center md:text-left">
                <img src="/logo.png" alt="Nexura Logo" className="h-10 w-auto mb-2 mx-auto md:mx-0" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-nexura-gold">Private Office</span>
                                <div className="mt-5">
                                    <Link
                                        href={isLoggedIn ? '/dashboard' : '/?login=1'}
                                        className="inline-flex items-center justify-center border border-nexura-gold/30 text-nexura-gold px-4 py-2 text-[10px] uppercase tracking-widest hover:border-nexura-gold hover:bg-nexura-gold/10 transition-colors"
                                    >
                                        Acceso Privado
                                    </Link>
                                </div>
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