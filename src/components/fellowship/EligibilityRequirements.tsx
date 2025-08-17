import React from "react";
import type { JSX } from "react";
import {
  CheckCircle,
  GraduationCap,
  MapPin,
  Code,
  Heart,
  LucideIcon,
} from "lucide-react";

interface Requirement {
  category: string;
  icon: LucideIcon;
  color: string;
  items: string[];
}

interface SelectionStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

const requirements: Requirement[] = [
  {
    category: "Education",
    icon: GraduationCap,
    color: "text-cyan-400",
    items: [
      "Bachelor's degree in Computer Science, Engineering, Mathematics, or related field",
      "Strong academic record (minimum 3.0 GPA or equivalent)",
      "Recent graduates (within 2 years) or final year students",
    ],
  },
  {
    category: "Location",
    icon: MapPin,
    color: "text-emerald-400",
    items: [
      "Legal resident of an African country",
      "Willing to relocate to program hub cities (Accra, Lagos, Cape Town, Nairobi)",
      "Available for full-time commitment (12 months)",
    ],
  },
  {
    category: "Technical Skills",
    icon: Code,
    color: "text-purple-400",
    items: [
      "Proficiency in Python or another programming language",
      "Understanding of basic mathematics and statistics",
      "Experience with data structures and algorithms",
    ],
  },
  {
    category: "Personal Qualities",
    icon: Heart,
    color: "text-pink-400",
    items: [
      "Passion for AI and its potential to solve African challenges",
      "Strong problem-solving and analytical thinking skills",
      "Excellent communication skills in English",
    ],
  },
];

const selectionProcess: SelectionStep[] = [
  {
    step: "01",
    title: "Online Application",
    description:
      "Submit your application with academic transcripts, CV, and personal statement",
    duration: "2 weeks",
  },
  {
    step: "02",
    title: "Technical Assessment",
    description: "Complete coding challenges and technical problem-solving tasks",
    duration: "1 week",
  },
  {
    step: "03",
    title: "Interview Round",
    description: "Virtual interviews with technical and behavioral components",
    duration: "2 weeks",
  },
  {
    step: "04",
    title: "Final Selection",
    description:
      "Reference checks and final evaluation by selection committee",
    duration: "1 week",
  },
];

export default function EligibilityRequirements(): JSX.Element {
  return (
    <section
      className="relative py-16 sm:py-24 bg-grid-slate-900/[0.02] dark:bg-grid-slate-400/[0.03] overflow-hidden"
      aria-labelledby="eligibility-heading"
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -right-20 bottom-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute left-1/2 top-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Animated heading with gradient text */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            id="eligibility-heading"
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-text-shine tracking-tight"
          >
            Eligibility Requirements
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We're searching for <span className="font-semibold text-cyan-500 dark:text-cyan-400">visionary technologists</span> ready to shape the future of AI in Africa
          </p>
        </div>

        {/* Holographic requirements grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {requirements.map((req, index) => (
            <article
              key={req.category}
              className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50 hover:border-transparent transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_-5px_rgba(100,100,255,0.1)]"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              aria-labelledby={`req-${index}-title`}
            >
              {/* Holographic effect */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 dark:from-slate-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <header className="flex items-center gap-4 mb-4 relative z-10">
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-lg group-hover:shadow-cyan-400/20 transition-shadow">
                  <req.icon
                    className={`w-6 h-6 ${req.color} transition-transform group-hover:scale-110`}
                    aria-hidden="true"
                  />
                  <span className="sr-only">{req.category} icon</span>
                  <div className="absolute inset-0 rounded-xl bg-white/10 blur-xl group-hover:blur-2xl transition-all duration-500" />
                </div>
                <h3
                  id={`req-${index}-title`}
                  className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 dark:from-slate-200 to-slate-600 dark:to-slate-400"
                >
                  {req.category}
                </h3>
              </header>

              <ul className="space-y-3 relative z-10">
                {req.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ transitionDelay: `${itemIndex * 50}ms` }}
                  >
                    <span className="mt-0.5 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-400 group-hover:scale-125 transition-transform" />
                    </span>
                    <span className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Selection Process - 3D timeline effect */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-text-shine tracking-tight">
            Selection Process
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our <span className="font-semibold text-purple-500 dark:text-purple-400">multi-stage evaluation</span> identifies exceptional talent
          </p>
        </div>

        <div className="relative mb-16 sm:mb-20">
          {/* Animated connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 -translate-y-1/2 opacity-80">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 w-0 group-hover:w-full transition-all duration-1000" />
          </div>
          
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {selectionProcess.map((step, index) => (
              <li
                key={step.step}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
                aria-label={`${step.title} – ${step.duration}`}
              >
                <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50 hover:border-transparent transition-all duration-500 group hover:shadow-[0_10px_30px_-10px_rgba(100,100,255,0.3)]">
                  {/* Floating orb effect */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="text-center relative z-10">
                    <div className="relative w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 flex items-center justify-center shadow-lg group-hover:shadow-cyan-400/30 transition-shadow">
                      <span className="text-white font-bold text-lg">
                        {step.step}
                      </span>
                      <div className="absolute inset-0 rounded-xl bg-white/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                      <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300">
                        {step.duration}
                      </span>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Glowing important dates card */}
        <aside
          className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-3xl p-8 sm:p-10 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden group"
          data-aos="fade-up"
          aria-labelledby="important-dates-title"
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-br from-cyan-400/30 via-blue-500/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg" />
          </div>
          
          {/* Moving gradient overlay */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute -inset-10 bg-[conic-gradient(from_90deg_at_50%_50%,#00ccff_0%,#3385ff_50%,#00ccff_100%)] opacity-10 animate-spin-slow" />
          </div>

          <div className="relative z-10">
            <h3
              id="important-dates-title"
              className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Important Dates
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              {[
                { date: "March 1, 2025", label: "Applications Open", color: "text-cyan-500" },
                { date: "March 31, 2025", label: "Application Deadline", color: "text-emerald-500" },
                { date: "June 1, 2025", label: "Program Starts", color: "text-purple-500" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group-hover:[&:nth-child(1)]:animate-float group-hover:[&:nth-child(2)]:animate-float group-hover:[&:nth-child(3)]:animate-float"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`${item.color} font-semibold text-xl sm:text-2xl mb-2 transition-transform group-hover:scale-105`}>
                    {item.date}
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 text-base sm:text-lg">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}