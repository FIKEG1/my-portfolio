import { skills, skillLevels } from '../data/site.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <Section
      id="skills"
      index={2}
      title="Skills"
      intro="Levels are self-assessed from project work. Comfortable means I can ship with it; Learning means I am still building fluency."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, index) => (
          <Reveal key={group.group} delay={index * 0.04}>
            <article className="surface h-full p-5">
              <h3 className="font-display text-lg font-semibold">{group.group}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map(([name, level]) => (
                  <li key={name} className="flex items-center justify-between gap-3 text-sm">
                    <span>{name}</span>
                    <span
                      className="flex items-center gap-2"
                      role="img"
                      aria-label={`${name}: ${skillLevels[level]}`}
                    >
                      <span className="flex gap-1" aria-hidden="true">
                        {[1, 2, 3].map((step) => (
                          <i
                            key={step}
                            className={`h-1.5 w-4 rounded-full ${
                              step <= level
                                ? 'bg-copper dark:bg-copper-bright'
                                : 'bg-paper-line dark:bg-night-line'
                            }`}
                          />
                        ))}
                      </span>
                      <span className="w-[6.5rem] text-right text-xs muted">{skillLevels[level]}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
