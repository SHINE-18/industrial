/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ryetek: {
          dark:         '#FFFFFF',   // Pure Crisp White Main BG
          surface:      '#F8FAFC',   // Light Slate Surface Alternator
          card:         '#FFFFFF',   // Pure White Card
          'card-hover': '#F1F5F9',
          navy:         '#002B49',   // Deep Engineering Navy
          'navy-dark':  '#001E38',   // Hover Navy
          cyan:         '#2563EB',   // Electric Royal Cobalt Accent
          'cyan-bright':'#1D4ED8',   // Royal Cobalt Hover
          text:         '#0F172A',   // Deep Charcoal High-Contrast Body Text
          muted:        '#475569',   // Technical Slate Subtext
          border:       '#E2E8F0',   // Clean Gray Border
        }
      },
      fontFamily: {
        display: ['var(--font-barlow-condensed)', '"Barlow Condensed"', 'sans-serif'],
        body:    ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono:    ['var(--font-jetbrains-mono)', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'z-card':   '0 4px 20px rgba(15, 23, 42, 0.06)',
        'z-hover':  '0 12px 32px rgba(37, 99, 235, 0.15)',
        'z-nav':    '0 2px 12px rgba(15, 23, 42, 0.08)',
      }
    },
  },
  plugins: [],
};
