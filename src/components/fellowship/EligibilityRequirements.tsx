import React from "react";
import type { JSX } from "react";
import { CheckCircle, GraduationCap, MapPin, Code, Heart, LucideIcon } from "lucide-react";

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
            "Recent graduates (within 2 years) or final year students"
        ]
    },
    {
        category: "Location",
        icon: MapPin,
        color: "text-emerald-400",
        items: [
            "Legal resident of an African country",
            "Willing to relocate to program hub cities (Accra, Lagos, Cape Town, Nairobi)",
            "Available for full-time commitment (12 months)"
        ]
    },
    {
        category: "Technical Skills",
        icon: Code,
        color: "text-purple-400",
        items: [
            "Proficiency in Python or another programming language",
            "Understanding of basic mathematics and statistics",
            "Experience with data structures and algorithms"
        ]
    },
    {
        category: "Personal Qualities",
        icon: Heart,
        color: "text-pink-400",
        items: [
            "Passion for AI and its potential to solve African challenges",
            "Strong problem-solving and analytical thinking skills",
            "Excellent communication skills in English"
        ]
    }
];

const selectionProcess: SelectionStep[] = [
    {
        step: "01",
        title: "Online Application",
        description: "Submit your application with academic transcripts, CV, and personal statement",
        duration: "2 weeks"
    },
    {
        step: "02",
        title: "Technical Assessment",
        description: "Complete coding challenges and technical problem-solving tasks",
        duration: "1 week"
    },
    {
        step: "03",
        title: "Interview Round",
        description: "Virtual interviews with technical and behavioral components",
        duration: "2 weeks"
    },
    {
        step: "04",
        title: "Final Selection",
        description: "Reference checks and final evaluation by selection committee",
        duration: "1 week"
    }
];

export default function EligibilityRequirements(): JSX.Element {
    return (
        <section className="py-20 bg-white dark:bg-slate-950" aria-labelledby="eligibility-heading">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Requirements Section */}
                <div 
                    className="text-center mb-12 sm:mb-16"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    <h2 
                        id="eligibility-heading"
                        className="text-4xl md:text-5xl font-semibold uppercase font-serif text-slate-900 dark:text-white mb-4"
                    >
                        Eligibility Requirements
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        We're looking for talented individuals who are passionate about AI and ready to make an impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
                    {requirements.map((req, index) => (
                        <div 
                            key={index}
                            className="bg-slate-50 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 shadow-sm hover:shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay={400 + index * 100}
                            data-aos-duration="1000"
                        >
                            <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-slate-500 to-slate-600 rounded-xl flex items-center justify-center shadow-sm shadow-slate-500/30">
                                    <req.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${req.color}`} />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{req.category}</h3>
                            </div>
                            
                            <div className="space-y-3">
                                {req.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-start space-x-3">
                                        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                        <span className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Selection Process */}
                <div 
                    className="text-center mb-12 sm:mb-16"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold uppercase font-serif text-slate-900 dark:text-white mb-4">
                        Selection Process
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Our comprehensive selection process ensures we identify the most promising candidates.
                    </p>
                </div>

                <div className="relative mb-16 sm:mb-20">
                    {/* Process Timeline - Hidden line for mobile, visible on large screens */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transform -translate-y-1/2" aria-hidden="true"></div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {selectionProcess.map((step, index) => (
                            <div 
                                key={index} 
                                className="relative"
                                data-aos="fade-up"
                                data-aos-delay={400 + index * 100}
                                data-aos-duration="1000"
                            >
                                <div className="bg-slate-50 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 relative z-10 shadow-sm hover:shadow-lg">
                                    <div className="text-center">
                                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                                            <span className="text-white font-bold text-base sm:text-lg">{step.step}</span>
                                        </div>
                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">{step.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3 sm:mb-4">{step.description}</p>
                                        <div className="inline-flex items-center px-3 py-1 bg-slate-200 dark:bg-slate-800/50 rounded-full">
                                            <span className="text-cyan-600 dark:text-cyan-400 text-xs font-medium">{step.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Important Dates */}
                <div 
                    className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 sm:p-8 border border-cyan-500/20"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white text-center mb-6 sm:mb-8">Important Dates</h3>
                    <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                        <div>
                            <div className="text-cyan-400 font-bold text-base sm:text-lg mb-2">March 1, 2025</div>
                            <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">Applications Open</div>
                        </div>
                        <div>
                            <div className="text-emerald-400 font-bold text-base sm:text-lg mb-2">March 31, 2025</div>
                            <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">Application Deadline</div>
                        </div>
                        <div>
                            <div className="text-purple-400 font-bold text-base sm:text-lg mb-2">June 1, 2025</div>
                            <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">Program Starts</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}