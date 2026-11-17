import { NextResponse } from 'next/server';

const PRICES = {
  esencial: { nombre: 'Esencial', totalMxn: 4900, anticipoMxn: 2450 },
  profesional: { nombre: 'Profesional', totalMxn: 8900, anticipoMxn: 4450 },
  escalable: { nombre: 'Escalable', totalMxn: 14900, anticipoMxn: 7450 },
} as const;

type TierId = keyof typeof PRICES;
type Kind = 'anticipo' | 'liquidacion';

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as {
      tierId?: string;
      kind?: string;
      businessName?: string;
    } | null;

    const tier = body?.tierId as TierId;
    const kind = body?.kind as Kind;
    if (!tier || !(tier in PRICES) || (kind !== 'anticipo' && kind !== 'liquidacion')) {
      return NextResponse.json({ error: 'Paquete o tipo de pago inválido' }, { status: 400 });
    }

    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      return NextResponse.json({ error: 'El pago en línea aún no está configurado' }, { status: 503 });
    }

    const p = PRICES[tier];
    const amountMxn = kind === 'anticipo' ? p.anticipoMxn : p.totalMxn - p.anticipoMxn;
    const label = kind === 'anticipo' ? 'Anticipo 50%' : 'Liquidación';
    const business = String(body?.businessName ?? '').slice(0, 80);

    const reqUrl = new URL(req.url);
    const origin = req.headers.get('origin');
    const base = origin && new URL(origin).host === reqUrl.host ? origin : reqUrl.origin;

    const form = new URLSearchParams();
    form.set('mode', 'payment');
    form.set('locale', 'es-419');
    form.set('success_url', `${base}/?pago=exitoso`);
    form.set('cancel_url', `${base}/?pago=cancelado#modo-pago`);
    form.set('phone_number_collection[enabled]', 'true');
    form.set('line_items[0][quantity]', '1');
    form.set('line_items[0][price_data][currency]', 'mxn');
    form.set('line_items[0][price_data][unit_amount]', String(amountMxn * 100));
    form.set('line_items[0][price_data][product_data][name]', `${label} — Plan ${p.nombre}`);
    form.set(
      'line_items[0][price_data][product_data][description]',
      `HP Digital & AI Agency${business ? ` · ${business}` : ''}`
    );
    form.set('payment_intent_data[description]', `${label} Plan ${p.nombre}${business ? ` — ${business}` : ''}`);
    form.set('metadata[tier]', tier);
    form.set('metadata[kind]', kind);
    if (business) form.set('metadata[business]', business);

    const r = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: form.toString(),
    });
    const data = (await r.json().catch(() => ({}))) as { url?: string };
    if (!r.ok || !data?.url) {
      return NextResponse.json({ error: 'No se pudo iniciar el pago' }, { status: 502 });
    }
    return NextResponse.json({ url: data.url }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'No se pudo iniciar el pago' }, { status: 500 });
  }
}
