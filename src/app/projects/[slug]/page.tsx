'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { notFound } from 'next/navigation'
import { use } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { projects } from '@/data/projects'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function ProjectPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const project = projects.find((p) => p.slug === resolvedParams.slug)
  if (!project) notFound()

  const idx = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(idx + 1) % projects.length]

  return (
    <>
      <Nav />
      <main className="relative">
        <article className="container-x pb-24 pt-32 sm:pt-40">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
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
              All work
            </Link>
          </motion.div>

          <Reveal>
            <header className="mt-10 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="eyebrow">
                  {project.category === 'web' ? 'Web project' : 'ML project'} · 2025
                </span>
                <h1 className="mt-6 font-sans text-mega font-medium tracking-tightest text-balance">
                  {project.title}
                  <span className="font-serif italic text-accent-deep dark:text-accent">.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>

              <div className="space-y-6 lg:col-span-4">
                <div>
                  <span className="eyebrow">Stack</span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[color:var(--line-strong)] px-3 py-1 font-mono text-[11px] uppercase tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-sm"
                    >
                      Source
                      <External />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent text-sm"
                    >
                      Live demo
                      <External />
                    </a>
                  )}
                </div>
              </div>
            </header>
          </Reveal>

          {/* Visual hero */}
          <Reveal delay={0.1}>
            <div className="relative mt-16 aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--bg-deep)]">
              <div className="absolute inset-0 dotted-bg opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-transparent" />
              <div className="relative flex h-full items-center justify-center p-12">
                <div className="font-serif text-[clamp(3rem,10vw,10rem)] italic leading-none tracking-tight text-accent-deep dark:text-accent">
                  {project.title.split(' ')[0]}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Body */}
          <div className="mt-16 grid gap-16 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <div className="sticky top-28 space-y-8">
                <div>
                  <span className="eyebrow">Category</span>
                  <p className="mt-2">{project.category === 'web' ? 'Software' : 'Machine Learning'}</p>
                </div>
                <div>
                  <span className="eyebrow">Status</span>
                  <p className="mt-2 inline-flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-deep dark:bg-accent" />
                    Shipped
                  </p>
                </div>
                <div>
                  <span className="eyebrow">Year</span>
                  <p className="mt-2 font-mono">2025</p>
                </div>
              </div>
            </aside>

            <Reveal className="lg:col-span-9" delay={0.05}>
              <div className="prose-custom max-w-3xl">
                <h2>Overview</h2>
                <p>{project.description}</p>

                {project.features && (
                  <>
                    <h2>What's inside</h2>
                    <ul>
                      {project.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </>
                )}

                {project.challenges && (
                  <>
                    <h2>Challenges</h2>
                    <p>{project.challenges}</p>
                  </>
                )}

                {project.learnings && (
                  <>
                    <h2>What I took away</h2>
                    <p>{project.learnings}</p>
                  </>
                )}
              </div>
            </Reveal>
          </div>

          {/* Next project */}
          {next && next.slug !== project.slug && (
            <Reveal delay={0.1}>
              <Link
                href={`/projects/${next.slug}`}
                className="group mt-24 block overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--bg-deep)] p-8 sm:p-10 transition-colors hover:border-[color:var(--line-strong)]"
              >
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                  <div>
                    <span className="eyebrow">Next project</span>
                    <h3 className="mt-3 font-serif text-3xl italic sm:text-4xl">{next.title}</h3>
                  </div>
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-transform group-hover:translate-x-1">
                    Continue
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          )}
        </article>
      </main>
      <Footer />
    </>
  )
}

function External() {
  return (
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
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  )
}
