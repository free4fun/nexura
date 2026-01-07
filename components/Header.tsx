'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { LuMenu, LuX, LuUser, LuLogOut, LuShieldCheck } from 'react-icons/lu';
import { useAuth } from '@/context/AuthContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const LoginModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { login } = useAuth();
  const DEMO_CREDENTIAL = 'INV-8821';
  const DEMO_ACCESS_KEY = 'NXR-ACCESS-01';
  const DEMO_VALIDATION_CODE = '482913';

  const [credentialId, setCredentialId] = useState(DEMO_CREDENTIAL);
  const [accessKey, setAccessKey] = useState(DEMO_ACCESS_KEY);
  const [validationDigits, setValidationDigits] = useState<string[]>(DEMO_VALIDATION_CODE.split(''));
  const [authError, setAuthError] = useState<string | null>(null);

  const codeRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (!isOpen) return;
    setAuthError(null);
    setCredentialId(DEMO_CREDENTIAL);
    setAccessKey(DEMO_ACCESS_KEY);
    setValidationDigits(DEMO_VALIDATION_CODE.split(''));
  }, [isOpen]);

  const setDigitAt = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(0, 1);
    setValidationDigits((prev) => {
      const next = [...prev];
      next[index] = digit;
      return next;
    });
  };

  const focusDigit = (index: number) => {
    const el = codeRefs.current[index];
    el?.focus();
    el?.select();
  };

  const fillDigitsFromString = (raw: string) => {
    const digits = raw.replace(/\D/g, '').slice(0, 6).split('');
    if (digits.length === 0) return;
    setValidationDigits((prev) => {
      const next = [...prev];
      for (let i = 0; i < 6; i += 1) {
        next[i] = digits[i] ?? '';
      }
      return next;
    });
    focusDigit(Math.min(digits.length, 6) - 1);
  };

  const handleClose = () => {
    setAuthError(null);
    onClose();
  };

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const code = validationDigits.join('');
    const ok = credentialId === DEMO_CREDENTIAL && accessKey === DEMO_ACCESS_KEY && code === DEMO_VALIDATION_CODE;
    if (!ok) {
      setAuthError('La autenticación ha fallado. Verifique sus credenciales e intente nuevamente.');
      return;
    }
    setAuthError(null);
    login();
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-nexura-black/90 backdrop-blur-sm" onClick={handleClose}></div>
      <div className="relative z-10 bg-nexura-surface border border-nexura-gold/20 p-8 md:p-12 max-w-md w-full shadow-2xl animate-fade-in-up">
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 border border-nexura-red/30 bg-nexura-red/10 text-nexura-red text-[10px] uppercase tracking-widest">
          Demo
        </div>
        <button onClick={handleClose} className="absolute top-4 right-4 text-nexura-white/40 hover:text-nexura-gold transition-colors">
          <LuX size={20} />
        </button>
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-nexura-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-nexura-gold">
            <LuUser size={24} />
          </div>
          <h3 className="font-sans text-2xl text-nexura-white mb-2">Acceso Cliente</h3>
          <div className="mt-3 flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-2 text-nexura-white/60 text-[10px] uppercase tracking-widest">
              <LuShieldCheck size={12} className="text-green-500" />
              Autenticación MFA
            </div>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {authError && (
            <div className="border border-nexura-red/40 bg-nexura-red/10 p-4 text-nexura-red text-xs uppercase tracking-widest">
              {authError}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">ID Credencial</label>
              <input
                type="text"
                value={credentialId}
                onChange={(e) => {
                  setAuthError(null);
                  setCredentialId(e.target.value);
                }}
                className="w-full bg-nexura-black border border-nexura-white/10 p-3 text-nexura-white focus:outline-none focus:border-nexura-gold transition-colors font-mono text-sm"
                placeholder="NEX-ID"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-nexura-gold mb-2">Llave de Acceso</label>
              <input
                type="password"
                value={accessKey}
                onChange={(e) => {
                  setAuthError(null);
                  setAccessKey(e.target.value);
                }}
                className="w-full bg-nexura-black border border-nexura-white/10 p-3 text-nexura-white focus:outline-none focus:border-nexura-gold transition-colors font-mono text-sm"
                placeholder="••••••••"
              />
            </div>

            <div className="border border-nexura-white/10 bg-nexura-black/30 p-4">
              <p className="text-[10px] uppercase tracking-widest text-nexura-gold">Código de validación</p>

              <div className="mt-4 flex items-center justify-center gap-1 sm:gap-2 w-full max-w-[17rem] mx-auto">
                {Array.from({ length: 6 }).map((_, idx) => {
                  const showDash = idx === 3;
                  return (
                    <React.Fragment key={idx}>
                      {showDash && <span className="text-nexura-gold font-mono text-base sm:text-lg mx-0.5 sm:mx-1">-</span>}
                      <input
                        ref={(el) => {
                          codeRefs.current[idx] = el;
                        }}
                        value={validationDigits[idx] ?? ''}
                        onChange={(e) => {
                          setAuthError(null);
                          setDigitAt(idx, e.target.value);
                          const nextChar = e.target.value.replace(/\D/g, '').slice(0, 1);
                          if (nextChar && idx < 5) focusDigit(idx + 1);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Backspace') {
                            const current = validationDigits[idx] ?? '';
                            if (current === '' && idx > 0) {
                              focusDigit(idx - 1);
                            }
                          }
                          if (e.key === 'ArrowLeft' && idx > 0) {
                            e.preventDefault();
                            focusDigit(idx - 1);
                          }
                          if (e.key === 'ArrowRight' && idx < 5) {
                            e.preventDefault();
                            focusDigit(idx + 1);
                          }
                        }}
                        onPaste={(e) => {
                          const text = e.clipboardData.getData('text');
                          if (!text) return;
                          e.preventDefault();
                          setAuthError(null);
                          fillDigitsFromString(text);
                        }}
                        inputMode="numeric"
                        autoComplete={idx === 0 ? 'one-time-code' : 'off'}
                        maxLength={1}
                        required
                        pattern="[0-9]"
                        className="w-8 h-10 sm:w-10 sm:h-11 bg-nexura-black border border-nexura-white/10 text-nexura-white focus:outline-none focus:border-nexura-gold transition-colors font-mono text-sm sm:text-base text-center"
                        aria-label={`Código de validación (dígito ${idx + 1})`}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button type="submit" className="w-full bg-nexura-gold text-nexura-black font-bold uppercase tracking-widest py-3 mb-8 text-xs hover:bg-nexura-goldLight transition-colors">
              Ingresar
            </button>
            <Link
              href="mailto:contacto@nexura.lat?subject=Soporte%20-%20Recuperaci%C3%B3n%20de%20acceso%20MFA&body=Hola%20equipo%20de%20Nexura%2C%0A%0ANecesito%20asistencia%20para%20recuperar%20el%20acceso%3A%0A-%20Olvid%C3%A9%20mi%20contrase%C3%B1a%20y%2Fo%0A-%20Perd%C3%AD%20el%20generador%20de%20c%C3%B3digos%20de%20validaci%C3%B3n.%0A%0AGracias."
              className="nexura-underline-gold block w-full text-[10px] uppercase tracking-widest text-nexura-white/50 hover:text-nexura-gold transition-colors text-center"
            >
              Necesito asistencia para acceder
            </Link>
          </div>
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

  const privateAccessHref = hasMounted && isLoggedIn ? '/dashboard' : '/?login=1';

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || pathname !== '/' ? 'bg-nexura-black/95 backdrop-blur-md py-1' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/#hero"
            onClick={(e) => handleNavClick(e, '/#hero')}
            className="flex items-center gap-3 font-serif text-2xl tracking-[0.2em] text-nexura-white hover:text-nexura-gold transition-colors duration-300"
          >
            <img src="/nexura.svg" alt="Nexura Logo" className="h-12 lg:h-14 w-auto" />
            <span className="uppercase tracking-[0.2em] inline md:inline lg:inline">Nexura</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 md:pr-px">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[10px] lg:text-xs uppercase tracking-widest text-nexura-white/70 hover:text-nexura-gold transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

            {hasMounted && isLoggedIn ? (
              <div className="flex items-center gap-6">
                <Link href="/dashboard" className="text-[10px] uppercase tracking-widest text-nexura-white/40 flex items-center gap-2 hover:text-nexura-gold transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Dashboard
                 </Link>
                 <button 
                  onClick={logout}
                  className="ring-1 ring-inset ring-red-900/50 text-red-400 px-6 py-2 text-xs uppercase tracking-widest hover:bg-red-900/20 transition-all duration-300 flex items-center gap-2"
                >
                  <LuLogOut size={14} /> Cerrar Sesión
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="ring-1 ring-inset ring-nexura-gold text-nexura-gold px-4 lg:px-6 py-2 text-[10px] lg:text-xs uppercase tracking-widest hover:bg-nexura-gold hover:text-nexura-black transition-all duration-300 flex items-center gap-2"
              >
                <LuUser size={14} /> Acceso Privado
              </button>
            )}
          </nav>

          <button className="md:hidden text-nexura-white hover:text-nexura-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-nexura-black border-b border-nexura-white/10 md:hidden flex flex-col p-6 gap-6 shadow-2xl animate-fade-in-down">
            <Link
              href="/#hero"
              onClick={(e) => handleNavClick(e, '/#hero')}
              className="text-left text-sm uppercase tracking-widest text-nexura-white/80 hover:text-nexura-gold transition-colors cursor-pointer"
            >
              Inicio
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-left text-sm uppercase tracking-widest text-nexura-white/80 hover:text-nexura-gold transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-left text-sm uppercase tracking-widest text-nexura-white/80 hover:text-nexura-gold transition-colors cursor-pointer"
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