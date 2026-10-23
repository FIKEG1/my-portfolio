import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { nav, profile } from '../data/site.js'
import CvButton from './CvButton.jsx'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const menuToggleRef = useRef(null)
  const location = useLocation()
  const ids = nav.map((item) => item.href.replace('/#', ''))

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname !== '/') return undefined

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-paper-line/80 bg-paper/85 backdrop-blur-md dark:border-night-line/80 dark:bg-night/85">
      <div className="mx-auto flex max-w-content items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/#home"
          className="mr-auto flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-paper-ink no-underline dark:text-night-ink"
        >
          <span className="inline-grid h-8 w-8 place-items-center rounded-md bg-copper text-sm text-paper-raised dark:bg-copper-bright dark:text-night">
            {profile.name.slice(0, 1)}
          </span>
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const id = item.href.replace('/#', '')
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={active === id && location.pathname === '/' ? 'location' : undefined}
                className={`text-sm no-underline transition ${
                  active === id && location.pathname === '/'
                    ? 'text-copper dark:text-copper-bright'
                    : 'text-paper-mute hover:text-paper-ink dark:text-night-mute dark:hover:text-night-ink'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <CvButton />
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <button
          ref={menuToggleRef}
          type="button"
          className="inline-grid h-10 w-10 place-items-center rounded-md border border-paper-line bg-paper-raised lg:hidden dark:border-night-line dark:bg-night-raised"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-3 border-t border-paper-line px-4 py-4 lg:hidden dark:border-night-line"
          aria-label="Mobile primary"
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setOpen(false)
              menuToggleRef.current?.focus()
            }
          }}
        >
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base text-paper-ink no-underline dark:text-night-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <CvButton />
        </nav>
      )}
    </header>
  )
}
