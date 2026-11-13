'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Wand2, Sparkles, ExternalLink } from 'lucide-react';
import { PROFILE_INFO } from '@/data/projects';

export default function WhatsAppFloatingWidget() {
  const [open, setOpen] = useState(false);

  const quickOptions = [
    {
      label: '🎨 Quiero ver un boceto gratis en Google Stitch',
      url: 'https://wa.me/526222259974?text=Hola%20Hector%20%F0%9F%91%8B,%20me%20gustar%C3%ADa%20solicitar%20un%20boceto%20en%20Google%20Stitch%20para%20mi%20negocio',
    },
    {
      label: '💎 Cotizar Plan Profesional ($8,900 MXN)',
      url: 'https://wa.me/526222259974?text=Hola%20Hector%20%F0%9F%91%8B,%20me%20interesa%20el%20Plan%20Profesional%20de%20$8,900%20MXN%20con%201er%20a%C3%B1o%20de%20hosting%20y%20dominio%20gratis',
    },
    {
      label: '🤖 Cotizar Plan Escalable + Agente IA ($14,900 MXN)',
      url: 'https://wa.me/526222259974?text=Hola%20Hector%20%F0%9F%91%8B,%20me%20interesa%20el%20Plan%20Escalable%20con%20Agente%20de%20IA%2024/7%20($14,900%20MXN)',
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 sm:w-88 glass-panel-elevated p-5 border border-emerald-400/40 shadow-2xl space-y-3.5 animate-in fade-in zoom-in-95">
          <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-white/10 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                  {PROFILE_INFO.name}
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  En línea • Respuesta inmediata
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1"
              aria-label="Cerrar asistente"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            ¡Hola! 👋 Elige una opción para enviarme un WhatsApp directo o solicitar el boceto visual de tu proyecto:
          </p>

          <div className="flex flex-col gap-2">
            {quickOptions.map((opt) => (
              <a
                key={opt.label}
                href={opt.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl glass-panel text-xs font-semibold text-slate-800 dark:text-slate-100 hover:border-emerald-400/60 hover:bg-emerald-500/10 transition-all flex items-center justify-between gap-2"
              >
                <span>{opt.label}</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              </a>
            ))}

            <a
              href={PROFILE_INFO.radarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl bg-sky-500/15 border border-sky-400/40 text-xs font-bold text-sky-700 dark:text-sky-300 hover:bg-sky-500/25 transition-all flex items-center justify-between gap-2"
            >
              <span className="flex items-center gap-1.5">
                <Wand2 className="w-3.5 h-3.5" />
                Abrir Cotizador en Radar de Clientes
              </span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Abrir chat rápido de WhatsApp y cotización"
        className="px-4 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-white/30"
      >
        <MessageCircle className="w-4 h-4 fill-slate-950" />
        <span>WhatsApp / Boceto Gratis</span>
      </button>
    </div>
  );
}
