'use client';
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AOSProvider from '@/components/AOSProvider'
import FellowshipHero from '@/components/fellowship/FellowshipHero'
import ProgramOverview from '@/components/fellowship/ProgramOverview'
import EligibilityRequirements from '@/components/fellowship/EligibilityRequirements'
import FellowTestimonials from '@/components/fellowship/FellowTestimonials'
import FellowshipCTA from '@/components/fellowship/FellowshipCTA'
import type { JSX } from 'react'



export default function FellowshipPage(): JSX.Element {
    return (
        <AOSProvider>
            <main className="min-h-screen" role="main">
                <Header />

                {/* Hero Section */}
                <FellowshipHero />

                {/* Program Overview */}
                <ProgramOverview />

                {/* Eligibility & Requirements */}
                <EligibilityRequirements />

                {/* Fellow Testimonials */}
                <FellowTestimonials />

                {/* CTA Section */}
                <FellowshipCTA />

                <Footer />
            </main>

            {/* Custom CSS for animations */}
            <style jsx global>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </AOSProvider>
    )
}