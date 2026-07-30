'use client';

import React, { useEffect, useRef } from 'react';
import { Award, Shield, CheckCircle2, Factory, Wrench, Cpu, Users } from 'lucide-react';
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

export default function AboutPageClient() {
  const headingRef = useHudHeading();

  const companyStats = [
    { label: 'AUSTRALIAN STANDARDS', value: '100% COMPLIANT', desc: 'AS 4100, AS 1210 & AS/NZS 1170 certified engineering.' },
    { label: 'FABRICATION FACILITY', value: 'VICTORIA, AU', desc: 'Heavy structural steel plate fabrication & assembly.' },
    { label: 'WEARGUARD™ RETROFITS', value: '65% EROSION REDUCTION', desc: 'Proprietary CFD aggregate flighting drum technology.' },
    { label: 'PLANT CAPABILITY', value: '100 – 400 TPH', desc: 'High-throughput continuous & batching plant systems.' },
  ];

  const corePillars = [
    {
      icon: Factory,
      title: 'Heavy Structural Integrity',
      desc: 'Built with thick-walled Australian steel plate designed to withstand continuous abrasive aggregate impact and extreme thermal cycling.',
    },
    {
      icon: Cpu,
      title: 'CFD Fluid Dynamics',
      desc: 'Advanced computational modeling of internal drum veil curtains, heat transfer coefficients, and exhaust draft kinetics.',
    },
    {
      icon: Wrench,
      title: 'Turnkey Retrofits & Upgrades',
      desc: 'Seamless bolt-in field retrofits for OEM rotary dryers, pugmill mixers, and bitumen heating tanks with minimal plant downtime.',
    },
    {
      icon: Users,
      title: 'Direct Engineer Access',
      desc: 'Work directly with senior Australian mechanical engineers from initial site layout design to commissioning.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header Section */}
      <section className="py-16 sm:py-24 bg-ryetek-navy text-white border-b border-ryetek-cyan/30 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <div className="flex justify-center mb-4">
            <span className="hud-badge text-white bg-white/10 border-white/20">
              AUSTRALIAN INDUSTRIAL ENGINEERING
            </span>
          </div>
          <h1
            ref={headingRef}
            className="hud-heading text-4xl sm:text-6xl font-extrabold text-white mt-2 leading-tight tracking-tight"
          >
            ABOUT RYETEK ENGINEERING
          </h1>
          <p className="text-slate-300 text-base sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Dedicated to designing, manufacturing, and retrofitting high-performance industrial plant equipment built for Australian aggregate, concrete, and mining sectors.
          </p>
        </div>
      </section>

      {/* Main Balanced 2-Column Section */}
      <section className="py-16 sm:py-24 bg-ryetek-surface border-b border-ryetek-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          {/* Equal 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
            
            {/* Our Engineering Philosophy Card */}
            <div className="bg-white border border-ryetek-border rounded-2xl p-8 sm:p-10 shadow-z-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-ryetek-navy text-white flex items-center justify-center shrink-0 shadow-md">
                    <Award className="w-6 h-6 text-ryetek-cyan" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-ryetek-cyan font-bold uppercase tracking-wider">// CORE MISSION</span>
                    <h2 className="text-2xl sm:text-3xl text-ryetek-navy font-extrabold leading-tight">
                      Our Engineering Philosophy
                    </h2>
                  </div>
                </div>
                
                <p className="text-slate-700 text-base leading-relaxed mb-4">
                  At Ryetek Engineering, we believe industrial machinery should be built with uncompromised structural integrity. We combine heavy-plate Australian steel fabrication with modern Computational Fluid Dynamics (CFD) to solve chronic wear and thermal efficiency bottlenecks.
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  Whether designing custom batching plants from the ground up or retrofitting existing rotary dryers with our WearGuard™ system, our focus is maximum plant uptime, safety, and long service life.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500 font-bold uppercase tracking-wider">FABRICATED IN VICTORIA</span>
                <span className="font-mono text-xs text-ryetek-navy font-bold">EST. AUSTRALIA</span>
              </div>
            </div>

            {/* Standards & Compliance Card */}
            <div className="bg-white border border-ryetek-border rounded-2xl p-8 sm:p-10 shadow-z-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-ryetek-navy text-white flex items-center justify-center shrink-0 shadow-md">
                    <Shield className="w-6 h-6 text-ryetek-cyan" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-ryetek-cyan font-bold uppercase tracking-wider">// GOVERNANCE</span>
                    <h2 className="text-2xl sm:text-3xl text-ryetek-navy font-extrabold leading-tight">
                      Standards & Compliance
                    </h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Every plant structure, pressure vessel, and electrical cabinet designed by Ryetek is certified under strict Australian standards:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ryetek-cyan shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-ryetek-navy font-bold text-base">AS 4100 — Steel Structures Code</strong>
                      <span className="text-slate-600 text-xs">Structural steel framing, truss calculations, and load capacity.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ryetek-cyan shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-ryetek-navy font-bold text-base">AS/NZS 1170 — Structural Design Actions</strong>
                      <span className="text-slate-600 text-xs">Wind region compliance, seismic actions, and dead/live load factors.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ryetek-cyan shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-ryetek-navy font-bold text-base">AS 1210 — Pressure Vessels</strong>
                      <span className="text-slate-600 text-xs">Thermal oil jacketed storage tanks and compressed air receivers.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ryetek-cyan shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-ryetek-navy font-bold text-base">AS/NZS 3000 — Wiring Rules</strong>
                      <span className="text-slate-600 text-xs">Electrical safety, IP65 control enclosures, and emergency stop interlocks.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/standards"
                  className="font-mono text-xs text-ryetek-cyan hover:underline font-bold uppercase tracking-wider"
                >
                  View Full Compliance Matrix →
                </Link>
              </div>
            </div>

          </div>

          {/* Key Plant Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {companyStats.map((stat, idx) => (
              <div key={idx} className="bg-white border border-ryetek-border p-6 rounded-xl shadow-z-card">
                <div className="font-mono text-[0.7rem] text-ryetek-cyan font-bold uppercase tracking-wider mb-2">
                  [{stat.label}]
                </div>
                <div className="font-display font-extrabold text-2xl text-ryetek-navy mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 4 Pillars Grid */}
          <div className="bg-white border border-ryetek-border rounded-2xl p-8 sm:p-12 shadow-z-card">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex justify-center mb-3">
                <span className="hud-badge">ENGINEERING EXCELLENCE</span>
              </div>
              <h2 className="hud-heading text-3xl sm:text-4xl font-extrabold text-ryetek-navy">
                HOW WE BUILD FOR AUSTRALIA
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {corePillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-ryetek-surface/50">
                    <div className="w-12 h-12 rounded-lg bg-ryetek-navy text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-6 h-6 text-ryetek-cyan" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-ryetek-navy mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-12 bg-ryetek-navy text-white text-center border-t border-ryetek-cyan/30">
        <div className="max-w-4xl mx-auto px-5">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl mb-4">
            READY TO DISCUSS YOUR PLANT REQUIREMENTS?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Speak directly with our senior engineering team for technical evaluations, drum audits, or custom plant quotes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-ryetek-cyan hover:bg-ryetek-cyan-bright text-white font-display font-black text-sm uppercase tracking-wider rounded shadow-z-card transition-colors duration-150"
            >
              Contact Engineering Team
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-display font-bold text-sm uppercase tracking-wider rounded transition-colors duration-150"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
