"use client";

import { useState, useEffect } from "react";
import { CheckCircle, ArrowRight, Zap, Users, Clock } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    {
      label: "Queue Processing",
      value: "-87% Wait Time",
      color: "text-emerald-500",
      icon: Clock,
    },
    {
      label: "Document Processing",
      value: "+340% Faster",
      color: "text-blue-500",
      icon: Zap,
    },
    {
      label: "Staff Efficiency",
      value: "+250% Productivity",
      color: "text-purple-500",
      icon: Users,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`${
              isVisible ? "animate-fade-in" : "opacity-0"
            } space-y-8`}
          >
            {/* Brand Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200/50 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              <span className="text-blue-700 font-semibold text-sm">
                Built for people. Powered by AI.
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                <span className="block">Simplifying</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Complex Processes
                </span>
                <span className="block text-slate-700">Across Africa</span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-xl">
                We create AI-powered automation agents that streamline
                operations for governments and enterprises.
                <span className="font-semibold text-slate-800">
                  {" "}
                  Our tools don't replace people—they empower them.
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-2 flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="/learnmore">
                <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-semibold backdrop-blur-sm">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-3">
                Trusted by organizations across Africa
              </p>
              <div className="flex items-center space-x-6 text-slate-400">
                <div className="w-20 h-8 bg-slate-200 rounded opacity-60"></div>
                <div className="w-20 h-8 bg-slate-200 rounded opacity-60"></div>
                <div className="w-20 h-8 bg-slate-200 rounded opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Interactive Dashboard */}
          <div
            className={`relative ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="relative z-10 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    AI Automation Dashboard
                  </h3>
                  <p className="text-sm text-slate-500">
                    Real-time performance metrics
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                {metrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  const isActive = index === activeMetric;

                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg transform scale-105"
                          : "bg-slate-50 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isActive
                              ? "bg-gradient-to-r from-blue-500 to-purple-500"
                              : "bg-slate-300"
                          }`}
                        >
                          <IconComponent
                            className={`w-4 h-4 ${
                              isActive ? "text-white" : "text-slate-600"
                            }`}
                          />
                        </div>
                        <span
                          className={`font-medium ${
                            isActive ? "text-slate-900" : "text-slate-700"
                          }`}
                        >
                          {metric.label}
                        </span>
                      </div>
                      <span
                        className={`font-bold text-lg ${metric.color} ${
                          isActive ? "animate-pulse" : ""
                        }`}
                      >
                        {metric.value}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Status Indicator */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-600">
                      System Status: Active
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    Last updated: now
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-40 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
