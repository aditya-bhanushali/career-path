/**
 * ThemeToggle Component
 * Dark/Light mode toggle button
 */

'use client'

import { Moon, Sun } from 'lucide-react'
import { useChatStore } from '@/lib/store'
import { useEffect, useState } from 'react'

/**
 * Theme toggle button with dark/light mode support
 */
export const ThemeToggle = () => {
  const { theme, setTheme } = useChatStore()
  const [hydrated, setHydrated] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setHydrated(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  if (!hydrated) return null

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
      title="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}
