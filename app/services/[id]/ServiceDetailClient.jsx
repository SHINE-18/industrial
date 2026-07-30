'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, PhoneCall, ArrowRight, Building2, Flame, Sun, Truck, Cpu } from 'lucide-react';
import { CAPABILITIES_DATA } from '../../../lib/capabilitiesData.js';

// Client-side lookup — keeps functions off the server-side serialization path
const ICON_MAP = { Building2, Flame, Sun, ShieldCheck, Truck, Cpu };

const EXTENDED_SPECS = {
  'concrete-asphalt': {
    tagline: 'High-throughput continuous pugmills & modular batching plants built for heavy infrastructure projects.',
    specs: [
      { label: 'Throughput Capacity', value: '100 – 400 TPH Continuous' },
      { label: 'Mix Types Supported', value: 'Dense-Grade Asphalt, Warm-Mix, HMA, Concrete' },
      { label: 'Structural Compliance', value: 'AS 4100 (Steel Structures), AS/NZS 1170' },
      { label: 'Weighing Accuracy', value: '±0.5% Load-Cell Certified Batching' },
      { label: 'Erection Time', value: 'Rapid Modular Skid (3–5 Days)' },
    ],
    features: [
      'Twin-shaft continuous pugmill mixers with wear-resistant Ni-Hard liner plates.',
      'Calibrated multi-bin aggregate cold feed hoppers with variable-speed belt feeders.',
      'Automated liquid asphalt and bitumen dosing valves synced with SCADA.',
      'Optional warm-mix asphalt foaming nozzles for reduced burner energy consumption.',
    ]
  },
  'bitumen-storage': {
    tagline: 'Thermal-oil heated, insulated bitumen storage and PMB high-shear agitation systems.',
    specs: [
      { label: 'Storage Capacity', value: '30,000L – 120,000L Vertical/Horizontal' },
      { label: 'Heating Medium', value: 'Indirect Thermal Oil Loop (Gas or Diesel fired)' },
      { label: 'Insulation Rating', value: '100mm High-Density Rockwool + Aluminum Cladding' },
      { label: 'Agitation System', value: 'High-Shear PMB Agitator (Polymer Modified Bitumen)' },
      { label: 'Pressure Standard', value: 'AS 1210 Pressure Vessel Compliance' },
    ],
    features: [
      'Zero-direct-flame thermal oil heating coils eliminate bitumen carbonization and coking.',
      'Automated temperature control loops with high-temp safety shutoffs.',
      'Load-cell mounted tanks for precise real-time inventory mass monitoring.',
      'Heavy-duty insulated bitumen transfer pumps with jacketed thermal headers.',
    ]
  },
  'thermal-systems': {
    tagline: 'Counter-flow aggregate dryers with CFD thermal flighting and low-emission burners.',
    specs: [
      { label: 'Dryer Shell Dimensions', value: '1.8m – 3.2m Diameter × 8m – 14m Length' },
      { label: 'Burner Rating', value: '15 MW – 35 MW Multi-Fuel Burner' },
      { label: 'Thermal Efficiency', value: '> 88% Heat Recovery Rate' },
      { label: 'Exhaust Filtration', value: '< 10 mg/Nm³ Pulse-Jet Baghouse Filter' },
      { label: 'Drive Mechanism', value: 'Friction Drive Trunnion Rollers with Hardened Tyres' },
    ],
    features: [
      'Counter-flow heat exchange design maximizes thermal transfer to damp aggregate.',
      'Integrated WearGuard™ flighting curtain prevents thermal bypass and shell hotspots.',
      'Variable-speed drive motors allow fine tuning of aggregate retention time.',
      'Heavy-duty exhaust ducting with automated damper controls for draft balancing.',
    ]
  },
  'wearguard-line': {
    tagline: 'Proprietary CFD-engineered flighting and wear-plate retrofit system for rotary drums.',
    specs: [
      { label: 'Wear Plate Hardness', value: '450+ HBW High-Chrome Steel Alloy' },
      { label: 'Drum Wear Reduction', value: 'Up to 65% Shell Erosion Mitigation' },
      { label: 'Fuel Savings', value: '20% – 30% Reduction per Tonne Dry Aggregate' },
      { label: 'Installation Downtime', value: '< 36 Hours Bolt-In Retrofit' },
      { label: 'Compatibility', value: 'Retrofits all OEM Asphalt & Concrete Dryer Drums' },
    ],
    features: [
      'Full-curtain aggregate veil creation calculated via Computational Fluid Dynamics.',
      'Interlocking bolt-in wear liner plates eliminate internal drum welding.',
      'Drastically reduces exhaust gas exit temperatures by capturing radiant energy.',
      'Includes 12-month wear rate guarantee and scheduled CFD performance audits.',
    ]
  },
  'material-handling': {
    tagline: 'Heavy-duty belt conveyors, continuous bucket elevators, and bulk storage silos.',
    specs: [
      { label: 'Conveyor Widths', value: '600mm – 1200mm Heavy-Duty Trough Belts' },
      { label: 'Elevator Capacity', value: 'Up to 250 TPH Continuous Vertical Lift' },
      { label: 'Silo Storage Range', value: '50 Tonne – 500 Tonne Cement & Fly Ash Silos' },
      { label: 'Belt Specification', value: 'EP Steel-Cord / Multi-Ply Abrasion Resistant Rubber' },
      { label: 'Safety Systems', value: 'Pull-Wire Switches, Underspeed Monitors, Belt Misalignment Sensors' },
    ],
    features: [
      'Heavy structural steel truss frames engineered for high wind loads (AS/NZS 1170.2).',
      'Impact bed loading zones with ceramic-lined chute liners at aggregate drop points.',
      'De-dusting filtration vents on storage silos with automatic reverse-pulse cleaning.',
      'Precision screw feeders with hardfaced auger flights for abrasive powders.',
    ]
  },
  'automation-control': {
    tagline: 'Industrial PLC MCC control cabinets, SCADA HMIs, and remote cloud plant telemetry.',
    specs: [
      { label: 'PLC Hardware', value: 'Siemens S7-1500 / Allen-Bradley ControlLogix' },
      { label: 'HMI Display', value: '19" Industrial Touchscreen IP65 Stainless Console' },
      { label: 'Cabinet Compliance', value: 'AS/NZS 3000 Electrical Safety Certified' },
      { label: 'Telemetry Support', value: 'MQTT / OPC-UA Real-Time Cloud Diagnostics' },
      { label: 'Batch Precision', value: 'Automatic Moisture Compensation & Recipe Control' },
    ],
    features: [
      'One-touch automatic plant startup and shutdown sequencing routines.',
      'Real-time weight scale telemetry with sub-second data logging and batch ticketing.',
      'Remote engineer diagnostic portal for instant troubleshooting via secure VPN.',
      'Custom MCC starter panels with VFD motor drives for energy-optimized fan control.',
    ]
  }
};

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

export default function ServiceDetailClient({ service }) {
  const details = EXTENDED_SPECS[service.id] || {
    tagline: service.desc,
    specs: service.items.map(item => ({ label: 'Specification', value: item })),
    features: service.items
  };

  const headingRef = useHudHeading();
  const relatedServices = CAPABILITIES_DATA.filter(s => s.id !== service.id).slice(0, 3);
  const IconComponent = ICON_MAP[service.iconName] || ShieldCheck;

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Header with AI Photo */}
      <section className="py-12 sm:py-20 bg-ryetek-navy text-white border-b border-ryetek-cyan/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={service.image} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs text-ryetek-cyan hover:underline uppercase tracking-wider mb-6 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Capabilities</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded bg-white/10 text-ryetek-cyan flex items-center justify-center border border-white/20">
              <IconComponent className="w-5 h-5" />
            </div>
            <span className="hud-badge text-white bg-white/10 border-white/20">
              [{service.category}]
            </span>
          </div>

          <h1
            ref={headingRef}
            className="hud-heading text-3xl sm:text-5xl font-extrabold text-white mt-2 leading-tight"
          >
            {service.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mt-4 leading-relaxed">
            {details.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/contact?subject=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-ryetek-cyan hover:bg-ryetek-cyan-bright text-white font-display font-black text-sm uppercase tracking-wider rounded shadow-z-card transition-colors duration-150"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Request Technical Quote</span>
            </Link>
            {service.id === 'wearguard-line' && (
              <Link
                href="/wearguard#auditForm"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-display font-black text-sm uppercase tracking-wider rounded transition-colors duration-150"
              >
                <ShieldCheck className="w-4 h-4 text-ryetek-cyan" />
                <span>Book CFD Audit</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Main Feature Image & Specs */}
      <section className="py-12 sm:py-20 bg-ryetek-surface border-b border-ryetek-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          {/* Main Photo Card */}
          <div className="mb-12 bg-white border border-ryetek-border rounded-2xl overflow-hidden shadow-z-card">
            <div className="relative w-full h-72 sm:h-96 bg-slate-900">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ryetek-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
                <div>
                  <div className="font-mono text-xs text-ryetek-cyan font-bold uppercase">// SYSTEM OVERVIEW PHOTO</div>
                  <div className="font-display font-extrabold text-2xl uppercase">{service.title}</div>
                </div>
                <span className="font-mono text-xs px-3 py-1.5 bg-white/20 backdrop-blur-md rounded border border-white/30 font-bold">
                  ZEPPELIN CLASS PRECISION
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Specs Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-ryetek-border rounded-xl p-6 sm:p-8 shadow-z-card mb-8">
                <h3 className="font-display font-extrabold text-2xl text-ryetek-navy mb-6">
                  TECHNICAL SPECIFICATIONS & METRICS
                </h3>

                <div className="divide-y divide-slate-200">
                  {details.specs.map((spec, index) => (
                    <div key={index} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                      <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="font-display font-extrabold text-base text-ryetek-navy text-right sm:text-left">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Highlights */}
              <div className="bg-white border border-ryetek-border rounded-xl p-6 sm:p-8 shadow-z-card">
                <h3 className="font-display font-extrabold text-2xl text-ryetek-navy mb-6">
                  SYSTEM DESIGN HIGHLIGHTS
                </h3>

                <ul className="space-y-4">
                  {details.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-ryetek-cyan shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Compliance Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-ryetek-navy text-white border border-ryetek-navy rounded-xl p-6 sm:p-8 shadow-z-card">
                <span className="hud-badge text-white bg-white/10 border-white/20 mb-4">
                  AUSTRALIAN STANDARDS
                </span>
                <h4 className="font-display font-extrabold text-2xl text-white mb-4">
                  CODE CERTIFIED ENGINEERING
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  All Ryetek plant machinery is designed in Victoria and fully compliant with Australian structural, thermal, and electrical standards.
                </p>

                <div className="space-y-2.5 font-mono text-xs text-slate-200 font-bold border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-ryetek-cyan">✓</span> AS 4100 — Structural Steel Code
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-ryetek-cyan">✓</span> AS/NZS 1170 — Wind & Seismic Load
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-ryetek-cyan">✓</span> AS 1210 — Pressure Vessels
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-ryetek-cyan">✓</span> AS/NZS 3000 — Electrical Wiring Rules
                  </div>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="bg-white border border-ryetek-border rounded-xl p-6 sm:p-8 shadow-z-card">
                <h4 className="font-display font-extrabold text-xl text-ryetek-navy mb-2">
                  NEED CUSTOM FABRICATION?
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Every plant site is unique. Speak directly with a Senior Ryetek Engineer to discuss layout constraints, aggregate moisture levels, or throughput targets.
                </p>
                <Link
                  href={`/contact?subject=${encodeURIComponent(service.title)}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-ryetek-navy hover:bg-ryetek-navy-dark text-white font-display font-bold text-sm uppercase tracking-wider rounded transition-colors duration-150"
                >
                  <span>Talk To An Engineer</span>
                  <ArrowRight className="w-4 h-4 text-ryetek-cyan" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 sm:py-16 bg-white border-b border-ryetek-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h3 className="font-display font-extrabold text-2xl text-ryetek-navy mb-8">
            EXPLORE OTHER PLANT CAPABILITIES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => {
              const RelIcon = ICON_MAP[rel.iconName] || Building2;
              return (
                <Link
                  key={rel.id}
                  href={`/services/${rel.id}`}
                  className="capability-card bg-ryetek-surface border border-ryetek-border p-6 rounded-xl block group shadow-z-card overflow-hidden"
                >
                  <div className="h-36 -mx-6 -mt-6 mb-4 overflow-hidden relative border-b border-slate-100">
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <RelIcon className="w-4 h-4 text-ryetek-navy" />
                    <span className="font-mono text-[0.65rem] text-ryetek-cyan font-bold uppercase tracking-widest">
                      [{rel.category}]
                    </span>
                  </div>
                  <h4 className="font-display font-extrabold text-xl text-ryetek-navy mb-2 group-hover:text-ryetek-cyan transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                    {rel.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
