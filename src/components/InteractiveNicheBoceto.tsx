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

  // Fallback genérico
  return (
    <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 text-center text-slate-300 text-xs">
      <Sparkles className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
      <span>Boceto interactivo cargado con éxito.</span>
    </div>
  );
}
