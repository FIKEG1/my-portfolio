import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { nav, profile } from '../data/site.js'
import CvButton from './CvButton.jsx'
import InstallButton from './InstallButton.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const sectionIds = nav.map((item) => item.href.replace('/#', ''))

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const headerRef = useRef(null)
  const menuToggleRef = useRef(null)
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Highlight the section currently in view.
  useEffect(() => {
    if (!onHome) return undefined

    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)

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
  }, [onHome])

  // Close the mobile menu on Escape or when tapping outside it.
  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuToggleRef.current?.focus()
    }
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  const isCurrent = (id) => onHome && active === id

  return (
    <header ref={headerRef} className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="mx-auto max-w-content rounded-[1.75rem] border border-paper-line/90 bg-paper-raised/90 shadow-[0_10px_36px_rgba(15,23,42,0.06)] backdrop-blur-lg dark:border-white/10 dark:bg-night/90 dark:shadow-[0_10px_36px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-3 py-2.5 pr-3 pl-4 sm:pl-5">
          <Link
            to="/#home"
            className="mr-auto flex min-w-0 items-center gap-2 font-display text-lg font-semibold tracking-wide text-paper-ink no-underline dark:text-night-ink"
          >
            <span
              className="inline-grid h-8 w-8 shrink-0 place-items-center rounded-full bg-copper text-sm text-paper-raised dark:bg-copper-bright dark:text-night"
              aria-hidden="true"
            >
              {profile.name.slice(0, 1)}
            </span>
            <span className="truncate">{profile.name}</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const id = item.href.replace('/#', '')
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isCurrent(id) ? 'location' : undefined}
                  className={`text-sm no-underline transition ${
                    isCurrent(id)
                      ? 'text-copper dark:text-copper-bright'
                      : 'text-paper-mute hover:text-paper-ink dark:text-night-mute dark:hover:text-night-ink'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {profile.cvUrl && (
            <div className="hidden lg:block">
              <CvButton className="btn-sm" />
            </div>
          )}
          <InstallButton compact className="hidden lg:inline-flex" />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            ref={menuToggleRef}
            type="button"
            className="inline-grid h-10 w-10 place-items-center rounded-full border border-paper-line bg-paper-raised text-paper-ink transition hover:border-copper lg:hidden dark:border-night-line dark:bg-night-raised dark:text-night-ink dark:hover:border-copper-bright"
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
            className="flex max-h-[calc(100vh-6rem)] flex-col gap-1 overflow-y-auto border-t border-paper-line px-3 py-3 lg:hidden dark:border-night-line"
            aria-label="Mobile primary"
          >
            {nav.map((item) => {
              const id = item.href.replace('/#', '')
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isCurrent(id) ? 'location' : undefined}
                  className={`rounded-xl px-3 py-2.5 text-base no-underline transition ${
                    isCurrent(id)
                      ? 'bg-paper font-medium text-copper dark:bg-night-raised dark:text-copper-bright'
                      : 'text-paper-ink hover:bg-paper dark:text-night-ink dark:hover:bg-night-raised'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              )
            })}
            {profile.cvUrl && <CvButton className="mt-2" />}
            <InstallButton className="mt-2" onDone={() => setOpen(false)} />
          </nav>
        )}
      </div>
    </header>
  )
}
