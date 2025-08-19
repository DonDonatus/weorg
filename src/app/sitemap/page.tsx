import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import AOSProvider from '@/components/AOSProvider'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Sitemap - WE Org | Complete Site Navigation',
    description: 'Navigate through all sections and pages of WE Org website. Find information about our AI solutions, services, and resources.',
    keywords: 'sitemap, site navigation, WE Org pages, website structure',
}

export default function SitemapPage() {
    const mainSections = [
        {
            title: 'Main Pages',
            pages: [
                { name: 'Home', href: '/', description: 'Welcome to WE Org - AI-Powered Automation for Africa' },
                { name: 'About Us', href: '/about', description: 'Learn about our mission, vision, and team' },
                { name: 'Contact', href: '/contact', description: 'Get in touch with our team' },
            ]
        },
        {
            title: 'Services & Solutions',
            pages: [
                { name: 'Solutions', href: '/solutions', description: 'Explore our AI automation solutions for governments and enterprises' },
                { name: 'Partnerships', href: '/partnership', description: 'Discover partnership opportunities with WE Org' },
            ]
        },
        {
            title: 'Programs & Resources',
            pages: [
                { name: 'AI Fellowship', href: '/fellowship', description: 'Join our National AI Fellowship program' },
                { name: 'News & Updates', href: '/news', description: 'Stay updated with latest AI developments and company news' },
            ]
        },
        {
            title: 'Legal & Policies',
            pages: [
                { name: 'Privacy Policy', href: '/privacy', description: 'How we collect, use, and protect your information' },
                { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions for using our services' },
                { name: 'Cookie Policy', href: '/cookies', description: 'Information about cookies and tracking technologies' },
                { name: 'Accessibility Statement', href: '/accessibility', description: 'Our commitment to digital accessibility' },
            ]
        }
    ]

    return (
        <AOSProvider>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
                Skip to main content
            </a>
            <main id="main-content" className="min-h-screen" role="main">
                <Nav />
                <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white" aria-labelledby="sitemap-heading">
                    <div className="max-w-6xl mx-auto px-6">
                        <h1 id="sitemap-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold uppercase my-6 text-center">Site Map</h1>
                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed sm:leading-8 mb-12 text-center max-w-3xl mx-auto">
                            Navigate through all sections of our website to find the information you need about WE Org&apos;s AI solutions, services, and resources.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {mainSections.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-6 sm:p-8 border border-slate-700">
                                    <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-slate-100 border-b border-slate-600 pb-3">
                                        {section.title}
                                    </h2>
                                    <div className="space-y-4">
                                        {section.pages.map((page, pageIndex) => (
                                            <div key={pageIndex} className="group">
                                                <Link
                                                    href={page.href}
                                                    className="block p-4 rounded-md bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-300 border border-slate-600 hover:border-slate-500 group-hover:shadow-lg"
                                                >
                                                    <h3 className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors mb-2">
                                                        {page.name}
                                                    </h3>
                                                    <p className="text-slate-300 text-sm leading-relaxed">
                                                        {page.description}
                                                    </p>
                                                    <div className="mt-3 flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                                                        <span>Visit page</span>
                                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <div className="bg-slate-800/50 rounded-lg p-6 sm:p-8 border border-slate-700 max-w-4xl mx-auto">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-100">Quick Navigation Tips</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-300">
                                    <div className="text-left">
                                        <h3 className="font-medium text-slate-100 mb-2">For Businesses & Governments</h3>
                                        <ul className="space-y-1">
                                            <li>• Start with <Link href="/solutions" className="underline hover:text-blue-300">Solutions</Link></li>
                                            <li>• Explore <Link href="/partnership" className="underline hover:text-blue-300">Partnerships</Link></li>
                                            <li>• Contact us via <Link href="/contact" className="underline hover:text-blue-300">Contact</Link></li>
                                        </ul>
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-medium text-slate-100 mb-2">For Individuals & Students</h3>
                                        <ul className="space-y-1">
                                            <li>• Check out <Link href="/fellowship" className="underline hover:text-blue-300">AI Fellowship</Link></li>
                                            <li>• Read our <Link href="/about" className="underline hover:text-blue-300">About</Link> page</li>
                                            <li>• Stay updated with <Link href="/news" className="underline hover:text-blue-300">News</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </AOSProvider>
    )
}
