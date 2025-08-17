"use client";
import React, { useState, useEffect, useRef } from "react";
import type { JSX } from "react";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Briefcase,
} from "lucide-react";

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
    quote:
      "The fellowship transformed my understanding of AI from theoretical concepts to real-world applications. Working on healthcare AI projects in rural Nigeria showed me how technology can truly make a difference.",
    track: "AI Engineering Track",
    year: "2023 Cohort",
    rating: 5,
  },
  {
    name: "Kwame Asante",
    role: "Research Scientist at DeepMind",
    location: "Accra, Ghana",
    image: "/api/placeholder/80/80",
    quote:
      "The mentorship program connected me with world-class researchers. My capstone project on agricultural AI led to a publication in Nature and opened doors I never imagined possible.",
    track: "AI Research Track",
    year: "2022 Cohort",
    rating: 5,
  },
  {
    name: "Fatima Al-Zahra",
    role: "Founder, EduTech Startup",
    location: "Cairo, Egypt",
    image: "/api/placeholder/80/80",
    quote:
      "Through the Social Good track, I built an AI-powered education platform that's now serving 50,000+ students across North Africa. The fellowship gave me both the skills and confidence to become an entrepreneur.",
    track: "AI for Social Good Track",
    year: "2023 Cohort",
    rating: 5,
  },
  {
    name: "Thandiwe Mthembu",
    role: "ML Engineer at Microsoft",
    location: "Cape Town, South Africa",
    image: "/api/placeholder/80/80",
    quote:
      "The hands-on projects and collaborative environment prepared me for the fast-paced tech industry. I landed my dream job at Microsoft three months before the program ended!",
    track: "AI Engineering Track",
    year: "2024 Cohort",
    rating: 5,
  },
  {
    name: "Mohamed Hassan",
    role: "AI Consultant",
    location: "Nairobi, Kenya",
    image: "/api/placeholder/80/80",
    quote:
      "The fellowship network is incredible. Even after graduation, we continue collaborating on projects and supporting each other's careers. It's truly a lifetime community.",
    track: "AI for Social Good Track",
    year: "2022 Cohort",
    rating: 5,
  },
];

export default function FellowTestimonials(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const autoplayMs = 6000;

  // Respect prefers-reduced-motion
  const prefersReducedMotion = useRef<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const m = window.matchMedia("(prefers-reduced-motion: reduce)");
      prefersReducedMotion.current = m.matches;
    }
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused || prefersReducedMotion.current) return;
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoplayMs);
    return () => window.clearInterval(id);
  }, [paused]);

  const nextTestimonial = (): void => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = (): void => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Keyboard arrow support on the carousel container
  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowRight") {
      nextTestimonial();
    } else if (e.key === "ArrowLeft") {
      prevTestimonial();
    }
  };

  const t = testimonials[currentIndex];

  return (
    <section
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      aria-labelledby="testimonials-heading"
      role="region"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="text-center mb-12 sm:mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-bold uppercase font-serif text-slate-900 dark:text-white mb-4"
          >
            Success Stories
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Hear from our alumni who are now leading AI innovation across Africa
            and beyond.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto mb-8 sm:mb-12 outline-none"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
          role="group"
          aria-roledescription="carousel"
          aria-label="Fellow testimonials"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="bg-white dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-200 dark:border-slate-700/50 relative overflow-hidden shadow-lg">
            {/* Decorative Quote */}
            <div
              className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-10"
              aria-hidden="true"
            >
              <Quote className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 text-cyan-400" />
            </div>

            <div className="relative z-10" aria-live="polite">
              {/* Rating */}
              <div
                className="flex items-center space-x-1 mb-4 sm:mb-6"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={`filled-${i}`}
                    className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current"
                    aria-hidden="true"
                  />
                ))}
                {Array.from({ length: Math.max(0, 5 - t.rating) }).map(
                  (_, i) => (
                    <Star
                      key={`empty-${i}`}
                      className="w-4 sm:w-5 h-4 sm:h-5 text-slate-300 dark:text-slate-600"
                      aria-hidden="true"
                    />
                  )
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl md:text-2xl text-slate-900 dark:text-white leading-relaxed mb-6 sm:mb-8 font-light">
                “{t.quote}”
              </blockquote>

              {/* Fellow Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                  <span className="text-white font-bold text-base sm:text-lg">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-slate-900 dark:text-white font-bold text-base sm:text-lg">
                    {t.name}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-slate-600 dark:text-slate-300 text-sm">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-3 sm:w-4 h-3 sm:h-4" aria-hidden="true" />
                      <span>{t.role}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 sm:w-4 h-3 sm:h-4" aria-hidden="true" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="inline-flex items-center px-2 py-1 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-medium">
                      {t.track}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">
                      {t.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 sm:w-12 h-10 sm:h-12 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-slate-700 dark:text-white" />
            </button>

            {/* Dots Indicator */}
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Choose testimonial"
            >
              {testimonials.map((_, index) => {
                const active = index === currentIndex;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    role="tab"
                    aria-selected={active}
                    aria-controls={`slide-${index}`}
                    className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                      active
                        ? "bg-cyan-400 scale-125"
                        : "bg-slate-400 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-500"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                );
              })}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 sm:w-12 h-10 sm:h-12 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-slate-700 dark:text-white" />
            </button>
          </div>
        </div>

        {/* Alumni Stats */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <div className="text-center bg-white dark:bg-slate-900/40 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">
              200+
            </div>
            <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Alumni Worldwide
            </div>
          </div>
          <div className="text-center bg-white dark:bg-slate-900/40 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">
              85%
            </div>
            <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Working at Top Tech Companies
            </div>
          </div>
          <div className="text-center bg-white dark:bg-slate-900/40 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
              25+
            </div>
            <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Successful Startups Founded
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
