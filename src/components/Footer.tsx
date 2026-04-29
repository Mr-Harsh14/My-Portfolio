'use client'

import Link from 'next/link'

const links = {
  Sections: [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#stack', label: 'Stack' },
    { href: '#contact', label: 'Contact' },
  ],
  Elsewhere: [
    { href: 'https://github.com/Mr-Harsh14', label: 'GitHub', external: true },
    {
      href: 'https://www.linkedin.com/in/harsh-maniya-549957203/',
      label: 'LinkedIn',
      external: true,
    },
    { href: 'mailto:hmaniya00@gmail.com', label: 'Email' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--line)]">
      <div className="container-x">
        {/* Big wordmark */}
        <div className="relative py-16 sm:py-20">
          <a
            href="https://hazz.me"
            className="block font-sans text-display font-medium leading-[0.85] tracking-tightest text-[color:var(--fg)]"
            aria-label="hazz.me"
          >
            <span className="opacity-90">hazz</span>
            <span className="font-serif italic text-accent-deep dark:text-accent">.</span>
            <span className="opacity-50">me</span>
          </a>
        </div>

        <div className="grid gap-12 border-t border-[color:var(--line)] py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="eyebrow">Now</h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Building, learning, and quietly shipping from London.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
              <span className="inline-block h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent-deep dark:bg-accent" />
              Open to opportunities
            </p>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="eyebrow">{title}</h3>
              <ul className="mt-4 space-y-2.5">
                {items.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                      className="link-underline text-sm text-[color:var(--fg)] hover:text-[color:var(--fg)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="eyebrow">Colophon</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Designed & built with{' '}
              <Link
                href="https://nextjs.org"
                target="_blank"
                className="link-underline text-[color:var(--fg)]"
              >
                Next.js
              </Link>
              ,{' '}
              <Link
                href="https://tailwindcss.com"
                target="_blank"
                className="link-underline text-[color:var(--fg)]"
              >
                Tailwind
              </Link>{' '}
              and{' '}
              <Link
                href="https://www.framer.com/motion/"
                target="_blank"
                className="link-underline text-[color:var(--fg)]"
              >
                Framer Motion
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-[color:var(--line)] py-8 text-xs uppercase tracking-widest text-muted sm:flex-row sm:items-center">
          <span className="font-mono">© {year} · Harsh Maniya · aka Hazz</span>
          <span className="font-mono">hazz.me · v2.0</span>
        </div>
      </div>
    </footer>
  )
}
