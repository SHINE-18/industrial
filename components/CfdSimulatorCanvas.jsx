'use client';

import React, { useRef, useEffect, useState } from 'react';
import { RotateCw, Wind } from 'lucide-react';

export default function CfdSimulatorCanvas({ height = 280 }) {
  const canvasRef = useRef(null);
  const [rpm, setRpm] = useState(8);
  const [draft, setDraft] = useState('High');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const numParticles = 140;
    let particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * 2 + 1,
      radius: Math.random() * 2.5 + 1.5,
      color: Math.random() > 0.35 ? '#2563EB' : '#1D4ED8'
    }));

    let angle = 0;

    const render = () => {
      ctx.fillStyle = '#001E38';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) - 20;

      // Draw outer drum ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.4)';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Rotate flights
      angle += (rpm * 0.004);
      const numFlights = 8;

      for (let i = 0; i < numFlights; i++) {
        const flightAngle = angle + (i * Math.PI * 2 / numFlights);
        const fx = centerX + Math.cos(flightAngle) * radius;
        const fy = centerY + Math.sin(flightAngle) * radius;
        const fxInner = centerX + Math.cos(flightAngle) * (radius - 22);
        const fyInner = centerY + Math.sin(flightAngle) * (radius - 22);

        ctx.beginPath();
        ctx.moveTo(fx, fy);
        ctx.lineTo(fxInner, fyInner);
        ctx.strokeStyle = '#2563EB';
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // Render aggregate particles
      const speedMult = draft === 'High' ? 1.5 : 0.8;
      particles.forEach(p => {
        p.y += p.vy * speedMult;
        p.x += Math.sin(p.y * 0.05) * 0.8;

        if (p.y > centerY + radius - 10) {
          p.y = centerY - radius + 10;
          p.x = centerX + (Math.random() - 0.5) * (radius * 1.4);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [rpm, draft]);

  const toggleRpm = () => {
    setRpm(prev => (prev === 8 ? 16 : prev === 16 ? 4 : 8));
  };

  const toggleDraft = () => {
    setDraft(prev => (prev === 'High' ? 'Normal' : 'High'));
  };

  return (
    <div className="bg-white border border-ryetek-border rounded-xl p-5 cfd-glow-container relative shadow-z-card">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs text-ryetek-navy font-bold tracking-wider">
          [LIVE CFD ROTARY DRUM SIMULATION]
        </span>
        <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-widest">FLIGHT VEIL DYNAMICS</span>
      </div>

      <div className="w-full bg-[#001E38] rounded-lg overflow-hidden relative border border-dashed border-ryetek-cyan/30 mb-4" style={{ height: `${height}px` }}>
        <canvas ref={canvasRef} width={480} height={height} className="w-full h-full" />
      </div>

      <div className="flex gap-3 justify-center">
        <button
          onClick={toggleRpm}
          className="flex items-center gap-2 px-4 py-2 bg-ryetek-surface border border-ryetek-border hover:border-ryetek-navy rounded text-xs font-mono text-ryetek-navy font-bold transition-colors"
        >
          <RotateCw className="w-3.5 h-3.5 text-ryetek-cyan" />
          <span>RPM: <strong className="text-ryetek-navy">{rpm} RPM</strong></span>
        </button>

        <button
          onClick={toggleDraft}
          className="flex items-center gap-2 px-4 py-2 bg-ryetek-surface border border-ryetek-border hover:border-ryetek-navy rounded text-xs font-mono text-ryetek-navy font-bold transition-colors"
        >
          <Wind className="w-3.5 h-3.5 text-ryetek-cyan" />
          <span>Draft: <strong className="text-ryetek-navy">{draft}</strong></span>
        </button>
      </div>
    </div>
  );
}
