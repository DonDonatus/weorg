"use client";
import React, { useState, useEffect } from "react";
import type { JSX } from "react";
import { Calendar, ArrowRight } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  trending: boolean;
}

const featuredArticles: Article[] = [
  {
    id: 1,
    title: "OpenAI Announces GPT-5: The Next Generation of Language Models",
    excerpt:
      "Revolutionary breakthrough in natural language processing with improved reasoning capabilities and multimodal understanding.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    category: "AI Models",
    date: "2 hours ago",
    readTime: "5 min read",
    trending: true,
  },
  {
    id: 2,
    title: "AI-Powered Drug Discovery Leads to Cancer Treatment Breakthrough",
    excerpt:
      "Machine learning algorithms identify promising compounds 10x faster than traditional methods, accelerating medical research.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    category: "Healthcare",
    date: "4 hours ago",
    readTime: "7 min read",
    trending: false,
  },
  {
    id: 3,
    title: "Google's Quantum AI Achieves New Milestone in Error Correction",
    excerpt:
      "Significant progress toward fault-tolerant quantum computing with implications for cryptography and optimization.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    category: "Quantum Computing",
    date: "6 hours ago",
    readTime: "6 min read",
    trending: true,
  },
];

export default function FeaturedNews(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredArticles.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, []);

  const activeArticle = featuredArticles[activeIndex];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 relative" aria-labelledby="featured-news-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="featured-news-heading"
            className="text-4xl md:text-5xl font-semibold uppercase font-serif text-slate-900 dark:text-white mb-4"
          >
            Featured Stories
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Stay ahead with the latest breakthroughs in AI and emerging technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Main Featured Article */}
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {activeArticle.trending && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full animate-pulse shadow-lg shadow-red-500/30">
                  TRENDING
                </div>
              )}

              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-cyan-400 text-sm font-medium mb-2">{activeArticle.category}</div>
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{activeArticle.title}</h3>
                <div className="flex items-center text-slate-300 text-sm space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                    {activeArticle.date}
                  </span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Details & Navigation */}
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="text-cyan-400 text-sm font-medium mb-3">{activeArticle.category}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{activeArticle.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{activeArticle.excerpt}</p>

              <button className="btn-primary group w-full sm:w-auto">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>

            {/* Article Navigation */}
            <div className="space-y-3">
              {featuredArticles.map((article, index) => (
                <button
                  key={article.id}
                  className={`w-full p-4 rounded-xl cursor-pointer transition-all duration-300 text-left ${
                    index === activeIndex
                      ? "bg-cyan-500/20 border border-cyan-500/40"
                      : "bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-900/60"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Select article: ${article.title}`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        index === activeIndex ? "bg-cyan-400" : "bg-slate-400 dark:bg-slate-600"
                      }`}
                      aria-hidden="true"
                    ></div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`font-medium text-sm truncate ${
                          index === activeIndex ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {article.title}
                      </h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{article.date}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
