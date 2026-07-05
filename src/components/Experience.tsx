import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { experiences } from '../data'
import { SectionHeading } from './Section'

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null)

  // Scroll progress across the timeline track — drives the filling line + node.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 65%', 'end 60%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  const lineScale = progress
  const nodeTop = useTransform(progress, [0, 1], ['0%', '100%'])
  const nodeOpacity = useTransform(progress, [0, 0.02, 0.98, 1], [0, 1, 1, 0])

  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-5 py-24 sm:py-32">
      <SectionHeading eyebrow="Where It All Started" lead="Engineered" accent="Growth" />

      <div ref={trackRef} className="relative mt-16">
        {/* base line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-white/8 sm:left-[9px]" />
        {/* filling line */}
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[7px] top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-accent via-accent-bright to-accent sm:left-[9px]"
        />
        {/* glowing follower node */}
        <motion.div
          style={{ top: nodeTop, opacity: nodeOpacity }}
          className="absolute left-[7px] z-10 -translate-x-1/2 sm:left-[9px]"
        >
          <span className="block h-4 w-4 rounded-full bg-accent-bright shadow-[0_0_18px_5px_rgba(79,195,247,0.8)]" />
          <span className="absolute inset-0 animate-ping rounded-full bg-accent-bright/60" />
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="relative pl-9 sm:pl-12"
            >
              {/* static node marker */}
              <span className="absolute left-0 top-7 flex h-[18px] w-[18px] items-center justify-center sm:left-[1px]">
                <span className="absolute h-[18px] w-[18px] rounded-full bg-accent/20" />
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>

              <div className="glass card-glow rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-mono text-xs text-accent">{exp.period}</div>
                  {exp.current && (
                    <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                      Current
                    </span>
                  )}
                </div>

                {/* company name gets the same treatment as the big section title, scaled down */}
                <h3 className="mt-2 text-2xl font-extrabold uppercase tracking-tight sm:text-[28px]">
                  <span className="heading-italic">{exp.company}</span>
                </h3>
                <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-[15px] font-semibold text-white">{exp.role}</span>
                  <span className="text-sm text-white/40">· {exp.location}</span>
                </div>

                <ul className="mt-4 space-y-2.5 text-sm text-white/60">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-bright" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
