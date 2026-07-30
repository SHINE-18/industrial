'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Send, Gauge, Zap, Flame, RotateCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function WearGuardPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const headingRef = useHudHeading();

  // Active RPM state — defaults to 8 RPM (optimal)
  const [selectedRpm, setSelectedRpm] = useState(8);

  const rpmConfigs = {
    6: {
      rpm: 6,
      label: '6 RPM — LOW SPEED',
      image: '/images/rpm-6.png',
      veilDensity: '45%',
      retentionTime: '8.5 min',
      fuelSaved: '12%',
      shellErosion: '-30%',
      status: 'Partial Bottom Slide',
      desc: 'Lower rotation speed. Aggregate material slides along bottom lifters with minimal veil curtain formation across the gas stream.',
    },
    8: {
      rpm: 8,
      label: '8 RPM — OPTIMAL VEIL',
      image: '/images/rpm-8.png',
      veilDensity: '98%',
      retentionTime: '6.2 min',
      fuelSaved: '30%',
      shellErosion: '-65%',
      status: 'Optimal Full Curtain',
      desc: 'Calculated CFD ideal rotation speed. WearGuard™ flighting produces a dense 100% parabolic aggregate veil curtain, maximizing heat exchange.',
    },
    10: {
      rpm: 10,
      label: '10 RPM — HIGH VELOCITY',
      image: '/images/rpm-10.png',
      veilDensity: '88%',
      retentionTime: '5.0 min',
      fuelSaved: '24%',
      shellErosion: '-50%',
      status: 'High Velocity Cascade',
      desc: 'Accelerated rotation speed for damp, high-moisture aggregate feeds. Dense curtain with accelerated axial material transport.',
    },
    12: {
      rpm: 12,
      label: '12 RPM — MAX SPEED',
      image: '/images/rpm-12.png',
      veilDensity: '75%',
      retentionTime: '4.1 min',
      fuelSaved: '18%',
      shellErosion: '-40%',
      status: 'Centrifugal Throw',
      desc: 'Maximum drum rotation speed. Centrifugal force holds aggregate against lifters longer before cascading, suited for high-throughput runs.',
    },
  };

  const activeConfig = rpmConfigs[selectedRpm];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="py-12 sm:py-20 bg-ryetek-navy text-white border-b border-ryetek-cyan/30 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="/images/wearguard-callout.png" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <span className="hud-badge text-white bg-white/10 border-white/20 mb-4">
            SPECIALIZED PRODUCT LINE
          </span>
          <h1
            ref={headingRef}
            className="hud-heading text-3xl sm:text-6xl font-extrabold text-white mb-6 mt-3"
          >
            WEARGUARD™ RETROFIT SYSTEM
          </h1>
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Computational Fluid Dynamics (CFD) engineered dryer drum internal flighting & wear mitigation technology. Extended lifespan, reduced fuel consumption, and zero drum shell burn-through.
          </p>

          <a
            href="#auditForm"
            className="inline-flex items-center gap-3 px-8 py-4 bg-ryetek-cyan hover:bg-ryetek-cyan-bright text-white font-display font-black text-lg uppercase tracking-wider rounded shadow-z-card transition-colors duration-150"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>Request CFD Drum Audit</span>
          </a>
        </div>
      </section>

      {/* Product Showcase Photo Cards */}
      <section className="py-10 bg-white border-b border-ryetek-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-ryetek-border rounded-xl overflow-hidden shadow-z-card relative h-72 group">
              <img src="/images/wearguard-parts.png" alt="WearGuard Castings & Liners" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-ryetek-navy/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-mono text-xs text-ryetek-cyan font-bold uppercase">// 450+ HBW HIGH-CHROME CASTINGS</div>
                <div className="font-display font-extrabold text-xl">Mixer Paddle Tips & Wear Plates</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-ryetek-border rounded-xl overflow-hidden shadow-z-card relative h-72 group">
              <img src="/images/wearguard-callout.png" alt="WearGuard Flighting Cross Section" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-ryetek-navy/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-mono text-xs text-ryetek-cyan font-bold uppercase">// CFD FLIGHTING CURTAIN</div>
                <div className="font-display font-extrabold text-xl">Internal Drum Flighting Geometry</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE 4-RPM DRUM VEIL PHOTO SWITCHER ── */}
      <section className="py-12 sm:py-24 bg-ryetek-surface border-b border-ryetek-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Interactive Controls & Explanation */}
            <div className="lg:col-span-6">
              <span className="font-mono text-xs text-ryetek-cyan font-bold uppercase tracking-widest block mb-2">
                INTERACTIVE CFD SPEED ANALYSIS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ryetek-navy mb-4">
                THE SCIENCE OF DRUM FLIGHTING
              </h2>
              <p className="text-ryetek-muted text-base leading-relaxed mb-6">
                Click any rotation speed button below to inspect how WearGuard™ flight geometry alters aggregate curtain density, thermal transfer rate, and shell wear at different RPMs.
              </p>

              {/* 4 RPM Selector Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[6, 8, 10, 12].map((rpmVal) => {
                  const isActive = selectedRpm === rpmVal;
                  return (
                    <button
                      key={rpmVal}
                      onClick={() => setSelectedRpm(rpmVal)}
                      className={[
                        'p-4 rounded-xl border text-left transition-all duration-200 shadow-sm flex flex-col justify-between',
                        isActive
                          ? 'bg-ryetek-navy text-white border-ryetek-cyan ring-2 ring-ryetek-cyan/40 shadow-md'
                          : 'bg-white text-ryetek-navy border-ryetek-border hover:border-ryetek-cyan/60 hover:bg-slate-50',
                      ].join(' ')}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-display font-extrabold text-2xl ${isActive ? 'text-ryetek-cyan' : 'text-ryetek-navy'}`}>
                          {rpmVal} RPM
                        </span>
                        {rpmVal === 8 && (
                          <span className="font-mono text-[0.6rem] px-2 py-0.5 bg-ryetek-cyan text-white font-bold rounded uppercase">
                            OPTIMAL
                          </span>
                        )}
                      </div>
                      <span className={`font-mono text-[0.65rem] font-bold uppercase tracking-wider ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {rpmConfigs[rpmVal].status}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active RPM Details Box */}
              <div className="bg-white p-6 rounded-2xl border border-ryetek-border shadow-z-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-ryetek-navy text-white flex items-center justify-center font-extrabold font-display text-lg">
                    {activeConfig.rpm}
                  </div>
                  <div>
                    <div className="font-mono text-xs text-ryetek-cyan font-bold uppercase tracking-wider">// ACTIVE SPEED PARAMETER</div>
                    <h3 className="font-display font-extrabold text-xl text-ryetek-navy">{activeConfig.label}</h3>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {activeConfig.desc}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                  <div className="bg-ryetek-surface p-3 rounded-lg border border-slate-200">
                    <div className="text-[0.62rem] font-mono text-slate-500 uppercase font-bold">VEIL DENSITY</div>
                    <div className="font-display text-xl font-extrabold text-ryetek-navy">{activeConfig.veilDensity}</div>
                  </div>
                  <div className="bg-ryetek-surface p-3 rounded-lg border border-slate-200">
                    <div className="text-[0.62rem] font-mono text-slate-500 uppercase font-bold">RETENTION TIME</div>
                    <div className="font-display text-xl font-extrabold text-ryetek-navy">{activeConfig.retentionTime}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Dynamic HD Photo Display matching the Selected RPM */}
            <div className="lg:col-span-6">
              <div className="bg-white border-2 border-ryetek-navy rounded-2xl overflow-hidden shadow-2xl relative group">
                <div className="relative w-full h-[460px] bg-slate-900 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedRpm}
                      src={activeConfig.image}
                      alt={`WearGuard CFD Drum Photo at ${selectedRpm} RPM`}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover object-center"
                    />
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-ryetek-navy/90 via-ryetek-navy/20 to-transparent pointer-events-none" />

                  {/* Top HUD Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="font-mono text-xs px-3.5 py-1.5 bg-ryetek-navy/90 backdrop-blur-md text-white font-bold rounded border border-white/20 uppercase tracking-wider">
                      [CFD DRUM PHOTO: {selectedRpm} RPM]
                    </span>
                    <span className="font-mono text-xs px-3.5 py-1.5 bg-white/20 backdrop-blur-md text-white font-bold rounded border border-white/30 flex items-center gap-1.5">
                      <RotateCw className="w-3.5 h-3.5 text-ryetek-cyan animate-spin" style={{ animationDuration: `${14 - selectedRpm}s` }} />
                      <span>{selectedRpm} RPM ACTIVE</span>
                    </span>
                  </div>

                  {/* Bottom Telemetry Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <div className="font-mono text-xs text-ryetek-cyan font-bold uppercase tracking-wider mb-1">
                      // {activeConfig.label} TELEMETRY
                    </div>
                    <h3 className="font-display font-extrabold text-2xl uppercase mb-3">
                      {activeConfig.status}
                    </h3>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/20">
                      <div className="bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded border border-white/20">
                        <div className="text-[0.6rem] font-mono text-slate-300 uppercase font-bold">DRUM EROSION</div>
                        <div className="font-display text-2xl font-extrabold text-ryetek-cyan">{activeConfig.shellErosion}</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded border border-white/20">
                        <div className="text-[0.6rem] font-mono text-slate-300 uppercase font-bold">FUEL SAVED</div>
                        <div className="font-display text-2xl font-extrabold text-white">{activeConfig.fuelSaved}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Audit Request Form */}
      <section className="py-12 sm:py-24 bg-white" id="auditForm">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-10">
            <span className="hud-badge mb-3">
              REQUEST TECHNICAL AUDIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ryetek-navy mt-2">
              BOOK A WEARGUARD™ CFD AUDIT
            </h2>
            <p className="text-ryetek-muted mt-2">
              Provide your drum dimensions and aggregate specs for a customized CFD wear simulation report.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-ryetek-surface p-8 rounded-2xl border border-ryetek-border shadow-z-card space-y-6">
            {submitted && (
              <div className="p-4 bg-ryetek-navy text-white text-sm rounded">
                ✓ Thank you! Your WearGuard™ CFD audit request has been received. Our engineers will reach out within 24 hrs.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs text-ryetek-navy uppercase mb-2 font-bold">Full Name *</label>
                <input type="text" required className="w-full px-4 py-3 bg-white border border-ryetek-border rounded text-ryetek-navy focus:outline-none focus:border-ryetek-cyan" placeholder="John Smith" />
              </div>
              <div>
                <label className="block font-mono text-xs text-ryetek-navy uppercase mb-2 font-bold">Company / Quarry Name *</label>
                <input type="text" required className="w-full px-4 py-3 bg-white border border-ryetek-border rounded text-ryetek-navy focus:outline-none focus:border-ryetek-cyan" placeholder="Aggregate Resources Pty Ltd" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs text-ryetek-navy uppercase mb-2 font-bold">Email Address *</label>
                <input type="email" required className="w-full px-4 py-3 bg-white border border-ryetek-border rounded text-ryetek-navy focus:outline-none focus:border-ryetek-cyan" placeholder="john@quarry.com.au" />
              </div>
              <div>
                <label className="block font-mono text-xs text-ryetek-navy uppercase mb-2 font-bold">Phone Number *</label>
                <input type="tel" required className="w-full px-4 py-3 bg-white border border-ryetek-border rounded text-ryetek-navy focus:outline-none focus:border-ryetek-cyan" placeholder="+61 400 000 000" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs text-ryetek-navy uppercase mb-2 font-bold">Drum Diameter (meters)</label>
                <input type="text" className="w-full px-4 py-3 bg-white border border-ryetek-border rounded text-ryetek-navy focus:outline-none focus:border-ryetek-cyan" placeholder="e.g. 2.4m" />
              </div>
              <div>
                <label className="block font-mono text-xs text-ryetek-navy uppercase mb-2 font-bold">Current Burner Fuel Type</label>
                <select className="w-full px-4 py-3 bg-white border border-ryetek-border rounded text-ryetek-navy focus:outline-none focus:border-ryetek-cyan">
                  <option>Natural Gas</option>
                  <option>Diesel / Light Oil</option>
                  <option>LPG</option>
                  <option>Heavy Fuel Oil (HFO)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-ryetek-navy uppercase mb-2 font-bold">Aggregate & Moisture Notes</label>
              <textarea className="w-full px-4 py-3 bg-white border border-ryetek-border rounded text-ryetek-navy min-h-[120px] focus:outline-none focus:border-ryetek-cyan" placeholder="Describe aggregate hardness (e.g. Basalt, Granite), average moisture %, or shell wear hot spots..."></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-ryetek-cyan hover:bg-ryetek-cyan-bright text-white font-display font-black text-lg uppercase tracking-wider rounded shadow-z-card flex items-center justify-center gap-2 transition-colors duration-150">
              <Send className="w-5 h-5" />
              <span>Submit For Free CFD Audit Report</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
