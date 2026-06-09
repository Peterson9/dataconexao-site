import { MessageCircle } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Differentials } from '@/components/differentials'
import { Process } from '@/components/process'
import { Benefits } from '@/components/benefits'
import { Stats } from '@/components/stats'
import { CTA } from '@/components/cta'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WHATSAPP_URL } from '@/lib/site'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Process />
        <Benefits />
        <Stats />
        <CTA />
        <Contact />
      </main>
      <SiteFooter />

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
      </a>
    </>
  )
}
