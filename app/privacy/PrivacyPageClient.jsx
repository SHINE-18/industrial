'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function PrivacyPageClient() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-12 sm:py-16 bg-ryetek-navy text-white border-b border-ryetek-cyan/30">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-ryetek-cyan hover:underline uppercase tracking-wider mb-6 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <span className="hud-badge text-white bg-white/10 border-white/20 mb-3 block w-fit">
            LEGAL & GOVERNANCE
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
            PRIVACY POLICY & DATA GOVERNANCE
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl">
            Ryetek Engineering Pty Ltd is committed to protecting client data, telemetry feeds, and engineering design inputs across Australia.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-ryetek-surface border-b border-ryetek-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 bg-white p-8 sm:p-12 border border-ryetek-border rounded-xl shadow-z-card space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h3 className="font-display font-extrabold text-xl text-ryetek-navy mb-3">1. Information Collection</h3>
            <p>
              Ryetek Engineering collects commercial contact information, plant equipment dimensions, and CFD audit specifications submitted through our forms or telemetry portals to deliver tailored plant engineering proposals and service diagnostics.
            </p>
          </div>

          <div>
            <h3 className="font-display font-extrabold text-xl text-ryetek-navy mb-3">2. SCADA & Telemetry Confidentiality</h3>
            <p>
              All SCADA HMI metrics, batch weights, and telemetry logs transmitted from customer sites are encrypted in transit and at rest. Proprietary mix designs and plant recipes are kept strictly confidential under non-disclosure protocols.
            </p>
          </div>

          <div>
            <h3 className="font-display font-extrabold text-xl text-ryetek-navy mb-3">3. Australian Privacy Act Compliance</h3>
            <p>
              We comply with the <em>Australian Privacy Act 1988 (Cth)</em> and the Australian Privacy Principles (APPs). We never sell or share commercial data with third-party advertising networks.
            </p>
          </div>

          <div>
            <h3 className="font-display font-extrabold text-xl text-ryetek-navy mb-3">4. Contact Privacy Officer</h3>
            <p>
              For privacy enquiries or data deletion requests, contact our legal team at <a href="mailto:sales@ryetek.com.au" className="text-ryetek-cyan font-bold underline">sales@ryetek.com.au</a> or call +61 437 433 890.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
