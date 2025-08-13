"use client";

import { useState, useEffect, useCallback } from "react";
import { CheckCircle, ArrowRight, Zap, Users, Clock, Cpu, Database, Network, Shield, Play, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeMetric, setActiveMetric] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const metrics = [
        {
            label: "Queue Processing",
            value: "-87% Wait Time",
            color: "text-cyan-400",
            icon: Clock,
            description: "AI-powered queue optimization",
            bgColor: "from-cyan-500/20 to-blue-500/20"
        },
        {
            label: "Document Processing",
            value: "+340% Faster",
            color: "text-blue-400",
            icon: Zap,
            description: "Machine learning document analysis",
            bgColor: "from-blue-500/20 to-purple-500/20"
        },
        {
            label: "Staff Efficiency",
            value: "+250% Productivity",
            color: "text-purple-400",
            icon: Users,
            description: "Automated workflow management",
            bgColor: "from-purple-500/20 to-pink-500/20"
        },
        {
            label: "System Security",
            value: "99.9% Uptime",
            color: "text-emerald-400",
            icon: Shield,
            description: "Advanced threat protection",
            bgColor: "from-emerald-500/20 to-cyan-500/20"
        }
    ];

    const stats = [
        { value: "15+", label: "Countries", color: "text-cyan-400", icon: "🌍" },
        { value: "500+", label: "Partners", color: "text-blue-400", icon: "🤝" },
        { value: "99.9%", label: "Uptime", color: "text-purple-400", icon: "⚡" },
        { value: "24/7", label: "Support", color: "text-emerald-400", icon: "🛡️" }
    ];

    // Optimized useEffect with useCallback
    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);

    useEffect(() => {
        setIsVisible(true);
        
        const interval = setInterval(() => {
            setActiveMetric((prev) => (prev + 1) % metrics.length);
        }, 4000);
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [metrics.length, handleScroll]);

    const handleMetricClick = (index: number) => {
        setActiveMetric(index);
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
            {/* Enhanced Tech Background with Parallax */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Parallax Grid */}
                <div 
                    className="absolute inset-0 opacity-10 sm:opacity-20 transition-transform duration-1000"
                    style={{
                        transform: `translateY(${scrollY * 0.1}px)`,
                        backgroundImage: `
                            linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }} 
                />

                {/* Enhanced Floating Tech Orbs */}
                {Array.from({ length: 15 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 6 + 3}px`,
                            height: `${Math.random() * 6 + 3}px`,
                            background: `radial-gradient(circle, rgba(0, 255, 255, ${0.15 + Math.random() * 0.25}) 0%, transparent 70%)`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${4 + Math.random() * 3}s`,
                            transform: `translateY(${scrollY * 0.05}px)`
                        }}
                    />
                ))}

                {/* Enhanced Data Streams */}
                <div className="absolute inset-0">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"
                            style={{
                                left: `${20 + (i * 12)}%`,
                                animationDelay: `${i * 0.3}s`,
                                animationDuration: `${2.5 + (i % 2)}s`,
                                transform: `translateY(${scrollY * 0.08}px)`
                            }}
                        />
                    ))}
                </div>

                {/* Enhanced Circuit Board Pattern */}
                <svg 
                    className="absolute inset-0 w-full h-full opacity-10 sm:opacity-20 transition-transform duration-1000" 
                    viewBox="0 0 1200 800" 
                    fill="none"
                    style={{ transform: `translateY(${scrollY * 0.03}px)` }}
                >
                    <defs>
                        <linearGradient id="techGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#00ffff" />
                            <stop offset="50%" stopColor="#0080ff" />
                            <stop offset="100%" stopColor="#8000ff" />
                        </linearGradient>
                        <filter id="techGlow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

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

                    {/* Enhanced Circuit Nodes */}
                    {Array.from({ length: 12 }).map((_, i) => (
                        <circle
                            key={i}
                            cx={120 + (i * 80)}
                            cy={140 + Math.sin(i * 0.4) * 120}
                            r="5"
                            fill="url(#techGrad)"
                            className="animate-pulse"
                            style={{ 
                                animationDelay: `${i * 0.15}s`,
                                animationDuration: `${2 + (i % 3)}s`
                            }}
                            filter="url(#techGlow)"
                        />
                    ))}
                </svg>

                {/* Enhanced Holographic Data Matrix */}
                <div 
                    className="absolute right-0 top-0 w-80 h-80 opacity-10 sm:opacity-20 transition-transform duration-1000"
                    style={{ transform: `translateY(${scrollY * 0.06}px)` }}
                >
                    <div className="grid grid-cols-8 gap-1 h-full">
                        {Array.from({ length: 64 }).map((_, i) => (
                            <div
                                key={i}
                                className={`h-full rounded-sm transition-all duration-700 animate-pulse ${
                                    i % 4 === 0 ? 'bg-cyan-400/50' :
                                    i % 4 === 1 ? 'bg-blue-400/50' :
                                    i % 4 === 2 ? 'bg-purple-400/50' :
                                    'bg-transparent'
                                }`}
                                style={{
                                    animationDelay: `${i * 0.08}s`,
                                    transform: `scaleY(${0.4 + Math.random() * 0.6})`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Enhanced Floating Tech Icons */}
                <div className="absolute inset-0">
                    {[Cpu, Database, Network, Shield].map((Icon, i) => (
                        <div
                            key={i}
                            className="absolute text-cyan-400/15 sm:text-cyan-400/25 animate-float transition-all duration-1000"
                            style={{
                                left: `${25 + (i * 18)}%`,
                                top: `${35 + (i * 12)}%`,
                                animationDelay: `${i * 0.6}s`,
                                animationDuration: `${5 + (i % 2)}s`,
                                transform: `translateY(${scrollY * 0.04}px)`
                            }}
                        >
                            <Icon size={40 + (i * 2)} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20 z-10">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                    {/* Left Content - Enhanced */}
                    <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} space-y-6 sm:space-y-8 lg:space-y-12 text-center lg:text-left relative z-20`}>
                        {/* Enhanced Text Background Overlay */}
                        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/30 to-transparent rounded-3xl -m-8 pointer-events-none backdrop-blur-sm"></div>
                        
                        {/* Enhanced Main Headline */}
                        <div className="mt-4 sm:mt-8 lg:mt-0 space-y-4 sm:space-y-6 lg:space-y-8">
                            <div className="space-y-2">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight drop-shadow-2xl">
                                    <span className="block drop-shadow-lg transition-all duration-700 hover:scale-105 hover:text-cyan-100">
                                        Next-Gen
                                    </span>
                                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg transition-all duration-700 hover:scale-105">
                                        Process Automation
                                    </span>
                                    <span className="block text-slate-200 drop-shadow-lg transition-all duration-700 hover:scale-105 hover:text-slate-100">
                                        for Africa&apos;s Future
                                    </span>
                                </h1>
                            </div>

                            <div className="space-y-3 sm:space-y-4 lg:space-y-5 max-w-2xl mx-auto lg:mx-0">
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-200 leading-relaxed drop-shadow-lg font-light">
                                    We deploy cutting-edge AI agents that revolutionize
                                    government and enterprise operations across the continent.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed drop-shadow-lg font-light">
                                    Transforming bureaucracy into efficiency, one process at a time.
                                </p>
                            </div>
                        </div>

                        {/* Enhanced CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 justify-center lg:justify-start">
                            <button 
                                className="btn-primary group w-full sm:w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                <span className="flex items-center justify-center lg:justify-start">
                                    <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                                    Launch Platform
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                            <Link href="/learnmore" className="w-full sm:w-auto">
                                <button className="btn-white w-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 group">
                                    <span className="flex items-center justify-center">
                                        Explore Technology
                                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </Link>
                        </div>

                        {/* Enhanced Tech Stats */}
                        <div className="pt-6 sm:pt-8 lg:pt-10 border-t border-slate-700/50">
                            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                                <p className="text-sm sm:text-base text-slate-300 font-medium text-center lg:text-left">
                                    Powered by advanced AI technology
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                                    {stats.map((stat, index) => (
                                        <div 
                                            key={index} 
                                            className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110"
                                        >
                                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                                                <span className={`${stat.color} group-hover:drop-shadow-lg transition-all duration-300`}>
                                                    {stat.value}
                                                </span>
                                            </div>
                                            <div className="text-xs sm:text-sm text-slate-400 font-medium mb-1">
                                                {stat.icon}
                                            </div>
                                            <div className="text-xs sm:text-sm text-slate-400 font-medium">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Enhanced Tech Dashboard */}
                    <div className={`relative ${isVisible ? "animate-slide-up" : "opacity-0"} order-first lg:order-last w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:mx-0`}>
                        <div className="relative bg-slate-900/90 backdrop-blur-2xl rounded-3xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 border border-cyan-500/30 shadow-2xl sm:shadow-3xl shadow-cyan-500/20 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/30">
                            {/* Enhanced Holographic Border Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 opacity-60"></div>
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-cyan-500/15 to-transparent"></div>
                            
                            {/* Animated Border Glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Enhanced Header */}
                                <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-5 mt-2 sm:mt-3 md:mt-4 lg:mt-6 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                                    <div className="relative flex-shrink-0">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/30 transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                                            <Cpu className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                                    </div>
                                    <div className="flex-1 min-w-0 text-left">
                                        <h3 className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-2xl mb-1 leading-tight">
                                            AI Operations Center
                                        </h3>
                                        <p className="text-cyan-300 text-xs sm:text-sm md:text-base leading-tight">
                                            Real-time system monitoring
                                        </p>
                                    </div>
                                </div>

                                {/* Enhanced Interactive Metrics */}
                                <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                                    {metrics.map((metric, index) => {
                                        const IconComponent = metric.icon;
                                        const isActive = index === activeMetric;

                                        return (
                                            <div
                                                key={index}
                                                className={`p-2 sm:p-3 md:p-4 lg:p-5 rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl transition-all duration-500 transform cursor-pointer ${
                                                    isActive
                                                        ? `bg-gradient-to-r ${metric.bgColor} border-2 border-cyan-400/60 shadow-2xl shadow-cyan-500/30 scale-105`
                                                        : "bg-slate-800/60 hover:bg-slate-800/80 border border-slate-700/60 hover:border-slate-600/60 hover:scale-102"
                                                }`}
                                                onClick={() => handleMetricClick(index)}
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        handleMetricClick(index);
                                                    }
                                                }}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 min-w-0 flex-1">
                                                        <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl md:rounded-2xl flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                                                            isActive
                                                                ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/30"
                                                                : "bg-slate-700 hover:bg-slate-600"
                                                        }`}>
                                                            <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 ${
                                                                isActive ? "text-white" : "text-slate-400"
                                                            }`} />
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                            <span className={`font-semibold text-sm sm:text-sm md:text-base block truncate ${
                                                                isActive ? "text-white" : "text-slate-300"
                                                            }`}>
                                                                {metric.label}
                                                            </span>
                                                            <p className="text-xs sm:text-sm text-slate-400 mt-1 hidden sm:block truncate">
                                                                {metric.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <span className={`font-bold text-base sm:text-lg md:text-xl lg:text-2xl ${metric.color} ${
                                                        isActive ? "animate-pulse" : ""
                                                    } flex-shrink-0 ml-2 sm:ml-3`}>
                                                        {metric.value}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Enhanced System Status */}
                                <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 pt-3 sm:pt-4 md:pt-5 lg:pt-7 border-t border-slate-700/50">
                                    <div className="flex flex-col space-y-2 sm:space-y-3 lg:space-y-0">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                                                <div className="flex space-x-1 sm:space-x-1.5">
                                                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                                                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" style={{ animationDelay: '0.2s' }}></div>
                                                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" style={{ animationDelay: '0.4s' }}></div>
                                                </div>
                                                <span className="text-sm text-green-400 font-medium truncate">
                                                    All Systems Operational
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-1.5 sm:space-x-2 text-cyan-400">
                                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                                                <span className="text-sm font-medium">
                                                    Live Feed
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced Data Flow Indicator */}
                                <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 flex items-center space-x-2 sm:space-x-3">
                                    <div className="flex-1 h-1.5 sm:h-2 bg-slate-700 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50" 
                                            style={{ width: '75%' }}
                                        ></div>
                                    </div>
                                    <span className="text-sm text-slate-400 flex-shrink-0">75% Load</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced CSS Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0px) rotate(0deg); 
                    }
                    50% { 
                        transform: translateY(-25px) rotate(180deg); 
                    }
                }
                @keyframes dash {
                    to { 
                        stroke-dashoffset: -30; 
                    }
                }
                @keyframes glow {
                    0%, 100% { 
                        filter: brightness(1) drop-shadow(0 0 5px rgba(0, 255, 255, 0.5));
                    }
                    50% { 
                        filter: brightness(1.2) drop-shadow(0 0 15px rgba(0, 255, 255, 0.8));
                    }
                }
                .animate-float { 
                    animation: float 8s ease-in-out infinite; 
                }
                .animate-dash { 
                    animation: dash 3s linear infinite; 
                }
                .animate-glow { 
                    animation: glow 4s ease-in-out infinite; 
                }
                .hover\\:scale-102:hover { 
                    transform: scale(1.02); 
                }
            `}</style>
        </section>
    );
}
