import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f4ef' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://hazz.me'),
  title: {
    default: 'Hazz — Harsh Maniya · Software Developer & ML Engineer',
    template: '%s · hazz.me',
  },
  description:
    'Harsh Maniya (Hazz) is a software developer and machine learning engineer building thoughtful products at the intersection of web and AI.',
  keywords: [
    'Harsh Maniya',
    'Hazz',
    'hazz.me',
    'Software Developer',
    'Machine Learning Engineer',
    'Next.js',
    'Portfolio',
    'University of Westminster',
    'London',
  ],
  authors: [{ name: 'Harsh Maniya', url: 'https://hazz.me' }],
  creator: 'Harsh Maniya',
  alternates: {
    canonical: 'https://hazz.me',
  },
  openGraph: {
    title: 'Hazz — Harsh Maniya · Software Developer & ML Engineer',
    description: 'Building thoughtful products at the intersection of web and AI.',
    url: 'https://hazz.me',
    siteName: 'hazz.me',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hazz — Harsh Maniya · Software Developer & ML Engineer',
    description: 'Building thoughtful products at the intersection of web and AI.',
  },
  icons: {
    icon: [{ url: '/images/Hazz.png' }],
    apple: [{ url: '/images/Hazz.png', sizes: '180x180', type: 'image/png' }],
    shortcut: [{ url: '/images/Hazz.png', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const themeScript = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored || (prefersDark ? 'dark' : 'dark');
        if (theme === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
      } catch (e) {
        document.documentElement.classList.add('dark');
      }
    })();
  `

  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} ${mono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans grain antialiased" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
