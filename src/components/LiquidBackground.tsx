'use client';

import React from 'react';
import IridescentSmokeVortex from './IridescentSmokeVortex';

export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* Vórtice de Humo Tornasol Interactivo Liquid Glass */}
      <IridescentSmokeVortex />

      {/* Liquid Orb 1 - Cyan / Sky */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full opacity-35 dark:opacity-40 blur-[90px] mix-blend-multiply dark:mix-blend-screen animate-liquid-1"
        style={{
          background: 'radial-gradient(circle, var(--orb-1) 0%, rgba(56, 189, 248, 0.1) 70%, transparent 100%)',
        }}
      />

      {/* Liquid Orb 2 - Violet / Indigo */}
      <div
        className="absolute top-[35%] -right-[12%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-30 dark:opacity-35 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-liquid-2"
        style={{
          background: 'radial-gradient(circle, var(--orb-2) 0%, rgba(129, 140, 248, 0.15) 60%, transparent 100%)',
        }}
      />

      {/* Liquid Orb 3 - Rose / Neon Pink */}
      <div
        className="absolute -bottom-[15%] left-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-25 dark:opacity-30 blur-[95px] mix-blend-multiply dark:mix-blend-screen animate-liquid-3"
        style={{
          background: 'radial-gradient(circle, var(--orb-3) 0%, rgba(244, 63, 94, 0.1) 65%, transparent 100%)',
        }}
      />

      {/* Liquid Orb 4 - Teal / Emerald Accent Center */}
      <div
        className="absolute top-[65%] left-[5%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full opacity-20 dark:opacity-25 blur-[85px] mix-blend-multiply dark:mix-blend-screen animate-liquid-1"
        style={{
          background: 'radial-gradient(circle, var(--orb-4) 0%, rgba(45, 212, 191, 0.1) 60%, transparent 100%)',
        }}
      />

      {/* Subtle Iridescent Glass Mesh Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
      />
    </div>
  );
}
