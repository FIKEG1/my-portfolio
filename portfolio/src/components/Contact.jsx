import { useEffect, useRef, useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { profile } from '../data/site.js'
import Section from './Section.jsx'
import SocialLinks from './SocialLinks.jsx'
import Reveal from './Reveal.jsx'

const empty = { name: '', email: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [opened, setOpened] = useState(false)
  // 'idle' | 'copied' | 'selected' (clipboard blocked, address highlighted instead)
  const [copyState, setCopyState] = useState('idle')
  const copyTimer = useRef(null)
  const emailRef = useRef(null)

  useEffect(() => () => window.clearTimeout(copyTimer.current), [])

  const copyEmail = async () => {
    let next = 'copied'
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      // Clipboard access can be blocked. Highlight the address so it can be copied by hand.
      if (emailRef.current) window.getSelection()?.selectAllChildren(emailRef.current)
      next = 'selected'
    }
    setCopyState(next)
    window.clearTimeout(copyTimer.current)
    copyTimer.current = window.setTimeout(() => setCopyState('idle'), 2500)
  }

  const copyLabel = {
    idle: 'Copy email address',
    copied: 'Copied',
    selected: 'Address selected, copy it now',
  }[copyState]

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
    setOpened(false)
  }

  const submit = (event) => {
    event.preventDefault()
    if (!profile.email) {
      setErrors({ email: 'Add your email address in src/data/site.js before using the contact form.' })
      return
    }

    const next = {}
    if (values.name.trim().length < 2) next.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Enter a valid email address.'
    if (values.message.trim().length < 10) next.message = 'Write at least 10 characters.'
    setErrors(next)
    if (Object.keys(next).length) return

    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`)
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setOpened(true)
  }

  const fieldClass =
    'mt-1 w-full rounded-md border border-paper-line bg-paper-raised px-3 py-2.5 text-sm text-paper-ink outline-none focus:border-copper dark:border-night-line dark:bg-night dark:text-night-ink dark:focus:border-copper-bright'

  return (
    <Section
      id="contact"
      index={6}
      title="Contact"
      intro={`${profile.availability}${profile.location ? ` · ${profile.location}` : ''}`}
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <form onSubmit={submit} noValidate className="surface p-6">
            <div className="mb-4">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={values.name}
                onChange={update('name')}
                autoComplete="name"
                className={fieldClass}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="mt-1 text-sm text-red-700 dark:text-red-400">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={values.email}
                onChange={update('email')}
                autoComplete="email"
                className={fieldClass}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="mt-1 text-sm text-red-700 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                required
                value={values.message}
                onChange={update('message')}
                className={fieldClass}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" role="alert" className="mt-1 text-sm text-red-700 dark:text-red-400">
                  {errors.message}
                </p>
              )}
            </div>
            <button type="submit" className="btn-primary disabled:cursor-not-allowed disabled:opacity-60" disabled={!profile.email}>
              <Mail size={16} aria-hidden="true" />
              {profile.email ? 'Open in email app' : 'Email not configured'}
            </button>
            <p className="mt-3 text-sm muted" role="status">
              {opened
                ? `Your email app should have opened. If it did not, write to ${profile.email}.`
                : profile.email
                  ? 'This opens your email app with the message filled in. Nothing is sent until you press send there.'
                  : 'Add your email in src/data/site.js to enable the direct contact form.'}
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="surface p-6">
            <h3 className="font-display text-lg font-semibold">Direct</h3>
            {profile.email && (
              <>
                <p className="mt-3 text-sm muted">Prefer your own email app? Write to me at</p>
                <p className="mt-1">
                  <a ref={emailRef} href={`mailto:${profile.email}`} className="text-link font-medium break-all">
                    {profile.email}
                  </a>
                </p>
                <button type="button" className="btn-ghost btn-sm mt-4" onClick={copyEmail} aria-live="polite">
                  {copyState === 'copied' ? (
                    <Check size={14} aria-hidden="true" />
                  ) : (
                    <Copy size={14} aria-hidden="true" />
                  )}
                  {copyLabel}
                </button>
              </>
            )}
            <SocialLinks className="mt-6 border-t border-paper-line pt-5 dark:border-night-line" />
          </aside>
        </Reveal>
      </div>
    </Section>
  )
}
