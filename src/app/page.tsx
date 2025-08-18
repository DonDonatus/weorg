import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/app/homepage/components/Hero'
import Vision from '@/app/homepage/components/Vision'
import About from '@/app/homepage/components/About'
import AOSProvider from '@/components/AOSProvider'
import { Brain, Building2, FileCheck, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'WE Org - AI-Powered Automation for Africa | Simplify Complex Processes',
  description: 'We create AI-powered automation agents that streamline operations for governments and enterprises across Africa - driven by local talent and real-world impact.',
  keywords: 'AI automation, government automation, enterprise AI, Africa technology, Ghana AI, process optimization',
}

const features = [
  {
    icon: Brain,
    title: "Applied AI Research",
    description: "Cutting-edge AI research tailored for African contexts.",
    highlight: "Innovation First"
  },
  {
    icon: Building2,
    title: "Government Automation Agents",
    description: "Intelligent automation for government operations and citizen services.",
    highlight: "Efficiency Boost"
  },
  {
    icon: FileCheck,
    title: "Document Verification Tools",
    description: "Advanced tools for authenticating government documents.",
    highlight: "Secure & Fast"
  },
  {
    icon: MessageSquare,
    title: "Local Language NLP Bots",
    description: "NLP bots that understand local African languages.",
    highlight: "Localized AI"
  }
]

export default function Home() {
  return (
    <AOSProvider>
      <main className="min-h-screen">
        <Nav />
        <Hero />
        <About />
        <Vision />
        <Footer />
      </main>
    </AOSProvider>
  )
}
