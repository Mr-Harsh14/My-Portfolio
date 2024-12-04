import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Harsh Maniya | Portfolio',
  description: 'Personal portfolio showcasing my projects, skills, and experiences as a Computer Science student in the UK.',
  icons: {
    icon: [
      {
        url: '/images/hazz.png',
        href: '/images/hazz.png',
      }
    ],
    apple: [
      {
        url: '/images/hazz.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    shortcut: [
      {
        url: '/images/hazz.png',
        type: 'image/png',
      }
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/images/hazz.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/hazz.png" />
      </head>
      <body className={`${inter.variable} font-sans bg-white dark:bg-gray-900`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 