"use client";

import { useState, useEffect } from "react";
import { CheckCircle, ArrowRight, Zap, Users, Clock, Cpu, Database, Network, Shield } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const metrics = [
    {
      label: "Queue Processing",
      value: "-87% Wait Time",
      color: "text-cyan-400",
      icon: Clock,
      description: "AI-powered queue optimization"
    },
    {
      label: "Document Processing",
      value: "+340% Faster",
      color: "text-blue-400",
      icon: Zap,
      description: "Machine learning document analysis"
    },
    {
      label: "Staff Efficiency",
      value: "+250% Productivity",
      color: "text-purple-400",
      icon: Users,
      description: "Automated workflow management"
    },
    {
      label: "System Security",
      value: "99.9% Uptime",
      color: "text-emerald-400",
      icon: Shield,
      description: "Advanced threat protection"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Advanced Tech Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Tech Orbs */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `radial-gradient(circle, rgba(0, 255, 255, ${0.3 + Math.random() * 0.4}) 0%, transparent 70%)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Data Streams */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"
              style={{
                left: `${15 + (i * 10)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            />
          ))}
        </div>

        {/* Circuit Board Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800" fill="none">
          <defs>
            <linearGradient id="techGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00ffff"/>
              <stop offset="50%" stopColor="#0080ff"/>
              <stop offset="100%" stopColor="#8000ff"/>
            </linearGradient>
            <filter id="techGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Main Circuit Paths */}
          <g className="animate-dash" filter="url(#techGlow)">
            <path
              d="M50 100 L200 100 L250 150 L400 150 L450 200 L600 200 L650 250 L800 250 L850 300 L1000 300 L1050 350 L1150 350"
              stroke="url(#techGrad)"
              strokeWidth="3"
              strokeDasharray="20 10"
              opacity="0.8"
              strokeLinecap="round"
            />
            
            <path
              d="M100 200 L300 200 L350 250 L500 250 L550 300 L700 300 L750 350 L900 350 L950 400 L1100 400"
              stroke="url(#techGrad)"
              strokeWidth="2"
              strokeDasharray="15 8"
              opacity="0.6"
              strokeLinecap="round"
            />

            {/* Vertical Connections */}
            <path
              d="M300 50 L300 150 L300 250 L300 350 L300 450 L300 550 L300 650 L300 750"
              stroke="url(#techGrad)"
              strokeWidth="2"
              strokeDasharray="6 3"
              opacity="0.5"
              strokeLinecap="round"
            />

            <path
              d="M600 100 L600 200 L600 300 L600 400 L600 500 L600 600 L600 700"
              stroke="url(#techGrad)"
              strokeWidth="2"
              strokeDasharray="6 3"
              opacity="0.5"
              strokeLinecap="round"
            />
          </g>
          
          {/* Circuit Nodes */}
          {Array.from({ length: 15 }).map((_, i) => (
            <circle
              key={i}
              cx={100 + (i * 70)}
              cy={120 + Math.sin(i * 0.3) * 100}
              r="4"
              fill="url(#techGrad)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
              filter="url(#techGlow)"
            />
          ))}
        </svg>

        {/* Holographic Data Matrix */}
        <div className="absolute right-0 top-0 w-96 h-96 opacity-20">
          <div className="grid grid-cols-8 gap-1 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`h-full rounded-sm transition-all duration-500 animate-pulse ${
                  i % 4 === 0 ? 'bg-cyan-400/40' : 
                  i % 4 === 1 ? 'bg-blue-400/40' : 
                  i % 4 === 2 ? 'bg-purple-400/40' : 
                  'bg-transparent'
                }`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  transform: `scaleY(${0.3 + Math.random() * 0.7})`
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0">
          {[Cpu, Database, Network, Shield].map((Icon, i) => (
            <div
              key={i}
              className="absolute text-cyan-400/20 animate-float"
              style={{
                left: `${20 + (i * 20)}%`,
                top: `${30 + (i * 15)}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + (i % 2)}s`
              }}
            >
              <Icon size={48} />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} space-y-6 sm:space-y-8 lg:space-y-10`}>
            {/* Tech Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Automation</span>
            </div>

            {/* Main Headline */}
            <div className="mt-8 sm:mt-0 space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="block">Next-Gen</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Process Automation
                </span>
                <span className="block text-slate-200">for Africa&apos;s Future</span>
              </h1>

              <div className="space-y-3 sm:space-y-4 max-w-2xl">
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-200 leading-relaxed">
                  We deploy cutting-edge AI agents that revolutionize
                  government and enterprise operations across the continent.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <span className="relative z-10 flex items-center">
                  Launch Platform
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <Link href="/learnmore">
                <button className="group relative overflow-hidden bg-transparent border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <span className="relative z-10">Explore Technology</span>
                  <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>

            {/* Tech Stats */}
            <div className="pt-6 sm:pt-8 border-t border-slate-700/50">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-xs sm:text-sm text-slate-300 font-medium text-center">
                  Powered by advanced AI technology
                </p>
                <div className="grid grid-cols-4 gap-4 sm:gap-6">
                  <div className="text-center group">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 group-hover:scale-110 transition-transform mb-1">
                      15+
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 font-medium">
                      Countries
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 group-hover:scale-110 transition-transform mb-1">
                      500+
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 font-medium">
                      Partners
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400 group-hover:scale-110 transition-transform mb-1">
                      99.9%
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 font-medium">
                      Uptime
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-400 group-hover:scale-110 transition-transform mb-1">
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 font-medium">
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Tech Dashboard */}
          <div className={`relative ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden">
              {/* Holographic Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-50"></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-cyan-500/10 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-xl mb-1">
                      AI Operations Center
                    </h3>
                    <p className="text-cyan-300 text-sm">
                      Real-time system monitoring
                    </p>
                  </div>
                </div>

                {/* Enhanced Metrics */}
                <div className="space-y-4">
                  {metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    const isActive = index === activeMetric;

                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-2xl transition-all duration-700 transform ${
                          isActive
                            ? "bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/50 shadow-lg shadow-cyan-500/25 scale-105"
                            : "bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-slate-600/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                              isActive
                                ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25"
                                : "bg-slate-700"
                            }`}>
                              <IconComponent className={`w-6 h-6 ${isActive ? "text-white" : "text-slate-400"}`} />
                            </div>
                            <div>
                              <span className={`font-semibold text-sm ${isActive ? "text-white" : "text-slate-300"}`}>
                                {metric.label}
                              </span>
                              <p className="text-xs text-slate-400 mt-1">
                                {metric.description}
                              </p>
                            </div>
                          </div>
                          <span className={`font-bold text-xl ${metric.color} ${isActive ? "animate-pulse" : ""}`}>
                            {metric.value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* System Status */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                      <span className="text-sm text-green-400 font-medium">
                        All Systems Operational
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-cyan-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">
                        Live Feed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Data Flow Indicator */}
                <div className="mt-4 flex items-center space-x-2">
                  <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" style={{width: '75%'}}></div>
                  </div>
                  <span className="text-xs text-slate-400">75% Load</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-dash { animation: dash 2s linear infinite; }
      `}</style>
    </section>
  );
}
