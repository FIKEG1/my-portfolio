import { useEffect, useState } from 'react'

// Browsers that support installing the site as an app (Chrome, Edge, Android)
// fire `beforeinstallprompt` once the page qualifies. It can fire before React
// mounts, so it is captured here at module load and shared with the hook.
let deferredPrompt = null
const listeners = new Set()

const setDeferredPrompt = (event) => {
  deferredPrompt = event
  listeners.forEach((listener) => listener(event))
}

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (event) => {
    // Keep the event so the "Install app" button can trigger it later.
    event.preventDefault()
    setDeferredPrompt(event)
  })
  window.addEventListener('appinstalled', () => setDeferredPrompt(null))
}

// Returns { canInstall, install }. `canInstall` stays false on browsers without
// an install prompt (Safari, Firefox) and when the app is already installed.
export function useInstallPrompt() {
  const [promptEvent, setPromptEvent] = useState(deferredPrompt)

  useEffect(() => {
    listeners.add(setPromptEvent)
    setPromptEvent(deferredPrompt)
    return () => listeners.delete(setPromptEvent)
  }, [])

  const install = async () => {
    if (!promptEvent) return
    promptEvent.prompt()
    await promptEvent.userChoice
    // A prompt event can only be used once, whatever the user chose.
    setDeferredPrompt(null)
  }

  return { canInstall: Boolean(promptEvent), install }
}
