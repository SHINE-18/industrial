'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -9999, y: -9999 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia('(hover: none)').matches || window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, select, .capability-card, h1, h2, h3, h4, p, span')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkDevice);
    };
  }, [isVisible]);

  // Don't render cursor on mobile/touch devices or until first mouse move
  if (isMobile || !isVisible || mousePosition.x < 0) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovered ? 2.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 280, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-ryetek-cyan rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.4 : 1,
          opacity: isVisible ? (isHovered ? 0.9 : 0.4) : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 160, mass: 0.15 }}
      />
    </>
  );
}
