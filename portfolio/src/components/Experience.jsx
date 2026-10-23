import { useState } from 'react'
import { Award, BookOpen, Code2, ExternalLink, RotateCcw } from 'lucide-react'
import { journey, learningPlan } from '../data/site.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

const progressStorageKey = 'portfolio-learning-progress'
const progressOptions = ['Not started', 'In progress', 'Completed']

function readLearningProgress() {
  try {
    const saved = localStorage.getItem(progressStorageKey)
    const parsed = saved ? JSON.parse(saved) : {}
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error('Saved learning progress has an invalid format.')
    }

    return {
      progress: Object.fromEntries(
        Object.entries(parsed).filter(([, status]) => progressOptions.includes(status)),
      ),
      error: '',
    }
  } catch {
    return {
      progress: {},
      error: 'Saved learning progress could not be read. You can still update it for this visit.',
    }
  }
}

export default function Experience() {
  const [initialProgress] = useState(readLearningProgress)
  const [learningProgress, setLearningProgress] = useState(initialProgress.progress)
  const [progressError, setProgressError] = useState(initialProgress.error)
  const learningItems = [
    ...learningPlan.certificates,
    ...learningPlan.skills,
  ]
  const completedCount = learningItems.filter((item) => learningProgress[item.id] === 'Completed').length
  const progressPercent = learningItems.length ? Math.round((completedCount / learningItems.length) * 100) : 0

  const saveProgress = (next) => {
    try {
      localStorage.setItem(progressStorageKey, JSON.stringify(next))
      setProgressError('')
    } catch {
      setProgressError('Progress could not be saved in this browser. Your updates will last for this visit only.')
    }
  }

  const updateProgress = (id, status) => {
    const next = { ...learningProgress }
    if (status === 'Not started') {
      delete next[id]
    } else {
      next[id] = status
    }
    setLearningProgress(next)
    saveProgress(next)
  }

  const resetProgress = () => {
    setLearningProgress({})
    saveProgress({})
  }

  return (
    <Section
      id="experience"
      index={4}
      title="Experience"
      intro="Education, independent projects, and verified work only. Replace the TODO rows in src/data/site.js — do not invent titles."
    >
      <ol className="relative ml-2 border-l border-paper-line dark:border-night-line">
        {journey.map((item, index) => (
          <li key={`${item.what}-${index}`} className="relative pb-10 pl-8 last:pb-0">
            <span
              className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-copper dark:bg-copper-bright"
              aria-hidden="true"
            />
            <Reveal>
              <p className="text-xs tracking-wide text-copper uppercase dark:text-copper-bright">{item.when}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{item.what}</h3>
              <p className="mt-1 text-sm muted">
                {item.where}. {item.note}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-16 border-t border-paper-line pt-12 dark:border-night-line">
        <div className="mb-8 max-w-2xl">
          <p className="flex items-center gap-2 text-xs tracking-wide text-copper uppercase dark:text-copper-bright">
            <BookOpen size={15} aria-hidden="true" />
            Learning roadmap
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Certificate ideas & skills to build next
          </h3>
          <p className="mt-3 text-sm muted">
            Suggested learning options, not certificates already earned. Use the links to explore resources and track your own progress.
          </p>
        </div>

        <div className="surface mb-6 p-5 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold">Your learning progress</p>
              <p className="text-sm muted">{completedCount} of {learningItems.length} completed</p>
            </div>
            <div
              className="mt-3 h-2 overflow-hidden rounded-full bg-paper-line dark:bg-night-line"
              role="progressbar"
              aria-label="Learning roadmap completion"
              aria-valuemin={0}
              aria-valuemax={learningItems.length}
              aria-valuenow={completedCount}
            >
              <div
                className="h-full rounded-full bg-copper transition-[width] dark:bg-copper-bright"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="mt-2 text-xs muted">{progressPercent}% complete · Saved in this browser</p>
          </div>
          <button
            type="button"
            className="btn-ghost mt-4 shrink-0 px-4 py-2 text-xs sm:mt-0"
            onClick={resetProgress}
            disabled={completedCount === 0 && !Object.keys(learningProgress).length}
          >
            <RotateCcw size={14} aria-hidden="true" />
            Reset progress
          </button>
          {progressError && (
            <p className="mt-3 text-sm text-amber-800 dark:text-amber-200 sm:basis-full" role="status">
              {progressError}
            </p>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="surface h-full p-6">
              <h4 className="flex items-center gap-2 font-display text-lg font-semibold">
                <Award size={19} className="text-copper dark:text-copper-bright" aria-hidden="true" />
                Certificate ideas
              </h4>
              <ul className="mt-5 space-y-5">
                {learningPlan.certificates.map((certificate) => (
                  <li key={certificate.id} className="border-b border-paper-line pb-5 last:border-0 last:pb-0 dark:border-night-line">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold">{certificate.name}</p>
                        <p className="mt-1 text-sm muted">{certificate.focus}</p>
                        <p className="mt-1 text-xs text-copper dark:text-copper-bright">{certificate.provider} · Suggested</p>
                      </div>
                      <label className="sr-only" htmlFor={`progress-${certificate.id}`}>Progress for {certificate.name}</label>
                      <select
                        id={`progress-${certificate.id}`}
                        className="rounded-md border border-paper-line bg-paper-raised px-2 py-1.5 text-xs text-paper-ink dark:border-night-line dark:bg-night-raised dark:text-night-ink"
                        value={learningProgress[certificate.id] || 'Not started'}
                        onChange={(event) => updateProgress(certificate.id, event.target.value)}
                      >
                        {progressOptions.map((status) => <option key={status}>{status}</option>)}
                      </select>
                    </div>
                    <a
                      className="mt-3 inline-flex items-center gap-1 text-sm text-copper hover:underline dark:text-copper-bright"
                      href={certificate.resource}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore resource <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="surface h-full p-6">
              <h4 className="flex items-center gap-2 font-display text-lg font-semibold">
                <Code2 size={19} className="text-copper dark:text-copper-bright" aria-hidden="true" />
                Skills to develop
              </h4>
              <ul className="mt-5 space-y-5">
                {learningPlan.skills.map((skill) => (
                  <li key={skill.id} className="border-b border-paper-line pb-5 last:border-0 last:pb-0 dark:border-night-line">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold">{skill.name}</p>
                        <p className="mt-1 text-sm muted">{skill.focus}</p>
                      </div>
                      <label className="sr-only" htmlFor={`progress-${skill.id}`}>Progress for {skill.name}</label>
                      <select
                        id={`progress-${skill.id}`}
                        className="rounded-md border border-paper-line bg-paper-raised px-2 py-1.5 text-xs text-paper-ink dark:border-night-line dark:bg-night-raised dark:text-night-ink"
                        value={learningProgress[skill.id] || 'Not started'}
                        onChange={(event) => updateProgress(skill.id, event.target.value)}
                      >
                        {progressOptions.map((status) => <option key={status}>{status}</option>)}
                      </select>
                    </div>
                    <a
                      className="mt-3 inline-flex items-center gap-1 text-sm text-copper hover:underline dark:text-copper-bright"
                      href={skill.resource}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore resource <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
