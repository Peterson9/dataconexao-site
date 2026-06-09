import Image from 'next/image'
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { WHATSAPP_URL } from '@/lib/site'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="pointer-events-none absolute -top-32 right-0 size-[480px] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-40 size-[420px] rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="flex flex-col items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-foreground/70">
              <ShieldCheck className="size-3.5 text-accent" />
              Soluções de TI para empresas em Angola
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Transformamos tecnologia em{' '}
              <span className="text-accent">resultados</span> para o seu
              negócio.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
              A DataConexão oferece soluções completas de infraestrutura, redes,
              suporte técnico, monitorização e transformação digital para
              empresas que precisam de estabilidade, segurança e crescimento.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className={buttonVariants({
                  size: 'lg',
                  className:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                })}
              >
                Solicitar Orçamento
                <ArrowRight className="size-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  size: 'lg',
                  variant: 'outline',
                  className: 'border-border bg-card/40',
                })}
              >
                <MessageCircle className="size-4" />
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 text-sm font-medium text-muted-foreground">
              Conectamos sistemas, fortalecemos negócios.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/10">
            <Image
              src="/hero-tech.png"
              alt="Centro de dados com servidores, redes corporativas e computação em nuvem"
              width={1200}
              height={900}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>

          <div className="glass absolute -bottom-5 left-5 hidden items-center gap-3 rounded-xl border border-border/60 px-5 py-3 sm:flex">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
            </span>
            <div className="text-sm">
              <p className="font-semibold leading-none">Monitorização 24/7</p>
              <p className="text-xs text-muted-foreground">
                Sistemas sempre disponíveis
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
