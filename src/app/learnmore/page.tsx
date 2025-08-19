import type { Metadata } from 'next'
import AOSProvider from '@/components/AOSProvider'
import LearnMoreClient from '@/app/learnmore/components/LearnMoreClient'

export const metadata: Metadata = {
  title: 'Learn More - WE Org | AI Solutions That Deliver Real Impact',
  description: 'We build intelligent automation for governments and enterprises across Africa, enhancing productivity while maintaining human oversight.',
    keywords: 'AI solutions, government automation, enterprise AI, learn more, WE Org solutions',
}

export default function EnhancedLandingPage() {
  return (
        <AOSProvider>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
                Skip to main content
            </a>
            <main id="main-content" className="min-h-screen" role="main">
                <LearnMoreClient />
            </main>
        </AOSProvider>
  )
}