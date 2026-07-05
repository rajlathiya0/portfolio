import { motion } from 'framer-motion'
import { profile } from '../data'
import { ArrowIcon, DownloadIcon, GradCapIcon, PinIcon } from './Icons'
import HeroBackground from './HeroBackground'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16">
      {/* background layers */}
      <HeroBackground />

      {/* watermark name */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center">
        <span
          className="block whitespace-nowrap font-sans text-[15vw] font-extrabold leading-none text-white/[0.04] [-webkit-text-stroke:1px_rgba(91,163,201,0.18)]"
        >
          RAJ LATHIYA
        </span>
      </div>

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center">
        {/* avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mb-6 flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent/40" />
          <div className="absolute -inset-3 rounded-full bg-accent/15 blur-2xl" />
          <div className="absolute inset-0 animate-spin-slow">
            <span className="absolute left-1/3 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent-bright shadow-[0_0_14px_3px_rgba(79,195,247,0.9)]" />
          </div>
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-accent/30 sm:h-48 sm:w-48">
            <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" />
          </div>
        </motion.div>

        {/* location pill */}
        <motion.div
          {...fade(0.15)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5"
        >
          <PinIcon className="h-3.5 w-3.5 text-accent" />
          <span className="font-mono text-xs text-white/70">{profile.location}</span>
          <span className="relative ml-1 flex h-2 w-2">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
        </motion.div>

        {/* two-tone title */}
        <motion.h1
          {...fade(0.25)}
          className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl"
        >
          <span className="text-white">Software Developer </span>
          <span className="heading-italic not-italic">&amp; AI Enthusiast</span>
        </motion.h1>

        {/* degree — big & visible */}
        <motion.div
          {...fade(0.32)}
          className="mt-4 flex max-w-md flex-wrap items-center justify-center gap-2 text-center text-lg font-bold text-white/90 sm:text-2xl"
        >
          <GradCapIcon className="h-5 w-5 flex-shrink-0 text-accent-bright sm:h-7 sm:w-7" />
          <span>
            {profile.degree} <span className="gradient-text">({profile.degreeNote})</span>
          </span>
        </motion.div>

        {/* description */}
        <motion.p {...fade(0.4)} className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
          Hi, I'm <span className="font-semibold text-accent">{profile.name}</span>, a Data Analyst
          &amp; Full-Stack Developer. From automation and AI/ML systems to end-to-end web
          apps, I turn raw data into decisions and ideas into products that ship.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fade(0.5)} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            data-cursor="View"
            className="group inline-flex items-center gap-2 rounded-full gradient-bar px-6 py-3 font-medium text-white shadow-[0_0_30px_-8px_rgba(79,195,247,0.7)] transition-transform hover:scale-[1.03]"
          >
            View Projects
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            data-cursor="Download"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white/80 transition-colors hover:border-accent/50 hover:text-white"
          >
            <DownloadIcon className="h-4 w-4" />
            Resume
          </a>
        </motion.div>

        {/* stats */}
        <motion.div {...fade(0.65)} className="mt-12 grid w-full max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
          {profile.stats.map((s) => (
            <div key={s.label}>
              <div className="gradient-text font-sans text-2xl font-bold">{s.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-white/40">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-1 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  )
}
