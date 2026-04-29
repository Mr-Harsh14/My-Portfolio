'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import StatusPill from './StatusPill'
import Magnetic from './Magnetic'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <BackgroundLayer />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <StatusPill label="Available · Spring 2026" />
          <span className="eyebrow flex items-center gap-2">
            <span className="hidden sm:inline">Based in London, UK</span>
            <span className="sm:hidden">London, UK</span>
            <span className="opacity-50">·</span>
            <Clock />
          </span>
        </motion.div>

        <h1 className="mt-12 sm:mt-16 font-sans text-display font-medium text-balance">
          <Word delay={0.05}>Harsh</Word>
          <br />
          <Word delay={0.15} className="ml-[0.05em]">
            Maniya<span className="text-accent-deep dark:text-accent">.</span>
          </Word>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-4 font-serif text-2xl italic text-muted sm:text-3xl"
        >
          <span className="text-[color:var(--fg)]">— or </span>
          <span className="text-accent-deep dark:text-accent">Hazz</span>
          <span className="text-[color:var(--fg)]">, to friends.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.35 }}
          className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end"
        >
          <p className="max-w-2xl text-pretty text-xl leading-snug sm:text-2xl lg:col-span-7">
            Software developer & ML engineer building thoughtful products at the
            intersection of{' '}
            <span className="font-serif italic text-accent-deep dark:text-accent">web</span> and{' '}
            <span className="font-serif italic text-accent-deep dark:text-accent">AI</span>.
            Computer Science graduate from the University of Westminster, currently exploring how
            language models can quietly become great software.
          </p>

          <div className="flex flex-wrap items-center gap-3 lg:col-span-5 lg:justify-end">
            <Magnetic>
              <Link href="#work" className="btn-accent">
                See selected work
                <Arrow />
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link href="#contact" className="btn-ghost">
                Get in touch
              </Link>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 0.7 }}
          className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-[color:var(--line)] pt-6"
        >
          <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <span className="flex items-center gap-2">
              <span className="inline-block h-px w-8 bg-current opacity-40" />
              scroll
            </span>
            <span>v2 · 2026</span>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <SocialLink href="https://github.com/Mr-Harsh14">GitHub</SocialLink>
            <SocialLink href="https://www.linkedin.com/in/harsh-maniya-549957203/">
              LinkedIn
            </SocialLink>
            <SocialLink href="mailto:hmaniya00@gmail.com">Email</SocialLink>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Word({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, ease, delay }}
      className={`inline-block tracking-tightest ${className}`}
    >
      {children}
    </motion.span>
  )
}

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-underline text-[color:var(--fg-muted)] hover:text-[color:var(--fg)] transition-colors"
    >
      {children}
    </a>
  )
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}

function Clock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
      })
      setTime(now)
    }
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  return <span className="font-mono" suppressHydrationWarning>{time || '--:--'}</span>
}

function BackgroundLayer() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 dotted-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 60%)' }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-[color:var(--line-strong)] to-transparent" />
    </>
  )
}
