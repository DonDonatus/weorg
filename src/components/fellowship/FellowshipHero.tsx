"use client";
import React from "react";
import type { JSX } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Award } from "lucide-react";

type FellowshipHeroProps = {
  acceptingBadge?: string;      // e.g., "Now Accepting Applications for 2025"
  headlineTop?: string;         // e.g., "AI Innovation"
  headlineBottom?: string;      // e.g., "Fellowship Program"
  blurb?: string;
  applyHref?: string;
  infoHref?: string;
  deadlineLabel?: string;       // e.g., "Application Deadline:"
  deadlineDate?: string;        // e.g., "March 31, 2026"
  months?: string;              // e.g., "12"
  mentors?: string;             // e.g., "50+"
  placementRate?: string;       // e.g., "95%"
};

export default function FellowshipHero({
  acceptingBadge = "Now Accepting Applications",
  headlineTop = "AI Innovation",
  headlineBottom = "Fellowship Program",
  blurb = "Join Africa's premier AI fellowship program. Work with cutting-edge technology, solve real-world problems, and shape the future of AI innovation across the continent.",
  applyHref = "/fellowship/apply",
  infoHref = "/fellowship/info-session",
  deadlineLabel = "Application Deadline:",
  deadlineDate, // if omitted, the deadline chip is hidden
  months = "12",
  mentors = "50+",
  placementRate = "95%",
}: FellowshipHeroProps): JSX.Element {
  return (
    <section
      className="relative pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden"
      aria-labelledby="fellowship-hero-heading"
      role="region"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
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
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/20 rounded-full animate-spin-slow" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-purple-400/20 rotate-45 animate-pulse" />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border border-emerald-400/20 rounded-full animate-bounce" />
        {/* Orbs */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        <div
          className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-64 md:w-96 h-32 sm:h-64 md:h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <Award className="w-4 h-4 mr-2" aria-hidden="true" />
          {acceptingBadge}
        </div>

        {/* Headline */}
        <h1
          id="fellowship-hero-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif uppercase font-semibold text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-2 sm:px-4"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <span className="block mb-2">{headlineTop}</span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {headlineBottom}
          </span>
        </h1>

        {/* Blurb */}
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          {blurb}
        </p>

        {/* Stats */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-8 sm:mt-12 mb-6 sm:mb-8"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          role="group"
          aria-label="Program key statistics"
        >
          <div className="text-center bg-slate-900/40 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">
              {months}
            </div>
            <div className="text-slate-300 text-sm">Months Program</div>
          </div>
          <div className="text-center bg-slate-900/40 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">
              {mentors}
            </div>
            <div className="text-slate-300 text-sm">Industry Mentors</div>
          </div>
          <div className="text-center bg-slate-900/40 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
              {placementRate}
            </div>
            <div className="text-slate-300 text-sm">Job Placement Rate</div>
          </div>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-6 sm:mb-8"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <Link
            href={applyHref}
            className="btn-primary group text-sm sm:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4 min-h-[44px]"
            aria-label="Apply now to the fellowship program"
          >
            <span>Apply Now</span>
            <ArrowRight
              className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>
          <Link
            href={infoHref}
            className="btn-white group text-sm sm:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4 min-h-[44px]"
            aria-label="Join an upcoming information session"
          >
            <span>Join Info Session</span>
          </Link>
        </div>

        {/* Deadline (optional) */}
        {deadlineDate ? (
          <div
            className="inline-block p-4 bg-slate-900/40 rounded-xl border border-slate-700/50"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-2 text-slate-300">
              <Clock
                className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400"
                aria-hidden="true"
              />
              <span className="font-medium text-sm sm:text-base">
                {deadlineLabel}
              </span>
              <span className="text-cyan-400 font-bold text-sm sm:text-base">
                {deadlineDate}
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
