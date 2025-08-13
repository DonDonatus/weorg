"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, Target, Building2, FileCheck, MessageSquare } from 'lucide-react'
import 'aos/dist/aos.css'

export default function About() {
    const [activeTestimonial, setActiveTestimonial] = useState(0)

    useEffect(() => {
        const initAos = async () => {
            const AOS = (await import('aos')).default
            AOS.init({
                duration: 800,
                once: true
            })
        }

        if (typeof window !== 'undefined') {
            initAos()
        }
    }, [])

    const features = [
        {
            icon: Building2,
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

    const testimonials = [
        {
            quote: "WeOrg's AI solutions have revolutionized our government operations. The local language support and understanding of our context made all the difference.",
            author: "Ministry of Digital Transformation, Ghana",
            color: "blue"
        },
        {
            quote: "The document verification tools have streamlined our authentication process by 80%. Security and speed combined perfectly.",
            author: "Bank of Ghana, Compliance Division",
            color: "slate"
        },
        {
            quote: "Local language NLP bots have transformed citizen engagement. Our services are now accessible to everyone in their native tongue.",
            author: "Accra Metropolitan Assembly",
            color: "emerald"
        }
    ]

    return (
        <div className="bg-white">
            {/* Main About Section */}
            <section className="py-16 md:py-20 bg-white relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left side - Main Message */}
                        <div data-aos="fade-right" data-aos-delay="200">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-slate-900">
                                Ghana&apos;s Premier AI Research &amp; Automation Company
                            </h2>

                            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
                                We build intelligent agents that streamline operations in government and enterprise - driven by local talent and real-world impact.
                            </p>

                            <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group mb-6 md:mb-8">
                                <span>Explore Our Solutions</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Right side - Vision */}
                        <div className="relative" data-aos="fade-left" data-aos-delay="400">
                            <div className="rounded-2xl p-6 md:p-8 text-white shadow-xl relative bg-gradient-to-br from-gray-600 to-slate-700">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                                    <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-serif uppercase font-semibold md:text-2xl mb-3 md:mb-4">Our Mission</h3>
                                <p className="text-blue-100 font-serif leading-relaxed text-base md:text-lg mb-4 md:mb-6">
                                    To transform how African organizations operate by combining cutting-edge AI with deep local understanding.
                                </p>
                                <div className="pt-4 md:pt-6 border-t border-white/20">
                                    <p className="text-xs md:text-sm text-blue-200">
                                        &ldquo;Technology that works for Africa, built by Africa.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            </section>

            {/* Core Services Section */}
            <section className="relative py-20 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_60%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(147,51,234,0.15),_transparent_60%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.1),_transparent_70%)]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="text-3xl font-serif uppercase sm:text-4xl lg:text-5xl font-semibold mb-6 text-white tracking-tight">
                            Our Core Services
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive AI solutions for African governments and enterprises.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                                <div
                                    key={index}
                                    className="group bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 border border-slate-700 hover:-translate-y-1"
                                    data-aos="fade-up"
                                    data-aos-delay={400 + (index * 150)}
                                >
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600">
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="text-lg font-semibold mb-3 text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-sm mb-4">
                                        {feature.description}
                                    </p>

                                    <div className="pt-3 border-t border-slate-700">
                                        <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                                            {feature.highlight}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* News Highlights Section */}
            <section className="py-16 md:py-20 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-2xl font-serif uppercase md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 relative">
                            News Highlights
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full"></div>
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base max-w-3xl mx-auto">
                            Stay updated with our latest developments and ongoing projects
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                        {/* GNSS AI Fellowship */}
                        <div className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1 relative overflow-hidden" data-aos="fade-up" data-aos-delay="400">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-blue-400 rounded-tl-lg"></div>
                            <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-purple-400 rounded-br-lg"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-blue-500/25 relative">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-semibold text-slate-900">GNSS AI Fellowship</h4>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    Flagship fellowship program training AI researchers in Ghana, focusing on GNSS and AI integration.
                                </p>
                                <div className="pt-3 border-t border-slate-200">
                                    <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full text-xs font-medium text-blue-700 relative">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        Active Program
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* AI in Public Sector Pilots */}
                        <div className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1 relative overflow-hidden" data-aos="fade-up" data-aos-delay="600">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-emerald-400 rounded-tl-lg"></div>
                            <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-blue-400 rounded-br-lg"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-emerald-500/25">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-semibold text-slate-900">Public Sector Pilots</h4>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    Collaborating with government agencies to pilot AI solutions in public services.
                                </p>
                                <div className="pt-3 border-t border-slate-200">
                                    <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/50 rounded-full text-xs font-medium text-emerald-700">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                                        Pilot Phase
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Twi NLP Model */}
                        <div className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1 relative overflow-hidden" data-aos="fade-up" data-aos-delay="800">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-orange-400 rounded-tl-lg"></div>
                            <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-red-400 rounded-br-lg"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-orange-500/25">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-semibold text-slate-900">Twi NLP Model</h4>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    Developing advanced NLP capabilities for Twi language, enabling AI systems to understand local Ghanaian dialects.
                                </p>
                                <div className="pt-3 border-t border-slate-200">
                                    <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/50 rounded-full text-xs font-medium text-orange-700">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                                        In Progress
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="text-xl font-serif uppercase sm:text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3">
                                    Client Feedback
                                </h3>
                                <p className="text-slate-300 text-sm md:text-base">
                                    Real results from organizations leveraging our AI technology
                                </p>
                            </div>

                            <div className="group relative" data-aos="fade-up" data-aos-delay="400">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl border border-slate-700/50">
                                    <div className="flex justify-center mb-8">
                                        <div className="relative">
                                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <blockquote className="text-base sm:text-lg md:text-xl text-slate-100 font-serif mb-6 md:mb-8 leading-relaxed relative">
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                                        &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                                    </blockquote>

                                    <div className="flex flex-col items-center mb-6 md:mb-8">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <p className="text-slate-200 font-medium">
                                                -  {testimonials[activeTestimonial].author}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center space-x-3 sm:space-x-4">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveTestimonial(index)}
                                                className={`relative group transition-all duration-300 p-2 ${activeTestimonial === index
                                                    ? 'scale-110'
                                                    : 'hover:scale-105'
                                                    }`}
                                            >
                                                <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${activeTestimonial === index
                                                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-400/50'
                                                    : 'bg-slate-600 hover:bg-slate-500'
                                                    }`}></div>
                                                {activeTestimonial === index && (
                                                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"></div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}