import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
}

export const metadata: Metadata = {
  title: 'Harsh Maniya | Computer Science Portfolio',
  description: 'Final year Computer Science student at the University of Westminster, specialising in Web Development and Machine Learning. View my projects and experience.',
  icons: {
    icon: [{ url: '/images/hazz.png' }],
    apple: [{ url: '/images/hazz.png', sizes: '180x180', type: 'image/png' }],
    shortcut: [{ url: '/images/hazz.png', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
}

// Suppress specific hydration warnings
const suppressHydrationWarnings = `
  (function() {
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0].includes('Warning: Extra attributes from the server') && 
          (args[0].includes('data-new-gr-c-s-check-loaded') || 
           args[0].includes('data-gr-ext-installed'))) {
        return;
      }
      originalError.apply(console, args);
    };
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: suppressHydrationWarnings }} />
      </head>
      <body 
        className={`${inter.variable} font-sans bg-white dark:bg-gray-900`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 