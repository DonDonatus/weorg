import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
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
                <Header />

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
                            className="object-cover opacity-50"
                            priority
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/50 via-blue-950/50 to-indigo-950/50"></div>
                    </div>

                    <div className="relative z-10 mx-auto max-w-7xl">
                        <div className="pt-14 lg:w-full lg:max-w-2xl">
                            <div className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:px-8 lg:py-24 lg:pr-0">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">

                                    <h1
                                        id="hero-heading"
                                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase font-serif tracking-tight text-pretty leading-tight"
                                    >
                                        <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
                                            Intelligent
                                        </span>{' '}
                                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                            Solutions
                                        </span>
                                    </h1>
                                    <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium text-pretty text-slate-200 sm:text-xl/8 leading-relaxed">
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
                    className="py-12 sm:py-12 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden"
                    aria-labelledby="core-solutions-heading"
                >
                    {/* Background Elements */}
                    <div className="absolute inset-0" aria-hidden="true">
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10">
                            <div className="absolute top-16 sm:top-20 left-16 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 border border-blue-400/20 dark:border-blue-400/10 rounded-full animate-spin-slow"></div>
                            <div className="absolute bottom-16 sm:bottom-20 right-16 sm:right-20 w-20 sm:w-24 h-20 sm:h-24 border border-purple-400/20 dark:border-purple-400/10 rotate-45 animate-pulse"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 border border-cyan-400/10 dark:border-cyan-400/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative">
                        <div className="text-center mb-10 sm:mb-8 md:mb-12"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <h2
                                id="core-solutions-heading"
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase font-serif text-slate-900 dark:text-white mb-2 sm:mb-3 md:mb-4"
                            >
                                Core Solutions
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                                Comprehensive AI solutions designed to transform government and enterprise operations with cutting-edge technology
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-4 md:gap-6">
                            {coreSolutions.map((solution, index) => (
                                <div
                                    key={solution.title}
                                    className="group relative"
                                    data-aos="fade-up"
                                    data-aos-delay={200 + index * 150}
                                    data-aos-duration="1000"
                                >
                                    <div className="relative bg-white dark:bg-slate-900/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-4 md:p-6 border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-slate-900">
                                        {/* Coming Soon Badge */}
                                        {solution.comingSoon && (
                                            <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                                                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-pulse" aria-label="Coming soon indicator"></div>
                                                    Coming Soon
                                                </span>
                                            </div>
                                        )}

                                        {/* Icon Container */}
                                        <div className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-500 shadow-lg`}>
                                            <solution.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" aria-hidden="true" />
                                            <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-white/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                                            <h3 className="text-base sm:text-lg md:text-xl font-bold font-serif text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                {solution.title}
                                            </h3>

                                            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {solution.description}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-1.5 sm:space-y-2 pt-1.5 sm:pt-2 md:pt-3">
                                                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                                    Key Features
                                                </h4>
                                                <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                                                    {solution.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                                                            <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                                                <CheckCircle className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 text-white" aria-hidden="true" />
                                                            </div>
                                                            <span className="text-xs sm:text-sm font-medium">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Hover Effect Overlay */}
                                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                    </div>
                                </div>
                            ))}
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

                        {/* Compact Delivery Models Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-6 sm:mb-8 md:mb-12">
                            {deliveryModels.map((model, index) => (
                                <div
                                    key={model.title}
                                    className="group relative"
                                    data-aos="fade-up"
                                    data-aos-delay={300 + index * 150}
                                    data-aos-duration="1000"
                                >
                                    {/* Compact Card */}
                                    <div className="relative bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-4 md:p-6 lg:p-8 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 hover:-translate-y-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-slate-900">
                                        {/* Icon Container */}
                                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                            <model.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" aria-hidden="true" />
                                            <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="text-center space-y-1.5 sm:space-y-2">
                                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                {model.title}
                                            </h3>

                                            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {model.description}
                                            </p>
                                        </div>

                                        {/* Hover Effect Overlay */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Compact Additional Info Section */}
                        <div className="text-center"
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
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" aria-label="Featured indicator"></div>
                                <span>Featured Success Story</span>
                            </div>

                            <h2
                                id="case-study-heading"
                                className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif uppercase text-white mb-4 leading-tight"
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
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
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
                                            <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
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
                <section
                    className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
                    aria-labelledby="cta-heading"
                >
                    {/* Background Elements */}
                    <div className="absolute inset-0" aria-hidden="true">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div className="absolute top-16 sm:top-20 left-8 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 border border-cyan-400/30 rounded-full animate-spin-slow"></div>
                            <div className="absolute bottom-16 sm:bottom-20 right-8 sm:right-10 w-20 sm:w-24 h-20 sm:h-24 border border-purple-400/30 rotate-45 animate-pulse"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>

                    <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6">
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >

                            <h2
                                id="cta-heading"
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                            >
                                Ready to Transform Your Operations?
                            </h2>
                            <p className="text-base sm:text-lg sm:text-xl text-slate-200 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                                Let&apos;s discuss how our AI solutions can streamline your government or enterprise processes and drive real results.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center">
                                <Link
                                    href="/contact"
                                    className="btn-primary group text-base sm:text-lg px-6 sm:px-8 sm:px-10 md:px-12 py-3 sm:py-4 sm:py-5 w-full sm:w-auto min-h-[44px] shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                                    aria-label="Request a demo of our AI solutions"
                                >
                                    <span>Request a Demo</span>
                                </Link>
                                <Link
                                    href="/about"
                                    className="btn-white group text-base sm:text-lg px-6 sm:px-8 sm:px-10 md:px-12 py-3 sm:py-4 sm:py-5 w-full sm:w-auto min-h-[44px] shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                                    aria-label="Learn more about our company and solutions"
                                >
                                    <span>Discover Our Story</span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </AOSProvider>
    )
}

