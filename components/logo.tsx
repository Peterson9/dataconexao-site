import { cn } from '@/lib/utils'

export function Logo({
  className,
  showText = true,
}: {
  className?: string
  showText?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="size-5"
        >
          <path
            d="M4 7.5C4 6.12 7.58 5 12 5s8 1.12 8 2.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4 7.5v9c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4 12c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="7.5" r="1.4" fill="var(--color-accent)" />
        </svg>
      </span>
      {showText && (
        <span className="font-heading text-lg font-bold tracking-tight">
          Data<span className="text-accent">Conexão</span>
        </span>
      )}
    </span>
  )
}
