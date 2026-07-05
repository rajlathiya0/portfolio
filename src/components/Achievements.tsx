import { motion } from 'framer-motion'
import { achievements, certificates, education } from '../data'
import { SectionHeading } from './Section'

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Beyond The Code" lead="Milestones &" accent="Learning" />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Achievements */}
          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="glass card-glow rounded-2xl p-5 transition-all duration-300"
              >
                <div className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="mt-2 text-[15px] font-semibold text-white">{a.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">{a.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Education + certificates */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <div className="mb-4 font-mono text-xs uppercase tracking-wider text-white/50">Education</div>
              <div className="space-y-5">
                {education.map((e) => (
                  <div key={e.school} className="relative border-l border-white/10 pl-4">
                    <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                    <div className="text-sm font-semibold text-white">{e.degree}</div>
                    <div className="mt-0.5 text-[13px] text-white/50">{e.school}</div>
                    <div className="mt-1 font-mono text-[11px] text-accent">
                      {e.period} · {e.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="mb-4 font-mono text-xs uppercase tracking-wider text-white/50">
                Certifications
              </div>
              <div className="flex flex-wrap gap-2">
                {certificates.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[12px] text-white/60 transition-colors hover:border-accent/40 hover:text-white"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
