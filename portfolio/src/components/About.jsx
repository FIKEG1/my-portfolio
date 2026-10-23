import { about } from '../data/site.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <Section
      id="about"
      index={1}
      title="About"
      intro="A concise snapshot of how I work. Update the paragraphs in src/data/site.js."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <Reveal className="space-y-5 lg:col-span-8">
          {about.map((paragraph) => (
            <p key={paragraph} className="max-w-2xl text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </Reveal>
        <Reveal delay={0.08} className="surface h-fit p-6 lg:col-span-4">
          <p className="font-display text-sm tracking-wide uppercase">Currently</p>
          <ul className="mt-4 space-y-3 text-sm muted">
            <li>Building full-stack web applications with React, Node.js and PHP.</li>
            <li>Deepening practical AI-assisted development and API integration.</li>
            <li>Looking for junior, remote, and freelance opportunities.</li>
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
