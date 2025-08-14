import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Users, Target, Heart, Shield, Globe, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'About Us - WE Org | Building AI Solutions for Africa',
    description: 'WE Org is a mission-driven AI company based in Ghana. We build AI products that empower people—starting with our own youth talent.',
    keywords: 'about WE Org, AI automation Africa, Ghana AI company, government automation, enterprise AI solutions, Ebo Biney',
}

export default function AboutPage() {
    const values = [
        { title: 'People First', description: 'We prioritize human needs and experiences in everything we build', icon: Heart },
        { title: 'Simplicity Wins', description: 'Complex problems deserve simple, elegant solutions', icon: Target },
        { title: 'Build to Empower', description: 'Our technology exists to give people more control and opportunity', icon: Users },
        { title: 'Responsible AI', description: 'We develop AI that is ethical, transparent, and beneficial to society', icon: Shield },
        { title: 'Africa First', description: 'We build solutions specifically for African contexts and challenges', icon: Globe }
    ]

    const impactStats = [
        { number: '100+', label: 'Students Trained', icon: Users },
        { number: '3', label: 'Active Pilots', icon: TrendingUp },
        { number: '5', label: 'AI Agents Developed', icon: Award }
    ]

    return (
        <main className="min-h-screen" role="main">
            <Header />

            {/* Hero Section */}
            <section
                className="relative pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden"
                aria-labelledby="hero-heading"
            >
                {/* Background Elements */}
                <div className="absolute inset-0" aria-hidden="true">
                    <div className="absolute inset-0 opacity-5 sm:opacity-10 md:opacity-20 transition-transform duration-1000"
                        style={{
                            backgroundImage: `
                   linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
                 `,
                            backgroundSize: '30px 30px'
                        }}
                    />
                    <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-cyan-200/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 bg-purple-200/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-64 md:w-96 h-32 sm:h-64 md:h-96 bg-gradient-to-r from-cyan-100/10 to-blue-100/10 rounded-full blur-2xl sm:blur-3xl"></div>
                </div>

                <div className="relative max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center">
                    <h1
                        id="hero-heading"
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif uppercase font-semibold text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-2 sm:px-4 mt-8 sm:mt-0"
                    >
                        About <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">WE Org</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
                        WE Org is a mission-driven AI company based in Ghana. We build AI products that empower people-starting with our own youth talent.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-slate-300 px-2 sm:px-4">
                        <span className="flex items-center gap-1.5 sm:gap-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full" aria-hidden="true"></div>
                            <span>Founded in Ghana</span>
                        </span>
                        <span className="flex items-center gap-1.5 sm:gap-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full" aria-hidden="true"></div>
                            <span>AI-First Approach</span>
                        </span>
                        <span className="flex items-center gap-1.5 sm:gap-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full" aria-hidden="true"></div>
                            <span>Local Impact</span>
                        </span>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section
                className="py-8 sm:py-16 md:py-20 lg:py-24 bg-slate-950 relative overflow-hidden"
                aria-labelledby="story-heading"
            >
                                     {/* Enhanced Background Elements */}
                     <div className="absolute inset-0" aria-hidden="true">
                         <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
                         <div className="absolute top-0 left-0 w-full h-full">
                             <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 h-16 sm:h-32 bg-cyan-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
                             <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-20 sm:w-32 h-20 sm:h-40 bg-purple-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                             <div className="absolute top-1/2 left-1/4 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-emerald-500/20 rounded-full blur-xl sm:blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                         </div>
                         {/* Enhanced Grid Pattern */}
                         <div className="absolute inset-0 opacity-5 sm:opacity-8" style={{
                             backgroundImage: `
                                 linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
                             `,
                             backgroundSize: '30px 30px'
                         }}></div>
                     </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Enhanced Section Header */}
                    <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                                                 <h2
                             id="story-heading"
                             className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold uppercase font-serif text-white mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4"
                         >
                               Our Story
                         </h2>
                        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                            From humble beginnings to pioneering AI solutions across Africa
                        </p>
                    </div>

                    {/* Redesigned Story Timeline */}
                    <div className="relative">
                                                 {/* Timeline Line */}
                         <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 hidden lg:block" aria-hidden="true"></div>
                        
                        {/* Story Items */}
                        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
                            {/* Founding Story - Enhanced */}
                            <div className="relative group">
                                                                 <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2">
                                     <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950 shadow-lg hidden lg:block" aria-hidden="true"></div>
                                 </div>
                                
                                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                                    <div className="lg:col-start-1 lg:text-right lg:pr-8">
                                                                                 <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-cyan-500/40 shadow-lg sm:shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 group-hover:border-cyan-500/60 active:scale-95 sm:active:scale-100">
                                             <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                                                 <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/40 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                                                     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a7 7 0 00-14 0v2h5m-5 0H4a2 2 0 01-2-2V5a2 2 0 012-2h3m10 0h3a2 2 0 012 2v13a2 2 0 01-2 2h-3" />
                                                     </svg>
                                                 </div>
                                                 <div>
                                                     <p className="text-cyan-400 text-xs sm:text-sm md:text-base font-medium">2023</p>
                                                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">The Beginning</h3>
                                                 </div>
                                             </div>
                                             <p className="text-slate-200 leading-relaxed text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6">
                                                 Named after Willow & Ezra, WE Org was founded with a simple mission: build technology that serves people, not the other way around.
                                             </p>
                                             <div className="flex items-center gap-2 text-cyan-400">
                                                 <span className="text-xs sm:text-sm font-medium">Ghana-based</span>
                                                 <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full" aria-hidden="true"></div>
                                                 <span className="text-xs sm:text-sm font-medium">AI-first</span>
                                             </div>
                                         </div>
                                    </div>
                                    
                                    <div className="lg:col-start-2 lg:pl-8 lg:text-left hidden lg:block">
                                        <div className="text-slate-400 text-sm">
                                            <p>Founded in Accra, Ghana</p>
                                            <p>Mission-driven approach</p>
                                            <p>Local talent development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Philosophy - Enhanced */}
                            <div className="relative group">
                                                                 <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2">
                                     <div className="w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-950 shadow-lg hidden lg:block" aria-hidden="true"></div>
                                 </div>
                                
                                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                                    <div className="lg:col-start-2 lg:pl-8 lg:text-left">
                                                                                 <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-purple-500/40 shadow-lg sm:shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 group-hover:border-purple-500/60 active:scale-95 sm:active:scale-100">
                                             <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                                                 <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/40 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                                                     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m2-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                     </svg>
                                                 </div>
                                                 <div>
                                                     <p className="text-purple-400 text-xs sm:text-sm md:text-base font-medium">Core Belief</p>
                                                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Our Philosophy</h3>
                                                 </div>
                                             </div>
                                             <p className="text-slate-200 leading-relaxed text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6">
                                                 Technology should empower, not complicate. We believe local context drives global innovation, and people always come first.
                                             </p>
                                             <div className="flex items-center gap-2 text-purple-400">
                                                 <span className="text-xs sm:text-sm font-medium">People-first</span>
                                                 <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full" aria-hidden="true"></div>
                                                 <span className="text-xs sm:text-sm font-medium">Local focus</span>
                                             </div>
                                         </div>
                                    </div>
                                    
                                    <div className="lg:col-start-1 lg:pr-8 lg:text-right hidden lg:block">
                                        <div className="text-slate-400 text-sm">
                                            <p>Human-centered design</p>
                                            <p>Local innovation focus</p>
                                            <p>Ethical AI development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Future Vision - New */}
                            <div className="relative group">
                                                                 <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2">
                                     <div className="w-4 h-4 bg-emerald-400 rounded-full border-4 border-slate-950 shadow-lg hidden lg:block" aria-hidden="true"></div>
                                 </div>
                                
                                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                                    <div className="lg:col-start-1 lg:text-right lg:pr-8">
                                                                                 <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-emerald-500/40 shadow-lg sm:shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 group-hover:border-emerald-500/60 active:scale-95 sm:active:scale-100">
                                             <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                                                 <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/40 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                                                     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                     </svg>
                                                 </div>
                                                 <div>
                                                     <p className="text-emerald-400 text-xs sm:text-sm md:text-base font-medium">2024 & Beyond</p>
                                                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Future Vision</h3>
                                                 </div>
                                             </div>
                                             <p className="text-slate-200 leading-relaxed text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6">
                                                 Expanding our impact across Africa, building AI solutions that transform government services and empower communities.
                                             </p>
                                             <div className="flex items-center gap-2 text-emerald-400">
                                                 <span className="text-xs sm:text-sm font-medium">Scale & Impact</span>
                                                 <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full" aria-hidden="true"></div>
                                                 <span className="text-xs sm:text-sm font-medium">Innovation</span>
                                             </div>
                                         </div>
                                    </div>
                                    
                                    <div className="lg:col-start-2 lg:pl-8 lg:text-left hidden lg:block">
                                        <div className="text-slate-400 text-sm">
                                            <p>Pan-African expansion</p>
                                            <p>Government partnerships</p>
                                            <p>Community empowerment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Vision & Mission Section */}
            <section
                className="py-12 sm:py-24 bg-white dark:bg-slate-950 relative overflow-hidden"
                aria-labelledby="vision-mission-heading"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, #06b6d4 2px, transparent 2px),
                              radial-gradient(circle at 75% 75%, #a855f7 2px, transparent 2px)`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-8 sm:mb-16">
                        <h2
                            id="vision-mission-heading"
                            className="text-2xl sm:text-3xl lg:text-5xl font-semibold uppercase font-serif text-slate-900 dark:text-white mb-4 sm:mb-6"
                        >
                            Vision & Mission
                        </h2>

                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
                            Guiding principles that shape our journey and define our impact
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
                                                 {/* Vision */}
                         <div className="group bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-slate-500/20 hover:-translate-y-2 transition-all duration-500 focus-within:shadow-2xl focus-within:shadow-slate-500/20 focus-within:-translate-y-2">
                             <div className="w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-r from-slate-400 to-slate-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-slate-400/30">
                                 <Target className="w-6 sm:w-10 h-6 sm:h-10 text-white" aria-hidden="true" />
                             </div>
                             <h3 className="text-base sm:text-xl font-serif uppercase font-semibold text-slate-900 dark:text-white mb-2 sm:mb-4">Vision</h3>
                             <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-lg">
                                 To lead Africa into an AI-powered future where services are smart, systems are simple, and people always come first.
                             </p>
                             <div className="mt-3 sm:mt-6 pt-3 sm:pt-6 border-t border-slate-200 dark:border-slate-700">
                                 <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                                     <span className="text-sm font-medium">Future-focused</span>
                                     <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" aria-hidden="true"></div>
                                 </div>
                             </div>
                         </div>

                         {/* Mission */}
                         <div className="group bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-slate-500/20 hover:-translate-y-2 transition-all duration-500 focus-within:shadow-2xl focus-within:shadow-slate-500/20 focus-within:-translate-y-2">
                             <div className="w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-r from-slate-500 to-slate-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-slate-500/30">
                                 <Award className="w-6 sm:w-10 h-6 sm:h-10 text-white" aria-hidden="true" />
                             </div>
                             <h3 className="text-base sm:text-xl font-serif uppercase font-semibold text-slate-900 dark:text-white mb-2 sm:mb-4">Mission</h3>
                             <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-lg">
                                 To build intelligent agents that automate complexity and unlock opportunity—driven by African innovation.
                             </p>
                             <div className="mt-3 sm:mt-6 pt-3 sm:pt-6 border-t border-slate-200 dark:border-slate-700">
                                 <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                                     <span className="text-sm font-medium">Action-oriented</span>
                                     <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse" aria-hidden="true"></div>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section
                className="py-12 sm:py-24 bg-slate-900 relative"
                aria-labelledby="values-heading"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 sm:mb-20">
                        <h2
                            id="values-heading"
                            className="text-2xl sm:text-3xl font-serif uppercase lg:text-4xl font-bold text-white mb-4 sm:mb-6"
                        >
                            Our Values
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-3xl mx-auto px-4">
                            The principles that guide everything we do and build
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon
                            const colors = [
                                'from-cyan-500 to-blue-500',
                                'from-purple-500 to-pink-500',
                                'from-emerald-500 to-cyan-500',
                                'from-orange-500 to-red-500',
                                'from-indigo-500 to-purple-500'
                            ]
                            const color = colors[index % colors.length]

                            return (
                                <div
                                    key={index}
                                    className="group bg-slate-800/90 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-slate-700 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-3 transition-all duration-500 cursor-pointer focus-within:border-cyan-500/30 focus-within:shadow-2xl focus-within:shadow-cyan-500/20 focus-within:-translate-y-3"
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                    role="button"
                                    aria-label={`Learn more about our value: ${value.title}`}
                                >
                                    <div className={`w-10 sm:w-16 h-10 sm:h-16 bg-gradient-to-r ${color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <IconComponent className="w-5 sm:w-8 h-5 sm:h-8 text-white" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-4 group-hover:text-cyan-400 transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-slate-200 leading-relaxed group-hover:text-slate-100 transition-colors text-sm sm:text-base">
                                        {value.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


            {/* Impact Section */}
            <section
                className="py-8 sm:py-24 bg-slate-50 dark:bg-slate-800 relative"
                aria-labelledby="impact-heading"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-200/50 dark:via-slate-700/30 to-transparent"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-8 sm:mb-20">
                        <h2
                            id="impact-heading"
                            className="text-2xl sm:text-3xl font-serif uppercase lg:text-4xl font-semibold text-slate-900 dark:text-white mb-3 sm:mb-6 relative"
                        >
                            Our Impact
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full"></div>
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
                            Real results from our work across Africa that demonstrate our commitment to positive change
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6 sm:gap-20">
                            {impactStats.map((stat, index) => {
                                const IconComponent = stat.icon
                                const isLast = index === impactStats.length - 1
                                const isMainStat = index === 0 // Make first stat slightly larger

                                return (
                                    <div key={index} className={`text-center relative group ${isMainStat ? 'md:scale-105' : ''}`}>
                                        {/* Achievement Badge */}
                                        <div className="mb-2 sm:mb-6 relative">
                                            <div className="w-10 sm:w-16 h-10 sm:h-16 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                                <IconComponent className="w-5 sm:w-8 h-5 sm:h-8 text-slate-600 dark:text-slate-300" aria-hidden="true" />
                                            </div>
                                            {/* Achievement indicator */}
                                        </div>

                                        {/* Stat Number with enhanced styling */}
                                        <h4 className={`font-bold text-slate-800 dark:text-slate-200 mb-2 sm:mb-4 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 ${isMainStat ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-4xl'}`}>
                                            {stat.number}
                                        </h4>

                                        {/* Stat Label with better hierarchy */}
                                        <h5 className="text-sm sm:text-lg font-semibold text-slate-600 dark:text-slate-400 mb-2 sm:mb-3 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                                            {stat.label}
                                        </h5>

                                        {/* Divider - only show between stats, not after the last one */}
                                        {!isLast && (
                                            <div className="hidden md:block absolute top-1/2 -right-6 sm:-right-10 w-px h-16 sm:h-20 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent transform -translate-y-1/2"></div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="text-center mt-12 sm:mt-32">
                        <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-12 border border-slate-200 dark:border-slate-700">
                            <h3 className="text-xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Ready to See More?</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-lg px-4">
                                Discover the full scope of our work and the transformative solutions we&apos;ve delivered across Africa.
                            </p>

                            <Link
                                href="/work"
                                className="btn-primary"
                                aria-label="View our portfolio of work and solutions"
                            >
                                <span>See Our Work</span>
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* Leadership Section */}
            <section
                className="py-12 sm:py-24 bg-slate-950 relative"
                aria-labelledby="leadership-heading"
            >
                {/* Geometric Background */}
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-20 left-10 w-2 h-20 sm:h-32 bg-gradient-to-b from-cyan-400 to-transparent opacity-20"></div>
                        <div className="absolute top-40 right-20 w-20 sm:w-32 h-2 bg-gradient-to-r from-purple-400 to-transparent opacity-20"></div>
                        <div className="absolute bottom-40 left-1/4 w-2 h-16 sm:h-24 bg-gradient-to-b from-emerald-400 to-transparent opacity-20"></div>
                        <div className="absolute bottom-20 right-1/3 w-16 sm:w-24 h-2 bg-gradient-to-r from-blue-400 to-transparent opacity-20"></div>
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 sm:mb-20">
                        <h2
                            id="leadership-heading"
                            className="text-2xl sm:text-3xl font-serif uppercase lg:text-5xl font-semibold text-white mb-4 sm:mb-6"
                        >
                            Leadership
                        </h2>
                        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto px-4">
                            Meet the minds behind our mission to transform Africa through AI
                        </p>
                    </div>

                    {/* Leadership Grid */}
                    <div className="space-y-6 sm:space-y-12">
                        {/* Founder Row */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-8 p-4 sm:p-8 bg-slate-900/50 rounded-xl sm:rounded-2xl border border-slate-800/50">
                            <div className="relative flex-shrink-0">
                                <div className="w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                                    <Users className="w-10 sm:w-16 h-10 sm:h-16 text-white" aria-hidden="true" />
                                </div>
                            </div>

                            <div className="flex-1 text-center lg:text-left">
                                <div className="mb-2 sm:mb-4">
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">Ebo Biney</h3>
                                    <p className="text-cyan-400 text-sm sm:text-base lg:text-lg font-medium">Founder & CEO</p>
                                </div>
                                <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                                    A pioneering AI researcher and African innovation advocate, Ebo leads WE Org&apos;s mission to build intelligent solutions that serve people first.
                                </p>
                            </div>
                        </div>

                        {/* Advisory Board Row */}
                        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-4 sm:gap-8 p-4 sm:p-8 bg-slate-900/50 rounded-xl sm:rounded-2xl border border-slate-800/50">
                            <div className="relative flex-shrink-0">
                                <div className="w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-2xl">
                                    <Award className="w-10 sm:w-16 h-10 sm:h-16 text-white" aria-hidden="true" />
                                </div>
                            </div>

                            <div className="flex-1 text-center lg:text-right">
                                <div className="mb-2 sm:mb-4">
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">Advisory Board</h3>
                                    <p className="text-purple-400 text-sm sm:text-base lg:text-lg font-medium">Strategic Guidance</p>
                                </div>
                                <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                                    Our diverse advisory board brings expertise from technology, business, and African development to guide our strategic direction.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 sm:mt-20 text-center">
                        <Link
                            href="/governance"
                            className="btn-white"
                            aria-label="Learn more about our governance structure and advisory board"
                        >
                            <span>Meet Our Board</span>
                            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
