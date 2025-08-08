'use client'


import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'


export default function MainLanding() {
  const [logoVisible, setLogoVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [buttonVisible, setButtonVisible] = useState(false)
  const router = useRouter()


  useEffect(() => {
    const timer1 = setTimeout(() => setLogoVisible(true), 600) // Slightly faster logo reveal
    const timer2 = setTimeout(() => setTextVisible(true), 1500) // Adjusted text delay
    const timer3 = setTimeout(() => setButtonVisible(true), 2500) // Adjusted button delay


    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])


  const handleJourneyClick = () => {
    router.push('/homepage')
  }


  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#1E2A6D] via-[#2D1B69] to-[#000]">
      {/* Background with overlay for readability */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('fpage.png')" }}>
        <div className="absolute inset-0 bg-black/20" />
      </div>


      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-white">
        {/* Logo Animation */}
        <div className={`transition-all duration-1000 ease-out transform mb-12 ${
          logoVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'
        }`}>
          <img
            src="logo.png"
            alt="WE Org Logo"
            className="h-24 md:h-28 lg:h-32 w-auto mx-auto drop-shadow-lg"
          />
        </div>


        {/* Text Animation */}
        <div className={`transition-all duration-1000 ease-out transform text-center mb-16 max-w-3xl ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wide">
            Welcome to Your Journey
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mt-4">
            Discover limitless opportunities, create meaningful impact, and build a better future together
          </p>
        </div>


        {/* Button Animation */}
        <div className={`transition-all duration-1000 ease-out transform ${
          buttonVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <button
            onClick={handleJourneyClick}
            className="px-10 py-3 bg-white/90 text-[#2D1B69] font-medium text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-[#4B0082] hover:text-white transition-all duration-300 border border-white/30"
          >
            <span className="relative flex items-center space-x-2">
              <span>Journey With Us</span>
              <svg className="w-5 h-5 transform hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

