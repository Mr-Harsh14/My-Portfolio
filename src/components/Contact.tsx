'use client'

import Link from 'next/link'
import Reveal from './Reveal'
import Magnetic from './Magnetic'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 sm:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[400px] -translate-y-1/2 opacity-[0.12] blur-[120px]"
        style={{ background: 'radial-gradient(ellipse at center, var(--accent) 0%, transparent 70%)' }}
      />

      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">04 · Contact</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-sans text-mega font-medium tracking-tightest text-balance">
                Got an idea?{' '}
                <span className="font-serif italic text-accent-deep dark:text-accent">Let's build it.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted">
                I'm currently open to engineering roles, freelance collaborations, and the
                occasional weekend prototype. Drop me a line — I read everything.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Link
                    href="mailto:hmaniya00@gmail.com"
                    className="btn-accent text-base"
                  >
                    hmaniya00@gmail.com
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
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </Link>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-3">
                <ContactInfo label="Location" value="London, UK" />
                <ContactInfo label="Response" value="< 24 hours" />
                <ContactInfo label="Timezone" value="GMT (UTC+0)" />
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-5" delay={0.15}>
            <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--bg-deep)] p-6 sm:p-8">
              <h3 className="eyebrow mb-6">Or send a message</h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[color:var(--bg)] p-5">
      <div className="font-mono text-[11px] uppercase tracking-widest text-muted">{label}</div>
      <div className="mt-2 font-medium">{value}</div>
    </div>
  )
}
