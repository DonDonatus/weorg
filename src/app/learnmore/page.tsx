'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react'
import {
  ArrowRight,
  Users,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  Clock,
  ArrowLeft,
  Building,
  UserCheck,
  Sparkles,
  Target
} from 'lucide-react'


export default function LearnMore() {
  const [isVisible, setIsVisible] = useState(false)


  const metrics = [
    { value: "87%", label: "Reduction in Wait Times", color: "text-[#1E06BE]" },
    { value: "340%", label: "Faster Processing", color: "text-[#5206F1]" },
    { value: "250%", label: "Staff Productivity Increase", color: "text-[#1E06BE]" },
    { value: "99.7%", label: "Accuracy Rate", color: "text-[#5206F1]" }
  ]


  useEffect(() => {
    setIsVisible(true)
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#DCDAF7]/20">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-slate-600 hover:text-[#1E06BE] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </button>
            <div className="flex items-center">
              <img
                src="logo_full_b.png"
                alt="WE Org"
                className="h-9.5 w-auto"
              />
            </div>
          </div>
        </div>
      </nav>


      {/* Hero Section with Logo Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full Logo Background */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: 'url(/weorg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
         
          {/* Animated gradient overlays */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E06BE]/30 via-transparent to-[#5206F1]/30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#DCDAF7]/10 to-transparent"></div>
          </div>
         
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        </div>


        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 shadow-2xl mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-[#DCDAF7] to-white rounded-full animate-pulse"></div>
              <span className="text-white font-semibold text-sm tracking-wide">Built for people. Powered by AI.</span>
            </div>


            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white drop-shadow-2xl">AI That Works</span>
              <span className="block bg-gradient-to-r from-[#DCDAF7] via-white to-[#DCDAF7] bg-clip-text text-transparent drop-shadow-2xl">
                For People
              </span>
            </h1>


            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-lg">
              We create AI-powered automation agents that simplify complex processes for governments and enterprises across Africa.
              <span className="font-bold text-white"> Our technology doesn't replace people—it empowers them.</span>
            </p>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-[#1E06BE] to-[#5206F1] text-white px-10 py-5 rounded-2xl hover:from-[#5206F1] hover:to-[#1E06BE] transition-all duration-500 font-bold text-lg shadow-2xl hover:shadow-[#5206F1]/50 transform hover:-translate-y-2 hover:scale-105 flex items-center space-x-3">
                <span>Discover Our Solutions</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
             
             
            </div>


            {/* Floating Elements */}
            <div className="absolute top-1/4 left-8 lg:left-16">
              <div className="w-4 h-4 bg-white/30 rounded-full animate-bounce delay-100"></div>
            </div>
            <div className="absolute top-1/3 right-8 lg:right-16">
              <div className="w-6 h-6 bg-[#DCDAF7]/40 rounded-full animate-bounce delay-300"></div>
            </div>
            <div className="absolute bottom-1/4 left-1/4">
              <div className="w-3 h-3 bg-white/40 rounded-full animate-bounce delay-500"></div>
            </div>
            <div className="absolute bottom-1/3 right-1/4">
              <div className="w-5 h-5 bg-[#5206F1]/30 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>


        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>


      {/* Metrics Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl lg:text-5xl font-bold ${metric.color} mb-2 drop-shadow-sm`}>
                  {metric.value}
                </div>
                <div className="text-slate-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Who We Are Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Who We Are
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl font-bold bg-gradient-to-r from-[#1E06BE] to-[#5206F1] bg-clip-text text-transparent mb-6">
                WE Org Limited
              </p>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                We simplify complex systems for African governments and enterprises, allowing them to serve people faster,
                smarter, and more humanely. Our AI automation agents work quietly in the background—streamlining operations
                so people can focus on what truly matters.
              </p>
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#DCDAF7]/30 to-[#DCDAF7]/20 rounded-full px-8 py-4 border border-[#DCDAF7]/50">
                <Sparkles className="w-6 h-6 text-[#5206F1]" />
                <span className="text-[#0F0640] font-bold text-lg">Africa's People-First AI Company</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-r from-[#DCDAF7]/10 via-white to-[#DCDAF7]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We deliver AI automation agents that enhance—not replace—human potential,
              built with African contexts and global standards.
            </p>
          </div>


          {/* Our Brands */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "WE Agents",
                description: "Smart automation for governments and enterprises. AI agents that streamline operations and enhance service delivery.",
                icon: Users,
                color: "from-[#1E06BE] to-[#5206F1]"
              },
              {
                title: "WE Research",
                description: "AI research for African contexts. Developing cutting-edge solutions that understand local languages and cultures.",
                icon: Sparkles,
                color: "from-[#5206F1] to-[#1E06BE]"
              },
              {
                title: "WE Care",
                description: "Social good through AI education and inclusion. Making AI accessible and beneficial for all communities.",
                icon: Shield,
                color: "from-[#1E06BE] to-[#5206F1]"
              }
            ].map((brand, index) => {
              const IconComponent = brand.icon
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-[#DCDAF7]/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${brand.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{brand.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{brand.description}</p>
                </div>
              )
            })}
          </div>


          {/* How We Work */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-[#DCDAF7]/30">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">How We Work</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Human-Centric Design",
                  description: "We start with end-users: citizens, customers, employees",
                  icon: Users
                },
                {
                  title: "Invisible Complexity",
                  description: "Seamless technology that feels simple and intuitive",
                  icon: Zap
                },
                {
                  title: "Continuous Learning",
                  description: "Our agents evolve and improve over time",
                  icon: Target
                },
                {
                  title: "Client Partnerships",
                  description: "We work with you, not just for you",
                  icon: UserCheck
                }
              ].map((principle, index) => {
                const IconComponent = principle.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#DCDAF7] to-[#DCDAF7]/60 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-[#5206F1]" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{principle.title}</h4>
                    <p className="text-sm text-slate-600">{principle.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>


      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-[#0F0640] via-[#1E06BE] to-[#5206F1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Story</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              From problem to solution to impact—how we're building a future where technology works for people.
            </p>
          </div>
         
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Problem</h3>
              <p className="text-white/90 leading-relaxed">
                Legacy systems slow down service delivery. Citizens wait in long queues.
                Government workers struggle with inefficient processes. Enterprises lose productivity to manual tasks.
              </p>
            </div>
           
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
              <p className="text-white/90 leading-relaxed">
                We build AI agents that simplify, streamline, and humanize complex systems.
                Technology that works quietly in the background, enhancing human capabilities.
              </p>
            </div>
           
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Impact</h3>
              <p className="text-white/90 leading-relaxed">
                Government workers serve citizens faster. Citizens face less bureaucracy.
                Enterprises focus on growth, not manual processes. People thrive.
              </p>
            </div>
          </div>
         
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-md rounded-full px-8 py-4 border border-white/30">
              <Globe className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-lg">Our Vision: A future where tech works quietly—and people thrive</span>
            </div>
          </div>
        </div>
      </section>


      {/* Real World Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Real-World Impact
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're starting with tangible solutions that make a difference today,
              beginning with DVLA and expanding across Africa.
            </p>
          </div>
         
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1E06BE] to-[#5206F1] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Starting with DVLA</h3>
                    <p className="text-slate-600">
                      Transforming driver's license and vehicle registration processes with AI agents
                      that reduce wait times and improve service quality.
                    </p>
                  </div>
                </div>
               
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5206F1] to-[#1E06BE] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Expanding Across Africa</h3>
                    <p className="text-slate-600">
                      Scaling our solutions to government agencies and enterprises across the continent,
                      adapting to local contexts and needs.
                    </p>
                  </div>
                </div>
               
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1E06BE] to-[#5206F1] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Building Partnerships</h3>
                    <p className="text-slate-600">
                      Collaborating with universities, enterprises, and government agencies to create
                      sustainable, impactful AI solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="bg-gradient-to-br from-[#DCDAF7]/20 to-[#DCDAF7]/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Join the Movement</h3>
              <div className="space-y-4">
                <div className="bg-white/80 rounded-2xl p-6 border border-[#DCDAF7]/30">
                  <h4 className="font-bold text-slate-900 mb-2">Follow Our Journey</h4>
                  <p className="text-slate-600 text-sm">
                    Stay updated with our progress on social media and read our thought pieces on AI in Africa.
                  </p>
                </div>
                <div className="bg-white/80 rounded-2xl p-6 border border-[#DCDAF7]/30">
                  <h4 className="font-bold text-slate-900 mb-2">Partner With Us</h4>
                  <p className="text-slate-600 text-sm">
                    Collaborate through university partnerships, enterprise solutions, or government initiatives.
                  </p>
                </div>
                <div className="bg-white/80 rounded-2xl p-6 border border-[#DCDAF7]/30">
                  <h4 className="font-bold text-slate-900 mb-2">Experience the Impact</h4>
                  <p className="text-slate-600 text-sm">
                    Schedule a demo to see how our AI agents can transform your operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Core Values Section */}
      <section className="py-20 bg-gradient-to-r from-[#DCDAF7]/20 via-white to-[#DCDAF7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Core Values
              <span className="block bg-gradient-to-r from-[#1E06BE] to-[#5206F1] bg-clip-text text-transparent">
                Brand Pillars
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we build and every relationship we form.
            </p>
          </div>


          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "People-First Innovation",
                description: "Our agents work for people, not the other way around. AI designed to enhance human experience, not replace it."
              },
              {
                icon: Zap,
                title: "Simplification Through AI",
                description: "We reduce complexity in government and enterprise processes. Complex systems, made simple."
              },
              {
                icon: Shield,
                title: "Trust & Reliability",
                description: "AI you can trust with what matters most. Built for critical, high-stakes operations."
              },
              {
                icon: Globe,
                title: "African Context, Global Standards",
                description: "Built in Africa. World-class by design. Tailored for local contexts with international best practices."
              }
            ].map((pillar, index) => {
              const IconComponent = pillar.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1E06BE] to-[#5206F1] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#1E06BE] via-[#5206F1] to-[#1E06BE] rounded-3xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience People-First AI?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join organizations across Africa that are already experiencing the power of AI that works for people, not against them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1E06BE] px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link href="/demo">
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl hover:border-white hover:bg-white/10 transition-all duration-300 font-semibold backdrop-blur-sm">
                Schedule a Demo
              </button>
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm opacity-80">
                Starting with DVLA • Expanding across Africa • Building the future of human-centered AI
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#0F0640] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="flex items-center">
              <img
                src="logo_full_w.png"
                alt="WE Org"
                className="h-10 w-auto"
              />
            </div>
            </div>
            <p className="text-slate-300 mb-4">Built for people. Powered by AI.</p>
            <p className="text-sm text-slate-400">
              Simplifying complex processes across Africa, one AI agent at a time.
            </p>
            <div className="mt-6 text-xs text-slate-500">
              Starting with real-world impact • DVLA and beyond • Africa's people-first AI company
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

