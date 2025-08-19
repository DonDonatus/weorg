import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import AOSProvider from '@/components/AOSProvider'

export const metadata: Metadata = {
    title: 'Accessibility Statement - WE Org',
    description: 'Learn about WE Org\'s commitment to digital accessibility and inclusive design for all users.',
    keywords: 'accessibility, inclusive design, digital accessibility, WE Org accessibility',
}

export default function AccessibilityPage() {
    return (
        <AOSProvider>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
                Skip to main content
            </a>
            <main id="main-content" className="min-h-screen" role="main">
                <Nav />
                <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white" aria-labelledby="accessibility-heading">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 id="accessibility-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold uppercase my-6">Accessibility Statement</h1>
                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed sm:leading-8 mb-8">WE Org is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.</p>

                        <div className="space-y-8 sm:space-y-10 text-slate-200 text-base sm:text-lg leading-relaxed sm:leading-8">
                            <section aria-labelledby="commitment-heading">
                                <h2 id="commitment-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">1. Our Commitment to Accessibility</h2>
                                <p>At WE Org, we believe that technology should be accessible to everyone, regardless of their abilities or disabilities. Our commitment to accessibility is rooted in our mission to serve communities across Africa, and we recognize that inclusive design benefits all users, not just those with disabilities.</p>
                                <p className="mt-3">We are dedicated to:</p>
                                <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2 marker:text-slate-400">
                                    <li>Providing equal access to our digital services</li>
                                    <li>Following international accessibility standards</li>
                                    <li>Continuously improving our accessibility features</li>
                                    <li>Engaging with users to understand their needs</li>
                                    <li>Training our team on accessibility best practices</li>
                                </ul>
                            </section>

                            <section aria-labelledby="standards-heading">
                                <h2 id="standards-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">2. Accessibility Standards</h2>
                                <p>We strive to conform to the following accessibility standards and guidelines:</p>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Web Content Accessibility Guidelines (WCAG) 2.1</h3>
                                        <p>We aim to meet WCAG 2.1 Level AA standards, which include:</p>
                                        <ul className="list-disc pl-6 sm:pl-8 space-y-1 mt-2 marker:text-slate-400 text-sm">
                                            <li>Perceivable: Content is presented in ways users can perceive</li>
                                            <li>Operable: Interface components are operable by all users</li>
                                            <li>Understandable: Information and operation are understandable</li>
                                            <li>Robust: Content can be interpreted by assistive technologies</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Section 508 Compliance</h3>
                                        <p>We follow Section 508 standards for federal accessibility requirements, ensuring our digital services are accessible to federal employees and the public.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Local Accessibility Laws</h3>
                                        <p>We comply with accessibility requirements in the countries where we operate, including Ghana&rsquo;s commitment to inclusive digital services.</p>
                                    </div>
                                </div>
                            </section>

                            <section aria-labelledby="features-heading">
                                <h2 id="features-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">3. Accessibility Features</h2>
                                <p>Our website includes several accessibility features to enhance the user experience:</p>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Keyboard Navigation</h3>
                                        <p>All interactive elements can be accessed and operated using only a keyboard, including:</p>
                                        <ul className="list-disc pl-6 sm:pl-8 space-y-1 mt-2 marker:text-slate-400 text-sm">
                                            <li>Tab navigation through all interactive elements</li>
                                            <li>Enter and Space key activation for buttons and links</li>
                                            <li>Arrow key navigation for dropdown menus</li>
                                            <li>Escape key to close modals and menus</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Screen Reader Support</h3>
                                        <p>Our website is compatible with screen readers and other assistive technologies:</p>
                                        <ul className="list-disc pl-6 sm:pl-8 space-y-1 mt-2 marker:text-slate-400 text-sm">
                                            <li>Semantic HTML structure for proper navigation</li>
                                            <li>ARIA labels and descriptions for complex elements</li>
                                            <li>Alternative text for all images</li>
                                            <li>Proper heading hierarchy for document structure</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Visual Accessibility</h3>
                                        <p>We ensure our content is accessible to users with visual impairments:</p>
                                        <ul className="list-disc pl-6 sm:pl-8 space-y-1 mt-2 marker:text-slate-400 text-sm">
                                            <li>High contrast color schemes</li>
                                            <li>Resizable text that doesn&rsquo;t break layout</li>
                                            <li>Clear, readable fonts and adequate spacing</li>
                                            <li>Visual indicators for interactive elements</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Skip Navigation</h3>
                                        <p>We provide a &ldquo;Skip to main content&rdquo; link at the top of each page to help keyboard users and screen reader users quickly navigate to the main content area.</p>
                                    </div>
                                </div>
                            </section>

                            <section aria-labelledby="compatibility-heading">
                                <h2 id="compatibility-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">4. Browser and Technology Compatibility</h2>
                                <p>Our website is designed to work with the following technologies:</p>
                                <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2 marker:text-slate-400">
                                    <li><span className="font-semibold">Screen Readers</span>: JAWS, NVDA, VoiceOver, TalkBack</li>
                                    <li><span className="font-semibold">Browsers</span>: Chrome, Firefox, Safari, Edge (latest versions)</li>
                                    <li><span className="font-semibold">Mobile Devices</span>: iOS and Android with accessibility features enabled</li>
                                    <li><span className="font-semibold">Assistive Technologies</span>: Voice control software, switch devices, magnification tools</li>
                                </ul>
                            </section>

                            <section aria-labelledby="known-issues-heading">
                                <h2 id="known-issues-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">5. Known Accessibility Issues</h2>
                                <p>We are aware of some accessibility limitations and are working to address them:</p>
                                <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2 marker:text-slate-400">
                                    <li>Some third-party content may not be fully accessible</li>
                                    <li>Older PDF documents may not be screen reader compatible</li>
                                    <li>Some interactive elements may require JavaScript to be enabled</li>
                                    <li>Video content may not always include captions or audio descriptions</li>
                                </ul>
                                <p className="mt-3">We are actively working to resolve these issues and improve accessibility across all our digital services.</p>
                            </section>

                            <section aria-labelledby="testing-heading">
                                <h2 id="testing-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">6. Accessibility Testing and Monitoring</h2>
                                <p>We regularly test our website for accessibility compliance using:</p>
                                <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2 marker:text-slate-400">
                                    <li><span className="font-semibold">Automated Testing</span>: Accessibility evaluation tools and validators</li>
                                    <li><span className="font-semibold">Manual Testing</span>: Keyboard navigation and screen reader testing</li>
                                    <li><span className="font-semibold">User Testing</span>: Feedback from users with disabilities</li>
                                    <li><span className="font-semibold">Regular Audits</span>: Periodic accessibility reviews and updates</li>
                                </ul>
                            </section>

                            <section aria-labelledby="feedback-heading">
                                <h2 id="feedback-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">7. Feedback and Support</h2>
                                <p>We welcome feedback on the accessibility of our website and are committed to continuous improvement. If you experience accessibility barriers or have suggestions for improvement, please contact us:</p>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Contact Methods</h3>
                                        <ul className="list-disc pl-6 sm:pl-8 space-y-1 mt-2 marker:text-slate-400 text-sm">
                                            <li>Email us through our <a className="underline hover:text-slate-100" href="/contact">Contact</a> page</li>
                                            <li>Include &ldquo;Accessibility Feedback&rdquo; in your subject line</li>
                                            <li>Describe the accessibility issue you encountered</li>
                                            <li>Suggest how we can improve the experience</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Response Time</h3>
                                        <p>We aim to respond to accessibility feedback within 2 business days and will work to resolve identified issues promptly.</p>
                                    </div>
                                </div>
                            </section>

                            <section aria-labelledby="continuous-improvement-heading">
                                <h2 id="continuous-improvement-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">8. Continuous Improvement</h2>
                                <p>Accessibility is an ongoing commitment at WE Org. We are continuously working to:</p>
                                <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2 marker:text-slate-400">
                                    <li>Update our accessibility standards and practices</li>
                                    <li>Train our development team on accessibility best practices</li>
                                    <li>Incorporate accessibility requirements into our design process</li>
                                    <li>Stay informed about new accessibility technologies and standards</li>
                                    <li>Regularly review and update our accessibility policies</li>
                                </ul>
                            </section>

                            <section aria-labelledby="updates-heading">
                                <h2 id="updates-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">9. Updates to This Statement</h2>
                                <p>We may update this Accessibility Statement from time to time to reflect improvements in our accessibility features or changes in accessibility standards. We will notify users of significant changes through our website or other communication channels.</p>
                            </section>

                            <section aria-labelledby="contact-heading">
                                <h2 id="contact-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">10. Contact Information</h2>
                                <p>For accessibility-related questions, feedback, or support, please contact us via our <a className="underline hover:text-slate-100" href="/contact">Contact</a> page. We are committed to making our digital services accessible to everyone and appreciate your input in helping us achieve this goal.</p>
                                <p className="mt-2 text-slate-400 text-sm sm:text-base">Last updated: December 2024</p>
                            </section>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </AOSProvider>
    )
}


