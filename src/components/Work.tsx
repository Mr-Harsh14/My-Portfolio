'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { SectionHeader } from './About'
import { projects } from '@/data/projects'

export default function Work() {
  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <section id="work" className="relative py-32 sm:py-40">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader eyebrow="03 · Work" title="Selected projects." />
            <Link
              href="https://github.com/Mr-Harsh14"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-xs uppercase tracking-widest text-muted hover:text-[color:var(--fg)]"
            >
              All on GitHub →
            </Link>
          </div>
        </Reveal>

        {/* Featured project */}
        {featured && (
          <Reveal delay={0.1}>
            <FeaturedCard project={featured} />
          </Reveal>
        )}

        {/* Project list */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--line)]">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={0.05 * i}>
              <ProjectRow index={i + 2} project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group mt-16 block overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--bg-deep)] transition-colors hover:border-[color:var(--line-strong)]"
    >
      <div className="grid lg:grid-cols-12">
        {/* Visual */}
        <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto">
          <div className="absolute inset-0 dotted-bg opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-transparent" />
          <div className="relative z-10 flex h-full items-center justify-center p-12">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[clamp(3rem,8vw,8rem)] italic leading-none tracking-tight text-accent-deep dark:text-accent"
            >
              {project.title.split(' ')[0]}
            </motion.div>
          </div>
          <span className="absolute left-6 top-6 pill">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Featured
          </span>
        </div>

        {/* Meta */}
        <div className="flex flex-col justify-between gap-8 p-8 sm:p-10 lg:col-span-5">
          <div>
            <div className="eyebrow">{project.category === 'web' ? 'Web · 2025' : 'ML · 2025'}</div>
            <h3 className="mt-4 font-serif text-4xl italic leading-tight">{project.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted">{project.description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[color:var(--line-strong)] px-3 py-1 font-mono text-[11px] uppercase tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 font-medium transition-transform group-hover:translate-x-1">
              Read case study
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
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function ProjectRow({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block bg-[color:var(--bg)] transition-colors hover:bg-[color:var(--bg-deep)]"
    >
      <div className="container-x mx-0 grid grid-cols-12 items-center gap-4 px-8 py-8 sm:py-10">
        <span className="col-span-1 font-mono text-xs uppercase tracking-widest text-muted">
          {String(index).padStart(2, '0')}
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
  )
}
