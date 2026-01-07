import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { IconType } from 'react-icons';
import {
  LuBuilding2 as Building2,
  LuBriefcase as Briefcase,
  LuCircleAlert as AlertCircle,
  LuCompass as Compass,
  LuFrame as Frame,
  LuFileText as FileText,
  LuGem as Gem,
  LuFingerprint as Fingerprint,
  LuLock as Lock,
  LuShuffle as Shuffle,
  LuSparkles as Sparkles,
  LuRadar as Radar,
} from 'react-icons/lu';

type UnitKey =
  | 'real-estate'
  | 'ma-business'
  | 'luxury-assets'
  | 'strategic-ip'
  | 'talent-image-capital'
  | 'attention-brokerage';

type UnitContent = {
  title: string;
  subtitle: string;
  Icon: IconType;
  apertura: string;
  queEntra: string;
  problemaReal: string;
  intervencion: string;
  acceso: string[];
};

const UNITS: Record<UnitKey, UnitContent> = {
  'real-estate': {
    title: 'REAL ESTATE',
    subtitle: 'Estructuración Inmobiliaria Especial',
    Icon: Building2,
    apertura: 'No todos los activos inmobiliarios necesitan exposición. Algunos necesitan estructura.',
    queEntra:
      'Activos inmobiliarios de alto valor, dentro y fuera de mercado, con estructuras simples o complejas. Incluye propiedades individuales, paquetes, tierras y activos patrimoniales con potencial de reposicionamiento estratégico.',
    problemaReal:
      'El capital inmobiliario suele quedar inmovilizado por combinaciones de factores legales, familiares, fiscales o de mercado. La fricción no siempre está en el activo, sino en su contexto.',
    intervencion:
      'Nexura actúa como estructurador de operaciones especiales, ordenando la información, encuadrando la operación y conectando el activo con capital calificado bajo esquemas off-market y a resultado.',
    acceso: ['Esta unidad opera bajo evaluación privada y mandato específico.', 'El acceso no es público ni automático.']
  },
  'ma-business': {
    title: 'M&A & BUSINESS',
    subtitle: 'Estructuración de Salidas y Transacciones Empresariales',
    Icon: Briefcase,
    apertura: 'Vender una empresa no es una transacción. Es una decisión estructural.',
    queEntra:
      'Empresas operativas, unidades de negocio, activos productivos y estructuras societarias que requieren procesos de salida confidenciales, parciales o totales.',
    problemaReal:
      'Muchos negocios son vendibles, pero no están preparados para ser presentados. El riesgo reputacional, la confidencialidad y el desorden interno bloquean operaciones que, bien estructuradas, serían viables.',
    intervencion:
      'Nexura estructura procesos de salida discretos, ordena la narrativa financiera y conecta oportunidades con compradores estratégicos sin exposición pública ni intermediación masiva.',
    acceso: ['Las operaciones se gestionan exclusivamente bajo mandato y a éxito.', 'No se trabaja por volumen.']
  },
  'luxury-assets': {
    title: 'LUXURY ASSETS',
    subtitle: 'Liquidez y Rotación de Activos de Alto Valor',
    Icon: Gem,
    apertura: 'Un activo de alto valor detenido no es patrimonio. Es fricción.',
    queEntra:
      'Activos patrimoniales subutilizados o estratégicos: movilidad, colección y bienes de alto valor que requieren gestión de uso, rotación o salida.',
    problemaReal:
      'La ociosidad tiene costo. Mantenimiento, riesgo y falta de liquidez convierten activos valiosos en cargas innecesarias cuando no existe estructura para gestionarlos.',
    intervencion:
      'Nexura diseña esquemas de uso, rotación o salida sin asumir propiedad ni operación directa, conectando activos con demanda calificada bajo acuerdos privados.',
    acceso: ['Esta unidad opera de forma estrictamente discreta y selectiva.', 'No existe catálogo público.']
  },
  'strategic-ip': {
    title: 'STRATEGIC IP',
    subtitle: 'Licenciamiento y Monetización de Activos Intangibles',
    Icon: Fingerprint,
    apertura: 'El valor no siempre es visible. A veces está mal estructurado.',
    queEntra:
      'Marcas, patentes, métodos, sistemas y genética de alto rendimiento con potencial de licenciamiento o transferencia.',
    problemaReal:
      'Muchos activos intangibles tienen valor, pero carecen de estructura para ser monetizados sin involucrarse en la operación diaria.',
    intervencion:
      'Nexura estructura modelos de licenciamiento y transferencia que permiten capturar valor sin ejecutar, producir ni escalar internamente.',
    acceso: ['Las oportunidades se analizan caso a caso.', 'No se aceptan activos sin validación previa.']
  },
  'talent-image-capital': {
    title: 'TALENT & IMAGE CAPITAL',
    subtitle: 'Gestión Estructural de Oportunidades Off-Field',
    Icon: Sparkles,
    apertura: 'El rendimiento no siempre ocurre en el campo de juego.',
    queEntra:
      'Perfiles de alto rendimiento con activos de imagen, influencia o trayectoria profesional que requieren estructuración fuera de su actividad principal.',
    problemaReal:
      'Carreras cortas, falta de educación financiera y exposición desordenada generan pérdida de valor a mediano plazo.',
    intervencion:
      'Nexura estructura oportunidades off-field, conectando imagen, patrocinio e inversión bajo esquemas selectivos y no masivos.',
    acceso: ['No es representación clásica ni agencia.', 'La participación es limitada y estratégica.']
  },
  'attention-brokerage': {
    title: 'ATTENTION BROKERAGE',
    subtitle: 'Intermediación Privada de Atención y Acceso',
    Icon: Radar,
    apertura: 'La atención calificada es un activo. Mal gestionada, se desperdicia.',
    queEntra:
      'Audiencias cerradas, espacios estratégicos y canales de atención con alto valor comercial o institucional.',
    problemaReal:
      'Las marcas buscan acceso real. Los activos de atención suelen estar subexplotados o mal intermediados.',
    intervencion:
      'Nexura actúa como broker de atención, estructurando acuerdos privados de conexión bajo esquemas de revenue share o participación estratégica.',
    acceso: ['Esta unidad no opera como agencia ni medio.', 'El acceso es selectivo.']
  }
};

export default async function DivisionUnidadPage({
  params
}: {
  params: Promise<{ unit: string }>;
}) {
  const { unit } = await params;
  const unitKey = unit as UnitKey;
  const content = UNITS[unitKey];

  if (!content) notFound();

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-nexura-black">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto">
          <div className="max-w-3xl mx-auto mb-12 pb-4">
            {/* Mobile header: icon next to unit name; subtitle below */}
            <div className="md:hidden">
              <div className="flex items-center justify-between gap-4">
                <span className="text-nexura-gold text-xs font-bold tracking-[0.2em] uppercase block">
                  {content.title}
                </span>
                <content.Icon
                  strokeWidth={1.8}
                  className="text-nexura-gold w-10 h-10 shrink-0"
                />
              </div>
              <h1 className="font-serif text-3xl text-nexura-white mt-5">
                {content.subtitle}
              </h1>
              <div className="w-12 h-[2px] bg-nexura-gold mt-6" />
            </div>

            {/* Tablet/Desktop header: icon to the right */}
            <div className="hidden md:flex items-start justify-between gap-10">
              <div>
                <span className="text-nexura-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                  {content.title}
                </span>
                <h1 className="font-serif md:text-4xl lg:text-5xl text-nexura-white mb-4">
                  {content.subtitle}
                </h1>
                <div className="w-12 h-[2px] bg-nexura-gold" />
              </div>

              <div className="flex items-start justify-end pt-1 shrink-0">
                <content.Icon strokeWidth={1.8} className="text-nexura-gold w-[86px] h-[86px]" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="md:max-w-2xl md:mx-auto">
              <div className="bg-nexura-black p-10 hover:bg-nexura-surface transition-colors duration-500 ring-1 ring-inset ring-nexura-white/10 md:ring-nexura-white/15 lg:ring-nexura-white/10">
                <h2 className="flex items-center gap-2 text-nexura-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  <Compass size={16} strokeWidth={2} className="shrink-0" />
                  Contexto
                </h2>
                <div className="space-y-4">
                    <p className="text-nexura-white/60 font-light leading-relaxed text-sm md:text-base">
                    {content.apertura}
                    </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto lg:max-w-5xl">
            <div className="mt-4 flex flex-col gap-4 md:mt-8 md:grid md:grid-cols-2 md:gap-8 lg:gap-10 md:border-0 md:divide-y-0 md:pr-px lg:pr-0">
              <div className="bg-nexura-black p-10 hover:bg-nexura-surface transition-colors duration-500 ring-1 ring-inset ring-nexura-white/10 md:ring-nexura-white/15 lg:ring-nexura-white/10">
                <h2 className="flex items-center gap-2 text-nexura-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  <Frame size={16} strokeWidth={2} className="shrink-0" />
                  Alcance
                </h2>
                <p className="text-nexura-white/60 font-light leading-relaxed text-sm md:text-base">
                  {content.queEntra}
                </p>
              </div>

              <div className="bg-nexura-black p-10 hover:bg-nexura-surface transition-colors duration-500 ring-1 ring-inset ring-nexura-white/10 md:ring-nexura-white/15 lg:ring-nexura-white/10">
                <h2 className="flex items-center gap-2 text-nexura-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  <AlertCircle size={16} strokeWidth={2} className="shrink-0" />
                  Situación
                </h2>
                <p className="text-nexura-white/60 font-light leading-relaxed text-sm md:text-base">
                  {content.problemaReal}
                </p>
              </div>

              <div className="bg-nexura-black p-10 hover:bg-nexura-surface transition-colors duration-500 ring-1 ring-inset ring-nexura-white/10 md:ring-nexura-white/15 lg:ring-nexura-white/10">
                <h2 className="flex items-center gap-2 text-nexura-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  <Shuffle size={16} strokeWidth={2} className="shrink-0" />
                  Enfoque
                </h2>
                <p className="text-nexura-white/60 font-light leading-relaxed text-sm md:text-base">
                  {content.intervencion}
                </p>
              </div>

              <div className="bg-nexura-black p-10 hover:bg-nexura-surface transition-colors duration-500 ring-1 ring-inset ring-nexura-white/10 md:ring-nexura-white/15 lg:ring-nexura-white/10">
                <h2 className="flex items-center gap-2 text-nexura-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  <Lock size={16} strokeWidth={2} className="shrink-0" />
                  Condición de Acceso
                </h2>

                <div className="space-y-3">
                  {content.acceso.map((line, idx) => (
                    <p
                      key={idx}
                      className="text-sm md:text-base text-nexura-white/60 font-light leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-10">
              <div className="max-w-xl mx-auto">
                <Link
                  href="/dossier"
                  className="block w-full text-center bg-nexura-gold text-nexura-black font-sans font-semibold uppercase tracking-widest py-5 text-sm hover:bg-nexura-goldLight transition-colors"
                >
                  Solicitar Evaluación
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
