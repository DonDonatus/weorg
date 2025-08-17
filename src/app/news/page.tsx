'use client';
import type { Metadata } from "next";
import type { JSX } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AOSProvider from "@/components/AOSProvider";
import NewsHero from "@/components/news/NewsHero";
import FeaturedNews from "@/components/news/FeaturedNews";
import NewsGrid from "@/components/news/NewsGrid";


export default function NewsPage(): JSX.Element {
  return (
    <AOSProvider>
      <main className="min-h-screen" role="main">
        <Header />

        {/* Hero Section */}
        <NewsHero />

        {/* Featured Stories */}
        <FeaturedNews />

        {/* News Grid */}
        <NewsGrid />

        <Footer />
      </main>

      {/* Custom CSS for line clamping and animations */}
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </AOSProvider>
  );
}
