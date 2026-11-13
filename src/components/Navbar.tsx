'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { PROFILE_INFO } from '@/data/projects';

export default function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLogoIndex, setActiveLogoIndex] = useState<0 | 1>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/#inicio' },
    { name: 'Demos 3D', href: '/#demos-carrusel' },
    { name: 'Proyectos', href: '/#proyectos' },
    { name: 'Paquetes', href: '/#paquetes' },
    { name: 'Certificados', href: '/#certificados' },
    { name: 'Sobre mí', href: '/#sobre-mi' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass-panel-elevated py-3 px-5 sm:px-6 shadow-lg shadow-black/5 dark:shadow-black/40'
            : 'glass-panel py-3.5 px-5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo — HP Digital & AI Agency (Fondo Negro y Letras Doradas) */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            id="brand-logo"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-black shadow-lg transition-transform duration-300 group-hover:scale-105 shrink-0">
              <img
                src="/hp-logo-gold.jpg"
                alt="HP Digital IA Agency Dorado"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  activeLogoIndex === 0
                    ? 'opacity-100 blur-0 scale-100'
                    : 'opacity-0 blur-md scale-110 pointer-events-none'
                }`}
              />
              <img
                src="/hp-logo-holo.jpg"
                alt="HP Digital IA Agency Liquid Glass"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  activeLogoIndex === 1
                    ? 'opacity-100 blur-0 scale-100'
                    : 'opacity-0 blur-md scale-110 pointer-events-none'
                }`}
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-lg bg-black font-black text-xs sm:text-sm md:text-base tracking-tight text-amber-400 shadow-xs truncate">
                  HP Digital &amp; AI Agency
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              </div>
              <span className="text-[11px] font-semibold text-slate-600 dark:text-amber-200/80 tracking-wide truncate mt-0.5">
                {PROFILE_INFO.name}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons: Theme Toggle & Contact CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-btn"
              aria-label="Cambiar tema claro u oscuro"
              className="relative p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/10 border border-slate-300/60 dark:border-white/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              {mounted ? (
                theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform duration-300 hover:rotate-90" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600 rotate-0 transition-transform duration-300 hover:-rotate-12" />
                )
              ) : (
                <div className="w-4 h-4" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#contacto"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Cotizar Proyecto
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/10 border border-slate-300/60 dark:border-white/15 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-slate-200/50 dark:border-white/10 mt-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center flex items-center justify-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20"
              >
                Cotizar Proyecto
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
