import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import AOSProvider from '@/components/AOSProvider'
import { Users, Award, ArrowRight, Building2, Globe, Target, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Leadership - WE Org | Meet Our Team',
    description: 'Meet the visionary leaders and strategic advisors driving WE Org\'s mission to transform Africa through AI innovation and local talent development.',
    keywords: 'WE Org leadership, AI leadership Ghana, African tech leaders, AI research leadership, Ghana technology leaders',
}

export default function LeadershipPage() {
    return (
        <AOSProvider>
            <main className="min-h-screen">
                <Nav />

                {/* Hero Section */}
                <section
                    className="relative pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 overflow-hidden"
                    aria-labelledby="hero-heading"
                    role="banner"
                >
                    <div className="absolute inset-0" aria-hidden="true">
                        <div className="absolute inset-0 opacity-5 sm:opacity-10 md:opacity-15 transition-transform duration-1000" style={{
                            backgroundImage: "linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)",
                            backgroundSize: "30px 30px"
                        }}></div>
                        <div className="absolute top-8 sm:top-16 md:top-20 left-2 sm:left-4 md:left-10 w-12 sm:w-16 md:w-24 lg:w-32 h-12 sm:h-16 md:h-24 lg:h-32 bg-cyan-200/15 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-8 sm:bottom-16 md:bottom-20 right-2 sm:right-4 md:right-10 w-16 sm:w-20 md:w-32 lg:w-40 h-16 sm:h-20 md:h-32 lg:h-40 bg-indigo-200/15 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 md:w-64 lg:w-96 h-24 sm:h-32 md:h-64 lg:h-96 bg-gradient-to-r from-cyan-100/10 to-blue-100/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl"></div>
                    </div>
                    <div id="main-content" className="relative max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center">
                        <h1
                            id="hero-heading"
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif uppercase font-semibold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight px-2 sm:px-4 mt-4 sm:mt-8 md:mt-0"
                            tabIndex={0}
                        >
                            Our <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Leadership</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-2 sm:px-4">
                            Meet the visionary minds driving our mission to transform Africa through AI innovation
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-slate-300 px-2 sm:px-4" role="list" aria-label="Company highlights">
                            <span className="flex items-center gap-1.5 sm:gap-2" role="listitem">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full" aria-hidden="true"></div>
                                <span>Founded in Ghana</span>
                            </span>
                            <span className="flex items-center gap-1.5 sm:gap-2" role="listitem">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full" aria-hidden="true"></div>
                                <span>AI-First Approach</span>
                            </span>
                            <span className="flex items-center gap-1.5 sm:gap-2" role="listitem">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-400 rounded-full" aria-hidden="true"></div>
                                <span>Local Impact</span>
                            </span>
                        </div>
                    </div>
                </section>

                {/* Leadership Section */}
                <section
                    className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
                    aria-labelledby="leadership-heading"
                    role="region"
                    aria-label="Leadership team information"
                >
                    {/* Geometric Background */}
                    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-8 sm:top-20 left-4 sm:left-10 w-1 sm:w-2 h-12 sm:h-20 md:h-32 bg-gradient-to-b from-cyan-400 to-transparent opacity-20"></div>
                            <div className="absolute top-16 sm:top-40 right-4 sm:right-20 w-12 sm:w-20 md:w-32 h-1 sm:h-2 bg-gradient-to-r from-purple-400 to-transparent opacity-20"></div>
                            <div className="absolute bottom-16 sm:bottom-40 left-1/4 w-1 sm:w-2 h-8 sm:h-16 md:h-24 bg-gradient-to-b from-emerald-400 to-transparent opacity-20"></div>
                            <div className="absolute bottom-8 sm:bottom-20 right-1/3 w-8 sm:w-16 md:w-24 h-1 sm:h-2 bg-gradient-to-r from-blue-400 to-transparent opacity-20"></div>
                        </div>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-8 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400 rounded-full filter blur-2xl sm:blur-3xl"></div>
                        <div className="absolute bottom-8 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-400 rounded-full filter blur-2xl sm:blur-3xl"></div>
                    </div>

                    <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 z-10">
                        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <h2
                                id="leadership-heading"
                                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase font-serif text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6"
                                tabIndex={0}
                            >
                                Meet Our Team
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                                Meet the minds behind our mission to transform Africa through AI
                            </p>
                        </div>

                        {/* Leadership Grid */}
                        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12">
                            {/* Founder Row */}
                            <article className="group relative" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" role="article" aria-labelledby="founder-heading">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-xl sm:rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                                <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500">
                                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                                                <Users className="w-8 sm:w-10 md:w-12 lg:w-14 h-8 sm:h-10 md:h-12 lg:h-14 text-white" aria-hidden="true" />
                                            </div>
                                        </div>

                                        <div className="flex-1 text-center lg:text-left">
                                            <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                                                <h3 id="founder-heading" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-1 sm:mb-2">Ebo Biney</h3>
                                                <p className="text-cyan-400 text-sm sm:text-base md:text-lg font-medium">Founder & CEO</p>
                                            </div>
                                            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                                                A pioneering AI researcher and African innovation advocate, Ebo leads WE Org&apos;s mission to build intelligent solutions that serve people first. With deep expertise in machine learning and local context understanding, he drives our vision of technology that works for Africa, built by Africa.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            {/* Advisory Board Row */}
                            <div className="group relative" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 to-pink-400 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                                <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-500">
                                    <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-4 sm:gap-6 md:gap-8">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                                                <Award className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-white" aria-hidden="true" />
                                            </div>
                                        </div>

                                        <div className="flex-1 text-center lg:text-left">
                                            <div className="mb-3 sm:mb-4 md:mb-6">
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">Advisory Board</h3>
                                                <p className="text-purple-400 text-sm sm:text-base md:text-lg font-medium">Strategic Guidance</p>
                                            </div>
                                            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                                                Our diverse advisory board brings expertise from technology, business, and African development to guide our strategic direction. They provide invaluable insights that help us navigate the complex landscape of AI innovation in African contexts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Executive Team Row */}
                            <div className="group relative" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                                <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500">
                                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 md:gap-8">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                                                <Building2 className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-white" aria-hidden="true" />
                                            </div>
                                        </div>

                                        <div className="flex-1 text-center lg:text-left">
                                            <div className="mb-3 sm:mb-4 md:mb-6">
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">Executive Team</h3>
                                                <p className="text-emerald-400 text-sm sm:text-base md:text-lg font-medium">Operational Excellence</p>
                                            </div>
                                            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                                                Our executive team combines deep technical expertise with strategic business acumen. They ensure that our innovative AI solutions are not only cutting-edge but also practical, scalable, and aligned with the real needs of African organizations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-12 sm:mt-16 md:mt-20 text-center" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                            <Link
                                href="/contact"
                                className="btn-white group"
                                aria-label="Get in touch with our leadership team"
                            >
                                <span>Get In Touch</span>
                                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="relative py-20 bg-black" aria-labelledby="final-cta-heading">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-800/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-16 w-56 h-56 bg-indigo-900/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-900/20 to-indigo-900/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 id="final-cta-heading" className="text-3xl sm:text-4xl md:text-4xl font-bold font-serif text-white mb-6 leading-tight">
                            Ready to Transform Africa Together?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 mb-8">
                            Join our mission to build intelligent solutions that serve Africa&apos;s unique needs.
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <Link
                                href="/contact"
                                className="btn-primary focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
                                aria-label="Contact our leadership team"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/about"
                                className="btn-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                                aria-label="Learn more about WE Org"
                            >
                                About WE Org
                            </Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </AOSProvider>
    )
}