import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { ApiResponse } from '@/types';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, packageInterest } = body as {
      name?: string;
      email?: string;
      message?: string;
      packageInterest?: string;
    };

    // Server-side validation
    const errors: Record<string, string> = {};
    if (!name || name.trim().length < 2) errors.name = 'Nombre obligatorio (mínimo 2 caracteres).';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Email inválido.';
    if (!message || message.trim().length < 10)
      errors.message = 'Mensaje obligatorio (mínimo 10 caracteres).';

    if (Object.keys(errors).length > 0) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Datos inválidos.', errors },
        { status: 400 }
      );
    }

    // Sanitize – strip any HTML tags
    const sanitize = (str: string) => str.replace(/<[^>]*>/g, '').trim();
    const safeData = {
      id: `lead_${Date.now()}`,
      name: sanitize(name!),
      email: sanitize(email!),
      packageInterest: packageInterest ? sanitize(packageInterest) : 'Plan Profesional ($8,900 MXN)',
      message: sanitize(message!),
      date: new Date().toISOString(),
    };

    // Persist locally in data/contact-submissions.json when running on Node/local
    try {
      const dataDir = path.join(process.cwd(), 'data');
      await fs.mkdir(dataDir, { recursive: true });
      const filePath = path.join(dataDir, 'contact-submissions.json');
      let existing: unknown[] = [];
      try {
        const raw = await fs.readFile(filePath, 'utf-8');
        existing = JSON.parse(raw);
      } catch {
        existing = [];
      }
      existing.unshift(safeData);
      await fs.writeFile(filePath, JSON.stringify(existing, null, 2), 'utf-8');
    } catch {
      // Cloudflare Workers no tiene sistema de archivos persistente
    }

    // Enviar aviso por correo con Resend si está configurado en Cloudflare Secrets / .env
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.LEADS_TO_EMAIL;
    const fromEmail = process.env.LEADS_FROM_EMAIL || 'Portafolio Liquid Glass <onboarding@resend.dev>';
    if (resendKey && toEmail) {
      const esc = (s: string) =>
        s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      const html = `<h2>Nuevo contacto desde tu Portafolio</h2>
<p><b>Nombre:</b> ${esc(safeData.name)}</p>
<p><b>Email:</b> ${esc(safeData.email)}</p>
<p><b>Paquete de interés:</b> ${esc(safeData.packageInterest)}</p>
<p><b>Mensaje:</b></p><pre style="white-space:pre-wrap;font-family:sans-serif">${esc(safeData.message)}</pre>`;
      const text = `Nuevo contacto desde tu Portafolio\nNombre: ${safeData.name}\nEmail: ${safeData.email}\nPaquete: ${safeData.packageInterest}\nMensaje:\n${safeData.message}`;

      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: safeData.email,
          subject: `Portafolio: ${safeData.name} (${safeData.packageInterest})`,
          html,
          text,
        }),
      });
      if (!r.ok) {
        console.error('[CONTACT FORM] Resend respondió', r.status);
      }
    }

    console.log('[CONTACT FORM] New message received:', safeData.id);

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: '¡Mensaje recibido! Te contactaré pronto para mostrarte tu boceto en Google Stitch.',
        data: safeData,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, message: 'Error interno del servidor. Por favor intenta de nuevo.' },
      { status: 500 }
    );
  }
}
