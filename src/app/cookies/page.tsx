import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import AOSProvider from '@/components/AOSProvider'

export const metadata: Metadata = {
    title: 'Cookie Policy - WE Org',
    description: 'Learn how WE Org uses cookies and similar technologies to improve your experience.',
    keywords: 'cookie policy, cookies, tracking technologies, WE Org cookies',
}

export default function CookiesPage() {
    return (
        <AOSProvider>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
                Skip to main content
            </a>
            <main id="main-content" className="min-h-screen" role="main">
                <Nav />
                <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white" aria-labelledby="cookies-heading">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 id="cookies-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold uppercase my-6">Cookie Policy</h1>
                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed sm:leading-8 mb-8">This Cookie Policy explains how WE Org (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) uses cookies and similar technologies when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>

                        <div className="space-y-8 sm:space-y-10 text-slate-200 text-base sm:text-lg leading-relaxed sm:leading-8">
                            <section aria-labelledby="what-are-cookies-heading">
                                <h2 id="what-are-cookies-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">1. What Are Cookies?</h2>
                                <p>Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies can be either &ldquo;session cookies&rdquo; (which are deleted when you close your browser) or &ldquo;persistent cookies&rdquo; (which remain on your device for a set period).</p>
                            </section>

                            <section aria-labelledby="why-we-use-cookies-heading">
                                <h2 id="why-we-use-cookies-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">2. Why We Use Cookies</h2>
                                <p>We use cookies for several important reasons:</p>
                                <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2 marker:text-slate-400">
                                    <li><span className="font-semibold">Essential Cookies</span>: Required for the website to function properly</li>
                                    <li><span className="font-semibold">Performance Cookies</span>: Help us understand how visitors interact with our website</li>
                                    <li><span className="font-semibold">Functionality Cookies</span>: Remember your preferences and settings</li>
                                    <li><span className="font-semibold">Analytics Cookies</span>: Provide insights into website usage and performance</li>
                                    <li><span className="font-semibold">Marketing Cookies</span>: Help us deliver relevant content and advertisements</li>
                                </ul>
                            </section>

                            <section aria-labelledby="types-of-cookies-heading">
                                <h2 id="types-of-cookies-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">3. Types of Cookies We Use</h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Essential Cookies</h3>
                                        <p>These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms.</p>
                                        <ul className="list-disc pl-6 sm:pl-8 space-y-1 mt-2 marker:text-slate-400 text-sm">
                                            <li>Authentication cookies for secure login</li>
                                            <li>Security cookies to prevent fraud</li>
                                            <li>Load balancing cookies for performance</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Performance Cookies</h3>
                                        <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are popular and which are not.</p>
                                        <ul className="list-disc pl-6 sm:pl-8 space-y-1 mt-2 marker:text-slate-400 text-sm">
                                            <li>Google Analytics cookies for website statistics</li>
                                            <li>Page load time measurement cookies</li>
                                            <li>Error tracking cookies</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Functionality Cookies</h3>
                                        <p>These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
                                        <ul className="list-disc pl-6 sm:pl-8 space-y-1 mt-2 marker:text-slate-400 text-sm">
                                            <li>Language preference cookies</li>
                                            <li>Theme and layout preference cookies</li>
                                            <li>Form completion cookies</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section aria-labelledby="third-party-cookies-heading">
                                <h2 id="third-party-cookies-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">4. Third-Party Cookies</h2>
                                <p>Some cookies are placed by third-party services that appear on our pages. We use these services to:</p>
                                <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2 marker:text-slate-400">
                                    <li><span className="font-semibold">Google Analytics</span>: To understand how visitors use our website</li>
                                    <li><span className="font-semibold">Social Media Platforms</span>: To enable social sharing and integration</li>
                                    <li><span className="font-semibold">Payment Processors</span>: To securely process transactions</li>
                                    <li><span className="font-semibold">Content Delivery Networks</span>: To improve website loading speed</li>
                                </ul>
                                <p className="mt-3">These third-party services have their own privacy policies and cookie practices, which we encourage you to review.</p>
                            </section>

                            <section aria-labelledby="cookie-duration-heading">
                                <h2 id="cookie-duration-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">5. How Long Cookies Last</h2>
                                <p>The duration of cookies depends on their type:</p>
                                <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2 marker:text-slate-400">
                                    <li><span className="font-semibold">Session Cookies</span>: Deleted when you close your browser</li>
                                    <li><span className="font-semibold">Persistent Cookies</span>: Remain on your device for a set period (usually 1-2 years)</li>
                                    <li><span className="font-semibold">Essential Cookies</span>: May persist for longer periods for security purposes</li>
                                </ul>
                            </section>

                            <section aria-labelledby="managing-cookies-heading">
                                <h2 id="managing-cookies-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">6. Managing Your Cookie Preferences</h2>
                                <p>You have several options for managing cookies:</p>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Browser Settings</h3>
                                        <p>Most web browsers allow you to control cookies through their settings. You can:</p>
                                        <ul className="list-disc pl-6 sm:pl-8 space-y-1 mt-2 marker:text-slate-400 text-sm">
                                            <li>Block all cookies</li>
                                            <li>Block only third-party cookies</li>
                                            <li>Delete existing cookies</li>
                                            <li>Set preferences for specific websites</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Cookie Consent</h3>
                                        <p>When you first visit our website, you&rsquo;ll see a cookie banner that allows you to accept or decline non-essential cookies. You can change these preferences at any time.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">Third-Party Opt-Outs</h3>
                                        <p>For third-party services like Google Analytics, you can opt out directly through their websites or browser extensions.</p>
                                    </div>
                                </div>
                            </section>

                            <section aria-labelledby="impact-of-disabling-heading">
                                <h2 id="impact-of-disabling-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">7. Impact of Disabling Cookies</h2>
                                <p>While you can disable cookies, please note that:</p>
                                <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2 marker:text-slate-400">
                                    <li>Essential website functions may not work properly</li>
                                    <li>Your user experience may be degraded</li>
                                    <li>Some features may be unavailable</li>
                                    <li>We may not be able to provide personalized content</li>
                                </ul>
                            </section>

                            <section aria-labelledby="updates-heading">
                                <h2 id="updates-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">8. Updates to This Policy</h2>
                                <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.</p>
                            </section>

                            <section aria-labelledby="contact-heading">
                                <h2 id="contact-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">9. Contact Us</h2>
                                <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us via the <a className="underline hover:text-slate-100" href="/contact">Contact</a> page. We&rsquo;re here to help and will respond to your inquiries promptly.</p>
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


