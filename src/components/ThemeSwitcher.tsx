'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiLoader, FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return <FiLoader />

  if (resolvedTheme === 'dark') {
    return (
      <FiSun onClick={() => setTheme('light')} className="cursor-pointer" />
    )
  }

  if (resolvedTheme === 'light') {
    return (
      <FiMoon onClick={() => setTheme('dark')} className="cursor-pointer" />
    )
  }
}
