import React from "react";
import Link from "next/link";
import type { JSX } from "react";
import { ArrowRight, Calendar, Users, Mail, Sparkles } from "lucide-react";

type FellowshipCTAProps = {
  applyHref?: string;
  infoSessionHref?: string;
  alumniHref?: string;
  email?: string;
  applyDeadline?: string;
  nextInfoSession?: string;
};

export default function FellowshipCTA({
  applyHref = "/fellowship/apply",
  infoSessionHref = "/fellowship/info-session",
  alumniHref = "/fellowship/alumni-network",
  email = "fellowship@weorg.ai",
  applyDeadline,
  nextInfoSession,
}: FellowshipCTAProps): JSX.Element {
  // Enhanced Info Card with hover effects
  const InfoCard = ({
    icon,
    title,
    subtitle,
    cta,
    href,
    srIconLabel,
    gradient = "from-cyan-500 to-blue-600",
    shadow = "shadow-cyan-500/30",
  }: {
    icon: JSX.Element;
    title: string;
    subtitle: string;
    cta: string;
    href: string;
    srIconLabel: string;
    gradient?: string;
    shadow?: string;
  }) => (
    <Link href={href} className="group focus:outline-none">
      <article
        className="relative h-full text-center bg-slate-900/40 backdrop-blur-xl rounded-xl p-6 sm:p-8 border border-slate-700/50 hover:border-transparent transition-all duration-500 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)]"
        aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}
      >
        {/* Holographic effect */}
        <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#00ccff_0%,#3385ff_50%,#00ccff_100%)] opacity-10" />
        </div>
        
        {/* Floating icon container */}
        <div
          className={`relative w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-r ${gradient} rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg ${shadow} group-hover:shadow-[0_0_20px_0] group-hover:-translate-y-1 transition-all`}
          aria-hidden="true"
        >
          {icon}
          <span className="sr-only">{srIconLabel}</span>
          <div className="absolute inset-0 rounded-xl bg-white/10 blur-xl group-hover:blur-2xl transition-all" />
        </div>
        
        <h3
          id={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}
          className="font-semibold text-white mb-2 text-lg sm:text-xl group-hover:text-cyan-300 transition-colors"
        >
          {title}
        </h3>
        <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6 group-hover:text-slate-200 transition-colors">
          {subtitle}
        </p>
        <span className="inline-flex items-center text-cyan-400 group-hover:text-cyan-300 text-sm sm:text-base font-medium transition-colors">
          {cta}
          <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </span>
      </article>
    </Link>
  );

  return (
    <section
      className="relative py-16 sm:py-24 bg-slate-950 overflow-hidden"
      aria-labelledby="fellowship-cta-heading"
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-slate-800/[0.02] opacity-30" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl" />
        
        {/* Animated rings */}
        <div className="absolute top-20 left-10 w-48 h-48 border border-cyan-400/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-purple-400/20 rounded-full animate-spin-slow-reverse" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA with animated gradient text */}
        <div className="text-center mb-12 sm:mb-16">
          
          <h2
            id="fellowship-cta-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 mb-6 tracking-tight"
          >
            Ready to Start Your AI Journey?
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
            Join Africa's most <span className="font-semibold text-cyan-300">prestigious AI fellowship</span> and become part of the next generation of innovators.
          </p>

          {/* Enhanced buttons with floating effect */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-10">
            <Link
              href={applyHref}
              className="relative group px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(0,200,255,0.3)] hover:-translate-y-1"
              aria-label="Apply to the fellowship"
            >
              <span className="relative z-10 flex items-center">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
            </Link>
            
            <Link
              href={infoSessionHref}
              className="relative group px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-400/30 text-white font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(100,200,255,0.1)] hover:-translate-y-1"
              aria-label="Attend an information session"
            >
              <span className="relative z-10 flex items-center">
                <Calendar className="w-5 h-5 mr-3" />
                Attend Info Session
              </span>
              <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Enhanced urgency banner */}
          {applyDeadline && (
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full backdrop-blur-sm animate-pulse-slow">
              <span className="font-medium text-red-300">
                ⏳ Limited spots available — Apply before {applyDeadline}
              </span>
            </div>
          )}
        </div>

        {/* Contact cards with 3D effect */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <InfoCard
            icon={<Mail className="w-6 h-6 text-white" />}
            title="Have Questions?"
            subtitle="Get answers from our admissions team"
            cta={`Email ${email}`}
            href={`mailto:${email}`}
            srIconLabel="Email icon"
            gradient="from-cyan-500 to-blue-600"
            shadow="shadow-cyan-500/30"
          />

          <InfoCard
            icon={<Users className="w-6 h-6 text-white" />}
            title="Connect with Alumni"
            subtitle="Chat with current fellows and graduates"
            cta="Join Alumni Network"
            href={alumniHref}
            srIconLabel="Users icon"
            gradient="from-emerald-500 to-cyan-600"
            shadow="shadow-emerald-500/30"
          />

          <InfoCard
            icon={<Calendar className="w-6 h-6 text-white" />}
            title="Virtual Info Session"
            subtitle={nextInfoSession ? `Next session: ${nextInfoSession}` : "Sessions held regularly"}
            cta="Register Now"
            href={infoSessionHref}
            srIconLabel="Calendar icon"
            gradient="from-purple-500 to-pink-600"
            shadow="shadow-purple-500/30"
          />
        </div>

        {/* Final holographic message */}
        <div className="relative text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 group overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#00ccff_0%,#3385ff_50%,#00ccff_100%)] opacity-10" />
          </div>
          
          <p className="relative z-10 text-lg sm:text-xl text-slate-200 italic">
            "The future of AI in Africa starts with you.{" "}
            <span className="not-italic font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">
              Take the first step today.
            </span>"
          </p>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float-up ${3 + Math.random() * 4}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float-up {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </section>
  );
}