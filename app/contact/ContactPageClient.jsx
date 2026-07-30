'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

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

export default function ContactPageClient() {
  const searchParams = useSearchParams();
  const prefilledSubject = searchParams ? searchParams.get('subject') || '' : '';
  const [submitted, setSubmitted] = useState(false);
  const headingRef = useHudHeading();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="py-12 sm:py-20 bg-ryetek-navy text-white border-b border-ryetek-cyan/30 text-center">
        <div className="max-w-4xl mx-auto px-5">
          <span className="hud-badge mb-3">
            TECHNICAL ENQUIRIES & SUPPORT
          </span>
          <h1
            ref={headingRef}
            className="hud-heading text-3xl sm:text-6xl font-extrabold text-white mt-3"
          >
            CONTACT ENGINEERING TEAM
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Get in touch with Ryetek engineers for project consultations, equipment quotes, or spare parts support.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-ryetek-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Mobile: form stacked on top, info below. Desktop: side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-8 bg-white p-8 rounded-2xl border border-ryetek-border shadow-z-card">
              <h3 className="text-2xl text-ryetek-navy font-extrabold mb-6">Send Us A Message</h3>

              {submitted && (
                <div className="mb-6 p-4 bg-ryetek-navy text-white text-sm rounded">
                  ✓ Thank you! Message sent! An engineer from Ryetek will respond shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-ryetek-navy uppercase mb-2 font-bold">Full Name *</label>
                    <input type="text" required className="w-full px-4 py-3 bg-ryetek-surface border border-ryetek-border rounded text-ryetek-navy focus:outline-none focus:border-ryetek-cyan" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-ryetek-navy uppercase mb-2 font-bold">Company Name *</label>
                    <input type="text" required className="w-full px-4 py-3 bg-ryetek-surface border border-ryetek-border rounded text-ryetek-navy focus:outline-none focus:border-ryetek-cyan" placeholder="Industrial Projects Corp" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-ryetek-navy uppercase mb-2 font-bold">Email Address *</label>
                    <input type="email" required className="w-full px-4 py-3 bg-ryetek-surface border border-ryetek-border rounded text-ryetek-navy focus:outline-none focus:border-ryetek-cyan" placeholder="john@domain.com.au" />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-ryetek-navy uppercase mb-2 font-bold">Phone Number *</label>
                    <input type="tel" required className="w-full px-4 py-3 bg-ryetek-surface border border-ryetek-border rounded text-ryetek-navy focus:outline-none focus:border-ryetek-cyan" placeholder="+61 400 000 000" />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-ryetek-navy uppercase mb-2 font-bold">Subject / Interest Area</label>
                  <input type="text" defaultValue={prefilledSubject} className="w-full px-4 py-3 bg-ryetek-surface border border-ryetek-border rounded text-ryetek-navy focus:outline-none focus:border-ryetek-cyan" placeholder="e.g. Concrete Plant / WearGuard Retrofit" />
                </div>

                <div>
                  <label className="block font-mono text-xs text-ryetek-navy uppercase mb-2 font-bold">Message Details *</label>
                  <textarea required className="w-full px-4 py-3 bg-ryetek-surface border border-ryetek-border rounded text-ryetek-navy min-h-[140px] focus:outline-none focus:border-ryetek-cyan" placeholder="Describe your project scope, capacity needs, or timeline..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-ryetek-cyan hover:bg-ryetek-cyan-bright text-white font-display font-black text-lg uppercase tracking-wider rounded shadow-z-card flex items-center justify-center gap-2 transition-colors duration-150">
                  <Send className="w-5 h-5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-ryetek-border shadow-z-card">
                <h4 className="text-ryetek-navy font-extrabold text-lg mb-4 uppercase font-display">Direct Contact</h4>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-ryetek-cyan shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-ryetek-navy font-bold">Headquarters & Service</strong>
                      <span>Victoria / Field Engineering Australia</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-ryetek-cyan shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-ryetek-navy font-bold">General Inquiries</strong>
                      <span>enquiries@ryetek.com.au</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-ryetek-cyan shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-ryetek-navy font-bold">Phone Support</strong>
                      <span>+61 (03) 9000 8800</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
