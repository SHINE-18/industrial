'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function TermsPageClient() {
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
            COMMERCIAL & TECHNICAL TERMS
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
            TERMS & EQUIPMENT SPECIFICATIONS
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl">
            Commercial terms of supply, fabrication warranties, and technical project boundaries for Ryetek plant equipment.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-ryetek-surface border-b border-ryetek-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 bg-white p-8 sm:p-12 border border-ryetek-border rounded-xl shadow-z-card space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h3 className="font-display font-extrabold text-xl text-ryetek-navy mb-3">1. Scope & Verification</h3>
            <p>
              Final dimensions, throughput ratings (TPH), electrical motor starter loads, and Australian compliance documentation must be validated project-by-project before manufacture, import, installation, or operation.
            </p>
          </div>

          <div>
            <h3 className="font-display font-extrabold text-xl text-ryetek-navy mb-3">2. Fabrication & Materials Warranty</h3>
            <p>
              All steel structures are fabricated in accordance with <strong>AS 4100</strong>. WearGuard™ high-chrome castings (450+ HBW) carry a 12-month abrasion guarantee under rated aggregate feeds.
            </p>
          </div>

          <div>
            <h3 className="font-display font-extrabold text-xl text-ryetek-navy mb-3">3. Commissioning & On-Site Handover</h3>
            <p>
              Ryetek provides complete factory acceptance testing (FAT), site commissioning inputs, operating manuals, and spare parts cataloging with every turnkey plant installation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
