import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const DIFFERENTIALS = [
  'Atendimento personalizado',
  'Equipa qualificada',
  'Resposta rápida',
  'Soluções escaláveis',
  'Foco em resultados',
  'Suporte contínuo',
  'Segurança e confiabilidade',
  'Experiência em ambientes corporativos',
]

export function Differentials() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="pointer-events-none absolute -right-20 top-0 size-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 size-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/90">
              Diferenciais
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Por que escolher a DataConexão?
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((item, i) => (
            <Reveal key={item} delay={(i % 4) * 90}>
              <div className="glass flex h-full items-center gap-3 rounded-xl border border-primary-foreground/15 p-5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-4" />
                </span>
                <span className="text-sm font-medium leading-snug">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
