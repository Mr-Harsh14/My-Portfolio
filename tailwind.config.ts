import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          50: '#fafafa',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#292524',
          800: '#1c1917',
          900: '#0c0a09',
          950: '#0a0a0a',
        },
        accent: {
          DEFAULT: '#bef264',
          soft: '#d9f99d',
          deep: '#84cc16',
          glow: 'rgba(190, 242, 100, 0.35)',
        },
        paper: '#f5f4ef',
        paperDeep: '#eceae3',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3.5rem, 12vw, 11rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'mega': ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      backgroundImage: {
        'grid-dark': 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'grid-light': 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
        'radial-fade': 'radial-gradient(ellipse at center, transparent 0%, var(--tw-gradient-from) 70%)',
      },
      backgroundSize: {
        'grid': '64px 64px',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 80s linear infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.85)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
}

export default config
