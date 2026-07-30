'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, ShieldCheck, Cpu, ArrowRight, Sparkles } from 'lucide-react';
import { CAPABILITIES_DATA } from '../lib/capabilitiesData.js';

export const ICON_MAP = { Building2, ShieldCheck, Cpu };

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

export default function BentoGrid() {
  const headingRef = useHudHeading();
  const [hoveredId, setHoveredId] = useState(null);

  // 3 Core Featured Plant Cards
  const threeCards = [
    CAPABILITIES_DATA.find(c => c.id === 'concrete-asphalt'),
    CAPABILITIES_DATA.find(c => c.id === 'wearguard-line'),
    CAPABILITIES_DATA.find(c => c.id === 'automation-control'),
  ].filter(Boolean);

  return (
    <section className="bg-ryetek-surface border-b border-ryetek-border py-16 sm:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-3">
            <span className="hud-badge">END-TO-END INDUSTRIAL CAPABILITIES</span>
          </div>
          <h2
            ref={headingRef}
            className="hud-heading text-3xl sm:text-5xl font-extrabold text-ryetek-navy mt-2"
          >
            ENGINEERED PLANT SYSTEMS
          </h2>
          <p className="text-ryetek-muted text-base sm:text-lg mt-4 leading-relaxed">
            Hover over any capability card below to bring it forward into full focus.
          </p>
        </div>

        {/* ── 3-CARD OVERLAPPING FOCUS STACK GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative py-4 items-stretch">
          {threeCards.map((cap, index) => {
            const Icon = ICON_MAP[cap.iconName] || Building2;
            const isHovered = hoveredId === cap.id;
            const isAnyHovered = hoveredId !== null;

            // Determine card transformation & depth state
            let cardStateClasses = 'scale-100 opacity-100 z-10 shadow-z-card border-ryetek-border';
            if (isAnyHovered) {
              if (isHovered) {
                // Hovered card pops forward, expands, elevates, and gains cyan ring highlight
                cardStateClasses = 'scale-105 sm:scale-108 -translate-y-3 opacity-100 z-30 shadow-2xl border-ryetek-cyan ring-2 ring-ryetek-cyan/40 bg-white';
              } else {
                // Non-hovered sister cards shrink slightly, drop opacity, and recede behind
                cardStateClasses = 'scale-95 translate-y-2 opacity-40 z-0 blur-[0.6px] bg-slate-50 border-slate-200 pointer-events-auto';
              }
            }

            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(cap.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={[
                  'group relative rounded-2xl overflow-hidden border flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu',
                  cardStateClasses,
                ].join(' ')}
              >
                {/* Top Image Banner */}
                <div className="relative w-full h-52 sm:h-60 bg-slate-900 overflow-hidden border-b border-slate-100">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className={[
                      'w-full h-full object-cover object-center transition-transform duration-700 ease-out',
                      isHovered ? 'scale-110' : 'group-hover:scale-105',
                    ].join(' ')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ryetek-navy/70 via-transparent to-transparent" />
                  
                  {/* Category Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
                    <span className="font-mono text-[0.65rem] px-3 py-1 bg-white/95 backdrop-blur-sm text-ryetek-navy font-bold rounded uppercase tracking-wider shadow-sm">
                      [{cap.category}]
                    </span>
                    {cap.product && (
                      <span className="font-mono text-[0.65rem] px-3 py-1 bg-ryetek-cyan text-white font-bold rounded uppercase tracking-wider shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3 inline" />
                        SIGNATURE
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className={[
                        'w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm',
                        isHovered
                          ? 'bg-ryetek-navy text-white border border-ryetek-navy'
                          : 'bg-ryetek-navy/5 border border-ryetek-navy/10 text-ryetek-navy',
                      ].join(' ')}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl sm:text-2xl text-ryetek-navy font-extrabold leading-snug">
                        {cap.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {cap.desc}
                    </p>

                    {/* Sub-Systems Checklist */}
                    <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                      <div className="font-mono text-[0.68rem] text-slate-400 font-bold uppercase tracking-wider mb-2">
                        Included Sub-Systems:
                      </div>
                      {cap.items.slice(0, 3).map((item, i) => (
                        <div key={i} className="text-xs text-slate-700 font-medium flex items-center gap-2">
                          <span className="text-ryetek-cyan font-extrabold text-sm">›</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/services/${cap.id}`}
                      className="inline-flex items-center justify-between w-full py-3 px-4 bg-ryetek-surface border border-ryetek-border group-hover:border-ryetek-cyan text-ryetek-navy font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-colors duration-200"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight className="w-4 h-4 text-ryetek-cyan transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View Full Catalog Link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs text-ryetek-navy hover:text-ryetek-cyan font-bold uppercase tracking-wider transition-colors"
          >
            <span>View All 6 Engineering Divisions in Full Catalog</span>
            <ArrowRight className="w-4 h-4 text-ryetek-cyan" />
          </Link>
        </div>

      </div>
    </section>
  );
}
