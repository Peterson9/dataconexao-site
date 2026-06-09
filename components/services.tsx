import {
  Server,
  Headphones,
  Network,
  ShieldCheck,
  Activity,
  Workflow,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const SERVICES = [
  {
    icon: Server,
    title: 'Infraestrutura de TI',
    items: [
      'Instalação de servidores',
      'Configuração de redes',
      'Organização de racks',
      'Cabeamento estruturado',
    ],
  },
  {
    icon: Headphones,
    title: 'Suporte Técnico',
    items: [
      'Assistência presencial',
      'Assistência remota',
      'Manutenção preventiva',
      'Manutenção corretiva',
    ],
  },
  {
    icon: Network,
    title: 'Redes e Conectividade',
    items: [
      'Redes empresariais',
      'Wi-Fi corporativo',
      'VPN',
      'Segurança de acesso',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Segurança da Informação',
    items: [
      'Backup',
      'Antivírus corporativo',
      'Proteção de dados',
      'Monitorização',
    ],
  },
  {
    icon: Activity,
    title: 'Monitorização de Sistemas',
    items: [
      'Monitorização de servidores',
      'Monitorização de rede',
      'Gestão de incidentes',
      'Relatórios técnicos',
    ],
  },
  {
    icon: Workflow,
    title: 'Transformação Digital',
    items: [
      'Consultoria tecnológica',
      'Otimização de processos',
      'Soluções empresariais',
      'Integração de sistemas',
    ],
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Serviços
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Soluções completas para a sua infraestrutura tecnológica
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Do suporte técnico diário a projetos completos de transformação
              digital, cobrimos todas as necessidades do seu negócio.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold">
                  {service.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
