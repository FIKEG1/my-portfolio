import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/site.js'

export default function SocialLinks({ className = '' }) {
  const items = [
    profile.github && { href: profile.github, label: 'GitHub', Icon: Github, external: true },
    profile.linkedin && { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin, external: true },
    profile.email && { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail, external: false },
  ].filter(Boolean)

  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}>
      {items.map(({ href, label, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            className="inline-flex items-center gap-2 text-sm text-paper-mute transition hover:text-copper dark:text-night-mute dark:hover:text-copper-bright"
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            <Icon size={16} aria-hidden="true" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}
