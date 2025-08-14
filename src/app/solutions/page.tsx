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
                    className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-indigo-950/20 relative overflow-hidden"
                    aria-labelledby="core-solutions-heading"
                >
                    {/* Background Elements */}
                    <div className="absolute inset-0" aria-hidden="true">
                        <div className="absolute top-0 left-0 w-full h-full opacity-5">
                            <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rounded-full animate-spin-slow"></div>
                            <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/20 rotate-45 animate-pulse"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                        <div className="text-center mb-8 sm:mb-12"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >

                            <h2
                                id="core-solutions-heading"
                                className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase font-serif text-slate-900 dark:text-white mb-3 sm:mb-4"
                            >
                                Core Solutions
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
                                Comprehensive AI solutions designed to transform government and enterprise operations with cutting-edge technology
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                            {coreSolutions.map((solution, index) => (
                                <div
                                    key={solution.title}
                                    className="group relative"
                                    data-aos="fade-up"
                                    data-aos-delay={200 + index * 150}
                                    data-aos-duration="1000"
                                >
                                    <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-slate-900">
                                        {/* Coming Soon Badge */}
                                        {solution.comingSoon && (
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                                                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" aria-label="Coming soon indicator"></div>
                                                    Coming Soon
                                                </span>
                                            </div>
                                        )}
                                        
                                        {/* Icon Container */}
                                        <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-500 shadow-lg`}>
                                            <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" aria-hidden="true" />
                                            <div className="absolute inset-0 rounded-xl bg-white/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="space-y-2 sm:space-y-3">
                                            <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                {solution.title}
                                            </h3>
                                            
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {solution.description}
                                            </p>
                                            
                                            {/* Features */}
                                            <div className="space-y-2 pt-2 sm:pt-3">
                                                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                                    Key Features
                                                </h4>
                                                <ul className="space-y-1.5 sm:space-y-2">
                                                    {solution.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-center gap-2 sm:gap-2.5 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                                                            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center flex-shrink-0">
                                                                <CheckCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" aria-hidden="true" />
                                                            </div>
                                                            <span className="text-xs sm:text-sm font-medium">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Hover Effect Overlay */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* Delivery Models Section */}
                <section
                    className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden"
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
                        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-400/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                        <div className="absolute bottom-20 left-20 w-24 h-24 border border-indigo-400/20 rotate-45 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                        {/* Compact Header */}
                        <div className="text-center mb-12 sm:mb-16"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <h2
                                id="delivery-models-heading"
                                className="text-3xl sm:text-4xl font-bold font-serif uppercase text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight"
                            >
                                Choose Your Deployment
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
                                Multiple deployment options designed to meet your security, compliance, and infrastructure requirements with enterprise-grade reliability
                            </p>
                        </div>

                        {/* Compact Delivery Models Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
                            {deliveryModels.map((model, index) => (
                                <div
                                    key={model.title}
                                    className="group relative"
                                    data-aos="fade-up"
                                    data-aos-delay={300 + index * 150}
                                    data-aos-duration="1000"
                                >
                                    {/* Compact Card */}
                                    <div className="relative bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 hover:-translate-y-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-slate-900">
                                        {/* Icon Container */}
                                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                            <model.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-hidden="true" />
                                            <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="text-center space-y-2">
                                            <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                {model.title}
                                            </h3>
                                            
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
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
                            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-sm border border-slate-200/50 text-slate-700 rounded-2xl font-medium shadow-sm">
                                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                                <span>All deployment models include enterprise support, security compliance, and 99.9% uptime guarantee</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Study Teaser Section */}
                <section
                    className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
                    aria-labelledby="case-study-heading"
                >
                    {/* Background Elements */}
                    <div className="absolute inset-0" aria-hidden="true">
                        <div className="absolute top-20 right-20 w-32 h-32 border border-emerald-400/10 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-20 left-20 w-24 h-24 border border-cyan-400/10 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>

                    <div className="max-w-6xl mx-auto px-6 relative">
                        {/* Header */}
                        <div className="text-center mb-16"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-sm text-emerald-200 mb-6">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                <span>Featured Success Story</span>
                            </div>

                            <h2
                                id="case-study-heading"
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                            >
                                AI <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Transformation</span> in Action
                            </h2>
                            
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
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
                            <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-3xl p-8 lg:p-12 border border-slate-600/50 shadow-2xl">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                    {/* Left: Content */}
                                    <div className="space-y-6">
                                        {/* Project Badge */}
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-xl text-sm text-emerald-200 font-medium">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                            <span>Government Licensing System</span>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                                            Digital <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Licensing</span> Revolution
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-lg text-slate-300 leading-relaxed">
                                            Our AI-powered automation solution transformed a government licensing process, 
                                            eliminating bottlenecks and delivering measurable improvements across all key metrics.
                                        </p>
                                        
                                        {/* Key Benefits */}
                                        <div className="grid grid-cols-2 gap-4 pt-4">
                                            <div className="flex items-center gap-3 text-slate-300">
                                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                                <span className="text-sm font-medium">Faster Processing</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-300">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                                <span className="text-sm font-medium">Reduced Errors</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-300">
                                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                                <span className="text-sm font-medium">Cost Savings</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-300">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                                <span className="text-sm font-medium">Better UX</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Metrics & Visual */}
                                    <div className="text-center space-y-6">
                                        {/* Main Metric */}
                                        <div className="relative">
                                            <div className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                                35%
                                            </div>
                                            <div className="text-xl text-white font-semibold mb-2">Efficiency Improvement</div>
                                            <div className="text-slate-400 text-sm">Overall process optimization</div>
                                        </div>
                                        
                                        {/* Secondary Metrics */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-700/50 rounded-2xl p-4 border border-slate-600/50">
                                                <div className="text-2xl font-bold text-emerald-400 mb-1">50%</div>
                                                <div className="text-sm text-slate-300">Faster Processing</div>
                                            </div>
                                            <div className="bg-slate-700/50 rounded-2xl p-4 border border-slate-600/50">
                                                <div className="text-2xl font-bold text-cyan-400 mb-1">90%</div>
                                                <div className="text-sm text-slate-300">Error Reduction</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-2xl"></div>
                        </div>

                        {/* CTA */}
                        <div className="text-center mt-16"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                        >
                            <Link
                                href="/demo"
                                className="btn-primary group text-lg px-10 py-4"
                            >
                                <span>Explore All Success Stories</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0" aria-hidden="true">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div className="absolute top-16 sm:top-20 left-8 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 border border-cyan-400/30 rounded-full animate-spin-slow"></div>
                            <div className="absolute bottom-16 sm:bottom-20 right-8 sm:right-10 w-20 sm:w-24 h-20 sm:h-24 border border-purple-400/30 rotate-45 animate-pulse"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-emerald-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>

                    <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6">
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                          
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                                Ready to Transform Your Operations?
                            </h2>
                            <p className="text-lg sm:text-xl text-slate-200 mb-8 sm:mb-10 max-w-2xl mx-auto">
                                Let&apos;s discuss how our AI solutions can streamline your government or enterprise processes and drive real results.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center">
                                <Link
                                    href="/contact"
                                    className="btn-primary group text-base sm:text-lg px-8 sm:px-10 md:px-12 py-4 sm:py-5 shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span>Request a Demo</span>
                                </Link>
                                <Link
                                    href="/about"
                                    className="btn-white group text-base sm:text-lg px-8 sm:px-10 md:px-12 py-4 sm:py-5 shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span>Learn More</span>
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

