'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import InteractiveNicheBoceto from './InteractiveNicheBoceto';
import {
  Sparkles,
  Smartphone,
  Monitor,
  ExternalLink,
  MessageCircle,
  Eye,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Star,
  X,
  Zap,
  Copy,
  Check,
} from 'lucide-react';

export const NICHE_STITCH_PROMPTS: Record<string, string> = {
  'artisan-market': 'Design a high-converting restaurant and seafood bistro landing page in "Liquid Glass" aesthetic for "Mariscos & Parrilla El Rey" in Guaymas, Sonora. Digital QR food menu, table order selector, dish cards with fresh coastal photography, spicy salsa selector, WhatsApp order integration, Google Maps location, opening hours and reviews. Translucent glassmorphism cards (backdrop-blur-xl), luminous amber and cyan accents, Plus Jakarta Sans typography.',
  'studio-veloce': 'Design a sleek automotive repair and ceramic detailing web app in "Liquid Glass" dark aesthetic for "Studio Veloce Automotriz" in Sonora. Vehicle selector (Sedan, SUV, Pickup), service quote calculator (major tune-up, ceramic coating, brakes), 6-month written warranty badge, WhatsApp booking calendar and emergency roadside assistance. Luminous cyan-400 borders, glass panels.',
  'zenith-architects': 'Design a luxury real estate and architectural catalog in "Liquid Glass" aesthetic for "Zenith Real Estate" in San Carlos, Sonora. Sea of Cortez waterfront villas, dynamic architectural blueprints view, virtual tour badges, pricing in MXN and USD, property amenity pills and direct VIP broker contact via WhatsApp. Deep navy background with glass accents.',
  'lumina-store': 'Design a modern retail e-commerce fashion boutique in "Liquid Glass" aesthetic for "Lumina Store Sonora Chic". High-end linen beachwear collection, size & color palette picker, persistent shopping bag drawer, WhatsApp checkout and Stripe card gateway, free local shipping in Guaymas and Hermosillo. Rose and emerald glass glow.',
  'kroma-visuals': 'Design an exclusive yacht charter and tourism experience portal in "Liquid Glass" marine aesthetic for "Kroma San Carlos Yacht Charters". Fleet showcase (Sea Ray 42ft, Tetakawi Sunset Catamaran), interactive hourly charter calculator, guest counter, sunset cruise booking with WhatsApp concierge. Turquoise and sea glass highlights.',
  'aura-creative': 'Design a trusted medical spa and cosmetic dentistry clinic website in "Liquid Glass" aesthetic for "Aura Dental & Medical Spa" in Guaymas. Treatment catalog (ultrasonic cleaning, laser teeth whitening, porcelain veneers), specialist profiles, shift appointment calendar and 5-star Google review testimonials. Fuchsia and teal glass aesthetic.',
  'taskflow-pro': 'Design a corporate accounting and tax advisory portal in "Liquid Glass" aesthetic for "TaskFlow Fiscal & Legal" in Sonora. Interactive monthly fee calculator based on invoicing volume and payroll employees, zero-fine guarantee badge, confidential document upload area and SAT compliance WhatsApp button. Deep blue and emerald glass.',
  'pulse-metrics': 'Design a real-time SaaS business intelligence and branch performance dashboard in "Liquid Glass" neon aesthetic for "PulseMetrics Analytics". Interactive MRR revenue charts, timeframe toggles (day/week/month), growth simulation slider, Google Gemini AI predictive insights and executive PDF export. Indigo, cyan and amber neon glow.',
  'datasphere-cms': 'Design a high-speed B2B auto parts and wholesale industrial catalog in "Liquid Glass" aesthetic for "DataSphere Refaccionarias" in Sonora. Instant SKU and vehicle part search, wholesale volume discount checkbox (-20%), downloadable technical spec sheets and batch order quotation via WhatsApp. Industrial amber and obsidian glass.',
  'novapay-billing': 'Design an automated invoicing and payment portal in "Liquid Glass" fintech aesthetic for "NovaPay Billing Engine". Client RFC field, CFDI 4.0 concept selector, 16% IVA calculation, 50% deposit generator, official beneficiary HP Digital & AI Agency and WhatsApp payment proof submission. Emerald and cyan glassmorphism.',
};

export interface DemoSliderItem {
  id: string;
  slug: string;
  title: string;
  nicheLabel: string;
  badge: string;
  packageTier: string;
  priceMxn: string;
  depositMxn: string;
  description: string;
  features: string[];
  svgPreview: string;
  fullDemoUrl: string;
  authorHandle: string;
  videoUrl: string;
  rating: number;
}

export const PORTFOLIO_DEMO_ITEMS: DemoSliderItem[] = [
  {
    id: 'artisan-market',
    slug: 'artisan-market',
    title: 'Artisan Market',
    nicheLabel: 'Restaurantes, Cafeterías & Gastronomía',
    badge: '🍽️ Menú QR & WhatsApp',
    packageTier: 'Paquete Profesional',
    priceMxn: '$8,900 MXN',
    depositMxn: '$4,450 MXN (50% anticipo)',
    description: 'Menú digital interactivo en alta definición, pedidos directos por WhatsApp, fotos de platillos y valoraciones locales en Google Maps.',
    features: ['Menú QR para mesas', 'Pedidos directos a WhatsApp', '1.er año Hosting y Dominio GRATIS', 'SEO Local en Google Maps'],
    svgPreview: '/images/projects/artisan-market.svg',
    fullDemoUrl: '/proyecto/artisan-market?demo=live',
    authorHandle: 'mariscos_el_rey_guaymas',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-top-shot-of-a-table-with-food-and-hands-cutting-42475-large.mp4',
    rating: 5.0,
  },
  {
    id: 'studio-veloce',
    slug: 'studio-veloce',
    title: 'Studio Veloce Automotriz',
    nicheLabel: 'Talleres Mecánicos & Detailing',
    badge: '🛠️ Mecánica & Citas WhatsApp',
    packageTier: 'Paquete Profesional',
    priceMxn: '$8,900 MXN',
    depositMxn: '$4,450 MXN (50% anticipo)',
    description: 'Diagnósticos técnicos, cotización de servicios por WhatsApp, agenda de citas en línea y garantía de refacciones por escrito.',
    features: ['Cotizador rápido de afinación', 'Agenda de citas por WhatsApp', 'Garantía por escrito', 'Ubicación GPS Guaymas/San Carlos'],
    svgPreview: '/images/projects/studio-veloce.svg',
    fullDemoUrl: '/proyecto/studio-veloce?demo=live',
    authorHandle: 'taller_automotriz_sonora',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-car-headlights-in-the-night-42845-large.mp4',
    rating: 4.9,
  },
  {
    id: 'zenith-architects',
    slug: 'zenith-architects',
    title: 'Zenith Studio Arquitectura',
    nicheLabel: 'Bienes Raíces & Rentas San Carlos',
    badge: '🏠 Inmobiliaria & Bienes Raíces',
    packageTier: 'Paquete Profesional',
    priceMxn: '$8,900 MXN',
    depositMxn: '$4,450 MXN (50% anticipo)',
    description: 'Catálogo de propiedades exclusivas, planos interactivos, galerías cinematográficas y contacto directo con asesores inmobiliarios.',
    features: ['Filtro de propiedades en venta/renta', 'Galería HD con recorrido virtual', 'Botón directo con asesor WhatsApp', 'Ficha técnica descargable'],
    svgPreview: '/images/projects/zenith-architects.svg',
    fullDemoUrl: '/proyecto/zenith-architects?demo=live',
    authorHandle: 'bienes_raices_sancarlos',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-wooden-details-42998-large.mp4',
    rating: 5.0,
  },
  {
    id: 'lumina-store',
    slug: 'lumina-store',
    title: 'Lumina Store E-Commerce',
    nicheLabel: 'Boutiques, Tiendas de Ropa & Retail',
    badge: '🛍️ E-commerce & Pasarela',
    packageTier: 'Paquete Escalable / E-Commerce',
    priceMxn: '$14,900 MXN',
    depositMxn: '$7,450 MXN (50% anticipo)',
    description: 'Tienda en línea completa con carrito de compras, variantes de color y talla, cobro por tarjeta / transferencia y control de stock.',
    features: ['Carrito de compras persistente', 'Control de tallas y variantes', 'Cobros con Tarjeta / OXXO / SPEI', 'Catálogo autoadministrable'],
    svgPreview: '/images/projects/lumina-store.svg',
    fullDemoUrl: '/proyecto/lumina-store?demo=live',
    authorHandle: 'boutique_sonora_chic',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-showing-off-an-outfit-41712-large.mp4',
    rating: 5.0,
  },
  {
    id: 'kroma-visuals',
    slug: 'kroma-visuals',
    title: 'Kroma Visuals Turismo & Yates',
    nicheLabel: 'Turismo, Yates San Carlos & Spas',
    badge: '⛵ Turismo & Yates San Carlos',
    packageTier: 'Paquete Profesional',
    priceMxn: '$8,900 MXN',
    depositMxn: '$4,450 MXN (50% anticipo)',
    description: 'Visuales de alto impacto con video background, reservas de tours por yate, galerías fotográficas de atardeceres y botón VIP.',
    features: ['Video background en 4K', 'Reserva de paseos en yate', 'Galería de experiencias turísticas', 'Botón WhatsApp concierge'],
    svgPreview: '/images/projects/kroma-visuals.svg',
    fullDemoUrl: '/proyecto/kroma-visuals?demo=live',
    authorHandle: 'yates_san_carlos_oficial',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-crashing-on-the-beach-41551-large.mp4',
    rating: 5.0,
  },
  {
    id: 'aura-creative',
    slug: 'aura-creative',
    title: 'Aura Creative Salud & Belleza',
    nicheLabel: 'Clínicas Dentales, Médicas & Spas',
    badge: '✨ Salud, Belleza & Citas',
    packageTier: 'Paquete Esencial',
    priceMxn: '$4,900 MXN',
    depositMxn: '$2,450 MXN (50% anticipo)',
    description: 'Diseño limpio y confiable para servicios médicos o estética. Lista de tratamientos, agenda de citas y testimonios de pacientes.',
    features: ['Agenda rápida de citas médicas', 'Lista de tratamientos con precios', 'Opiniones verificadas de Google', 'Ubicación en Google Maps'],
    svgPreview: '/images/projects/aura-creative.svg',
    fullDemoUrl: '/proyecto/aura-creative?demo=live',
    authorHandle: 'dental_spa_guaymas',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-posing-with-colorful-lights-42867-large.mp4',
    rating: 4.9,
  },
  {
    id: 'taskflow-pro',
    slug: 'taskflow-pro',
    title: 'TaskFlow Pro Despachos',
    nicheLabel: 'Despachos Contables, Fiscales & Abogados',
    badge: '⚖️ Despachos & Consultoría',
    packageTier: 'Paquete Profesional',
    priceMxn: '$8,900 MXN',
    depositMxn: '$4,450 MXN (50% anticipo)',
    description: 'Portal profesional para despachos corporativos. Recepción de expedientes, solicitud de cotizaciones de nómina y asesoría fiscal.',
    features: ['Solicitud de cotizaciones fiscales', 'Recepción de documentos digitales', 'Certificado SSL empresarial', 'Atención por WhatsApp'],
    svgPreview: '/images/projects/taskflow-pro.svg',
    fullDemoUrl: '/proyecto/taskflow-pro?demo=live',
    authorHandle: 'despacho_contable_sonora',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-in-an-office-42795-large.mp4',
    rating: 4.9,
  },
  {
    id: 'pulse-metrics',
    slug: 'pulse-metrics',
    title: 'PulseMetrics SaaS & IA',
    nicheLabel: 'Paneles de Negocio & Dashboards',
    badge: '📊 Dashboards & Métricas',
    packageTier: 'Paquete Escalable / App IA',
    priceMxn: '$14,900 MXN',
    depositMxn: '$7,450 MXN (50% anticipo)',
    description: 'Dashboard en tiempo real para control de sucursales, visualización de ventas diarias, métricas clave y asistente con Google Gemini.',
    features: ['Gráficos interactivos de ventas', 'Exportación de reportes PDF/Excel', 'Agente IA Gemini 24/7', 'Base de datos en la nube'],
    svgPreview: '/images/projects/pulse-metrics.svg',
    fullDemoUrl: '/proyecto/pulse-metrics?demo=live',
    authorHandle: 'franquicias_norte_saas',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-financial-graphs-moving-on-a-digital-screen-42991-large.mp4',
    rating: 5.0,
  },
  {
    id: 'datasphere-cms',
    slug: 'datasphere-cms',
    title: 'DataSphere Catálogos B2B',
    nicheLabel: 'Refaccionarias & Mayoristas',
    badge: '📦 Catálogo B2B & Mayoristas',
    packageTier: 'Paquete Escalable / App IA',
    priceMxn: '$14,900 MXN',
    depositMxn: '$7,450 MXN (50% anticipo)',
    description: 'Buscador instantáneo por código de parte o SKU, cotizador de pedidos mayoristas por WhatsApp y descarga de fichas técnicas en PDF.',
    features: ['Buscador instantáneo por SKU/código', 'Cotizador por volumen vía WhatsApp', 'Descarga de fichas técnicas PDF', 'Catálogo de más de 1,000 ítems'],
    svgPreview: '/images/projects/datasphere-cms.svg',
    fullDemoUrl: '/proyecto/datasphere-cms?demo=live',
    authorHandle: 'refaccionaria_mayorista_son',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-42976-large.mp4',
    rating: 4.8,
  },
  {
    id: 'novapay-billing',
    slug: 'novapay-billing',
    title: 'NovaPay Billing Engine',
    nicheLabel: 'Finanzas, Facturación & Cobranza',
    badge: '💳 Cobranza & Facturación',
    packageTier: 'Paquete Escalable / App IA',
    priceMxn: '$14,900 MXN',
    depositMxn: '$7,450 MXN (50% anticipo)',
    description: 'Control de ventas, anticipos del 50%, emisión de facturas CFDI 4.0, recordatorios automáticos por WhatsApp y control de pólizas.',
    features: ['Control de anticipos y liquidaciones', 'Generador de recibos y facturas CFDI', 'Recordatorios de cobranza WhatsApp', 'Panel de cliente protegido'],
    svgPreview: '/images/projects/novapay-billing.svg',
    fullDemoUrl: '/proyecto/novapay-billing?demo=live',
    authorHandle: 'facturacion_digital_son',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-credit-card-lying-on-a-glass-surface-42995-large.mp4',
    rating: 5.0,
  },
];

interface ShoppableUgcSliderProps {
  demos?: DemoSliderItem[];
  title?: string;
  subtitle?: string;
  badgeText?: string;
  phoneNumber?: string;
  className?: string;
}

export default function ShoppableUgcSlider({
  demos = PORTFOLIO_DEMO_ITEMS,
  title = 'Portafolio Oficial: 10 Demos Interactivos en Carrusel 3D',
  subtitle = 'Explora cada desarrollo web funcional adaptado a los principales nichos comerciales de Sonora. Toca cualquier tarjeta para probar el demo o cotizar con anticipo del 50%.',
  badgeText = '🚀 10 Demos Oficiales • Coverflow 3D Liquid Glass',
  phoneNumber = '526222259974',
  className = '',
}: ShoppableUgcSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDemoModal, setSelectedDemoModal] = useState<DemoSliderItem | null>(null);
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [simulatorTab, setSimulatorTab] = useState<'boceto_interactivo' | 'boceto_stitch' | 'boceto_svg'>('boceto_interactivo');
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedStitchPrompt, setCopiedStitchPrompt] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Detección responsive
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallMobile = windowWidth < 380;
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  // Sincronizar reproducción del video central en segundo plano silencioso
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === currentIndex) {
        video.muted = true;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : demos.length - 1));
  }, [demos.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < demos.length - 1 ? prev + 1 : 0));
  }, [demos.length]);

  // Teclas de dirección
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedDemoModal) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, selectedDemoModal]);

  // Swipe táctil
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const openDemoModal = (demo: DemoSliderItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedDemoModal(demo);
  };

  const handleWhatsAppInquiry = (demo: DemoSliderItem) => {
    const text = encodeURIComponent(
      `¡Hola Miguel! Estuve explorando el Demo en vivo de "${demo.title}" (${demo.nicheLabel}) ` +
      `en tu Carrusel 3D Liquid Glass y me interesa una web con esa misma estructura para mi negocio.\n\n` +
      `💼 Paquete Sugerido: ${demo.packageTier} (${demo.priceMxn})\n` +
      `💳 Anticipo: ${demo.depositMxn}\n\n` +
      `¿Cómo podemos agendar la propuesta y armar el boceto en Stitch? ¡Muchas gracias!`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="demos-carrusel" className={`w-full py-16 text-slate-100 relative overflow-hidden select-none ${className}`}>
      {/* Luces Liquid Glass de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/15 to-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* HEADER DE LA SECCIÓN */}
      <div className="max-w-5xl mx-auto px-4 text-center space-y-3 relative z-10 mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold tracking-wide backdrop-blur-md shadow-lg shadow-cyan-500/10">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>{badgeText}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* CONTENEDOR 3D COVERFLOW DEL CARRUSEL DE DEMOS */}
      <div
        className="relative w-full max-w-6xl mx-auto px-1 sm:px-4 flex items-center justify-center min-h-[460px] xs:min-h-[490px] sm:min-h-[540px] md:min-h-[580px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ perspective: isMobile ? '800px' : '1200px' }}
      >
        {/* FLECHA IZQUIERDA */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Demo anterior"
          className="absolute left-1 xs:left-2 sm:left-6 z-40 w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900/85 hover:bg-cyan-500 text-white hover:text-slate-950 border border-white/20 backdrop-blur-xl flex items-center justify-center transition-all duration-300 shadow-xl shadow-black/50 hover:scale-110 active:scale-95 group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* FLECHA DERECHA */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Siguiente demo"
          className="absolute right-1 xs:right-2 sm:right-6 z-40 w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900/85 hover:bg-cyan-500 text-white hover:text-slate-950 border border-white/20 backdrop-blur-xl flex items-center justify-center transition-all duration-300 shadow-xl shadow-black/50 hover:scale-110 active:scale-95 group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* PISTA DE TARJETAS COVERFLOW */}
        <div className="relative w-full h-[430px] xs:h-[460px] sm:h-[500px] md:h-[540px] flex items-center justify-center overflow-hidden">
          {demos.map((demo, idx) => {
            const offset = idx - currentIndex;
            const absOffset = Math.abs(offset);

            if (absOffset > 2 && absOffset !== demos.length - 1 && absOffset !== demos.length - 2) {
              return null;
            }

            let normalizedOffset = offset;
            if (offset > demos.length / 2) normalizedOffset -= demos.length;
            if (offset < -demos.length / 2) normalizedOffset += demos.length;

            const isCenter = normalizedOffset === 0;
            const isLeft = normalizedOffset < 0;

            let translateX = 0;
            let translateZ = 0;
            let rotateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 30;

            if (isCenter) {
              translateX = 0;
              translateZ = 0;
              rotateY = 0;
              scale = 1;
              opacity = 1;
              zIndex = 30;
            } else if (Math.abs(normalizedOffset) === 1) {
              if (isSmallMobile) {
                translateX = isLeft ? -135 : 135;
                translateZ = -60;
                rotateY = isLeft ? 14 : -14;
                scale = 0.78;
                opacity = 0.55;
              } else if (isMobile) {
                translateX = isLeft ? -165 : 165;
                translateZ = -75;
                rotateY = isLeft ? 16 : -16;
                scale = 0.82;
                opacity = 0.65;
              } else if (isTablet) {
                translateX = isLeft ? -220 : 220;
                translateZ = -80;
                rotateY = isLeft ? 18 : -18;
                scale = 0.85;
                opacity = 0.72;
              } else {
                translateX = isLeft ? -270 : 270;
                translateZ = -90;
                rotateY = isLeft ? 18 : -18;
                scale = 0.88;
                opacity = 0.78;
              }
              zIndex = 20;
            } else {
              if (isSmallMobile) {
                translateX = isLeft ? -210 : 210;
                translateZ = -120;
                scale = 0.62;
                opacity = 0.15;
              } else if (isMobile) {
                translateX = isLeft ? -260 : 260;
                translateZ = -130;
                scale = 0.66;
                opacity = 0.2;
              } else if (isTablet) {
                translateX = isLeft ? -380 : 380;
                translateZ = -150;
                scale = 0.72;
                opacity = 0.3;
              } else {
                translateX = isLeft ? -480 : 480;
                translateZ = -180;
                scale = 0.74;
                opacity = 0.35;
              }
              rotateY = isLeft ? 26 : -26;
              zIndex = 10;
            }

            return (
              <div
                key={demo.id}
                onClick={() => {
                  if (!isCenter) {
                    setCurrentIndex(idx);
                  } else {
                    openDemoModal(demo);
                  }
                }}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: 'all 0.55s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
                className={`absolute w-[240px] xs:w-[265px] sm:w-[290px] md:w-[310px] h-[410px] xs:h-[440px] sm:h-[480px] md:h-[520px] rounded-[24px] sm:rounded-[28px] overflow-hidden cursor-pointer border ${
                  isCenter
                    ? 'border-cyan-400/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(6,182,212,0.35)] ring-1 ring-cyan-400/40'
                    : 'border-white/15 shadow-2xl hover:border-cyan-400/40'
                } bg-slate-950 flex flex-col justify-between`}
              >
                {/* VIDEO DE FONDO / PREVIEW SVG CON POSTER */}
                <div className="absolute inset-0 w-full h-full bg-slate-950 overflow-hidden">
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    src={demo.videoUrl}
                    poster={demo.svgPreview}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={demo.svgPreview}
                    alt={demo.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-slate-950/70 pointer-events-none" />
                </div>

                {/* BARRA SUPERIOR (Insignia del Demo + Nicho) */}
                <div className="relative z-20 p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-950/75 border border-white/20 backdrop-blur-md shadow-md">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-[10px] font-extrabold text-cyan-300 uppercase tracking-wider truncate max-w-[130px]">
                      {demo.badge}
                    </span>
                  </div>
                </div>

                {/* TITULO Y NICHO EN EL CENTRO */}
                <div className="relative z-20 px-3.5 space-y-1">
                  <div className="flex items-center gap-1 text-[11px] font-bold bg-slate-950/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-amber-300 border border-white/10 w-fit">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>Demo 100% Funcional</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white leading-tight drop-shadow-md">
                    {demo.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 font-medium line-clamp-1">
                    {demo.nicheLabel}
                  </p>
                </div>

                {/* BOTÓN PROMINENTE EN TARJETA CENTRAL */}
                {isCenter && (
                  <div className="relative z-20 px-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openDemoModal(demo, e);
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(6,182,212,0.6)] active:scale-95 transition-all"
                    >
                      <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                      <span>⚡ Abrir Boceto & Probar Demo</span>
                    </button>
                  </div>
                )}

                {/* BARRA INFERIOR DE ACCIÓN / COTIZACIÓN */}
                <div className="relative z-20 p-3">
                  <div
                    onClick={(e) => openDemoModal(demo, e)}
                    className="p-2.5 rounded-2xl bg-slate-900/85 hover:bg-slate-900 border border-white/25 hover:border-cyan-400/60 backdrop-blur-xl shadow-xl transition-all duration-200 flex items-center justify-between gap-2.5 group/card"
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/20 bg-black/50 shrink-0 relative p-1">
                      <img
                        src={demo.svgPreview}
                        alt={demo.title}
                        className="w-full h-full object-cover rounded-lg group-hover/card:scale-105 transition-transform"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white truncate leading-tight group-hover/card:text-cyan-300 transition-colors">
                        {demo.packageTier}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-xs font-black text-emerald-400">
                          {demo.priceMxn}
                        </span>
                        <span className="text-[10px] text-slate-400 truncate">
                          (50% anticipo)
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => openDemoModal(demo, e)}
                      className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black flex items-center justify-center shadow-lg shadow-cyan-500/30 active:scale-95 transition-all shrink-0"
                      title="Probar y cotizar este demo"
                    >
                      <Eye className="w-4 h-4 text-slate-950" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PAGINACIÓN CON BULLETS DINÁMICOS */}
      <div className="flex items-center justify-center gap-2 mt-4 relative z-20">
        {demos.map((d, idx) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir al demo ${d.title}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'w-8 bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/50'
                : 'w-2.5 bg-slate-400/40 dark:bg-white/25 hover:bg-slate-500 dark:hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* MODAL / SIMULADOR INTERACTIVO DEL DEMO */}
      {selectedDemoModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-2 sm:p-5 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-slate-950/95 border border-white/20 shadow-2xl p-4 sm:p-7 space-y-4 sm:space-y-5 text-left text-slate-100 overflow-hidden max-h-[92vh] flex flex-col">
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />

            {/* HEADER DEL MODAL */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 relative z-10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-500 p-[2px] shrink-0">
                  <img
                    src={selectedDemoModal.svgPreview}
                    alt={selectedDemoModal.title}
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-extrabold text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30">
                      {selectedDemoModal.badge}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {selectedDemoModal.nicheLabel}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                    {selectedDemoModal.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedDemoModal(null)}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* CUERPO DEL MODAL */}
            <div className="space-y-4 relative z-10 overflow-y-auto pr-1">
              {/* SECCIÓN 1: BOCETO INTERACTIVO / STITCH / SVG (EN PRIMER PLANO) */}
              <div className="space-y-3 bg-white/[0.02] p-3 sm:p-4 rounded-2xl border border-white/10 shadow-inner">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-white flex items-center gap-1.5 uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>Boceto en Vivo & Simulador Interactivo</span>
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Interactúa con el prototipo funcional o consulta el prompt oficial de Google Stitch.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* Dispositivo (Laptop / Móvil) */}
                    <div className="flex items-center p-0.5 rounded-xl bg-white/[0.08] border border-white/10">
                      <button
                        type="button"
                        onClick={() => setViewportMode('desktop')}
                        className={`px-2 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all ${
                          viewportMode === 'desktop'
                            ? 'bg-cyan-500 text-slate-950 font-extrabold'
                            : 'text-slate-300'
                        }`}
                      >
                        <Monitor className="w-3.5 h-3.5" />
                        <span>Laptop</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewportMode('mobile')}
                        className={`px-2 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all ${
                          viewportMode === 'mobile'
                            ? 'bg-cyan-500 text-slate-950 font-extrabold'
                            : 'text-slate-300'
                        }`}
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>Móvil</span>
                      </button>
                    </div>

                    {/* Selector de Pestaña */}
                    <div className="flex gap-1 bg-white/[0.06] p-0.5 rounded-xl border border-white/10 text-xs">
                      <button
                        type="button"
                        onClick={() => setSimulatorTab('boceto_interactivo')}
                        className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all flex items-center gap-1 ${
                          simulatorTab === 'boceto_interactivo'
                            ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-black shadow-md'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <Zap className="w-3 h-3" />
                        <span>Boceto Funcional</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSimulatorTab('boceto_stitch')}
                        className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all flex items-center gap-1 ${
                          simulatorTab === 'boceto_stitch'
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black shadow-md'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <span>🎨 Google Stitch</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSimulatorTab('boceto_svg')}
                        className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all flex items-center gap-1 ${
                          simulatorTab === 'boceto_svg'
                            ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 font-black shadow-md'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <span>🖼️ Arte SVG</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* CONTENIDO SEGÚN PESTAÑA */}
                {simulatorTab === 'boceto_interactivo' && (
                  <div
                    className={`mx-auto transition-all duration-300 ${
                      viewportMode === 'mobile'
                        ? 'max-w-[360px] p-2.5 rounded-3xl border-2 border-cyan-400/40 bg-slate-950 shadow-2xl ring-1 ring-cyan-500/20'
                        : 'w-full'
                    }`}
                  >
                    {/* Barra de simulación de navegador */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 px-1 text-[10px] text-slate-400 font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="ml-1 text-cyan-300 truncate max-w-[200px]">
                          https://{selectedDemoModal.slug}.hp-digital.mx
                        </span>
                      </div>
                      <span className="text-emerald-400 font-bold hidden sm:inline">● Boceto Funcional Activo</span>
                    </div>

                    <InteractiveNicheBoceto
                      slug={selectedDemoModal.slug}
                      viewportMode={viewportMode}
                      phoneNumber={phoneNumber}
                    />
                  </div>
                )}

                {simulatorTab === 'boceto_stitch' && (
                  <div className="p-4 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 to-slate-950 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping" />
                        <span className="text-xs font-black uppercase text-indigo-300 tracking-wider">
                          Prompt Oficial para Google Stitch (stitch.withgoogle.com)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const prompt = NICHE_STITCH_PROMPTS[selectedDemoModal.slug] || '';
                          navigator.clipboard.writeText(prompt);
                          setCopiedStitchPrompt(true);
                          setTimeout(() => setCopiedStitchPrompt(false), 2000);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                      >
                        {copiedStitchPrompt ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-slate-950" />
                            <span>¡Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-950" />
                            <span>Copiar Prompt Stitch</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-indigo-100 leading-relaxed max-h-48 overflow-y-auto selection:bg-indigo-500 selection:text-white">
                      {NICHE_STITCH_PROMPTS[selectedDemoModal.slug] || 'Prompt de diseño Liquid Glass para Stitch...'}
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span>💡 Pega este prompt directamente en Stitch para generar variantes visuales al instante.</span>
                      <a
                        href="https://stitch.withgoogle.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:underline flex items-center gap-1 font-bold shrink-0"
                      >
                        <span>Abrir Google Stitch</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                {simulatorTab === 'boceto_svg' && (
                  <div className="rounded-2xl overflow-hidden border border-white/15 bg-slate-950 p-3 flex flex-col items-center justify-center min-h-[220px] relative">
                    <img
                      src={selectedDemoModal.svgPreview}
                      alt={selectedDemoModal.title}
                      className={`object-contain transition-all duration-300 ${
                        viewportMode === 'mobile'
                          ? 'w-[220px] h-[220px] rounded-2xl border border-cyan-400/40 shadow-xl'
                          : 'w-full h-[220px] rounded-xl'
                      }`}
                    />
                    <div className="mt-2 text-[11px] text-slate-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Estructura visual SVG lista para personalizarse con tu logotipo y fotos.</span>
                    </div>
                  </div>
                )}
              </div>

              {/* SECCIÓN 2: PRECIO Y PAQUETE */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">
                    Plan Recomendado: {selectedDemoModal.packageTier}
                  </div>
                  <div className="text-2xl font-black text-emerald-400 mt-0.5">
                    {selectedDemoModal.priceMxn}
                  </div>
                  <div className="text-xs text-cyan-300 font-bold">
                    Inicia con el 50% de anticipo: {selectedDemoModal.depositMxn}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block">Beneficiario Oficial:</span>
                  <span className="text-xs font-black text-white">HP Digital & AI Agency</span>
                </div>
              </div>

              {/* DESCRIPCIÓN */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-3 rounded-2xl border border-white/5">
                {selectedDemoModal.description}
              </p>

              {/* CARACTERÍSTICAS INCLUIDAS */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-white flex items-center gap-1.5 uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Lo que incluye este desarrollo oficial:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedDemoModal.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BOTONES DE ACCIÓN COMERCIAL */}
            <div className="space-y-2 pt-2 border-t border-white/10 shrink-0">
              <button
                type="button"
                onClick={() => handleWhatsAppInquiry(selectedDemoModal)}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                <span>Solicitar esta Web por WhatsApp (50% Anticipo al Aprobar)</span>
              </button>

              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  href={selectedDemoModal.fullDemoUrl}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>Abrir Demo en Pantalla Completa</span>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                        `Hola Miguel, me interesa el demo de ${selectedDemoModal.title}`
                      )}`
                    );
                    setCopiedKey(true);
                    setTimeout(() => setCopiedKey(false), 2000);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  {copiedKey ? '¡Enlace Copiado!' : 'Copiar Enlace'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
