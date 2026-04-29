'use client'

import Image from 'next/image'
import Reveal from './Reveal'

const stats = [
  { value: '1st', label: 'Class Honours · Comp Sci' },
  { value: '15+', label: 'Projects shipped' },
  { value: '∞', label: 'Coffees consumed' },
]

const principles = [
  { n: '01', title: 'Craft', body: 'Software is read more than written. Clarity over cleverness.' },
  { n: '02', title: 'Curiosity', body: 'New paper drops? I\'m reading it. New framework? I\'m breaking it.' },
  { n: '03', title: 'Quiet impact', body: 'The best work feels obvious in hindsight. I aim for that.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-32 sm:py-40">
      <div className="container-x">
        <Reveal>
          <SectionHeader eyebrow="01 · About" title="A short story." />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto] auto-rows-fr">
          {/* Bio card — span 8x2 */}
          <Reveal className="lg:col-span-8 lg:row-span-2" delay={0.05}>
            <Card className="h-full p-8 sm:p-10">
              <Eyebrow>The story so far</Eyebrow>
              <p className="mt-4 font-serif text-2xl leading-snug sm:text-3xl">
                I'm Harsh — most people just call me <span className="italic text-accent-deep dark:text-accent">Hazz</span>. A Computer Science graduate from the{' '}
                <span className="italic">University of Westminster</span>, where I split my focus between modern web engineering and applied machine learning. Today I build full-stack interfaces, train models, and chase the unfair joy of shipping.
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                Outside of work I'm a quiet evangelist for thoughtful UI, espresso pulled too long, and reading way more papers than I have time to implement.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[color:var(--line)] pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-serif text-4xl sm:text-5xl tracking-tight">{s.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-widest text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* Photo card */}
          <Reveal className="lg:col-span-4" delay={0.1}>
            <Card className="relative h-full min-h-[260px] overflow-hidden p-0">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
                <div className="dotted-bg absolute inset-0 opacity-40" />
              </div>
              <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full ring-1 ring-[color:var(--line-strong)]">
                  <Image
                    src="/images/Hazz.png"
                    alt="Harsh Maniya — Hazz"
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 font-serif text-xl italic">
                  Hi, I'm <span className="text-accent-deep dark:text-accent">Hazz</span> 👋
                </div>
                <div className="mt-1 text-sm text-muted">Nice to meet you.</div>
              </div>
            </Card>
          </Reveal>

          {/* Now / Currently card */}
          <Reveal className="lg:col-span-4" delay={0.15}>
            <Card className="h-full p-8">
              <Eyebrow>Currently</Eyebrow>
              <ul className="mt-4 space-y-4">
                <NowItem
                  title="Building"
                  body="Tooling around small language models for personal automation."
                />
                <NowItem
                  title="Reading"
                  body="Designing Data-Intensive Applications · Kleppmann."
                />
                <NowItem
                  title="Listening"
                  body="Lo-fi instrumentals, Bonobo, Tycho."
                />
              </ul>
            </Card>
          </Reveal>

          {/* Principles spanning row */}
          <Reveal className="lg:col-span-12" delay={0.2}>
            <Card className="p-8 sm:p-10">
              <Eyebrow>Principles</Eyebrow>
              <div className="mt-6 grid gap-8 sm:grid-cols-3">
                {principles.map((p) => (
                  <div key={p.n} className="flex gap-4">
                    <span className="font-mono text-xs text-accent-deep dark:text-accent">{p.n}</span>
                    <div>
                      <h3 className="font-serif text-2xl italic">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--bg-deep)] transition-colors hover:border-[color:var(--line-strong)] ${className}`}
    >
      {children}
    </div>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow">{children}</span>
}

function NowItem({ title, body }: { title: string; body: string }) {
  return (
    <li className="flex flex-col gap-1">
      <span className="font-mono text-[11px] uppercase tracking-widest text-accent-deep dark:text-accent">
        {title}
      </span>
      <span className="text-sm leading-snug">{body}</span>
    </li>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  align = 'left',
}: {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-sans text-mega font-medium tracking-tightest text-balance">
        {title.split(' ').map((word, i) => {
          if (word.endsWith('.')) {
            return (
              <span key={i}>
                {word.slice(0, -1)}
                <span className="font-serif italic text-accent-deep dark:text-accent">.</span>{' '}
              </span>
            )
          }
          return <span key={i}>{word} </span>
        })}
      </h2>
    </div>
  )
}
