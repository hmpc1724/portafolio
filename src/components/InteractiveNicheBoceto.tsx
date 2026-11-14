'use client';

import React, { useState } from 'react';
import {
  Utensils,
  Wrench,
  Home,
  ShoppingBag,
  Ship,
  Sparkles,
  Briefcase,
  BarChart3,
  Package,
  CreditCard,
  Plus,
  Minus,
  CheckCircle2,
  Calendar,
  Clock,
  MessageCircle,
  Search,
  Filter,
  DollarSign,
  TrendingUp,
  Award,
  Bot,
  Zap,
  Sun,
  Flame,
  Building2,
  Thermometer,
  KeyRound,
  Play,
  Tv,
  Stethoscope,
  MapPin,
  ShieldCheck,
  Check,
  Snowflake,
  BedDouble
} from 'lucide-react';

interface InteractiveNicheBocetoProps {
  slug: string;
  viewportMode?: 'desktop' | 'mobile';
  phoneNumber?: string;
  visualMode?: 'boceto' | 'liquid-glass';
}

export default function InteractiveNicheBoceto({
  slug,
  viewportMode = 'desktop',
  phoneNumber = '526222259974',
  visualMode = 'boceto',
}: InteractiveNicheBocetoProps) {
  // 1. Artisan Market State
  const [artisanDishes, setArtisanDishes] = useState<Record<string, number>>({
    ceviche: 1,
    tacos: 2,
    pescado: 0,
    clamato: 1,
  });
  const [artisanSalsa, setArtisanSalsa] = useState<string>('Chiltepín Tradicional');
  const [artisanMesa, setArtisanMesa] = useState<number>(4);

  // 2. Studio Veloce State
  const [veloceService, setVeloceService] = useState<string>('afinacion');
  const [veloceVehicle, setVeloceVehicle] = useState<string>('suv');
  const [veloceTime, setVeloceTime] = useState<string>('Mañana 10:00 AM');

  // 3. Zenith Architects State
  const [zenithProperty, setZenithProperty] = useState<number>(0);
  const [zenithTab, setZenithTab] = useState<'fotos' | 'plano' | 'recorrido'>('fotos');

  // 4. Lumina Store State
  const [luminaSize, setLuminaSize] = useState<string>('M');
  const [luminaColor, setLuminaColor] = useState<string>('Azul Mar de Cortés');
  const [luminaQty, setLuminaQty] = useState<number>(1);
  const [luminaAdded, setLuminaAdded] = useState<boolean>(false);

  // 5. Kroma Visuals State
  const [kromaYacht, setKromaYacht] = useState<number>(0);
  const [kromaHours, setKromaHours] = useState<number>(3);
  const [kromaGuests, setKromaGuests] = useState<number>(6);

  // 6. Aura Creative State
  const [auraTreatment, setAuraTreatment] = useState<string>('blanqueamiento');
  const [auraDoctor, setAuraDoctor] = useState<string>('Dra. Sofía Mendoza');
  const [auraShift, setAuraShift] = useState<string>('Turno Matutino (10:00 AM)');

  // 7. TaskFlow Pro State
  const [taskflowType, setTaskflowType] = useState<string>('mensual');
  const [taskflowRevenue, setTaskflowRevenue] = useState<string>('50k-250k');
  const [taskflowEmployees, setTaskflowEmployees] = useState<number>(6);

  // 8. PulseMetrics State
  const [pulseTimeframe, setPulseTimeframe] = useState<'hoy' | 'semana' | 'mes'>('semana');
  const [pulseGrowthSlider, setPulseGrowthSlider] = useState<number>(24);
  const [pulseAiInsight, setPulseAiInsight] = useState<boolean>(true);

  // 9. DataSphere CMS State
  const [datasphereQuery, setDatasphereQuery] = useState<string>('');
  const [datasphereWholesale, setDatasphereWholesale] = useState<boolean>(true);
  const [datasphereQty, setDatasphereQty] = useState<Record<string, number>>({
    'KIT-428': 6,
    'FLT-091': 10,
    'BMB-512': 2,
    'AMR-803': 4,
  });

  // 10. NovaPay Billing State
  const [novapayConcept, setNovapayConcept] = useState<string>('web_liquid_glass');
  const [novapaySubtotal, setNovapaySubtotal] = useState<number>(8900);
  const [novapayClient, setNovapayClient] = useState<string>('Mariscos El Rey de Guaymas');


  // 11. Radar Clientes State
  const [radarColonia, setRadarColonia] = useState<string>('85400 Centro Guaymas');
  const [radarNiche, setRadarNiche] = useState<string>('Restaurantes & Gastronomía');
  const [radarScanning, setRadarScanning] = useState<boolean>(false);

  // 12. La Olla de Barro State
  const [ollaGuiso, setOllaGuiso] = useState<string>('Carne con Chile en Cazuela');
  const [ollaPicante, setOllaPicante] = useState<string>('Medio');
  const [ollaGuarnicion, setOllaGuarnicion] = useState<string>('Frijoles Puercos + Arroz');
  const [ollaTortillas, setOllaTortillas] = useState<string>('Maíz Hechas a Mano');

  // 13. DentCare State
  const [dentService, setDentService] = useState<string>('Limpieza Ultrasónica');
  const [dentTurno, setDentTurno] = useState<string>('Mañana 11:00 AM');
  const [dentDoctor, setDentDoctor] = useState<string>('Dr. Carlos Valenzuela');

  // 14. ObraMaestra State
  const [obraLength, setObraLength] = useState<number>(12);
  const [obraHeight, setObraHeight] = useState<number>(2.8);
  const [obraType, setObraType] = useState<string>('Block 15x20x40');

  // 15. AirCon Climas State
  const [airconArea, setAirconArea] = useState<number>(24);
  const [airconSun, setAirconSun] = useState<string>('Sol Directo');

  // 16. Luxury Hotel State
  const [hotelSuite, setHotelSuite] = useState<string>('Ocean Front Master Suite');
  const [hotelTemp, setHotelTemp] = useState<number>(21);
  const [hotelKeyActive, setHotelKeyActive] = useState<boolean>(true);

  // 17. LimpiaPro State
  const [limpiaType, setLimpiaType] = useState<string>('Casa Residencial (2 Pisos)');
  const [limpiaDeep, setLimpiaDeep] = useState<boolean>(true);
  const [limpiaWindows, setLimpiaWindows] = useState<boolean>(true);

  // 18. Solartec State
  const [solarBill, setSolarBill] = useState<number>(6800);

  // 19. CineVault State
  const [cineMovie, setCineMovie] = useState<string>('Mar de Cortés 4K');
  const [cinePlaying, setCinePlaying] = useState<boolean>(true);

  // WhatsApp quick helper
  const sendWhatsApp = (msg: string) => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  /* ========================================================
     1. ARTISAN MARKET (Restaurantes, Cafeterías & Gastronomía)
     ======================================================== */
  if (slug === 'artisan-market') {
    const isBoceto = visualMode === 'boceto';

    const dishPrices: Record<string, { name: string; price: number; desc: string; img?: string; tag?: string }> = {
      ceviche: {
        name: 'Gran Festín Imperial del Rey',
        price: 485,
        desc: 'Pulpo zarandeado a la leña, callo de hacha sonorense y camarón en aguachile negro tatemado con chiltepín.',
        img: '/images/stitch/mariscos-festin-imperial.png',
        tag: 'Chef Signature 🔥',
      },
      molcajete: {
        name: 'Molcajete Volcánico Mar y Tierra',
        price: 440,
        desc: 'Arrachera al carbón de mezquite, camarones jumbo U-15, queso panela asado y salsa verde en piedra hirviendo.',
        img: '/images/stitch/mariscos-molcajete.png',
        tag: 'Más Vendido 🌋',
      },
      tacos: {
        name: 'Tacos Gobernador VIP (Orden de 3)',
        price: 265,
        desc: 'Tortilla de maíz nixtamal hecha a mano, costra dorada de queso gouda y camarón salteado al ajo.',
        tag: 'Clásico Sonorense 🌮',
      },
      pescado: {
        name: 'Pescado Zarandeado Entero a la Leña',
        price: 540,
        desc: 'Pargo abierto en mariposa (1.2 kg), adobo de chiles secos, mantequilla especiada y cebollitas tatemadas.',
        tag: 'Pesca del Día 🐟',
      },
    };

    const total = Object.entries(artisanDishes).reduce((acc, [key, qty]) => {
      return acc + (dishPrices[key]?.price || 0) * qty;
    }, 0);

    if (isBoceto) {
      return (
        <div className="p-3 sm:p-5 rounded-2xl bg-[#09111e] text-slate-100 border-2 border-dashed border-sky-400/50 font-mono text-xs sm:text-sm space-y-4 shadow-2xl relative overflow-hidden bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]">
          {/* Blueprint Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-sky-400/30 text-[10px] text-sky-400">
            <div className="flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>[BOCETO ARQUITECTÓNICO WIREFRAME]</span>
            </div>
            <span className="text-slate-400">SPEC: GOOGLE_STITCH_V1 • 12_COL_GRID</span>
          </div>

          <div className="flex items-center justify-between pb-3 border-b border-sky-400/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-400/40 flex items-center justify-center text-sky-400">
                <Utensils className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sky-300 text-xs sm:text-sm">[HEADER: MARISCOS_EL_REY]</h4>
                <p className="text-[10px] text-slate-400 font-mono">LAYOUT: MENÚ_DIGITAL_QR • GUAYMAS_SONORA</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-sky-950/70 px-2 py-1 rounded border border-sky-400/30">
              <span className="text-[10px] text-sky-400 font-mono">COMENZAL_MESA:</span>
              <select
                value={artisanMesa}
                onChange={(e) => setArtisanMesa(Number(e.target.value))}
                className="bg-transparent text-amber-300 font-bold text-xs focus:outline-none font-mono"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
                  <option key={m} value={m} className="bg-slate-900 text-white font-mono">Mesa #{m}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Wireframe Platillos */}
          <div className="space-y-2">
            <span className="text-[10px] text-sky-400/80 font-mono block">/// COMPONENT: BENTO_DISH_SELECTOR</span>
            {Object.entries(dishPrices).map(([key, item]) => {
              const qty = artisanDishes[key] || 0;
              return (
                <div
                  key={key}
                  className="p-2.5 rounded-xl bg-sky-950/30 border border-dashed border-sky-400/30 flex items-center justify-between gap-3 font-mono"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sky-200 text-xs">{item.name}</span>
                      <span className="text-emerald-400 font-mono text-xs">${item.price}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 line-clamp-1">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950 px-2 py-1 rounded border border-sky-400/30 shrink-0">
                    <button
                      type="button"
                      onClick={() => setArtisanDishes({ ...artisanDishes, [key]: Math.max(0, qty - 1) })}
                      className="w-5 h-5 rounded flex items-center justify-center bg-sky-900/60 hover:bg-sky-800 text-sky-200"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-4 text-center font-bold text-xs text-sky-300">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setArtisanDishes({ ...artisanDishes, [key]: qty + 1 })}
                      className="w-5 h-5 rounded flex items-center justify-center bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Wireframe Salsa Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-xl bg-sky-950/40 border border-dashed border-sky-400/20 text-xs">
            <span className="text-[10px] text-sky-300 font-mono">/// MODULE: SALSA_BAR_LEVEL</span>
            <div className="flex gap-1">
              {['Chiltepín Silvestre (Nivel 5)', 'Habanero Tatemado (4)', 'Macha Morita (3)'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setArtisanSalsa(s)}
                  className={`px-2 py-1 rounded text-[10px] font-mono transition-all ${
                    artisanSalsa === s
                      ? 'bg-sky-500 text-slate-950 font-bold'
                      : 'bg-sky-950/80 text-sky-300 border border-sky-400/20 hover:border-sky-400/50'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Wireframe Resumen */}
          <div className="flex items-center justify-between pt-2 border-t border-sky-400/30">
            <div>
              <div className="text-[10px] text-slate-400 font-mono">TOTAL_CALCULADO (MESA #{artisanMesa}):</div>
              <div className="text-base font-bold text-sky-300 font-mono">${total} MXN</div>
            </div>
            <button
              type="button"
              onClick={() =>
                sendWhatsApp(
                  `¡Hola Mariscos El Rey! Quiero ordenar desde el Menú QR para la Mesa #${artisanMesa}:\n` +
                  Object.entries(artisanDishes)
                    .filter(([, q]) => q > 0)
                    .map(([k, q]) => `• ${q}x ${dishPrices[k]?.name} ($${(dishPrices[k]?.price || 0) * q})`)
                    .join('\n') +
                  `\nSalsa: ${artisanSalsa}\nTotal: $${total} MXN`
                )
              }
              className="py-2 px-3 rounded bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>[ENVIAR_COMANDA_WHATSAPP]</span>
            </button>
          </div>
        </div>
      );
    }

    // MODO LIQUID GLASS (ALTA FIDELIDAD CON GOOGLE STITCH)
    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-[#0c141e]/95 text-slate-100 border border-cyan-400/40 text-xs sm:text-sm space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(6,182,212,0.25)] backdrop-blur-2xl ring-1 ring-white/10 relative overflow-hidden">
        {/* Glows ambientales de fondo */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/15 rounded-full blur-[50px] pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/15 rounded-full blur-[50px] pointer-events-none" />

        {/* Header Liquid Glass */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-amber-500 p-[2px]">
              <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-cyan-400 font-bold">
                <Utensils className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-black text-white text-sm tracking-tight">MARISCOS &amp; PARRILLA EL REY</h4>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 text-[9px] font-extrabold uppercase">
                  Google Stitch V1
                </span>
              </div>
              <p className="text-[11px] text-amber-300/90 font-medium">Guaymas • Mar de Cortés • Brasas de Mezquite</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-950/80 px-2.5 py-1 rounded-xl border border-white/15 shadow-sm">
            <span className="text-[10px] text-slate-400">Mesa:</span>
            <select
              value={artisanMesa}
              onChange={(e) => setArtisanMesa(Number(e.target.value))}
              className="bg-transparent text-cyan-300 font-bold text-xs focus:outline-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
                <option key={m} value={m} className="bg-slate-900 text-white">Mesa #{m} - Terraza</option>
              ))}
            </select>
          </div>
        </div>

        {/* Platillos interactivos con fotografía real de Google Stitch */}
        <div className="space-y-2.5 relative z-10">
          {Object.entries(dishPrices).map(([key, item]) => {
            const qty = artisanDishes[key] || 0;
            return (
              <div
                key={key}
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-between gap-3"
              >
                {item.img && (
                  <div className="w-14 h-14 rounded-lg overflow-hidden border border-white/15 shrink-0 relative bg-black/40">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-white text-xs truncate">{item.name}</span>
                    {item.tag && (
                      <span className="text-[9px] font-bold text-amber-300 bg-amber-500/15 border border-amber-400/30 px-1.5 py-0.2 rounded-full shrink-0">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-emerald-400 font-black text-xs">${item.price} MXN</span>
                    <p className="text-[10px] text-slate-300 line-clamp-1">{item.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/90 px-2.5 py-1 rounded-xl border border-white/15 shrink-0">
                  <button
                    type="button"
                    onClick={() => setArtisanDishes({ ...artisanDishes, [key]: Math.max(0, qty - 1) })}
                    className="w-5 h-5 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-4 text-center font-black text-xs text-amber-300">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setArtisanDishes({ ...artisanDishes, [key]: qty + 1 })}
                    className="w-5 h-5 rounded-lg flex items-center justify-center bg-gradient-to-r from-cyan-400 to-amber-400 hover:from-cyan-300 hover:to-amber-300 text-slate-950 font-bold transition-all"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Salsa Bar interactivo con 5 niveles de picor */}
        <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 space-y-1.5 relative z-10">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[11px] text-amber-300 font-bold flex items-center gap-1">
              🔥 Exclusivo Salsa Bar Sonorense (5 Niveles):
            </span>
            <span className="text-[10px] text-slate-400">Cortesía en tu orden</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
            {[
              { name: 'Chiltepín Silvestre', level: 'Nivel 5 🔥🔥🔥🔥🔥' },
              { name: 'Habanero Tatemado', level: 'Nivel 4 🔥🔥🔥🔥' },
              { name: 'Macha de Morita', level: 'Nivel 3 🔥🔥🔥' },
              { name: 'Clamato Secreto', level: 'Nivel 2 🔥🔥' },
              { name: 'Mayonesa Ajo Asado', level: 'Suave 🌿' },
            ].map((s) => (
              <button
                key={s.name}
                type="button"
                onClick={() => setArtisanSalsa(s.name)}
                className={`p-1.5 rounded-lg text-left transition-all text-[10px] ${
                  artisanSalsa === s.name
                    ? 'bg-gradient-to-r from-amber-500/30 to-orange-500/30 border border-amber-400/60 text-amber-200 font-bold shadow-sm'
                    : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:border-white/20'
                }`}
              >
                <div className="font-bold text-white truncate">{s.name}</div>
                <div className="text-[9px] text-amber-300/80">{s.level}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Resumen y Envío a WhatsApp en Liquid Glass */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
          <div>
            <div className="text-[10px] text-slate-400 font-medium">Total Comanda Mesa #{artisanMesa}:</div>
            <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
              ${total}.00 MXN
            </div>
          </div>
          <button
            type="button"
            onClick={() =>
              sendWhatsApp(
                `¡Hola Mariscos El Rey! Quiero ordenar desde el Menú Digital QR para Mesa #${artisanMesa} (Terraza Mar de Cortés):\n\n` +
                Object.entries(artisanDishes)
                  .filter(([, q]) => q > 0)
                  .map(([k, q]) => `• ${q}x ${dishPrices[k]?.name} ($${(dishPrices[k]?.price || 0) * q} MXN)`)
                  .join('\n') +
                `\n\n🌶️ Salsa Seleccionada: ${artisanSalsa}\n💰 Total Estimado: $${total}.00 MXN\n\n¡Por favor envíen la orden al fuego de la parrilla!`
              )
            }
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-secondary-container via-amber-500 to-secondary hover:brightness-110 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(238,152,0,0.35)] active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Enviar Comanda a Cocina (WhatsApp)</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     2. STUDIO VELOCE (Talleres Mecánicos & Detailing)
     ======================================================== */
  if (slug === 'studio-veloce') {
    const services: Record<string, { title: string; price: number; time: string; warranty: string }> = {
      afinacion: { title: 'Afinación Mayor (Bujías, Filtros, Aceite Sintético)', price: 1850, time: '2.5 hrs', warranty: '6 meses o 10,000 km' },
      frenos: { title: 'Balatas Cerámicas Delanteras + Rectificado', price: 1250, time: '1.5 hrs', warranty: '1 año de garantía' },
      detailing: { title: 'Corrección de Pintura + Cerámico 9H', price: 2950, time: '5 hrs', warranty: 'Protección 2 años' },
      escaner: { title: 'Diagnóstico OBD2 por Escáner + Reporte PDF', price: 450, time: '30 min', warranty: 'Ficha técnica' },
    };

    const vehicleMultipliers: Record<string, number> = {
      sedan: 1.0,
      suv: 1.15,
      pickup: 1.25,
    };

    const currentService = services[veloceService] || services.afinacion;
    const finalPrice = Math.round(currentService.price * (vehicleMultipliers[veloceVehicle] || 1));

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-slate-900/90 text-slate-100 border border-cyan-500/30 text-xs sm:text-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">Studio Veloce Automotriz</h4>
              <p className="text-[11px] text-cyan-300/80">Cotizador Rápido &amp; Citas • Guaymas, Sonora</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold">
            Garantía por Escrito
          </span>
        </div>

        {/* Tipo de vehículo */}
        <div className="space-y-1.5">
          <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">1. Tipo de Vehículo:</span>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'sedan', label: '🚗 Sedán / Compacto' },
              { id: 'suv', label: '🚙 SUV / Familiar' },
              { id: 'pickup', label: '🛻 Pickup / 4x4' },
            ].map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVeloceVehicle(v.id)}
                className={`py-2 px-1 rounded-xl text-[11px] font-bold text-center border transition-all ${
                  veloceVehicle === v.id
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-black shadow-md'
                    : 'bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/[0.08]'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* Servicio seleccionado */}
        <div className="space-y-1.5">
          <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">2. Selecciona Servicio:</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {Object.entries(services).map(([key, s]) => (
              <div
                key={key}
                onClick={() => setVeloceService(key)}
                className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                  veloceService === key
                    ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-md'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20'
                }`}
              >
                <div className="font-bold text-xs text-white">{s.title}</div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                  <span>⏱ {s.time}</span>
                  <span className="text-cyan-300 font-extrabold">Base: ${s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cita sugerida */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/10 text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Horario sugerido:</span>
          </div>
          <select
            value={veloceTime}
            onChange={(e) => setVeloceTime(e.target.value)}
            className="bg-transparent text-cyan-300 font-bold text-xs focus:outline-none"
          >
            <option value="Hoy 4:00 PM" className="bg-slate-900 text-white">Hoy 4:00 PM</option>
            <option value="Mañana 10:00 AM" className="bg-slate-900 text-white">Mañana 10:00 AM</option>
            <option value="Jueves 2:30 PM" className="bg-slate-900 text-white">Jueves 2:30 PM</option>
          </select>
        </div>

        {/* Resumen */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div>
            <div className="text-[10px] text-slate-400">Total Cotizado con Garantía:</div>
            <div className="text-lg font-black text-emerald-400">${finalPrice} MXN</div>
          </div>
          <button
            type="button"
            onClick={() =>
              sendWhatsApp(
                `¡Hola Studio Veloce! Deseo agendar cita de taller:\n` +
                `• Servicio: ${currentService.title}\n` +
                `• Vehículo: ${veloceVehicle.toUpperCase()}\n` +
                `• Cotización: $${finalPrice} MXN\n` +
                `• Horario solicitado: ${veloceTime}\n` +
                `¿Tienen rampa libre en ese horario?`
              )
            }
            className="py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4 fill-slate-950" />
            <span>Agendar Cita (WhatsApp)</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     3. ZENITH ARCHITECTS (Bienes Raíces & Inmobiliaria)
     ======================================================== */
  if (slug === 'zenith-architects') {
    const properties = [
      {
        title: 'Villa Bahía San Carlos',
        price: '$4,850,000 MXN',
        rooms: '3 Recámaras • 3.5 Baños',
        m2: '320 m² de Terreno',
        desc: 'Alberca infinity privada con vista al Tetakawi, acabados de mármol y cochera techada.',
        badge: 'Exclusiva Marina',
      },
      {
        title: 'Condominio Náutico Sunset',
        price: '$2,950,000 MXN',
        rooms: '2 Recámaras • 2 Baños',
        m2: '145 m² Construcción',
        desc: 'Acceso directo a playa privada, terraza con asador y seguridad 24/7.',
        badge: 'Renta Vacacional Alta',
      },
      {
        title: 'Residencia Tetakawi Palms',
        price: '$6,400,000 MXN',
        rooms: '4 Recámaras • 4.5 Baños',
        m2: '510 m² Frente al Mar',
        desc: 'Muelle privado para lancha o yate, paneles solares incluidos y domótica Liquid Glass.',
        badge: 'Frente al Mar',
      },
    ];

    const currentProp = properties[zenithProperty] || properties[0];

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-slate-900/90 text-slate-100 border border-indigo-500/30 text-xs sm:text-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">Zenith Real Estate &amp; Architecture</h4>
              <p className="text-[11px] text-indigo-300/80">Propiedades Exclusivas • San Carlos, Sonora</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-[10px] font-bold">
            {currentProp.badge}
          </span>
        </div>

        {/* Selector de propiedades */}
        <div className="grid grid-cols-3 gap-2">
          {properties.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setZenithProperty(idx)}
              className={`p-2 rounded-xl text-left border transition-all ${
                zenithProperty === idx
                  ? 'bg-indigo-600/25 border-indigo-400 text-white shadow-md'
                  : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20'
              }`}
            >
              <div className="text-[11px] font-bold truncate text-white">{p.title}</div>
              <div className="text-[10px] text-emerald-400 font-extrabold mt-0.5">{p.price}</div>
            </button>
          ))}
        </div>

        {/* Ficha técnica interactiva */}
        <div className="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white text-xs">{currentProp.title}</span>
            <div className="flex gap-1 text-[10px]">
              {(['fotos', 'plano', 'recorrido'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setZenithTab(tab)}
                  className={`px-2 py-0.5 rounded-md font-bold uppercase transition-all ${
                    zenithTab === tab
                      ? 'bg-indigo-500 text-white'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="text-[11px] text-slate-300 leading-relaxed">{currentProp.desc}</div>
          <div className="flex flex-wrap gap-2 text-[10px] text-slate-400 pt-1 border-t border-white/5">
            <span className="px-2 py-0.5 rounded bg-white/5">{currentProp.rooms}</span>
            <span className="px-2 py-0.5 rounded bg-white/5">{currentProp.m2}</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">✓ Avalúo Verificado</span>
          </div>
        </div>

        {/* Contacto WhatsApp */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div>
            <div className="text-[10px] text-slate-400">Precio de Venta:</div>
            <div className="text-lg font-black text-emerald-400">{currentProp.price}</div>
          </div>
          <button
            type="button"
            onClick={() =>
              sendWhatsApp(
                `¡Hola Zenith Inmobiliaria! Me interesa agendar una visita para la propiedad "${currentProp.title}" (${currentProp.price}) en San Carlos. ¿Me pueden compartir la ficha técnica completa?`
              )
            }
            className="py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Contactar Asesor (WhatsApp)</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     4. LUMINA STORE (Boutiques, Tienda de Ropa & Retail)
     ======================================================== */
  if (slug === 'lumina-store') {
    const unitPrice = 1290;
    const subtotal = unitPrice * luminaQty;

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-slate-900/90 text-slate-100 border border-rose-500/30 text-xs sm:text-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">Lumina Store Sonora Chic</h4>
              <p className="text-[11px] text-rose-300/80">E-Commerce &amp; Pasarela de Pago • Guaymas</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 text-[10px] font-bold">
            Nueva Colección 2026
          </span>
        </div>

        {/* Producto */}
        <div className="p-3 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between gap-3">
          <div>
            <h5 className="font-bold text-white text-xs">Vestido Lino Liquid Glass Edición San Carlos</h5>
            <p className="text-[11px] text-slate-400 mt-0.5">100% Lino europeo, corte fresco para playa y eventos</p>
            <div className="text-emerald-400 font-black text-sm mt-1">${unitPrice} MXN</div>
          </div>
        </div>

        {/* Talla y Color */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Talla:</span>
            <div className="flex gap-1">
              {['CH', 'M', 'G', 'XL'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setLuminaSize(t)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                    luminaSize === t
                      ? 'bg-rose-500 text-white shadow-md'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Color:</span>
            <select
              value={luminaColor}
              onChange={(e) => setLuminaColor(e.target.value)}
              className="w-full bg-slate-950 border border-white/10 rounded-lg px-2 py-1 text-xs text-white focus:outline-none"
            >
              <option value="Azul Mar de Cortés">Azul Mar de Cortés</option>
              <option value="Blanco Arena San Carlos">Blanco Arena</option>
              <option value="Terracota Atardecer">Terracota Atardecer</option>
            </select>
          </div>
        </div>

        {/* Cantidad */}
        <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/5">
          <span className="text-xs text-slate-300">Cantidad:</span>
          <div className="flex items-center gap-2 bg-slate-950 px-2 py-1 rounded-lg border border-white/10">
            <button
              type="button"
              onClick={() => setLuminaQty(Math.max(1, luminaQty - 1))}
              className="w-5 h-5 rounded flex items-center justify-center bg-white/10 text-white"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-4 text-center font-bold text-xs text-white">{luminaQty}</span>
            <button
              type="button"
              onClick={() => setLuminaQty(luminaQty + 1)}
              className="w-5 h-5 rounded flex items-center justify-center bg-rose-500 text-white font-bold"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Acciones */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div>
            <div className="text-[10px] text-slate-400">Total Bolsa:</div>
            <div className="text-lg font-black text-emerald-400">${subtotal} MXN</div>
          </div>
          <button
            type="button"
            onClick={() =>
              sendWhatsApp(
                `¡Hola Lumina Store! Quiero comprar desde tu tienda en línea:\n` +
                `• Producto: Vestido Lino Liquid Glass (${luminaQty} pza)\n` +
                `• Talla: ${luminaSize} | Color: ${luminaColor}\n` +
                `• Subtotal: $${subtotal} MXN\n` +
                `¿Tienen entrega hoy en Guaymas/San Carlos?`
              )
            }
            className="py-2 px-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Comprar por WhatsApp</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     5. KROMA VISUALS (Turismo, Yates & Spas San Carlos)
     ======================================================== */
  if (slug === 'kroma-visuals') {
    const yachts = [
      { name: 'Yate Sea Ray 42ft Luxury', hourlyRate: 3500, maxGuests: 12, features: 'A/C, camarote, sonido bluetooth, snorkel y hielo' },
      { name: 'Catamarán Sunset Tetakawi', hourlyRate: 2800, maxGuests: 18, features: 'Malla de descanso, asador, barra libre de bienvenida' },
      { name: 'Lancha Pesca Deportiva 31ft', hourlyRate: 1950, maxGuests: 6, features: 'Cañas profesionales, carnada viva, hielera y capitán' },
    ];

    const currentYacht = yachts[kromaYacht] || yachts[0];
    const totalCharter = currentYacht.hourlyRate * kromaHours;

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-slate-900/90 text-slate-100 border border-teal-500/30 text-xs sm:text-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
              <Ship className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">Kroma San Carlos Yacht Charters</h4>
              <p className="text-[11px] text-teal-300/80">Paseos en Yate &amp; Snorkel • Marina Real</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-[10px] font-bold">
            Capitán Certificado
          </span>
        </div>

        {/* Selector de embarcación */}
        <div className="space-y-1.5">
          <span className="text-[10px] text-slate-400 font-bold uppercase">1. Elige tu Yate / Lancha:</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {yachts.map((y, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setKromaYacht(idx)}
                className={`p-2.5 rounded-xl text-left border transition-all ${
                  kromaYacht === idx
                    ? 'bg-teal-500/20 border-teal-400 text-white shadow-md'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20'
                }`}
              >
                <div className="font-bold text-xs text-white truncate">{y.name}</div>
                <div className="text-emerald-400 font-black text-xs mt-0.5">${y.hourlyRate}/hr</div>
                <div className="text-[10px] text-slate-400 mt-1">Hasta {y.maxGuests} personas</div>
              </button>
            ))}
          </div>
        </div>

        {/* Duración del paseo */}
        <div className="grid grid-cols-2 gap-3 p-2.5 rounded-xl bg-black/40 border border-white/10">
          <div>
            <span className="text-[10px] text-slate-400 font-bold block mb-1">Duración del Paseo:</span>
            <div className="flex gap-1">
              {[3, 5, 8].map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setKromaHours(h)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    kromaHours === h
                      ? 'bg-teal-500 text-slate-950 font-black'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {h} hrs
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 font-bold block mb-1">Pasajeros:</span>
            <div className="flex items-center gap-2 bg-slate-950 px-2 py-1 rounded-lg border border-white/10 w-fit">
              <button
                type="button"
                onClick={() => setKromaGuests(Math.max(2, kromaGuests - 1))}
                className="w-5 h-5 rounded flex items-center justify-center bg-white/10 text-white"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-4 text-center font-bold text-xs text-white">{kromaGuests}</span>
              <button
                type="button"
                onClick={() => setKromaGuests(Math.min(currentYacht.maxGuests, kromaGuests + 1))}
                className="w-5 h-5 rounded flex items-center justify-center bg-teal-500 text-slate-950 font-bold"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Resumen */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div>
            <div className="text-[10px] text-slate-400">Total Paseo ({kromaHours} horas):</div>
            <div className="text-lg font-black text-emerald-400">${totalCharter} MXN</div>
          </div>
          <button
            type="button"
            onClick={() =>
              sendWhatsApp(
                `¡Hola Kroma Yachts San Carlos! Me interesa reservar un paseo privado:\n` +
                `• Embarcación: ${currentYacht.name}\n` +
                `• Duración: ${kromaHours} horas | Pasajeros: ${kromaGuests}\n` +
                `• Total: $${totalCharter} MXN\n` +
                `¿Tienen disponibilidad para este fin de semana?`
              )
            }
            className="py-2 px-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <Ship className="w-4 h-4 fill-slate-950" />
            <span>Reservar Yate (WhatsApp)</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     6. AURA CREATIVE (Salud, Belleza & Citas Médicas)
     ======================================================== */
  if (slug === 'aura-creative') {
    const treatments: Record<string, { title: string; price: number; duration: string }> = {
      limpieza: { title: 'Limpieza Ultrasónica & Profilaxis', price: 650, duration: '45 min' },
      blanqueamiento: { title: 'Blanqueamiento Dental Láser LED', price: 1850, duration: '1 hora' },
      carillas: { title: 'Carillas Estéticas de Porcelana', price: 4200, duration: '2 sesiones' },
      facial: { title: 'Limpieza Facial Profunda & Hidratación', price: 850, duration: '1 hora' },
    };

    const currentTreatment = treatments[auraTreatment] || treatments.blanqueamiento;

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-slate-900/90 text-slate-100 border border-fuchsia-500/30 text-xs sm:text-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-fuchsia-500/20 border border-fuchsia-400/40 flex items-center justify-center text-fuchsia-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">Aura Dental &amp; Medical Spa</h4>
              <p className="text-[11px] text-fuchsia-300/80">Citas Médicas en Línea • Guaymas Centro</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold">
            Opiniones 5.0 Google
          </span>
        </div>

        {/* Tratamientos */}
        <div className="space-y-1.5">
          <span className="text-[10px] text-slate-400 font-bold uppercase">Selecciona Tratamiento:</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {Object.entries(treatments).map(([key, item]) => (
              <div
                key={key}
                onClick={() => setAuraTreatment(key)}
                className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                  auraTreatment === key
                    ? 'bg-fuchsia-500/20 border-fuchsia-400 text-white shadow-md'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20'
                }`}
              >
                <div className="font-bold text-xs text-white">{item.title}</div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                  <span>⏱ {item.duration}</span>
                  <span className="text-emerald-400 font-extrabold">${item.price} MXN</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Especialista y Turno */}
        <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-black/40 border border-white/10">
          <div>
            <span className="text-[10px] text-slate-400 font-bold block mb-1">Especialista:</span>
            <select
              value={auraDoctor}
              onChange={(e) => setAuraDoctor(e.target.value)}
              className="w-full bg-slate-950 border border-white/10 rounded-lg px-2 py-1 text-xs text-fuchsia-300 focus:outline-none"
            >
              <option value="Dra. Sofía Mendoza">Dra. Sofía Mendoza (Estética)</option>
              <option value="Dr. Carlos Valenzuela">Dr. Carlos Valenzuela (Cirugía)</option>
            </select>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-bold block mb-1">Horario Deseado:</span>
            <select
              value={auraShift}
              onChange={(e) => setAuraShift(e.target.value)}
              className="w-full bg-slate-950 border border-white/10 rounded-lg px-2 py-1 text-xs text-slate-200 focus:outline-none"
            >
              <option value="Mañana 10:00 AM">Mañana 10:00 AM</option>
              <option value="Mañana 12:30 PM">Mañana 12:30 PM</option>
              <option value="Tarde 4:00 PM">Tarde 4:00 PM</option>
              <option value="Tarde 6:30 PM">Tarde 6:30 PM</option>
            </select>
          </div>
        </div>

        {/* Resumen */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div>
            <div className="text-[10px] text-slate-400">Costo de Consulta:</div>
            <div className="text-lg font-black text-emerald-400">${currentTreatment.price} MXN</div>
          </div>
          <button
            type="button"
            onClick={() =>
              sendWhatsApp(
                `¡Hola Clínica Aura! Deseo agendar cita de valoración:\n` +
                `• Tratamiento: ${currentTreatment.title}\n` +
                `• Especialista: ${auraDoctor}\n` +
                `• Horario: ${auraShift}\n` +
                `• Precio de lista: $${currentTreatment.price} MXN\n` +
                `¿Me confirman si tienen ese espacio libre?`
              )
            }
            className="py-2 px-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-400 hover:to-pink-400 text-white font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Cita (WhatsApp)</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     7. TASKFLOW PRO (Despachos Contables, Fiscales & Abogados)
     ======================================================== */
  if (slug === 'taskflow-pro') {
    const basePrices: Record<string, number> = {
      '0-50k': 1200,
      '50k-250k': 2400,
      '250k+': 4500,
    };

    const finalFee = Math.round(
      (basePrices[taskflowRevenue] || 2400) + taskflowEmployees * 120
    );

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-slate-900/90 text-slate-100 border border-blue-500/30 text-xs sm:text-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">TaskFlow Fiscal &amp; Legal</h4>
              <p className="text-[11px] text-blue-300/80">Despacho Corporativo • Facturación &amp; SAT Sonora</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold">
            Cero Multas Garantizado
          </span>
        </div>

        {/* Facturación mensual del cliente */}
        <div className="space-y-1.5">
          <span className="text-[10px] text-slate-400 font-bold uppercase">1. Facturación Mensual Estimada:</span>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: '0-50k', label: 'Hasta $50,000' },
              { id: '50k-250k', label: '$50k a $250k' },
              { id: '250k+', label: 'Más de $250k' },
            ].map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setTaskflowRevenue(r.id)}
                className={`py-2 px-1 rounded-xl text-[11px] font-bold border transition-all ${
                  taskflowRevenue === r.id
                    ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                    : 'bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/[0.08]'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Número de empleados */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/10">
          <div>
            <span className="font-bold text-xs text-white">Nómina y Empleados:</span>
            <p className="text-[10px] text-slate-400">Timbrado CFDI nómina y altas IMSS</p>
          </div>
          <div className="flex items-center gap-2 bg-slate-950 px-2 py-1 rounded-lg border border-white/10">
            <button
              type="button"
              onClick={() => setTaskflowEmployees(Math.max(1, taskflowEmployees - 1))}
              className="w-5 h-5 rounded flex items-center justify-center bg-white/10 text-white"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-5 text-center font-bold text-xs text-blue-300">{taskflowEmployees}</span>
            <button
              type="button"
              onClick={() => setTaskflowEmployees(taskflowEmployees + 1)}
              className="w-5 h-5 rounded flex items-center justify-center bg-blue-600 text-white font-bold"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Resumen */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div>
            <div className="text-[10px] text-slate-400">Iguala Contable Mensual Sugerida:</div>
            <div className="text-lg font-black text-emerald-400">${finalFee} MXN / mes</div>
          </div>
          <button
            type="button"
            onClick={() =>
              sendWhatsApp(
                `¡Hola Despacho TaskFlow! Solicito cotización de iguala contable:\n` +
                `• Facturación: ${taskflowRevenue}\n` +
                `• Empleados en nómina: ${taskflowEmployees}\n` +
                `• Honorario mensual estimado: $${finalFee} MXN\n` +
                `¿Podemos agendar una llamada de asesoría fiscal?`
              )
            }
            className="py-2 px-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Pedir Asesoría (WhatsApp)</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     8. PULSE METRICS (Paneles de Negocio, Dashboards & IA)
     ======================================================== */
  if (slug === 'pulse-metrics') {
    const projectedMrr = Math.round(148500 * (1 + pulseGrowthSlider / 100));

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-slate-900/90 text-slate-100 border border-sky-500/30 text-xs sm:text-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">PulseMetrics Analytics &amp; Gemini IA</h4>
              <p className="text-[11px] text-sky-300/80">Dashboard de Sucursales y Ventas en Vivo</p>
            </div>
          </div>
          <div className="flex gap-1">
            {(['hoy', 'semana', 'mes'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setPulseTimeframe(t)}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                  pulseTimeframe === t
                    ? 'bg-sky-500 text-slate-950 font-black'
                    : 'bg-white/5 text-slate-400'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* KPIs Simulados */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
            <span className="text-[10px] text-slate-400 block">Ingresos Mes</span>
            <span className="text-sm sm:text-base font-black text-emerald-400 mt-0.5 block">$148,500</span>
            <span className="text-[9px] text-emerald-300 font-bold">+18.4% vs anterior</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
            <span className="text-[10px] text-slate-400 block">Clientes Activos</span>
            <span className="text-sm sm:text-base font-black text-sky-300 mt-0.5 block">428</span>
            <span className="text-[9px] text-sky-200 font-bold">Sonora &amp; México</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
            <span className="text-[10px] text-slate-400 block">Ticket Promedio</span>
            <span className="text-sm sm:text-base font-black text-amber-300 mt-0.5 block">$347</span>
            <span className="text-[9px] text-amber-200 font-bold">Conversión 3.8%</span>
          </div>
        </div>

        {/* Simulador interactivo de crecimiento */}
        <div className="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-semibold">Simular Crecimiento con Agente IA:</span>
            <span className="text-cyan-300 font-black">+{pulseGrowthSlider}%</span>
          </div>
          <input
            type="range"
            min="5"
            max="60"
            value={pulseGrowthSlider}
            onChange={(e) => setPulseGrowthSlider(Number(e.target.value))}
            className="w-full accent-cyan-400 h-1.5 rounded-lg cursor-pointer"
          />
          <div className="text-[11px] text-slate-400 flex items-center justify-between">
            <span>Proyección con Gemini 2.5:</span>
            <span className="font-black text-emerald-400 text-xs">${projectedMrr.toLocaleString()} MXN</span>
          </div>
        </div>

        {/* Recomendación IA */}
        <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-400/20 flex items-start gap-2 text-xs">
          <Bot className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-indigo-200 leading-snug">
            <strong>Recomendación Gemini IA:</strong> Los picos de venta en San Carlos aumentan 32% los jueves por la tarde. Conviene activar campañas por WhatsApp a las 3:00 PM.
          </p>
        </div>

        {/* Resumen */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div>
            <div className="text-[10px] text-slate-400">Implementación Dashboard:</div>
            <div className="text-lg font-black text-emerald-400">$14,900 MXN</div>
          </div>
          <button
            type="button"
            onClick={() =>
              sendWhatsApp(
                `¡Hola Miguel! Me interesa implementar el dashboard interactivo de PulseMetrics con Gemini IA para mi negocio. ¿Cómo coordinamos la demo?`
              )
            }
            className="py-2 px-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Pedir Dashboard (WhatsApp)</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     9. DATASPHERE CMS (Refaccionarias & Mayoristas B2B)
     ======================================================== */
  if (slug === 'datasphere-cms') {
    const parts = [
      { sku: 'KIT-428', title: 'Kit Balatas Cerámicas Delanteras', unit: 680, app: 'Toyota Hilux / Tacoma' },
      { sku: 'FLT-091', title: 'Filtro Aceite Sintético Premium', unit: 220, app: 'Nissan NP300 / Frontier' },
      { sku: 'BMB-512', title: 'Bomba Gasolina Eléctrica 4.0 Bar', unit: 1450, app: 'Chevrolet Silverado' },
      { sku: 'AMR-803', title: 'Par Amortiguadores de Gas Traseros', unit: 2100, app: 'Ford F-150 / Lobo' },
    ];

    const filtered = parts.filter(
      (p) =>
        p.title.toLowerCase().includes(datasphereQuery.toLowerCase()) ||
        p.sku.toLowerCase().includes(datasphereQuery.toLowerCase()) ||
        p.app.toLowerCase().includes(datasphereQuery.toLowerCase())
    );

    const totalOrder = filtered.reduce((acc, p) => {
      const q = datasphereQty[p.sku] || 0;
      const discount = datasphereWholesale ? 0.8 : 1.0;
      return acc + Math.round(p.unit * discount) * q;
    }, 0);

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-slate-900/90 text-slate-100 border border-amber-500/30 text-xs sm:text-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <Package className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">DataSphere Catálogos B2B</h4>
              <p className="text-[11px] text-amber-300/80">Refaccionarias &amp; Pedidos por Mayoreo • Sonora</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <input
              type="checkbox"
              id="wholesale"
              checked={datasphereWholesale}
              onChange={(e) => setDatasphereWholesale(e.target.checked)}
              className="accent-amber-500 rounded"
            />
            <label htmlFor="wholesale" className="text-[11px] text-amber-300 font-bold cursor-pointer">
              Precio Mayoreo (-20%)
            </label>
          </div>
        </div>

        {/* Buscador de partes */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por código SKU, pieza o vehículo (ej: Hilux, Balatas, FLT)..."
            value={datasphereQuery}
            onChange={(e) => setDatasphereQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
          />
        </div>

        {/* Lista de refacciones */}
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          {filtered.map((p) => {
            const q = datasphereQty[p.sku] || 0;
            const price = datasphereWholesale ? Math.round(p.unit * 0.8) : p.unit;

            return (
              <div
                key={p.sku}
                className="p-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-2"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded">
                      {p.sku}
                    </span>
                    <span className="font-bold text-xs text-white truncate">{p.title}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {p.app} • <strong className="text-emerald-400">${price} c/u</strong>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-950 px-2 py-0.5 rounded-lg border border-white/10">
                  <button
                    type="button"
                    onClick={() => setDatasphereQty({ ...datasphereQty, [p.sku]: Math.max(0, q - 1) })}
                    className="w-4 h-4 text-xs font-bold text-slate-300"
                  >
                    -
                  </button>
                  <span className="w-4 text-center font-bold text-xs text-white">{q}</span>
                  <button
                    type="button"
                    onClick={() => setDatasphereQty({ ...datasphereQty, [p.sku]: q + 1 })}
                    className="w-4 h-4 text-xs font-bold text-amber-400"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resumen */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div>
            <div className="text-[10px] text-slate-400">Total Cotización Mayoreo:</div>
            <div className="text-lg font-black text-emerald-400">${totalOrder} MXN</div>
          </div>
          <button
            type="button"
            onClick={() =>
              sendWhatsApp(
                `¡Hola DataSphere Refaccionarias! Deseo cotizar pedido por lote:\n` +
                Object.entries(datasphereQty)
                  .filter(([, q]) => q > 0)
                  .map(([sku, q]) => `• ${q}x [${sku}]`)
                  .join('\n') +
                `\nPrecio Mayoreo: ${datasphereWholesale ? 'SÍ (-20%)' : 'NO'}\nTotal Estimado: $${totalOrder} MXN`
              )
            }
            className="py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <Package className="w-4 h-4 fill-slate-950" />
            <span>Mandar Pedido Lote (WhatsApp)</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     10. NOVAPAY BILLING (Finanzas & Facturación CFDI 4.0)
     ======================================================== */
  if (slug === 'novapay-billing') {
    const concepts: Record<string, { label: string; amount: number }> = {
      web_liquid_glass: { label: 'Diseño Web Liquid Glass (Paquete Profesional)', amount: 8900 },
      app_ia: { label: 'Aplicación Web PWA + Agente Gemini IA 24/7', amount: 14900 },
      landing_esencial: { label: 'Landing Page de Alta Conversión', amount: 4900 },
    };

    const currentConcept = concepts[novapayConcept] || concepts.web_liquid_glass;
    const subtotal = currentConcept.amount;
    const iva = Math.round(subtotal * 0.16);
    const total = subtotal + iva;
    const anticipo50 = Math.round(total / 2);

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-slate-900/90 text-slate-100 border border-emerald-500/30 text-xs sm:text-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">NovaPay Billing Engine CFDI 4.0</h4>
              <p className="text-[11px] text-emerald-300/80">Generador de Anticipos del 50% &amp; Liquidaciones</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold">
            SAT Timbrado 4.0
          </span>
        </div>

        {/* Cliente y Concepto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Razón Social Cliente:</span>
            <input
              type="text"
              value={novapayClient}
              onChange={(e) => setNovapayClient(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-400"
            />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Concepto Oficial:</span>
            <select
              value={novapayConcept}
              onChange={(e) => setNovapayConcept(e.target.value)}
              className="w-full bg-slate-950 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none"
            >
              <option value="landing_esencial">Landing Esencial ($4,900)</option>
              <option value="web_liquid_glass">Sitio Profesional ($8,900)</option>
              <option value="app_ia">App IA Escalable ($14,900)</option>
            </select>
          </div>
        </div>

        {/* Desglose Fiscal */}
        <div className="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-1.5 text-xs">
          <div className="flex justify-between text-slate-300">
            <span>Subtotal:</span>
            <span className="font-bold">${subtotal.toLocaleString()} MXN</span>
          </div>
          <div className="flex justify-between text-slate-400 text-[11px]">
            <span>IVA (16%):</span>
            <span>${iva.toLocaleString()} MXN</span>
          </div>
          <div className="flex justify-between font-black text-white pt-1 border-t border-white/5">
            <span>Total Factura:</span>
            <span className="text-emerald-400">${total.toLocaleString()} MXN</span>
          </div>
          <div className="flex justify-between font-extrabold text-cyan-300 pt-1 text-[11px] bg-cyan-500/10 p-1.5 rounded-lg border border-cyan-400/20">
            <span>💳 Anticipo Requerido (50%):</span>
            <span>${anticipo50.toLocaleString()} MXN</span>
          </div>
        </div>

        {/* Resumen & Botón */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div>
            <div className="text-[10px] text-slate-400">Beneficiario Oficial:</div>
            <div className="text-xs font-black text-amber-300">HP Digital &amp; AI Agency</div>
          </div>
          <button
            type="button"
            onClick={() =>
              sendWhatsApp(
                `¡Hola HP Digital & AI Agency! Deseo emitir factura/recibo para mi anticipo:\n` +
                `• Cliente: ${novapayClient}\n` +
                `• Servicio: ${currentConcept.label}\n` +
                `• Anticipo 50%: $${anticipo50} MXN (Total: $${total} MXN)\n` +
                `¿Me comparten la cuenta CLABE para transferir el anticipo?`
              )
            }
            className="py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <CreditCard className="w-4 h-4 fill-slate-950" />
            <span>Solicitar Cuenta de Anticipo (WhatsApp)</span>
          </button>
        </div>
      </div>
    );
  }


  /* ========================================================
     11. RADAR DE CLIENTES B2B & AUDITORÍA IA (saas-ia)
     ======================================================== */
  if (slug === 'radar-clientes') {
    const isBoceto = visualMode === 'boceto';
    const prospects = [
      { name: 'Mariscos Bahía Azul', status: 'Sin Web Móvil', score: '38/100', opp: 'Alta 🔥' },
      { name: 'Taller Mecánico El Chato', status: 'Web Lenta / Sin SSL', score: '44/100', opp: 'Crítica ⚠️' },
      { name: 'Clínica Dental Miramar', status: 'Sin Citas WhatsApp', score: '52/100', opp: 'Media 💡' },
      { name: 'Hotel & Suites Cortés', status: 'Comisiones 30% Booking', score: '61/100', opp: 'VIP 💎' },
    ];

    if (isBoceto) {
      return (
        <div className="p-3 sm:p-5 rounded-2xl bg-[#09111e] text-slate-100 border-2 border-dashed border-sky-400/50 font-mono text-xs sm:text-sm space-y-4 shadow-2xl relative overflow-hidden bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex items-center justify-between pb-2.5 border-b border-sky-400/30 text-[10px] text-sky-400">
            <div className="flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>[BOCETO ARQUITECTÓNICO WIREFRAME]</span>
            </div>
            <span className="text-slate-400">SPEC: RADAR_AI_ENGINE • GEMINI_FLASH_2_5</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-sky-400/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-400/40 flex items-center justify-center text-sky-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sky-300 text-xs sm:text-sm">[MODULE: PROSPECT_RADAR_B2B]</h4>
                <p className="text-[10px] text-slate-400 font-mono">ZONA: {radarColonia} • NICHO: {radarNiche}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={radarColonia}
                onChange={(e) => setRadarColonia(e.target.value)}
                className="bg-sky-950/80 text-sky-300 border border-sky-400/30 px-2 py-1 rounded text-xs font-mono"
              >
                <option value="85400 Centro Guaymas">85400 Centro Guaymas</option>
                <option value="85440 Las Villas">85440 Las Villas</option>
                <option value="85506 San Carlos">85506 San Carlos</option>
                <option value="85420 Petrolera">85420 Petrolera</option>
              </select>
            </div>
          </div>

          {/* Lista de Prospectos Wireframe */}
          <div className="space-y-2">
            <span className="text-[10px] text-sky-400/80 font-mono block">/// COMPONENT: DETECTED_LEADS_AUDIT_STREAM</span>
            {prospects.map((p, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-sky-950/40 border border-dashed border-sky-400/30 flex items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-sky-200 text-xs">{p.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{p.status} • Diagnóstico SEO: {p.score}</div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] font-mono text-emerald-400 bg-sky-900/60 px-2 py-0.5 rounded border border-sky-400/30">{p.opp}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-sky-400/30">
            <div className="text-[10px] text-slate-400 font-mono">POTENCIAL ESTIMADO: 4 NEGOCIOS CALIFICADOS</div>
            <button
              type="button"
              onClick={() => sendWhatsApp(`¡Hola Miguel! Vi el boceto del Radar de Clientes B2B con IA en tu Portafolio y quiero una auditoría comercial para mi empresa en ${radarColonia}.`)}
              className="py-2 px-3 rounded bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>[AUDITAR_CON_GEMINI_IA]</span>
            </button>
          </div>
        </div>
      );
    }

    // Modo Liquid Glass (Producción)
    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-[#0c141e]/95 text-slate-100 border border-cyan-400/40 text-xs sm:text-sm space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(6,182,212,0.25)] backdrop-blur-2xl ring-1 ring-white/10 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/15 rounded-full blur-[50px] pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/15 rounded-full blur-[50px] pointer-events-none" />

        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-emerald-400 p-[2px]">
              <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-cyan-400 font-bold">
                <Bot className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-black text-white text-sm tracking-tight">RADAR DE CLIENTES B2B &amp; AUDITORÍA IA</h4>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 text-[9px] font-extrabold uppercase">
                  Gemini 2.5 Flash
                </span>
              </div>
              <p className="text-[11px] text-cyan-300/90 font-medium">Prospección en Sonora • Filtro por Código Postal</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-950/80 px-2.5 py-1 rounded-xl border border-white/15">
            <span className="text-[10px] text-slate-400">Zona:</span>
            <select
              value={radarColonia}
              onChange={(e) => setRadarColonia(e.target.value)}
              className="bg-transparent text-cyan-300 font-bold text-xs focus:outline-none"
            >
              <option value="85400 Centro Guaymas" className="bg-slate-900 text-white">85400 Centro</option>
              <option value="85440 Las Villas" className="bg-slate-900 text-white">85440 Las Villas</option>
              <option value="85506 San Carlos" className="bg-slate-900 text-white">85506 San Carlos</option>
              <option value="85420 Petrolera" className="bg-slate-900 text-white">85420 Petrolera</option>
            </select>
          </div>
        </div>

        {/* Tarjetas de Prospectos Auditados con IA */}
        <div className="space-y-2 relative z-10">
          {prospects.map((p, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-white text-xs">{p.name}</span>
                  <span className="text-[9px] font-bold text-rose-300 bg-rose-500/15 border border-rose-400/30 px-1.5 py-0.2 rounded-full">{p.status}</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">Auditoría Lighthouse &amp; SEO Local: <strong className="text-amber-300">{p.score}</strong> • Conversión esperada: +140%</p>
              </div>
              <button
                type="button"
                onClick={() => sendWhatsApp(`¡Hola Miguel! Quiero ver la auditoría IA de "${p.name}" y cotizar el Paquete Escalable con Radar de Clientes.`)}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-95 text-slate-950 font-black text-xs shrink-0 shadow-md transition-all active:scale-95 flex items-center gap-1"
              >
                <Zap className="w-3 h-3 fill-slate-950" />
                <span>Auditar</span>
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
          <div className="text-[11px] text-slate-400">
            Velocidad IA: <strong className="text-emerald-400">&lt;0.4s</strong> • Precisión: <strong className="text-cyan-300">98.5%</strong>
          </div>
          <button
            type="button"
            onClick={() => sendWhatsApp(`¡Hola Miguel! Quiero activar el Radar de Clientes B2B con IA Gemini para prospección comercial en Sonora.`)}
            className="py-2 px-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Activar Radar para mi Empresa</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     12. LA OLLA DE BARRO — MENÚ DEL DÍA (gastronomia)
     ======================================================== */
  if (slug === 'la-olla-de-barro') {
    const isBoceto = visualMode === 'boceto';
    const guisos = [
      { name: 'Carne con Chile en Cazuela', desc: 'Pulpa de res suave en adobo tatemado de chile colorado con frijoles puercos', tag: 'Favorito 🔥' },
      { name: 'Costillita en Salsa Verde', desc: 'Costilla dorada en salsa de tomatillo de milpa con cilantro criollo', tag: 'Clásico' },
      { name: 'Deshebrada Norteña', desc: 'Falda de res deshebrada con jitomate, cebolla blanca y rajas de poblano', tag: 'Casero' },
      { name: 'Chicharrón Prensado', desc: 'Chicharrón de cerdo en guisado morita con papas en cubitos', tag: 'Tradición' },
    ];

    if (isBoceto) {
      return (
        <div className="p-3 sm:p-5 rounded-2xl bg-[#09111e] text-slate-100 border-2 border-dashed border-sky-400/50 font-mono text-xs sm:text-sm space-y-4 shadow-2xl relative overflow-hidden bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex items-center justify-between pb-2.5 border-b border-sky-400/30 text-[10px] text-sky-400">
            <span className="font-bold">[BOCETO ARQUITECTÓNICO WIREFRAME • MENÚ DEL DÍA]</span>
            <span className="text-slate-400">SPEC: COMIDA_CORRIDA_QR_V1</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-sky-400/20">
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-amber-400" />
              <div>
                <h4 className="font-bold text-amber-300 text-xs sm:text-sm">[HEADER: LA_OLLA_DE_BARRO]</h4>
                <p className="text-[10px] text-slate-400">PAQUETE 6 TIEMPOS • PRECIO FIJO: $129 MXN</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-400/30">$129 MXN</span>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] text-sky-400/80 font-mono block">/// COMPONENT: GUISADO_SELECTOR</span>
            <div className="grid grid-cols-2 gap-2">
              {guisos.map((g) => (
                <button
                  key={g.name}
                  type="button"
                  onClick={() => setOllaGuiso(g.name)}
                  className={`p-2 rounded-lg text-left border text-[11px] font-mono transition-all ${
                    ollaGuiso === g.name
                      ? 'bg-sky-500 text-slate-950 font-bold border-sky-400'
                      : 'bg-sky-950/40 text-slate-300 border-sky-400/30 hover:border-sky-400/60'
                  }`}
                >
                  <div className="font-bold truncate">{g.name}</div>
                  <div className="text-[9px] opacity-75">{g.tag}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-xl bg-sky-950/40 border border-dashed border-sky-400/20 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-sky-400">PICANTE:</span>
              {['Suave', 'Medio', 'Bravo 🔥'].map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setOllaPicante(lvl)}
                  className={`px-2 py-0.5 rounded text-[10px] ${
                    ollaPicante === lvl ? 'bg-amber-400 text-black font-bold' : 'text-slate-400 bg-sky-900/40'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
            <div className="text-[10px] text-slate-400">TORTILLAS: {ollaTortillas}</div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-sky-400/30">
            <div className="text-[10px] text-slate-400 font-mono">COMANDA: {ollaGuiso} (Nivel {ollaPicante})</div>
            <button
              type="button"
              onClick={() => sendWhatsApp(`¡Hola La Olla de Barro! Quiero ordenar el Menú del Día ($129 MXN):
• Guisado: ${ollaGuiso}
• Nivel de picante: ${ollaPicante}
• Guarnición: ${ollaGuarnicion}
• Tortillas: ${ollaTortillas}`)}
              className="py-2 px-3 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>[ENVIAR_COMANDA_COCINA]</span>
            </button>
          </div>
        </div>
      );
    }

    // Liquid Glass
    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-[#0c141e]/95 text-slate-100 border border-amber-400/40 text-xs sm:text-sm space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(245,158,11,0.25)] backdrop-blur-2xl ring-1 ring-white/10 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/15 rounded-full blur-[50px] pointer-events-none" />
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 p-[2px]">
              <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-amber-400 font-bold">
                <Utensils className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-black text-white text-sm">LA OLLA DE BARRO — MENÚ DEL DÍA</h4>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[9px] font-extrabold uppercase">
                  $129 MXN
                </span>
              </div>
              <p className="text-[11px] text-amber-200/90 font-medium">Guisados en Cazuela Caliente • Tortillas Hechas a Mano</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 relative z-10">
          {guisos.map((g) => (
            <div
              key={g.name}
              onClick={() => setOllaGuiso(g.name)}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                ollaGuiso === g.name
                  ? 'bg-amber-500/20 border-amber-400 shadow-lg shadow-amber-500/20'
                  : 'bg-white/[0.04] border-white/10 hover:border-amber-400/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-black text-white text-xs">{g.name}</span>
                <span className="text-[9px] font-bold text-amber-300 bg-amber-500/15 px-1.5 py-0.5 rounded">{g.tag}</span>
              </div>
              <p className="text-[10px] text-slate-300 mt-1 line-clamp-2">{g.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
          <div>
            <div className="text-[10px] text-slate-400">Total Menú Completo:</div>
            <div className="text-base font-black text-emerald-400">$129 MXN</div>
          </div>
          <button
            type="button"
            onClick={() => sendWhatsApp(`¡Hola La Olla de Barro! Quiero ordenar mi comida corrida de hoy:
• Guisado: ${ollaGuiso}
• Picante: ${ollaPicante}
• Guarnición: ${ollaGuarnicion}
Total: $129 MXN`)}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-95 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Pedir por WhatsApp (Sin Comisiones)</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     13. DENTCARE — CLÍNICA DENTAL (salud)
     ======================================================== */
  if (slug === 'dentcare-clinica') {
    const isBoceto = visualMode === 'boceto';
    const services = [
      { name: 'Limpieza Ultrasónica & Profilaxis', price: 650, time: '40 min' },
      { name: 'Blanqueamiento Dental Láser', price: 2400, time: '60 min' },
      { name: 'Resina Estética de Alta Densidad', price: 850, time: '45 min' },
      { name: 'Valoración Implante & Ortodoncia', price: 400, time: '30 min' },
    ];
    const selected = services.find((s) => s.name.startsWith(dentService.slice(0, 10))) || services[0];

    if (isBoceto) {
      return (
        <div className="p-3 sm:p-5 rounded-2xl bg-[#09111e] text-slate-100 border-2 border-dashed border-sky-400/50 font-mono text-xs sm:text-sm space-y-4 shadow-2xl relative overflow-hidden bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex items-center justify-between pb-2.5 border-b border-sky-400/30 text-[10px] text-sky-400">
            <span className="font-bold">[BOCETO ARQUITECTÓNICO WIREFRAME • DENTAL CLINIC]</span>
            <span className="text-slate-400">SPEC: CLINIC_SCHEDULE_V1</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-sky-400/20">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-sky-400" />
              <div>
                <h4 className="font-bold text-sky-300 text-xs sm:text-sm">[HEADER: DENTCARE_CLINICA_SONORA]</h4>
                <p className="text-[10px] text-slate-400">ESPECIALISTA: {dentDoctor} • TURNO: {dentTurno}</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-400/30">${selected.price} MXN</span>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] text-sky-400/80 font-mono block">/// COMPONENT: APPOINTMENT_SERVICE_PICKER</span>
            {services.map((s) => (
              <div
                key={s.name}
                onClick={() => setDentService(s.name)}
                className={`p-2 rounded-lg border text-xs font-mono flex items-center justify-between cursor-pointer ${
                  dentService === s.name ? 'bg-sky-500 text-slate-950 font-bold border-sky-400' : 'bg-sky-950/40 text-slate-300 border-sky-400/30'
                }`}
              >
                <span>{s.name}</span>
                <span className="font-bold">${s.price} MXN ({s.time})</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-sky-400/30">
            <div className="text-[10px] text-slate-400 font-mono">ESTIMADO: ${selected.price} MXN ({dentTurno})</div>
            <button
              type="button"
              onClick={() => sendWhatsApp(`¡Hola DentCare! Deseo agendar cita para "${selected.name}" ($${selected.price} MXN) en el turno de ${dentTurno} con ${dentDoctor}.`)}
              className="py-2 px-3 rounded bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4 fill-slate-950" />
              <span>[CONFIRMAR_CITA_WHATSAPP]</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-[#0c141e]/95 text-slate-100 border border-teal-400/40 text-xs sm:text-sm space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(20,184,166,0.25)] backdrop-blur-2xl ring-1 ring-white/10 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500/15 rounded-full blur-[50px] pointer-events-none" />
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-400 to-cyan-500 p-[2px]">
              <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-teal-300 font-bold">
                <Stethoscope className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-black text-white text-sm">DENTCARE — CLÍNICA DENTAL ESPECIALIZADA</h4>
                <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/40 text-[9px] font-extrabold uppercase">
                  5.0 ★ Google Maps
                </span>
              </div>
              <p className="text-[11px] text-teal-200/90 font-medium">{dentDoctor} • Tecnología Láser &amp; Implantes</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 relative z-10">
          {services.map((s) => (
            <div
              key={s.name}
              onClick={() => setDentService(s.name)}
              className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                dentService === s.name
                  ? 'bg-teal-500/20 border-teal-400 shadow-md shadow-teal-500/20'
                  : 'bg-white/[0.04] border-white/10 hover:border-teal-400/40'
              }`}
            >
              <div>
                <span className="font-extrabold text-white text-xs">{s.name}</span>
                <div className="text-[10px] text-slate-400 mt-0.5">Duración aprox: {s.time} • Diagnóstico digital incluido</div>
              </div>
              <span className="text-emerald-400 font-black text-xs">${s.price} MXN</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
          <div>
            <div className="text-[10px] text-slate-400">Total Estimado Cita:</div>
            <div className="text-base font-black text-emerald-400">${selected.price} MXN</div>
          </div>
          <button
            type="button"
            onClick={() => sendWhatsApp(`¡Hola DentCare! Deseo agendar cita para "${selected.name}" ($${selected.price} MXN) en el turno de ${dentTurno}.`)}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 hover:opacity-95 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4 fill-slate-950" />
            <span>Agendar Cita por WhatsApp</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     14. OBRAMAESTRA — CALCULADORA CIVIL & CAD (construccion)
     ======================================================== */
  if (slug === 'obramaestra-cad') {
    const isBoceto = visualMode === 'boceto';
    const area = obraLength * obraHeight;
    const blocks = Math.round(area * 12.5);
    const cement = Math.round(area * 0.45);
    const sand = (area * 0.05).toFixed(1);
    const costEstimate = Math.round(blocks * 24 + cement * 240 + parseFloat(sand) * 650);

    if (isBoceto) {
      return (
        <div className="p-3 sm:p-5 rounded-2xl bg-[#09111e] text-slate-100 border-2 border-dashed border-sky-400/50 font-mono text-xs sm:text-sm space-y-4 shadow-2xl relative overflow-hidden bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex items-center justify-between pb-2.5 border-b border-sky-400/30 text-[10px] text-sky-400">
            <span className="font-bold">[BOCETO ARQUITECTÓNICO WIREFRAME • CAD CALCULATOR]</span>
            <span className="text-slate-400">SPEC: CIVIL_ENG_SPEC_V1</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-sky-400/20">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-sky-400" />
              <div>
                <h4 className="font-bold text-sky-300 text-xs sm:text-sm">[MODULE: CUANTIFICADOR_MUROS_CIVIL]</h4>
                <p className="text-[10px] text-slate-400 font-mono">TIPO: {obraType} • ÁREA: {area.toFixed(1)} m²</p>
              </div>
            </div>
            <span className="text-xs font-mono text-amber-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-400/30">${costEstimate.toLocaleString()} MXN</span>
          </div>

          <div className="grid grid-cols-2 gap-3 p-2.5 rounded-xl bg-sky-950/40 border border-dashed border-sky-400/20 text-xs">
            <div>
              <span className="text-[10px] text-sky-400 font-mono block">LONGITUD MURO ({obraLength} m):</span>
              <input
                type="range"
                min="4"
                max="40"
                value={obraLength}
                onChange={(e) => setObraLength(Number(e.target.value))}
                className="w-full accent-sky-400 cursor-pointer"
              />
            </div>
            <div>
              <span className="text-[10px] text-sky-400 font-mono block">ALTURA MURO ({obraHeight} m):</span>
              <input
                type="range"
                min="2.0"
                max="4.5"
                step="0.1"
                value={obraHeight}
                onChange={(e) => setObraHeight(Number(e.target.value))}
                className="w-full accent-sky-400 cursor-pointer"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center font-mono">
            <div className="p-2 rounded bg-sky-950/70 border border-sky-400/30">
              <div className="text-[10px] text-slate-400">BLOCKS:</div>
              <div className="text-sm font-bold text-sky-300">{blocks} pzas</div>
            </div>
            <div className="p-2 rounded bg-sky-950/70 border border-sky-400/30">
              <div className="text-[10px] text-slate-400">CEMENTO:</div>
              <div className="text-sm font-bold text-sky-300">{cement} sacos</div>
            </div>
            <div className="p-2 rounded bg-sky-950/70 border border-sky-400/30">
              <div className="text-[10px] text-slate-400">ARENA:</div>
              <div className="text-sm font-bold text-sky-300">{sand} m³</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-sky-400/30">
            <div className="text-[10px] text-slate-400 font-mono">TOTAL ESTIMADO: ${costEstimate.toLocaleString()} MXN</div>
            <button
              type="button"
              onClick={() => sendWhatsApp(`¡Hola ObraMaestra! Realicé la cuantificación de un muro de ${obraLength}m x ${obraHeight}m (${area.toFixed(1)}m²):
• Blocks: ${blocks} pzas
• Cemento: ${cement} sacos
• Costo estimado: $${costEstimate.toLocaleString()} MXN.
¿Me pueden enviar el presupuesto formal con mano de obra?`)}
              className="py-2 px-3 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>[COTIZAR_OBRA_CIVIL]</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-[#0c141e]/95 text-slate-100 border border-amber-400/40 text-xs sm:text-sm space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(245,158,11,0.25)] backdrop-blur-2xl ring-1 ring-white/10 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/15 rounded-full blur-[50px] pointer-events-none" />
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 p-[2px]">
              <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-amber-400 font-bold">
                <Building2 className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-black text-white text-sm">OBRAMAESTRA — CALCULADORA CIVIL &amp; CAD</h4>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[9px] font-extrabold uppercase">
                  Cuantificador en Tiempo Real
                </span>
              </div>
              <p className="text-[11px] text-amber-200/90 font-medium">Cálculo de Materiales de Construcción en Sonora</p>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-3 relative z-10">
          <div className="flex justify-between text-xs">
            <span>Dimensiones: <strong>{obraLength}m de largo x {obraHeight}m de alto</strong></span>
            <span className="text-cyan-300 font-bold">Área: {area.toFixed(1)} m²</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-lg bg-black/40 border border-white/10">
              <span className="text-[10px] text-slate-400 block">Blocks 15x20x40</span>
              <span className="text-sm font-black text-amber-400">{blocks} pzas</span>
            </div>
            <div className="p-2 rounded-lg bg-black/40 border border-white/10">
              <span className="text-[10px] text-slate-400 block">Sacos Cemento</span>
              <span className="text-sm font-black text-cyan-300">{cement} sacos</span>
            </div>
            <div className="p-2 rounded-lg bg-black/40 border border-white/10">
              <span className="text-[10px] text-slate-400 block">Arena Lavada</span>
              <span className="text-sm font-black text-emerald-400">{sand} m³</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
          <div>
            <div className="text-[10px] text-slate-400">Presupuesto Estimado Materiales:</div>
            <div className="text-base font-black text-emerald-400">${costEstimate.toLocaleString()} MXN</div>
          </div>
          <button
            type="button"
            onClick={() => sendWhatsApp(`¡Hola ObraMaestra! Deseo presupuesto formal para muro de ${area.toFixed(1)}m² (${blocks} blocks y ${cement} sacos).`)}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-95 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Solicitar Presupuesto Formal (WhatsApp)</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     15. AIRCON — CLIMAS & REFRIGERACIÓN SONORA (construccion)
     ======================================================== */
  if (slug === 'aircon-climas') {
    const isBoceto = visualMode === 'boceto';
    const tons = airconArea <= 16 ? '1.0 Tonelada (12,000 BTU)' : airconArea <= 28 ? '1.5 Toneladas (18,000 BTU)' : '2.0 Toneladas (24,000 BTU)';
    const price = airconArea <= 16 ? 8900 : airconArea <= 28 ? 12400 : 16800;

    if (isBoceto) {
      return (
        <div className="p-3 sm:p-5 rounded-2xl bg-[#09111e] text-slate-100 border-2 border-dashed border-sky-400/50 font-mono text-xs sm:text-sm space-y-4 shadow-2xl relative overflow-hidden bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex items-center justify-between pb-2.5 border-b border-sky-400/30 text-[10px] text-sky-400">
            <span className="font-bold">[BOCETO ARQUITECTÓNICO WIREFRAME • HVAC HVAC_DESERT]</span>
            <span className="text-slate-400">CLIMATE: SONORA_45C</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-sky-400/20">
            <div className="flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-cyan-400" />
              <div>
                <h4 className="font-bold text-sky-300 text-xs sm:text-sm">[MODULE: CALCULADORA_INVERTER_TONELADAS]</h4>
                <p className="text-[10px] text-slate-400 font-mono">HABITACIÓN: {airconArea} m² • {airconSun}</p>
              </div>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-400/30">${price.toLocaleString()} MXN</span>
          </div>

          <div className="p-2.5 rounded-xl bg-sky-950/40 border border-dashed border-sky-400/20 text-xs space-y-2">
            <div className="flex justify-between text-[11px] font-mono">
              <span>ÁREA A ENFRIAR: {airconArea} m²</span>
              <span className="text-cyan-300 font-bold">{tons}</span>
            </div>
            <input
              type="range"
              min="10"
              max="45"
              value={airconArea}
              onChange={(e) => setAirconArea(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-sky-400/30">
            <div className="text-[10px] text-slate-400 font-mono">RECOMENDADO: {tons} INVERTER 220V</div>
            <button
              type="button"
              onClick={() => sendWhatsApp(`¡Hola AirCon! Hice el cálculo para climatizar ${airconArea}m² con sol directo en Guaymas/San Carlos. Requiero cotización para ${tons} con instalación incluida.`)}
              className="py-2 px-3 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <Snowflake className="w-4 h-4" />
              <span>[COTIZAR_EQUIPO_INSTALACION]</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-[#0c141e]/95 text-slate-100 border border-cyan-400/40 text-xs sm:text-sm space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(6,182,212,0.25)] backdrop-blur-2xl ring-1 ring-white/10 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/15 rounded-full blur-[50px] pointer-events-none" />
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-sky-600 p-[2px]">
              <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-cyan-300 font-bold">
                <Snowflake className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-black text-white text-sm">AIRCON — REFRIGERACIÓN &amp; MINISPLITS SONORA</h4>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-[9px] font-extrabold uppercase">
                  Ahorro CFE Inverter
                </span>
              </div>
              <p className="text-[11px] text-cyan-200/90 font-medium">Equipos de Alta Eficiencia • Garantía 5 Años en Compresor</p>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-2 relative z-10">
          <div className="flex justify-between text-xs">
            <span>Tamaño de la Habitación: <strong>{airconArea} m²</strong></span>
            <span className="text-emerald-400 font-bold">{tons}</span>
          </div>
          <p className="text-[11px] text-slate-300">
            Diseñado para clima extremo de 45°C en Guaymas/Hermosillo. Reduce el consumo hasta en un 65% comparado con aires tradicionales.
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
          <div>
            <div className="text-[10px] text-slate-400">Equipo + Instalación Básica:</div>
            <div className="text-base font-black text-emerald-400">${price.toLocaleString()} MXN</div>
          </div>
          <button
            type="button"
            onClick={() => sendWhatsApp(`¡Hola AirCon! Quiero cotizar ${tons} con instalación para ${airconArea}m² en Guaymas/San Carlos.`)}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 hover:opacity-95 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Agendar Instalación por WhatsApp</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     16. LUXURY HOTEL & SUITES SAN CARLOS (turismo)
     ======================================================== */
  if (slug === 'luxury-hotel-guest-app') {
    const isBoceto = visualMode === 'boceto';
    const suites = [
      { name: 'Ocean Front Master Suite', price: 3850, view: 'Vista directa al Mar de Cortés' },
      { name: 'Villa Tetakawi Sunset', price: 5400, view: 'Piscina infinity privada y terraza' },
      { name: 'Presidential Penthouse', price: 8200, view: 'Piso exclusivo con jacuzzi panorámico' },
    ];
    const suite = suites.find((s) => s.name === hotelSuite) || suites[0];

    if (isBoceto) {
      return (
        <div className="p-3 sm:p-5 rounded-2xl bg-[#09111e] text-slate-100 border-2 border-dashed border-sky-400/50 font-mono text-xs sm:text-sm space-y-4 shadow-2xl relative overflow-hidden bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex items-center justify-between pb-2.5 border-b border-sky-400/30 text-[10px] text-sky-400">
            <span className="font-bold">[BOCETO ARQUITECTÓNICO WIREFRAME • GUEST EXPERIENCE PWA]</span>
            <span className="text-slate-400">HOTEL: SAN_CARLOS_RESORT</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-sky-400/20">
            <div className="flex items-center gap-2">
              <BedDouble className="w-4 h-4 text-sky-400" />
              <div>
                <h4 className="font-bold text-sky-300 text-xs sm:text-sm">[MODULE: SUITE_ROOM_CONTROL]</h4>
                <p className="text-[10px] text-slate-400 font-mono">{hotelSuite} • CLIMA: {hotelTemp}°C</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-400/30">${suite.price} MXN/noche</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 rounded bg-sky-950/40 border border-dashed border-sky-400/30">
              <span className="text-[10px] text-sky-400 block">LLAVE DIGITAL NFC:</span>
              <button
                type="button"
                onClick={() => setHotelKeyActive(!hotelKeyActive)}
                className={`mt-1 w-full py-1 rounded text-center font-bold ${
                  hotelKeyActive ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500/30 text-rose-300'
                }`}
              >
                {hotelKeyActive ? 'PUERTA DESBLOQUEADA' : 'PUERTA BLOQUEADA'}
              </button>
            </div>
            <div className="p-2 rounded bg-sky-950/40 border border-dashed border-sky-400/30">
              <span className="text-[10px] text-sky-400 block">CLIMA HABITACIÓN:</span>
              <div className="flex items-center justify-between mt-1">
                <button type="button" onClick={() => setHotelTemp(Math.max(18, hotelTemp - 1))} className="px-2 py-0.5 bg-sky-900 rounded">-</button>
                <span className="font-bold text-amber-300">{hotelTemp}°C</span>
                <button type="button" onClick={() => setHotelTemp(Math.min(26, hotelTemp + 1))} className="px-2 py-0.5 bg-sky-900 rounded">+</button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-sky-400/30">
            <div className="text-[10px] text-slate-400 font-mono">SUITE: {suite.name}</div>
            <button
              type="button"
              onClick={() => sendWhatsApp(`¡Hola Luxury Hotel San Carlos! Deseo reservar la "${suite.name}" ($${suite.price} MXN) y coordinar el traslado desde el aeropuerto.`)}
              className="py-2 px-3 rounded bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <KeyRound className="w-4 h-4" />
              <span>[RESERVAR_CONSERJE_WHATSAPP]</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-[#0c141e]/95 text-slate-100 border border-amber-400/40 text-xs sm:text-sm space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(245,158,11,0.25)] backdrop-blur-2xl ring-1 ring-white/10 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/15 rounded-full blur-[50px] pointer-events-none" />
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-rose-500 p-[2px]">
              <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-amber-400 font-bold">
                <BedDouble className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-black text-white text-sm">LUXURY HOTEL &amp; SUITES SAN CARLOS</h4>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[9px] font-extrabold uppercase">
                  App de Huésped PWA
                </span>
              </div>
              <p className="text-[11px] text-amber-200/90 font-medium">Frente al Mar de Cortés • Control Inteligente de Habitación</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 relative z-10">
          {suites.map((s) => (
            <div
              key={s.name}
              onClick={() => setHotelSuite(s.name)}
              className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                hotelSuite === s.name
                  ? 'bg-amber-500/20 border-amber-400 shadow-lg shadow-amber-500/20'
                  : 'bg-white/[0.04] border-white/10 hover:border-amber-400/40'
              }`}
            >
              <div>
                <span className="font-extrabold text-white text-xs">{s.name}</span>
                <div className="text-[10px] text-slate-300 mt-0.5">{s.view}</div>
              </div>
              <span className="text-emerald-400 font-black text-xs">${s.price} MXN</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
          <div>
            <div className="text-[10px] text-slate-400">Tarifa por Noche:</div>
            <div className="text-base font-black text-emerald-400">${suite.price} MXN</div>
          </div>
          <button
            type="button"
            onClick={() => sendWhatsApp(`¡Hola Luxury Hotel San Carlos! Deseo reservar la "${suite.name}" ($${suite.price} MXN/noche).`)}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:opacity-95 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <KeyRound className="w-4 h-4 fill-slate-950" />
            <span>Reservar con Conserje VIP</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     17. LIMPIAPRO — COTIZADOR DE LIMPIEZA (servicios)
     ======================================================== */
  if (slug === 'limpiapro-servicios') {
    const isBoceto = visualMode === 'boceto';
    const basePrice = limpiaType.includes('Loft') ? 650 : limpiaType.includes('2 Pisos') ? 1350 : limpiaType.includes('Villa') ? 1900 : 1600;
    const extrasPrice = (limpiaDeep ? 450 : 0) + (limpiaWindows ? 350 : 0);
    const total = basePrice + extrasPrice;

    if (isBoceto) {
      return (
        <div className="p-3 sm:p-5 rounded-2xl bg-[#09111e] text-slate-100 border-2 border-dashed border-sky-400/50 font-mono text-xs sm:text-sm space-y-4 shadow-2xl relative overflow-hidden bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex items-center justify-between pb-2.5 border-b border-sky-400/30 text-[10px] text-sky-400">
            <span className="font-bold">[BOCETO ARQUITECTÓNICO WIREFRAME • CLEANING QUOTE]</span>
            <span className="text-slate-400">SPEC: LIMPIAPRO_SPEC_V1</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-sky-400/20">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <div>
                <h4 className="font-bold text-sky-300 text-xs sm:text-sm">[MODULE: COTIZADOR_LIMPIEZA_EXPRESS]</h4>
                <p className="text-[10px] text-slate-400 font-mono">INMUEBLE: {limpiaType}</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-400/30">${total} MXN</span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <select
              value={limpiaType}
              onChange={(e) => setLimpiaType(e.target.value)}
              className="w-full bg-sky-950 text-sky-300 border border-sky-400/30 p-2 rounded text-xs font-mono"
            >
              <option value="Departamento / Loft">Departamento / Loft ($650 MXN)</option>
              <option value="Casa Residencial (2 Pisos)">Casa Residencial 2 Pisos ($1,350 MXN)</option>
              <option value="Villa Turística San Carlos">Villa Turística San Carlos ($1,900 MXN)</option>
              <option value="Oficina Corporativa">Oficina Corporativa ($1,600 MXN)</option>
            </select>
            <div className="flex items-center gap-4 pt-1">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked={limpiaDeep} onChange={(e) => setLimpiaDeep(e.target.checked)} className="accent-sky-400" />
                <span>Profunda (+450)</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked={limpiaWindows} onChange={(e) => setLimpiaWindows(e.target.checked)} className="accent-sky-400" />
                <span>Ventanas (+350)</span>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-sky-400/30">
            <div className="text-[10px] text-slate-400 font-mono">TOTAL ESTIMADO: ${total} MXN</div>
            <button
              type="button"
              onClick={() => sendWhatsApp(`¡Hola LimpiaPro! Deseo agendar servicio para "${limpiaType}" con extras por un total de $${total} MXN.`)}
              className="py-2 px-3 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>[AGENDAR_CUADRILLA_WHATSAPP]</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-[#0c141e]/95 text-slate-100 border border-emerald-400/40 text-xs sm:text-sm space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(16,185,129,0.25)] backdrop-blur-2xl ring-1 ring-white/10 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/15 rounded-full blur-[50px] pointer-events-none" />
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-500 p-[2px]">
              <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-emerald-400 font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-black text-white text-sm">LIMPIAPRO — SERVICIOS DE LIMPIEZA PROFESIONAL</h4>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[9px] font-extrabold uppercase">
                  100% Garantizado
                </span>
              </div>
              <p className="text-[11px] text-emerald-200/90 font-medium">Personal Confiable • Insumos Biodegradables Incluidos</p>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-2 relative z-10">
          <div className="flex justify-between text-xs">
            <span>Inmueble Seleccionado: <strong>{limpiaType}</strong></span>
            <span className="text-emerald-400 font-bold">${basePrice} MXN</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-300 pt-1">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={limpiaDeep} onChange={(e) => setLimpiaDeep(e.target.checked)} className="accent-emerald-400" />
              <span>Desinfección profunda a vapor (+$450)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={limpiaWindows} onChange={(e) => setLimpiaWindows(e.target.checked)} className="accent-emerald-400" />
              <span>Lavado exterior de ventanas (+$350)</span>
            </label>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
          <div>
            <div className="text-[10px] text-slate-400">Total con Insumos Incluidos:</div>
            <div className="text-base font-black text-emerald-400">${total} MXN</div>
          </div>
          <button
            type="button"
            onClick={() => sendWhatsApp(`¡Hola LimpiaPro! Quiero agendar servicio de limpieza para "${limpiaType}" con total de $${total} MXN.`)}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:opacity-95 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Agendar Cuadrilla por WhatsApp</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     18. SOLARTEC — PANELES SOLARES & AHORRO CFE (sustentabilidad)
     ======================================================== */
  if (slug === 'solartec-energia') {
    const isBoceto = visualMode === 'boceto';
    const panels = Math.max(4, Math.round(solarBill / 850));
    const newBill = Math.round(solarBill * 0.05 + 110);
    const savingsAnnual = Math.round((solarBill - newBill) * 6);

    if (isBoceto) {
      return (
        <div className="p-3 sm:p-5 rounded-2xl bg-[#09111e] text-slate-100 border-2 border-dashed border-sky-400/50 font-mono text-xs sm:text-sm space-y-4 shadow-2xl relative overflow-hidden bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex items-center justify-between pb-2.5 border-b border-sky-400/30 text-[10px] text-sky-400">
            <span className="font-bold">[BOCETO ARQUITECTÓNICO WIREFRAME • SOLAR CALCULATOR]</span>
            <span className="text-slate-400">TARIFA: DAC_SONORA_CFE</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-sky-400/20">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-400" />
              <div>
                <h4 className="font-bold text-sky-300 text-xs sm:text-sm">[MODULE: CALCULADORA_AHORRO_CFE]</h4>
                <p className="text-[10px] text-slate-400 font-mono">RECIBO ACTUAL: ${solarBill.toLocaleString()} MXN / BIMESTRE</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-400/30">AHORRO: 95%</span>
          </div>

          <div className="p-2.5 rounded-xl bg-sky-950/40 border border-dashed border-sky-400/20 text-xs space-y-2">
            <div className="flex justify-between text-[11px] font-mono">
              <span>AJUSTAR RECIBO CFE ACTUAL:</span>
              <span className="text-amber-300 font-bold">${solarBill.toLocaleString()} MXN</span>
            </div>
            <input
              type="range"
              min="2000"
              max="25000"
              step="500"
              value={solarBill}
              onChange={(e) => setSolarBill(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-3 gap-2 text-center font-mono">
            <div className="p-2 rounded bg-sky-950/70 border border-sky-400/30">
              <div className="text-[10px] text-slate-400">PANELES TIER 1:</div>
              <div className="text-sm font-bold text-sky-300">{panels} paneles</div>
            </div>
            <div className="p-2 rounded bg-sky-950/70 border border-sky-400/30">
              <div className="text-[10px] text-slate-400">NUEVO RECIBO:</div>
              <div className="text-sm font-bold text-emerald-400">${newBill} MXN</div>
            </div>
            <div className="p-2 rounded bg-sky-950/70 border border-sky-400/30">
              <div className="text-[10px] text-slate-400">AHORRO ANUAL:</div>
              <div className="text-sm font-bold text-amber-300">${savingsAnnual.toLocaleString()}</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-sky-400/30">
            <div className="text-[10px] text-slate-400 font-mono">SISTEMA REQUERIDO: {panels} PANELES 550W</div>
            <button
              type="button"
              onClick={() => sendWhatsApp(`¡Hola Solartec! Mi recibo CFE bimestral es de $${solarBill.toLocaleString()} MXN. Deseo cotización para sistema solar de ${panels} paneles con trámite de medidor bidireccional.`)}
              className="py-2 px-3 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <Sun className="w-4 h-4 fill-slate-950" />
              <span>[COTIZAR_PANELES_WHATSAPP]</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-[#0c141e]/95 text-slate-100 border border-amber-400/40 text-xs sm:text-sm space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(245,158,11,0.25)] backdrop-blur-2xl ring-1 ring-white/10 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/15 rounded-full blur-[50px] pointer-events-none" />
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-500 p-[2px]">
              <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-amber-400 font-bold">
                <Sun className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-black text-white text-sm">SOLARTEC — PANELES SOLARES &amp; AHORRO CFE</h4>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[9px] font-extrabold uppercase">
                  Ahorro del 95%
                </span>
              </div>
              <p className="text-[11px] text-amber-200/90 font-medium">Trámite CFE Incluido • Paneles Monocristalinos Tier-1</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/10 relative z-10">
          <div>
            <span className="text-[10px] text-slate-400 block">Tu Recibo Actual:</span>
            <span className="text-sm font-black text-rose-400">${solarBill.toLocaleString()} MXN</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block">Tu Recibo con Solartec:</span>
            <span className="text-sm font-black text-emerald-400">${newBill} MXN / bim</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
          <div>
            <div className="text-[10px] text-slate-400">Ahorro Anual Estimado:</div>
            <div className="text-base font-black text-amber-300">${savingsAnnual.toLocaleString()} MXN</div>
          </div>
          <button
            type="button"
            onClick={() => sendWhatsApp(`¡Hola Solartec! Quiero eliminar la tarifa DAC de mi recibo CFE ($${solarBill} bimestral) con ${panels} paneles.`)}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:opacity-95 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <Sun className="w-4 h-4 fill-slate-950" />
            <span>Cotizar Proyecto Solar por WhatsApp</span>
          </button>
        </div>
      </div>
    );
  }

  /* ========================================================
     19. CINEVAULT V3 — STREAMING SOCIAL & MEDIA (media)
     ======================================================== */
  if (slug === 'cinevault-v3') {
    const isBoceto = visualMode === 'boceto';

    if (isBoceto) {
      return (
        <div className="p-3 sm:p-5 rounded-2xl bg-[#09111e] text-slate-100 border-2 border-dashed border-sky-400/50 font-mono text-xs sm:text-sm space-y-4 shadow-2xl relative overflow-hidden bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex items-center justify-between pb-2.5 border-b border-sky-400/30 text-[10px] text-sky-400">
            <span className="font-bold">[BOCETO ARQUITECTÓNICO WIREFRAME • VIDEO STREAMING PLAYER]</span>
            <span className="text-slate-400">SPEC: HLS_4K_HDR_V3</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-sky-400/20">
            <div className="flex items-center gap-2">
              <Tv className="w-4 h-4 text-purple-400" />
              <div>
                <h4 className="font-bold text-sky-300 text-xs sm:text-sm">[MODULE: REPRODUCTOR_SOCIAL_MEDIA]</h4>
                <p className="text-[10px] text-slate-400 font-mono">TÍTULO: {cineMovie} • AUDIO: DOLBY_5_1</p>
              </div>
            </div>
            <span className="text-xs font-mono text-purple-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-400/30">4K HDR</span>
          </div>

          <div className="h-28 rounded-xl bg-sky-950/60 border border-dashed border-sky-400/30 flex flex-col items-center justify-center relative font-mono">
            <div className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-400/60 flex items-center justify-center text-sky-300">
              <Play className="w-5 h-5 ml-0.5" />
            </div>
            <span className="text-[10px] text-slate-400 mt-2">[REPRODUCTOR_CANVAS_4K • STREAM_ONLINE]</span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-sky-400/30">
            <div className="text-[10px] text-slate-400 font-mono">SALA VIRTUAL: 14 ESPECTADORES EN VIVO</div>
            <button
              type="button"
              onClick={() => sendWhatsApp(`¡Hola CineVault! Vi la plataforma de streaming en tu Portafolio y deseo cotizar una plataforma similar para mis producciones audiovisuales.`)}
              className="py-2 px-3 rounded bg-purple-500 hover:bg-purple-400 text-white font-mono font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <Tv className="w-4 h-4" />
              <span>[ENTRAR_A_LA_SALA_VIP]</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-3 sm:p-5 rounded-2xl bg-[#0c141e]/95 text-slate-100 border border-purple-400/40 text-xs sm:text-sm space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(168,85,247,0.25)] backdrop-blur-2xl ring-1 ring-white/10 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/15 rounded-full blur-[50px] pointer-events-none" />
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-500 p-[2px]">
              <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-purple-400 font-bold">
                <Tv className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-black text-white text-sm">CINEVAULT V3 — STREAMING SOCIAL &amp; MEDIA</h4>
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 text-[9px] font-extrabold uppercase">
                  Watch Party &amp; 4K
                </span>
              </div>
              <p className="text-[11px] text-purple-200/90 font-medium">Salas de Estreno Privadas • Chat en Vivo Sincronizado</p>
            </div>
          </div>
        </div>

        <div className="h-32 rounded-xl bg-black/60 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer z-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/40 group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 ml-0.5" />
          </div>
          <span className="text-xs font-bold text-white mt-2">Reproducir &quot;{cineMovie}&quot;</span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
          <div className="text-[11px] text-slate-400">
            Resolución: <strong className="text-purple-300">4K Ultra HDR</strong> • Audio: <strong className="text-cyan-300">Dolby Atmos</strong>
          </div>
          <button
            type="button"
            onClick={() => sendWhatsApp(`¡Hola CineVault! Quiero desarrollar una plataforma de streaming y cineclub privado con el Paquete Escalable.`)}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-95 text-white font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Cotizar Plataforma Streaming</span>
          </button>
        </div>
      </div>
    );
  }

  // Fallback genérico
  return (
    <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 text-center text-slate-300 text-xs">
      <Sparkles className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
      <span>Boceto interactivo cargado con éxito.</span>
    </div>
  );
}
