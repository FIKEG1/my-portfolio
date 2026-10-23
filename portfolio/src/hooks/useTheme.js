import { useEffect, useState } from 'react'

function resolveTheme() {
  if (typeof document === 'undefined') return 'dark'

  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* ignore private-mode storage errors */
  }

  const root = document.documentElement
  if (root.classList.contains('dark')) return 'dark'
  if (root.classList.contains('light')) return 'light'

  if (typeof window !== 'undefined' && 'matchMedia' in window) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  return 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState(() => resolveTheme())

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore private-mode storage errors */
    }
  }, [theme])

  const toggle = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}
