'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import {
  LuTrendingUp as TrendingUp,
  LuLock as Lock,
  LuEyeOff as EyeOff,
  LuLayers as Layers,
  LuBadgeCheck as BadgeCheck,
  LuTag as Tag,
  LuChartBar as ChartBar,
  LuClock3 as Clock3,
  LuIdCard as IdCard,
  LuBriefcase as FormBriefcase,
  LuWallet as Wallet,
  LuFileText as FileText,
  LuSend as Send,
  LuArrowUpRight as ArrowUpRight,
  LuBuilding2 as Building2,
  LuBriefcase as Briefcase,
  LuGem as Gem,
  LuFingerprint as Fingerprint,
  LuArrowRight as ArrowRight,
  LuArrowLeft as ArrowLeft,
  LuChevronRight as ChevronRight,
  LuChevronDown as ChevronDown,
  LuSearch as Search,
  LuSettings2 as Settings2,
  LuNetwork as Network,
} from 'react-icons/lu';

// Types
interface VerticalProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
interface StepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Data
const OPPORTUNITIES = [
  {
    category: "Logística",
    ref: "NX-8842",
    title: "Activo inmobiliario en zona logística estratégica. Documentación en fase final de saneamiento.",
    roi: "18%",
    timeline: "14 Meses"
  },
  {
    category: "M&A",
    ref: "NX-2109",
    title: "Unidad de negocio operativa en sector servicios. Facturación estable. Salida inmediata.",
    roi: "Estable",
    timeline: "Inmediata"
  },
  {
    category: "Hotelero",
    ref: "NX-9931",
    title: "Resort boutique en costa mediterránea. Requiere reestructuración de deuda senior.",
    roi: "22%",
    timeline: "24 Meses"
  },
  {
    category: "Energía",
    ref: "NX-5502",
    title: "Paquete de licencias fotovoltaicas (Ready-to-Build) con PPA firmado.",
    roi: "15%",
    timeline: "6 Meses"
  },
  {
    category: "Industrial",
    ref: "NX-3004",
    title: "Planta de procesamiento alimentario con maquinaria de última generación. Venta de activo.",
    roi: "12%",
    timeline: "12 Meses"
  }
];

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/background.webp" 
          alt="Abstract Architecture" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nexura-black/10 via-nexura-black/30 to-nexura-black"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-nexura-white mb-6 tracking-tight">
          Donde el valor <br/>
          <span className="text-nexura-gold italic">encuentra su destino.</span>
        </h1>
        <p className="font-light text-nexura-white/80 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed mb-10 tracking-wide">
          Estructuramos soluciones para activos complejos y conectamos capital con oportunidades de alta fricción. Sin burocracia, con precisión estratégica.
        </p>
      </div>

      {/* ChevronDown fijo abajo, centrado */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-15 z-20 flex flex-col items-center group select-none">
        <ChevronDown className="w-10 h-10 text-nexura-gold mt-1 animate-bounce group-hover:scale-110 transition-transform" />
      </div>
    </section>
  );
};

export const Philosophy = () => {
  return (
    <section id="filosofia" className="py-24 bg-nexura-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <span className="text-nexura-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">01. Filosofía</span>
                <h2 className="font-serif text-3xl md:text-4xl text-nexura-white mb-6">La Regla de Oro</h2>
                <div className="w-12 h-[2px] bg-nexura-gold mb-8"></div>
            </div>
            <div>
                <p className="text-nexura-white/70 font-light leading-relaxed text-lg">
                    "No operamos en el mercado masivo. Nexura nace para resolver la asimetría de información y la parálisis operativa."
                </p>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 border-t border-nexura-white/10 pt-12">
            {[
                {
                    title: "Discreción",
              icon: <EyeOff className="w-8 h-8 text-nexura-gold mb-4" strokeWidth={1} />,
                    desc: "Operaciones Off-Market fuera del radar público."
                },
                {
                    title: "Apalancamiento",
                  icon: <Layers className="w-8 h-8 text-nexura-gold mb-4" strokeWidth={1} />,
                    desc: "Minimizamos el esfuerzo operativo maximizando el retorno del activo."
                },
                {
                    title: "Resolución",
                  icon: <BadgeCheck className="w-8 h-8 text-nexura-gold mb-4" strokeWidth={1} />,
                    desc: "Si hay un bloqueo legal, emocional o financiero, Nexura diseña la salida."
                }
            ].map((item, idx) => (
                <div key={idx} className="group p-8 border border-nexura-white/5 bg-nexura-surface hover:border-nexura-gold/30 transition-all duration-500">
                    {item.icon}
                    <h3 className="font-serif text-xl text-nexura-white mb-3 group-hover:text-nexura-gold transition-colors">{item.title}</h3>
                    <p className="text-sm text-nexura-white/60 leading-relaxed font-light">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export const BusinessUnits = () => {
  const units: VerticalProps[] = [
    {
      title: "Real Estate",
      description: "Activos con trabas legales, herencias o paquetes de inversión corporativa.",
      icon: <Building2 size={24} strokeWidth={1} />
    },
    {
      title: "M&A & Business",
      description: "Venta confidencial de empresas operativas y unidades de negocio llave en mano.",
      icon: <Briefcase size={24} strokeWidth={1} />
    },
    {
      title: "Luxury Assets",
      description: "Gestión de liquidez para activos de movilidad (Yates, Aviones) y piezas de colección.",
      icon: <Gem size={24} strokeWidth={1} />
    },
    {
      title: "Strategic IP",
      description: "Licenciamiento de marcas, patentes y genética de alto rendimiento (Pedigree).",
      icon: <Fingerprint size={24} strokeWidth={1} />
    }
  ];

  return (
    <section id="unidades" className="py-24 bg-nexura-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
            <span className="text-nexura-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">02. Unidades</span>
            <h2 className="font-serif text-3xl md:text-4xl text-nexura-white">Divisiones de Estructuración</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-nexura-white/10 border border-nexura-white/10">
          {units.map((unit, idx) => (
            <div key={idx} className="bg-nexura-black p-12 hover:bg-nexura-surface transition-colors duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight className="text-nexura-gold" />
              </div>
              <div className="mb-6 text-nexura-gold bg-nexura-gold/5 w-16 h-16 rounded-full flex items-center justify-center border border-nexura-gold/25">
                {unit.icon}
              </div>
              <h3 className="font-serif text-2xl text-nexura-white mb-4">{unit.title}</h3>
              <p className="text-nexura-white/60 font-light leading-relaxed max-w-sm">
                {unit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Protocol = () => {
  const steps: StepProps[] = [
    { title: "Auditoría de Fricción", description: "Analizamos por qué el activo está estancado.", icon: <Search size={18} strokeWidth={1.5} /> },
    { title: "Ingeniería de la Operación", description: "Limpiamos la estructura legal y financiera para hacerla atractiva.", icon: <Settings2 size={18} strokeWidth={1.5} /> },
    { title: "Sourcing Privado", description: "Activamos nuestra red de contactos y nodos de poder sin anuncios públicos.", icon: <Network size={18} strokeWidth={1.5} /> },
    { title: "Captura de Valor", description: "Cierre de la transacción y transferencia de activos.", icon: <TrendingUp size={18} strokeWidth={1.5} /> },
  ];

  return (
    <section id="protocolo" className="py-24 bg-nexura-black">
      <div className="max-w-7xl mx-auto px-6">
         <div className="mb-16 text-center">
            <span className="text-nexura-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">03. El Protocolo</span>
            <h2 className="font-serif text-3xl md:text-4xl text-nexura-white mb-4">Sistemática de Precisión</h2>
            <p className="text-nexura-white/50 max-w-xl mx-auto text-sm">Un proceso replicable para minimizar riesgos y garantizar resultados.</p>
        </div>

        <div className="relative mt-20">
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="group relative">
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-[22px] -right-6 z-0 text-nexura-white/50">
                    <ArrowRight size={18} />
                  </div>
                )}
                <div className="w-12 h-12 bg-nexura-gold/10 border border-nexura-gold/25 text-nexura-gold flex items-center justify-center rounded-full mx-auto mb-6 group-hover:border-nexura-gold group-hover:text-nexura-gold transition-all duration-300 relative z-10">
                  {step.icon}
                </div>
                <div className="text-center px-4">
                  <h3 className="text-nexura-white font-serif text-lg mb-3">{step.title}</h3>
                  <div className="w-12 h-[1px] bg-nexura-white/10 mx-auto mb-4"></div>
                  <p className="text-xs text-nexura-white/50 leading-relaxed uppercase tracking-wider">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Opportunities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  const cardRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const isAutoScrollingRef = React.useRef(false);
  const autoScrollTokenRef = React.useRef(0);
  const autoScrollRafRef = React.useRef<number | null>(null);

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    // Desktop: si hay una animación en curso, la reemplazamos (clicks rápidos)
    autoScrollTokenRef.current += 1;
    const token = autoScrollTokenRef.current;
    if (autoScrollRafRef.current != null) {
      cancelAnimationFrame(autoScrollRafRef.current);
      autoScrollRafRef.current = null;
    }

    // Centra la card dentro del contenedor (mejor UX que usar clientWidth fijo)
    const rawTarget = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
    const maxScrollLeft = Math.max(0, container.scrollWidth - container.clientWidth);
    const target = Math.max(0, Math.min(rawTarget, maxScrollLeft));
    const start = container.scrollLeft;
    const distance = target - start;
    const duration = 700; // un poco más lento/suave
    const startTime = performance.now();

    isAutoScrollingRef.current = true;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOutCubic = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      container.scrollLeft = start + distance * easeInOutCubic;

      if (progress < 1) {
        if (token !== autoScrollTokenRef.current) return;
        autoScrollRafRef.current = requestAnimationFrame(animateScroll);
        return;
      }

      // Asegura el valor final (evita clamping raro en extremos)
      container.scrollLeft = target;
      if (token === autoScrollTokenRef.current) {
        isAutoScrollingRef.current = false;
        autoScrollRafRef.current = null;
      }
    };

    autoScrollRafRef.current = requestAnimationFrame(animateScroll);
  };

  const scroll = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left'
      ? Math.max(0, currentIndex - 1)
      : Math.min(OPPORTUNITIES.length - 1, currentIndex + 1);

    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const scrollDesktop = (direction: 'left' | 'right') => {
    setCurrentIndex((prev) => {
      const next = direction === 'left'
        ? Math.max(0, prev - 1)
        : Math.min(OPPORTUNITIES.length - 1, prev + 1);
      scrollToCard(next);
      return next;
    });
  };

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    scrollToCard(index);
  };

  // Reinicia siempre a la primera card al recargar la página (evita restauración de scroll horizontal)
  React.useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    isAutoScrollingRef.current = true;
    autoScrollTokenRef.current += 1;
    if (autoScrollRafRef.current != null) {
      cancelAnimationFrame(autoScrollRafRef.current);
      autoScrollRafRef.current = null;
    }

    container.scrollLeft = 0;
    setCurrentIndex(0);

    const raf = requestAnimationFrame(() => {
      isAutoScrollingRef.current = false;
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current || isDragging || isAutoScrollingRef.current) return;

      const container = scrollRef.current;
      const center = container.scrollLeft + container.clientWidth / 2;

      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (let i = 0; i < OPPORTUNITIES.length; i++) {
        const card = cardRefs.current[i];
        if (!card) continue;
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(cardCenter - center);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      }

      setCurrentIndex((prev) => (prev === bestIndex ? prev : bestIndex));
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        scrollElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isDragging]);

  return (
    <section id="oportunidades" className="py-24 bg-nexura-surface border-y border-nexura-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="flex-1">
                <span className="text-nexura-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">04. Inventario Activo</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-nexura-white mb-2">Blind Teasers</h2>
                <p className="text-nexura-white/50 text-sm max-w-xl">Oportunidades exclusivas verificadas. Acceso restringido mediante NDA.</p>
            </div>
            <div className="flex items-center gap-2 text-nexura-white/40 text-xs tracking-widest uppercase">
                <Lock size={14} className="text-nexura-gold" />
                <span className="hidden md:inline">Confidential Data Room</span>
                <span className="md:hidden">Confidencial</span>
            </div>
        </div>

        {/* Carrusel con navegación responsiva */}
        <div className="relative md:px-14">
          {/* Desktop: chevrons a los costados, centrados verticalmente */}
          <button 
            onClick={() => scrollDesktop('left')} 
            disabled={currentIndex === 0}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-nexura-white/20 text-nexura-white/70 items-center justify-center hover:border-nexura-gold hover:text-nexura-gold transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-nexura-white/20 disabled:hover:text-nexura-white group"
            aria-label="Anterior"
          >
            <ArrowLeft size={18} className="group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
          </button>

          <button 
            onClick={() => scrollDesktop('right')} 
            disabled={currentIndex === OPPORTUNITIES.length - 1}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-nexura-white/20 text-nexura-white/70 items-center justify-center hover:border-nexura-gold hover:text-nexura-gold transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-nexura-white/20 disabled:hover:text-nexura-white group"
            aria-label="Siguiente"
          >
            <ArrowRight size={18} className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          </button>

          <div
            ref={scrollRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
              {OPPORTUNITIES.map((item, idx) => (
                <div 
                  key={idx} 
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  onClick={(e) => {
                    if (idx === currentIndex) return;
                    const target = e.target as HTMLElement | null;
                    if (target?.closest('a,button')) return;
                    scrollToIndex(idx);
                  }}
                  className={`min-w-[90vw] sm:min-w-[85vw] md:min-w-[420px] lg:min-w-[480px] snap-center bg-nexura-black border p-6 md:p-10 transition-all duration-500 flex flex-col justify-between group md:hover:shadow-2xl md:hover:shadow-nexura-gold/5 md:hover:-translate-y-1 ${idx === currentIndex ? 'border-nexura-gold/40 ring-1 ring-inset ring-nexura-gold/40 blur-none md:blur-none' : 'border-nexura-white/5 blur-sm md:blur-sm'}`}
                >
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="bg-nexura-gold/10 text-nexura-gold text-[10px] uppercase font-bold px-3 py-1.5 tracking-wider border border-nexura-gold/20">{item.category}</span>
                            <span className="text-nexura-white/30 text-xs font-mono flex items-center gap-2">
                              <Tag size={12} className="text-nexura-gold" />
                              REF: {item.ref}
                            </span>
                        </div>
                        <h3 className="text-xl md:text-2xl text-nexura-white mb-6 font-serif leading-snug group-hover:text-nexura-gold/90 transition-colors duration-300">
                            {item.title}
                        </h3>
                        <div className="grid grid-cols-2 gap-6 mb-8 border-t border-nexura-white/10 pt-6">
                             <div>
                                <span className="flex items-center gap-2 text-[10px] text-nexura-white/40 uppercase tracking-wider mb-2">
                                  <ChartBar size={12} className="text-nexura-gold" />
                                  Retorno (Est)
                                </span>
                                <span className="text-nexura-gold text-2xl font-serif">{item.roi}</span>
                             </div>
                             <div>
                                <span className="flex items-center gap-2 text-[10px] text-nexura-white/40 uppercase tracking-wider mb-2">
                                  <Clock3 size={12} className="text-nexura-gold" />
                                  Horizonte
                                </span>
                                <span className="text-nexura-white text-2xl font-serif">{item.timeline}</span>
                             </div>
                        </div>
                    </div>
                    <Link 
                      href={`/dossier?ref=${item.ref}`}
                      className="w-full border-2 border-nexura-white/20 text-nexura-white text-xs uppercase tracking-widest py-4 hover:bg-nexura-gold hover:border-nexura-gold hover:text-nexura-black transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-nexura-gold/50 font-semibold"
                    >
                        Solicitar Dossier <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
              ))}
          </div>
        </div>

        {/* Botones de navegación en mobile */}
        <div className="flex md:hidden justify-center items-center gap-4 mt-8">
          <button 
            onClick={() => scroll('left')} 
            disabled={currentIndex === 0}
            className="w-10 h-10 border border-nexura-white/20 flex items-center justify-center hover:border-nexura-gold hover:text-nexura-gold transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-nexura-white/20 disabled:hover:text-nexura-white group"
          >
              <ArrowLeft size={16} className="group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
          </button>
          <button 
            onClick={() => scroll('right')} 
            disabled={currentIndex === OPPORTUNITIES.length - 1}
            className="w-10 h-10 border border-nexura-white/20 flex items-center justify-center hover:border-nexura-gold hover:text-nexura-gold transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-nexura-white/20 disabled:hover:text-nexura-white group"
          >
              <ArrowRight size={16} className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
        
        {/* Indicadores de progreso */}
        <div className="flex justify-center items-center mt-8 gap-3">
          {OPPORTUNITIES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`transition-all duration-300 ${
                idx === currentIndex 
                  ? 'w-12 h-1.5 bg-nexura-gold' 
                  : 'w-8 h-1.5 bg-nexura-white/20 hover:bg-nexura-white/40'
              }`}
              aria-label={`Ir a oportunidad ${idx + 1}`}
            />
          ))}
        </div>

        {/* Contador */}
        <div className="flex justify-center items-center mt-6 gap-2">
          <span className="text-nexura-gold font-serif text-lg">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="text-nexura-white/30 text-sm">/</span>
          <span className="text-nexura-white/30 font-serif text-lg">{String(OPPORTUNITIES.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
};

export const ContactForm = () => {
  return (
    <section id="contacto" className="py-24 bg-nexura-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-nexura-surface to-transparent pointer-events-none opacity-50"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
             <h2 className="font-serif text-3xl md:text-5xl text-nexura-white mb-4">Solicitud de Evaluación</h2>
             <p className="text-nexura-white/50 font-light">Acceso restringido a inversores cualificados y propietarios de activos.</p>
        </div>

        <form className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="group">
                    <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-nexura-white mb-2">
                      <IdCard size={12} className="text-nexura-gold" />
                Identidad
              </label>
                    <input type="text" placeholder="Nombre y Organización" className="w-full bg-transparent border-b border-nexura-white/20 py-3 text-nexura-white placeholder-nexura-white/20 focus:outline-none focus:border-nexura-gold transition-colors font-light text-lg" />
                </div>
                <div className="group">
                    <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-nexura-white mb-2">
                      <FormBriefcase size={12} className="text-nexura-gold" />
                Perfil
              </label>
                    <select className="w-full bg-transparent border-b border-nexura-white/20 py-3 text-nexura-white focus:outline-none focus:border-nexura-gold transition-colors font-light text-lg appearance-none rounded-none cursor-pointer">
                        <option className="bg-nexura-black">Tengo un activo bloqueado</option>
                        <option className="bg-nexura-black">Soy inversor (Deal Flow)</option>
                    </select>
                </div>
            </div>

            <div className="group">
                <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-nexura-white mb-2">
                  <Wallet size={12} className="text-nexura-gold" />
              Capacidad Operativa (Estimada)
            </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {['< USD 50k', 'USD 50k - 200k', '+ USD 200k'].map((opt) => (
                        <label key={opt} className="cursor-pointer">
                            <input type="radio" name="budget" className="peer sr-only" />
                            <div className="border border-nexura-white/10 text-nexura-white/60 py-4 text-center text-sm uppercase tracking-wider hover:border-nexura-white/40 peer-checked:border-nexura-gold peer-checked:text-nexura-gold transition-all">
                                {opt}
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            <div className="group">
                <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-nexura-white mb-2">
                  <FileText size={12} className="text-nexura-gold" />
                Contexto
              </label>
                <textarea rows={4} placeholder="Descripción breve del bloqueo o interés estratégico..." className="w-full bg-transparent border-b border-nexura-white/20 py-3 text-nexura-white placeholder-nexura-white/20 focus:outline-none focus:border-nexura-gold transition-colors font-light text-lg resize-none"></textarea>
            </div>

            <div className="pt-8">
              <button type="submit" className="w-full bg-nexura-white text-nexura-black font-serif uppercase tracking-widest py-5 text-sm hover:bg-nexura-gold transition-colors duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] inline-flex items-center justify-center gap-2">
                <Send size={16} />
                Iniciar Protocolo
                </button>
                <p className="text-center text-[10px] text-nexura-white/30 mt-6 uppercase tracking-widest">
                    <Lock size={10} className="inline mr-1 mb-0.5" />
                    Toda la información es tratada bajo estrictos acuerdos de confidencialidad.
                </p>
            </div>
        </form>
      </div>
    </section>
  );
};