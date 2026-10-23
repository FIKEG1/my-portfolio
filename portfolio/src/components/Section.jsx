export default function Section({ id, index, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-paper-line py-20 dark:border-night-line">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-2xl">
          <p className="font-display text-xs tracking-[0.28em] text-copper uppercase dark:text-copper-bright">
            {String(index).padStart(2, '0')}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-base muted">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
