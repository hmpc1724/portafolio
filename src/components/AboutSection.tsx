'use client';

import React from 'react';
import Image from 'next/image';
import { Code2, Palette, Server, Gauge, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROFILE_INFO } from '@/data/projects';

const skillIcons = [
  { icon: Palette, color: 'text-rose-400 bg-rose-400/10' },
  { icon: Code2, color: 'text-sky-400 bg-sky-400/10' },
  { icon: Server, color: 'text-emerald-400 bg-emerald-400/10' },
  { icon: Gauge, color: 'text-amber-400 bg-amber-400/10' },
];

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="glass-pill mb-4 text-indigo-600 dark:text-indigo-300 border-indigo-400/30">
          <Code2 className="w-3.5 h-3.5" />
          <span>Sobre el Desarrollador</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Quién está detrás del{' '}
          <span className="text-gradient-liquid">cristal</span>
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Bio Panel */}
        <div className="glass-panel p-7 sm:p-8 flex flex-col gap-5">
          {/* Avatar with Liquid Glass Glow */}
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 rounded-2xl flex-shrink-0 overflow-hidden p-[2px] bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 shadow-lg shadow-sky-500/20">
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-950">
                <Image
                  src="/images/avatar.jpg"
                  alt={PROFILE_INFO.name}
                  fill
                  sizes="80px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{PROFILE_INFO.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{PROFILE_INFO.role}</p>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{PROFILE_INFO.location}</span>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {PROFILE_INFO.bio}
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {PROFILE_INFO.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-panel-elevated px-4 py-3 flex flex-col"
              >
                <span className="text-xl font-extrabold text-gradient-liquid">{stat.value}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>

          <a
            href="#contacto"
            className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.02] transition-all duration-200"
          >
            Empezar un Proyecto Juntos
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-col gap-4">
          {PROFILE_INFO.skills.map((skillGroup, idx) => {
            const SkillIcon = skillIcons[idx].icon;
            return (
              <div key={skillGroup.category} className="glass-panel p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${skillIcons[idx].color}`}>
                    <SkillIcon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process Steps */}
      <div className="mt-14">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
          Mi Proceso de Trabajo
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROFILE_INFO.processSteps.map((step) => (
            <div key={step.step} className="glass-panel p-5 sm:p-6 relative overflow-hidden glass-shimmer">
              {/* Large Step Number Backdrop */}
              <div className="absolute -top-3 -right-2 text-[70px] font-black text-slate-200/30 dark:text-white/5 leading-none select-none pointer-events-none">
                {step.step}
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                    Paso {step.step}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">{step.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
