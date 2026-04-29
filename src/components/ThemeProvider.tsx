'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
  toggle: () => void
}>({
  theme: 'dark',
  setTheme: () => null,
  toggle: () => null,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark')

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setThemeState(isDark ? 'dark' : 'light')
  }, [])

  const setTheme = (t: Theme) => {
    try {
      localStorage.setItem('theme', t)
    } catch {}
    const root = document.documentElement
    if (t === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    setThemeState(t)
  }

  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
