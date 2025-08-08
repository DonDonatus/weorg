import { ArrowRight, Calendar, BookOpen } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-15 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{backgroundColor: '#DCDAF7'}}>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{backgroundColor: '#5206F1'}}></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full" style={{backgroundColor: '#1E06BE'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full" style={{backgroundColor: '#0F0640'}}></div>
          </div>
          
          <div className="relative z-10 p-14">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/50">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#5206F1'}}></div>
              <span className="text-sm font-medium" style={{color: '#0F0640'}}>Ready to Get Started?</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#0F0640'}}>
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl mb-8 text-gray-700 leading-relaxed">
              Join organizations across Africa that are already serving people faster and smarter with our AI-powered solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group bg-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold transform hover:-translate-y-1 flex items-center justify-center space-x-2 border border-white/50" style={{color: '#1E06BE'}}>
                <Calendar className="w-5 h-5" />
                <span>Schedule a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 px-8 py-4 rounded-xl hover:bg-white transition-all duration-300 font-semibold transform hover:-translate-y-1 flex items-center justify-center space-x-2" style={{borderColor: '#5206F1', color: '#5206F1'}}>
                <BookOpen className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </div>

            {/* Trust Elements */}
            <div className="pt-6 border-t border-white/30">
              <p className="text-sm text-gray-600 mb-4">Built for people. Powered by AI.</p>
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#5206F1'}}></div>
                  <span className="text-sm text-gray-600">No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#1E06BE'}}></div>
                  <span className="text-sm text-gray-600">Free consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#0F0640'}}></div>
                  <span className="text-sm text-gray-600">Africa-focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}