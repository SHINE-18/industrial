'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

export default function WearGuardSection() {
  const headingRef = useHudHeading();

  return (
    <section className="bg-white border-t border-b border-ryetek-border py-16 sm:py-24 relative overflow-hidden">
      {/* CAD Watermark Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* ── MOBILE: Full-width stacked ── */}
        <div className="block lg:hidden space-y-8">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3">
              <span className="hud-badge">PROPRIETARY RETROFIT SYSTEM</span>
            </div>

            <h2
              ref={headingRef}
              className="hud-heading text-3xl font-extrabold text-ryetek-navy mb-4 mt-2 leading-tight"
            >
              WEARGUARD™ DRYER DRUM<br />
              <span className="text-ryetek-cyan">CFD FLIGHTING TECHNOLOGY</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              WearGuard™ replaces standard flighting with CFD-optimized lifters and high-chrome liners to eliminate shell burn-through and cut fuel costs.
            </p>

            {/* Stats: side-by-side on mobile */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-ryetek-surface border border-ryetek-border p-4 rounded-lg border-l-4 border-l-ryetek-navy shadow-z-card">
                <div className="font-display text-2xl font-extrabold text-ryetek-navy">30% LESS</div>
                <div className="text-[0.6rem] text-slate-500 font-mono mt-1 uppercase tracking-wider font-bold">Fuel per Tonne</div>
              </div>
              <div className="bg-ryetek-surface border border-ryetek-border p-4 rounded-lg border-l-4 border-l-ryetek-cyan shadow-z-card">
                <div className="font-display text-2xl font-extrabold text-ryetek-cyan">65% LESS</div>
                <div className="text-[0.6rem] text-slate-500 font-mono mt-1 uppercase tracking-wider font-bold">Drum Shell Wear</div>
              </div>
            </div>

            <Link
              href="/wearguard"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-ryetek-navy text-white font-display font-black text-sm uppercase tracking-wider rounded shadow-z-card"
            >
              <span>Explore System & CFD Data</span>
              <ArrowRight className="w-4 h-4 text-ryetek-cyan" />
            </Link>
          </motion.div>
        </div>

        {/* ── DESKTOP: Two-column side by side ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3">
              <span className="hud-badge">PROPRIETARY RETROFIT SYSTEM</span>
            </div>

            <h2 className="hud-heading text-3xl sm:text-5xl font-extrabold text-ryetek-navy mb-6 mt-2">
              WEARGUARD™ DRYER DRUM<br />
              <span className="text-ryetek-cyan">CFD FLIGHTING TECHNOLOGY</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-[55ch]">
              Tired of frequent drum shell burn-through, uneven aggregate veil, and excessive fuel consumption? WearGuard™ replaces standard flighting with CFD-optimized lifters and high-chrome liners.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-ryetek-surface border border-ryetek-border p-5 rounded-xl border-l-4 border-l-ryetek-navy shadow-z-card">
                <div className="font-display text-3xl font-extrabold text-ryetek-navy">30% LESS</div>
                <div className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider font-bold">Fuel Burn per Tonne</div>
              </div>
              <div className="bg-ryetek-surface border border-ryetek-border p-5 rounded-xl border-l-4 border-l-ryetek-cyan shadow-z-card">
                <div className="font-display text-3xl font-extrabold text-ryetek-cyan">65% LESS</div>
                <div className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider font-bold">Drum Shell Wear</div>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-ryetek-cyan shrink-0" />
                <span>Interlocking bolt-in high-chrome flighting (No on-site welding)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-ryetek-cyan shrink-0" />
                <span>Full aggregate curtain veil calculated via CFD fluid dynamic modeling</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-ryetek-cyan shrink-0" />
                <span>Rapid 36-hour installation downtime guarantee</span>
              </div>
            </div>

            <Link
              href="/wearguard"
              className="inline-flex items-center justify-between gap-4 px-8 py-4 bg-ryetek-navy hover:bg-ryetek-navy-dark text-white font-display font-black text-sm uppercase tracking-wider rounded-xl shadow-z-card transition-colors duration-150 group"
            >
              <span>Explore System & Book CFD Audit</span>
              <ArrowRight className="w-4 h-4 text-ryetek-cyan transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-ryetek-navy shadow-2xl bg-slate-900">
              <img
                src="/images/wearguard-parts.png"
                alt="WearGuard Flighting Render"
                className="w-full h-[440px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ryetek-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <div className="font-mono text-xs text-ryetek-cyan font-bold uppercase">// CFD ROTARY DRUM INTERIOR</div>
                  <div className="font-display font-extrabold text-2xl uppercase">WearGuard™ Flighting Assembly</div>
                </div>
                <ShieldCheck className="w-8 h-8 text-ryetek-cyan" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
