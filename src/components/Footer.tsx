'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, GitBranch, Globe, ArrowUp, Heart } from 'lucide-react';
import { PROFILE_INFO } from '@/data/projects';

// Lucide v3+ removed Linkedin/Twitter/Dribbble; use Globe as social fallback
const socialIcons: Record<string, React.ElementType> = {
  github: GitBranch,
  linkedin: Globe,
  twitter: Globe,
  dribbble: Globe,
};

export default function Footer() {
  const year = 2026;

  return (
    <footer className="relative z-10 border-t border-slate-200/50 dark:border-white/8 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">

          {/* Brand Column — HP Digital & AI Agency (Fondo Negro y Letras Doradas) */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center shadow-md">
                <span className="font-black text-sm text-amber-400">HP</span>
              </div>
              <div className="flex flex-col">
                <span className="px-2.5 py-0.5 rounded-lg bg-black font-black text-amber-400 text-sm">
                  HP Digital &amp; AI Agency
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {PROFILE_INFO.name}
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[220px]">
              Diseñador y Desarrollador Full Stack Senior. Cristal Líquido UI + Código de Alto Rendimiento.
            </p>
            <div className="flex items-center gap-2">
              {Object.entries(PROFILE_INFO.social).map(([name, url]) => {
                const Icon = socialIcons[name] || Globe;
                return (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Perfil de ${name}`}
                    className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-400/40 transition-all"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav Links Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: 'Inicio', href: '/#inicio' },
                { name: 'Proyectos', href: '/#proyectos' },
                { name: 'Certificados', href: '/#certificados' },
                { name: 'Sobre mí', href: '/#sobre-mi' },
                { name: 'Contacto', href: '/#contacto' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              ¿Trabajamos juntos?
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Disponible para proyectos remotos y freelance en toda Europa y Latinoamérica.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.02] transition-all duration-200 w-fit"
            >
              Cotizar Proyecto →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200/50 dark:border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            © {year} {PROFILE_INFO.name}. Hecho con{' '}
            <Heart className="w-3 h-3 text-rose-400" /> y cristal líquido.
          </p>

          <a
            href="#inicio"
            aria-label="Volver al inicio"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
