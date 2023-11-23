import { createClient } from '@/prismicio'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const settings = await client.getSingle("settings")
  return {
    title: settings.data.site_title || "Flowrise fallback",
    description: settings.data.meta_description || "Flowrise is the relaxing app for you",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className= {clsx(nunito.variable, nunitoSans.variable)}>
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
