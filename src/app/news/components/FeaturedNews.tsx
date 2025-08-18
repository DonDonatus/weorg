"use client";
import type { JSX } from "react";
import Image from "next/image";

const posts = [
	{
		id: 1,
		title: "GNSS Partnership Announcement",
		href: "#",
		description:
			"We are partnering with key stakeholders to advance GNSS capabilities across the region, improving positioning and infrastructure resilience.",
		imageUrl:
			"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80",
		date: "Mar 16, 2024",
		datetime: "2024-03-16",
		category: { title: "Partnerships", href: "#" },
		author: {
			name: "WeOrg Team",
			role: "Editorial",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		id: 2,
		title: "Twi NLP Model Launch",
		href: "#",
		description:
			"Introducing our Twi language NLP model built for Ghanaian contexts, enabling search, summarization, and classification in local language.",
		imageUrl:
			"https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80",
		date: "Apr 10, 2024",
		datetime: "2024-04-10",
		category: { title: "Research", href: "#" },
		author: {
			name: "WeOrg Research",
			role: "NLP Team",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		id: 3,
		title: "Fellow Spotlight Series",
		href: "#",
		description:
			"Celebrating our fellows and their impact—stories of innovation, community work, and the projects they’re building.",
		imageUrl:
			"https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80",
		date: "May 12, 2024",
		datetime: "2024-05-12",
		category: { title: "fellowships", href: "#" },
		author: {
			name: "fellowship program",
			role: "Community",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		id: 4,
		title: "Behind the Scenes: Building Ghana’s First Agents",
		href: "#",
		description:
			"A look at our engineering practices, evaluation pipelines, and the infrastructure powering the next generation of Ghanaian AI agents.",
		imageUrl:
			"https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80",
		date: "Jun 22, 2024",
		datetime: "2024-06-22",
		category: { title: "Government Projects", href: "#" },
		author: {
			name: "Platform Engineering",
			role: "Team",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		id: 5,
		title: "Thought Leadership: Why AI Must Be Built by Africans",
		href: "#",
		description:
			"Our perspective on why inclusive, locally led development is essential for responsible, impactful AI across the continent.",
		imageUrl:
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80",
		date: "Jul 18, 2024",
		datetime: "2024-07-18",
		category: { title: "Press & Media", href: "#" },
		author: {
			name: "WeOrg Leadership",
			role: "Editorial",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
];

function getCategoryBadgeClasses(categoryTitle: string): string {
	const base =
		"relative z-10 rounded-full px-3 py-1.5 text-xs font-medium transition-colors";
	switch (categoryTitle.toLowerCase()) {
		case "partnerships":
			return `${base} bg-cyan-50 text-cyan-700 hover:bg-cyan-100 dark:bg-cyan-900/30 dark:text-cyan-200 dark:hover:bg-cyan-900/50`;
		case "research":
			return `${base} bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-200 dark:hover:bg-purple-900/50`;
		case "fellowships":
			return `${base} bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-200 dark:hover:bg-emerald-900/50`;
		case "government projects":
			return `${base} bg-amber-50 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-200 dark:hover:bg-amber-900/50`;
		case "press & media":
			return `${base} bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-900/30 dark:text-rose-200 dark:hover:bg-rose-900/50`;
		default:
			return `${base} bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-slate-800`;
	}
}

export default function FeaturedNews(): JSX.Element {
	return (
		<div className="bg-gray-50 py-12 sm:py-16 md:py-24 dark:bg-gray-950">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-4xl">
					<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase font-serif text-gray-900 lg:text-4xl xl:text-5xl dark:text-white">
						Featured Articles
					</h2>
					<p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
						Highlights from our projects, research, and community.
					</p>
					<div className="mt-8 sm:mt-12 lg:mt-20 space-y-12 sm:space-y-16">
						{posts.map((post, index) => (
							<article key={post.id} className="relative isolate flex flex-col gap-4 sm:gap-6 lg:gap-8 xl:flex-row">
								<div className="relative aspect-video sm:aspect-2/1 xl:aspect-square xl:w-64 xl:shrink-0">
									<Image		
										alt={post.title}
										src={post.imageUrl}
										fill
										sizes="(min-width: 1280px) 256px, 100vw"
										quality={80}
										priority={index === 0}
										className="absolute inset-0 size-full rounded-xl sm:rounded-2xl bg-gray-50 object-cover dark:bg-gray-800"
									/>
									<div className="absolute inset-0 rounded-xl sm:rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10" />
								</div>
								<div className="flex-1">
									<div className="flex items-center gap-x-3 sm:gap-x-4 text-xs">
										<time dateTime={post.datetime} className="text-gray-500 dark:text-gray-400">
											{post.date}
										</time>
										<a
											href={post.category.href}
											className={getCategoryBadgeClasses(post.category.title)}
										>
											{post.category.title}
										</a>
									</div>
									<div className="group relative max-w-none lg:max-w-xl">
										<h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300 leading-tight">
											<a href={post.href}>
												<span className="absolute inset-0" />
												{post.title}
											</a>
										</h3>
										<p className="mt-2 sm:mt-3 md:mt-5 text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">{post.description}</p>
									</div>
									<div className="mt-4 sm:mt-6 flex border-t border-gray-900/5 pt-4 sm:pt-6 dark:border-white/10">

									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
