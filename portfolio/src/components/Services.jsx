import { services } from '../data/site.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

export default function Services() {
  return (
    <Section
      id="services"
      index={5}
      title="Services"
      intro="Work I can take on today. Add or remove items in src/data/site.js as your range grows."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.04}>
            <article className="surface h-full p-6">
              <p className="font-display text-xs text-copper dark:text-copper-bright">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed muted">{service.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
