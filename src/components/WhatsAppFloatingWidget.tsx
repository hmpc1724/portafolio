'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Sparkles, Send, CreditCard, Phone, Loader2 } from 'lucide-react';
import { PROFILE_INFO } from '@/data/projects';

interface ChatMsg {
  role: 'user' | 'assistant';
  text: string;
}

const QUICK_PROMPTS = [
  { label: '💳 CLABE / Tarjeta', prompt: '¿Me pasas la CLABE o número de tarjeta para transferir?' },
  { label: '💰 Precios', prompt: '¿Cuáles son los precios de los paquetes y qué incluyen?' },
  { label: '🎨 Boceto gratis', prompt: 'Quiero solicitar un boceto o demo gratis para mi negocio' },
  { label: '🚀 Pagar con tarjeta', prompt: '¿Cómo puedo pagar el anticipo con tarjeta en Stripe?' },
];

export default function WhatsAppFloatingWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: 'assistant',
      text: '¡Hola! 👋 Soy el Asistente IA de HP Digital & AI Agency. Puedo darte precios, nuestra CLABE/tarjeta para transferir, ayudarte con un boceto gratis o guiarte al pago con tarjeta.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  const sendMessage = async (text: string) => {
    const clean = text.trim();
    if (!clean || loading) return;

    const nextMessages: ChatMsg[] = [...messages, { role: 'user', text: clean }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = (await res.json().catch(() => null)) as { reply?: string } | null;
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text:
            data?.reply ||
            'Escríbenos directo por WhatsApp al +52 622 225 9974 y con gusto te atendemos.',
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Hubo un problema de conexión. Puedes escribirnos directo por WhatsApp al +52 622 225 9974.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const waBaseUrl = PROFILE_INFO.whatsappUrl.split('?')[0];
  const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user')?.text;
  const waHref = `${waBaseUrl}?text=${encodeURIComponent(
    lastUserMsg
      ? `Hola 👋, vengo del portafolio de HP Digital & AI Agency. Mi consulta: ${lastUserMsg}`
      : 'Hola 👋, me interesa cotizar un proyecto o pedir los datos de pago.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[calc(100vw-2.5rem)] sm:w-96 glass-panel-elevated p-4 border border-emerald-400/40 shadow-2xl flex flex-col gap-3 max-h-[80vh]">
          <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-white/10 pb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-950 flex items-center justify-center font-bold shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                  Asistente IA · HP Digital
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  En línea 24/7 • Respuesta inmediata
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 cursor-pointer"
              aria-label="Cerrar asistente"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {QUICK_PROMPTS.map((q) => (
              <button
                key={q.label}
                type="button"
                disabled={loading}
                onClick={() => sendMessage(q.prompt)}
                className="px-2.5 py-1 rounded-full glass-panel text-[11px] font-semibold text-slate-800 dark:text-slate-100 hover:border-emerald-400/60 hover:bg-emerald-500/10 transition-all cursor-pointer disabled:opacity-50"
              >
                {q.label}
              </button>
            ))}
          </div>

          <div
            ref={scrollRef}
            className="flex-1 min-h-[180px] max-h-64 overflow-y-auto space-y-2.5 pr-1 text-xs"
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 whitespace-pre-line leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-emerald-500 text-slate-950 font-semibold'
                      : 'glass-panel text-slate-800 dark:text-slate-100 border border-white/15'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="glass-panel rounded-2xl px-3 py-2 text-slate-500 dark:text-slate-300 flex items-center gap-1.5">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                  <span>Respondiendo…</span>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta precios, CLABE, boceto…"
              className="flex-1 px-3 py-2 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-300/60 dark:border-white/15 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-400"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Enviar mensaje"
              className="p-2 rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 disabled:opacity-50 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/40 dark:border-white/10">
            <a
              href="#modo-pago"
              onClick={() => setOpen(false)}
              className="px-2.5 py-2 rounded-xl bg-indigo-500/15 border border-indigo-400/30 text-[11px] font-bold text-indigo-700 dark:text-indigo-200 hover:bg-indigo-500/25 flex items-center justify-center gap-1.5 transition-all"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Pagar con Tarjeta</span>
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-[11px] font-bold text-emerald-700 dark:text-emerald-200 hover:bg-emerald-500/25 flex items-center justify-center gap-1.5 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Ir a WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Abrir Asistente IA 24/7 y WhatsApp"
        className="px-4 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-white/30 cursor-pointer"
      >
        <MessageCircle className="w-4 h-4 fill-slate-950" />
        <span>Asistente IA / WhatsApp</span>
      </button>
    </div>
  );
}
