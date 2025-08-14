import type { Metadata } from 'next'
import { Inter, Overpass_Mono } from 'next/font/google'
import './globals.css'
import AOSProvider from '@/components/AOSProvider'

const inter = Inter({ subsets: ['latin'] })
const overpassMono = Overpass_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono'
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
      <body className={`${inter.className} ${overpassMono.variable}`}>
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  )
}