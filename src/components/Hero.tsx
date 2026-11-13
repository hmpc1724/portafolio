'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, Sparkles, Layers, Zap, ShieldCheck, FileDown } from 'lucide-react';
import { PROFILE_INFO } from '@/data/projects';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center z-10"
    >
      {/* Profile Avatar with Liquid Glass Aura */}
      <div className="relative mb-5 group">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-rose-400 opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse-subtle" />
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[2.5px] bg-gradient-to-tr from-sky-400 via-indigo-500 to-rose-400">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white/20">
            <Image
              src="/images/avatar.jpg"
              alt={PROFILE_INFO.name}
              fill
              sizes="(max-width: 640px) 96px, 112px"
              priority
              className="object-cover object-top hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <span
          className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-sm"
          title="Disponible para proyectos"
        />
      </div>

      {/* Availability Status Badge */}
      <div className="glass-pill mb-6 text-slate-800 dark:text-slate-200 border-sky-400/30 shadow-sm animate-pulse-subtle">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
        <span className="text-xs font-semibold tracking-wide uppercase text-sky-600 dark:text-sky-300">
          {PROFILE_INFO.status}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl leading-[1.12]">
        Experiencias web en{' '}
        <span className="text-gradient-liquid">cristal líquido</span> y código de alto impacto.
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
        Soy <strong className="font-semibold text-slate-900 dark:text-white">{PROFILE_INFO.name}</strong>,{' '}
        {PROFILE_INFO.role}. Creo interfaces con microinteracciones de vidrio esmerilado, gradientes animados y arquitectura full stack de ultra rendimiento.
      </p>

      {/* Call to Actions */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
        <a
          href="#proyectos"
          id="hero-cta-projects"
          className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white font-semibold text-sm sm:text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          <Layers className="w-4 h-4 text-sky-200 group-hover:rotate-6 transition-transform" />
          Ver 10 Proyectos Demo
          <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </a>

        <a
          href="#paquetes"
          id="hero-cta-contact"
          className="w-full sm:w-auto px-7 py-3.5 rounded-2xl glass-panel text-slate-800 dark:text-white font-semibold text-sm sm:text-base hover:bg-slate-200/50 dark:hover:bg-white/10 hover:border-sky-400/40 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          Paquetes & Boceto en Stitch
        </a>

        <a
          href={PROFILE_INFO.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl glass-panel text-slate-700 dark:text-slate-200 font-semibold text-sm sm:text-base hover:border-emerald-400/50 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <FileDown className="w-4 h-4 text-emerald-500" />
          Descargar CV (PDF)
        </a>
      </div>

      {/* Glass Metric Highlights Grid */}
      <div className="mt-14 sm:mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="glass-panel p-4 sm:p-5 flex flex-col items-center text-center">
          <div className="w-9 h-9 rounded-xl bg-sky-500/10 dark:bg-sky-400/15 flex items-center justify-center mb-2 text-sky-500 dark:text-sky-400">
            <Layers className="w-5 h-5" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            114
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
            Proyectos realizados
          </span>
        </div>

        <div className="glass-panel p-4 sm:p-5 flex flex-col items-center text-center">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/15 flex items-center justify-center mb-2 text-indigo-500 dark:text-indigo-400">
            <Zap className="w-5 h-5" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            99/100
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
            Velocidad Lighthouse
          </span>
        </div>

        <div className="glass-panel p-4 sm:p-5 flex flex-col items-center text-center">
          <div className="w-9 h-9 rounded-xl bg-purple-500/10 dark:bg-purple-400/15 flex items-center justify-center mb-2 text-purple-500 dark:text-purple-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            60 FPS
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
            Fluidez cristal líquido
          </span>
        </div>

        <div className="glass-panel p-4 sm:p-5 flex flex-col items-center text-center">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 dark:bg-emerald-400/15 flex items-center justify-center mb-2 text-emerald-500 dark:text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            100%
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
            Next.js & Type-Safe
          </span>
        </div>
      </div>
    </section>
  );
}
