import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import AOSProvider from '@/components/AOSProvider'

export const metadata: Metadata = {
    title: 'Learn More - WE Org | AI Solutions That Deliver Real Impact',
    description: 'We build intelligent automation for governments and enterprises across Africa, enhancing productivity while maintaining human oversight.',
    keywords: 'AI solutions, government automation, enterprise AI, learn more, WE Org solutions',
}
import { useState, useEffect } from 'react'
import {
    ArrowRight,
    Users,
    Zap,
    Shield,
    CheckCircle,
    Clock,
    Sparkles,
    Play,
    TrendingUp,
    Award,
    Target,
    Rocket,
    ChevronDown,
    ArrowLeft,
    Building2,
    BookOpen,
    Heart
} from 'lucide-react'
import Link from 'next/link'

export default function EnhancedLandingPage() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        setIsLoaded(true)
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Data for reusable components
    const metrics = [
        { value: "87%", label: "Wait Time Reduction", icon: TrendingUp, color: "text-emerald-600", bgColor: "bg-emerald-50" },
        { value: "340%", label: "Processing Speed", icon: Zap, color: "text-amber-600", bgColor: "bg-amber-50" },
        { value: "250%", label: "Productivity Boost", icon: Rocket, color: "text-violet-600", bgColor: "bg-violet-50" },
        { value: "99.7%", label: "Accuracy Rate", icon: Award, color: "text-rose-600", bgColor: "bg-rose-50" }
    ]

    const products = [
        {
            title: "WE Agents",
            description: "Transform government and enterprise operations with intelligent automation",
            icon: Building2,
            features: ["24/7 operation", "Multi-language support", "Enterprise security"],
            accent: "bg-white border-slate-100",
            iconBg: "bg-gradient-to-r from-blue-600 to-slate-700",
            statusColor: "text-blue-600",
            statusBg: "bg-blue-600"
        },
        {
            title: "WE Research",
            description: "Tailored AI development for African market dynamics",
            icon: BookOpen,
            features: ["Local market insights", "Custom AI models", "Research-driven innovation"],
            accent: "bg-white border-slate-100",
            iconBg: "bg-gradient-to-r from-purple-600 to-blue-700",
            statusColor: "text-purple-600",
            statusBg: "bg-purple-600"
        },
        {
            title: "WE Care",
            description: "Social impact through accessible AI education",
            icon: Heart,
            features: ["Education-first approach", "Community building", "Skills development"],
            accent: "bg-white border-slate-100",
            iconBg: "bg-gradient-to-r from-orange-600 to-red-700",
            statusColor: "text-orange-600",
            statusBg: "bg-orange-600"
        }
    ]

    const processSteps = [
        {
            title: "Analyze",
            description: "Deep dive into your processes to identify bottlenecks and automation opportunities",
            icon: Clock,
            step: "01"
        },
        {
            title: "Build",
            description: "Develop and integrate solutions that work seamlessly with your existing systems",
            icon: Zap,
            step: "02"
        },
        {
            title: "Scale",
            description: "Monitor, optimize, and expand your AI capabilities for maximum impact",
            icon: CheckCircle,
            step: "03"
        }
    ]

    return (
        <AOSProvider>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
                Skip to main content
            </a>
            <main className="min-h-screen" role="main">
                <div className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
                    {/* Header - Enhanced with blur effect */}
                    <header className={`fixed top-0 w-full z-50 py-4 px-6 sm:px-8 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
                        }`}>
                        <div className="flex justify-between items-center max-w-7xl mx-auto">
                            <Link href="/">
                                <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                                    <ArrowLeft className="w-5 h-5 mr-2" />
                                    <span className="text-sm font-medium">Back</span>
                                </button></Link>
                            <img src="/logo_full_b.png" alt="WE Logo" className="h-8 w-auto" />
                        </div>
                    </header>

                    {/* Hero Section - Enhanced with animations */}
                    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 px-6 sm:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-emerald-200 text-emerald-700 text-sm font-medium mb-8 shadow-sm">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                                Live in production
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                                <span className="block">AI solutions that</span>
                                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    deliver real impact
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                                We build intelligent automation for governments and enterprises across Africa, enhancing productivity while maintaining human oversight.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                                <button className="btn-primary group">
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>See it in action</span>
                                </button>
                                <button className="btn-white">
                                    <span>Schedule demo</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Enhanced metrics with staggered animation */}
                            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-5xl mx-auto">
                                {metrics.map((metric, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                            }`}
                                        style={{ transitionDelay: `${index * 150}ms` }}
                                    >
                                        <div className={`w-12 h-12 ${metric.bgColor} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                                            <metric.icon className={`w-6 h-6 ${metric.color}`} />
                                        </div>
                                        <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                                            {metric.value}
                                        </div>
                                        <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Scroll indicator */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                            <ChevronDown className="w-6 h-6 text-gray-400" />
                        </div>
                    </section>

                    {/* Products Section - Enhanced cards */}
                    <section id="products" className="py-20 sm:py-32 px-6 sm:px-8">
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                                Our solutions
                            </h2>
                            <p className="text-xl text-gray-600">
                                Designed for African contexts with global standards
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className={`${product.accent} rounded-xl p-6 sm:p-8 border shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer`}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${product.iconBg} text-white rounded-lg flex items-center justify-center mr-3`}>
                                            <product.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">{product.title}</h3>
                                    </div>
                                    <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>
                                    <ul className="space-y-3">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-slate-700">
                                                <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Process Section - Enhanced with better spacing */}
                    <section id="process" className="py-20 sm:py-32 relative overflow-hidden">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30"></div>

                        {/* Decorative elements */}
                        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-100/20 rounded-full blur-3xl"></div>

                        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
                            {/* Header */}
                            <div className="text-center mb-20">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-600 text-sm font-medium mb-6">
                                    <Target className="w-4 h-4 mr-2 text-blue-600" />
                                    How we work
                                </div>
                                <h2 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                                    From idea to
                                    <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        impact
                                    </span>
                                </h2>
                                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                    Our systematic approach ensures every solution is built for scale,
                                    sustainability, and real-world impact
                                </p>
                            </div>

                            {/* Process Flow */}
                            <div className="relative">
                                {/* Connection lines - hidden on mobile */}
                                <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5">
                                    <div className="w-full h-full bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200"></div>
                                    <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-blue-400 rounded-full transform -translate-y-1/2"></div>
                                    <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-400 rounded-full transform -translate-y-1/2"></div>
                                </div>

                                <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
                                    {processSteps.map((step, index) => (
                                        <div key={index} className="relative group">
                                            {/* Mobile connection line */}
                                            {index < processSteps.length - 1 && (
                                                <div className="lg:hidden absolute top-full left-1/2 w-0.5 h-12 bg-gradient-to-b from-slate-300 to-transparent transform -translate-x-1/2"></div>
                                            )}

                                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                                                {/* Step number with gradient */}
                                                <div className="relative mb-6">
                                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow">
                                                        {step.step}
                                                    </div>
                                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                                                        <step.icon className="w-3 h-3 text-white" />
                                                    </div>
                                                </div>

                                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                                    {step.title}
                                                </h3>

                                                <p className="text-slate-600 leading-relaxed mb-6">
                                                    {step.description}
                                                </p>

                                                {/* Progress indicator */}
                                                <div className="flex items-center text-sm text-slate-500">
                                                    <div className="flex space-x-1 mr-3">
                                                        {[...Array(3)].map((_, i) => (
                                                            <div
                                                                key={i}
                                                                className={`w-2 h-2 rounded-full ${i <= index ? 'bg-blue-400' : 'bg-slate-200'
                                                                    }`}
                                                            ></div>
                                                        ))}
                                                    </div>
                                                    <span className="font-medium">Step {index + 1} of 3</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </section>
                    {/* CTA Section - Enhanced with gradient */}
                    <section id="contact" className="py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 text-white px-6 sm:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                                Ready to transform your operations?
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                                Join organizations across Africa using our proven AI solutions to drive real impact.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button className="group bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-3 font-semibold">
                                    <span>Get started</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="border-2 border-gray-300 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                                    Contact sales
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Footer - Simplified and cleaner */}
                    <footer className="py-16 bg-gray-950 px-6 sm:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <img src="/logo_full_b.png" alt="WE Logo" className="h-8 w-auto mx-auto mb-6 invert opacity-90" />
                                <p className="text-gray-400 mb-2">Built for Africa&apos;s future</p>
                                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} WE Org. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </AOSProvider>
    )
}