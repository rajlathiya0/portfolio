/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#000000',
        panel: '#0d1b2a',
        panel2: '#1a3040',
        accent: '#5ba3c9',
        'accent-light': '#a0b4c8',
        'accent-bright': '#4fc3f7',
        'accent-dark': '#326d8c',
        steel: '#466e82',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        nav: ['Baloo 2', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'spin-rev': 'spin 18s linear infinite reverse',
        'spin-slowest': 'spin 50s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'grid-move': 'gridMove 22s linear infinite',
        'bg-float': 'bgFloat 16s ease-in-out infinite',
        scanline: 'scanline 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '64px 64px' },
        },
        bgFloat: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-20px,20px) scale(1.05)' },
        },
        scanline: {
          '0%, 100%': { transform: 'translateY(-10%)', opacity: '0' },
          '10%': { opacity: '0.5' },
          '50%': { transform: 'translateY(110%)', opacity: '0.5' },
          '60%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
