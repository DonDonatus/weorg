"use client";
import React, { useState, useEffect } from "react";
import type { JSX } from "react";
import { TrendingUp } from "lucide-react";

const trendingTopics = ["GPT-5", "AI Healthcare", "Quantum AI", "Neural Networks"];

export default function NewsHero(): JSX.Element {
  const [currentTopic, setCurrentTopic] = useState<number>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentTopic((prev) => (prev + 1) % trendingTopics.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="relative pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden"
      aria-labelledby="news-hero-heading"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-5 sm:opacity-10 md:opacity-20 transition-transform duration-1000"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-purple-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border border-emerald-400/20 rounded-full animate-bounce"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h1
          id="news-hero-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif uppercase font-semibold text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-2 sm:px-4 mt-8 sm:mt-0"
        >
          AI News &{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Updates
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
          Latest developments in artificial intelligence and emerging technologies.
        </p>

        {/* Trending Topic */}
        <div className="inline-flex items-center space-x-3 px-4 sm:px-6 py-2 sm:py-3 bg-slate-900/60 backdrop-blur-xl rounded-full border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
          <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" aria-hidden="true" />
          <span className="text-slate-300 text-sm sm:text-base">Trending: </span>
          <span className="text-cyan-400 font-medium transition-all duration-500 text-sm sm:text-base">
            {trendingTopics[currentTopic]}
          </span>
        </div>
      </div>
    </section>
  );
}
