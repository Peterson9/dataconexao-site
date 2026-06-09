import { Target, Lightbulb, Handshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const PILLARS = [
  {
    icon: Target,
    title: 'Eficiência',
    text: 'Soluções que garantem conectividade, segurança e desempenho.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    text: 'Tecnologia alinhada às necessidades reais de cada cliente.',
  },
  {
    icon: Handshake,
    title: 'Confiança',
    text: 'Compromisso com soluções confiáveis para todos os portes.',
  },
]

export function About() {
  return (
    <section id="sobre" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-start gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Quem Somos
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Ajudamos empresas angolanas a crescer através da tecnologia
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                A DataConexão nasce com o propósito de ajudar empresas angolanas
                a alcançarem maior eficiência através da tecnologia.
              </p>
              <p>
                Atuamos na implementação, suporte e gestão de soluções
                tecnológicas que garantem conectividade, segurança e desempenho
                para organizações de todos os portes.
              </p>
              <p>
                Nosso compromisso é entregar soluções confiáveis, inovadoras e
                alinhadas às necessidades de cada cliente.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-1">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 120}>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <pillar.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
