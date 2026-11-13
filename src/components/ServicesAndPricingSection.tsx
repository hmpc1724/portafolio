'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Wand2,
  Eye,
  Rocket,
  MessageCircle,
  Clock,
  ShieldCheck,
  ExternalLink,
  CreditCard,
  Copy,
  Check,
} from 'lucide-react';
import {
  OFFICIAL_AGENCY_PACKAGES,
  OFFICIAL_RECURRING_PLANS,
  OFFICIAL_PAYMENT_CARDS,
  PROFILE_INFO,
} from '@/data/projects';

export default function ServicesAndPricingSection() {
  const [selectedPkgId, setSelectedPkgId] = useState<string>('profesional');
  const [selectedRecurringId, setSelectedRecurringId] = useState<string>('crecimiento_seo');
  const [copiedCardKey, setCopiedCardKey] = useState<string | null>(null);

  const handleCopyCard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCardKey(key);
    setTimeout(() => setCopiedCardKey(null), 2500);
  };

  const formatMxn = (val: number) =>
    new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      maximumFractionDigits: 0,
    }).format(val);

  const selectedPkg =
    OFFICIAL_AGENCY_PACKAGES.find((p) => p.id === selectedPkgId) || OFFICIAL_AGENCY_PACKAGES[1];
  const selectedRec =
    OFFICIAL_RECURRING_PLANS.find((r) => r.id === selectedRecurringId) ||
    OFFICIAL_RECURRING_PLANS[1];

  const buildWhatsAppQuoteUrl = (pkgName: string, priceMxn: number, depositMxn: number) => {
    const text = `Hola Hector 👋, vi tu portafolio Liquid Glass y me interesa solicitar el *Boceto en Google Stitch + Demo* para el *${pkgName}* (${formatMxn(priceMxn)} MXN — Anticipo 50%: ${formatMxn(depositMxn)} MXN) con *${selectedRec.name}*.`;
    return `https://wa.me/526222259974?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="paquetes"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="glass-pill mb-4 text-sky-600 dark:text-sky-300 border-sky-400/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Servicios, Paquetes & Flujo Stitch → Antigravity</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Precios transparentes,{' '}
          <span className="text-gradient-liquid">cero riesgo para ti</span>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          Primero te enseño un <strong>boceto visual en Google Stitch</strong> y un{' '}
          <strong>demo funcional</strong>. Solo cuando decides avanzar iniciamos la construcción en{' '}
          <strong>Google Antigravity</strong>.
        </p>
      </div>

      {/* 3-Step Guarantee Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="glass-panel p-5 flex items-start gap-3.5 border-l-4 border-l-sky-500">
          <div className="w-9 h-9 rounded-xl bg-sky-500/15 text-sky-500 flex items-center justify-center shrink-0 font-bold text-sm">
            <Wand2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              1. Boceto en Google Stitch
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              Diseñamos el boceto visual de tu página con los colores y giro de tu negocio sin costo inicial.
            </p>
          </div>
        </div>

        <div className="glass-panel p-5 flex items-start gap-3.5 border-l-4 border-l-indigo-500">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/15 text-indigo-500 flex items-center justify-center shrink-0 font-bold text-sm">
            <Eye className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              2. Demo Interactivo en Vivo
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              Pruebas cómo se siente tu plataforma en celular y computadora antes de tomar tu decisión.
            </p>
          </div>
        </div>

        <div className="glass-panel p-5 flex items-start gap-3.5 border-l-4 border-l-emerald-500">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0 font-bold text-sm">
            <Rocket className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              3. Producción en Antigravity
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              Al confirmar con el 50% de anticipo, se construye tu sistema completo con 1.er año de Hosting y Dominio gratis.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Main Packages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {OFFICIAL_AGENCY_PACKAGES.map((pkg) => {
          const isSelected = selectedPkgId === pkg.id;
          return (
            <div
              key={pkg.id}
              onClick={() => setSelectedPkgId(pkg.id)}
              className={`cursor-pointer rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                pkg.highlighted
                  ? 'glass-panel-elevated border-2 border-sky-400/70 shadow-xl'
                  : 'glass-panel-interactive'
              } ${isSelected ? 'ring-2 ring-indigo-500' : ''}`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md">
                  Más Elegido por Negocios
                </span>
              )}

              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    {pkg.name}
                  </span>
                  <span className="glass-pill text-[11px] font-mono text-slate-600 dark:text-slate-300 py-0.5 px-2.5">
                    <Clock className="w-3 h-3 text-sky-400" />
                    {pkg.deliveryTime}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1.5">
                  {pkg.subtitle}
                </h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {formatMxn(pkg.priceMxn)}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">MXN / pago único</span>
                </div>

                <div className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Inicia con 50% de anticipo: {formatMxn(pkg.depositMxn)} MXN
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pkg.description}
                </p>

                <ul className="mt-5 space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-white/10 flex flex-col gap-2">
                <a
                  href={`http://${
                    typeof window !== 'undefined' ? window.location.hostname : '192.168.100.90'
                  }:3210/?view=agencia&inbound=1&name=${encodeURIComponent(
                    `Prospecto ${pkg.name}`
                  )}&tier=${pkg.id}&message=${encodeURIComponent(
                    `Seleccionó ${pkg.name} ($${pkg.priceMxn} MXN) desde el Portafolio Oficial`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-sky-500/25 hover:scale-[1.01]'
                      : 'glass-panel text-slate-900 dark:text-white hover:border-sky-400/50'
                  }`}
                >
                  <Wand2 className="w-4 h-4" />
                  <span>Abrir en Radar (Stitch → Demo)</span>
                </a>
                <a
                  href={buildWhatsAppQuoteUrl(pkg.name, pkg.priceMxn, pkg.depositMxn)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Pedir por WhatsApp ({pkg.name})</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recurring Maintenance, SEO & Ads Plans */}
      <div className="mt-12 glass-panel p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Separación Transparente: Desarrollo • Mantenimiento • Publicidad
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
              Renovación Anual, Pólizas Mensuales e Iguala de Campañas
            </h3>
          </div>
          <a
            href={PROFILE_INFO.radarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-600 dark:text-sky-300 hover:bg-sky-500/25 transition-all w-fit"
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>Abrir Laboratorio Conectado en Radar de Clientes</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OFFICIAL_RECURRING_PLANS.map((plan) => {
            const isActive = selectedRecurringId === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedRecurringId(plan.id)}
                className={`cursor-pointer rounded-xl p-4 transition-all border ${
                  isActive
                    ? 'glass-panel-elevated border-emerald-400/70 ring-1 ring-emerald-400/50'
                    : 'glass-panel border-slate-200/60 dark:border-white/10 hover:border-emerald-400/40'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-300">
                    {plan.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{plan.name}</h4>
                <div className="mt-1.5 flex items-baseline gap-1">
                  <span className="text-xl font-extrabold text-gradient-liquid">
                    {formatMxn(plan.priceMxn)}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    / {plan.period}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {plan.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Summary Bar */}
        <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
            Selección actual: <strong>{selectedPkg.name} ({formatMxn(selectedPkg.priceMxn)} MXN)</strong> +{' '}
            <strong className="text-emerald-600 dark:text-emerald-400">
              {selectedRec.name} ({formatMxn(selectedRec.priceMxn)} / {selectedRec.period})
            </strong>
          </div>
          <a
            href={buildWhatsAppQuoteUrl(selectedPkg.name, selectedPkg.priceMxn, selectedPkg.depositMxn)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Solicitar mi Boceto Gratis por WhatsApp →</span>
          </a>
        </div>
      </div>

      {/* MODO DE PAGO OFICIAL — 2 TARJETAS DIRECTAS (ANTICIPO 50% O LIQUIDACIÓN) */}
      <div id="modo-pago" className="mt-10 glass-panel-elevated p-6 sm:p-8 border border-sky-400/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/60 dark:border-white/10">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              <CreditCard className="w-4 h-4" />
              <span>Modo de Pago Oficial • Transferencia o Depósito a Tarjeta</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              2 Tarjetas Oficiales para tu Anticipo del 50% o Liquidación
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              Una vez aprobado tu <strong>Boceto en Google Stitch y Demo en Vivo</strong>, realiza tu pago en cualquiera de nuestras <strong>2 tarjetas oficiales</strong> y envíanos el comprobante por WhatsApp:
            </p>
          </div>

          <a
            href={`https://wa.me/526222259974?text=${encodeURIComponent(
              `Hola Miguel 👋, acabo de realizar el pago del Anticipo 50% (${formatMxn(
                selectedPkg.depositMxn
              )} MXN) para el *${selectedPkg.name}* (${formatMxn(
                selectedPkg.priceMxn
              )} MXN). Te comparto mi comprobante de transferencia:`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-md transition-all shrink-0 w-fit"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enviar Comprobante por WhatsApp</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {OFFICIAL_PAYMENT_CARDS.map((card, idx) => (
            <div
              key={card.id}
              className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-200/70 dark:border-white/15 relative overflow-hidden flex flex-col justify-between gap-4"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r ${card.gradient} text-white shadow-xs`}
                  >
                    Opción {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {card.alias}
                  </span>
                </div>
                <span className="glass-pill text-[11px] font-mono font-bold text-sky-600 dark:text-sky-300 py-0.5 px-2.5">
                  {card.bankNetwork}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/95 text-white border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Número de Tarjeta (16 dígitos)
                  </div>
                  <div className="text-lg sm:text-2xl font-black font-mono tracking-wider text-white mt-0.5 select-all">
                    {card.formattedNumber}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyCard(card.cleanNumber, card.id)}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:opacity-95 transition-all shrink-0"
                >
                  {copiedCardKey === card.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar 16 dígitos</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-300">
                <span>
                  Beneficiario: <strong className="text-slate-900 dark:text-white">{card.holder}</strong>
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Anticipo {selectedPkg.name}: {formatMxn(selectedPkg.depositMxn)} MXN
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
