import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AOSProvider from '@/components/AOSProvider'
import { Mail, MapPin, Phone, Linkedin, Twitter, Github, Send, Building2, Users, GraduationCap, Search, MessageCircle, Sparkles, Globe, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Contact Us - WE Org | Let\'s Build Together',
    description: 'Ready to partner, build, and scale? Get in touch with WE Org. We\'re here to discuss government solutions, fellowships, careers, research, and more.',
    keywords: 'contact WE Org, AI partnership, government solutions, fellowship, careers, research, Ghana AI company',
}

export default function ContactPage() {
    const areasOfInterest = [
        { value: 'government', label: 'Government Solutions', icon: Building2, description: 'AI automation for government services', color: 'from-blue-500 to-cyan-500' },
        { value: 'fellowship', label: 'Fellowship', icon: GraduationCap, description: 'Join our talent development program', color: 'from-purple-500 to-pink-500' },
        { value: 'careers', label: 'Careers', icon: Users, description: 'Work with us to transform Africa', color: 'from-emerald-500 to-teal-500' },
        { value: 'research', label: 'Research', icon: Search, description: 'Collaborate on AI research projects', color: 'from-orange-500 to-red-500' },
        { value: 'general', label: 'General Inquiry', icon: MessageCircle, description: 'Let\'s discuss possibilities', color: 'from-indigo-500 to-purple-500' }
    ]

    const socialLinks = [
        { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600', bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20' },
        { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-sky-500', bgColor: 'hover:bg-sky-50 dark:hover:bg-sky-900/20' },
        { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-700 dark:hover:text-gray-300', bgColor: 'hover:bg-gray-50 dark:hover:bg-gray-800' }
    ]

    return (
        <AOSProvider>
            <main className="min-h-screen" role="main">
                <Header />

                {/* Enhanced Hero Section */}
                <section
                    className="relative pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden"
                    aria-labelledby="contact-hero-heading"
                >
                    {/* Enhanced Background Elements */}
                    <div className="absolute inset-0" aria-hidden="true">
                        {/* Animated Grid */}
                        <div className="absolute inset-0 opacity-5 sm:opacity-10 md:opacity-20 transition-transform duration-1000"
                            style={{
                                backgroundImage: `
                   linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
                 `,
                                backgroundSize: '40px 40px'
                            }}
                        />

                        {/* Floating Geometric Shapes */}
                        <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/20 rounded-full animate-spin-slow"></div>
                        <div className="absolute top-40 right-20 w-16 h-16 border border-purple-400/20 rotate-45 animate-pulse"></div>
                        <div className="absolute bottom-40 left-1/4 w-12 h-12 border border-emerald-400/20 rounded-full animate-bounce"></div>

                        {/* Gradient Orbs */}
                        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-64 md:w-96 h-32 sm:h-64 md:h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
                    </div>

                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
                        <h1
                            id="contact-hero-heading"
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif uppercase font-semibold text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-2 sm:px-4 mt-8 sm:mt-0"
                            data-aos="fade-down"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            Let&apos;s <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                        >
                            Ready to partner, build, and scale together? We&apos;re here to make it happen.
                        </p>

                        {/* Enhanced Feature Tags */}

                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-slate-300 px-2 sm:px-4" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                            <span className="flex items-center gap-1.5 sm:gap-2">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full" aria-hidden="true"></div>
                                <span>Partnership Ready</span>
                            </span>
                            <span className="flex items-center gap-1.5 sm:gap-2">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full" aria-hidden="true"></div>
                                <span>Build Together</span>
                            </span>
                            <span className="flex items-center gap-1.5 sm:gap-2">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full" aria-hidden="true"></div>
                                <span>Scale Impact</span>
                            </span>
                        </div>
                    </div>
                </section>

                {/* Enhanced Contact Form Section */}
                <section
                    className="py-20 bg-white dark:bg-slate-950 relative"
                    aria-labelledby="contact-form-heading"
                >
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12 sm:mb-16"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <h2
                                id="contact-form-heading"
                                className="text-4xl md:text-5xl font-semibold uppercase font-serif text-slate-900 dark:text-white mb-4"
                            >
                                Get In Touch
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                                Whether it&apos;s a partnership, collaboration, or just a conversation, we&apos;re excited to hear from you.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                            {/* Contact Form */}
                            <div className="lg:col-span-2"
                                data-aos="fade-right"
                                data-aos-delay="400"
                                data-aos-duration="1000"
                            >
                                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200 dark:border-slate-700">
                                    <form className="space-y-4 sm:space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                                    Full Name *
                                                </label>
                                                                                                 <input
                                                     type="text"
                                                     id="name"
                                                     name="name"
                                                     required
                                                     className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors duration-200"
                                                     placeholder="Enter your full name"
                                                 />
                                            </div>
                                            <div>
                                                <label htmlFor="organization" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                                    Organization
                                                </label>
                                                                                                 <input
                                                     type="text"
                                                     id="organization"
                                                     name="organization"
                                                     className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors duration-200"
                                                     placeholder="Company or institution"
                                                 />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                                Email Address *
                                            </label>
                                                                                         <input
                                                 type="email"
                                                 id="email"
                                                 name="email"
                                                 required
                                                 className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors duration-200"
                                                 placeholder="your.email@example.com"
                                             />
                                        </div>

                                        <div>
                                            <label htmlFor="interest" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                                Area of Interest *
                                            </label>
                                                                                         <select
                                                 id="interest"
                                                 name="interest"
                                                 required
                                                 className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200 appearance-none"
                                             >
                                                <option value="">Select an area of interest</option>
                                                {areasOfInterest.map((area) => (
                                                    <option key={area.value} value={area.value}>
                                                        {area.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                                Your Message *
                                            </label>
                                                                                         <textarea
                                                 id="message"
                                                 name="message"
                                                 rows={5}
                                                 required
                                                 className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors duration-200 resize-vertical"
                                                 placeholder="Tell us about your project, partnership, or inquiry..."
                                             ></textarea>
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                className="btn-primary w-full group"
                                            >
                                                <span>Send Message</span>
                                                <Send className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6"
                                data-aos="fade-left"
                                data-aos-delay="600"
                                data-aos-duration="1000"
                            >
                                {/* Office Info */}
                                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
                                    <h3 className="text-xl font-semibold font-serif uppercase text-slate-900 dark:text-white mb-4">
                                        Office Info
                                    </h3>

                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-7 sm:w-9 h-7 sm:h-9 bg-gradient-to-r from-slate-500 to-slate-600 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-slate-500/30">
                                                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-white" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900 dark:text-white">Location</p>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">Accra, Ghana</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-7 sm:w-9 h-7 sm:h-9 bg-gradient-to-r from-slate-500 to-slate-600 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-slate-500/30">
                                                <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-white" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900 dark:text-white">Email</p>
                                                <a href="mailto:hello@weorg.ai" className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded">
                                                    hello@weorg.ai
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-7 sm:w-9 h-7 sm:h-9 bg-gradient-to-r from-slate-500 to-slate-600 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-slate-500/30">
                                                <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-white" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900 dark:text-white">Phone</p>
                                                <a className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded" href="tel:+233540000000">+233-540-000-000</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
                                    <h3 className="text-xl font-semibold font-serif uppercase text-slate-900 dark:text-white mb-4">
                                        Follow Us
                                    </h3>
                                    <div className="flex gap-2 sm:gap-3">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors duration-200"
                                                aria-label={`Follow us on ${social.name}`}
                                            >
                                                <social.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enhanced CTA Section */}
                <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0" aria-hidden="true">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div className="absolute top-16 sm:top-20 left-8 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 border border-cyan-400/30 rounded-full animate-spin-slow"></div>
                            <div className="absolute bottom-16 sm:bottom-20 right-8 sm:right-10 w-20 sm:w-24 h-20 sm:h-24 border border-purple-400/30 rotate-45 animate-pulse"></div>
                        </div>
                    </div>

                    <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                                Ready to TransformAfrica Together?
                            </h2>
                            <p className="text-lg sm:text-xl text-slate-200 mb-8 sm:mb-10 max-w-2xl mx-auto">
                                Partner with us, join our team, or explore AI solutions. Let&apos;s build the future together.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
                                <Link
                                    href="/about"
                                    className="btn-primary group text-sm sm:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4"
                                >
                                    <span>About WE Org</span>
                                </Link>
                                <Link
                                    href="/work"
                                    className="btn-white group text-sm sm:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4"
                                >
                                    <span>See Our Work</span>
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
