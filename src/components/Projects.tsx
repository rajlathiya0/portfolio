import { motion } from 'framer-motion'
import { projects } from '../data'
import { SectionHeading } from './Section'
import { ArrowIcon } from './Icons'

const CheckIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" aria-hidden>
    <circle cx="12" cy="12" r="10" fill={`${color}1a`} />
    <path d="m8 12.5 2.6 2.6L16.5 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[140px]" />

      <SectionHeading eyebrow="Product Builds" lead="Product" accent="Builds" />
      <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white/50">
        A mix of production automation, AI/ML systems, and full-stack products — from
        invoice-to-payment pipelines to real-time computer-vision surveillance.
      </p>

      <div className="relative mt-14 grid gap-7 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            data-cursor="Explore"
            className="group relative rounded-[22px] p-px transition-all duration-300"
            style={{
              background: `linear-gradient(140deg, ${p.accent}55, transparent 40%, transparent 70%, ${p.accent}30)`,
            }}
          >
            <div className="glass relative h-full overflow-hidden rounded-[21px] transition-all duration-300 group-hover:shadow-[0_0_50px_-16px_rgba(91,163,201,0.55)]">
              {/* browser-chrome image frame */}
              <div className="relative">
                <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.02] px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-3 font-mono text-[10px] text-white/30">{p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}</span>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/10 to-transparent" />
                  <span
                    className="absolute left-3 top-3 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur"
                    style={{ borderColor: `${p.accent}55`, color: p.accent, background: '#0b0f14aa' }}
                  >
                    {p.category}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-[#0b0f14aa] px-2.5 py-1 font-mono text-[10px] text-white/50 backdrop-blur">
                    {p.period}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent-bright">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.description}</p>

                <ul className="mt-4 space-y-2">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-[13px] text-white/55">
                      <CheckIcon color={p.accent} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 font-mono text-[10px] text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-accent/50 group-hover:text-accent-bright">
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/rajlathiya0"
          target="_blank"
          rel="noreferrer"
          data-cursor="GitHub"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-sm text-white/80 transition-colors hover:border-accent/50 hover:text-white"
        >
          See more on GitHub
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
