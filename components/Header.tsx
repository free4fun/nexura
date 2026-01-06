'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { LuMenu, LuX, LuUser, LuLogOut, LuLock } from 'react-icons/lu';
import { useAuth } from '@/context/AuthContext';

const LoginModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { login } = useAuth();
  
  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-nexura-black/90 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative z-10 bg-nexura-surface border border-nexura-gold/20 p-8 md:p-12 max-w-md w-full shadow-2xl animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-nexura-white/40 hover:text-nexura-gold transition-colors">
          <LuX size={20} />
        </button>
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-nexura-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-nexura-gold">
            <LuLock size={24} />
          </div>
          <h3 className="font-serif text-2xl text-nexura-white mb-2">Acceso Cliente</h3>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 border border-nexura-red/30 bg-nexura-red/10 text-nexura-red text-[10px] uppercase tracking-widest">
            Demo
          </div>
          <p className="mt-3 text-[10px] text-nexura-white/50 uppercase tracking-widest">
            Entorno de demostración
          </p>
          <p className="text-xs text-nexura-white/50 uppercase tracking-widest">Plataforma Segura</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">ID Credencial</label>
              <input type="text" className="w-full bg-nexura-black border border-nexura-white/10 p-3 text-nexura-white focus:outline-none focus:border-nexura-gold transition-colors font-mono text-sm" placeholder="NEX-ID" defaultValue="INV-8821" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">Llave de Acceso</label>
              <input type="password" className="w-full bg-nexura-black border border-nexura-white/10 p-3 text-nexura-white focus:outline-none focus:border-nexura-gold transition-colors font-mono text-sm" placeholder="••••••••" defaultValue="password" />
            </div>
          </div>
          <button type="submit" className="w-full bg-nexura-gold text-nexura-black font-semibold uppercase tracking-widest py-3 text-xs hover:bg-nexura-goldLight transition-colors">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const handledLoginParamRef = React.useRef(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (handledLoginParamRef.current) return;
    if (searchParams.get('login') === '1') {
      handledLoginParamRef.current = true;
      if (isLoggedIn) {
        router.replace('/dashboard');
        return;
      }
      setIsLoginOpen(true);
      router.replace('/');
    }
  }, [searchParams, router, isLoggedIn]);

  const navLinks = [
    { name: 'Filosofía', href: '/#filosofia' },
    { name: 'Unidades', href: '/#unidades' },
    { name: 'Protocolo', href: '/#protocolo' },
    { name: 'Oportunidades', href: '/#oportunidades' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (pathname === '/' && href.startsWith('/#')) {
      const id = href.replace('/', '');
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || pathname !== '/' ? 'bg-nexura-black/95 backdrop-blur-md py-1' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a
            href="/#hero"
            onClick={(e) => handleNavClick(e, '/#hero')}
            className="flex items-center gap-3 font-serif text-2xl tracking-[0.2em] text-nexura-white hover:text-nexura-gold transition-colors duration-300"
          >
            <img src="/nexura.svg" alt="Nexura Logo" className="h-12 lg:h-14 w-auto" />
            <span className="uppercase tracking-[0.2em]">Nexura</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-widest text-nexura-white/70 hover:text-nexura-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}

            {hasMounted && isLoggedIn ? (
              <div className="flex items-center gap-6">
                <Link href="/dashboard" className="text-[10px] uppercase tracking-widest text-nexura-white/40 flex items-center gap-2 hover:text-nexura-gold">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Dashboard
                 </Link>
                 <button 
                  onClick={logout}
                  className="border border-red-900/50 text-red-400 px-6 py-2 text-xs uppercase tracking-widest hover:bg-red-900/20 transition-all duration-300 flex items-center gap-2"
                >
                  <LuLogOut size={14} /> Salir
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="border border-nexura-gold text-nexura-gold px-6 py-2 text-xs uppercase tracking-widest hover:bg-nexura-gold hover:text-nexura-black transition-all duration-300 flex items-center gap-2"
              >
                <LuUser size={14} /> Acceso Privado
              </button>
            )}
          </nav>

          <button className="lg:hidden text-nexura-white hover:text-nexura-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-nexura-black border-b border-nexura-white/10 lg:hidden flex flex-col p-6 gap-6 shadow-2xl animate-fade-in-down">
            <a
              href="/#hero"
              onClick={(e) => handleNavClick(e, '/#hero')}
              className="text-left text-sm uppercase tracking-widest text-nexura-white/80"
            >
              Inicio
            </a>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-left text-sm uppercase tracking-widest text-nexura-white/80">
                {link.name}
              </a>
            ))}
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-left text-sm uppercase tracking-widest text-nexura-white/80"
                >
                  Dashboard
                </Link>
                <button onClick={() => { logout(); setIsMenuOpen(false); }} className="text-center w-full bg-red-900/20 border border-red-900/50 text-red-400 px-6 py-3 text-xs uppercase tracking-widest font-semibold">
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <button onClick={() => { setIsMenuOpen(false); setIsLoginOpen(true); }} className="text-center w-full bg-nexura-gold text-nexura-black px-6 py-3 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                  <LuUser size={14} /> Acceso Privado
              </button>
            )}
          </div>
        )}
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}