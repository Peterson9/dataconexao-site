import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const manrope = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DataConexão — Conectamos sistemas, fortalecemos negócios',
  description:
    'A DataConexão oferece soluções completas de infraestrutura, redes, suporte técnico, monitorização e transformação digital para empresas em Angola.',
  generator: 'v0.app',
  keywords: [
    'TI Angola',
    'infraestrutura de TI',
    'redes corporativas',
    'suporte técnico',
    'transformação digital',
    'segurança da informação',
    'Luanda',
  ],
  openGraph: {
    title: 'DataConexão — Conectamos sistemas, fortalecemos negócios',
    description:
      'Soluções completas de infraestrutura, redes, suporte técnico e transformação digital para empresas em Angola.',
    locale: 'pt_AO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
      className={`${manrope.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
