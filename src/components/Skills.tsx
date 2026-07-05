import { motion } from 'framer-motion'
import { skillGroups } from '../data'
import { SectionHeading } from './Section'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export default function Skills() {
  return (
    <section id="stacks" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-dark/10 blur-[140px]" />
      <img
        src="/network.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 w-[min(1100px,120%)] -translate-x-1/2 -translate-y-1/2 animate-bg-float opacity-50"
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Built With Precision" lead="Stack" accent="Mastery" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
              className="glass card-glow rounded-2xl p-6 transition-all duration-300"
            >
              <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {group.title}
              </div>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                {group.skills.map((s) => (
                  <div
                    key={s.name}
                    data-cursor={s.name}
                    className="group flex aspect-square flex-col items-center justify-center gap-1.5 rounded-xl border border-white/5 bg-white/[0.02] p-2 transition-all hover:border-accent/40 hover:bg-accent/5"
                    title={s.name}
                  >
                    <img
                      src={`${CDN}/${s.icon}.svg`}
                      alt={s.name}
                      loading="lazy"
                      className="h-7 w-7 opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <span className="text-center text-[9px] leading-tight text-white/40 group-hover:text-white/70">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
