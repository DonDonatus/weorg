import { ArrowRight, Calendar, BookOpen, Users, Zap } from 'lucide-react'

export default function Vision() {
    return (
        <section id="vision" className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase font-serif text-white mb-3 sm:mb-4 md:mb-6">
                        Let&apos;s Build the Future Together
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
                        Join us in transforming how African organizations operate. Choose your path to make a difference.
                    </p>
                </div>

                {/* CTA Buttons Section */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 md:mb-12">
                        {/* Partner With Us */}
                        <div className="group relative" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                            <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-5 sm:p-5 md:p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                                        <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-white ml-3">Partner With Us</h3>
                                </div>
                                <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                                    Collaborate on innovative AI solutions and expand your impact across Africa.
                                </p>
                                <button className="btn-white group w-full text-sm py-2">
                                    <span>Get Started</span>
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                        {/* Apply to Fellowship */}
                        <div className="group relative" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-300 to-pink-400 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                            <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-5 sm:p-5 md:p-6 border border-slate-700/50 hover:border-indigo-400/50 transition-all duration-500">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-pink-500">
                                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-white ml-3">Apply to Fellowship</h3>
                                </div>
                                <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                                    Join our research program and work on cutting-edge AI projects for Africa.
                                </p>
                                <button className="btn-white group w-full text-sm py-2">
                                    <span>Apply Now</span>
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Request a Demo */}
                        <div className="group relative" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                            <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-5 sm:p-5 md:p-6 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500">
                                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-white ml-3">Request a Demo</h3>
                                </div>
                                <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                                    See our AI solutions in action and discover how they can transform your operations.
                                </p>
                                <button className="btn-white group w-full text-sm py-2">
                                    <span>Schedule Demo</span>
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}