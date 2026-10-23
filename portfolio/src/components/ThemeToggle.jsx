import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className="inline-grid h-10 w-10 place-items-center rounded-md border border-paper-line bg-paper-raised text-paper-ink transition hover:border-copper dark:border-night-line dark:bg-night-raised dark:text-night-ink dark:hover:border-copper-bright"
      onClick={onToggle}
      aria-label={`Switch to ${next} mode`}
    >
      {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}
