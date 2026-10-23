import { ArrowUp } from 'lucide-react'
import { profile } from '../data/site.js'
import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-paper-line dark:border-night-line">
      <div className="mx-auto flex max-w-content flex-wrap items-end justify-between gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 max-w-md text-sm muted">{profile.title}</p>
          <SocialLinks className="mt-4" />
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm muted">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a
            href="/#home"
            className="inline-grid h-10 w-10 place-items-center rounded-md border border-paper-line text-paper-ink no-underline transition hover:border-copper dark:border-night-line dark:text-night-ink"
            aria-label="Back to top"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
