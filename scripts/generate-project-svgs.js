/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/projects');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const svgs = {
  'lumina-store.svg': `
<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <radialGradient id="liquid" cx="400" cy="250" r="300" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.45"/>
      <stop offset="60%" stop-color="#0284c7" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
    </radialGradient>
    <filter id="blurFilter" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="40" />
    </filter>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bg)"/>
  <circle cx="280" cy="180" r="160" fill="#38bdf8" opacity="0.3" filter="url(#blurFilter)"/>
  <circle cx="560" cy="320" r="140" fill="#818cf8" opacity="0.25" filter="url(#blurFilter)"/>
  
  <!-- Glass Browser / Frame -->
  <g transform="translate(60, 50)">
    <rect width="680" height="400" rx="16" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.18)" stroke-width="1.5"/>
    <!-- Window Bar -->
    <rect width="680" height="44" rx="16" fill="rgba(255, 255, 255, 0.06)"/>
    <circle cx="28" cy="22" r="5" fill="#ef4444" opacity="0.8"/>
    <circle cx="44" cy="22" r="5" fill="#f59e0b" opacity="0.8"/>
    <circle cx="60" cy="22" r="5" fill="#10b981" opacity="0.8"/>
    <rect x="220" y="14" width="240" height="16" rx="8" fill="rgba(255, 255, 255, 0.1)"/>
    <text x="340" y="26" fill="rgba(255, 255, 255, 0.6)" font-family="sans-serif" font-size="10" text-anchor="middle">lumina.store/collection/spring-2026</text>

    <!-- Glass Store Grid -->
    <!-- Card 1 -->
    <rect x="40" y="75" width="180" height="240" rx="14" fill="rgba(255, 255, 255, 0.07)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1.2"/>
    <circle cx="130" cy="155" r="50" fill="url(#liquid)"/>
    <rect x="60" y="240" width="100" height="12" rx="6" fill="#e2e8f0" opacity="0.9"/>
    <rect x="60" y="260" width="60" height="10" rx="5" fill="#38bdf8"/>
    <rect x="160" y="255" width="44" height="22" rx="8" fill="#38bdf8" opacity="0.2"/>

    <!-- Card 2 (Featured Hero Card) -->
    <rect x="245" y="75" width="395" height="240" rx="14" fill="rgba(255, 255, 255, 0.09)" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.5"/>
    <path d="M 300 200 C 350 140, 420 220, 500 150 C 560 100, 600 170, 620 130" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.7"/>
    <text x="275" y="125" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700">LUMINA ARCHIVE</text>
    <text x="275" y="150" fill="rgba(255,255,255,0.7)" font-family="sans-serif" font-size="12">Minimalist Techwear Collection 2026</text>
    <!-- Buttons -->
    <rect x="275" y="245" width="120" height="36" rx="10" fill="#38bdf8"/>
    <text x="335" y="268" fill="#090d16" font-family="sans-serif" font-size="12" font-weight="600" text-anchor="middle">Comprar Ahora</text>
    <rect x="410" y="245" width="110" height="36" rx="10" fill="rgba(255, 255, 255, 0.12)" stroke="rgba(255,255,255,0.2)"/>
    <text x="465" y="268" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="500" text-anchor="middle">360° View</text>

    <!-- Bottom KPI Pills -->
    <rect x="40" y="335" width="180" height="42" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
    <text x="60" y="360" fill="#38bdf8" font-family="sans-serif" font-size="14" font-weight="700">⚡ 0.8s Checkout</text>
    <rect x="245" y="335" width="190" height="42" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
    <text x="265" y="360" fill="#a78bfa" font-family="sans-serif" font-size="14" font-weight="700">🛡️ Stripe Payments</text>
    <rect x="450" y="335" width="190" height="42" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
    <text x="470" y="360" fill="#34d399" font-family="sans-serif" font-size="14" font-weight="700">✨ Liquid Glass UI</text>
  </g>
</svg>
`,
  'pulse-metrics.svg': `
<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0a0a1a"/>
      <stop offset="50%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#31104b"/>
    </linearGradient>
    <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="35" />
    </filter>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bg2)"/>
  <circle cx="200" cy="150" r="150" fill="#6366f1" opacity="0.35" filter="url(#glow2)"/>
  <circle cx="600" cy="350" r="160" fill="#c084fc" opacity="0.3" filter="url(#glow2)"/>

  <g transform="translate(60, 50)">
    <rect width="680" height="400" rx="16" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1.5"/>
    <rect width="680" height="44" rx="16" fill="rgba(255, 255, 255, 0.06)"/>
    <circle cx="28" cy="22" r="5" fill="#ef4444"/>
    <circle cx="44" cy="22" r="5" fill="#f59e0b"/>
    <circle cx="60" cy="22" r="5" fill="#10b981"/>
    <text x="340" y="26" fill="rgba(255, 255, 255, 0.7)" font-family="sans-serif" font-size="11" text-anchor="middle">app.pulsemetrics.io/analytics/mrr-cohorts</text>

    <!-- Metrics Cards Row -->
    <rect x="35" y="70" width="190" height="85" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(129, 140, 248, 0.4)"/>
    <text x="50" y="95" fill="#94a3b8" font-family="sans-serif" font-size="11">MRR TOTAL</text>
    <text x="50" y="125" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="bold">$48,250</text>
    <text x="160" y="125" fill="#34d399" font-family="sans-serif" font-size="12" font-weight="600">+18.4%</text>

    <rect x="245" y="70" width="190" height="85" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)"/>
    <text x="260" y="95" fill="#94a3b8" font-family="sans-serif" font-size="11">CHURN RATE</text>
    <text x="260" y="125" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="bold">1.24%</text>
    <text x="370" y="125" fill="#38bdf8" font-family="sans-serif" font-size="12" font-weight="600">-0.4%</text>

    <rect x="455" y="70" width="190" height="85" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)"/>
    <text x="470" y="95" fill="#94a3b8" font-family="sans-serif" font-size="11">LIFETIME VALUE</text>
    <text x="470" y="125" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="bold">$3,120</text>
    <text x="580" y="125" fill="#a78bfa" font-family="sans-serif" font-size="12" font-weight="600">VIP</text>

    <!-- Main Chart Panel -->
    <rect x="35" y="175" width="610" height="195" rx="14" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(255, 255, 255, 0.1)"/>
    <!-- Grid lines -->
    <line x1="60" y1="230" x2="620" y2="230" stroke="rgba(255,255,255,0.06)"/>
    <line x1="60" y1="280" x2="620" y2="280" stroke="rgba(255,255,255,0.06)"/>
    <line x1="60" y1="330" x2="620" y2="330" stroke="rgba(255,255,255,0.06)"/>
    
    <!-- Neon Chart Lines -->
    <path d="M 60 320 Q 150 290 220 260 T 360 210 T 480 240 T 610 195" fill="none" stroke="#818cf8" stroke-width="3" stroke-linecap="round"/>
    <path d="M 60 340 Q 140 330 230 300 T 380 280 T 500 270 T 610 230" fill="none" stroke="#c084fc" stroke-width="2.5" stroke-dasharray="4 4"/>
    <circle cx="360" cy="210" r="5" fill="#818cf8" stroke="#ffffff" stroke-width="2"/>
    <circle cx="610" cy="195" r="5" fill="#818cf8" stroke="#ffffff" stroke-width="2"/>
  </g>
</svg>
`,
  'taskflow-pro.svg': `
<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg3" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#022c22"/>
      <stop offset="60%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <filter id="glow3" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="40" />
    </filter>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bg3)"/>
  <circle cx="300" cy="200" r="160" fill="#10b981" opacity="0.25" filter="url(#glow3)"/>
  <circle cx="580" cy="300" r="140" fill="#34d399" opacity="0.2" filter="url(#glow3)"/>

  <g transform="translate(60, 50)">
    <rect width="680" height="400" rx="16" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1.5"/>
    <rect width="680" height="44" rx="16" fill="rgba(255, 255, 255, 0.06)"/>
    <circle cx="28" cy="22" r="5" fill="#ef4444"/>
    <circle cx="44" cy="22" r="5" fill="#f59e0b"/>
    <circle cx="60" cy="22" r="5" fill="#10b981"/>
    <text x="340" y="26" fill="rgba(255, 255, 255, 0.7)" font-family="sans-serif" font-size="11" text-anchor="middle">taskflow.app/board/sprint-q4</text>

    <!-- 3 Kanban Columns -->
    <!-- Col 1: To Do -->
    <rect x="35" y="70" width="190" height="300" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
    <text x="50" y="95" fill="#a7f3d0" font-family="sans-serif" font-size="12" font-weight="bold">POR HACER (3)</text>
    <!-- Task card -->
    <rect x="45" y="110" width="170" height="75" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)"/>
    <rect x="55" y="122" width="50" height="14" rx="4" fill="#3b82f6" opacity="0.8"/>
    <text x="60" y="132" fill="#ffffff" font-family="sans-serif" font-size="9">DISEÑO</text>
    <rect x="55" y="145" width="120" height="8" rx="4" fill="#ffffff" opacity="0.8"/>
    <rect x="55" y="160" width="80" height="6" rx="3" fill="#94a3b8"/>

    <rect x="45" y="195" width="170" height="65" rx="8" fill="rgba(255,255,255,0.08)"/>
    <rect x="55" y="207" width="55" height="14" rx="4" fill="#8b5cf6" opacity="0.8"/>
    <rect x="55" y="230" width="110" height="8" rx="4" fill="#ffffff" opacity="0.8"/>

    <!-- Col 2: In Progress -->
    <rect x="245" y="70" width="190" height="300" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="rgba(16, 185, 129, 0.3)"/>
    <text x="260" y="95" fill="#34d399" font-family="sans-serif" font-size="12" font-weight="bold">EN PROGRESO (2)</text>
    <!-- Dragging card with liquid glow -->
    <rect x="255" y="110" width="170" height="90" rx="8" fill="rgba(16, 185, 129, 0.16)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="265" y="122" width="60" height="14" rx="4" fill="#10b981"/>
    <text x="270" y="132" fill="#022c22" font-family="sans-serif" font-size="9" font-weight="bold">CRISTAL UI</text>
    <text x="265" y="155" fill="#ffffff" font-family="sans-serif" font-size="11" font-weight="bold">Efectos Glassmorphism</text>
    <rect x="265" y="172" width="110" height="6" rx="3" fill="#6ee7b7"/>

    <!-- Col 3: Done -->
    <rect x="455" y="70" width="190" height="300" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
    <text x="470" y="95" fill="#94a3b8" font-family="sans-serif" font-size="12" font-weight="bold">COMPLETADO (8)</text>
    <rect x="465" y="110" width="170" height="75" rx="8" fill="rgba(255,255,255,0.06)"/>
    <circle cx="480" cy="128" r="8" fill="#10b981"/>
    <path d="M 476 128 L 479 131 L 484 125" stroke="#ffffff" stroke-width="2" fill="none"/>
    <rect x="495" y="124" width="90" height="8" rx="4" fill="#94a3b8"/>
    <rect x="475" y="148" width="120" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
  </g>
</svg>
`,
  'studio-veloce.svg': `
<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg4" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1f0a14"/>
      <stop offset="50%" stop-color="#4c0519"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <filter id="glow4" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="45" />
    </filter>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bg4)"/>
  <circle cx="250" cy="200" r="170" fill="#f43f5e" opacity="0.3" filter="url(#glow4)"/>
  <circle cx="550" cy="300" r="150" fill="#fb7185" opacity="0.25" filter="url(#glow4)"/>

  <g transform="translate(60, 50)">
    <rect width="680" height="400" rx="16" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1.5"/>
    <rect width="680" height="44" rx="16" fill="rgba(255, 255, 255, 0.06)"/>
    <circle cx="28" cy="22" r="5" fill="#ef4444"/>
    <circle cx="44" cy="22" r="5" fill="#f59e0b"/>
    <circle cx="60" cy="22" r="5" fill="#10b981"/>
    <text x="340" y="26" fill="rgba(255, 255, 255, 0.7)" font-family="sans-serif" font-size="11" text-anchor="middle">studioveloce.agency/consulting-book</text>

    <!-- Agency Hero Section inside mock -->
    <text x="50" y="115" fill="#f43f5e" font-family="sans-serif" font-size="12" font-weight="700" letter-spacing="2">DIGITAL EXCELLENCE</text>
    <text x="50" y="160" fill="#ffffff" font-family="sans-serif" font-size="32" font-weight="800">Diseñamos marcas que dominan el futuro.</text>
    
    <!-- Step Calculator Panel -->
    <rect x="50" y="200" width="360" height="160" rx="12" fill="rgba(255,255,255,0.07)" stroke="rgba(244, 63, 94, 0.4)"/>
    <text x="70" y="230" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold">Cotizador Interactivo de Proyecto</text>
    <rect x="70" y="248" width="80" height="28" rx="6" fill="#f43f5e"/>
    <text x="110" y="266" fill="#ffffff" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Branding</text>
    <rect x="160" y="248" width="80" height="28" rx="6" fill="rgba(255,255,255,0.1)"/>
    <text x="200" y="266" fill="#ffffff" font-family="sans-serif" font-size="11" text-anchor="middle">Web 3D</text>
    <rect x="250" y="248" width="80" height="28" rx="6" fill="rgba(255,255,255,0.1)"/>
    <text x="290" y="266" fill="#ffffff" font-family="sans-serif" font-size="11" text-anchor="middle">Full Stack</text>

    <text x="70" y="315" fill="#fda4af" font-family="sans-serif" font-size="11">Estimación inmediata: $12.500 USD • Plazo: 4 semanas</text>
    <rect x="70" y="325" width="160" height="24" rx="6" fill="rgba(255,255,255,0.15)"/>
    <text x="150" y="341" fill="#ffffff" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Agendar Discovery Call →</text>

    <!-- Visual 3D sphere representation -->
    <circle cx="530" cy="260" r="85" fill="none" stroke="rgba(244, 63, 94, 0.6)" stroke-width="2"/>
    <ellipse cx="530" cy="260" rx="85" ry="30" fill="none" stroke="#fb7185" stroke-width="1.5"/>
    <ellipse cx="530" cy="260" rx="35" ry="85" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
  </g>
</svg>
`,
  'aura-creative.svg': `
<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg5" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1e1035"/>
      <stop offset="60%" stop-color="#2e1065"/>
      <stop offset="100%" stop-color="#090414"/>
    </linearGradient>
    <filter id="glow5" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="45" />
    </filter>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bg5)"/>
  <circle cx="400" cy="220" r="180" fill="#c084fc" opacity="0.3" filter="url(#glow5)"/>
  <circle cx="620" cy="180" r="120" fill="#e879f9" opacity="0.25" filter="url(#glow5)"/>

  <g transform="translate(60, 50)">
    <rect width="680" height="400" rx="16" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1.5"/>
    <rect width="680" height="44" rx="16" fill="rgba(255, 255, 255, 0.06)"/>
    <circle cx="28" cy="22" r="5" fill="#ef4444"/>
    <circle cx="44" cy="22" r="5" fill="#f59e0b"/>
    <circle cx="60" cy="22" r="5" fill="#10b981"/>
    <text x="340" y="26" fill="rgba(255, 255, 255, 0.7)" font-family="sans-serif" font-size="11" text-anchor="middle">auracreative.space/gallery/cinematic</text>

    <!-- Editorial Gallery Layout -->
    <rect x="40" y="70" width="380" height="295" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(192, 132, 252, 0.4)"/>
    <!-- Art photo representation -->
    <path d="M 60 280 C 120 180, 200 320, 280 200 C 340 140, 390 240, 400 280 L 400 350 L 60 350 Z" fill="rgba(192, 132, 252, 0.25)"/>
    <text x="65" y="110" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="300" letter-spacing="1">NOCTURNE VISIONS</text>
    <text x="65" y="130" fill="#d8b4fe" font-family="sans-serif" font-size="11">Fotografía Editorial & Dirección de Iluminación</text>

    <!-- Right Side Thumbnails -->
    <rect x="440" y="70" width="200" height="135" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)"/>
    <circle cx="540" cy="135" r="30" fill="#c084fc" opacity="0.3"/>
    <rect x="440" y="220" width="200" height="145" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)"/>
    <circle cx="540" cy="290" r="35" fill="#e879f9" opacity="0.25"/>
  </g>
</svg>
`,
  'novapay-billing.svg': `
<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg6" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#082f49"/>
      <stop offset="60%" stop-color="#0c4a6e"/>
      <stop offset="100%" stop-color="#04121d"/>
    </linearGradient>
    <filter id="glow6" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="40" />
    </filter>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bg6)"/>
  <circle cx="280" cy="200" r="160" fill="#06b6d4" opacity="0.3" filter="url(#glow6)"/>
  <circle cx="560" cy="300" r="140" fill="#38bdf8" opacity="0.25" filter="url(#glow6)"/>

  <g transform="translate(60, 50)">
    <rect width="680" height="400" rx="16" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1.5"/>
    <rect width="680" height="44" rx="16" fill="rgba(255, 255, 255, 0.06)"/>
    <circle cx="28" cy="22" r="5" fill="#ef4444"/>
    <circle cx="44" cy="22" r="5" fill="#f59e0b"/>
    <circle cx="60" cy="22" r="5" fill="#10b981"/>
    <text x="340" y="26" fill="rgba(255, 255, 255, 0.7)" font-family="sans-serif" font-size="11" text-anchor="middle">dashboard.novapay.io/billing-engine</text>

    <!-- Billing Invoice Card Mock -->
    <rect x="40" y="70" width="300" height="300" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(6, 182, 212, 0.35)"/>
    <text x="65" y="105" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="bold">Facturación Automatizada</text>
    <text x="65" y="125" fill="#67e8f9" font-family="sans-serif" font-size="11">Suscripción Enterprise Anual</text>

    <rect x="65" y="150" width="250" height="48" rx="8" fill="rgba(255,255,255,0.08)"/>
    <text x="80" y="172" fill="#ffffff" font-family="sans-serif" font-size="11">Acme Global Ltd.</text>
    <text x="80" y="188" fill="#a5f3fc" font-family="sans-serif" font-size="10">Cobrado vía Stripe • ID #INV-9281</text>
    <text x="260" y="180" fill="#34d399" font-family="sans-serif" font-size="12" font-weight="bold">$4.800</text>

    <!-- Status Badges -->
    <rect x="65" y="215" width="100" height="24" rx="6" fill="rgba(52, 211, 153, 0.2)" stroke="#34d399"/>
    <text x="115" y="231" fill="#34d399" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">✓ Conciliado</text>

    <!-- Right Side API Webhook stream -->
    <rect x="360" y="70" width="280" height="300" rx="14" fill="rgba(4, 18, 29, 0.8)" stroke="rgba(255,255,255,0.1)"/>
    <text x="380" y="100" fill="#67e8f9" font-family="monospace" font-size="11">> LIVE WEBHOOK EVENTS</text>
    <text x="380" y="130" fill="#a5f3fc" font-family="monospace" font-size="10">[200] invoice.payment_succeeded</text>
    <text x="380" y="155" fill="#a5f3fc" font-family="monospace" font-size="10">[200] customer.subscription.renewed</text>
    <text x="380" y="180" fill="#38bdf8" font-family="monospace" font-size="10">[200] usage_record.synced (120 req/s)</text>
    <text x="380" y="205" fill="#34d399" font-family="monospace" font-size="10">[200] dunning.recovered_attempt</text>
  </g>
</svg>
`,
  'artisan-market.svg': `
<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg7" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2e1005"/>
      <stop offset="60%" stop-color="#451a03"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <filter id="glow7" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="40" />
    </filter>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bg7)"/>
  <circle cx="300" cy="200" r="160" fill="#f59e0b" opacity="0.3" filter="url(#glow7)"/>
  <circle cx="580" cy="320" r="140" fill="#fbbf24" opacity="0.2" filter="url(#glow7)"/>

  <g transform="translate(60, 50)">
    <rect width="680" height="400" rx="16" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1.5"/>
    <rect width="680" height="44" rx="16" fill="rgba(255, 255, 255, 0.06)"/>
    <circle cx="28" cy="22" r="5" fill="#ef4444"/>
    <circle cx="44" cy="22" r="5" fill="#f59e0b"/>
    <circle cx="60" cy="22" r="5" fill="#10b981"/>
    <text x="340" y="26" fill="rgba(255, 255, 255, 0.7)" font-family="sans-serif" font-size="11" text-anchor="middle">artisanmarket.co/handmade/ceramics</text>

    <!-- Product Showcase -->
    <rect x="40" y="70" width="280" height="295" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(245, 158, 11, 0.35)"/>
    <circle cx="180" cy="170" r="60" fill="#f59e0b" opacity="0.4"/>
    <text x="60" y="265" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="bold">Jarrón de Gres Esmaltado</text>
    <text x="60" y="285" fill="#fcd34d" font-family="sans-serif" font-size="11">Taller Cerámica Kyōto • Pieza 1/12</text>
    <text x="60" y="325" fill="#ffffff" font-family="sans-serif" font-size="18" font-weight="bold">$185 USD</text>

    <!-- Detail panel -->
    <rect x="340" y="70" width="300" height="295" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
    <text x="365" y="105" fill="#fef3c7" font-family="sans-serif" font-size="14" font-weight="bold">Certificado de Autenticidad Digital</text>
    <rect x="365" y="130" width="250" height="1" fill="rgba(255,255,255,0.1)"/>
    <text x="365" y="160" fill="#ffffff" font-family="sans-serif" font-size="12">✓ Trazabilidad directa al artesano</text>
    <text x="365" y="190" fill="#ffffff" font-family="sans-serif" font-size="12">✓ Envío neutral en carbono</text>
    <text x="365" y="220" fill="#ffffff" font-family="sans-serif" font-size="12">✓ Split de pago 90% para creador</text>
  </g>
</svg>
`,
  'datasphere-cms.svg': `
<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg8" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="60%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#312e81"/>
    </linearGradient>
    <filter id="glow8" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="40" />
    </filter>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bg8)"/>
  <circle cx="240" cy="180" r="160" fill="#6366f1" opacity="0.3" filter="url(#glow8)"/>
  <circle cx="560" cy="320" r="150" fill="#818cf8" opacity="0.25" filter="url(#glow8)"/>

  <g transform="translate(60, 50)">
    <rect width="680" height="400" rx="16" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1.5"/>
    <rect width="680" height="44" rx="16" fill="rgba(255, 255, 255, 0.06)"/>
    <circle cx="28" cy="22" r="5" fill="#ef4444"/>
    <circle cx="44" cy="22" r="5" fill="#f59e0b"/>
    <circle cx="60" cy="22" r="5" fill="#10b981"/>
    <text x="340" y="26" fill="rgba(255, 255, 255, 0.7)" font-family="sans-serif" font-size="11" text-anchor="middle">cms.datasphere.io/database/inventory-matrix</text>

    <!-- Table Header Toolbar -->
    <rect x="35" y="70" width="610" height="45" rx="8" fill="rgba(255,255,255,0.06)"/>
    <rect x="50" y="80" width="180" height="24" rx="6" fill="rgba(255,255,255,0.1)"/>
    <text x="70" y="96" fill="#94a3b8" font-family="sans-serif" font-size="10">🔍 Buscar por SKU o título...</text>
    <rect x="520" y="80" width="110" height="24" rx="6" fill="#6366f1"/>
    <text x="575" y="96" fill="#ffffff" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">+ Nuevo Registro</text>

    <!-- Data Table Rows -->
    <rect x="35" y="125" width="610" height="235" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
    <!-- Row 1 -->
    <rect x="45" y="140" width="590" height="36" rx="6" fill="rgba(99, 102, 241, 0.12)"/>
    <text x="65" y="162" fill="#ffffff" font-family="monospace" font-size="11">SKU-9901</text>
    <text x="180" y="162" fill="#ffffff" font-family="sans-serif" font-size="11">Sensor IoT Lidar v4</text>
    <text x="360" y="162" fill="#34d399" font-family="sans-serif" font-size="11">● Activo (480 uds)</text>
    <text x="560" y="162" fill="#a5b4fc" font-family="sans-serif" font-size="11">Editar | Borrar</text>

    <!-- Row 2 -->
    <rect x="45" y="185" width="590" height="36" rx="6" fill="rgba(255,255,255,0.03)"/>
    <text x="65" y="207" fill="#ffffff" font-family="monospace" font-size="11">SKU-9902</text>
    <text x="180" y="207" fill="#ffffff" font-family="sans-serif" font-size="11">Controlador Óptico 100G</text>
    <text x="360" y="207" fill="#34d399" font-family="sans-serif" font-size="11">● Activo (120 uds)</text>
    <text x="560" y="207" fill="#a5b4fc" font-family="sans-serif" font-size="11">Editar | Borrar</text>

    <!-- Row 3 -->
    <rect x="45" y="230" width="590" height="36" rx="6" fill="rgba(255,255,255,0.03)"/>
    <text x="65" y="252" fill="#ffffff" font-family="monospace" font-size="11">SKU-9903</text>
    <text x="180" y="252" fill="#ffffff" font-family="sans-serif" font-size="11">Módulo Batería Estado Sólido</text>
    <text x="360" y="252" fill="#f59e0b" font-family="sans-serif" font-size="11">▲ Bajo stock (14 uds)</text>
    <text x="560" y="252" fill="#a5b4fc" font-family="sans-serif" font-size="11">Editar | Borrar</text>
  </g>
</svg>
`,
  'zenith-architects.svg': `
<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg9" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#042f2e"/>
      <stop offset="60%" stop-color="#134e4a"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <filter id="glow9" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="40" />
    </filter>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bg9)"/>
  <circle cx="320" cy="220" r="160" fill="#14b8a6" opacity="0.3" filter="url(#glow9)"/>
  <circle cx="560" cy="280" r="140" fill="#2dd4bf" opacity="0.2" filter="url(#glow9)"/>

  <g transform="translate(60, 50)">
    <rect width="680" height="400" rx="16" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1.5"/>
    <rect width="680" height="44" rx="16" fill="rgba(255, 255, 255, 0.06)"/>
    <circle cx="28" cy="22" r="5" fill="#ef4444"/>
    <circle cx="44" cy="22" r="5" fill="#f59e0b"/>
    <circle cx="60" cy="22" r="5" fill="#10b981"/>
    <text x="340" y="26" fill="rgba(255, 255, 255, 0.7)" font-family="sans-serif" font-size="11" text-anchor="middle">zenith-arch.ch/projects/villa-lucerne</text>

    <!-- Architecture Blueprint Wireframe & Render split -->
    <rect x="40" y="70" width="380" height="295" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(20, 184, 166, 0.4)"/>
    <!-- Wireframe structure -->
    <polygon points="80,240 230,130 380,240 230,320" fill="none" stroke="#2dd4bf" stroke-width="2"/>
    <polygon points="80,200 230,90 380,200 230,280" fill="none" stroke="#5eead4" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="80" y1="200" x2="80" y2="240" stroke="#2dd4bf" stroke-width="2"/>
    <line x1="230" y1="90" x2="230" y2="130" stroke="#2dd4bf" stroke-width="2"/>
    <line x1="380" y1="200" x2="380" y2="240" stroke="#2dd4bf" stroke-width="2"/>
    <text x="60" y="105" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="bold">Villa Bioclimática Lucerne</text>
    <text x="60" y="125" fill="#5eead4" font-family="sans-serif" font-size="11">Certificación Passivhaus Plus • 620 m²</text>

    <!-- Stats Panel -->
    <rect x="440" y="70" width="200" height="295" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
    <text x="460" y="105" fill="#ccfbf1" font-family="sans-serif" font-size="13" font-weight="bold">Eficiencia Energética</text>
    <text x="460" y="145" fill="#2dd4bf" font-family="sans-serif" font-size="28" font-weight="bold">-82%</text>
    <text x="460" y="165" fill="#99f6e4" font-family="sans-serif" font-size="10">Consumo vs estándar suizo</text>

    <text x="460" y="210" fill="#ccfbf1" font-family="sans-serif" font-size="13" font-weight="bold">Materiales Bio</text>
    <text x="460" y="235" fill="#ffffff" font-family="sans-serif" font-size="11">Madera de alerce local y hormigón reciclado.</text>
  </g>
</svg>
`,
  'kroma-visuals.svg': `
<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg10" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3b0764"/>
      <stop offset="50%" stop-color="#831843"/>
      <stop offset="100%" stop-color="#090514"/>
    </linearGradient>
    <radialGradient id="mesh" cx="400" cy="250" r="280" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ec4899" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#a855f7" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
    </radialGradient>
    <filter id="glow10" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="40" />
    </filter>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bg10)"/>
  <circle cx="280" cy="200" r="160" fill="#ec4899" opacity="0.35" filter="url(#glow10)"/>
  <circle cx="560" cy="300" r="150" fill="#a855f7" opacity="0.3" filter="url(#glow10)"/>

  <g transform="translate(60, 50)">
    <rect width="680" height="400" rx="16" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.18)" stroke-width="1.5"/>
    <rect width="680" height="44" rx="16" fill="rgba(255, 255, 255, 0.06)"/>
    <circle cx="28" cy="22" r="5" fill="#ef4444"/>
    <circle cx="44" cy="22" r="5" fill="#f59e0b"/>
    <circle cx="60" cy="22" r="5" fill="#10b981"/>
    <text x="340" y="26" fill="rgba(255, 255, 255, 0.7)" font-family="sans-serif" font-size="11" text-anchor="middle">kromavisuals.art/generative-lab/liquid-mesh</text>

    <!-- Generative Liquid Canvas Visual -->
    <rect x="40" y="70" width="600" height="295" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(236, 72, 153, 0.4)"/>
    <ellipse cx="340" cy="210" rx="200" ry="80" fill="url(#mesh)"/>
    
    <text x="340" y="160" fill="#ffffff" font-family="sans-serif" font-size="34" font-weight="900" text-anchor="middle" letter-spacing="4">KROMA CHROMATICS</text>
    <text x="340" y="190" fill="#f472b6" font-family="sans-serif" font-size="13" font-weight="500" text-anchor="middle">Audio-Reactive WebGL Fluid Simulation</text>

    <!-- Interactive control pills -->
    <rect x="180" y="260" width="100" height="32" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)"/>
    <text x="230" y="280" fill="#ffffff" font-family="sans-serif" font-size="11" text-anchor="middle">60 FPS Locked</text>
    
    <rect x="295" y="260" width="120" height="32" rx="8" fill="#ec4899"/>
    <text x="355" y="280" fill="#ffffff" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Interactivity ON</text>

    <rect x="430" y="260" width="90" height="32" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)"/>
    <text x="475" y="280" fill="#ffffff" font-family="sans-serif" font-size="11" text-anchor="middle">Shaders GLSL</text>
  </g>
</svg>
`
};

for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(targetDir, filename), content.trim());
  console.log('Created ' + filename);
}
console.log('All 10 project SVGs generated successfully.');
