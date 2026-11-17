import { NextResponse } from 'next/server';

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

const SYSTEM_PROMPT = `Eres el Asistente IA 24/7 oficial de **HP Digital & AI Agency** (Guaymas, San Carlos y Sonora, México; también atendemos todo México).
Tu trabajo es atender a clientes potenciales cuando Miguel no puede responder en WhatsApp: resolver dudas, cotizar, dar datos para transferir (CLABE o tarjeta), explicar cómo funciona el boceto/demo gratis y guiarlos al pago con tarjeta en Stripe.

Datos oficiales que SIEMPRE debes respetar (no inventes precios ni datos):
- Marca: HP Digital & AI Agency (Titular: Héctor Miguel Palomares).
- WhatsApp directo: +52 622 225 9974 (https://wa.me/526222259974).
- Sitio oficial: https://portafolio.agencia-liquid-glass.workers.dev

Catálogo oficial de paquetes (MXN):
1. Paquete Esencial: $4,900 MXN (Anticipo 50%: $2,450 MXN). Landing Page Liquid Glass de alta conversión (4 secciones) + 1.er año de Hosting y Dominio incluido + botón WhatsApp. Entrega estimada: 5 a 7 días hábiles.
2. Paquete Profesional: $8,900 MXN (Anticipo 50%: $4,450 MXN). Sitio Web Comercial Completo (6 vistas) + Agenda/Pedidos por WhatsApp + SEO Local en Google Maps + 1.er año Hosting/Dominio gratis. Entrega estimada: 7 a 14 días hábiles.
3. Paquete Escalable / App IA: $14,900 MXN (Anticipo 50%: $7,450 MXN). Ecosistema Web + Aplicación Web/Móvil (PWA) autoadministrable + Agente IA 24/7 con Google Gemini. Entrega estimada: 14 a 21 días hábiles.

Pólizas recurrentes (opcionales):
- Renovación Anual Básica (a partir del 2.º año; 1.er año gratis): $1,950 MXN/año.
- Póliza Crecimiento + SEO Maps: $890 MXN/mes.
- Póliza Business + Agente IA 24/7: $1,890 MXN/mes.
- Iguala de Tráfico (Meta / Google Ads): $3,500 MXN/mes.

Métodos de pago:
- Pago con tarjeta (crédito/débito) en línea seguro con Stripe en la sección #modo-pago de esta página (anticipo 50% o liquidación).
- Transferencia SPEI / depósito BBVA a nombre de Héctor Miguel Palomares:
  • CLABE interbancaria: 012180015255287461
  • Tarjeta BBVA (para depósito en practicaja/OXXO): 4152 3147 1472 5313
  • Al transferir, pedir que envíen su comprobante por WhatsApp (+52 622 225 9974).

Flujo comercial (3 pasos):
1. Boceto visual gratis en Google Stitch adaptado a su giro.
2. Demo funcional interactivo sin compromiso antes de pagar.
3. Confirmación con 50% de anticipo y entrega final contra el 50% restante.

Estilo de respuesta:
- Responde en español, claro, amable, directo y conciso (máximo 4-5 líneas o viñetas cortas).
- Si piden boceto o demo gratis, pídeles nombre de su negocio y giro, y diles que pueden enviarlo directo al botón de WhatsApp.`;

function fallbackReply(lastUserText: string): string {
  const q = lastUserText.toLowerCase();
  if (/clabe|transfer|banco|bbva|cuenta|deposito|depósito|tarjeta.*4152|oxxo/.test(q)) {
    return [
      'Aquí tienes los datos para transferencia o depósito en **BBVA** (HP Digital & AI Agency):',
      '• **CLABE:** `012180015255287461`',
      '• **Tarjeta BBVA:** `4152 3147 1472 5313`',
      'Si prefieres pagar con tarjeta de crédito/débito en línea, usa la sección **Modo de Pago (Stripe)** de esta página, o envíanos tu comprobante por WhatsApp (+52 622 225 9974).',
    ].join('\n');
  }
  if (/stripe|pagar con tarjeta|link de pago|anticipo|liquidaci/.test(q)) {
    return [
      'Puedes pagar tu **Anticipo del 50%** o **Liquidación** con tarjeta al instante aquí mismo en el portafolio:',
      '• **Esencial:** $4,900 MXN (Anticipo $2,450)',
      '• **Profesional:** $8,900 MXN (Anticipo $4,450)',
      '• **Escalable + IA:** $14,900 MXN (Anticipo $7,450)',
      'Baja a la sección **Precios y Modo de Pago** para abrir el checkout seguro de Stripe.',
    ].join('\n');
  }
  if (/boceto|demo|stitch|muestra|ejemplo/.test(q)) {
    return '¡Con gusto! Creamos un **boceto visual y demo interactivo gratis** adaptado a tu negocio antes de que pagues un peso. Dime el **nombre y giro de tu negocio** o presiona el botón de WhatsApp abajo para enviárnoslo directo.';
  }
  if (/precio|costo|plan|paquete|cotiz|cuanto|cuánto|poliza|póliza/.test(q)) {
    return [
      'Nuestros paquetes oficiales (incluyen 1.er año de Hosting y Dominio):',
      '• **Esencial ($4,900 MXN):** Landing Page (4 secciones) + WhatsApp. Anticipo: $2,450.',
      '• **Profesional ($8,900 MXN):** Sitio 6 vistas + Agenda WhatsApp + SEO Google Maps. Anticipo: $4,450.',
      '• **Escalable + IA ($14,900 MXN):** Web + App PWA + Agente IA 24/7. Anticipo: $7,450.',
    ].join('\n');
  }
  return '¡Hola! Soy el Asistente IA de **HP Digital & AI Agency**. Puedo ayudarte con **precios y paquetes**, enviarte la **CLABE / tarjeta BBVA** o enlace de **pago con Stripe**, o tomar tus datos para un **boceto gratis**. ¿Qué necesitas?';
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as { messages?: ChatMessage[] } | null;
    const rawMessages = Array.isArray(body?.messages) ? body.messages : [];
    const messages = rawMessages
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.text === 'string')
      .slice(-8)
      .map((m) => ({ role: m.role, text: m.text.slice(0, 800).trim() }))
      .filter((m) => m.text.length > 0);

    const lastUser = [...messages].reverse().find((m) => m.role === 'user')?.text ?? '';
    if (!lastUser) {
      return NextResponse.json({ error: 'Mensaje vacío' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ reply: fallbackReply(lastUser), source: 'fallback' });
    }

    const contents = messages.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }));

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 350,
          },
        }),
      }
    );

    if (!res.ok) {
      return NextResponse.json({ reply: fallbackReply(lastUser), source: 'fallback' });
    }

    const data = (await res.json().catch(() => null)) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
    } | null;
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    return NextResponse.json({
      reply: reply || fallbackReply(lastUser),
      source: reply ? 'gemini' : 'fallback',
    });
  } catch {
    return NextResponse.json({ reply: fallbackReply(''), source: 'fallback' });
  }
}
