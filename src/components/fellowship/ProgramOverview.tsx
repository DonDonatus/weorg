import React from "react";
import { 
    Code, 
    Brain, 
    Users, 
    Target, 
    Lightbulb,
    Globe,
    Rocket,
    LucideIcon
} from "lucide-react";
import type { JSX } from "react";

interface ProgramTrack {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
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

const programTracks: ProgramTrack[] = [
    {
        title: "AI Engineering Track",
        description: "Build production-ready AI systems and learn advanced machine learning techniques",
        icon: Code,
        color: "from-cyan-500 to-blue-600",
        skills: [
            "Deep Learning & Neural Networks",
            "MLOps & Model Deployment",
            "Computer Vision & NLP",
            "Cloud AI Infrastructure"
        ]
    },
    {
        title: "AI Research Track",
        description: "Conduct cutting-edge research in AI and contribute to scientific publications",
        icon: Brain,
        color: "from-purple-500 to-pink-600",
        skills: [
            "Research Methodology",
            "Statistical Analysis",
            "Academic Writing & Publishing",
            "Experimental Design"
        ]
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
            "Financial Inclusion"
        ]
    }
];

const programBenefits: ProgramBenefit[] = [
    {
        icon: Target,
        title: "Real-World Projects",
        description: "Work on live projects with partner organizations and gain practical experience"
    },
    {
        icon: Users,
        title: "Expert Mentorship",
        description: "1-on-1 guidance from industry leaders and renowned AI researchers"
    },
    {
        icon: Lightbulb,
        title: "Innovation Labs",
        description: "Access to state-of-the-art AI research facilities and computing resources"
    },
    {
        icon: Rocket,
        title: "Career Acceleration",
        description: "Fast-track your career with exclusive job opportunities and networking"
    }
];

const programStages: ProgramStage[] = [
    { phase: "Months 1-3", title: "Foundation", desc: "AI fundamentals and tool mastery" },
    { phase: "Months 4-6", title: "Specialization", desc: "Deep dive into your chosen track" },
    { phase: "Months 7-9", title: "Project Work", desc: "Real-world project implementation" },
    { phase: "Months 10-12", title: "Capstone", desc: "Final project and career placement" }
];

export default function ProgramOverview(): JSX.Element {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950/30" aria-labelledby="program-overview-heading">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Program Tracks */}
                <div 
                    className="text-center mb-12 sm:mb-16"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    <h2 
                        id="program-overview-heading"
                        className="text-4xl md:text-5xl font-semibold uppercase font-serif text-slate-900 dark:text-white mb-4"
                    >
                        Choose Your Track
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Select a specialization track that aligns with your career goals and interests.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
                    {programTracks.map((track, index) => (
                        <div 
                            key={index}
                            className="bg-white dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 shadow-sm hover:shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay={400 + index * 100}
                            data-aos-duration="1000"
                        >
                            <div className={`w-12 sm:w-16 h-12 sm:h-16 rounded-xl bg-gradient-to-r ${track.color} flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-cyan-500/30`}>
                                <track.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                            </div>
                            
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">{track.title}</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">{track.description}</p>
                            
                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">Key Skills:</h4>
                                {track.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" aria-hidden="true"></div>
                                        <span className="text-slate-500 dark:text-slate-400 text-sm">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Program Benefits */}
                <div 
                    className="text-center mb-12 sm:mb-16"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold uppercase font-serif text-slate-900 dark:text-white mb-4">
                        Why Join Our Fellowship?
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Get access to exclusive opportunities and resources that will accelerate your AI career.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
                    {programBenefits.map((benefit, index) => (
                        <div 
                            key={index}
                            className="text-center group"
                            data-aos="fade-up"
                            data-aos-delay={400 + index * 100}
                            data-aos-duration="1000"
                        >
                            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                                <benefit.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{benefit.title}</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Program Timeline */}
                <div 
                    className="bg-white dark:bg-slate-900/40 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/50"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-6 sm:mb-8">12-Month Journey</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {programStages.map((stage, index) => (
                            <div key={index} className="text-center">
                                <div className="text-cyan-400 font-bold text-sm mb-2">{stage.phase}</div>
                                <h4 className="text-slate-900 dark:text-white font-semibold mb-2">{stage.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">{stage.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}