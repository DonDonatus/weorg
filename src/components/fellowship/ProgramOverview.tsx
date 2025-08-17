import React, { useState } from "react";
import {
  Code,
  Brain,
  Target,
  Lightbulb,
  Globe,
  Rocket,
  ChevronRight,
  Check,
  LucideIcon,
} from "lucide-react";

// Types
interface ProgramTrack {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string; // tailwind gradient suffix e.g. "from-cyan-500 to-blue-600"
  skills: string[];
}

interface ProgramBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProgramStage {
  phase: string;
  title: string;
  desc: string;
}

// Data (typed)
const programTracks: ProgramTrack[] = [
  {
    title: "AI Engineering Track",
    description:
      "Build production-ready AI systems and learn advanced machine learning techniques",
    icon: Code,
    color: "from-cyan-500 to-blue-600",
    skills: [
      "Deep Learning & Neural Networks",
      "MLOps & Model Deployment",
      "Computer Vision & NLP",
      "Cloud AI Infrastructure",
    ],
  },
  {
    title: "AI Research Track",
    description:
      "Conduct cutting-edge research in AI and contribute to scientific publications",
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    skills: [
      "Research Methodology",
      "Statistical Analysis",
      "Academic Writing & Publishing",
      "Experimental Design",
    ],
  },
  {
    title: "AI for Social Good Track",
    description: "Apply AI solutions to address social challenges across Africa",
    icon: Globe,
    color: "from-emerald-500 to-cyan-600",
    skills: [
      "Healthcare AI Applications",
      "Educational Technology",
      "Agricultural Innovation",
      "Financial Inclusion",
    ],
  },
];

const programBenefits: ProgramBenefit[] = [
  {
    icon: Target,
    title: "Real-World Projects",
    description:
      "Work on live projects with partner organizations and gain practical experience",
  },
  {
    icon: Lightbulb,
    title: "Innovation Labs",
    description:
      "Access to state-of-the-art AI research facilities and computing resources",
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    description:
      "Fast-track your career with exclusive job opportunities and networking",
  },
];

const programStages: ProgramStage[] = [
  { phase: "Months 1-3", title: "Foundation", desc: "AI fundamentals and tool mastery" },
  { phase: "Months 4-6", title: "Specialization", desc: "Deep dive into your chosen track" },
  { phase: "Months 7-9", title: "Project Work", desc: "Real-world project implementation" },
  { phase: "Months 10-12", title: "Capstone", desc: "Final project and career placement" },
];

export default function ProgramOverview() {
  const [selectedTrack, setSelectedTrack] = useState<number>(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [completedStages, setCompletedStages] = useState<Set<number>>(
    () => new Set<number>()
  );

  const toggleStage = (index: number): void => {
    const next = new Set(completedStages);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setCompletedStages(next);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Program Tracks */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold uppercase font-serif text-slate-900 dark:text-white mb-3 tracking-tight">
            Choose Your Track
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Select a specialization track that aligns with your career goals and interests.
          </p>
        </div>

        {/* Interactive Track Selection */}
        <div className="grid md:grid-cols-3 gap-2 mb-8 bg-white dark:bg-slate-900/50 rounded-2xl p-2">
          {programTracks.map((track, index: number) => (
            <button
              key={track.title}
              onClick={() => setSelectedTrack(index)}
              className={`relative px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                selectedTrack === index
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg transform scale-105"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
              }`}
            >
              {track.title.replace(" Track", "")}
            </button>
          ))}
        </div>

        {/* Selected Track Details */}
        <div className="mb-12 sm:mb-16">
          <article className="group relative bg-white dark:bg-slate-900/85 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-700/60 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${programTracks[selectedTrack].color} flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}
              >
                {React.createElement(programTracks[selectedTrack].icon, {
                  className: "w-10 h-10 text-white",
                })}
                <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white mb-4">
                  {programTracks[selectedTrack].title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {programTracks[selectedTrack].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {programTracks[selectedTrack].skills.map((skill: string, skillIndex: number) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-100 dark:hover:bg-slate-800"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 ml-auto transform transition-transform group-hover:translate-x-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </article>
        </div>

        {/* Program Benefits */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold uppercase font-serif text-slate-900 dark:text-white mb-3 tracking-tight">
            Why Join Our Fellowship?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get access to exclusive opportunities and resources that will accelerate your AI career.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {programBenefits.map((benefit: ProgramBenefit, benefitIndex: number) => {
            const IconComponent = benefit.icon;
            const hovered = hoveredBenefit === benefitIndex;
            return (
              <article
                key={benefit.title}
                className="text-center group relative bg-white dark:bg-slate-900/85 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-700/60 transition-all duration-500 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredBenefit(benefitIndex)}
                onMouseLeave={() => setHoveredBenefit(null)}
                style={{
                  transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                  borderColor: hovered ? "#3b82f6" : undefined,
                  boxShadow: hovered ? "0 25px 50px -12px rgba(0, 0, 0, 0.15)" : undefined,
                }}
              >
                <div className="relative w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg overflow-hidden">
                  <IconComponent
                    className="w-8 sm:w-10 h-8 sm:h-10 text-white relative z-10 transition-transform duration-500"
                    style={{ transform: hovered ? "scale(1.2) rotate(10deg)" : "scale(1) rotate(0deg)" }}
                  />
                  <div
                    className="absolute inset-0 rounded-2xl bg-white/20 transition-all duration-500"
                    style={{ transform: hovered ? "scale(1.5)" : "scale(1)", opacity: hovered ? 1 : 0 }}
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-all duration-300">
                  {benefit.description}
                </p>

                {/* Ripple effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 transition-all duration-700 pointer-events-none"
                  style={{ opacity: hovered ? 1 : 0, transform: hovered ? "scale(1)" : "scale(0.8)" }}
                />
              </article>
            );
          })}
        </div>

        {/* Interactive Program Timeline */}
        <div className="relative bg-white dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-700/60">
          <h3 className="text-2xl font-bold font-serif text-slate-900 dark:text-white text-center mb-6 sm:mb-8">
            Interactive 12-Month Journey
          </h3>

          <div className="relative">
            {/* Dynamic timeline line */}
            <div className="hidden lg:block absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(completedStages.size / programStages.length) * 100}%` }}
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {programStages.map((stage: ProgramStage, stageIndex: number) => {
                const isCompleted = completedStages.has(stageIndex);
                return (
                  <div
                    key={stage.phase}
                    className="text-center cursor-pointer group"
                    onClick={() => toggleStage(stageIndex)}
                  >
                    {/* Interactive stage button */}
                    <div className="relative mx-auto mb-4 w-fit">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-lg transition-all duration-500 relative z-10 ${
                          isCompleted
                            ? "bg-gradient-to-br from-green-400 to-green-600 text-white scale-110"
                            : "bg-gradient-to-br from-cyan-500 to-blue-600 text-white group-hover:scale-110"
                        }`}
                      >
                        {isCompleted ? <Check className="w-5 h-5" /> : <span>{stageIndex + 1}</span>}
                      </div>

                      {/* Pulsing ring for completed stages */}
                      {isCompleted && (
                        <div className="absolute inset-0 w-12 h-12 bg-green-400 rounded-full animate-ping opacity-25" />
                      )}

                      {/* Hover ring */}
                      <div
                        className="absolute inset-0 w-12 h-12 border-2 border-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ transform: "scale(1.3)" }}
                      />
                    </div>

                    <div className={`transition-all duration-300 ${isCompleted ? "transform scale-105" : ""}`}>
                      <div
                        className={`font-semibold text-sm mb-2 transition-colors duration-300 ${
                          isCompleted ? "text-green-500" : "text-cyan-500 group-hover:text-cyan-400"
                        }`}
                      >
                        {stage.phase}
                      </div>
                      <h4
                        className={`font-semibold mb-2 transition-colors duration-300 ${
                          isCompleted
                            ? "text-green-600 dark:text-green-400"
                            : "text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                        }`}
                      >
                        {stage.title}
                      </h4>
                      <p
                        className={`text-sm leading-relaxed transition-colors duration-300 ${
                          isCompleted ? "text-green-600 dark:text-green-400" : "text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              Progress: {completedStages.size} of {programStages.length} stages completed
            </p>
            <div className="w-full max-w-xs mx-auto bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-700 ease-out"
                style={{ width: `${(completedStages.size / programStages.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
