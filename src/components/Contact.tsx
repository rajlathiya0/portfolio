import { motion } from 'framer-motion'
import { profile } from '../data'
import { SectionHeading } from './Section'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden pt-24 sm:pt-32">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-accent/12 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Ready To Collaborate?" lead="Get In" accent="Touch" align="left" />

        <p className="mt-5 max-w-lg text-white/55">
          I'm open to data, AI/ML, and full-stack opportunities. Have a project or a role in mind?
          Let's build something worth shipping.
        </p>

        <div className="mt-12 grid max-w-2xl gap-10 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-lg font-semibold text-accent">Email :</div>
            <a
              href={`mailto:${profile.email}`}
              data-cursor="Email"
              className="mt-2 block text-white/70 transition-colors hover:text-white"
            >
              {profile.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-lg font-semibold text-accent">Location :</div>
            <div className="mt-2 text-white/70">{profile.location}</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center gap-8"
        >
          <a href={profile.github} target="_blank" rel="noreferrer" data-cursor="GitHub" className="group inline-flex items-center gap-2 text-white/70 transition-colors hover:text-accent">
            <GithubIcon className="h-6 w-6" />
            <span className="border-b border-white/20 pb-0.5 group-hover:border-accent">Github</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" data-cursor="LinkedIn" className="group inline-flex items-center gap-2 text-white/70 transition-colors hover:text-accent">
            <LinkedinIcon className="h-6 w-6" />
            <span className="border-b border-white/20 pb-0.5 group-hover:border-accent">Linkedin</span>
          </a>
          <a href={`mailto:${profile.email}`} data-cursor="Email" className="group inline-flex items-center gap-2 text-white/70 transition-colors hover:text-accent">
            <span className="border-b border-white/20 pb-0.5 group-hover:border-accent">Email me</span>
          </a>
        </motion.div>
      </div>

      {/* big watermark name */}
      <div className="pointer-events-none mt-16 select-none overflow-hidden">
        <div className="whitespace-nowrap text-center font-sans text-[15vw] font-extrabold leading-[0.8] text-white/[0.04] [-webkit-text-stroke:1px_rgba(91,163,201,0.15)]">
          RAJ LATHIYA<span className="text-accent-bright/30">.</span>
        </div>
      </div>
    </section>
  )
}
