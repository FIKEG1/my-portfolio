import { Download } from 'lucide-react'
import { profile } from '../data/site.js'

// Renders nothing until profile.cvUrl is set in src/data/site.js
// (add cv.pdf to public/ and set cvUrl to '/cv.pdf').
export default function CvButton({ variant = 'ghost', className = '' }) {
  if (!profile.cvUrl) return null

  const styles = variant === 'primary' ? 'btn-primary' : 'btn-ghost'

  return (
    <a className={`${styles} ${className}`} href={profile.cvUrl} download>
      <Download size={16} aria-hidden="true" />
      Download CV
    </a>
  )
}
