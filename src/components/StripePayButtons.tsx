'use client';

import { useState } from 'react';
import { CreditCard, Loader2, Phone, ShieldCheck } from 'lucide-react';
import { OFFICIAL_AGENCY_PACKAGES, PROFILE_INFO } from '@/data/projects';

type TierId = (typeof OFFICIAL_AGENCY_PACKAGES)[number]['id'];
type Kind = 'anticipo' | 'liquidacion';

interface Props {
  tierId: TierId;
  businessName?: string;
}

const mxn = (n: number) => `$${n.toLocaleString('es-MX')}`;

async function createCheckout(tierId: TierId, kind: Kind, businessName?: string): Promise<string> {
  const r = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tierId, kind, businessName }),
  });
  const data = (await r.json().catch(() => ({}))) as { url?: string; error?: string };
  if (!r.ok || !data?.url) throw new Error(data?.error || 'No se pudo iniciar el pago');
  return data.url;
}

export function StripePayButtons({ tierId, businessName }: Props) {
  const pkg = OFFICIAL_AGENCY_PACKAGES.find((p) => p.id === tierId) ?? OFFICIAL_AGENCY_PACKAGES[1];
  const [busy, setBusy] = useState<Kind | null>(null);
  const [error, setError] = useState<string | null>(null);

  const options: Array<{ kind: Kind; title: string; amount: number; hint: string }> = [
    { kind: 'anticipo', title: 'Pagar anticipo (50%)', amount: pkg.depositMxn, hint: 'Para iniciar tu proyecto' },
    {
      kind: 'liquidacion',
      title: 'Pagar liquidación',
      amount: pkg.priceMxn - pkg.depositMxn,
      hint: 'Al recibir tu proyecto terminado',
    },
  ];

  const pay = async (kind: Kind) => {
    setError(null);
    setBusy(kind);
    try {
      window.location.href = await createCheckout(pkg.id, kind, businessName);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'No se pudo iniciar el pago');
      setBusy(null);
    }
  };

  const waBaseUrl = PROFILE_INFO.whatsappUrl.split('?')[0];
  const waText = `Hola 👋, quiero pagar el ${pkg.name} (${mxn(pkg.priceMxn)} MXN)${
    businessName ? ` para ${businessName}` : ''
  }. ¿Me pasas la CLABE / número de tarjeta o me ayudas con unas dudas?`;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((o) => (
          <div
            key={o.kind}
            className="p-5 rounded-2xl bg-slate-950/90 border border-white/15 hover:border-cyan-400/50 transition-all space-y-3"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-sm font-extrabold text-white">{o.title}</span>
              <span className="text-lg font-black text-emerald-300">{mxn(o.amount)} MXN</span>
            </div>
            <p className="text-[11px] text-slate-400">
              {pkg.name} · {o.hint}
            </p>
            <button
              type="button"
              disabled={busy !== null}
              onClick={() => pay(o.kind)}
              className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:opacity-95 disabled:opacity-60 transition-all cursor-pointer"
            >
              {busy === o.kind ? <Loader2 className="w-4 h-4 animate-spin" /> : <CreditCard className="w-4 h-4" />}
              <span>{busy === o.kind ? 'Abriendo pago seguro…' : 'Pagar con tarjeta'}</span>
            </button>
          </div>
        ))}
      </div>

      {error && (
        <p role="alert" className="text-xs text-amber-200 bg-amber-500/15 border border-amber-400/30 rounded-xl px-3 py-2">
          {error}. Puedes pedir los datos de pago directo por WhatsApp.
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-600 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
          Pago procesado por Stripe. Nunca vemos ni guardamos los datos de tu tarjeta.
        </span>
        <a
          href={`${waBaseUrl}?text=${encodeURIComponent(waText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-300 hover:underline"
        >
          <Phone className="w-3.5 h-3.5" />
          ¿Prefieres CLABE / tarjeta o tienes dudas? Escríbeme por WhatsApp
        </a>
      </div>
    </div>
  );
}
