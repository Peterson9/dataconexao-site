import {
  TrendingUp,
  ShieldAlert,
  Lock,
  Gauge,
  Timer,
  Sprout,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const BENEFITS = [
  { icon: TrendingUp, title: 'Maior produtividade' },
  { icon: ShieldAlert, title: 'Redução de falhas' },
  { icon: Lock, title: 'Mais segurança' },
  { icon: Gauge, title: 'Melhor desempenho operacional' },
  { icon: Timer, title: 'Menor tempo de indisponibilidade' },
  { icon: Sprout, title: 'Crescimento sustentável' },
]

export function Benefits() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Benefícios
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              A tecnologia certa para impulsionar o seu negócio
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={(i % 3) * 100}>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <benefit.icon className="size-6" />
                </span>
                <h3 className="font-heading text-lg font-semibold leading-snug">
                  {benefit.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
