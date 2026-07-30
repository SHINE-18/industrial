import HeroSection from '../components/HeroSection.jsx';
import TrustBar from '../components/TrustBar.jsx';
import BentoGrid from '../components/BentoGrid.jsx';
import PlantSchematicGraphic from '../components/PlantSchematicGraphic.jsx';
import WearGuardSection from '../components/WearGuardSection.jsx';
import Link from 'next/link';
import { MessageSquare, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Heavy Industrial Plant Engineering & Batching Systems Australia',
  description: 'Australian leader in turnkey concrete batching, asphalt plants, bitumen storage, and CFD-optimized WearGuard™ drum retrofits.',
};

export default function HomePage() {
  return (
    <div>
      {/* Section 1: Hero Section (Crisp White + CAD Grid) */}
      <HeroSection />

      {/* Section 2: Trust Bar (Deep Navy #002B49 - Dark Break) */}
      <TrustBar />

      {/* Section 3: Engineered Plant Systems Capabilities (Light Surface #F8FAFC + Focus Cards) */}
      <BentoGrid />

      {/* Section 4: Interactive Plant Schematic (Dark Technical Schematic #001E38) */}
      <section className="section-std bg-[#001E38] text-white border-b border-ryetek-cyan/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#002B49_1px,transparent_1px),linear-gradient(to_bottom,#002B49_1px,transparent_1px)] bg-[size:48px_48px] opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex justify-center mb-3">
              <span className="hud-badge text-white bg-white/10 border-white/20">
                SCADA & PIPELINE TELEMETRY
              </span>
            </div>
            <h2 className="hud-heading text-3xl sm:text-5xl font-extrabold text-white mt-2">
              KINETIC PLANT SCHEMATIC
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              Interactive process flow of a Ryetek continuous batching plant. Select any node below to inspect real-time specs.
            </p>
          </div>

          <PlantSchematicGraphic />
        </div>
      </section>

      {/* Section 5: WearGuard Spotlight (Crisp White + Watermark Grid) */}
      <WearGuardSection />

      {/* Section 6: CTA Banner (Deep Engineering Navy #002B49) */}
      <section className="py-16 sm:py-20 bg-ryetek-navy text-white border-t border-ryetek-cyan/30 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00A3E0_1px,transparent_1px),linear-gradient(to_bottom,#00A3E0_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.06] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <div className="flex justify-center mb-4">
            <span className="hud-badge text-white bg-white/10 border-white/20">
              READY TO UPGRADE YOUR PLANT?
            </span>
          </div>
          <h2 className="hud-heading text-3xl sm:text-5xl font-extrabold text-white mb-6 mt-3">
            GET A CUSTOM TECHNICAL PROPOSAL
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Our Australian engineering team is ready to analyze your aggregate batching or drum drying requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-ryetek-cyan hover:bg-ryetek-cyan-bright text-white font-display font-black text-base uppercase tracking-wider rounded-xl shadow-z-card transition-colors duration-150"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Speak With An Engineer</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-display font-bold text-base uppercase tracking-wider rounded-xl transition-colors duration-150"
            >
              <span>Explore All Divisions</span>
              <ArrowRight className="w-4 h-4 text-ryetek-cyan" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
