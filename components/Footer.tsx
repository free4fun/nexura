'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LuMail, LuUser } from 'react-icons/lu';
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
            <div className="flex flex-col items-center text-center ">
                <Link href="/#hero" className="inline-flex flex-col items-center ">
                    <img src="/nexura.svg" alt="Nexura Logo" className="h-20 w-auto mb-2 mx-auto md:mx-0" />
                    <span className="block w-fit mx-auto md:mx-0 text-[14px] uppercase tracking-[0.3em] text-nexura-white">Nexura Group</span>
                </Link>
                                <div className="mt-5 flex justify-center w-full">
                                    <Link
                                        href={privateAccessHref}
                                        className="box-border inline-flex items-center justify-center gap-2 ring-1 ring-inset ring-nexura-gold !text-nexura-gold visited:!text-nexura-gold px-6 py-2 text-xs uppercase tracking-widest hover:bg-nexura-gold hover:!text-nexura-black transition-all duration-300"
                                    >
                                        <LuUser size={14} />
                                        Acceso Privado
                                    </Link>
                                </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
                <div className="md:text-left">
                    <h4 className="text-xs uppercase tracking-widest text-nexura-white/40 mb-4">Legal</h4>
                    <ul className="space-y-2">
                        <li><Link href="/legal/terms" className="nexura-text-link text-sm transition-colors">Términos de Confidencialidad</Link></li>
                        <li><Link href="/legal/ncnda" className="nexura-text-link text-sm transition-colors">Política de No Elusión (NCNDA)</Link></li>
                    </ul>
                </div>
                <div className="md:text-left">
                    <h4 className="text-xs uppercase tracking-widest text-nexura-white/40 mb-4">Ubicación</h4>
                    <ul className="space-y-2">
                        <li><span className="text-sm text-nexura-white/30">Base Legal: Uruguay</span></li>
                        <li><Link href="/operaciones-globales" className="nexura-text-link text-sm transition-colors">Operaciones Globales Selectivas</Link></li>
                    </ul>
                </div>
            </div>
        </div>

                <p className="text-[10px] text-nexura-white/40 uppercase tracking-widest text-center mb-10">
                    <span className="sm:hidden block">Acceso restringido - Información confidencial</span>
                    <span className="sm:hidden block mt-1">No constituye oferta pública</span>
                    <span className="hidden sm:inline">Acceso restringido - Información confidencial - No constituye oferta pública</span>
                </p>

                <div className="border-t border-nexura-white/5 pt-8">
                      <div className="flex flex-col items-center gap-4 md:flex-row-reverse md:items-center md:justify-between">
                                                <Link href="mailto:contacto@nexura.lat" className="flex items-center gap-2 text-sm tracking-widest text-nexura-white hover:text-nexura-gold transition-colors cursor-pointer">
                            <LuMail size={18} className="text-nexura-gold" />
                            <span>contacto@nexura.lat</span>
                        </Link>

                        <div className="flex items-center gap-3">
                            <Link
                                href="https://www.linkedin.com/company/nexura-lat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-7 h-7 rounded-full ring-1 ring-inset ring-linkedin/60 bg-linkedin flex items-center justify-center hover:ring-linkedin transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn size={18} style={{ color: 'var(--color-nexura-white)' }} />
                            </Link>
                            <Link
                                href="https://nexura.substack.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-7 h-7 rounded-full ring-1 ring-inset ring-substack/60 bg-substack flex items-center justify-center hover:ring-substack transition-colors"
                                aria-label="Substack"
                            >
                                <SiSubstack size={18} style={{ color: 'var(--color-nexura-white)' }} />
                            </Link>
                        </div>
                    </div>

                    <p className="text-[10px] text-nexura-white/40 uppercase tracking-widest mt-6 text-center">
                        © {new Date().getFullYear()} Nexura Group. All Rights Reserved.
                    </p>
                </div>
      </div>
    </footer>
  );
}