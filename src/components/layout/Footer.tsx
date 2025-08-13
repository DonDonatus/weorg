'use client'

import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
    const solutions = [
        "Government Services",
        "Enterprise Automation",
        "AI Integration",
        "Digital Transformation"
    ];

    const company = [
        "About Us",
        "Our Vision",
        "Contact",
        "Careers"
    ];

    const resources = [
        "Documentation",
        "Case Studies",
        "White Papers",
        "Training Materials"
    ];

    const support = [
        "Help Center",
        "Contact Support",
        "Status Page",
        "Community Forum",
        "Developer Portal",
        "Knowledge Base"
    ];

    return (
        <footer className="bg-gray-900 text-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
                    {/* Company Info - Full width on mobile, spans 2 on desktop */}
                    <div className="col-span-2 lg:col-span-2 text-left">
                        <div className="flex items-center justify-start space-x-3 mb-6">
                            <div className="flex items-center">
                                <img
                                    src="logo_full_w.png"
                                    alt="WE Org"
                                    className="h-10 md:h-12 w-auto"
                                />
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-lg text-sm leading-relaxed">
                            Building people-first AI agents that streamline
                            operations across Africa. Empowering organizations
                            to serve faster, smarter, and more humanely.
                        </p>
                        <div className="text-sm text-gray-500 mb-4">
                            Built for people. Powered by AI.
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="text-left font-serif">
                        <h3 className="font-semibold mb-4 text-white text-base uppercase">Solutions</h3>
                        <ul className="space-y-1 text-gray-400 text-sm md:text-base">
                            {solutions.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors cursor-pointer block py-1 text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="text-left font-serif">
                        <h3 className="font-semibold mb-4 text-white text-base uppercase">Company</h3>
                        <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                            {company.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors cursor-pointer block py-1 text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="text-left font-serif">
                        <h3 className="font-semibold mb-4 text-white text-base uppercase">Resources</h3>
                        <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                            {resources.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors cursor-pointer block py-1 text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-gray-800 pt-6 md:pt-8 mb-6 md:mb-8">
                    <div className="max-w-md text-left">
                        <h4 className="font-medium mb-3 text-white text-base md:text-lg">Stay Updated</h4>
                        <p className="text-sm text-gray-400 mb-4">
                            Get the latest insights on AI and automation in Africa.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-3 py-3 sm:py-2 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm"
                            />
                            <button className="px-6 py-3 sm:py-2 bg-blue-600 text-white rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-blue-700 transition-colors cursor-pointer text-sm font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-sm">
                    <p className="text-gray-400 mb-3 md:mb-2">
                        &copy; 2024 WE Org. All rights reserved.
                    </p>
                    <div className="grid grid-cols-2 md:flex md:flex-row md:justify-center md:space-x-6 gap-4 md:gap-0 text-xs text-gray-500 font-serif">
                        <a href="#" className="hover:text-gray-400 transition-colors cursor-pointer">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400 transition-colors cursor-pointer">Terms of Service</a>
                        <a href="#" className="hover:text-gray-400 transition-colors cursor-pointer">Cookie Policy</a>
                        <a href="#" className="hover:text-gray-400 transition-colors cursor-pointer">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
