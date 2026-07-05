import { motion } from 'framer-motion'

/**
 * Section heading in the reference style:
 *   small eyebrow subtitle  +  BIG two-tone title
 *   (white lead word + italic gradient accent word)
 */
export function SectionHeading({
  eyebrow,
  lead,
  accent,
  align = 'center',
}: {
  eyebrow: string
  lead: string
  accent: string
  align?: 'left' | 'center'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className={align === 'center' ? 'text-center' : ''}
    >
      <div
        className={`mb-3 font-mono text-sm font-medium tracking-wide text-white/70 ${
          align === 'center' ? '' : ''
        }`}
      >
        {eyebrow}
      </div>
      <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
        <span className="text-white">{lead} </span>
        <span className="heading-italic">{accent}</span>
      </h2>
    </motion.div>
  )
}
