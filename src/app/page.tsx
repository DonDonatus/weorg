import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Vision from '@/components/sections/Vision'

export const metadata: Metadata = {
  title: 'WE Org - AI-Powered Automation for Africa | Simplify Complex Processes',
  description: 'We create AI-powered automation agents that streamline operations for governments and enterprises across Africa - driven by local talent and real-world impact.',
  keywords: 'AI automation, government automation, enterprise AI, Africa technology, Ghana AI, process optimization',
}

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <Vision />
            <Footer />
        </main>
    )
}

