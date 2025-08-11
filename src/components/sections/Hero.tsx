"use client";

import { useState, useEffect } from "react";
import { CheckCircle, ArrowRight, Zap, Users, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    {
      label: "Queue Processing",
      value: "-87% Wait Time",
      color: "text-emerald-600",
      icon: Clock,
    },
    {
      label: "Document Processing",
      value: "+340% Faster",
      color: "text-blue-600",
      icon: Zap,
    },
    {
      label: "Staff Efficiency",
      value: "+250% Productivity",
      color: "text-slate-700",
      icon: Users,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} space-y-6 sm:space-y-8 lg:space-y-10`}>
            {/* Main Headline */}
            <div className="mt-8 sm:mt-0 space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                Simplifying
                <span className="block bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                  Complex Processes
                </span>
                <span className="block text-slate-700">Across Africa</span>
              </h1>

              <div className="space-y-3 sm:space-y-4 max-w-2xl">
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed">
                  We create AI-powered automation agents that streamline
                  operations for governments and enterprises.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="btn-primary group">
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="/learnmore">
                <button className="btn-white">
                  <span>Learn More</span>
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 sm:pt-8 border-t border-slate-200">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-xs sm:text-sm text-slate-500 font-medium text-center">
                  Trusted by organizations across Africa
                </p>
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center group">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform mb-1">
                      15+
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium">
                      Countries
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform mb-1">
                      500+
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium">
                      Partners
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 group-hover:scale-110 transition-transform mb-1">
                      99%
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium">
                      Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Dashboard */}
          <div className={`relative ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/60 shadow-xl sm:shadow-2xl">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg lg:text-xl mb-1">
                    AI Automation Dashboard
                  </h3>
                  <p className="text-slate-600 text-xs lg:text-sm">
                    Real-time performance metrics
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-4 sm:space-y-6">
                {metrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  const isActive = index === activeMetric;

                  return (
                    <div
                      key={index}
                      className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 ${isActive
                          ? "bg-gradient-to-r from-blue-50 to-slate-50 border-2 border-blue-200 shadow-lg transform scale-105"
                          : "bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300"
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-500 ${isActive
                                ? "bg-gradient-to-r from-blue-600 to-slate-700 shadow-lg"
                                : "bg-slate-200"
                              }`}
                          >
                            <IconComponent
                              className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive ? "text-white" : "text-slate-600"
                                }`}
                            />
                          </div>
                          <div>
                            <span
                              className={`font-semibold text-sm sm:text-base ${isActive ? "text-slate-900" : "text-slate-700"
                                }`}
                            >
                              {metric.label}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`font-bold text-lg sm:text-xl lg:text-2xl ${metric.color} ${isActive ? "animate-pulse" : ""
                            }`}
                        >
                          {metric.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status Bar */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-xs lg:text-sm text-slate-700 font-medium">
                      System Status: Active
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">
                      Live monitoring
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
