'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowRight, Layers, Sparkles, Filter, MessageCircle, CheckCircle2 } from 'lucide-react';
import { PROJECTS, CATEGORIES } from '@/data/projects';

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

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
              className="group glass-panel-interactive rounded-2xl flex flex-col justify-between overflow-hidden border border-slate-200/70 dark:border-white/10 hover:border-sky-400/50 transition-all duration-300"
            >
              {/* Entire Card Clickable Link to Detail Page */}
              <Link
                href={`/proyecto/${project.slug}`}
                className="block focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-2xl"
                aria-label={`Ver detalles de ${project.title}`}
              >
                {/* Image Showcase Container with Glass Gradient Overlay */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    priority={project.featured}
                  />

                  {/* Liquid Tint Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none gap-2">
                    <span className="glass-pill bg-slate-950/70 dark:bg-slate-900/80 text-white border-white/20 text-[11px] font-semibold backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                    {project.packagePrice && (
                      <span className="glass-pill bg-gradient-to-r from-emerald-600/90 to-teal-600/90 text-white border-emerald-400/30 text-[11px] font-bold shadow-sm">
                        {project.suggestedPackage ? `${project.suggestedPackage}: ` : ''}{project.packagePrice}
                      </span>
                    )}
                  </div>

                  {/* Bottom Subtitle on Image */}
                  {project.nicheLabel && (
                    <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-sky-300 bg-slate-950/70 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
                        🎯 {project.nicheLabel}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
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
                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-medium"
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
                  className="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20"
                  aria-label={`Probar simulador interactivo de ${project.title}`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Probar Demo Interactivo</span>
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
