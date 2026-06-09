'use client'

import { cn } from '@/lib/utils'
import { useReveal } from '@/hooks/use-reveal'
import type { ReactNode } from 'react'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'span' | 'li'
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <Tag
      ref={ref as never}
      className={cn('reveal', isVisible && 'is-visible', className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
