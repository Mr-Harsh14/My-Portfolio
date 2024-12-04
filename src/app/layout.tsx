import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Portfolio | Computer Science Student',
  description: 'Personal portfolio showcasing my projects, skills, and experiences as a Computer Science student in the UK.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  )
} 