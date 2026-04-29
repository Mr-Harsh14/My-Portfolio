'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`mt-4 flex w-[min(96%,1100px)] items-center justify-between rounded-full px-3 py-2 transition-all duration-500 ${
          scrolled
            ? 'border border-[color:var(--line-strong)] bg-[color:var(--bg)]/70 backdrop-blur-xl shadow-[0_8px_40px_-16px_rgba(0,0,0,0.3)]'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2 pl-2 pr-4 font-mono text-sm tracking-tight"
          aria-label="hazz.me — home"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-ink-950 font-bold">
            H
          </span>
          <span className="hidden sm:inline">hazz<span className="text-muted">.me</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm text-[color:var(--fg-muted)] transition-colors hover:bg-[color:var(--line)] hover:text-[color:var(--fg)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-[color:var(--line)] transition-colors"
          >
            <span className="relative h-4 w-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`absolute inset-0 transition-all duration-300 ${
                  theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`}
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`absolute inset-0 transition-all duration-300 ${
                  theme === 'dark' ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </span>
          </button>

          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[color:var(--fg)] px-4 py-1.5 text-sm font-medium text-[color:var(--bg)] transition-opacity hover:opacity-90"
          >
            Let's talk
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-full hover:bg-[color:var(--line)]"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-4 bg-current transition-transform duration-200 ${
                  open ? 'translate-y-1 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-current transition-transform duration-200 ${
                  open ? '-translate-y-1 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 mx-4 w-[min(94%,500px)] rounded-3xl border border-[color:var(--line-strong)] bg-[color:var(--bg)]/95 backdrop-blur-xl p-3 md:hidden"
          >
            <nav className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base hover:bg-[color:var(--line)]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-[color:var(--fg)] px-4 py-3 text-base font-medium text-[color:var(--bg)] text-center"
              >
                Let's talk →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
