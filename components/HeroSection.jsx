'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, Cpu, Flame, Award } from 'lucide-react';
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

export default function HeroSection() {
  const headingRef = useHudHeading();

  return (
    <section className="relative bg-white text-ryetek-text border-b border-ryetek-border overflow-hidden">
      {/* CAD Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ryetek-cyan/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── MOBILE LAYOUT ── */}
      <div className="block lg:hidden relative z-10">
        <div className="px-5 pt-8 pb-6">
          <div className="mb-3">
            <span className="hud-badge">AUSTRALIAN HEAVY PLANT ENGINEERING</span>
          </div>

          <h1 className="text-[2.6rem] font-extrabold leading-[1.05] text-ryetek-navy mb-4" style={{ letterSpacing: '-0.01em' }}>
            ENGINEERING<br />
            SOLUTIONS.<br />
            <span className="text-ryetek-cyan">BUILT TO LAST.</span>
          </h1>

          <p className="text-base text-slate-600 mb-6 leading-relaxed">
            Turnkey aggregate batching plants, thermal dryers, bitumen storage, and CFD-analyzed{' '}
            <span className="text-ryetek-navy font-bold">WearGuard™ drum flighting</span>.
          </p>

          {/* HD Hero Image Banner Mobile */}
          <div className="relative w-full h-56 rounded-xl overflow-hidden border border-ryetek-border mb-6 shadow-z-card bg-slate-900">
            <img
              src="/images/asphalt-plant.png"
              alt="Ryetek Asphalt Batching Plant HD"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ryetek-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-[0.65rem] font-bold">
              <span>// 400 TPH CONTINUOUS MIX PLANT</span>
              <span className="text-ryetek-cyan">HD 8K SPEC</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <Link
              href="/services"
              className="flex items-center justify-center gap-3 w-full py-3.5 bg-ryetek-navy text-white font-display font-black text-base tracking-wider uppercase rounded transition-colors duration-150 shadow-z-card"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="w-4 h-4 text-ryetek-cyan" />
            </Link>
            <Link
              href="/wearguard"
              className="flex items-center justify-center gap-3 w-full py-3.5 bg-white border-2 border-ryetek-navy text-ryetek-navy font-display font-black text-base tracking-wider uppercase rounded transition-colors duration-150"
            >
              <ShieldCheck className="w-4 h-4 text-ryetek-cyan" />
              <span>WearGuard™ System</span>
            </Link>
          </div>
        </div>

        {/* Mobile Stats Card */}
        <div className="mx-5 mb-8 bg-ryetek-surface border border-ryetek-border rounded-xl p-5 shadow-z-card">
          <div className="font-mono text-[0.65rem] text-ryetek-navy font-bold tracking-widest uppercase mb-3">// ZEPPELIN CLASS PLANT SPECS</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white px-3.5 py-3 rounded-lg border-l-4 border-ryetek-navy">
              <div className="text-[0.6rem] text-slate-500 font-mono uppercase tracking-widest font-bold">Max Capacity</div>
              <div className="font-display text-2xl font-extrabold text-ryetek-navy mt-0.5">400 TPH</div>
            </div>
            <div className="bg-white px-3.5 py-3 rounded-lg border-l-4 border-ryetek-cyan">
              <div className="text-[0.6rem] text-slate-500 font-mono uppercase tracking-widest font-bold">Drum Life</div>
              <div className="font-display text-2xl font-extrabold text-ryetek-navy mt-0.5">+65%</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (split 2-column with HD Hero Visual) ── */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
          <div className="grid grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <motion.div
              className="col-span-7"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-4">
                <span className="hud-badge">AUSTRALIAN HEAVY PLANT ENGINEERING</span>
              </div>

              <h1 className="text-[5rem] font-extrabold leading-none text-ryetek-navy mb-6" style={{ letterSpacing: '-0.01em' }}>
                ENGINEERING<br />SOLUTIONS.<br />
                <span className="text-ryetek-cyan">BUILT TO LAST.</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-[54ch] mb-8 leading-[1.65]">
                Turnkey aggregate batching plants, custom bitumen storage systems, thermal dryers, and CFD-analyzed{' '}
                <span className="text-ryetek-navy font-bold">WearGuard™ drum flighting</span>{' '}
                engineered to withstand Australia's harshest operating environments.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 bg-ryetek-navy hover:bg-ryetek-navy-dark text-white font-display font-black text-lg tracking-wider uppercase rounded-xl transition-colors duration-150 shadow-z-card group">
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-5 h-5 text-ryetek-cyan group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/wearguard" className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-ryetek-navy text-ryetek-navy hover:bg-ryetek-surface font-display font-black text-lg tracking-wider uppercase rounded-xl transition-colors duration-150">
                  <ShieldCheck className="w-5 h-5 text-ryetek-cyan" />
                  <span>WearGuard™ System</span>
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="flex items-center gap-6 pt-6 border-t border-slate-200 text-xs font-mono text-slate-600 font-bold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-ryetek-cyan" />
                  <span>AS 4100 STRUCTURAL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-ryetek-cyan" />
                  <span>AS 1210 PRESSURE</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-ryetek-cyan" />
                  <span>CFD VERIFIED</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Ultra-HD Hero Image Card with Spec Overlays */}
            <motion.div
              className="col-span-5 relative"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Floating Floating HUD Badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -top-5 -left-5 z-30 bg-white/95 backdrop-blur-md border border-ryetek-border px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2.5"
              >
                <Cpu className="w-4 h-4 text-ryetek-cyan" />
                <span className="font-mono text-xs font-extrabold text-ryetek-navy">AS 4100 CERTIFIED STEEL</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-5 z-30 bg-white/95 backdrop-blur-md border border-ryetek-border px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2.5"
              >
                <Flame className="w-4 h-4 text-ryetek-cyan" />
                <span className="font-mono text-xs font-extrabold text-ryetek-navy">CFD AIRFLOW OPTIMIZED</span>
              </motion.div>

              {/* Main HD Plant Photo Frame */}
              <div className="bg-white border-2 border-ryetek-navy rounded-2xl overflow-hidden shadow-2xl relative z-10 group">
                <div className="relative w-full h-[460px] bg-slate-900 overflow-hidden">
                  <img
                    src="/images/asphalt-plant.png"
                    alt="Ryetek Asphalt Batching Plant Ultra HD Brochure Hero"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ryetek-navy/85 via-ryetek-navy/20 to-transparent" />
                  
                  {/* Photo Overlay Data */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="font-mono text-xs text-ryetek-cyan font-bold uppercase tracking-wider mb-1">
                      // BROCHURE HERO SPECIFICATION
                    </div>
                    <h3 className="font-display font-extrabold text-2xl uppercase mb-3">
                      CONTINUOUS BATCHING PLANT
                    </h3>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/20">
                      <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded border border-white/20">
                        <div className="text-[0.6rem] font-mono text-slate-300 uppercase font-bold">THROUGHPUT RATE</div>
                        <div className="font-display text-2xl font-extrabold text-white">400 TPH</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded border border-white/20">
                        <div className="text-[0.6rem] font-mono text-slate-300 uppercase font-bold">DRUM EROSION</div>
                        <div className="font-display text-2xl font-extrabold text-ryetek-cyan">-65%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
