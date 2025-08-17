"use client";
import React, { useState } from "react";
import type { JSX } from "react";
import { Calendar, Clock, ExternalLink } from "lucide-react";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

const newsCategories = ["All", "AI Models", "Healthcare", "Robotics", "Research", "Business"];

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Meta Launches Advanced Computer Vision AI for Real-Time Object Recognition",
    excerpt: "New model processes visual data 40% faster with improved accuracy in complex environments.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop",
    category: "AI Models",
    date: "8 hours ago",
    readTime: "4 min",
  },
  {
    id: 2,
    title: "AI-Powered Surgical Robot Performs First Autonomous Heart Surgery",
    excerpt: "Groundbreaking procedure demonstrates precision and safety in robotic medical interventions.",
    image: "https://images.unsplash.com/photo-1559757175-0eb6d68d9071?w=400&h=250&fit=crop",
    category: "Healthcare",
    date: "12 hours ago",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "Tesla's Humanoid Robot Demonstrates Advanced Manufacturing Capabilities",
    excerpt: "Optimus robot shows significant improvements in dexterity and task completion in factory settings.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
    category: "Robotics",
    date: "1 day ago",
    readTime: "5 min",
  },
  {
    id: 4,
    title: "MIT Researchers Develop AI That Can Predict Climate Change with 95% Accuracy",
    excerpt: "Machine learning model analyzes satellite data to forecast environmental changes decades ahead.",
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=250&fit=crop",
    category: "Research",
    date: "1 day ago",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "Microsoft Invests $10B in AI Infrastructure for Enterprise Solutions",
    excerpt: "Major expansion of Azure AI services to support growing demand for business automation.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    category: "Business",
    date: "2 days ago",
    readTime: "3 min",
  },
  {
    id: 6,
    title: "New Neural Network Architecture Achieves Human-Level Language Understanding",
    excerpt: "Breakthrough in natural language processing shows remarkable improvements in context comprehension.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
    category: "AI Models",
    date: "2 days ago",
    readTime: "8 min",
  },
];

export default function NewsGrid(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredArticles =
    selectedCategory === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === selectedCategory);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950/30" aria-labelledby="news-grid-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="news-grid-heading"
            className="text-4xl md:text-5xl font-semibold uppercase font-serif text-slate-900 dark:text-white mb-4"
          >
            Latest News
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore the most recent developments in artificial intelligence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {newsCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article, index) => (
            <article
              key={article.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(article.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 group-hover:border-cyan-500/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 text-white text-xs font-medium rounded-full shadow-lg shadow-cyan-500/30">
                      {article.category}
                    </span>
                  </div>

                  {/* External Link Icon */}
                  <div
                    className={`absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === article.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                  >
                    <ExternalLink className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" aria-hidden="true" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
