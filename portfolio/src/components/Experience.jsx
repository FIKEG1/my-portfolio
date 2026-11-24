import { Award, BookOpen, Code2, ExternalLink } from 'lucide-react'
import { journey, learningPlan } from '../data/site.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

const statusStyles = {
  'In progress': 'border-amber-700 text-amber-800 dark:border-amber-300 dark:text-amber-200',
  Completed: 'border-emerald-700 text-emerald-800 dark:border-emerald-400 dark:text-emerald-300',
}

function RoadmapList({ title, Icon, items }) {
  return (
    <article className="surface h-full p-5 sm:p-6">
      <h4 className="flex items-center gap-2 font-display text-lg font-semibold">
        <Icon size={19} className="text-copper dark:text-copper-bright" aria-hidden="true" />
        {title}
      </h4>
      <ul className="mt-4 divide-y divide-paper-line dark:divide-night-line">
        {items.map((item) => (
          <li key={item.id} className="py-4 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
              <p className="font-medium">
                {item.resource ? (
                  <a
                    href={item.resource}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-baseline gap-1.5 underline decoration-transparent underline-offset-4 transition hover:text-copper hover:decoration-current dark:hover:text-copper-bright"
                  >
                    {item.name}
                    <ExternalLink size={13} className="shrink-0 translate-y-px" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  item.name
                )}
              </p>
              {statusStyles[item.status] && (
                <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs ${statusStyles[item.status]}`}>
                  {item.status}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm muted">{item.focus}</p>
            {item.provider && <p className="mt-1 text-xs text-copper dark:text-copper-bright">{item.provider}</p>}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Experience() {
  return (
    <Section
      id="experience"
      index={4}
      title="Experience"
      intro="An internship, a university degree, and self-directed projects built one at a time."
    >
      <ol className="relative ml-2 border-l border-paper-line dark:border-night-line">
        {journey.map((item, index) => (
          <li key={`${item.what}-${index}`} className="relative pb-10 pl-8 last:pb-0">
            <span
              className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-copper dark:bg-copper-bright"
              aria-hidden="true"
            />
            <Reveal>
              <p className="eyebrow">{item.when}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{item.what}</h3>
              <p className="mt-1 max-w-2xl text-sm muted">
                {item.where}. {item.note}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-16 border-t border-paper-line pt-12 dark:border-night-line">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow flex items-center gap-2">
            <BookOpen size={15} aria-hidden="true" />
            Learning roadmap
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            What I am learning next
          </h3>
          <p className="mt-3 text-sm muted">
            Courses and skills on my list. These are goals I am working toward, not certificates I have already earned.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <RoadmapList title="Courses and certificates" Icon={Award} items={learningPlan.certificates} />
          </Reveal>
          <Reveal delay={0.06}>
            <RoadmapList title="Skills to develop" Icon={Code2} items={learningPlan.skills} />
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
