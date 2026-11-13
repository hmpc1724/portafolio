import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, GitBranch, CheckCircle2, Target, Sparkles } from 'lucide-react';
import { PROJECTS, PROFILE_INFO } from '@/data/projects';
import InteractiveProjectDemo from '@/components/InteractiveProjectDemo';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: 'Proyecto no encontrado' };
  return {
    title: `${project.title} — ${PROFILE_INFO.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">

      {/* Back Link */}
      <Link
        href="/#proyectos"
        className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 mb-8 transition-colors"
        id="back-to-projects"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver a proyectos
      </Link>

      {/* Hero Image */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden mb-10 glass-panel">
        <Image
          src={project.image}
          alt={`Captura del proyecto ${project.title}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        {/* Category + Featured Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="glass-pill bg-slate-950/60 text-white text-xs font-bold backdrop-blur-md">
            {project.categoryLabel}
          </span>
          {project.featured && (
            <span className="glass-pill bg-gradient-to-r from-amber-500/80 to-rose-500/80 text-white text-[10px] font-bold">
              <Sparkles className="w-3 h-3 text-amber-200" /> Destacado
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Main Content */}
        <div className="lg:col-span-2 flex flex-col gap-8">

          {/* Title + Description */}
          <div className="glass-panel p-7 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
              {project.title}
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
              {project.longDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#live-demo-simulator"
                id={`demo-link-${project.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.02] active:scale-[0.99] transition-all"
              >
                <Sparkles className="w-4 h-4" />
                Probar Demo Interactivo Abajo
              </a>
              <a
                href={`https://wa.me/526222259974?text=${encodeURIComponent(`Hola Hector, vi tu demo de "${project.title}" y me gustaría un boceto similar en Google Stitch para mi negocio.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold hover:bg-emerald-500/25 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Pedir Boceto Similar en Stitch
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-panel text-slate-800 dark:text-white text-sm font-semibold border border-slate-300/50 dark:border-white/15 hover:border-sky-400/40 hover:scale-[1.01] transition-all"
                >
                  <GitBranch className="w-4 h-4" />
                  Ver GitHub
                </a>
              )}
            </div>
          </div>

          {/* Interactive Live Simulator */}
          <InteractiveProjectDemo project={project} />

          {/* Features List */}
          <div className="glass-panel p-7 sm:p-8">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Funcionalidades Clave
            </h2>
            <ul className="flex flex-col gap-3">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-sky-400/15 dark:bg-sky-400/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Client Goal */}
          {project.clientGoal && (
            <div className="glass-panel p-7 sm:p-8 border-l-4 border-indigo-500">
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Target className="w-4.5 h-4.5 text-indigo-400 w-5 h-5" />
                Objetivo del Cliente
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.clientGoal}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-5">

          {/* Tech Stack */}
          <div className="glass-panel p-5 sm:p-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Stack Tecnológico</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="glass-panel p-5 sm:p-6">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Métricas Clave</h3>
              <div className="flex flex-col gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="glass-panel-elevated px-4 py-3 flex items-center justify-between"
                  >
                    <span className="text-xs text-slate-500 dark:text-slate-400">{m.label}</span>
                    <span className="text-sm font-bold text-gradient-liquid">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Commercial Package Info */}
          {project.suggestedPackage && (
            <div className="glass-panel p-5 sm:p-6 border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
              <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-400 block mb-1">
                Paquete Comercial Recomendado
              </span>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {project.suggestedPackage}
              </h3>
              <div className="text-xl font-black font-mono text-emerald-400 mt-1">
                {project.packagePrice}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Incluye 1.er año de hosting y dominio, diseño Liquid Glass y soporte directo de la agencia.
              </p>
              <a
                href={`https://wa.me/526222259974?text=${encodeURIComponent(`Hola Hector, me interesa el ${project.suggestedPackage} para un sistema similar a "${project.title}" (${project.packagePrice}). ¿Podemos platicarlo?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-md shadow-emerald-500/20 transition-all w-full"
              >
                Pedir este Paquete por WhatsApp
              </a>
            </div>
          )}

          {/* CTA Sidebar Card */}
          <div className="glass-panel p-5 sm:p-6 flex flex-col gap-3 bg-gradient-to-br from-sky-500/5 to-indigo-500/5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">¿Te interesa algo similar?</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Puedo construir una solución personalizada para tu negocio. Cuéntame tu idea.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 hover:scale-[1.02] transition-all"
            >
              Cotizar Proyecto
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
