import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import AOSProvider from '@/components/AOSProvider'
import { Mail, MapPin, Phone, Send, Building2, Users, GraduationCap, Search, MessageCircle, Globe, Linkedin, Twitter, Github } from 'lucide-react'

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
                <Nav />
                {/* Enhanced Hero Section */}
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
                    <div id="main-content" className="relative max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center">
                        <h1 id="hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif uppercase font-semibold text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-2 sm:px-4 mt-8 sm:mt-0">
                            Lets <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Connect</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
                            Ready to partner, build, and scale together? We&apos;re here to make it happen.
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
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                                        Office Info
                                    </h3>

                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200">
                                                <MapPin className="w-5 h-5 text-slate-600 dark:text-slate-400" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900 dark:text-white">Location</p>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">Accra, Ghana</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200">
                                                <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900 dark:text-white">Email</p>
                                                <a href="mailto:hello@weorg.ai" className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded">
                                                    hello@weorg.ai
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200">
                                                <Phone className="w-5 h-5 text-slate-600 dark:text-slate-400" aria-hidden="true" />
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
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
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

                {/* Final CTA / Join Section */}
                <section className="relative py-20 bg-black" aria-labelledby="final-cta-heading">
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Darker blurred shapes for depth */}
                        <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-800/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-16 w-56 h-56 bg-indigo-900/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-900/20 to-indigo-900/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 id="final-cta-heading" className="text-3xl sm:text-4xl md:text-4xl font-bold font-serif text-white mb-6 leading-tight">
                            Ready to Transform Africa Together?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 mb-8">
                            Partner with us, join our team, or explore AI solutions. Let's build the future together.
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <a
                                href="#apply"
                                className="btn-primary focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
                                aria-label="Apply now for the National AI Fellowship"
                            >
                                About WE Org
                            </a>
                            <a
                                href="#learn"
                                className="btn-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                                aria-label="Learn more about the fellowship program"
                            >
                                See Our Work
                            </a>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </AOSProvider>
    )
}
