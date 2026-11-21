'use client';

import React, { useState } from 'react';
import {
  Zap,
  Sparkles,
  Bot,
  MessageCircle,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';

const GOALS = [
  'Más clientes por WhatsApp',
  'Aparecer en Google e IA',
  'App / Sistema a la medida',
] as const;

export default function BentoValueSection() {
  const [selectedGoal, setSelectedGoal] = useState<string>(GOALS[0]);

  const whatsappHref = `https://wa.me/526222259974?text=${encodeURIComponent(
    `Hola Hector, vi tu portafolio Liquid Glass y quiero lograr esto para mi negocio: "${selectedGoal}". ¿Podemos ver una demo?`
  )}`;

  return (
    <section
      id="bento-vanguardia"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="glass-pill mb-3 text-sky-600 dark:text-sky-300 border-sky-400/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Arquitectura Bento · Vanguardia Calidad-Precio</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Diseñado para{' '}
          <span className="text-gradient-liquid">convertir en 3 segundos</span>
        </h2>
      </div>

      {/* Bento Grid Asimétrico (4 columnas en desktop, apilado limpio en móvil) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Bloque 1 (2x2): Propuesta Principal */}
        <div className="md:col-span-2 md:row-span-2 glass-panel rounded-3xl border border-slate-200/80 dark:border-white/15 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-sky-400/50 transition">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-600 dark:text-sky-300">
              <Zap className="w-3.5 h-3.5" />
              Guaymas &amp; San Carlos
            </span>
            <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Interfaces Liquid Glass rápidas, nítidas y sin fricción.
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Dejamos atrás las plantillas lentas y formularios interminables.
              Cada bloque guía al visitante directo a cotizar o agendar desde su
              celular.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200/70 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>Carga sub-segundo (INP optimizado)</span>
            <span className="font-semibold text-sky-600 dark:text-sky-400">
              Mobile-First Real
            </span>
          </div>
        </div>

        {/* Bloque 2 (2x1): Micro-flujo Progresivo en 2 clics */}
        <div className="md:col-span-2 glass-panel rounded-3xl border border-slate-200/80 dark:border-white/15 p-6 flex flex-col justify-between hover:border-sky-400/50 transition">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              1. Elige tu objetivo principal
            </p>
            <div className="flex flex-wrap gap-2">
              {GOALS.map((goal) => {
                const active = selectedGoal === goal;
                return (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => setSelectedGoal(goal)}
                    className={`px-3.5 py-2 rounded-full text-xs sm:text-sm border transition cursor-pointer ${
                      active
                        ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-950 dark:border-white font-semibold shadow-sm'
                        : 'bg-transparent text-slate-700 dark:text-slate-300 border-slate-300 dark:border-white/15 hover:border-sky-400/60'
                    }`}
                  >
                    {goal}
                  </button>
                );
              })}
            </div>
          </div>
          <p className="mt-4 text-[11px] text-slate-500 dark:text-slate-400">
            Sin formularios largos: selecciona y abre tu cotización en 1 toque.
          </p>
        </div>

        {/* Bloque 3 (1x1): GEO / SXO para Motores de IA */}
        <div className="glass-panel rounded-3xl border border-slate-200/80 dark:border-white/15 p-6 flex flex-col justify-between hover:border-sky-400/50 transition">
          <div className="w-9 h-9 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-500 dark:text-indigo-300">
            <Bot className="w-4 h-4" />
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Listo para Google e IA (GEO)
            </h4>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              HTML semántico y datos estructurados para que te recomienden en
              búsquedas.
            </p>
          </div>
        </div>

        {/* Bloque 4 (1x1): Cierre Directo a WhatsApp */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl border border-emerald-500/40 bg-emerald-500/10 dark:bg-emerald-500/15 backdrop-blur-xl p-6 flex flex-col justify-between hover:bg-emerald-500/20 hover:border-emerald-400/70 transition group"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              <MessageCircle className="w-3.5 h-3.5" />
              2. Cotizar ahora
            </span>
            <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
          </div>
          <div className="mt-4">
            <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
              Enviar &ldquo;{selectedGoal}&rdquo;
            </p>
            <p className="mt-1 text-[11px] text-emerald-700/80 dark:text-emerald-300/80 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              Demo sin compromiso
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
