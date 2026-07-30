'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PhoneCall, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Capabilities', path: '/services' },
    { name: 'WearGuard™ System', path: '/wearguard', badge: 'PRO' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-ryetek-border shadow-z-nav">
      {/* Top Utility Bar */}
      <div className="bg-ryetek-surface py-1.5 px-4 sm:px-8 border-b border-ryetek-border text-xs font-mono text-slate-600 hidden sm:flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-ryetek-navy font-bold">
            <Globe className="w-3.5 h-3.5 text-ryetek-cyan" />
            Ryetek Australia & Oceania
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600 font-medium">AS 4100 / AS 1210 Certified Plant Engineering</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-700 font-semibold">HQ Hotline: +61 (03) 9000 8800</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link
            href="/"
            onClick={handleNavClick}
            className="flex items-center gap-3 font-display font-extrabold text-2xl tracking-wider text-ryetek-navy group"
          >
            <div className="w-10 h-10 bg-ryetek-navy text-white rounded flex items-center justify-center font-black text-xl shadow-z-card group-hover:bg-ryetek-cyan group-hover:text-white transition-colors duration-200">
              R
            </div>
            <span>
              RYETEK <span className="font-normal text-lg text-ryetek-cyan">ENGINEERING</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={handleNavClick}
                  className={`font-display text-base font-bold uppercase tracking-wider transition-colors relative py-2 ${
                    isActive ? 'text-ryetek-navy' : 'text-slate-600 hover:text-ryetek-navy'
                  }`}
                >
                  {item.badge && (
                    <span className="font-mono text-[10px] px-1.5 py-0.5 bg-ryetek-cyan/10 border border-ryetek-cyan text-ryetek-navy font-bold rounded mr-1.5 align-middle">
                      {item.badge}
                    </span>
                  )}
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-ryetek-cyan rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Header Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ryetek-navy hover:bg-ryetek-navy-dark text-white font-display font-black text-sm tracking-wider uppercase rounded shadow-z-card transition-colors duration-150"
            >
              <PhoneCall className="w-4 h-4 text-ryetek-cyan" />
              <span>Get In Touch</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ryetek-navy p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-ryetek-border px-6 py-6 space-y-4 shadow-z-nav"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={handleNavClick}
                className="block font-display text-xl uppercase tracking-wider text-ryetek-navy hover:text-ryetek-cyan py-2 font-bold"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="block w-full text-center py-3 bg-ryetek-navy text-white font-display font-black uppercase tracking-wider rounded"
            >
              Contact Engineering Team
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
