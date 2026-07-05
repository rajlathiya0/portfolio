import { useEffect, useState } from 'react'
import { profile } from '../data'
import { GithubIcon, LinkedinIcon } from './Icons'

const links = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Stacks', href: '#stacks', id: 'stacks' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight whichever section pill matches the section in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-2 rounded-full border border-white/10 bg-[#0b0b0d]/80 px-2.5 py-2 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:px-3">
        <a
          href="#home"
          data-cursor="Home"
          className="flex shrink-0 items-center gap-2 rounded-full px-3 py-2 font-nav text-sm font-semibold tracking-wide text-white transition-colors hover:text-accent-bright"
        >
          raj<span className="text-accent-bright">.</span>dev
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-cursor="Go"
                className={`relative block rounded-full px-4 py-2 font-nav text-[14px] font-medium transition-all duration-300 ${
                  active === l.id
                    ? 'bg-white/10 text-accent-bright shadow-[inset_0_0_0_1px_rgba(79,195,247,0.25)]'
                    : 'text-white/55 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-accent-bright sm:flex"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor="LinkedIn"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-accent-bright sm:flex"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 md:hidden"
            aria-label="Menu"
          >
            <span className="text-lg">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-3xl px-2.5 md:hidden">
          <ul className="flex flex-col gap-1 rounded-3xl border border-white/10 bg-[#0b0b0d]/90 p-3 backdrop-blur-xl">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-full px-4 py-2.5 font-nav text-sm font-medium transition-colors ${
                    active === l.id ? 'bg-white/10 text-accent-bright' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-1 flex items-center gap-2 border-t border-white/10 pt-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-accent-bright"
              >
                <GithubIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-accent-bright"
              >
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
