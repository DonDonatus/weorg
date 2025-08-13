import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Users, Target, Heart, Shield, Globe, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - WE Org | Building AI Solutions for Africa',
  description: 'WE Org is a mission-driven AI company based in Ghana. We build AI products that empower people—starting with our own youth talent.',
  keywords: 'about WE Org, AI automation Africa, Ghana AI company, government automation, enterprise AI solutions, Ebo Biney',
}

export default function AboutPage() {
  const values = [
    { title: 'People First', description: 'We prioritize human needs and experiences in everything we build', icon: Heart },
    { title: 'Simplicity Wins', description: 'Complex problems deserve simple, elegant solutions', icon: Target },
    { title: 'Build to Empower', description: 'Our technology exists to give people more control and opportunity', icon: Users },
    { title: 'Responsible AI', description: 'We develop AI that is ethical, transparent, and beneficial to society', icon: Shield },
    { title: 'Africa First', description: 'We build solutions specifically for African contexts and challenges', icon: Globe }
  ]

  const impactStats = [
    { number: '100+', label: 'Students Trained', icon: Users },
    { number: '3', label: 'Active Pilots', icon: TrendingUp },
    { number: '5', label: 'AI Agents Developed', icon: Award }
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WE Org</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            WE Org is a mission-driven AI company based in Ghana. We build AI products that empower people—starting with our own youth talent.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Story</h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Named after Willow and Ezra, WE Org was founded to build a future where technology serves people. We don't chase hype—we solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-800 dark:to-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Vision</h3>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                To lead Africa into an AI-powered future where services are smart, systems are simple, and people always come first.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Mission</h3>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                To build intelligent agents that automate complexity and unlock opportunity—driven by African innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Values</h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do and build
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-800 dark:to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">Leadership</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Ebo Biney</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Founder</p>
            </div>
            
            <div className="text-center">
              <p className="text-slate-600 dark:text-gray-300 mb-6">
                Our board includes advisory bios and thumbnails. Learn more about our governance structure.
              </p>
              <Link 
                href="/governance" 
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Meet Our Board</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Impact</h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real results from our work across Africa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 border border-slate-200 dark:border-gray-700 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">{stat.label}</div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Link 
              href="/work" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>See Our Work</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
