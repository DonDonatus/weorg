"use client"

import { useState } from 'react'
import { Zap, CheckCircle, Users, ArrowRight, Globe, Target, Heart, Brain, Building2, FileCheck, MessageSquare } from 'lucide-react'

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const features = [
    {
      icon: Brain,
      title: "Applied AI Research",
      description: "Cutting-edge AI research tailored for African contexts.",
      highlight: "Innovation First"
    },
    {
      icon: Building2,
      title: "Government Automation Agents",
      description: "Intelligent automation for government operations and citizen services.",
      highlight: "Efficiency Boost"
    },
    {
      icon: FileCheck,
      title: "Document Verification Tools",
      description: "Advanced tools for authenticating government documents.",
      highlight: "Secure & Fast"
    },
    {
      icon: MessageSquare,
      title: "Local Language NLP Bots",
      description: "NLP bots that understand local African languages.",
      highlight: "Localized AI"
    }
  ]

  const testimonials = [
    {
      quote: "WeOrg's AI solutions have revolutionized our government operations. The local language support and understanding of our context made all the difference.",
      author: "Ministry of Digital Transformation, Ghana",
      color: "blue"
    },
    {
      quote: "The document verification tools have streamlined our authentication process by 80%. Security and speed combined perfectly.",
      author: "Bank of Ghana, Compliance Division",
      color: "slate"
    },
    {
      quote: "Local language NLP bots have transformed citizen engagement. Our services are now accessible to everyone in their native tongue.",
      author: "Accra Metropolitan Assembly",
      color: "emerald"
    }
  ]

  return (
    <>
      {/* Main About Section */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Main Message */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-slate-900">
                Ghana&apos;s Premier AI Research &amp; Automation Company
              </h2>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
                We build intelligent agents that streamline operations in government and enterprise - driven by local talent and real-world impact.
              </p>

              <button className="btn-primary group mb-6 md:mb-8">
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right side - Vision */}
            <div className="relative">
              <div className="rounded-2xl p-6 md:p-8 text-white shadow-xl relative bg-gradient-to-br from-gray-600 to-slate-700">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed text-base md:text-lg mb-4 md:mb-6">
                  To transform how African organizations operate by combining cutting-edge AI with deep local understanding.
                </p>
                <div className="pt-4 md:pt-6 border-t border-white/20">
                  <p className="text-xs md:text-sm text-blue-200">
                    &ldquo;Technology that works for Africa, built by Africa.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-slate-900">
              Our Core Services
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
              Comprehensive AI solutions for African governments and enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300 shadow-sm bg-gradient-to-r from-blue-600 to-slate-700">
                    <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base md:text-lg font-semibold font-serif mb-2 md:mb-3 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-serif mb-3 md:mb-4 text-xs md:text-sm">
                    {feature.description}
                  </p>

                  {/* Highlight */}
                  <div className="pt-2 md:pt-3 border-t border-slate-200">
                    <span className="text-xs font-semibold text-blue-600 uppercase">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* News Highlights / Current Initiatives Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              News Highlights
            </h3>
            <p className="text-slate-600 text-sm md:text-base max-w-3xl mx-auto">
              Stay updated with our latest developments and ongoing projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {/* GNSS AI Fellowship */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-900">GNSS AI Fellowship</h4>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Flagship fellowship program training AI researchers in Ghana, focusing on GNSS and AI integration.
              </p>
              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100">
                <span className="inline-flex items-center text-xs font-medium text-blue-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
                  Active Program
                </span>
              </div>
            </div>

            {/* AI in Public Sector Pilots */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-600 to-blue-700 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-900">Public Sector Pilots</h4>
              </div>
                             <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                 Collaborating with government agencies to pilot AI solutions in public services.
               </p>
              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100">
                <span className="inline-flex items-center text-xs font-medium text-emerald-600">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-2 animate-pulse"></div>
                  Pilot Phase
                </span>
              </div>
            </div>

            {/* Twi NLP Model */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-600 to-red-700 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-900">Twi NLP Model</h4>
              </div>
                             <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                 Developing advanced NLP capabilities for Twi language, enabling AI systems to understand local Ghanaian dialects.
               </p>
              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100">
                <span className="inline-flex items-center text-xs font-medium text-orange-600">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-2 animate-pulse"></div>
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              {/* Section Header */}
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                  Client Feedback
                </h3>
              </div>

              {/* Testimonial Card */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-slate-700 rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base md:text-lg text-slate-800 font-serif mb-6 leading-relaxed">
                    &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <p className="text-sm text-slate-600 mb-6 font-medium">
                    — {testimonials[activeTestimonial].author}
                  </p>

                  {/* Navigation Dots */}
                  <div className="flex justify-center space-x-3">
                    <div
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-200 ${activeTestimonial === 0 ? 'bg-blue-600 scale-110' : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                      onClick={() => setActiveTestimonial(0)}
                    ></div>
                    <div
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-200 ${activeTestimonial === 1 ? 'bg-blue-600 scale-110' : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                      onClick={() => setActiveTestimonial(1)}
                    ></div>
                    <div
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-200 ${activeTestimonial === 2 ? 'bg-blue-600 scale-110' : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                      onClick={() => setActiveTestimonial(2)}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}