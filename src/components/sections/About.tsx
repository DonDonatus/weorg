import { Zap, CheckCircle, Users, ArrowRight, Clock, FileText, Heart } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Zap,
      title: "Speed Up Services",
      description: "Transform slow, manual processes into fast, automated workflows that serve citizens and customers efficiently.",
      stats: "340% faster processing"
    },
    {
      icon: CheckCircle,
      title: "Reduce Complexity",
      description: "Simplify complicated procedures with intelligent automation that handles the heavy lifting behind the scenes.",
      stats: "87% less paperwork"
    },
    {
      icon: Users,
      title: "Empower People",
      description: "Free your team from repetitive tasks so they can focus on creative, strategic, and human-centered work.",
      stats: "250% productivity boost"
    }
  ]

  const problems = [
    { icon: Clock, text: "Citizens wait in long queues" },
    { icon: FileText, text: "Staff get buried in paperwork" },
    { icon: Heart, text: "Change feels slow and complicated" }
  ]

  return (
    <>
      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Problems */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 border" style={{borderColor: '#DCDAF7'}}>
                <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#5206F1'}}></div>
                <span className="text-sm font-medium" style={{color: '#0F0640'}}>The Reality Across Africa</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#0F0640'}}>
                The Challenge We're Solving
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Across Africa, many organizations still rely on outdated, manual systems that slow down operations 
                and frustrate the very people they're meant to serve.
              </p>

              <div className="space-y-4">
                {problems.map((problem, index) => {
                  const IconComponent = problem.icon
                  return (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-xl border" style={{borderColor: '#DCDAF7'}}>
                      <IconComponent className="w-5 h-5" style={{color: '#5206F1'}} />
                      <span className="text-gray-700 font-medium">{problem.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right side - Solution */}
            <div className="relative">
              <div className="rounded-2xl p-8 text-white shadow-xl relative" style={{backgroundColor: '#1E06BE'}}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">That's why WE Org exists.</h3>
                <p className="text-blue-100 leading-relaxed text-lg mb-6">
                  We're here to change this reality. To make technology work for people, 
                  not against them. To turn frustration into satisfaction.
                </p>
                <div className="pt-6 border-t border-white/20">
                  <p className="text-sm text-blue-200">
                    "Built for people. Powered by AI. That's the WE Org way."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 border" style={{borderColor: '#DCDAF7'}}>
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#5206F1'}}></div>
              <span className="text-sm font-medium" style={{color: '#0F0640'}}>Our Daily Mission</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{color: '#0F0640'}}>
              What We Do Every Day
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We build people-first AI agents that streamline operations in governments and enterprises—reducing 
              complexity, improving service delivery, and empowering humans to do more meaningful work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border hover:-translate-y-1"
                  style={{borderColor: '#DCDAF7'}}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-sm" style={{backgroundColor: '#1E06BE'}}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#0F0640'}}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm font-bold" style={{color: '#5206F1'}}>
                      {feature.stats}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gray-50 rounded-2xl px-8 py-4 border" style={{borderColor: '#DCDAF7'}}>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white" style={{backgroundColor: '#1E06BE'}}></div>
                <div className="w-8 h-8 rounded-full border-2 border-white" style={{backgroundColor: '#5206F1'}}></div>
                <div className="w-8 h-8 rounded-full border-2 border-white" style={{backgroundColor: '#0F0640'}}></div>
              </div>
              <span className="text-gray-700 font-medium">
                Ready to transform your organization? Let's build something amazing together.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}