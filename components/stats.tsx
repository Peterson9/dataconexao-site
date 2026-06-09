import { Counter } from '@/components/counter'
import { Reveal } from '@/components/reveal'

const STATS = [
  {
    value: 99.9,
    decimals: 1,
    suffix: '%',
    label: 'Disponibilidade dos sistemas',
  },
  { value: 24, suffix: '/7', label: 'Monitorização' },
  { value: 100, suffix: '%', label: 'Compromisso com o cliente' },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary/40 py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-5 text-center sm:grid-cols-3 lg:px-8">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 120}>
            <div>
              <p className="font-heading text-5xl font-bold tracking-tight text-accent lg:text-6xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </p>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
