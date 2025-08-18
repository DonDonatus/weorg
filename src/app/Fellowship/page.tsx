import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import AOSProvider from "@/components/AOSProvider";

export default function FellowshipPage() {
    return (
        <AOSProvider>
            <main className="min-h-screen" role="main">
                <Nav />
                {/* Hero Section */}
                <section className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 overflow-hidden" aria-labelledby="hero-heading">
                    <div className="absolute inset-0" aria-hidden="true">
                        <div className="absolute inset-0 opacity-5 sm:opacity-10 md:opacity-15 transition-transform duration-1000" style={{
                            backgroundImage: "linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)",
                            backgroundSize: "30px 30px"
                        }}></div>
                        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-cyan-200/15 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 bg-indigo-200/15 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-64 md:w-96 h-32 sm:h-64 md:h-96 bg-gradient-to-r from-cyan-100/10 to-blue-100/10 rounded-full blur-2xl sm:blur-3xl"></div>
                    </div>
                    <div id="main-content" className="relative max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <h1 id="hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif uppercase font-semibold text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-2 sm:px-4 mt-8 sm:mt-0">
                            Join Our <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Fellowship</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
                            Join a mission. Build AI. Change lives. Become part of our fellowship program and collaborate with innovators to transform Africa through AI.
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
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-400 rounded-full" aria-hidden="true"></div>
                                <span>Local Impact</span>
                            </span>
                        </div>
                    </div>
                </section>

                {/* National AI Fellowship Section */}
                <section className="relative py-16 sm:py-20 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 overflow-hidden" aria-labelledby="fellowship-heading">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 left-20 w-40 h-40 border border-cyan-300/25 rounded-full animate-spin-slow"></div>
                        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-lg rotate-45 animate-pulse"></div>
                        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-emerald-400/40 transform rotate-12 animate-bounce"></div>
                        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-2/3 right-1/5 w-3 h-3 bg-emerald-400/60 rounded-full animate-bounce"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.03),transparent_50%)]"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Heading */}
                        <div className="text-center mb-20"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 backdrop-blur-sm rounded-full border border-indigo-400/30 mb-6">
                                <span className="text-sm font-medium text-white">Fellowship Program</span>
                            </div>

                            <h2 id="fellowship-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase font-serif text-white mb-6 leading-tight">
                                National AI Fellowship
                            </h2>
                            <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                                Empowering the next generation of AI innovators to build the future of technology in Ghana and across Africa
                            </p>

                            {/* Stats */}
                            <div className="flex justify-center mt-8 space-x-8 text-center">
                                <div className="text-cyan-400">
                                    <div className="text-3xl md:text-4xl font-bold">100+</div>
                                    <div className="text-base text-slate-400">Fellows</div>
                                </div>
                                <div className="text-indigo-400">
                                    <div className="text-3xl md:text-4xl font-bold">12</div>
                                    <div className="text-base text-slate-400">Months</div>
                                </div>
                                <div className="text-emerald-400">
                                    <div className="text-3xl md:text-4xl font-bold">95%</div>
                                    <div className="text-base text-slate-400">Job Placement</div>
                                </div>
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 lg:gap-10 mb-20">
                            {/* Who */}
                            <div className="group relative"
                                data-aos="fade-up"
                                data-aos-delay="400"
                                data-aos-duration="1000"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                                <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 shadow-md">
                                    <div className="flex items-center mb-4 sm:mb-6">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-white ml-4">Who Can Apply</h3>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed mb-4 text-base sm:text-lg">
                                        Final year tech students or recent graduates with a passion for AI and machine learning.
                                    </p>
                                    <ul className="text-sm text-slate-400 space-y-2">
                                        <li className="flex items-center">
                                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                                            Computer Science or related field
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                                            Strong programming skills
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                                            Passion for AI innovation
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="group relative"
                                data-aos="fade-up"
                                data-aos-delay="600"
                                data-aos-duration="1000"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-300 to-pink-400 rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                                <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-700/50 hover:border-indigo-400/50 transition-all duration-500 shadow-md">
                                    <div className="flex items-center mb-4 sm:mb-6">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400 to-pink-500">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-white ml-4">Benefits</h3>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed mb-4 text-base sm:text-lg">
                                        Comprehensive support to accelerate your AI career journey.
                                    </p>
                                    <ul className="text-sm text-slate-400 space-y-2">
                                        <li className="flex items-center">
                                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
                                            Monthly stipend of GHS 2,000
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
                                            1-on-1 mentorship program
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
                                            Guaranteed job placement
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Impact */}
                            <div className="group relative"
                                data-aos="fade-up"
                                data-aos-delay="800"
                                data-aos-duration="1000"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                                <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 shadow-md">
                                    <div className="flex items-center mb-4 sm:mb-6">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-white ml-4">Your Impact</h3>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed mb-4 text-base sm:text-lg">
                                        Drive meaningful AI innovation that transforms industries and improves lives across Africa.
                                    </p>
                                    <ul className="text-sm text-slate-400 space-y-2">
                                        <li className="flex items-center">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                                            Build solutions for local challenges
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                                            Connect with global AI community
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                                            Launch your tech career
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                        >
                            <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#learn" className="btn-white">
                                    Explore Careers
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Culture Section */}
                <section className="py-16 sm:py-20 bg-white dark:bg-slate-900" aria-labelledby="culture-heading">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Heading */}
                        <div className="text-center mb-20"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <h2 id="culture-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase font-serif text-slate-900 dark:text-white mb-6 leading-tight">
                                Built on Values
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                                We believe the best AI solutions come from teams that embody these core principles
                            </p>
                        </div>

                        {/* Culture Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 lg:gap-10 mb-20">
                            {/* Mission-driven */}
                            <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-300 dark:border-slate-700"
                                data-aos="fade-up"
                                data-aos-delay="400"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center mb-4 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white ml-4">Mission-driven</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                                    Every project we undertake is driven by a clear mission to solve real problems and create meaningful impact in Africa.
                                </p>
                            </div>

                            {/* Low-ego, high-impact */}
                            <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-300 dark:border-slate-700"
                                data-aos="fade-up"
                                data-aos-delay="600"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center mb-4 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white ml-4">Humility</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                                    We prioritize results over recognition, focusing on collaborative problem-solving and collective achievement.
                                </p>
                            </div>

                            {/* Grit + curiosity > pedigree */}
                            <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-300 dark:border-slate-700"
                                data-aos="fade-up"
                                data-aos-delay="800"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center mb-4 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white ml-4">Grit</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                                    We value determination and intellectual curiosity over traditional credentials. The best innovators come from diverse backgrounds.
                                </p>
                            </div>
                        </div>

                        {/* Culture CTA */}
                        <div className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                        >
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
                                Join a community where your passion, determination, and creativity matter more than where you studied or who you know.
                            </p>
                            <a href="#apply" className="btn-primary focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900" aria-label="Join our culture and apply for the fellowship">
                                Join Our Culture
                            </a>
                        </div>
                    </div>
                </section>

                {/* Final CTA / Join Section */}
                <section className="relative py-20 bg-black" aria-labelledby="final-cta-heading">
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Darker blurred shapes for depth */}
                        <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-800/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-16 w-56 h-56 bg-indigo-900/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-900/20 to-indigo-900/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <h2 id="final-cta-heading" className="text-3xl sm:text-4xl md:text-4xl font-bold font-serif text-white mb-6 leading-tight">
                            Ready to Build the Future of AI?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 mb-8">
                            Join the National AI Fellowship today and collaborate with innovators across Africa to create impactful solutions.
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <a
                                href="#apply"
                                className="btn-primary focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
                                aria-label="Apply now for the National AI Fellowship"
                            >
                                Join the Fellowship
                            </a>
                            <a
                                href="#learn"
                                className="btn-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                                aria-label="Learn more about the fellowship program"
                            >
                                Explore Careers
                            </a>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </AOSProvider>
    );
}
