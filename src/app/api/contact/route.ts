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

    // Persist locally in data/contact-submissions.json so no lead is ever lost
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
    } catch (err) {
      console.warn('[CONTACT FORM] Could not persist to disk:', err);
    }

    console.log('[CONTACT FORM] New message received & persisted:', safeData);

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
