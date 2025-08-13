import type { Metadata } from 'next'
import { Inter, Spline_Sans_Mono } from 'next/font/google'
import './globals.css'
import AOSProvider from '@/components/AOSProvider'

const inter = Inter({ subsets: ['latin'] })
const splineSansMono = Spline_Sans_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetBrainsMono'
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
      <body className={`${inter.className} ${splineSansMono.variable}`}>
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  )
}