import { Mail, MapPin, MessageCircle } from 'lucide-react'
import type { SVGProps } from 'react'
import { Logo } from '@/components/logo'
import { EMAIL, LOCATION, WHATSAPP_URL } from '@/lib/site'

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contactos', href: '#contacto' },
]

const SOCIAL = [
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Conectamos sistemas, fortalecemos negócios.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold">Navegação</h3>
            <ul className="mt-4 space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold">Contactos</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <MessageCircle className="size-4 text-accent" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 text-accent" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-accent" />
                {LOCATION}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold">Sobre</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Soluções de infraestrutura, redes, suporte técnico, segurança e
              transformação digital para empresas em Angola.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} DataConexão. Todos os direitos
            reservados.
          </p>
          <p>Luanda, Angola</p>
        </div>
      </div>
    </footer>
  )
}
