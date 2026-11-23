import { ArrowDownRight, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/site.js'
import CvButton from './CvButton.jsx'
import SocialLinks from './SocialLinks.jsx'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="mx-auto grid max-w-content items-center gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <Reveal direction="left">
          {profile.availability && (
            <p className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/20 bg-indigo-500/[0.07] px-4 py-2 text-xs tracking-[0.14em] text-copper uppercase dark:border-indigo-300/25 dark:bg-indigo-400/10 dark:text-copper-bright">
              <span className="status-dot" aria-hidden="true" />
              {profile.availability}
            </p>
          )}
          <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-serif text-[clamp(1.5rem,2.4vw,1.9rem)] leading-tight text-copper dark:text-copper-bright">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href="/#projects">
              <ArrowDownRight size={16} aria-hidden="true" />
              Explore my projects
            </a>
            <a className="btn-ghost" href="/#contact">
              <Mail size={16} aria-hidden="true" />
              Get in touch
            </a>
            <CvButton />
          </div>
          <SocialLinks className="mt-8" />
        </Reveal>

        <Reveal direction="right" delay={0.15} className="flex justify-center lg:justify-end">
          <figure className="hero-portrait relative w-full max-w-[17rem] sm:max-w-xs">
            <div
              className="absolute -inset-3 rounded-2xl border border-paper-line dark:border-night-line"
              aria-hidden="true"
            />
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
                aria-label={`${profile.name} portrait placeholder`}
              >
                {profile.name.slice(0, 1)}
              </div>
            )}
            {profile.location && (
              <figcaption className="relative mt-4 flex items-center justify-center gap-1.5 text-sm muted">
                <MapPin size={14} aria-hidden="true" />
                {profile.location}
              </figcaption>
            )}
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
