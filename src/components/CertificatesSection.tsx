'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  Award,
  Calendar,
  Clock,
  ExternalLink,
  FileText,
  CheckCircle2,
  X,
  ZoomIn,
  Shield,
  Bot,
  Code2,
  Download,
} from 'lucide-react';
import { CERTIFICATES } from '@/data/projects';
import { Certificate } from '@/types';

type CategoryFilter = 'all' | 'frontend' | 'ai' | 'security';

export default function CertificatesSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'frontend', label: 'Frontend & Web' },
    { id: 'ai', label: 'Inteligencia Artificial' },
    { id: 'security', label: 'Ciberseguridad' },
  ];

  const filteredCertificates = useMemo(() => {
    if (activeCategory === 'all') return CERTIFICATES;
    if (activeCategory === 'frontend') {
      return CERTIFICATES.filter((c) => c.category === 'frontend' || c.category === 'web');
    }
    return CERTIFICATES.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    return {
      all: CERTIFICATES.length,
      frontend: CERTIFICATES.filter((c) => c.category === 'frontend' || c.category === 'web').length,
      ai: CERTIFICATES.filter((c) => c.category === 'ai').length,
      security: CERTIFICATES.filter((c) => c.category === 'security').length,
    };
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
      case 'web':
        return <Code2 className="w-3.5 h-3.5" />;
      case 'ai':
        return <Bot className="w-3.5 h-3.5" />;
      case 'security':
        return <Shield className="w-3.5 h-3.5" />;
      default:
        return <Award className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="certificados" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="glass-pill mb-4 text-emerald-600 dark:text-emerald-300 border-emerald-400/30">
          <Award className="w-3.5 h-3.5" />
          <span>Formación & Certificaciones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Credenciales que respaldan mi <span className="text-gradient-liquid">experiencia</span>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          Formación profesional continua certificada por instituciones de prestigio como Udemy, BIG school y MoureDev, cubriendo desde frameworks modernos hasta IA y ciberseguridad.
        </p>
      </div>

      {/* Filter Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = categoryCounts[cat.id as keyof typeof categoryCounts] || 0;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryFilter)}
              id={`filter-cert-${cat.id}`}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 border ${
                isActive
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-transparent shadow-lg shadow-emerald-500/25 scale-105'
                  : 'glass-panel text-slate-700 dark:text-slate-300 border-slate-300/50 dark:border-white/10 hover:border-emerald-400/40 hover:bg-slate-200/50 dark:hover:bg-white/10'
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

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredCertificates.map((cert) => (
          <div
            key={cert.id}
            className="group glass-panel-interactive rounded-2xl flex flex-col justify-between overflow-hidden border border-slate-200/70 dark:border-white/10 hover:border-emerald-400/50 transition-all duration-300 shadow-sm"
          >
            {/* Certificate Preview Image (Clickable) */}
            <div
              onClick={() => setSelectedCert(cert)}
              className="relative w-full aspect-[4/3] cursor-pointer overflow-hidden bg-slate-950/60"
              title="Click para ver en tamaño completo"
            >
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Liquid Tint & Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* View Overlay on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                <span className="glass-pill text-white text-xs font-semibold px-3.5 py-1.5 flex items-center gap-1.5 shadow-lg">
                  <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
                  Ver Certificado
                </span>
              </div>

              {/* Issuer Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className="glass-pill bg-slate-950/80 text-white border-white/20 text-[11px] font-semibold backdrop-blur-md px-2.5 py-1 flex items-center gap-1">
                  {getCategoryIcon(cert.category)}
                  {cert.issuer}
                </span>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-3 right-3">
                <span className="glass-pill bg-emerald-500/80 text-white border-emerald-300/40 text-[10px] font-bold shadow-sm px-2 py-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {cert.duration}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Category & Date */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {cert.categoryLabel}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => setSelectedCert(cert)}
                  className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors cursor-pointer line-clamp-2"
                >
                  {cert.title}
                </h3>

                {/* Instructors */}
                <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Instructor: <span className="text-slate-700 dark:text-slate-300">{cert.instructors}</span>
                </p>

                {/* Description */}
                <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                {/* Topics / Tags */}
                <div className="mt-3.5 flex flex-wrap gap-1">
                  {cert.topics.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-3.5 border-t border-slate-200/50 dark:border-white/8 flex items-center justify-between gap-2 text-xs">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 py-1"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  Ver detalle
                </button>

                <div className="flex items-center gap-2">
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg glass-panel text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                      title="Verificar en Udemy"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg glass-panel text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    title="Abrir PDF original"
                  >
                    <FileText className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal for Certificate View */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full glass-panel-elevated p-4 sm:p-6 rounded-3xl max-h-[92vh] flex flex-col overflow-y-auto border border-emerald-400/30 shadow-2xl shadow-emerald-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/50 dark:border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="glass-pill text-[11px] font-semibold text-emerald-600 dark:text-emerald-300 border-emerald-400/40">
                    {selectedCert.issuer}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {selectedCert.duration}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Impartido por <strong className="text-slate-700 dark:text-slate-200">{selectedCert.instructors}</strong> • {selectedCert.date}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl glass-panel text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] my-4 rounded-2xl overflow-hidden bg-slate-950 border border-slate-300/40 dark:border-white/10 shadow-inner">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Description & Actions */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-600 dark:text-slate-300 max-w-xl">
                <p>{selectedCert.description}</p>
                {selectedCert.credentialId && (
                  <p className="mt-1 text-[11px] text-slate-400 font-mono">
                    ID de Credencial: {selectedCert.credentialId}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href={selectedCert.pdfUrl}
                  download
                  className="px-4 py-2 rounded-xl text-xs font-semibold glass-panel text-slate-700 dark:text-white hover:border-emerald-400/50 flex items-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  Descargar PDF
                </a>

                {selectedCert.verificationUrl && (
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 flex items-center gap-1.5 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Verificar Online
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
