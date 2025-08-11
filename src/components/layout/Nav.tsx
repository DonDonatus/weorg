'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Search, User } from 'lucide-react'

interface NavItem {
  label: string
  href: string
  type: 'link' | 'dropdown' | 'button'
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '#home', type: 'link' },
  { label: 'ABOUT', href: '#about', type: 'link' },
  { 
    label: 'SERVICES', 
    href: '#services', 
    type: 'dropdown',
    children: [
      { label: 'Strategy Consulting', href: '#about', type: 'link' },
      { label: 'Digital Training', href: '#about', type: 'link' },
      { label: 'Software Development', href: '#about', type: 'link' },
      { label: 'Innovation Labs', href: '#about', type: 'link' }
    ]
  },
  { label: 'VISION', href: '#vision', type: 'link' },
  { label: 'CONTACT', href: '#contact', type: 'button' }
]

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns when mobile menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setActiveDropdown(null)
    }
  }, [isMenuOpen])

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (activeDropdown) {
        const dropdownRef = dropdownRefs.current[activeDropdown]
        const target = event.target as Node
        
        // Check if click is outside the dropdown
        if (dropdownRef && !dropdownRef.contains(target)) {
          setActiveDropdown(null)
        }
      }
    }

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('touchstart', handleClickOutside)
      }
    }
  }, [activeDropdown])

  // Close dropdowns when clicking outside nav on mobile
  useEffect(() => {
    const handleClickOutsideNav = (event: MouseEvent | TouchEvent) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutsideNav)
      document.addEventListener('touchstart', handleClickOutsideNav)
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutsideNav)
        document.removeEventListener('touchstart', handleClickOutsideNav)
      }
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  const handleDropdownToggle = (label: string) => {
    console.log('Toggle dropdown:', label, 'Current:', activeDropdown) // Debug log
    if (activeDropdown === label) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(label)
    }
  }

  return (
    <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative overflow-hidden rounded-xl p-2 transition-all duration-300 group-hover:bg-gray-50/50">
              <img
                src="logo_full_b.png"
                alt="WE Org"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.type === 'dropdown' ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      data-dropdown={item.label}
                      className="group flex items-center space-x-2 px-6 py-3 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-2xl hover:bg-blue-50/80 font-serif font-medium tracking-wide cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                        activeDropdown === item.label ? 'rotate-180 text-blue-600' : 'group-hover:translate-y-0.5'
                      }`} />
                    </button>
                    
                    {activeDropdown === item.label && (
                      <div 
                        ref={(el) => { dropdownRefs.current[item.label] = el }}
                        className="absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 py-3 z-50 animate-in slide-in-from-top-2 duration-300">
                        {item.children?.map((child, index) => (
                          <button
                            key={child.label}
                            onClick={() => scrollToSection(child.href)}
                            className="w-full text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-xl mx-2 hover:translate-x-1 cursor-pointer font-serif"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.type === 'button' ? (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-serif font-medium tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 overflow-hidden group cursor-pointer"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="group px-6 py-3 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-2xl hover:bg-gray-50/80 font-serif font-medium tracking-wide relative overflow-hidden cursor-pointer"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-3 text-gray-600 hover:text-blue-600 transition-colors rounded-2xl hover:bg-gray-50/80 cursor-pointer">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-3 text-gray-600 hover:text-blue-600 transition-colors rounded-2xl hover:bg-gray-50/80 cursor-pointer">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-gray-700 hover:text-blue-600 transition-colors rounded-2xl hover:bg-gray-50/80 cursor-pointer"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl py-6 animate-in slide-in-from-top-2 duration-300">
            <div className="space-y-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.type === 'dropdown' ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        data-dropdown={item.label}
                        className="flex items-center justify-between w-full px-6 py-4 text-left text-gray-700 hover:text-blue-600 transition-colors rounded-2xl hover:bg-gray-50/80 font-serif font-medium tracking-wide cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180 text-blue-600' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.label && (
                        <div 
                          ref={(el) => { dropdownRefs.current[item.label] = el }}
                          className="pl-8 space-y-2 mt-2"
                        >
                          {item.children?.map((child) => (
                            <button
                              key={child.label}
                              onClick={() => scrollToSection(child.href)}
                              className="w-full text-left px-6 py-3 text-gray-600 hover:text-blue-600 transition-colors rounded-xl hover:bg-gray-50/80 cursor-pointer font-serif"
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.type === 'button' ? (
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-serif font-medium tracking-wide shadow-lg cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left px-6 py-4 text-gray-700 hover:text-blue-600 transition-colors rounded-2xl hover:bg-gray-50/80 font-serif font-medium tracking-wide cursor-pointer"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              
              {/* Mobile actions */}
              <div className="flex space-x-4 pt-4 border-t border-gray-200/50">
                <button className="flex-1 p-3 text-gray-600 hover:text-blue-600 transition-colors rounded-2xl hover:bg-gray-50/80 flex items-center justify-center space-x-2 cursor-pointer">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
                <button className="flex-1 p-3 text-gray-600 hover:text-blue-600 transition-colors rounded-2xl hover:bg-gray-50/80 flex items-center justify-center space-x-2 cursor-pointer">
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
