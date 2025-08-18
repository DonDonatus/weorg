import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import AOSProvider from '@/components/AOSProvider'
import { Brain, Building2, Eye, MessageSquare, Zap, Cloud, Server, Rocket, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Solutions - WE Org | Intelligent Agents for Government & Enterprise',
    description: 'We build intelligent agents that simplify government and enterprise operations. Applied AI research, automation agents, document verification, and local language assistants.',
    keywords: 'AI solutions, government automation, enterprise AI, document verification, local language NLP, Ghana AI company',
    openGraph: {
        title: 'AI Solutions - WE Org | Government & Enterprise Automation',
        description: 'Transform operations with intelligent AI agents. Applied research, automation, document verification, and local language support.',
        images: ['/img/cover.jpg'],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Solutions - WE Org',
        description: 'Intelligent agents for government and enterprise operations',
        images: ['/img/cover.jpg'],
    },
}

export default function SolutionsPage() {
    const coreSolutions = [
        {
            title: 'Applied AI Research',
            description: 'Custom model training and research solutions',
            icon: Brain,
            color: 'from-blue-500 to-cyan-500',
            features: ['Custom model training', 'Research collaboration', 'AI innovation']
        },
        {
            title: 'Government Automation Agents',
            description: 'Workflow bots and fraud detection systems',
            icon: Building2,
            color: 'from-purple-500 to-pink-500',
            features: ['Workflow automation', 'Fraud detection', 'Process optimization']
        },
        {
            title: 'Document Verification & Computer Vision',
            description: 'ID validation and OCR solutions',
            icon: Eye,
            color: 'from-emerald-500 to-teal-500',
            features: ['ID validation', 'OCR processing', 'Document analysis']
        },
        {
            title: 'Local Language Assistants',
            description: 'Twi, Ga, Hausa NLP bots',
            icon: MessageSquare,
            color: 'from-orange-500 to-red-500',
            features: ['Twi language support', 'Ga language support', 'Hausa language support']
        },
        {
            title: 'Enterprise Automation',
            description: 'Coming Soon - Enterprise workflow solutions',
            icon: Zap,
            color: 'from-indigo-500 to-purple-500',
            features: ['Coming Soon', 'Enterprise workflows', 'Process automation'],
            comingSoon: true
        }
    ]

    const deliveryModels = [
        {
            title: 'On-premise or Private Cloud',
            description: 'Deploy securely within your infrastructure',
            icon: Server
        },
        {
            title: 'BYOC (Bring Your Own Cloud)',
            description: 'Use your preferred cloud provider',
            icon: Cloud
        },
        {
            title: 'Custom R&D Projects',
            description: 'Tailored research and development solutions',
            icon: Rocket
        }
    ]

    return (
        <AOSProvider>
            {/* Skip to main content link for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg transition-all duration-200 hover:bg-blue-700"
            >
                Skip to main content
            </a>

            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "WE Org",
                        "description": "AI solutions for government and enterprise operations",
                        "url": "https://weorg.com",
                        "logo": "https://weorg.com/logo_full_b.png",
                        "sameAs": [
                            "https://linkedin.com/company/weorg",
                            "https://twitter.com/weorg"
                        ],
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "contactType": "customer service",
                            "availableLanguage": ["English", "Twi", "Ga", "Hausa"]
                        }
                    })
                }}
            />

            <main id="main-content" className="min-h-screen" role="main" tabIndex={-1}>
                <Nav />

                {/* Hero Section 1 */}
                <section
                    className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden"
                    aria-labelledby="hero-heading"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0" aria-hidden="true">
                        <Image
                            alt="AI Solutions and Technology background showing digital transformation and innovation"
                            src="/img/cover.jpg"
                            fill
                            className="object-cover opacity-30"
                            priority
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-blue-950/85 to-indigo-950/85"></div>
                    </div>

                    <div className="relative z-10 mx-auto max-w-7xl">
                        <div className="pt-14 lg:w-full lg:max-w-2xl">
                            <div className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:px-8 lg:py-24 lg:pr-0">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                    <h1
                                        id="hero-heading"
                                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif uppercase font-semibold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight"
                                        tabIndex={0}
                                    >
                                        Intelligent <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Solutions</span>
                                    </h1>
                                    <p className="mt-4 sm:mt-6 text-base font-medium text-pretty text-slate-200 sm:text-xl/8 leading-relaxed">
                                        We build intelligent agents that simplify government and enterprise operations with cutting-edge AI technology.
                                    </p>
                                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                                        <Link
                                            href="/demo"
                                            className="btn-primary w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300"
                                            aria-label="Request a demo of our AI solutions"
                                        >
                                            Request Demo
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Core Solutions Section */}
                <section
                    className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
                    aria-labelledby="core-solutions-heading"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative">
                        <div className="text-center mb-10 sm:mb-8 md:mb-12"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <h2
                                id="core-solutions-heading"
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase font-serif text-white mb-2 sm:mb-3 md:mb-4"
                            >
                                Core Solutions
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                                Comprehensive AI solutions designed to transform government and enterprise operations with cutting-edge technology
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                                {coreSolutions.map((solution, index) => {
                                    const gradients = [
                                        'from-cyan-400 to-blue-500',
                                        'from-indigo-400 to-pink-500',
                                        'from-emerald-400 to-teal-500',
                                        'from-orange-400 to-red-500',
                                        'from-purple-400 to-indigo-500'
                                    ]
                                    const iconColors = [
                                        'from-cyan-400 to-blue-500',
                                        'from-indigo-400 to-pink-500',
                                        'from-emerald-400 to-teal-500',
                                        'from-orange-400 to-red-500',
                                        'from-purple-400 to-indigo-500'
                                    ]
                                    const borderGradients = [
                                        'hover:border-cyan-400/50',
                                        'hover:border-indigo-400/50',
                                        'hover:border-emerald-400/50',
                                        'hover:border-orange-400/50',
                                        'hover:border-purple-400/50'
                                    ]

                                    return (
                                        <div key={solution.title} className="group relative" data-aos="fade-up" data-aos-delay={400 + (index * 200)} data-aos-duration="1000">
                                            <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[index]} rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500`}></div>
                                            <div className={`relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-700/50 ${borderGradients[index]} transition-all duration-500`}>
                                                {/* Coming Soon Badge */}
                                                {solution.comingSoon && (
                                                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                                                        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                                                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-pulse" aria-label="Coming soon indicator"></div>
                                                            Coming Soon
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="flex items-center mb-3 sm:mb-4">
                                                    <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${iconColors[index]}`}>
                                                        <solution.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl font-semibold text-white ml-3">{solution.title}</h3>
                                                </div>
                                                <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                                                    {solution.description}
                                                </p>

                                                {/* Features */}
                                                <div className="space-y-1.5 sm:space-y-2 pt-1.5 sm:pt-2 md:pt-3">
                                                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                                        Key Features
                                                    </h4>
                                                    <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                                                        {solution.features.map((feature, featureIndex) => (
                                                            <li key={featureIndex} className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 text-slate-300">
                                                                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                                                    <CheckCircle className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 text-white" aria-hidden="true" />
                                                                </div>
                                                                <span className="text-xs sm:text-sm font-medium">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </section>

                {/* Delivery Models Section */}
                <section
                    className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden"
                    aria-labelledby="delivery-models-heading"
                >
                    {/* Enhanced Background Elements */}
                    <div className="absolute inset-0" aria-hidden="true">
                        {/* Subtle Grid Pattern */}
                        <div className="absolute inset-0 opacity-5" style={{
                            backgroundImage: `
                                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: '60px 60px'
                        }}></div>

                        {/* Floating Elements */}
                        <div className="absolute top-16 sm:top-20 right-16 sm:right-20 w-24 sm:w-32 h-24 sm:h-32 border border-blue-400/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                        <div className="absolute bottom-16 sm:bottom-20 left-16 sm:left-20 w-20 sm:w-24 h-20 sm:h-24 border border-indigo-400/20 rotate-45 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 border border-purple-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative">
                        {/* Compact Header */}
                        <div className="text-center mb-8 sm:mb-8 md:mb-12 lg:mb-16"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <h2
                                id="delivery-models-heading"
                                className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif uppercase text-slate-900 dark:text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight"
                            >
                                Choose Your Deployment
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                                Multiple deployment options designed to meet your security, compliance, and infrastructure requirements with enterprise-grade reliability
                            </p>
                        </div>

                        {/* Delivery Models Grid - Using News Highlights Style */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
                            {deliveryModels.map((model, index) => (
                                <div
                                    key={model.title}
                                    className="bg-white dark:bg-slate-800 rounded-xl p-5 sm:p-4 md:p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={300 + index * 150}
                                    data-aos-duration="1000"
                                >
                                    <div className="flex items-center mb-3 sm:mb-4">
                                        <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-indigo-600 rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                            <model.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" aria-hidden="true" />
                                        </div>
                                        <h4 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 dark:text-white">{model.title}</h4>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                                        {model.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Compact Additional Info Section */}
                        <div className="text-center mt-8 sm:mt-10 md:mt-12"
                            data-aos="fade-up"
                            data-aos-delay="800"
                            data-aos-duration="1000"
                        >
                            <div className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white/80 backdrop-blur-sm border border-slate-200/50 text-slate-700 rounded-xl sm:rounded-2xl font-medium shadow-sm max-w-4xl mx-auto">
                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-emerald-400 rounded-full animate-pulse" aria-label="Status indicator"></div>
                                <span className="text-xs sm:text-sm md:text-base">All deployment models include enterprise support, security compliance, and 99.9% uptime guarantee</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Study Teaser Section */}
                <section
                    className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
                    aria-labelledby="case-study-heading"
                >
                    {/* Background Elements */}
                    <div className="absolute inset-0" aria-hidden="true">
                        <div className="absolute top-16 right-16 w-24 h-24 border border-blue-400/10 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-16 left-16 w-20 h-20 border border-cyan-400/10 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
                        {/* Header */}
                        <div className="text-center mb-10 sm:mb-12"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-200 mb-4">
                                <span>Featured Success Story</span>
                            </div>

                            <h2
                                id="case-study-heading"
                                className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif uppercase text-white mb-4 leading-tight"
                            >
                                AI Transformation in Action
                            </h2>

                            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                                Discover how our intelligent solutions are revolutionizing government operations with measurable results
                            </p>
                        </div>

                        {/* Modern Case Study Card */}
                        <div className="relative"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                        >
                            {/* Main Card */}
                            <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-600/50 shadow-xl">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7 lg:gap-10 items-center">
                                    {/* Left: Content */}
                                    <div className="space-y-4 sm:space-y-5">

                                        {/* Title */}
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight">
                                            Digital <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Licensing</span> Revolution
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                                            Our AI-powered automation solution transformed a government licensing process,
                                            eliminating bottlenecks and delivering measurable improvements across all key metrics.
                                        </p>

                                        {/* Key Benefits */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
                                            <div className="flex items-center gap-2 text-slate-300">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full" aria-label="Benefit indicator"></div>
                                                <span className="text-xs sm:text-sm font-medium">Faster Processing</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-300">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full" aria-label="Benefit indicator"></div>
                                                <span className="text-xs sm:text-sm font-medium">Reduced Errors</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-300">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full" aria-label="Benefit indicator"></div>
                                                <span className="text-xs sm:text-sm font-medium">Cost Savings</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-300">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full" aria-label="Benefit indicator"></div>
                                                <span className="text-xs sm:text-sm font-medium">Better UX</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Metrics & Visual */}
                                    <div className="text-center space-y-4 sm:space-y-5">
                                        {/* Main Metric */}
                                        <div className="relative">
                                            <div className="text-4xl sm:text-5xl md:text-6xl font-semibold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2">
                                                35%
                                            </div>
                                            <div className="text-base sm:text-lg text-white font-semibold">Efficiency Improvement</div>
                                        </div>

                                        {/* Secondary Metrics */}
                                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                            <div className="bg-slate-700/50 rounded-xl p-3 sm:p-4 border border-slate-600/50">
                                                <div className="text-lg sm:text-xl font-bold text-blue-400 mb-1">50%</div>
                                                <div className="text-xs text-slate-300">Faster Processing</div>
                                            </div>
                                            <div className="bg-slate-700/50 rounded-xl p-3 sm:p-4 border border-slate-600/50">
                                                <div className="text-lg sm:text-xl font-bold text-cyan-400 mb-1">90%</div>
                                                <div className="text-xs text-slate-300">Error Reduction</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"></div>
                        </div>

                        {/* CTA */}
                        <div className="text-center mt-10 sm:mt-12"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                        >
                            <Link
                                href="/demo"
                                className="btn-white group text-base px-6 py-3 w-full sm:w-auto min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-300"
                                aria-label="Explore all success stories and case studies"
                            >
                                <span>Explore All Success Stories</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-20 bg-black" aria-labelledby="cta-heading">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-800/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-16 w-56 h-56 bg-indigo-900/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-900/20 to-indigo-900/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-4xl font-bold font-serif text-white mb-6 leading-tight">
                            Ready to Transform Your Operations?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 mb-8">
                            Let&apos;s discuss how our AI solutions can streamline your government or enterprise processes and drive real results. Meet our leadership team to learn more about our mission.
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <Link
                                href="/contact"
                                className="btn-primary focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
                                aria-label="Request a demo of our AI solutions"
                            >
                                Request a Demo
                            </Link>
                            <Link
                                href="/leadership"
                                className="btn-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                                aria-label="Meet our leadership team"
                            >
                                Meet Our Team
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </AOSProvider>
    )
}

