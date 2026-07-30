'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-white text-ryetek-text border-t border-ryetek-border pt-14 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── MOBILE: Accordion-style stacked columns ── */}
        <div className="space-y-10 mb-12 lg:hidden">
          {/* Brand & About */}
          <div>
            <Link href="/" onClick={handleNavClick} className="flex items-center gap-3 font-display font-extrabold text-xl tracking-wider text-ryetek-navy mb-4 group w-fit">
              <div className="w-9 h-9 bg-ryetek-navy text-white rounded flex items-center justify-center font-black text-lg shadow-z-card group-hover:bg-ryetek-cyan group-hover:text-white transition-colors duration-200">R</div>
              <span>RYETEK <span className="font-normal text-base text-ryetek-cyan">ENGINEERING</span></span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Australia's premier provider of heavy industrial plant engineering, aggregate batching, thermal dryers, and custom wear-reduction technology.
            </p>
            <span className="font-mono text-xs text-ryetek-navy border border-ryetek-navy/30 px-3 py-1 rounded inline-block font-bold bg-ryetek-surface">
              AUSTRALIAN OWNED & OPERATED
            </span>
          </div>

          {/* Contact info — always visible on mobile */}
          <div>
            <h4 className="text-ryetek-navy font-extrabold text-base mb-4 uppercase font-display">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-ryetek-cyan shrink-0" />
                <span>+61 (03) 9000 8800 / +61 437 433 890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-ryetek-cyan shrink-0" />
                <span>sales@ryetek.com.au</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-ryetek-cyan shrink-0" />
                <span>Warner, Brisbane QLD / Victoria, Australia</span>
              </li>
            </ul>
          </div>

          {/* Quick Links — mobile collapsed two-column grid */}
          <div>
            <h4 className="text-ryetek-navy font-extrabold text-base mb-4 uppercase font-display">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-600 font-medium">
              <Link href="/" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors">Home</Link>
              <Link href="/services" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors">Capabilities</Link>
              <Link href="/wearguard" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors font-bold text-ryetek-navy">WearGuard™</Link>
              <Link href="/about" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors">About Us</Link>
              <Link href="/contact" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors">Contact</Link>
              <Link href="/standards" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors">Standards</Link>
            </div>
          </div>
        </div>

        {/* ── DESKTOP: 5-column grid ── */}
        <div className="hidden lg:grid grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" onClick={handleNavClick} className="flex items-center gap-3 font-display font-extrabold text-2xl tracking-wider text-ryetek-navy mb-4 group">
              <div className="w-10 h-10 bg-ryetek-navy text-white rounded flex items-center justify-center font-black text-xl shadow-z-card group-hover:bg-ryetek-cyan group-hover:text-white transition-colors duration-200">R</div>
              <span>RYETEK <span className="font-normal text-lg text-ryetek-cyan">ENGINEERING</span></span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-6">
              Australia's premier provider of heavy industrial plant engineering, aggregate batching, thermal dryers, and custom wear-reduction technology.
            </p>
            <span className="font-mono text-xs text-ryetek-navy border border-ryetek-navy/30 px-3 py-1 rounded inline-block font-bold bg-ryetek-surface">
              AUSTRALIAN OWNED & OPERATED
            </span>
          </div>

          <div>
            <h4 className="text-ryetek-navy font-extrabold text-lg mb-4 uppercase font-display">Capabilities</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li><Link href="/services/concrete-asphalt" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors">Concrete & Asphalt Plants</Link></li>
              <li><Link href="/services/bitumen-storage" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors">Bitumen Storage Tanks</Link></li>
              <li><Link href="/services/thermal-systems" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors">Thermal Rotary Dryers</Link></li>
              <li><Link href="/services/material-handling" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors">Material Handling & Silos</Link></li>
              <li><Link href="/services/automation-control" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors">PLC & SCADA Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ryetek-navy font-extrabold text-lg mb-4 uppercase font-display">Products</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li><Link href="/wearguard" onClick={handleNavClick} className="text-ryetek-navy font-bold hover:underline">WearGuard™ Drum Retrofit</Link></li>
              <li><Link href="/services/wearguard-line" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors">CFD Thermal Flighting</Link></li>
              <li><Link href="/services/wearguard-line" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors">450+ HBW Wear Liners</Link></li>
              <li><Link href="/services/material-handling" onClick={handleNavClick} className="hover:text-ryetek-cyan transition-colors">Custom Steel Fabrication</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ryetek-navy font-extrabold text-lg mb-4 uppercase font-display">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-600 font-medium">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-ryetek-cyan shrink-0 mt-0.5" /><span>Warner, QLD / Victoria National Support</span></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-ryetek-cyan shrink-0" /><span>sales@ryetek.com.au</span></li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-ryetek-cyan shrink-0" /><span>+61 (03) 9000 8800</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-ryetek-border pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>© {new Date().getFullYear()} Ryetek Engineering Pty Ltd. All Rights Reserved.</div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-medium">
            <Link href="/privacy" onClick={handleNavClick} className="hover:text-ryetek-navy hover:underline">Privacy Policy</Link>
            <Link href="/terms" onClick={handleNavClick} className="hover:text-ryetek-navy hover:underline">Terms & Specs</Link>
            <Link href="/standards" onClick={handleNavClick} className="hover:text-ryetek-navy hover:underline">Engineering Standards</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
