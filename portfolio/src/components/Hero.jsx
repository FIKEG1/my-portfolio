import { ArrowDownRight } from 'lucide-react'
import { profile } from '../data/site.js'
import CvButton from './CvButton.jsx'
import SocialLinks from './SocialLinks.jsx'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-content items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
      <Reveal direction="left">
        <p className="text-sm tracking-wide text-copper uppercase dark:text-copper-bright">
          {profile.availability}
        </p>
        <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-4 font-display text-xl text-copper sm:text-2xl dark:text-copper-bright">{profile.title}</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed muted">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn-primary" href="/#projects">
            <ArrowDownRight size={16} aria-hidden="true" />
            Explore my projects
          </a>
          <CvButton />
        </div>
        <SocialLinks className="mt-8" />
      </Reveal>

      <Reveal direction="right" delay={0.15} className="flex justify-center lg:justify-end">
        <figure className="relative w-full max-w-xs">
          <div className="absolute -inset-3 rounded-2xl border border-paper-line dark:border-night-line" aria-hidden="true" />
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.photoAlt}
              width={640}
              height={800}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative aspect-[4/5] w-full rounded-xl object-cover object-top"
            />
          ) : (
            <div
              className="relative grid aspect-[4/5] w-full place-items-center rounded-xl bg-paper-raised font-display text-7xl text-copper dark:bg-night-raised dark:text-copper-bright"
              role="img"
              aria-label="Profile photo placeholder — add /me.jpg and set profile.photo"
            >
              {profile.name.slice(0, 1)}
            </div>
          )}
          {profile.location && (
            <figcaption className="mt-4 text-center text-sm muted">{profile.location}</figcaption>
          )}
        </figure>
      </Reveal>
    </section>
  )
}
