'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, Cpu, Gauge } from 'lucide-react';

export default function PlantSchematicGraphic() {
  const [activeNode, setActiveNode] = useState('dryer');

  const nodes = [
    { id: 'feed',    name: 'Cold Feed Silos',       rate: '400 TPH', icon: Gauge,  desc: '4-Bin cold aggregate dosing system with load cell weigh feeders.' },
    { id: 'dryer',   name: 'WearGuard™ Dryer',      rate: '280°C',   icon: Flame,  desc: 'Counter-flow drum dryer with WearGuard™ full-veil flighting.' },
    { id: 'mixing',  name: 'Pugmill Tower',          rate: '3.5T',    icon: Gauge,  desc: 'Twin-shaft pugmill with synchronized bitumen dosing.' },
    { id: 'control', name: 'SCADA HMI',              rate: '100%',    icon: Cpu,    desc: 'Industrial PLC cabinet with real-time cloud diagnostic telemetry.' },
  ];

  const activeNodeData = nodes.find(n => n.id === activeNode);

  return (
    <div className="bg-white border border-ryetek-border rounded-2xl overflow-hidden shadow-z-card">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-8 py-5 border-b border-ryetek-border">
        <div>
          <div className="hud-badge mb-1">LIVE SCHEMATIC TELEMETRY</div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-ryetek-navy">PLANT FLOW PIPELINE</h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-ryetek-cyan font-bold bg-ryetek-surface px-3 py-1.5 rounded border border-ryetek-border">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>SYSTEM ACTIVE</span>
        </div>
      </div>

      {/* SVG — hidden on smallest screens, shown sm+ */}
      <div className="hidden sm:block w-full bg-[#001E38] px-6 py-6 relative overflow-hidden" style={{ minHeight: '220px' }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#002B49_1px,transparent_1px),linear-gradient(to_bottom,#002B49_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />
        <svg className="w-full relative z-10" viewBox="0 0 800 160" fill="none">
          {/* Pipeline line */}
          <path d="M 120 80 L 300 80 L 480 80 L 660 80" stroke="#002B49" strokeWidth="6" strokeLinecap="round"/>
          {/* Animated flow */}
          <motion.path
            d="M 120 80 L 300 80 L 480 80 L 660 80"
            stroke="#2563EB" strokeWidth="4" strokeDasharray="16 24"
            animate={{ strokeDashoffset: [0, -160] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
          />
          {/* Node 1 */}
          <g className="cursor-pointer" onClick={() => setActiveNode('feed')}>
            <rect x="70" y="44" width="100" height="72" rx="6" fill={activeNode === 'feed' ? '#2563EB' : '#002B49'} stroke="#2563EB" strokeWidth="2"/>
            <text x="120" y="84" textAnchor="middle" fill="#FFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">FEED</text>
            <text x="120" y="100" textAnchor="middle" fill="#93C5FD" fontSize="10" fontFamily="sans-serif">SILOS</text>
          </g>
          {/* Node 2 */}
          <g className="cursor-pointer" onClick={() => setActiveNode('dryer')}>
            <rect x="250" y="34" width="120" height="92" rx="8" fill={activeNode === 'dryer' ? '#2563EB' : '#002B49'} stroke="#2563EB" strokeWidth="2"/>
            <text x="310" y="80" textAnchor="middle" fill="#FFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">WEARGUARD™</text>
            <text x="310" y="98" textAnchor="middle" fill="#93C5FD" fontSize="10" fontFamily="sans-serif">DRUM DRYER</text>
          </g>
          {/* Node 3 */}
          <g className="cursor-pointer" onClick={() => setActiveNode('mixing')}>
            <rect x="430" y="40" width="110" height="80" rx="6" fill={activeNode === 'mixing' ? '#2563EB' : '#002B49'} stroke="#2563EB" strokeWidth="2"/>
            <text x="485" y="82" textAnchor="middle" fill="#FFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">PUGMILL</text>
            <text x="485" y="100" textAnchor="middle" fill="#93C5FD" fontSize="10" fontFamily="sans-serif">TOWER</text>
          </g>
          {/* Node 4 */}
          <g className="cursor-pointer" onClick={() => setActiveNode('control')}>
            <rect x="610" y="44" width="100" height="72" rx="6" fill={activeNode === 'control' ? '#2563EB' : '#002B49'} stroke="#2563EB" strokeWidth="2"/>
            <text x="660" y="84" textAnchor="middle" fill="#FFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">SCADA</text>
            <text x="660" y="100" textAnchor="middle" fill="#93C5FD" fontSize="10" fontFamily="sans-serif">HMI</text>
          </g>
        </svg>
      </div>

      {/* Mobile: Simple node selector buttons (no SVG needed) */}
      <div className="block sm:hidden bg-[#001E38] p-4">
        <div className="grid grid-cols-2 gap-2">
          {nodes.map((node) => {
            const Icon = node.icon;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className={`p-3 rounded-lg text-left border transition-colors ${
                  activeNode === node.id
                    ? 'bg-ryetek-cyan border-ryetek-cyan'
                    : 'bg-[#002B49] border-[#002B49] hover:border-ryetek-cyan'
                }`}
              >
                <Icon className="w-4 h-4 text-white mb-1" />
                <div className="font-mono text-[0.65rem] font-bold text-white uppercase leading-snug">{node.name}</div>
                <div className={`font-display text-lg font-extrabold ${activeNode === node.id ? 'text-white' : 'text-[#2563EB]'}`}>{node.rate}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Node Detail Panel */}
      <div className="px-5 sm:px-8 py-5 bg-ryetek-surface border-t border-ryetek-border">
        <div className="flex items-center gap-3">
          <div className="font-mono text-xs font-bold text-ryetek-cyan uppercase tracking-widest">[{activeNodeData?.id.toUpperCase()}]</div>
          <div className="font-display font-extrabold text-ryetek-navy text-base">{activeNodeData?.name}</div>
          <div className="ml-auto font-mono text-xs px-2 py-1 bg-ryetek-cyan text-white rounded font-bold">{activeNodeData?.rate}</div>
        </div>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">{activeNodeData?.desc}</p>
      </div>

      {/* Desktop: Node Button Row */}
      <div className="hidden sm:grid grid-cols-4 divide-x divide-ryetek-border border-t border-ryetek-border">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = activeNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`p-4 text-left transition-colors ${isSelected ? 'bg-ryetek-navy text-white' : 'bg-white text-slate-700 hover:bg-ryetek-surface'}`}
            >
              <Icon className={`w-4 h-4 mb-2 ${isSelected ? 'text-ryetek-cyan' : 'text-slate-500'}`} />
              <div className="font-mono text-[0.6rem] font-bold uppercase tracking-wider">{node.name}</div>
              <div className={`font-display font-extrabold text-xl ${isSelected ? 'text-ryetek-cyan' : 'text-ryetek-navy'}`}>{node.rate}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
