'use client';

import React, { useEffect, useRef } from 'react';

interface SmokeParticle {
  // Coordenadas base en el vórtice
  baseRadius: number;
  baseAngle: number;
  orbitSpeed: number;
  radialDriftSpeed: number;
  spiralArm: number;

  // Posición actual simulada en pantalla
  x: number;
  y: number;

  // Velocidades de dispersión inducidas por el ratón
  vx: number;
  vy: number;

  // Radio visual de la nube de humo
  size: number;
  baseSize: number;

  // Paleta tornasol (iridiscente): tono HSL, saturación, luminosidad y opacidad
  hue: number;
  hueShiftSpeed: number;
  alpha: number;
  baseAlpha: number;

  // Fase de turbulencia orgánica
  phase: number;
  phaseSpeed: number;
}

export default function IridescentSmokeVortex({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Centro dinámico del vórtice (gira y oscila suavemente en el fondo)
    let vortexCenter = {
      x: width * 0.5,
      y: height * 0.42,
    };

    // Estado del cursor del ratón
    const mouse = {
      x: -1000,
      y: -1000,
      prevX: -1000,
      prevY: -1000,
      vx: 0,
      vy: 0,
      active: false,
      lastMoved: 0,
    };

    // Ajustar tamaño del canvas dinámicamente
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      vortexCenter = {
        x: width * 0.5,
        y: height * 0.42,
      };
    };
    window.addEventListener('resize', handleResize);

    // Seguimiento del ratón para dispersión y remolino interactivo
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      if (mouse.x > -500) {
        mouse.vx = clientX - mouse.x;
        mouse.vy = clientY - mouse.y;
      } else {
        mouse.vx = 0;
        mouse.vy = 0;
      }
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = clientX;
      mouse.y = clientY;
      mouse.active = true;
      mouse.lastMoved = performance.now();
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.vx = 0;
      mouse.vy = 0;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);

    // Inicializar bocanadas de humo tornasol
    const PARTICLE_COUNT = 155;
    const NUM_ARMS = 4;
    const particles: SmokeParticle[] = [];

    // Espectro de tonos tornasol (cian, índigo, lavanda, magenta suave, rosa tornasol, oro champán)
    const TORNASOL_HUES = [185, 215, 255, 285, 315, 340, 42];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const arm = i % NUM_ARMS;
      const fraction = i / PARTICLE_COUNT;
      const baseRadius = 35 + Math.pow(fraction, 1.25) * (Math.min(width, height) * 0.72);
      const armOffset = (arm * (Math.PI * 2)) / NUM_ARMS;
      const spiralTwist = fraction * Math.PI * 4.2;
      const baseAngle = armOffset + spiralTwist + (Math.random() - 0.5) * 0.7;

      // Velocidad angular según radio (perfil de vórtice: el centro rota ligeramente más rápido)
      const orbitSpeed = (0.0035 + 0.009 / Math.sqrt(Math.max(baseRadius * 0.05, 1))) * (Math.random() * 0.3 + 0.85);
      const radialDriftSpeed = 0.0006 + Math.random() * 0.0008;

      // Tamaño de la nube de humo: suave y difusa (65px a 170px)
      const baseSize = 65 + Math.random() * 85 + fraction * 45;

      // Tono tornasol inicial y velocidad de transición iridiscente
      const hue = TORNASOL_HUES[Math.floor(Math.random() * TORNASOL_HUES.length)] + (Math.random() - 0.5) * 20;
      const hueShiftSpeed = 0.08 + Math.random() * 0.12;

      // Opacidad ligera ("ligero el tono" para elegancia Liquid Glass)
      const baseAlpha = 0.045 + Math.random() * 0.065;

      particles.push({
        baseRadius,
        baseAngle,
        orbitSpeed,
        radialDriftSpeed,
        spiralArm: arm,
        x: vortexCenter.x + Math.cos(baseAngle) * baseRadius,
        y: vortexCenter.y + Math.sin(baseAngle) * baseRadius,
        vx: 0,
        vy: 0,
        size: baseSize,
        baseSize,
        hue,
        hueShiftSpeed,
        alpha: baseAlpha,
        baseAlpha,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.012 + Math.random() * 0.018,
      });
    }

    let time = 0;

    // Bucle de renderizado a 60 FPS
    const render = () => {
      time += 0.016;

      // Desvanecimiento del ratón si no se mueve por más de 1.2s
      if (mouse.active && performance.now() - mouse.lastMoved > 1200) {
        mouse.vx *= 0.85;
        mouse.vy *= 0.85;
        if (Math.abs(mouse.vx) < 0.1 && Math.abs(mouse.vy) < 0.1) {
          mouse.active = false;
        }
      }

      // El ojo del vórtice describe un movimiento orgánico suave en forma de ocho
      const dynamicCenterX = vortexCenter.x + Math.sin(time * 0.45) * 70 + Math.cos(time * 0.2) * 35;
      const dynamicCenterY = vortexCenter.y + Math.cos(time * 0.35) * 50 + Math.sin(time * 0.15) * 25;

      // Limpiar canvas preservando transparencia
      ctx.clearRect(0, 0, width, height);

      // Detectar si está en tema oscuro o claro para el modo de mezcla óptimo
      const isDark = document.documentElement.classList.contains('dark');
      ctx.globalCompositeOperation = isDark ? 'screen' : 'multiply';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Giro natural del vórtice (remolino)
        p.baseAngle += p.orbitSpeed;
        p.phase += p.phaseSpeed;

        // Ondulación de turbulencia en las capas de gas
        const turbulence = Math.sin(p.phase + time) * 18 + Math.cos(p.phase * 0.7 + time * 0.8) * 12;
        const currentRadius = p.baseRadius + turbulence;

        // Coordenadas objetivo en el vórtice
        const targetX = dynamicCenterX + Math.cos(p.baseAngle) * currentRadius;
        const targetY = dynamicCenterY + Math.sin(p.baseAngle) * currentRadius * 0.88;

        // 2. Interacción con el ratón: "que cuando pase el raton se mueva o se disperse"
        if (mouse.x > -500 && mouse.y > -500) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseRadius = 210;

          if (dist < mouseRadius && dist > 1) {
            const force = (1 - dist / mouseRadius);
            
            // Fuerza radial repulsiva: dispersa el humo hacia afuera
            const pushX = (dx / dist) * force * 14;
            const pushY = (dy / dist) * force * 14;

            // Remolino inducido por la inercia del cursor al desplazarse
            const swirlFactor = force * 0.18;
            const swirlX = -mouse.vy * swirlFactor;
            const swirlY = mouse.vx * swirlFactor;

            p.vx += pushX + swirlX;
            p.vy += pushY + swirlY;

            // Cuando el humo se dispersa, se expande ligeramente
            p.size = Math.min(p.baseSize * 1.45, p.size + force * 2.2);
          }
        }

        // 3. Física de retorno al vórtice: "y cuando no que vuelva el humo moviendose"
        p.vx *= 0.93;
        p.vy *= 0.93;

        // Fuerza de atracción elástica suave de vuelta a su órbita en el remolino
        const springForce = 0.042;
        p.x += (targetX - p.x) * springForce + p.vx;
        p.y += (targetY - p.y) * springForce + p.vy;

        // El tamaño regresa paulatinamente a su estado basal
        p.size += (p.baseSize - p.size) * 0.03;

        // 4. Ciclo de color tornasol continuo e iridiscente
        p.hue = (p.hue + p.hueShiftSpeed) % 360;

        // Modulación suave de opacidad según su radio y fase para simular volutas de humo
        const breathingAlpha = p.baseAlpha * (0.8 + Math.sin(p.phase) * 0.28);
        const renderAlpha = isDark ? breathingAlpha : breathingAlpha * 0.75;
        const lightness = isDark ? 74 : 58;

        // 5. Dibujar la nube difusa de humo con gradiente radial suave
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          Math.max(p.size, 10)
        );

        gradient.addColorStop(0, `hsla(${p.hue}, 88%, ${lightness}%, ${renderAlpha})`);
        gradient.addColorStop(0.45, `hsla(${(p.hue + 35) % 360}, 82%, ${lightness - 6}%, ${renderAlpha * 0.55})`);
        gradient.addColorStop(1, `hsla(${(p.hue + 70) % 360}, 75%, ${lightness - 12}%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.size, 10), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none -z-10 overflow-hidden ${className}`}
      style={{
        width: '100vw',
        height: '100vh',
      }}
      aria-hidden="true"
    />
  );
}
