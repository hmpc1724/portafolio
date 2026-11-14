'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowRight, Layers, Sparkles, Filter, MessageCircle, CheckCircle2 } from 'lucide-react';
import { PROJECTS, CATEGORIES } from '@/data/projects';

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [portfolioVisualMode, setPortfolioVisualMode] = useState<'boceto' | 'liquid-glass'>('boceto');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PROJECTS.length };
    PROJECTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="proyectos" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="glass-pill mb-4 text-sky-600 dark:text-sky-300 border-sky-400/30">
          <Layers className="w-3.5 h-3.5" />
          <span>Galería de Soluciones Comerciales por Nicho</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Proyectos & Demos <span className="text-gradient-liquid">por Nicho de Mercado</span>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          Explora aplicaciones web y sistemas interactivos diseñados específicamente para cada sector comercial en Guaymas, San Carlos y Sonora, con estética Liquid Glass y arquitectura de alto rendimiento.
        </p>
      </div>

      {/* Filter Category Pills - Horizontal Scroll on Mobile */}
      <div className="overflow-x-auto pb-4 mb-10 scrollbar-none">
        <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-2.5 min-w-max px-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = categoryCounts[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                id={`filter-btn-${cat.id}`}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 border whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white border-transparent shadow-lg shadow-sky-500/25 scale-105'
                    : 'glass-panel text-slate-700 dark:text-slate-300 border-slate-300/50 dark:border-white/10 hover:border-sky-400/40 hover:bg-slate-200/50 dark:hover:bg-white/10'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selector de Modo de Visualización del Portafolio: Bocetos (17) vs Liquid Glass (17) */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-950/95 to-slate-900/90 border border-sky-400/30 backdrop-blur-2xl shadow-xl mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-400/40 flex items-center justify-center text-sky-400 font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-black text-white flex items-center gap-2">
              Transformación de Soluciones:
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                portfolioVisualMode === 'boceto'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50'
                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 animate-pulse'
              }`}>
                {portfolioVisualMode === 'boceto' ? '17 BOCETOS TÉCNICOS' : '17 DEMOS EN LIQUID GLASS'}
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              {portfolioVisualMode === 'boceto'
                ? 'Visualizando wireframes estructurales y diagramas iniciales de Google Stitch.'
                : 'Visualizando aplicaciones completas en alta fidelidad con efectos de cristal y diseño sonorense.'}
            </p>
          </div>
        </div>

        <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-white/10 shadow-inner">
          <button
            type="button"
            onClick={() => setPortfolioVisualMode('boceto')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              portfolioVisualMode === 'boceto'
                ? 'bg-sky-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>✏️ Ver Bocetos (17)</span>
          </button>
          <button
            type="button"
            onClick={() => setPortfolioVisualMode('liquid-glass')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              portfolioVisualMode === 'liquid-glass'
                ? 'bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 text-slate-950 font-black shadow-lg shadow-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>💎 Ver Liquid Glass (17)</span>
          </button>
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredProjects.length === 0 ? (
        <div className="glass-panel p-12 text-center max-w-md mx-auto my-8">
          <Filter className="w-10 h-10 mx-auto text-slate-400 mb-3" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            No hay proyectos en este nicho
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Por favor, selecciona otro nicho o regresa a &quot;Todos los Nichos&quot;.
          </p>
          <button
            onClick={() => setActiveCategory('all')}
            className="mt-4 px-4 py-2 rounded-xl bg-sky-500 text-white text-xs font-semibold"
          >
            Ver todos los nichos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`group rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                portfolioVisualMode === 'boceto'
                  ? 'bg-[#080f1d] border-2 border-dashed border-sky-400/40 shadow-2xl relative bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]'
                  : 'glass-panel-interactive border border-slate-200/70 dark:border-white/10 hover:border-sky-400/50'
              }`}
            >
              {/* Entire Card Clickable Link to Detail Page */}
              <Link
                href={`/proyecto/${project.slug}`}
                className="block focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-2xl"
                aria-label={`Ver detalles de ${project.title}`}
              >
                {/* Image Showcase Container with Glass Gradient Overlay */}
                <div
                  className={`relative w-full aspect-[16/10] overflow-hidden ${
                    portfolioVisualMode === 'boceto'
                      ? 'bg-[#060e1b] border-b border-dashed border-sky-400/30'
                      : 'bg-slate-950/40'
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    className={`object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out ${
                      portfolioVisualMode === 'boceto' ? 'filter contrast-125 opacity-70 mix-blend-luminosity' : ''
                    }`}
                    priority={project.featured}
                  />

                  {/* Liquid Tint Gradient Overlay */}
                  <div
                    className={`absolute inset-0 ${
                      portfolioVisualMode === 'boceto'
                        ? 'bg-gradient-to-t from-[#080f1d] via-[#080f1d]/40 to-transparent opacity-90'
                        : 'bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-70 transition-opacity'
                    }`}
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none gap-2">
                    <span
                      className={`text-[11px] font-semibold backdrop-blur-md px-2.5 py-1 rounded-full ${
                        portfolioVisualMode === 'boceto'
                          ? 'bg-sky-950/90 text-sky-300 border border-sky-400/40 font-mono'
                          : 'glass-pill bg-slate-950/70 dark:bg-slate-900/80 text-white border-white/20'
                      }`}
                    >
                      {portfolioVisualMode === 'boceto' ? `📐 BOCETO: ${project.categoryLabel}` : project.categoryLabel}
                    </span>
                    {project.packagePrice && (
                      <span className="glass-pill bg-gradient-to-r from-emerald-600/90 to-teal-600/90 text-white border-emerald-400/30 text-[11px] font-bold shadow-sm">
                        {project.suggestedPackage ? `${project.suggestedPackage}: ` : ''}
                        {project.packagePrice}
                      </span>
                    )}
                  </div>

                  {/* Bottom Subtitle on Image */}
                  {project.nicheLabel && (
                    <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-sky-300 bg-slate-950/70 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10 font-mono">
                        {portfolioVisualMode === 'boceto' ? `[NICHO: ${project.nicheLabel}]` : `🎯 ${project.nicheLabel}`}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className={`text-xl sm:text-2xl font-bold group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors ${
                        portfolioVisualMode === 'boceto' ? 'text-sky-200 font-mono' : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] px-2.5 py-1 rounded-md font-medium ${
                          portfolioVisualMode === 'boceto'
                            ? 'bg-sky-950/60 border border-sky-400/30 text-sky-300 font-mono'
                            : 'bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-[10px] px-2 py-1 rounded-md bg-slate-200/40 dark:bg-white/5 text-slate-500 dark:text-slate-400">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </Link>

              {/* Bottom Quick Actions Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-200/40 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
                <Link
                  href={`/proyecto/${project.slug}#live-demo-simulator`}
                  className={`inline-flex items-center gap-1.5 font-bold transition-all px-3 py-1.5 rounded-lg ${
                    portfolioVisualMode === 'boceto'
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30 font-mono hover:bg-sky-500/30'
                      : 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20'
                  }`}
                  aria-label={`Probar simulador interactivo de ${project.title}`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{portfolioVisualMode === 'boceto' ? 'Probar Boceto Interactivo' : 'Probar Demo Liquid Glass'}</span>
                </Link>

                <a
                  href={`https://wa.me/526222259974?text=Hola%20Miguel,%20vi%20el%20proyecto%20de%20${encodeURIComponent(project.title)}%20en%20tu%20galeria%20y%20quiero%20cotizar%20una%20solucion%20para%20mi%20negocio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-sky-600 dark:text-sky-300 hover:text-white px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-600 transition-all border border-sky-400/20"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Cotizar por WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
