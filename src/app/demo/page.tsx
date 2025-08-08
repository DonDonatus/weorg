'use client'


import { useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Mail,
  Phone,
  CheckCircle,
  Star,
  Zap,
  Shield
} from 'lucide-react'


export default function ScheduleDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: ''
  })


  const [isSubmitted, setIsSubmitted] = useState(false)


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }


  const handleSubmit = () => {
    // Simulate form submission
    setIsSubmitted(true)
  }


  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#DCDAF7]/20 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-[#DCDAF7]/50 shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-r from-[#1E06BE] to-[#5206F1] rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Thank You!</h1>
            <p className="text-xl text-slate-600 mb-8">
              We've received your demo request. Our team will contact you within 24 hours to schedule your personalized demonstration.
            </p>
            <button
              onClick={() => window.history.back()}
              className="bg-gradient-to-r from-[#1E06BE] to-[#5206F1] text-white px-8 py-4 rounded-2xl hover:from-[#5206F1] hover:to-[#1E06BE] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2 mx-auto"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    )
  }


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
              <span className="font-medium">Back</span>
            </button>
            <div className="flex items-center">
              <img
                src="logo_full_b.png"
                alt="WE Org"
                className="h-9 w-auto"
              />
            </div>
          </div>
        </div>
      </nav>
     
      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#DCDAF7]/30 to-[#DCDAF7]/20 rounded-full px-6 py-3 border border-[#DCDAF7]/50 mb-8">
              <Calendar className="w-5 h-5 text-[#5206F1]" />
              <span className="text-[#0F0640] font-semibold text-sm tracking-wide">Schedule Your Demo</span>
            </div>
           
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              See AI That Works
              <span className="block bg-gradient-to-r from-[#1E06BE] to-[#5206F1] bg-clip-text text-transparent">
                For Your People
              </span>
            </h1>
           
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Experience a personalized demonstration of how our AI agents can transform your operations,
              reduce wait times, and enhance service delivery.
            </p>
          </div>


          {/* Demo Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Zap,
                title: "Live Demo",
                description: "See our AI agents in action with real scenarios"
              },
              {
                icon: Users,
                title: "Tailored Solutions",
                description: "Customized presentation for your specific needs"
              },
              {
                icon: Shield,
                title: "Expert Guidance",
                description: "Q&A with our AI specialists"
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#DCDAF7]/30 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1E06BE] to-[#5206F1] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>


          {/* Simple Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-[#DCDAF7]/50 shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Get Your Free Demo</h2>
           
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#DCDAF7]/50 focus:border-[#5206F1] focus:ring-2 focus:ring-[#5206F1]/20 outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#DCDAF7]/50 focus:border-[#5206F1] focus:ring-2 focus:ring-[#5206F1]/20 outline-none transition-all"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
              </div>


              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCDAF7]/50 focus:border-[#5206F1] focus:ring-2 focus:ring-[#5206F1]/20 outline-none transition-all"
                    placeholder="Your organization name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#DCDAF7]/50 focus:border-[#5206F1] focus:ring-2 focus:ring-[#5206F1]/20 outline-none transition-all"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                </div>
              </div>


              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Tell us about your needs</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#DCDAF7]/50 focus:border-[#5206F1] focus:ring-2 focus:ring-[#5206F1]/20 outline-none transition-all resize-none"
                  placeholder="What specific challenges are you looking to solve? Any particular use cases you're interested in?"
                />
              </div>


              <div className="bg-gradient-to-r from-[#DCDAF7]/30 to-[#DCDAF7]/20 rounded-2xl p-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[#5206F1]" />
                  What to expect:
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#5206F1] flex-shrink-0" />
                    <span>30-minute personalized demo session</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#5206F1] flex-shrink-0" />
                    <span>Live AI agents demonstration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#5206F1] flex-shrink-0" />
                    <span>Q&A with our experts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#5206F1] flex-shrink-0" />
                    <span>Custom implementation discussion</span>
                  </li>
                </ul>
              </div>


              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#1E06BE] to-[#5206F1] text-white px-8 py-4 rounded-2xl hover:from-[#5206F1] hover:to-[#1E06BE] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-3"
              >
                <span>Schedule My Free Demo</span>
                <ArrowRight className="w-6 h-6" />
              </button>


              <p className="text-center text-sm text-slate-500">
                We'll contact you within 24 hours to schedule your demo at a time that works for you.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-r from-[#DCDAF7]/10 via-white to-[#DCDAF7]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Trusted by Organizations Across Africa</h2>
          </div>
         
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                stat: "99.7%",
                label: "Accuracy Rate"
              },
              {
                icon: Users,
                stat: "87%",
                label: "Faster Service"
              },
              {
                icon: Shield,
                stat: "100%",
                label: "Data Security"
              }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#DCDAF7]/30">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1E06BE] to-[#5206F1] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#1E06BE] mb-2">{item.stat}</div>
                  <div className="font-semibold text-slate-900">{item.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#0F0640] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
             
              <div className="flex items-center">
              <img
                src="logo_full_w.png"
                alt="WE Org"
                className="h-10 w-auto"
              />
            </div>
            </div>
            <p className="text-slate-300 text-sm">Built for people. Powered by AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

