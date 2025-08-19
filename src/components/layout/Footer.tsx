'use client'

import Image from 'next/image'

export default function Footer() {
	const solutions = [
		{ label: "Government Services", href: "/solutions" },
		{ label: "Enterprise Automation", href: "/solutions" },
		{ label: "AI Integration", href: "/solutions" },
		{ label: "Digital Transformation", href: "/solutions" }
	];

	const company = [
		{ label: "About Us", href: "/about" },
		{ label: "Our Vision", href: "/about" },
		{ label: "Contact", href: "/contact" },
		{ label: "Careers", href: "/fellowship" }
	];

	const resources = [
		{ label: "Documentation", href: "/news" },
		{ label: "Case Studies", href: "/news" },
		{ label: "White Papers", href: "/news" },
		{ label: "Training Materials", href: "/about" }
	];

	const legal = [
		{ label: "Privacy Policy", href: "/privacy", icon: "shield", color: "blue" },
		{ label: "Terms of Service", href: "/terms", icon: "document", color: "green" },
		{ label: "Cookie Policy", href: "/cookies", icon: "settings", color: "purple" },
	];

	return (
		<footer className="bg-gray-900 text-white py-12 md:py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main Footer Grid */}
				<div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
					{/* Company Info - Full width on mobile, spans 2 on desktop */}
					<div className="col-span-2 lg:col-span-2 text-left">
						<div className="flex items-center justify-start space-x-3 mb-6">
							<div className="flex items-center">
								<Image
									src="/logo_full_w.png"
									alt="WE Org"
									width={120}
									height={48}
									className="h-10 md:h-12 w-auto"
									priority
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
					<div className="text-left">
						<h3 className="font-semibold mb-4 text-white text-sm uppercase">Solutions</h3>
						<ul className="space-y-1 text-gray-400 font-serif text-sm md:text-sm">
							{solutions.map((item, index) => (
								<li key={index}>
									<a
										href={item.href}
										className="hover:text-white transition-colors cursor-pointer block py-1 text-sm"
										aria-label={`Learn more about ${item.label}`}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Company */}
					<div className="text-left">
						<h3 className="font-semibold mb-4 text-white text-sm uppercase">Company</h3>
						<ul className="space-y-2 text-gray-400 font-serif text-sm md:text-sm">
							{company.map((item, index) => (
								<li key={index}>
									<a
										href={item.href}
										className="hover:text-white transition-colors cursor-pointer block py-1 text-sm"
										aria-label={`Learn more about ${item.label}`}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Resources */}
					<div className="text-left">
						<h3 className="font-semibold mb-4 text-white text-sm uppercase">Resources</h3>
						<ul className="space-y-2 text-gray-400 font-serif text-sm md:text-sm">
							{resources.map((item, index) => (
								<li key={index}>
									<a
										href={item.href}
										className="hover:text-white transition-colors cursor-pointer block py-1 text-sm"
										aria-label={`Access ${item.label}`}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Legal & Compliance */}
					<div className="text-left">
						<h3 className="font-semibold mb-4 text-white text-sm uppercase">Legal & Compliance</h3>
						<ul className="space-y-2 text-gray-400 font-serif text-sm md:text-sm">
							{legal.map((item, index) => (
								<li key={index}>
									<a
										href={item.href}
										className="hover:text-white transition-colors cursor-pointer block py-1 text-sm"
										aria-label={`Access ${item.label}`}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-sm">
					<p className="text-gray-400">
						&copy; 2025 WE Org. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}