import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import AOSProvider from '@/components/AOSProvider'

export const metadata: Metadata = {
	title: 'Privacy Policy - WE Org',
	description: 'Learn how WE Org collects, uses, and protects your information.',
	keywords: 'privacy policy, data protection, user data, WE Org privacy',
}

export default function PrivacyPage() {
	return (
		<AOSProvider>
			<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
				Skip to main content
			</a>
			<main id="main-content" className="min-h-screen" role="main">
				<Nav />
				<section className="py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white" aria-labelledby="privacy-heading">
					<div className="max-w-4xl mx-auto px-6">
						<h1 id="privacy-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold uppercase my-6">Privacy Policy</h1>
						<p className="text-slate-300 text-base sm:text-lg leading-relaxed sm:leading-8 mb-8">At WE Org (&ldquo;WE Org&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we build people‑first AI agents and solutions for governments, enterprises, researchers, and communities across Africa. Your trust is essential to our mission. This Privacy Policy explains what information we collect, how we use it, with whom we share it, and the choices you have. This Policy applies to our website, products, services, and any interactions with us (collectively, the &ldquo;Services&rdquo;).</p>

						<div className="space-y-8 sm:space-y-10 text-slate-200 text-base sm:text-lg leading-relaxed sm:leading-8">
							<section aria-labelledby="scope-controller-heading">
								<h2 id="scope-controller-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">1. Scope & Data Controller</h2>
								<p>WE Org is headquartered in Ghana and serves partners across Africa and globally. For the purposes of applicable data protection laws (e.g., Ghana Data Protection Act, GDPR where applicable), WE Org is the data controller for personal information we collect through our public website and direct interactions. When we provide solutions to government or enterprise clients, we may act as a data processor, processing data on their instructions pursuant to contract.</p>
							</section>

							<section aria-labelledby="information-heading">
								<h2 id="information-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">2. Information We Collect</h2>
								<ul className="list-disc pl-6 sm:pl-8 space-y-2 marker:text-slate-400">
									<li><span className="font-semibold">Contact & Identity Data</span>: name, email, phone, organization, role, and communication content when you contact us or submit forms.</li>
									<li><span className="font-semibold">Usage & Device Data</span>: IP address, device type, browser, pages viewed, referring pages, and timestamps collected via logs and analytics to improve our site.</li>
									<li><span className="font-semibold">Partner & Client Data</span>: limited information necessary to evaluate collaborations, execute agreements, and deliver solutions (e.g., authorized user lists).</li>
									<li><span className="font-semibold">Fellowship & Careers Data</span>: CVs, portfolios, application responses, and interview records provided by you.</li>
									<li><span className="font-semibold">Research Data</span>: data you share for pilots or research initiatives, processed under research or service agreements.</li>
								</ul>
								<p className="mt-3">We collect information directly from you, from your use of the Services, and, where permitted, from partners or publicly available sources to verify business information.</p>
							</section>

							<section aria-labelledby="use-basis-heading">
								<h2 id="use-basis-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">3. How We Use Information & Legal Bases</h2>
								<ul className="list-disc pl-6 sm:pl-8 space-y-2 marker:text-slate-400">
									<li>Provide, operate, and improve the Services; personalize content and experiences.</li>
									<li>Respond to inquiries, support requests, and partnership opportunities.</li>
									<li>Evaluate research collaborations, fellowships, and career applications.</li>
									<li>Ensure security, prevent fraud and abuse, and comply with legal obligations.</li>
									<li>Communicate updates about our Services, events, or opportunities (you may opt out at any time).</li>
								</ul>
								<p className="mt-3">Where applicable law requires, we rely on one or more of the following legal bases: consent, performance of a contract, compliance with legal obligations, and our legitimate interests (e.g., securing and improving our Services).</p>
							</section>

							<section aria-labelledby="sharing-heading">
								<h2 id="sharing-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">4. Sharing & Disclosures</h2>
								<p>We do not sell your personal information. We may share information with:</p>
								<ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2 marker:text-slate-400">
									<li><span className="font-semibold">Service providers</span> assisting with hosting, analytics, security, or communications, bound by confidentiality and data protection obligations.</li>
									<li><span className="font-semibold">Clients & partners</span> when necessary to deliver joint projects, with appropriate contractual protections.</li>
									<li><span className="font-semibold">Legal & safety</span> when required by law, to protect rights, safety, or investigate potential violations.</li>
									<li><span className="font-semibold">Business transactions</span> in connection with a merger, acquisition, or asset transfer, subject to continued protections.</li>
								</ul>
							</section>

							<section aria-labelledby="transfers-heading">
								<h2 id="transfers-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">5. International Data Transfers</h2>
								<p>Given our operations across Africa and globally, data may be processed in countries other than your own. Where required, we implement appropriate safeguards (e.g., contractual clauses) to protect transferred data.</p>
							</section>

							<section aria-labelledby="retention-heading">
								<h2 id="retention-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">6. Data Retention</h2>
								<p>We retain personal information only as long as necessary for the purposes described in this Policy, to comply with legal obligations, resolve disputes, and enforce agreements. Retention periods depend on data type, context, and legal requirements.</p>
							</section>

							<section aria-labelledby="security-heading">
								<h2 id="security-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">7. Security</h2>
								<p>We use administrative, technical, and organizational measures designed to protect personal information. No security method is perfect; we continuously improve safeguards aligned with risk.</p>
							</section>

							<section aria-labelledby="rights-heading">
								<h2 id="rights-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">8. Your Rights & Choices</h2>
								<p>Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal information, and to object or withdraw consent. You can also opt out of non‑essential communications. To exercise rights, contact us via the form on our Contact page. We may verify your request to protect your data.</p>
							</section>

							<section aria-labelledby="cookies-heading">
								<h2 id="cookies-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">9. Cookies & Similar Technologies</h2>
								<p>We use cookies to operate our site and understand usage. For details and choices, please see our <a className="underline hover:text-slate-100" href="/cookies">Cookie Policy</a>.</p>
							</section>

							<section aria-labelledby="children-heading">
								<h2 id="children-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">10. Children’s Privacy</h2>
								<p>Our Services are not directed to children under 13 (or as defined by local law). We do not knowingly collect personal information from children. If you believe a child has provided personal information to us, please contact us and we will take appropriate steps.</p>
							</section>

							<section aria-labelledby="changes-heading">
								<h2 id="changes-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">11. Changes to This Policy</h2>
								<p>We may update this Policy to reflect changes in our practices or legal requirements. We will post the updated date at the top of this page and, where appropriate, notify you through the Services.</p>
							</section>

							<section aria-labelledby="contact-heading">
								<h2 id="contact-heading" className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">12. Contact Us</h2>
								<p>If you have questions about this Policy or our data practices, please contact us via the <a className="underline hover:text-slate-100" href="/contact">Contact</a> page. We aim to respond promptly.</p>
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


