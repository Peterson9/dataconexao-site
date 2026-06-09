import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    n: '01',
    title: 'Diagnóstico das necessidades',
    text: 'Analisamos a sua infraestrutura atual e identificamos oportunidades de melhoria.',
  },
  {
    n: '02',
    title: 'Planeamento da solução',
    text: 'Desenhamos uma solução escalável e alinhada aos objetivos do seu negócio.',
  },
  {
    n: '03',
    title: 'Implementação',
    text: 'Executamos o projeto com equipa qualificada, minimizando o tempo de indisponibilidade.',
  },
  {
    n: '04',
    title: 'Monitorização e suporte contínuo',
    text: 'Acompanhamos o desempenho e garantimos suporte permanente para o seu negócio.',
  },
]

export function Process() {
  return (
    <section id="processo" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Processo de Trabalho
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Como Trabalhamos
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-6 top-0 hidden h-full w-px bg-border lg:left-1/2 lg:block"
            aria-hidden="true"
          />
          <ol className="space-y-8 lg:space-y-0">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <Reveal key={step.n} delay={i * 100}>
                  <li
                    className={`relative lg:flex lg:items-center lg:gap-8 ${
                      isLeft ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className="lg:w-1/2">
                      <div
                        className={`rounded-2xl border border-border bg-card p-6 ${
                          isLeft ? 'lg:text-right' : 'lg:text-left'
                        }`}
                      >
                        <span className="font-heading text-sm font-bold text-accent">
                          Etapa {step.n}
                        </span>
                        <h3 className="mt-2 font-heading text-xl font-semibold">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {step.text}
                        </p>
                      </div>
                    </div>

                    <span className="absolute left-6 top-6 flex size-3 -translate-x-1/2 items-center justify-center lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2">
                      <span className="size-3 rounded-full bg-accent ring-4 ring-background" />
                    </span>

                    <div className="hidden lg:block lg:w-1/2" />
                  </li>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
