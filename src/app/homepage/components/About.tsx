"use client"

import { useState } from 'react'
import { ArrowRight, Brain, Building2, FileCheck, MessageSquare, Target } from 'lucide-react'

export default function About() {
    const [activeTestimonial, setActiveTestimonial] = useState(0)

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

    const testimonials = [
        {
            quote: "WeOrg's AI solutions have revolutionized our government operations. The local language support and understanding of our context made all the difference.",
            author: "Ministry of Digital Transformation, Ghana",
            color: "indigo"
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
        <>
            {/* Main About Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900 relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                        {/* Left side - Main Message */}
                        <div className="order-1 lg:order-1" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-slate-900 dark:text-white leading-tight">
                                Ghana&apos;s Premier AI Research &amp; Automation Company
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6 md:mb-8">
                                We build intelligent agents that streamline operations in government and enterprise - driven by local talent and real-world impact.
                            </p>

                            <button className="btn-primary group mb-4 sm:mb-6 md:mb-8 w-full sm:w-auto">
                                <span>Explore Our Solutions</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Right side - Vision */}
                        <div className="relative order-2 lg:order-2 mb-6 lg:mb-0" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
                            <div className="rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-xl relative bg-gradient-to-br from-gray-600 to-slate-700 dark:from-slate-700 dark:to-slate-800">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                                    <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">Our Mission</h3>
                                <p className="text-indigo-100 dark:text-indigo-200 leading-relaxed text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6">
                                    To transform how African organizations operate by combining cutting-edge AI with deep local understanding.
                                </p>
                                <div className="pt-3 sm:pt-4 md:pt-6 border-t border-white/20">
                                    <p className="text-xs sm:text-sm text-indigo-200 dark:text-indigo-300 font-serif">
                                        &ldquo;Technology that works for Africa, built by Africa.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
            </section>

            {/* What We Do Section */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase font-serif text-white mb-3 sm:mb-4 md:mb-6">
                            Our Core Services
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
                            Comprehensive AI solutions for African governments and enterprises.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6 sm:gap-6 lg:gap-8">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon
                                const gradients = [
                                    'from-cyan-400 to-blue-500',
                                    'from-indigo-400 to-pink-500',
                                    'from-emerald-400 to-teal-500',
                                    'from-orange-400 to-red-500'
                                ]
                                const iconColors = [
                                    'from-cyan-400 to-blue-500',
                                    'from-indigo-400 to-pink-500',
                                    'from-emerald-400 to-teal-500',
                                    'from-orange-400 to-red-500'
                                ]
                                const borderGradients = [
                                    'hover:border-cyan-400/50',
                                    'hover:border-indigo-400/50',
                                    'hover:border-emerald-400/50',
                                    'hover:border-orange-400/50'
                                ]

                                return (
                                    <div key={index} className="group relative" data-aos="fade-up" data-aos-delay={400 + (index * 200)} data-aos-duration="1000">
                                        <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[index]} rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500`}></div>
                                        <div className={`relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-700/50 ${borderGradients[index]} transition-all duration-500`}>
                                            <div className="flex items-center mb-3 sm:mb-4">
                                                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${iconColors[index]}`}>
                                                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                                                </div>
                                                <h3 className="text-lg sm:text-xl font-semibold text-white ml-3">{feature.title}</h3>
                                            </div>
                                            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* News Highlights / Current Initiatives Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase font-serif text-slate-900 dark:text-white mb-3 sm:mb-4 md:mb-6">
                            News Highlights
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
                            Stay updated with our latest developments and ongoing projects
                        </p>
                    </div>

                                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
                                                 {/* GNSS AI Fellowship */}
                         <div className="bg-white dark:bg-slate-800 rounded-xl p-5 sm:p-4 md:p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-indigo-600 rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 dark:text-white">GNSS AI Fellowship</h4>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                                Flagship fellowship program training AI researchers in Ghana, focusing on GNSS and AI integration.
                            </p>
                            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100 dark:border-slate-700">
                                <span className="inline-flex items-center text-xs font-medium text-indigo-600 dark:text-indigo-400">
                                    <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2 animate-pulse"></div>
                                    Active Program
                                </span>
                            </div>
                        </div>

                                                 {/* AI in Public Sector Pilots */}
                         <div className="bg-white dark:bg-slate-800 rounded-xl p-5 sm:p-4 md:p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-indigo-600 rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 dark:text-white">Public Sector Pilots</h4>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                                Collaborating with government agencies to pilot AI solutions in public services.
                            </p>
                            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100 dark:border-slate-700">
                                <span className="inline-flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                    <div className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                                    Pilot Phase
                                </span>
                            </div>
                        </div>

                                                 {/* Twi NLP Model */}
                         <div className="bg-white dark:bg-slate-800 rounded-xl p-5 sm:p-4 md:p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-indigo-600 rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 dark:text-white">Twi NLP Model</h4>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                                Developing advanced NLP capabilities for Twi language, enabling AI systems to understand local Ghanaian dialects.
                            </p>
                            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100 dark:border-slate-700">
                                <span className="inline-flex items-center text-xs font-medium text-orange-600 dark:text-orange-400">
                                    <div className="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mr-2 animate-pulse"></div>
                                    In Progress
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="max-w-2xl mx-auto">
                                                         {/* Section Header */}
                             <div className="mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase font-serif text-slate-800 dark:text-white mb-3 sm:mb-4 md:mb-6">
                                     Client Feedback
                                 </h3>
                                 <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
                                     Hear from our partners about the impact of our AI solutions
                                 </p>
                             </div>
                                                         {/* Testimonial Card */}
                             <div className="bg-white dark:bg-slate-700 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-600" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                                <div className="text-center">
                                    {/* Quote Icon */}
                                    <div className="flex justify-center mb-4 sm:mb-6">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-600 to-slate-700 rounded-xl flex items-center justify-center shadow-md">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="text-sm sm:text-base md:text-lg text-slate-800 dark:text-slate-200 font-serif mb-4 sm:mb-6 leading-relaxed px-2">
                                        &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                                    </blockquote>

                                    {/* Author */}
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 font-medium">
                                        — {testimonials[activeTestimonial].author}
                                    </p>

                                    {/* Navigation Dots */}
                                    <div className="flex justify-center space-x-2 sm:space-x-3">
                                        <div
                                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full cursor-pointer transition-all duration-200 ${activeTestimonial === 0 ? 'bg-indigo-600 scale-110' : 'bg-slate-300 dark:bg-slate-500 hover:bg-slate-400 dark:hover:bg-slate-400'
                                                }`}
                                            onClick={() => setActiveTestimonial(0)}
                                        ></div>
                                        <div
                                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full cursor-pointer transition-all duration-200 ${activeTestimonial === 1 ? 'bg-indigo-600 scale-110' : 'bg-slate-300 dark:bg-slate-500 hover:bg-slate-400 dark:hover:bg-slate-400'
                                                }`}
                                            onClick={() => setActiveTestimonial(1)}
                                        ></div>
                                        <div
                                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full cursor-pointer transition-all duration-200 ${activeTestimonial === 2 ? 'bg-indigo-600 scale-110' : 'bg-slate-300 dark:bg-slate-500 hover:bg-slate-400 dark:hover:bg-slate-400'
                                                }`}
                                            onClick={() => setActiveTestimonial(2)}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}