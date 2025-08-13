"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Calendar, BookOpen, Users } from "lucide-react";

// Precomputed values for SVG lines to ensure consistency
const lineStyles = Array.from({ length: 15 }).map((_, i) => ({
  x1: `${(i * 10 + 5) % 100}%`,
  y1: `${(i * 8 + 10) % 100}%`,
  x2: `${(i * 12 + 15) % 100}%`,
  y2: `${(i * 9 + 20) % 100}%`,
}));

export default function Vision() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section
      id="vision"
      className="relative py-16 md:py-20 bg-slate-900 overflow-hidden"
    >
      {/* Animated AI Network Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div
          className="absolute inset-0 opacity-10 animate-[pulse_8s_infinite] bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.3),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.3),transparent_40%)]"
          style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        ></div>
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {lineStyles.map((style, i) => (
            <line
              key={i}
              x1={style.x1}
              y1={style.y1}
              x2={style.x2}
              y2={style.y2}
              stroke="url(#lineGrad)"
              strokeWidth="0.5"
              className="animate-[pulse_4s_infinite]"
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-serif uppercase sm:text-4xl lg:text-5xl font-semibold mb-6 text-white tracking-tight">
            Let&apos;s Build the AI Future Together
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We&apos;re reimagining Africa&apos;s digital transformation — one intelligent solution at a time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Users className="w-7 h-7 text-white" />,
              title: "Partner With Us",
              text: "Collaborate on AI solutions and scale your impact across Africa.",
              color: "from-blue-600 to-purple-600",
              btn: "Get Started",
            },
            {
              icon: <BookOpen className="w-7 h-7 text-white" />,
              title: "Apply to Fellowship",
              text: "Join our research program and shape the future of AI in Africa.",
              color: "from-purple-600 to-pink-600",
              btn: "Apply Now",
            },
            {
              icon: <Calendar className="w-7 h-7 text-white" />,
              title: "Request a Demo",
              text: "See AI in action and discover its transformative potential.",
              color: "from-emerald-600 to-teal-600",
              btn: "Schedule Demo",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 border border-slate-700 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={400 + i * 200}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                {item.text}
              </p>
              <button className="btn-white group">
                <span>{item.btn}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
}