'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LuMail } from 'react-icons/lu';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SiSubstack } from 'react-icons/si';
import { useAuth } from '@/context/AuthContext';

export default function Footer() {
    const { isLoggedIn } = useAuth();
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const privateAccessHref = hasMounted && isLoggedIn ? '/dashboard' : '/?login=1';

  return (
    <footer className="bg-nexura-black border-t border-nexura-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
            <div className="text-center md:text-left">
                <img src="/nexura.svg" alt="Nexura Logo" className="h-20 w-auto mb-2 mx-auto md:mx-auto" />
                <span className="block w-fit mx-auto text-[14px] uppercase tracking-[0.3em] text-nexura-white">Nexura Group</span>
                                <div className="mt-5 flex justify-center">
                                    <Link
                                        href={privateAccessHref}
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
                © {new Date().getFullYear()} Nexura Group. All Rights Reserved.
            </p>
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                            <a
                                href="mailto:contacto@nexura.lat"
                                className="flex items-center gap-2 text-xs tracking-widest text-nexura-white hover:text-nexura-gold transition-colors"
                            >
                                <LuMail size={18} className="text-nexura-gold" />
                                contacto@nexura.lat
                            </a>

                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.linkedin.com/company/nexura-lat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-7 h-7 rounded-full border border-linkedin/60 bg-linkedin flex items-center justify-center hover:border-linkedin transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn size={18} style={{ color: 'var(--color-nexura-white)' }} />
                                </a>
                                <a
                                    href="https://nexura.substack.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-7 h-7 rounded-full border border-substack/60 bg-substack flex items-center justify-center hover:border-substack transition-colors"
                                    aria-label="Substack"
                                >
                                    <SiSubstack size={18} style={{ color: 'var(--color-nexura-white)' }} />
                                </a>
                            </div>
                        </div>
        </div>
      </div>
    </footer>
  );
}