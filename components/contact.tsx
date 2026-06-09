'use client'

import { useState, type FormEvent } from 'react'
import { Mail, MapPin, MessageCircle, Phone, Send, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Reveal } from '@/components/reveal'
import { EMAIL, LOCATION, PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_NUMBER, WHATSAPP_URL } from '@/lib/site'

const CONTACTS = [
  { icon: MessageCircle, label: 'WhatsApp', value: PHONE_DISPLAY, href: WHATSAPP_URL },
  { icon: Phone, label: 'Telefone', value: PHONE_DISPLAY, href: `tel:+${PHONE_NUMBER}` },
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: 'Localização', value: LOCATION, href: undefined },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const nome = String(data.get('nome') ?? '')
    const empresa = String(data.get('empresa') ?? '')
    const email = String(data.get('email') ?? '')
    const mensagem = String(data.get('mensagem') ?? '')

    const text = `Olá DataConexão!%0A%0ANome: ${nome}%0AEmpresa: ${empresa}%0AEmail: ${email}%0A%0A${mensagem}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
    setSent(true)
    form.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contacto" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contactos
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Fale com a nossa equipa
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Preencha o formulário e entraremos em contacto, ou fale connosco
              diretamente pelos canais abaixo.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {CONTACTS.map((c, i) => (
              <Reveal key={c.label} delay={200 + i * 80}>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/50"
                  >
                    <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <c.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="font-semibold">{c.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <c.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="font-semibold">{c.value}</p>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" name="nome" required placeholder="O seu nome" />
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" name="empresa" placeholder="Nome da empresa" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@empresa.ao"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={4}
                  placeholder="Descreva a sua necessidade tecnológica..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {sent ? (
                  <>
                    <Check className="size-4" />
                    Mensagem enviada
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Solicitar Orçamento
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Ao enviar, será encaminhado para o WhatsApp da DataConexão.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
