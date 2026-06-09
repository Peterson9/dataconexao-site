import { ArrowRight, MessageCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { WHATSAPP_URL } from '@/lib/site'

export function CTA() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 lg:py-20">
            <div className="pointer-events-none absolute -right-10 -top-10 size-72 rounded-full bg-accent/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 size-72 rounded-full bg-accent/15 blur-3xl" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'linear-gradient(var(--color-primary-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-foreground) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Pronto para modernizar a sua empresa?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
                Fale com a DataConexão e descubra como podemos ajudar a
                transformar a sua infraestrutura tecnológica.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#contacto"
                  className={buttonVariants({
                    size: 'lg',
                    className:
                      'bg-accent text-accent-foreground hover:bg-accent/90',
                  })}
                >
                  Solicitar Proposta
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    size: 'lg',
                    variant: 'outline',
                    className:
                      'border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
                  })}
                >
                  <MessageCircle className="size-4" />
                  Contactar Especialista
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
