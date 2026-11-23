import { ArrowUpRight, Check, Circle, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/site.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

function ProjectLinks({ project }) {
  if (!project.github && !project.demo) return null

  const internalDemo = project.demo?.startsWith('/')

  return (
    <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
      {project.demo &&
        (internalDemo ? (
          <Link to={project.demo} className="btn-primary btn-sm">
            Open live demo
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        ) : (
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary btn-sm">
            Open live demo
            <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ))}
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost btn-sm">
          <Github size={14} aria-hidden="true" />
          View code
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}
    </div>
  )
}

function ProjectCard({ project }) {
  const built = project.status === 'Built'

  return (
    <article className="surface flex h-full flex-col p-5 sm:p-6">
      {project.image && (
        <img
          src={project.image}
          alt={project.imageAlt}
          width={960}
          height={480}
          loading="lazy"
          decoding="async"
          className={`mb-5 aspect-[2/1] w-full rounded-xl border border-paper-line dark:border-night-line ${
            project.imageFit === 'contain' ? 'bg-night object-contain' : 'object-cover object-left-top'
          }`}
        />
      )}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold leading-snug">{project.title}</h3>
        <span
          className={`mt-0.5 shrink-0 rounded-full border px-2.5 py-0.5 text-xs ${
            built
              ? 'border-emerald-700 text-emerald-800 dark:border-emerald-400 dark:text-emerald-300'
              : 'border-amber-700 text-amber-800 dark:border-amber-300 dark:text-amber-200'
          }`}
        >
          {project.status}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed muted">{project.summary}</p>

      {project.built.length > 0 && (
        <>
          <h4 className="mt-5 text-xs font-semibold tracking-wide text-paper-mute uppercase dark:text-night-mute">
            Implemented
          </h4>
          <ul className="mt-2 space-y-1.5 text-sm">
            {project.built.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Check size={14} className="mt-0.5 shrink-0 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}

      {project.planned.length > 0 && (
        <>
          <h4 className="mt-5 text-xs font-semibold tracking-wide text-paper-mute uppercase dark:text-night-mute">
            Planned
          </h4>
          <ul className="mt-2 space-y-1.5 text-sm muted">
            {project.planned.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Circle size={12} className="mt-1 shrink-0" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-md border border-paper-line px-2 py-0.5 text-xs dark:border-night-line"
          >
            {item}
          </li>
        ))}
      </ul>

      <ProjectLinks project={project} />
    </article>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      index={3}
      title="Projects"
      intro="Each card separates what already works from what is still planned."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.04}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
