import { motion } from 'framer-motion'

const tokens: { label: string; className: string; duration: string; delay?: string }[] = [
  { label: '</>', className: 'left-[6%] top-[22%] text-3xl sm:text-4xl', duration: '8s' },
  { label: '{ }', className: 'right-[8%] top-[18%] text-2xl sm:text-3xl hidden sm:block', duration: '7s', delay: '0.5s' },
  { label: 'const dev = true;', className: 'left-[4%] bottom-[26%] text-xs sm:text-sm hidden md:block', duration: '9s', delay: '1s' },
  { label: 'npm run build', className: 'right-[5%] bottom-[30%] text-xs sm:text-sm hidden md:block', duration: '10s', delay: '0.3s' },
  { label: '01001', className: 'right-[10%] top-[42%] text-sm sm:text-base hidden lg:block', duration: '11s', delay: '0.8s' },
  { label: '<AI/>', className: 'left-[9%] top-[46%] text-sm sm:text-base hidden lg:block', duration: '8.5s', delay: '1.2s' },
  { label: 'git commit -m "ship"', className: 'left-[3%] top-[68%] text-[10px] sm:text-xs hidden lg:block', duration: '12s', delay: '0.6s' },
]

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base grid */}
      <div className="absolute inset-0 grid-bg animate-grid-move opacity-40" />

      {/* slow-rotating aurora conic gradient — classy, low-key movement */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 animate-spin-slowest opacity-[0.14]">
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0%, #4fc3f7 8%, transparent 20%, transparent 55%, #5ba3c9 65%, transparent 78%, transparent 100%)',
          }}
        />
      </div>

      {/* drifting gradient orbs */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]"
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-10 h-[380px] w-[380px] rounded-full bg-accent-bright/10 blur-[120px]"
        animate={{ x: [0, -25, 15, 0], y: [0, 15, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* vertical scanline sweep — subtle terminal feel */}
      <div className="absolute inset-x-0 top-0 h-full">
        <div className="animate-scanline absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-accent-bright/[0.05] to-transparent" />
      </div>

      {/* floating code tokens */}
      {tokens.map((t, i) => (
        <span
          key={i}
          className={`absolute animate-[float_var(--dur)_ease-in-out_infinite] select-none font-mono font-semibold text-accent-bright/[0.16] ${t.className}`}
          style={
            {
              '--dur': t.duration,
              animationDelay: t.delay ?? '0s',
            } as React.CSSProperties
          }
        >
          {t.label}
        </span>
      ))}

      {/* faint corner brackets — editor-window feel */}
      <div className="absolute left-6 top-24 h-10 w-10 border-l border-t border-accent/15 sm:left-10" />
      <div className="absolute bottom-24 right-6 h-10 w-10 border-b border-r border-accent/15 sm:right-10" />
    </div>
  )
}
