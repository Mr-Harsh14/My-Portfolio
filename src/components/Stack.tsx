'use client'

import Reveal from './Reveal'
import Marquee from './Marquee'
import { SectionHeader } from './About'

const groups = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML / CSS'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'tRPC', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    label: 'ML / Data',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'pandas', 'NumPy', 'OpenCV'],
  },
  {
    label: 'Tooling',
    items: ['Git', 'Docker', 'Vercel', 'Figma', 'GitHub Actions', 'Linux'],
  },
]

const marqueeSkills = [
  'TypeScript', 'Python', 'React', 'Next.js', 'Tailwind', 'PyTorch',
  'TensorFlow', 'PostgreSQL', 'Docker', 'Node.js', 'Vercel', 'Figma',
  'OpenCV', 'pandas', 'GraphQL', 'tRPC', 'Framer Motion',
]

export default function Stack() {
  return (
    <section id="stack" className="relative py-32 sm:py-40">
      <div className="container-x">
        <Reveal>
          <SectionHeader eyebrow="02 · Stack" title="Tools of the trade." />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-6 max-w-xl text-base text-muted">
            A non-exhaustive snapshot of what I reach for. I prefer learning the next thing well over name-dropping the last.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-5">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={0.05 * i}>
              <div className="h-full bg-[color:var(--bg)] p-6">
                <h3 className="eyebrow">{g.label}</h3>
                <ul className="mt-5 space-y-3">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[15px]">
                      <span className="inline-block h-1 w-1 rounded-full bg-accent-deep dark:bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 border-y border-[color:var(--line)] py-6">
            <Marquee>
              {marqueeSkills.map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="font-serif text-4xl italic text-[color:var(--fg-muted)] sm:text-5xl"
                >
                  {skill}
                  <span className="mx-6 text-accent-deep dark:text-accent">✦</span>
                </span>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
