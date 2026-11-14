'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, MessageSquare, Mail, User, Loader2, Phone, MapPin, MessageCircle, CreditCard, Copy, Check } from 'lucide-react';
import { PROFILE_INFO, OFFICIAL_PAYMENT_CARDS } from '@/data/projects';

interface FormState {
  name: string;
  email: string;
  packageInterest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres.';
  }
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Introduce un correo electrónico válido.';
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres.';
  }
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    packageInterest: 'Plan Profesional ($8,900 MXN)',
    message: '',
  });
  const [lastSubmitted, setLastSubmitted] = useState<FormState | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [copiedCardId, setCopiedCardId] = useState<string | null>(null);

  const handleCopyCard = (num: string, id: string) => {
    navigator.clipboard.writeText(num);
    setCopiedCardId(id);
    setTimeout(() => setCopiedCardId(null), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Live-validate touched fields
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setSubmitStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setLastSubmitted(form);
        setSubmitStatus('success');
        setForm({
          name: '',
          email: '',
          packageInterest: 'Plan Profesional ($8,900 MXN)',
          message: '',
        });
        setErrors({});
        setTouched({});
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="glass-pill mb-4 text-rose-600 dark:text-rose-300 border-rose-400/30">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Hablemos</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          ¿Tienes un proyecto en{' '}
          <span className="text-gradient-liquid">mente</span>?
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl">
          Cuéntame tu idea. Respondo en menos de 24 horas laborales y la consulta inicial es completamente gratuita.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">

        {/* Contact Info Panel */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="glass-panel p-6 flex flex-col gap-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Información de contacto</h3>

            {/* Email */}
            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 dark:bg-sky-400/15 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors shrink-0">
                <Mail className="w-5 h-5 text-sky-500 dark:text-sky-400" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-slate-500 dark:text-slate-400">Email</div>
                <div className="text-sm font-medium text-slate-800 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors truncate">
                  {PROFILE_INFO.email}
                </div>
              </div>
            </a>

            {/* Phone & WhatsApp */}
            <div className="flex flex-col gap-2 pt-1 border-t border-slate-200/50 dark:border-white/5">
              <a
                href={PROFILE_INFO.phoneTel}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-400/15 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors shrink-0">
                  <Phone className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Teléfono / Celular</div>
                  <div className="text-sm font-medium text-slate-800 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {PROFILE_INFO.phoneFormatted}
                  </div>
                </div>
              </a>

              {/* Quick WhatsApp button */}
              <a
                href={PROFILE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 w-full py-2 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>

            {/* Location & Address */}
            <div className="flex items-start gap-3 pt-2 border-t border-slate-200/50 dark:border-white/5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-400/15 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-purple-500 dark:text-purple-400" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-slate-500 dark:text-slate-400">Ubicación</div>
                <div className="text-sm font-medium text-slate-800 dark:text-white">
                  {PROFILE_INFO.location}
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="flex items-center gap-3 pt-2 border-t border-slate-200/50 dark:border-white/5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-400/15 flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Estado</div>
                <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {PROFILE_INFO.status}
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-panel p-6">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Redes & Perfiles</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {Object.entries(PROFILE_INFO.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-pill capitalize hover:border-sky-400/50 hover:text-sky-600 dark:hover:text-sky-400 transition-all"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Modo de Pago Oficial (2 Tarjetas) */}
          <div className="glass-panel p-6 space-y-3 border border-sky-400/30">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-sky-500" />
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Modo de Pago Oficial (2 Tarjetas)
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Transferencia o depósito directo (Anticipo 50% o Liquidación) en nuestras 2 tarjetas oficiales:
            </p>
            <div className="space-y-2.5">
              {OFFICIAL_PAYMENT_CARDS.map((card, i) => (
                <div
                  key={card.id}
                  className="p-3 rounded-xl bg-slate-900/95 text-white border border-white/10 flex items-center justify-between gap-2"
                >
                  <div>
                    <div className="text-[10px] font-bold text-sky-300">
                      Opción {i + 1}: {card.bankNetwork}
                    </div>
                    <div className="font-mono font-black text-xs sm:text-sm tracking-wider select-all">
                      {card.formattedNumber}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      Titular: <span className="text-slate-200 font-semibold">{card.holder}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCard(card.cleanNumber, `contact_${card.id}`)}
                    className="px-2.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-[11px] flex items-center gap-1 shrink-0 transition-all"
                  >
                    {copiedCardId === `contact_${card.id}` ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Panel */}
        <div className="lg:col-span-3 glass-panel p-6 sm:p-8">
          {submitStatus === 'success' ? (
            <div className="flex flex-col items-center text-center py-10 gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-400/15 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                ¡Solicitud registrada!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md">
                Tu mensaje quedó guardado para preparar tu <strong>boceto en Google Stitch</strong>. Si quieres atención inmediata, envíame el resumen directo a mi WhatsApp:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                {lastSubmitted && (
                  <>
                    <a
                      href={`${
                        typeof window !== 'undefined' && window.location.hostname === 'localhost'
                          ? 'http://localhost:3240'
                          : 'https://agencia-liquid-glass.vercel.app'
                      }/?inbound=1&name=${encodeURIComponent(
                        lastSubmitted.name
                      )}&tier=${encodeURIComponent(
                        lastSubmitted.packageInterest.toLowerCase().includes('esencial')
                          ? 'esencial'
                          : lastSubmitted.packageInterest.toLowerCase().includes('escalable')
                          ? 'escalable'
                          : 'profesional'
                      )}&message=${encodeURIComponent(
                        `${lastSubmitted.packageInterest} | Email: ${lastSubmitted.email} | ${lastSubmitted.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-xs sm:text-sm rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-extrabold flex items-center gap-2 shadow-lg transition-all"
                    >
                      <span>🚀 Enviar a Agencia Liquid Glass (Stitch → Demo)</span>
                    </a>
                    <a
                      href={`https://wa.me/526222259974?text=${encodeURIComponent(
                        `Hola Hector 👋, soy *${lastSubmitted.name}* (${lastSubmitted.email}). Me interesa el *${lastSubmitted.packageInterest}*. Detalles: ${lastSubmitted.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-xs sm:text-sm rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold flex items-center gap-2 shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir en WhatsApp Ahora</span>
                    </a>
                  </>
                )}
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-4 py-2.5 text-xs sm:text-sm rounded-xl glass-panel text-slate-800 dark:text-white font-semibold hover:border-sky-400/50 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Name Field */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Nombre completo <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Ej. María García"
                    autoComplete="name"
                    className={`glass-input w-full pl-10 pr-4 py-2.5 text-sm ${errors.name ? 'border-rose-400 focus:ring-rose-400/30' : ''}`}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                  />
                </div>
                {errors.name && (
                  <p id="error-name" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Correo electrónico <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="tu@email.com"
                    autoComplete="email"
                    className={`glass-input w-full pl-10 pr-4 py-2.5 text-sm ${errors.email ? 'border-rose-400 focus:ring-rose-400/30' : ''}`}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                  />
                </div>
                {errors.email && (
                  <p id="error-email" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Package Selector Field */}
              <div>
                <label
                  htmlFor="contact-package"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Paquete de interés (Incluye Boceto en Google Stitch + Demo previo)
                </label>
                <select
                  id="contact-package"
                  name="packageInterest"
                  value={form.packageInterest}
                  onChange={handleChange}
                  className="glass-input w-full px-4 py-2.5 text-sm bg-white/80 dark:bg-slate-900/90"
                >
                  <option value="Plan Esencial ($4,900 MXN - Landing Liquid Glass)">
                    Plan Esencial — $4,900 MXN (Landing Page Liquid Glass + 1.er año Hosting/Dominio)
                  </option>
                  <option value="Plan Profesional ($8,900 MXN - Web Comercial + SEO Maps)">
                    Plan Profesional — $8,900 MXN (Web Comercial + Agenda/Pedidos + SEO Maps)
                  </option>
                  <option value="Plan Escalable + IA ($14,900 MXN - Ecosistema + Agente Gemini 24/7)">
                    Plan Escalable + IA — $14,900 MXN (Ecosistema + Agente IA 24/7 con Gemini)
                  </option>
                  <option value="Proyecto SaaS / App a la Medida">
                    Desarrollo de SaaS, App o Sistema a la Medida
                  </option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Mensaje <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto, presupuesto aproximado y plazos..."
                  className={`glass-input w-full px-4 py-2.5 text-sm resize-none ${errors.message ? 'border-rose-400 focus:ring-rose-400/30' : ''}`}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                />
                <div className="flex items-start justify-between mt-1">
                  {errors.message ? (
                    <p id="error-message" className="text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-[11px] text-slate-400 ml-auto">
                    {form.message.length}/10 min
                  </span>
                </div>
              </div>

              {/* Error Banner */}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-400/10 border border-rose-400/30 text-sm text-rose-600 dark:text-rose-400">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  Hubo un error al enviar. Puedes escribirme directamente a {PROFILE_INFO.email}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                id="contact-submit-btn"
                disabled={submitStatus === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {submitStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensaje
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Al enviar aceptas que puedo contactarte en respuesta a tu consulta.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
