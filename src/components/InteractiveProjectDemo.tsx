'use client';

import React, { useState } from 'react';
import {
  ShoppingBag,
  Plus,
  Check,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Sparkles,
  Sliders,
  RefreshCw,
  Clock,
  Play,
  KeyRound,
  Thermometer,
  Sun,
  Flame,
  Stethoscope,
  Building2,
  PhoneCall,
  Tv,
} from 'lucide-react';
import { Project } from '@/types';

interface InteractiveProjectDemoProps {
  project: Project;
}

export default function InteractiveProjectDemo({ project }: InteractiveProjectDemoProps) {
  // E-commerce Interactive State
  const [cartCount, setCartCount] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>('Cristal Cian');
  const [checkoutDone, setCheckoutDone] = useState<boolean>(false);

  // SaaS Interactive State
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | '1y'>('30d');
  const [simulatedMrr, setSimulatedMrr] = useState<number>(148500);

  // Gastronomía / Restaurantes State
  const [selectedGuiso, setSelectedGuiso] = useState<string>('Carne con Chile en Cazuela');
  const [spicinessLevel, setSpicinessLevel] = useState<'Suave' | 'Medio' | 'Bravo'>('Medio');
  const [sideDish, setSideDish] = useState<string>('Frijoles Puercos + Arroz Rojo');
  const [foodOrderSent, setFoodOrderSent] = useState<boolean>(false);

  // Salud / Dental State
  const [dentalSpecialty, setDentalSpecialty] = useState<string>('Limpieza & Profilaxis');
  const [appointmentDay, setAppointmentDay] = useState<string>('Mañana 11:00 AM');
  const [appointmentBooked, setAppointmentBooked] = useState<boolean>(false);

  // Construcción / ObraMaestra State
  const [wallLength, setWallLength] = useState<number>(10);
  const [wallHeight, setWallHeight] = useState<number>(2.5);

  // Turismo / Hotelería State
  const [hvacTemp, setHvacTemp] = useState<number>(22);
  const [doorUnlocked, setDoorUnlocked] = useState<boolean>(false);

  // Sustentabilidad / Energía Solar State
  const [cfeBill, setCfeBill] = useState<number>(4500);

  // Media / Streaming State
  const [inWatchlist, setInWatchlist] = useState<boolean>(false);
  const [trailerPlaying, setTrailerPlaying] = useState<boolean>(false);

  // Servicios / Limpieza State
  const [sqMeters, setSqMeters] = useState<number>(120);
  const [includeDisinfection, setIncludeDisinfection] = useState<boolean>(true);

  // Portafolio / Shader Interactive State
  const [glowIntensity, setGlowIntensity] = useState<number>(75);
  const [activeMood, setActiveMood] = useState<'Neón Boreal' | 'Cristal Ámbar' | 'Océano Profundo'>('Neón Boreal');

  // Cálculos automáticos
  const totalBlocks = Math.round(wallLength * wallHeight * 12.5);
  const cementBags = Math.round((wallLength * wallHeight * 0.45));
  const estimatedSavings = Math.round(cfeBill * 0.92);
  const cleaningPrice = Math.round(sqMeters * 12 + (includeDisinfection ? 450 : 0));

  return (
    <div id="live-demo-simulator" className="glass-panel-elevated p-6 sm:p-8 border border-sky-400/30">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <span className="ml-2 px-3 py-1 rounded-lg bg-slate-900/80 text-sky-300 font-mono text-xs border border-white/10">
            simulador://{project.slug}.liquidglass.app
          </span>
        </div>
        <span className="glass-pill text-emerald-600 dark:text-emerald-300 border-emerald-400/30 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          Demo Interactivo en Vivo ({project.nicheLabel || project.categoryLabel})
        </span>
      </div>

      {/* 🍲 1. NICHO GASTRONOMÍA & RESTAURANTES */}
      {project.category === 'gastronomia' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              🍲 Menú del Día & Comanda Express • La Olla de Barro
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Cazuela Caliente + Tortillas Recién Hechas
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Personaliza el menú del comensal y prueba cómo llega el pedido listo a cocina:
            </p>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500">Selecciona el Guisado Principal:</label>
              <div className="flex flex-wrap gap-2">
                {['Carne con Chile', 'Costillita en Salsa Verde', 'Deshebrada a la Mexicana', 'Chicharrón Prensado'].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => { setSelectedGuiso(g); setFoodOrderSent(false); }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                      selectedGuiso === g
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
                        : 'glass-panel text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <div>
                <label className="text-xs font-semibold text-slate-500 block mb-1">Nivel de Picante:</label>
                <div className="flex gap-1.5">
                  {(['Suave', 'Medio', 'Bravo'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSpicinessLevel(lvl)}
                      className={`px-2.5 py-1 text-xs rounded-lg font-bold ${
                        spicinessLevel === lvl
                          ? 'bg-rose-500 text-white'
                          : 'glass-panel text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <Flame className="w-3 h-3 inline mr-1 text-amber-300" />
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 glass-panel p-5 space-y-3">
            <div className="text-xs text-slate-500 dark:text-slate-400">Resumen de Comanda Digital</div>
            <div className="p-3 rounded-xl bg-slate-950/50 border border-white/10 text-xs space-y-1 font-mono">
              <div className="text-amber-400 font-bold">{selectedGuiso}</div>
              <div className="text-slate-300">Picante: {spicinessLevel} • Acomp.: {sideDish}</div>
              <div className="text-emerald-400 font-bold text-sm pt-1">Total: $129 MXN</div>
            </div>
            <button
              type="button"
              onClick={() => setFoodOrderSent(true)}
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              {foodOrderSent ? '¡Comanda Enviada a Cocina por WhatsApp!' : 'Simular Pedido a Cocina'}
            </button>
          </div>
        </div>
      )}

      {/* 🏥 2. NICHO SALUD & DENTAL */}
      {project.category === 'salud' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1">
              <Stethoscope className="w-3.5 h-3.5" /> Agenda Médica & Citas Online
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Citas sin Llamadas Telefónicas 24/7
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              El paciente elige el tratamiento y el horario que mejor le conviene:
            </p>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500">Tratamiento o Especialidad:</label>
              <div className="flex flex-wrap gap-2">
                {['Limpieza & Profilaxis', 'Valoración de Ortodoncia', 'Blanqueamiento Láser', 'Urgencia Dental'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => { setDentalSpecialty(s); setAppointmentBooked(false); }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                      dentalSpecialty === s
                        ? 'bg-teal-500 text-slate-950 font-bold border-teal-400 shadow-md'
                        : 'glass-panel text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2 pt-1">
              {['Hoy 4:00 PM', 'Mañana 11:00 AM', 'Viernes 5:30 PM'].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setAppointmentDay(d)}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium ${
                    appointmentDay === d ? 'bg-sky-500 text-white font-bold' : 'glass-panel'
                  }`}
                >
                  <Clock className="w-3 h-3 inline mr-1" />
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 glass-panel p-5 space-y-3">
            <div className="text-xs text-slate-500 dark:text-slate-400">Confirmación Inmediata</div>
            <div className="p-3 rounded-xl bg-slate-950/50 border border-teal-500/30 text-xs space-y-1">
              <div className="text-teal-300 font-bold">{dentalSpecialty}</div>
              <div className="text-slate-300">Horario reservado: {appointmentDay}</div>
              <div className="text-xs text-emerald-400">✓ Recordatorio SMS / WhatsApp activo</div>
            </div>
            <button
              type="button"
              onClick={() => setAppointmentBooked(true)}
              className="w-full py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <Calendar className="w-4 h-4" />
              {appointmentBooked ? '¡Cita Médica Agendada y Notificada!' : 'Simular Agendamiento de Cita'}
            </button>
          </div>
        </div>
      )}

      {/* 🏗️ 3. NICHO CONSTRUCCIÓN & INGENIERÍA */}
      {project.category === 'construccion' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5" /> Calculadora de Materiales ACI 318
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Cálculo Instantáneo de Muros & Bardas
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Modifica las dimensiones del muro para ver el cálculo exacto de materiales en tiempo real:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-500 block mb-1">Longitud: {wallLength} metros</label>
                <input
                  type="range"
                  min={2}
                  max={40}
                  value={wallLength}
                  onChange={(e) => setWallLength(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 block mb-1">Altura: {wallHeight} metros</label>
                <input
                  type="range"
                  min={1.5}
                  max={4}
                  step={0.1}
                  value={wallHeight}
                  onChange={(e) => setWallHeight(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
            </div>
            <div className="text-xs text-slate-400">
              Superficie calculada: <span className="font-bold text-white">{(wallLength * wallHeight).toFixed(1)} m²</span> (deducción automática de juntas de mortero).
            </div>
          </div>

          <div className="md:col-span-5 glass-panel p-5 space-y-3">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">Materiales Cuantificados</div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 rounded-lg bg-slate-900/60 border border-white/5">
                <span className="text-slate-300">🧱 Bloques de Concreto:</span>
                <span className="font-bold text-amber-400">{totalBlocks} piezas</span>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-900/60 border border-white/5">
                <span className="text-slate-300">🏗️ Cemento (bultos 50kg):</span>
                <span className="font-bold text-sky-400">{cementBags} bultos</span>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-900/60 border border-white/5">
                <span className="text-slate-300">⏳ Arena para mortero:</span>
                <span className="font-bold text-emerald-400">{(wallLength * wallHeight * 0.035).toFixed(2)} m³</span>
              </div>
            </div>
            <div className="text-[11px] text-emerald-400 font-semibold text-center pt-1">
              ✓ Cero desperdicio en obra para contratistas
            </div>
          </div>
        </div>
      )}

      {/* 🏖️ 4. NICHO TURISMO & HOTELERÍA SAN CARLOS */}
      {project.category === 'turismo' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1">
              <KeyRound className="w-3.5 h-3.5" /> Suite Domótica • Huésped San Carlos
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Llave Digital & Climatización Inteligente
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Prueba la experiencia de tu huésped antes de llegar a su condominio o suite:
            </p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setDoorUnlocked((v) => !v)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  doorUnlocked
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                }`}
              >
                <KeyRound className="w-4 h-4" />
                {doorUnlocked ? 'Puerta Destrabada (NFC Activo)' : 'Abrir Puerta con Llave Digital'}
              </button>
            </div>
            <div className="pt-2">
              <label className="text-xs text-slate-500 block mb-1 flex items-center gap-1">
                <Thermometer className="w-3.5 h-3.5 text-sky-400" />
                Termostato de Habitación: <span className="font-bold text-sky-400">{hvacTemp}°C</span>
              </label>
              <input
                type="range"
                min={18}
                max={26}
                value={hvacTemp}
                onChange={(e) => setHvacTemp(Number(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>
          </div>

          <div className="md:col-span-5 glass-panel p-5 space-y-3">
            <div className="text-xs text-slate-500 dark:text-slate-400">Estado de Suite #204</div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-indigo-500/30 text-xs space-y-2">
              <div className="flex justify-between">
                <span>Cerradura Inteligente:</span>
                <span className={`font-bold ${doorUnlocked ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {doorUnlocked ? 'Abierta' : 'Bloqueada'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Ambiente HVAC:</span>
                <span className="font-bold text-sky-400">{hvacTemp}°C (Confort Óptimo)</span>
              </div>
              <div className="flex justify-between">
                <span>Room Service:</span>
                <span className="font-bold text-emerald-400">Activo (Menú Móvil)</span>
              </div>
            </div>
            <div className="text-[11px] text-indigo-300 font-semibold text-center">
              ✓ Experiencia 5 Estrellas para el Turismo Internacional
            </div>
          </div>
        </div>
      )}

      {/* ☀️ 5. NICHO SUSTENTABILIDAD & PANELES SOLARES */}
      {project.category === 'sustentabilidad' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
              <Sun className="w-3.5 h-3.5" /> Simulador Fotovoltaico Sonora
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Calcula el Ahorro en tu Recibo CFE
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Desliza el monto de tu recibo bimestral de luz para estimar el ahorro garantizado:
            </p>
            <div>
              <label className="text-xs text-slate-500 block mb-1">
                Pago actual de luz CFE: <span className="font-bold text-white font-mono">${cfeBill.toLocaleString()} MXN</span>
              </label>
              <input
                type="range"
                min={1500}
                max={25000}
                step={500}
                value={cfeBill}
                onChange={(e) => setCfeBill(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>
          </div>

          <div className="md:col-span-5 glass-panel p-5 space-y-3">
            <div className="text-xs text-slate-500 dark:text-slate-400">Proyección de Ahorro con Paneles</div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-amber-500/30 text-xs space-y-1">
              <div className="text-slate-400">Nuevo pago estimado con CFE:</div>
              <div className="text-2xl font-black font-mono text-emerald-400">
                ${Math.round(cfeBill - estimatedSavings)} MXN <span className="text-xs font-normal text-slate-400">/ bimestre</span>
              </div>
              <div className="text-amber-300 font-semibold pt-1">
                Ahorro anual: ${(estimatedSavings * 6).toLocaleString()} MXN
              </div>
            </div>
            <div className="text-[11px] text-amber-200 text-center font-semibold">
              ✓ Retorno de Inversión (ROI) en 2.4 años
            </div>
          </div>
        </div>
      )}

      {/* 🎬 6. NICHO MEDIA & STREAMING */}
      {project.category === 'media' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1">
              <Tv className="w-3.5 h-3.5" /> Experiencia CineVault v3
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Streaming & Comunidad de Crítica de Cine
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Prueba la interacción con el trailer y la sincronización con tu Watchlist personal:
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setTrailerPlaying((v) => !v)}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg"
              >
                <Play className="w-4 h-4 fill-white" />
                {trailerPlaying ? 'Detener Reproducción' : 'Ver Trailer Cinemático en HD'}
              </button>
              <button
                type="button"
                onClick={() => setInWatchlist((v) => !v)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                  inWatchlist
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                    : 'glass-panel text-slate-700 dark:text-slate-300'
                }`}
              >
                {inWatchlist ? '✓ En tu Watchlist' : '+ Añadir a Watchlist'}
              </button>
            </div>
            {trailerPlaying && (
              <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs text-rose-200 animate-pulse">
                ▶ Reproduciendo buffer cinematográfico a 60 FPS sin anuncios...
              </div>
            )}
          </div>

          <div className="md:col-span-5 glass-panel p-5 space-y-3">
            <div className="text-xs text-slate-500 dark:text-slate-400">Métricas de la Plataforma</div>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-300">Calificación Comunidad:</span>
                <span className="font-bold text-amber-400">⭐ 4.9 / 5.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Latencia de reproducción:</span>
                <span className="font-bold text-emerald-400">&lt; 120ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Diseño UI:</span>
                <span className="font-bold text-sky-400">Glass Dark Cinemático</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🏢 7. NICHO SAAS & INTELIGENCIA ARTIFICIAL */}
      {(project.category === 'saas' || project.category === 'saas-ia' || project.category === 'crud') && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-panel p-4">
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Prospectos Identificados</span>
                <BarChart3 className="w-4 h-4 text-sky-400" />
              </div>
              <div className="text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">
                {timeframe === '7d' ? '42' : timeframe === '30d' ? '184' : '2,150'}
              </div>
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" /> +18% este periodo
              </div>
            </div>

            <div className="glass-panel p-4">
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Auditorías con IA Gemini</span>
                <Sparkles className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">
                98.4%
              </div>
              <div className="text-[11px] text-sky-600 dark:text-sky-400 font-semibold mt-1">
                Latencia: 0.4s por negocio
              </div>
            </div>

            <div className="glass-panel p-4">
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Valor de Pipeline Simulado</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">
                ${(simulatedMrr * (timeframe === '7d' ? 0.3 : timeframe === '30d' ? 1 : 12)).toLocaleString()} MXN
              </div>
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                Anticipos asegurados 50%
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="text-xs text-slate-600 dark:text-slate-400">
              Alternar periodo de prospección:
            </div>
            <div className="flex gap-2">
              {(['7d', '30d', '1y'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTimeframe(t)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    timeframe === t
                      ? 'bg-sky-500 text-white'
                      : 'glass-panel text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {t === '7d' ? '7 Días' : t === '30d' ? '30 Días' : '1 Año'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 🧹 8. NICHO SERVICIOS & LIMPIEZA */}
      {(project.category === 'servicio' || project.category === 'servicios') && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-500">
              Cotizador Dinámico • LimpiaPro
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Cálculo Inmediato por Superficie (m²)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              El cliente desliza el metraje y selecciona extras para obtener su cotización al instante:
            </p>
            <div>
              <label className="text-xs text-slate-500 block mb-1">
                Superficie a limpiar: <span className="font-bold text-white">{sqMeters} m²</span>
              </label>
              <input
                type="range"
                min={40}
                max={400}
                step={10}
                value={sqMeters}
                onChange={(e) => setSqMeters(Number(e.target.value))}
                className="w-full accent-sky-500"
              />
            </div>
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={includeDisinfection}
                onChange={(e) => setIncludeDisinfection(e.target.checked)}
                className="accent-sky-500 rounded"
              />
              Incluir Desinfección UV Profunda (+ $450 MXN)
            </label>
          </div>

          <div className="md:col-span-5 glass-panel p-5 space-y-3">
            <div className="text-xs text-slate-500 dark:text-slate-400">Presupuesto Sugerido</div>
            <div className="text-3xl font-black font-mono text-slate-900 dark:text-white">
              ${cleaningPrice.toLocaleString()} MXN
            </div>
            <div className="text-xs text-slate-400">
              Estimado de tiempo: <span className="font-bold text-white">{Math.round(sqMeters / 30)} horas de labor</span>
            </div>
            <a
              href={`https://wa.me/526222259974?text=Hola%20Miguel,%20cotice%20un%20servicio%20de%20limpieza%20de%20${sqMeters}m2%20por%20$${cleaningPrice}%20MXN`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              Agendar Turno por WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* 🛍️ 9. NICHO E-COMMERCE & RETAIL */}
      {project.category === 'ecommerce' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-500">
              {project.title} • Experiencia de Compra Instantánea
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Edición Limitada — Colección Cristal 2026
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Selecciona acabado y prueba el flujo de carrito reactivo en un solo clic:
            </p>
            <div className="flex flex-wrap gap-2">
              {['Cristal Cian', 'Obsidiana Mate', 'Aurora Violeta'].map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                    selectedColor === color
                      ? 'bg-sky-500 text-white border-sky-400 shadow-md'
                      : 'glass-panel text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setCartCount((c) => c + 1);
                  setCheckoutDone(false);
                }}
                className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all"
              >
                <Plus className="w-4 h-4" />
                Añadir al Carrito ({cartCount})
              </button>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Variante activa: <strong className="text-slate-900 dark:text-white">{selectedColor}</strong>
              </span>
            </div>
          </div>

          <div className="md:col-span-5 glass-panel p-5 space-y-3">
            <div className="text-xs text-slate-500 dark:text-slate-400">Carrito Deslizable en Vivo</div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Total Carrito:</span>
              <span className="text-xl font-bold font-mono text-sky-500">${cartCount * 185} USD</span>
            </div>
            <button
              type="button"
              onClick={() => setCheckoutDone(true)}
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              {checkoutDone ? '¡Pago Instantáneo Aprobado!' : 'Simular Checkout Rápido'}
            </button>
          </div>
        </div>
      )}

      {/* 💎 10. NICHO MARCA PERSONAL & CREATIVOS */}
      {project.category === 'portafolio' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                Laboratorio de Atmósfera Cristal Líquido ({activeMood})
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {(['Neón Boreal', 'Cristal Ámbar', 'Océano Profundo'] as const).map((mood) => (
                <button
                  key={mood}
                  type="button"
                  onClick={() => setActiveMood(mood)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeMood === mood
                      ? 'bg-purple-600 text-white'
                      : 'glass-panel text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500 dark:text-slate-400 shrink-0">
              Refracción Especular: {glowIntensity}%
            </span>
            <input
              type="range"
              min={20}
              max={100}
              value={glowIntensity}
              onChange={(e) => setGlowIntensity(Number(e.target.value))}
              className="w-full accent-sky-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}
