import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-sm text-white/50">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-accent/30 text-xs font-bold text-accent">
            RL
          </span>
          {profile.name}
        </div>
        <p className="font-mono text-xs text-white/30">
          Designed & built by {profile.name} · © {'2026'}
        </p>
        <a href="#home" data-cursor="Top" className="font-mono text-xs text-white/40 transition-colors hover:text-accent">
          ↑ back to top
        </a>
      </div>
    </footer>
  )
}
