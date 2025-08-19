'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface AOSProviderProps {
    children: React.ReactNode
}

export default function AOSProvider({ children }: AOSProviderProps) {
    const [isAOSLoaded, setIsAOSLoaded] = useState(false)

    useEffect(() => {
        const loadAOS = async () => {
            try {
                AOS.init({
                    duration: 800,
                    easing: 'ease-out-cubic',
                    once: true, 
                    offset: 100,
                    delay: 0,
                    disable: 'mobile', 
                    throttleDelay: 99,
                })
                setIsAOSLoaded(true)
            } catch (error) {
                console.warn('AOS failed to load:', error)
                setIsAOSLoaded(true) // Continue without AOS
            }
        }

        const timer = setTimeout(loadAOS, 100)
        
        return () => {
            clearTimeout(timer)
            if (isAOSLoaded) {
                AOS.refresh()
            }
        }
    }, [isAOSLoaded])

    return (
        <div className={isAOSLoaded ? 'aos-loaded' : ''}>
            {children}
        </div>
    )
}
