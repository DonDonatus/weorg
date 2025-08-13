'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image' // Import Image component

interface NavItem {
    label: string
    href: string
    type: 'link' | 'dropdown'
    children?: NavItem[]
}

const navItems: NavItem[] = [
    {
        label: 'COMPANY',
        href: '#company',
        type: 'dropdown',
        children: [
            { label: 'About Us', href: '#about', type: 'link' },
            { label: 'Board & Governance', href: '#governance', type: 'link' }
        ]
    },
    {
        label: 'SERVICES',
        href: '#services',
        type: 'dropdown',
        children: [
            { label: 'Solutions', href: '#solutions', type: 'link' },
            { label: 'Partnerships', href: '#partnerships', type: 'link' }
        ]
    },
    {
        label: 'RESEARCH',
        href: '#research',
        type: 'dropdown',
        children: [
            { label: 'AI Research Lab', href: '#ai-lab', type: 'link' },
            { label: 'News & Updates', href: '#news', type: 'link' }
        ]
    },
    {
        label: 'JOIN US',
        href: '#join',
        type: 'dropdown',
        children: [
            { label: 'Careers/Fellowship', href: '#careers', type: 'link' },
            { label: 'Contact Us', href: '#contact', type: 'link' }
        ]
    }
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const headerRef = useRef<HTMLDivElement>(null)
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

    // Close dropdowns when clicking outside header on mobile
    useEffect(() => {
        const handleClickOutsideHeader = (event: MouseEvent | TouchEvent) => {
            if (isMenuOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false)
                setActiveDropdown(null)
            }
        }

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutsideHeader)
            document.addEventListener('touchstart', handleClickOutsideHeader)

            return () => {
                document.removeEventListener('mousedown', handleClickOutsideHeader)
                document.removeEventListener('touchstart', handleClickOutsideHeader)
            }
        }
    }, [isMenuOpen])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
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
        <header ref={headerRef} className={`fixed Cosmic top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-sm'
                : 'bg-transparent'
            }`}>
            {/* Main navigation */}
            <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Image
                                src="/logo_full_b.png" // Adjust path if needed (ensure it starts with / for Next.js)
                                alt="WE Org"
                                width={120} // Adjust based on your logo's aspect ratio
                                height={40} // Matches the original h-10 (40px)
                                className="object-contain"
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {navItems.map((item) => (
                                <div key={item.label} className="relative">
                                    {item.type === 'dropdown' ? (
                                        <div className="relative">
                                            <button
                                                onClick={() => handleDropdownToggle(item.label)}
                                                data-dropdown={item.label}
                                                className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-serif font-medium tracking-wide cursor-pointer"
                                            >
                                                <span>{item.label}</span>
                                                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''
                                                    }`} />
                                            </button>

                                            {activeDropdown === item.label && (
                                                <div
                                                    ref={(el) => { dropdownRefs.current[item.label] = el }}
                                                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                                    {item.children?.map((child) => (
                                                        <button
                                                            key={child.label}
                                                            onClick={() => scrollToSection(child.href)}
                                                            className="w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm hover:bg-gray-50 transition-colors cursor-pointer font-serif"
                                                        >
                                                            {child.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => scrollToSection(item.href)}
                                            className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-serif font-medium cursor-pointer"
                                        >
                                            {item.label}
                                        </button>
                                    )}
                                </div>
                            ))}

                            {/* Get Started Button */}
                            <div className="ml-6">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="navbar-btn-primary"
                                >
                                    <span>Get started</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                            >
                                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="lg:hidden border-t border-gray-100 bg-white py-4">
                            <div className="space-y-2">
                                {navItems.map((item) => (
                                    <div key={item.label}>
                                        {item.type === 'dropdown' ? (
                                            <div>
                                                <button
                                                    onClick={() => handleDropdownToggle(item.label)}
                                                    data-dropdown={item.label}
                                                    className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-600 hover:text-gray-900 transition-colors font-serif font-medium tracking-wide cursor-pointer"
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''
                                                        }`} />
                                                </button>

                                                {activeDropdown === item.label && (
                                                    <div
                                                        ref={(el) => { dropdownRefs.current[item.label] = el }}
                                                        className="pl-6 space-y-1"
                                                    >
                                                        {item.children?.map((child) => (
                                                            <button
                                                                key={child.label}
                                                                onClick={() => scrollToSection(child.href)}
                                                                className="w-full text-left px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer font-serif"
                                                            >
                                                                {child.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => scrollToSection(item.href)}
                                                className="w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors font-serif font-medium tracking-wide cursor-pointer"
                                            >
                                                {item.label}
                                            </button>
                                        )}
                                    </div>
                                ))}

                                {/* Mobile Get Started Button */}
                                <div className="pt-4 border-t border-gray-100">
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="navbar-btn-primary w-full"
                                    >
                                        <span>Get started</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}