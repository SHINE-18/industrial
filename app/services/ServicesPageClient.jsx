'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CAPABILITIES_DATA } from '../../lib/capabilitiesData.js';
import { Building2, Flame, Sun, ShieldCheck, Truck, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ICON_MAP = { Building2, Flame, Sun, ShieldCheck, Truck, Cpu };

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

export default function ServicesPageClient() {
  const [activeFilter, setActiveFilter] = useState('all');
  const headingRef = useHudHeading();

  const categories = ['all', 'Batching & Mixing', 'Bitumen & Thermal', 'Material Handling', 'Automation & R&D'];

  const filteredData = activeFilter === 'all'
    ? CAPABILITIES_DATA
    : CAPABILITIES_DATA.filter(item => item.category === activeFilter);

  return (
    <div className="bg-white min-h-screen">
      <section className="py-12 sm:py-16 bg-ryetek-navy text-white border-b border-ryetek-cyan/30 text-center">
        <div className="max-w-4xl mx-auto px-5">
          <span className="hud-badge text-white bg-white/10 border-white/20 mb-3">
            ENGINEERING SPECS & CAPABILITIES
          </span>
          <h1 ref={headingRef} className="hud-heading text-3xl sm:text-6xl font-extrabold text-white mt-3">
            PLANT SYSTEM CAPABILITIES
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Complete technical breakdown of Ryetek Engineering's core capability divisions for batching, thermal processing, bitumen, and machine components.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-ryetek-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all duration-150 ${
                  activeFilter === cat
                    ? 'bg-ryetek-navy text-white shadow-z-card font-black'
                    : 'bg-white text-ryetek-navy border border-ryetek-border hover:border-ryetek-cyan'
                }`}
              >
                {cat === 'all' ? 'All Categories (6)' : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((cap) => {
              const Icon = ICON_MAP[cap.iconName];
              return (
                <motion.div
                  key={cap.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="capability-card bg-white border border-ryetek-border rounded-xl flex flex-col justify-between shadow-z-card overflow-hidden group"
                >
                  <div className="relative w-full h-48 bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ryetek-navy/50 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 font-mono text-[0.65rem] px-2.5 py-1 bg-white/95 text-ryetek-navy font-bold rounded uppercase tracking-wider shadow-sm">
                      [{cap.category}]
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded bg-ryetek-navy/5 border border-ryetek-navy/10 text-ryetek-navy flex items-center justify-center shrink-0">
                          {Icon && <Icon className="w-4 h-4" />}
                        </div>
                        <h3 className="text-xl text-ryetek-navy font-bold">{cap.title}</h3>
                      </div>
                      <p className="text-ryetek-muted text-sm leading-relaxed mb-4">{cap.desc}</p>
                      <div className="border-t border-slate-150 pt-3 mb-6">
                        <div className="font-mono text-xs text-slate-800 mb-2 uppercase tracking-wider font-bold">Included Sub-Systems:</div>
                        <ul className="space-y-1">
                          {cap.items.map((item, i) => (
                            <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                              <span className="text-ryetek-cyan font-bold">›</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link
                      href={`/services/${cap.id}`}
                      className="inline-flex items-center justify-between w-full text-center py-3 px-4 bg-ryetek-surface border border-ryetek-border hover:border-ryetek-cyan text-ryetek-navy font-display font-bold text-sm uppercase tracking-wider rounded transition-colors duration-150"
                    >
                      <span>View Full Technical Specs</span>
                      <ArrowRight className="w-4 h-4 text-ryetek-cyan" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
