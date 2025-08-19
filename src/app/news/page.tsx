import type { Metadata } from 'next'
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import AOSProvider from "@/components/AOSProvider";
import FeaturedNews from "@/app/news/components/FeaturedNews";

export const metadata: Metadata = {
    title: 'AI News & Updates - WE Org | Latest AI Developments',
    description: 'Stay updated with the latest developments in artificial intelligence and emerging technologies from WE Org and the broader AI community.',
    keywords: 'AI news, artificial intelligence updates, AI developments, emerging technologies, WE Org news',
}

export default function NewsPage() {
    return (
        <AOSProvider>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
                Skip to main content
            </a>
            <main className="min-h-screen" role="main">
                <Nav />
                <section className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 overflow-hidden" aria-labelledby="news-hero-heading">
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
                        <h1 id="news-hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif uppercase font-semibold text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-2 sm:px-4 mt-8 sm:mt-0">
                            AI News &{" "}
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Updates
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
                            Latest developments in artificial intelligence and emerging technologies.
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
                {/* Featured Stories */}
                <FeaturedNews />
                <Footer />
            </main>
        </AOSProvider>
    );
}
