import type { Metadata } from 'next'
import { Inter, Schibsted_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const schibstedGrotesk = Schibsted_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-schibsted-grotesk'
})

export const metadata: Metadata = {
  title: 'WE Org - AI-Powered Automation for Africa',
  description: 'We create AI-powered automation agents that simplify complex processes for governments and enterprises across Africa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${schibstedGrotesk.variable}`}>{children}</body>
    </html>
  )
}