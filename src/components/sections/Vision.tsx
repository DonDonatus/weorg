import { ArrowRight, Calendar, BookOpen, Users, Zap } from 'lucide-react'

export default function Vision() {
  return (
    <section id="vision" className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-lg md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10 px-4">
            Join us in transforming how African organizations operate. Choose your path to make a difference.
          </p>
        </div>

        {/* CTA Buttons Section */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-8 md:mb-10">
            {/* Partner With Us */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-5 lg:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 md:mb-5 shadow-lg">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-lg font-semibold font-serif text-white mb-3 md:mb-3">Partner With Us</h3>
              <p className="text-gray-300 mb-4 md:mb-5 leading-relaxed text-sm md:text-sm font-serif ">
                Collaborate on innovative AI solutions and expand your impact across Africa.
              </p>
              <button className="btn-white group w-full">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Apply to Fellowship */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-5 lg:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4 md:mb-5 shadow-lg">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-lg font-semibold font-serif text-white mb-3 md:mb-3">Apply to Fellowship</h3>
              <p className="text-gray-300 mb-4 md:mb-5 leading-relaxed text-sm md:text-sm font-serif">
                Join our research program and work on cutting-edge AI projects for Africa.
              </p>
              <button className="btn-white group w-full">
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Request a Demo */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-5 lg:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 md:mb-5 shadow-lg">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-lg font-semibold font-serif text-white mb-3 md:mb-3">Request a Demo</h3>
              <p className="text-gray-300 mb-4 md:mb-5 leading-relaxed text-sm md:text-sm font-serif">
                See our AI solutions in action and discover how they can transform your operations.
              </p>
              <button className="btn-white group w-full">
                <span>Schedule Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}