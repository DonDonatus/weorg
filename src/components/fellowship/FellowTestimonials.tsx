"use client";
import React, { useState, useEffect } from "react";
import type { JSX } from "react";
import { Quote, ChevronLeft, ChevronRight, Star, MapPin, Briefcase } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    location: string;
    image: string;
    quote: string;
    track: string;
    year: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: "Amara Okafor",
        role: "AI Engineer at Google",
        location: "Lagos, Nigeria",
        image: "/api/placeholder/80/80",
        quote: "The fellowship transformed my understanding of AI from theoretical concepts to real-world applications. Working on healthcare AI projects in rural Nigeria showed me how technology can truly make a difference.",
        track: "AI Engineering Track",
        year: "2023 Cohort",
        rating: 5
    },
    {
        name: "Kwame Asante",
        role: "Research Scientist at DeepMind",
        location: "Accra, Ghana",
        image: "/api/placeholder/80/80",
        quote: "The mentorship program connected me with world-class researchers. My capstone project on agricultural AI led to a publication in Nature and opened doors I never imagined possible.",
        track: "AI Research Track",
        year: "2022 Cohort",
        rating: 5
    },
    {
        name: "Fatima Al-Zahra",
        role: "Founder, EduTech Startup",
        location: "Cairo, Egypt",
        image: "/api/placeholder/80/80",
        quote: "Through the Social Good track, I built an AI-powered education platform that's now serving 50,000+ students across North Africa. The fellowship gave me both the skills and confidence to become an entrepreneur.",
        track: "AI for Social Good Track",
        year: "2023 Cohort",
        rating: 5
    },
    {
        name: "Thandiwe Mthembu",
        role: "ML Engineer at Microsoft",
        location: "Cape Town, South Africa",
        image: "/api/placeholder/80/80",
        quote: "The hands-on projects and collaborative environment prepared me for the fast-paced tech industry. I landed my dream job at Microsoft three months before the program ended!",
        track: "AI Engineering Track",
        year: "2024 Cohort",
        rating: 5
    },
    {
        name: "Mohamed Hassan",
        role: "AI Consultant",
        location: "Nairobi, Kenya",
        image: "/api/placeholder/80/80",
        quote: "The fellowship network is incredible. Even after graduation, we continue collaborating on projects and supporting each other's careers. It's truly a lifetime community.",
        track: "AI for Social Good Track",
        year: "2022 Cohort",
        rating: 5
    }
];

export default function FellowTestimonials(): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = (): void => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = (): void => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950/30" aria-labelledby="testimonials-heading">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div 
                    className="text-center mb-12 sm:mb-16"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    <h2 
                        id="testimonials-heading"
                        className="text-4xl md:text-5xl font-semibold uppercase font-serif text-slate-900 dark:text-white mb-4"
                    >
                        Success Stories
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Hear from our alumni who are now leading AI innovation across Africa and beyond.
                    </p>
                </div>

                {/* Main Testimonial Showcase */}
                <div 
                    className="relative max-w-4xl mx-auto mb-8 sm:mb-12"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                >
                    <div className="bg-white dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-200 dark:border-slate-700/50 relative overflow-hidden shadow-lg">
                        {/* Decorative Quote */}
                        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-10" aria-hidden="true">
                            <Quote className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 text-cyan-400" />
                        </div>

                        <div className="relative z-10">
                            {/* Rating */}
                            <div className="flex items-center space-x-1 mb-4 sm:mb-6">
                                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-lg sm:text-xl md:text-2xl text-slate-900 dark:text-white leading-relaxed mb-6 sm:mb-8 font-light">
                                "{testimonials[currentIndex].quote}"
                            </blockquote>

                            {/* Fellow Info */}
                            <div className="flex items-center space-x-4">
                                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                                    <span className="text-white font-bold text-base sm:text-lg">
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-slate-900 dark:text-white font-bold text-base sm:text-lg">
                                        {testimonials[currentIndex].name}
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-slate-600 dark:text-slate-300 text-sm">
                                        <div className="flex items-center space-x-1">
                                            <Briefcase className="w-3 sm:w-4 h-3 sm:h-4" aria-hidden="true" />
                                            <span>{testimonials[currentIndex].role}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <MapPin className="w-3 sm:w-4 h-3 sm:h-4" aria-hidden="true" />
                                            <span>{testimonials[currentIndex].location}</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2">
                                        <span className="inline-flex items-center px-2 py-1 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-medium">
                                            {testimonials[currentIndex].track}
                                        </span>
                                        <span className="text-slate-500 dark:text-slate-400 text-xs">
                                            {testimonials[currentIndex].year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center space-x-4 mt-6">
                        <button
                            onClick={prevTestimonial}
                            className="w-10 sm:w-12 h-10 sm:h-12 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-slate-600 dark:text-white" />
                        </button>
                        
                        {/* Dots Indicator */}
                        <div className="flex items-center space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'bg-cyan-400 scale-125' 
                                            : 'bg-slate-400 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-500'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="w-10 sm:w-12 h-10 sm:h-12 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-slate-600 dark:text-white" />
                        </button>
                    </div>
                </div>

                {/* Alumni Network Stats */}
                <div 
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                >
                    <div className="text-center bg-white dark:bg-slate-900/40 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                        <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">200+</div>
                        <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">Alumni Worldwide</div>
                    </div>
                    <div className="text-center bg-white dark:bg-slate-900/40 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                        <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">85%</div>
                        <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">Working at Top Tech Companies</div>
                    </div>
                    <div className="text-center bg-white dark:bg-slate-900/40 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                        <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">25+</div>
                        <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">Successful Startups Founded</div>
                    </div>
                </div>
            </div>
        </section>
    );
}