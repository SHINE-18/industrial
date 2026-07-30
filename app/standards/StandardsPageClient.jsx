'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

function useHudHeading() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('is-visible'); observer.disconnect(); }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function StandardsPageClient() {
  const headingRef = useHudHeading();

  const standardsList = [
    { code: 'AS 4100', title: 'Steel Structures Code', desc: 'Governs design, fabrication, and erection of structural steelwork across all batching towers, silos, and plant framework.' },
    { code: 'AS/NZS 1170.2', title: 'Structural Design Actions (Wind Actions)', desc: 'Ensures aggregate silos and bucket elevators withstand severe Australian regional wind pressures up to Region C/D.' },
    { code: 'AS 1210', title: 'Pressure Vessels Standard', desc: 'Applied to indirect thermal oil heating jackets, bitumen pressure tanks, and compressed air receivers.' },
    { code: 'AS/NZS 3000', title: 'Electrical Installations (Wiring Rules)', desc: 'Strict electrical safety compliance for all MCC panels, VFD starter cabinets, and outdoor cabling.' },
    { code: 'AS 1755 / AS/NZS 4024', title: 'Conveyor Safety & Machinery Safety', desc: 'Emergency pull-wire switches, nip-point guards, and inspection access platforms across material handling belts.' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="py-12 sm:py-20 bg-ryetek-navy text-white border-b border-ryetek-cyan/30 text-center">
        <div className="max-w-4xl mx-auto px-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-ryetek-cyan hover:underline uppercase tracking-wider mb-6 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex justify-center mb-3">
            <span className="hud-badge text-white bg-white/10 border-white/20">
              TECHNICAL COMPLIANCE MATRIX
            </span>
          </div>
          <h1 ref={headingRef} className="hud-heading text-3xl sm:text-5xl font-extrabold text-white mt-2">
            AUSTRALIAN ENGINEERING STANDARDS
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Ryetek equipment is fully engineered to comply with Australian national codes, guaranteeing site safety, structural longevity, and easy council/mining approval.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-ryetek-surface border-b border-ryetek-border">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-6">
          {standardsList.map((item, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 border border-ryetek-border rounded-xl shadow-z-card flex flex-col sm:flex-row items-start gap-5">
              <div className="px-4 py-2 bg-ryetek-navy text-ryetek-cyan font-mono font-bold text-lg rounded border border-ryetek-cyan/30 shrink-0">
                {item.code}
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-ryetek-navy mb-1 flex items-center gap-2">
                  <span>{item.title}</span>
                  <CheckCircle2 className="w-4 h-4 text-ryetek-cyan" />
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
