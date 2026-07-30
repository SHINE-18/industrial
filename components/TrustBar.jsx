'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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

export default function TrustBar() {
  const stats = [
    { number: '15+',    label: 'Years Australian Expertise', accent: 'border-white' },
    { number: '450+',   label: 'Plant Systems Commissioned',  accent: 'border-ryetek-cyan' },
    { number: '65%',    label: 'Drum Shell Erosion Reduction', accent: 'border-white' },
    { number: 'AS 4100', label: 'Certified Structural Code',  accent: 'border-ryetek-cyan' },
  ];
  const headingRef = useHudHeading();

  return (
    <section className="bg-ryetek-navy text-white border-t border-b border-ryetek-cyan/30 py-12 sm:py-16 relative overflow-hidden">
      {/* Subtle Blueprint Grid on Dark Navy */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00A3E0_1px,transparent_1px),linear-gradient(to_bottom,#00A3E0_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Mobile: 2x2 grid, Desktop: 4-col strip */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`border-l-4 pl-4 sm:pl-5 ${stat.accent}`}
            >
              <div
                ref={index === 0 ? headingRef : null}
                className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-none tracking-tight"
              >
                {stat.number}
              </div>
              <div className="font-mono text-[0.65rem] sm:text-xs text-slate-300 uppercase tracking-widest font-bold mt-2.5 leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
