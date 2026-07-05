import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const start = performance.now()
    const duration = 2400
    let raf = 0
    const step = (t: number) => {
      const p = Math.min(100, ((t - start) / duration) * 100)
      setProgress(Math.floor(p))
      if (p < 100) {
        raf = requestAnimationFrame(step)
      } else {
        setTimeout(() => setDone(true), 400)
        setTimeout(onDone, 1000)
      }
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-base"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />

          <div className="relative flex flex-col items-center">
            {/* rotating rings + monogram */}
            <div className="relative mb-10 flex h-32 w-32 items-center justify-center">
              <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-accent border-r-accent/40" />
              <div className="absolute inset-3 animate-spin-rev rounded-full border border-dashed border-accent-light/30" />
              <motion.span
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="gradient-text font-sans text-4xl font-bold"
              >
                RL
              </motion.span>
            </div>

            <div className="mb-4 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.4em] text-accent">
              Initializing Sys
              <span className="inline-flex gap-0.5">
                <span className="h-1 w-1 animate-pulse rounded-full bg-accent" style={{ animationDelay: '0ms' }} />
                <span className="h-1 w-1 animate-pulse rounded-full bg-accent" style={{ animationDelay: '150ms' }} />
                <span className="h-1 w-1 animate-pulse rounded-full bg-accent" style={{ animationDelay: '300ms' }} />
              </span>
            </div>

            {/* progress */}
            <div className="h-[3px] w-72 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full gradient-bar transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-3 font-mono text-2xl font-semibold text-white/90">
              {progress}
              <span className="text-accent">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
