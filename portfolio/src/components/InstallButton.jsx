import { MonitorDown } from 'lucide-react'
import { useInstallPrompt } from '../hooks/useInstallPrompt.js'

// Shown only when the browser offers to install the site as an app.
// `compact` hides the label on narrower desktops so the navbar stays on one line.
export default function InstallButton({ compact = false, className = '', onDone }) {
  const { canInstall, install } = useInstallPrompt()

  if (!canInstall) return null

  const handleClick = async () => {
    await install()
    onDone?.()
  }

  return (
    <button
      type="button"
      className={`btn-ghost btn-sm ${className}`}
      onClick={handleClick}
      aria-label={compact ? 'Install app' : undefined}
      title="Install this portfolio as an app"
    >
      <MonitorDown size={15} aria-hidden="true" />
      <span className={compact ? 'hidden xl:inline' : undefined}>Install app</span>
    </button>
  )
}
