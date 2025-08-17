import React from "react";
import Link from "next/link";
import type { JSX } from "react";
import { ArrowRight, Calendar, Users, Mail } from "lucide-react";

export default function FellowshipCTA(): JSX.Element {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0" aria-hidden="true">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-16 sm:top-20 left-8 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 border border-cyan-400/30 rounded-full animate-spin-slow"></div>
                    <div className="absolute bottom-16 sm:bottom-20 right-8 sm:right-10 w-20 sm:w-24 h-20 sm:h-24 border border-purple-400/30 rotate-45 animate-pulse"></div>
                </div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
                {/* Main CTA */}
                <div 
                    className="text-center mb-8 sm:mb-12"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                        Ready to Start Your AI Journey?
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-200 mb-6 sm:mb-8 max-w-3xl mx-auto">
                        Join Africa's most prestigious AI fellowship program and become part of the next generation of AI leaders.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                        <Link
                            href="/fellowship/apply"
                            className="btn-primary group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                        >
                            <span>Apply Now</span>
                            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/fellowship/info-session"
                            className="btn-white group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                        >
                            <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-2" aria-hidden="true" />
                            <span>Attend Info Session</span>
                        </Link>
                    </div>

                    {/* Urgency Banner */}
                    <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full text-red-300">
                        <span className="font-medium text-sm sm:text-base">Limited spots available - Apply before March 31, 2025</span>
                    </div>
                </div>

                {/* Contact Options */}
                <div 
                    className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                >
                    <div className="text-center bg-slate-900/40 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                            <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Have Questions?</h3>
                        <p className="text-slate-300 text-xs sm:text-sm mb-3 sm:mb-4">Get answers from our admissions team</p>
                        <Link 
                            href="mailto:fellowship@weorg.ai"
                            className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                        >
                            fellowship@weorg.ai
                        </Link>
                    </div>

                    <div className="text-center bg-slate-900/40 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                            <Users className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Connect with Alumni</h3>
                        <p className="text-slate-300 text-xs sm:text-sm mb-3 sm:mb-4">Chat with current fellows and graduates</p>
                        <Link 
                            href="/fellowship/alumni-network"
                            className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                        >
                            Join Alumni Network
                        </Link>
                    </div>

                    <div className="text-center bg-slate-900/40 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg shadow-purple-500/30">
                            <Calendar className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Virtual Info Session</h3>
                        <p className="text-slate-300 text-xs sm:text-sm mb-3 sm:mb-4">Next session: February 15, 2025</p>
                        <Link 
                            href="/fellowship/info-session"
                            className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>

                {/* Final Message */}
                <div 
                    className="text-center p-4 sm:p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                >
                    <p className="text-slate-200 italic text-sm sm:text-base">
                        "The future of AI in Africa starts with you. Take the first step today."
                    </p>
                </div>
            </div>
        </section>
    );
}