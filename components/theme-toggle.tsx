'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Alternar tema claro/escuro"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-foreground/70 hover:text-foreground"
    >
      {mounted && theme === 'dark' ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </Button>
  )
}
