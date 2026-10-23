import { Download } from 'lucide-react'
import { profile } from '../data/site.js'

export default function CvButton({ variant = 'ghost', className = '' }) {
  const styles = variant === 'primary' ? 'btn-primary' : 'btn-ghost'

  if (profile.cvUrl) {
    return (
      <a className={`${styles} ${className}`} href={profile.cvUrl} download>
        <Download size={16} aria-hidden="true" />
        Download CV
      </a>
    )
  }

  return (
    <span
      className={`${styles} btn-disabled ${className}`}
      role="link"
      aria-disabled="true"
      title="Add cv.pdf to public/ and set profile.cvUrl in src/data/site.js"
    >
      <Download size={16} aria-hidden="true" />
      CV coming soon
    </span>
  )
}
