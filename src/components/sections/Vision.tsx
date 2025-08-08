import { Check, ArrowRight, Users, Zap, Heart } from 'lucide-react'

export default function Vision() {
  const visionPoints = [
    {
      text: "Governments serve citizens faster and more efficiently",
      icon: Users,
      gradient: "from-blue-400 to-blue-600"
    },
    {
      text: "Teams focus on meaningful, strategic work", 
      icon: Zap,
      gradient: "from-orange-400 to-orange-600"
    },
    {
      text: "Citizens experience less frustration, more impact",
      icon: Heart,
      gradient: "from-purple-400 to-purple-600"
    }
  ]

  return (
    <section id="vision" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">Our Vision</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            The Future We're Building
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A future where African organizations run smarter, public services move faster, and technology 
            quietly works in the background—so people can focus on what matters most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {visionPoints.map((point, index) => {
              const IconComponent = point.icon
              return (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-r ${point.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-200 text-lg leading-relaxed group-hover:text-white transition-colors">
                        {point.text}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 relative overflow-hidden shadow-2xl">
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full filter blur-xl"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full filter blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Why We Exist</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-200 leading-relaxed text-lg">
                    To make life better by simplifying complex processes for organizations, enabling them to serve 
                    people faster, smarter, and more humanely.
                  </p>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-400 italic">
                      Built for people. Powered by AI. That's the WE Org way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}