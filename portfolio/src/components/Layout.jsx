import { Outlet } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme.js'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen bg-paper text-paper-ink dark:bg-night dark:text-night-ink">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
