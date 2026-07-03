import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { categoryConfig, projects, type ProjectCategory } from '@/data/projects'

export const metadata: Metadata = {
  title: { absolute: 'Hazz — All projects · hazz.me' },
  description:
    'Every project by Harsh Maniya (Hazz) — software and machine learning work, from web apps to ML models.',
  alternates: {
    canonical: 'https://hazz.me',
  },
  openGraph: {
    title: 'Hazz — All projects',
    description:
      'Every project by Harsh Maniya (Hazz) — software and machine learning work, from web apps to ML models.',
    url: 'https://hazz.me',
    siteName: 'hazz.me',
    locale: 'en_GB',
    type: 'website',
  },
}

const categories: { key: ProjectCategory; label: string }[] = [
  { key: 'applications', label: categoryConfig.applications.label },
  { key: 'web', label: categoryConfig.web.label },
  { key: 'ml', label: categoryConfig.ml.label },
]

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="relative">
        <div className="container-x pb-24 pt-32 sm:pt-40">
          <Reveal>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-[color:var(--fg)] transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back home
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <header className="mt-10 max-w-3xl">
              <span className="eyebrow">Archive · {String(projects.length).padStart(2, '0')} projects</span>
              <h1 className="mt-6 font-sans text-mega font-medium tracking-tightest text-balance">
                All projects
                <span className="font-serif italic text-accent-deep dark:text-accent">.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
                A complete index of things I&apos;ve designed, built, and shipped — across
                applications, the web, and machine learning.
              </p>
            </header>
          </Reveal>

          {categories.map((category) => {
            const items = projects.filter((p) => p.category === category.key)
            if (items.length === 0) return null
            const offset = categories
              .slice(0, categories.indexOf(category))
              .reduce((n, c) => n + projects.filter((p) => p.category === c.key).length, 0)

            return (
              <section key={category.key} className="mt-20">
                <Reveal delay={0.05}>
                  <div className="flex items-end justify-between gap-6">
                    <h2 className="font-serif text-3xl italic leading-tight sm:text-4xl">
                      {category.label}
                    </h2>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted">
                      {String(items.length).padStart(2, '0')}
                    </span>
                  </div>
                </Reveal>

                <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--line)]">
                  {items.map((project, i) => (
                    <Reveal key={project.slug} delay={0.05 * i}>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="group relative block bg-[color:var(--bg)] transition-colors hover:bg-[color:var(--bg-deep)]"
                      >
                        <div className="grid grid-cols-12 items-center gap-4 px-8 py-8 sm:py-10">
                          <span className="col-span-1 font-mono text-xs uppercase tracking-widest text-muted">
                            {String(offset + i + 1).padStart(2, '0')}
                          </span>

                          <div className="col-span-12 sm:col-span-5">
                            <h3 className="font-serif text-2xl italic leading-tight sm:text-3xl">
                              {project.title}
                            </h3>
                          </div>

                          <p className="col-span-12 hidden text-sm text-muted sm:col-span-3 sm:block">
                            {project.description.slice(0, 80)}…
                          </p>

                          <div className="col-span-12 hidden flex-wrap gap-1.5 sm:col-span-2 sm:flex">
                            {project.technologies.slice(0, 2).map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-[color:var(--line-strong)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="col-span-12 flex items-center justify-end gap-2 font-mono text-[11px] uppercase tracking-widest text-muted transition-all group-hover:text-[color:var(--fg)] sm:col-span-1">
                            <span>view</span>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            >
                              <path d="M7 17L17 7M9 7h8v8" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </section>
            )
          })}

          <Reveal delay={0.1}>
            <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-3xl border border-[color:var(--line)] bg-[color:var(--bg-deep)] p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <span className="eyebrow">Elsewhere</span>
                <p className="mt-3 max-w-md text-muted">
                  Experiments, forks, and works-in-progress live on GitHub.
                </p>
              </div>
              <a
                href="https://github.com/Mr-Harsh14"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-xs uppercase tracking-widest text-muted hover:text-[color:var(--fg)]"
              >
                All on GitHub →
              </a>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
