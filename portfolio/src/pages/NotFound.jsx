import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-content flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
      <p className="font-display text-sm tracking-[0.28em] text-copper uppercase dark:text-copper-bright">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-lg muted">
        That URL is not part of this portfolio. Return to the home page to see projects, skills, and contact details.
      </p>
      <Link to="/" className="btn-primary mt-8 w-fit no-underline">
        Back to home
      </Link>
    </section>
  )
}
