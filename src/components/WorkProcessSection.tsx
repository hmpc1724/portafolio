'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PROFILE_INFO } from '@/data/projects';

export default function WorkProcessSection() {
  return (
    <section id="proceso" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
        Mi Proceso de Trabajo
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PROFILE_INFO.processSteps.map((step) => (
          <div key={step.step} className="glass-panel p-5 sm:p-6 relative overflow-hidden glass-shimmer">
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
    </section>
  );
}
