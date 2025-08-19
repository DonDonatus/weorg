import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import AOSProvider from '@/components/AOSProvider'

export const metadata: Metadata = {
    title: 'Terms of Service - WE Org',
    description: 'The terms and conditions governing the use of WE Org services and website.',
    keywords: 'terms of service, terms, agreement, WE Org terms',
}

export default function TermsPage() {
    return (
        <AOSProvider>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
                Skip to main content
            </a>
            <main id="main-content" className="min-h-screen" role="main">
                <Nav />
                <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white" aria-labelledby="terms-heading">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 id="terms-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold uppercase my-6">Terms of Service</h1>
                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed sm:leading-8 mb-8">These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of WE Org&rsquo;s website, products, services, and any interactions with us (collectively, the &ldquo;Services&rdquo;). By using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use our Services.</p>

                        <div className="space-y-8 sm:space-y-10 text-slate-200 text-base sm:text-lg leading-relaxed sm:leading-8">
                            <section aria-labelledby="acceptance-heading">
                                <h2 id="acceptance-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">1. Acceptance of Terms</h2>
                                <p>By accessing or using our Services, you confirm that you have read, understood, and agree to be bound by these Terms. These Terms apply to all visitors, users, and others who access or use our Services. If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>
                            </section>

                            <section aria-labelledby="services-heading">
                                <h2 id="services-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">2. Description of Services</h2>
                                <p>WE Org provides AI-powered automation solutions for governments, enterprises, researchers, and communities across Africa. Our Services include but are not limited to:</p>
                                <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2 marker:text-slate-400">
                                    <li><span className="font-semibold">AI Solutions</span>: Custom AI agents and automation tools</li>
                                    <li><span className="font-semibold">Consulting Services</span>: Strategic guidance on AI implementation</li>
                                    <li><span className="font-semibold">Fellowship Programs</span>: AI training and development opportunities</li>
                                    <li><span className="font-semibold">Partnership Support</span>: Collaborative project facilitation</li>
                                    <li><span className="font-semibold">Research Initiatives</span>: AI research and development projects</li>
                                </ul>
                            </section>

                            <section aria-labelledby="eligibility-heading">
                                <h2 id="eligibility-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">3. Eligibility and Registration</h2>
                                <p>To use our Services, you must be at least 18 years old and have the legal capacity to enter into binding agreements. Some Services may require registration or account creation. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                            </section>

                            <section aria-labelledby="acceptable-use-heading">
                                <h2 id="acceptable-use-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">4. Acceptable Use</h2>
                                <p>You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                                <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2 marker:text-slate-400">
                                    <li>Use the Services to transmit or distribute harmful, offensive, or illegal content</li>
                                    <li>Attempt to gain unauthorized access to our systems or networks</li>
                                    <li>Interfere with or disrupt the Services or servers</li>
                                    <li>Use the Services for commercial purposes without our written consent</li>
                                    <li>Reverse engineer, decompile, or disassemble our software</li>
                                    <li>Violate any applicable laws or regulations</li>
                                </ul>
                            </section>

                            <section aria-labelledby="intellectual-property-heading">
                                <h2 id="intellectual-property-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">5. Intellectual Property Rights</h2>
                                <p>The Services and their original content, features, and functionality are owned by WE Org and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Services without our prior written consent.</p>
                            </section>

                            <section aria-labelledby="user-content-heading">
                                <h2 id="user-content-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">6. User Content and Contributions</h2>
                                <p>You retain ownership of any content you submit, post, or display on or through our Services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with providing and improving our Services.</p>
                                <p className="mt-3">You are responsible for ensuring that your content does not violate any third-party rights or applicable laws.</p>
                            </section>

                            <section aria-labelledby="privacy-heading">
                                <h2 id="privacy-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">7. Privacy and Data Protection</h2>
                                <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you consent to our collection and use of information as outlined in our Privacy Policy.</p>
                            </section>

                            <section aria-labelledby="disclaimers-heading">
                                <h2 id="disclaimers-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">8. Disclaimers and Limitations</h2>
                                <p>Our Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind. We do not guarantee that our Services will be uninterrupted, secure, or error-free. We are not responsible for any damages or losses resulting from your use of our Services.</p>
                                <p className="mt-3">In no event shall WE Org be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
                            </section>

                            <section aria-labelledby="indemnification-heading">
                                <h2 id="indemnification-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">9. Indemnification</h2>
                                <p>You agree to defend, indemnify, and hold harmless WE Org and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Services or violation of these Terms.</p>
                            </section>

                            <section aria-labelledby="termination-heading">
                                <h2 id="termination-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">10. Termination</h2>
                                <p>We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Services will cease immediately.</p>
                            </section>

                            <section aria-labelledby="governing-law-heading">
                                <h2 id="governing-law-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">11. Governing Law and Dispute Resolution</h2>
                                <p>These Terms shall be governed by and construed in accordance with the laws of Ghana, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our Services shall be resolved through good faith negotiations or, if necessary, through the appropriate courts in Ghana.</p>
                            </section>

                            <section aria-labelledby="changes-heading">
                                <h2 id="changes-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">12. Changes to Terms</h2>
                                <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                            </section>

                            <section aria-labelledby="contact-heading">
                                <h2 id="contact-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">13. Contact Information</h2>
                                <p>If you have any questions about these Terms, please contact us via the <a className="underline hover:text-slate-100" href="/contact">Contact</a> page. We aim to respond to all inquiries promptly.</p>
                                <p className="mt-2 text-slate-400 text-sm sm:text-base">Effective date: December 2024</p>
                            </section>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </AOSProvider>
    )
}


