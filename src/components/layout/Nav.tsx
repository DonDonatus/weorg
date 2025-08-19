'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

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
            { label: 'About Us', href: '/about', type: 'link' },
            { label: 'Board & Governance', href: '/leadership', type: 'link' }
        ]
    },
    {
        label: 'SERVICES',
        href: '#services',
        type: 'dropdown',
        children: [
            { label: 'Solutions', href: '/solutions', type: 'link' },
            { label: 'Partnerships', href: '/partnership', type: 'link' },
        ]
    },
    {
        label: 'RESEARCH',
        href: '#research',
        type: 'dropdown',
        children: [
            { label: 'AI Research Lab', href: '#ai-lab', type: 'link' },
            { label: 'News & Updates', href: '/news', type: 'link' }
        ]
    },
    {
        label: 'JOIN US',
        href: '#join',
        type: 'dropdown',
        children: [
            { label: 'Careers/fellowship', href: '/fellowship', type: 'link' },
            { label: 'Contact Us', href: '/contact', type: 'link' }
        ]
    }
]

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
    const menuButtonRef = useRef<HTMLButtonElement>(null)

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

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                if (activeDropdown) {
                    setActiveDropdown(null)
                } else if (isMenuOpen) {
                    setIsMenuOpen(false)
                    menuButtonRef.current?.focus()
                }
            }
        }

        if (isMenuOpen || activeDropdown) {
            document.addEventListener('keydown', handleKeyDown)
            return () => document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isMenuOpen, activeDropdown])

    const scrollToSection = (href: string) => {
        if (href.startsWith('/')) {
            // Internal page link
            window.location.href = href
        } else {
            // Anchor link
            const element = document.getElementById(href.replace('#', ''))
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
        setIsMenuOpen(false)
        setActiveDropdown(null)
    }

    const handleDropdownToggle = (label: string) => {
        if (activeDropdown === label) {
            setActiveDropdown(null)
        } else {
            setActiveDropdown(label)
        }
    }

    return (
        <header 
            ref={headerRef} 
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800/20'
                    : 'bg-transparent'
            }`}
            role="banner"
        >
            {/* Main navigation */}
            <nav 
                className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-700"
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/" className="cursor-pointer">
                                <Image
                                    src="/logo_full_b.png"
                                    alt="WE Org"
                                    width={120}
                                    height={40}
                                    className="h-10 w-auto dark:hidden hover:opacity-80 transition-opacity"
                                    priority
                                />
                                <Image
                                    src="/logo_full_w.png"
                                    alt="WE Org"
                                    width={120}
                                    height={40}
                                    className="h-10 w-auto hidden dark:block hover:opacity-80 transition-opacity"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {navItems.map((item) => (
                                <div key={item.label} className="relative">
                                    {item.type === 'dropdown' ? (
                                        <div className="relative">
                                            <button
                                                onClick={() => handleDropdownToggle(item.label)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        e.preventDefault()
                                                        handleDropdownToggle(item.label)
                                                    }
                                                }}
                                                aria-expanded={activeDropdown === item.label}
                                                aria-haspopup="true"
                                                aria-controls={`dropdown-${item.label.toLowerCase()}`}
                                                className="flex items-center space-x-1 px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-serif font-medium tracking-wide cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded"
                                            >
                                                <span>{item.label}</span>
                                                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} aria-hidden="true" />
                                            </button>

                                            {activeDropdown === item.label && (
                                                <div
                                                    id={`dropdown-${item.label.toLowerCase()}`}
                                                    ref={(el) => { dropdownRefs.current[item.label] = el }}
                                                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 py-2 z-50"
                                                    role="menu"
                                                    aria-orientation="vertical"
                                                >
                                                    {item.children?.map((child) => (
                                                        <button
                                                            key={child.label}
                                                            onClick={() => scrollToSection(child.href)}
                                                            className="w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer font-serif focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700"
                                                            role="menuitem"
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
                                            className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-serif font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded"
                                        >
                                            {item.label}
                                        </button>
                                    )}
                                </div>
                            ))}

                            {/* Get Started Button */}
                            <div className="ml-6">
                                <button
                                    onClick={() => scrollToSection('/contact')}
                                    className="navbar-btn-primary"
                                    aria-label="Get started with WE Org"
                                >
                                    <span>Get Started</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                ref={menuButtonRef}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-expanded={isMenuOpen}
                                aria-controls="mobile-menu"
                                aria-label="Toggle mobile menu"
                                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div 
                        id="mobile-menu"
                        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                        }`}
                        aria-hidden={!isMenuOpen}
                    >
                        <div className="border-gray-100 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-900 p-4 space-y-2 m-4 rounded-lg">
                            {navItems.map((item) => (
                                <div key={item.label} className="border-b border-gray-50 dark:border-gray-700 pb-2">
                                    {item.type === 'dropdown' ? (
                                        <div>
                                            <button
                                                onClick={() => handleDropdownToggle(item.label)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        e.preventDefault()
                                                        handleDropdownToggle(item.label)
                                                    }
                                                }}
                                                aria-expanded={activeDropdown === item.label}
                                                aria-haspopup="true"
                                                aria-controls={`mobile-dropdown-${item.label.toLowerCase()}`}
                                                data-dropdown={item.label}
                                                className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-all duration-200 font-serif font-medium tracking-wide cursor-pointer rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                            >
                                                <span>{item.label}</span>
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} aria-hidden="true" />
                                            </button>

                                            <div 
                                                id={`mobile-dropdown-${item.label.toLowerCase()}`}
                                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                                    activeDropdown === item.label ? 'max-h-32 opacity-100 mt-1' : 'max-h-0 opacity-0'
                                                }`}
                                                role="region"
                                                aria-hidden={!activeDropdown}
                                            >
                                                <div className="pl-6 space-y-1">
                                                    {item.children?.map((child) => (
                                                        <button
                                                            key={child.label}
                                                            onClick={() => scrollToSection(child.href)}
                                                            className="w-full text-left px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-200 cursor-pointer font-serif text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-800"
                                                        >
                                                            {child.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => scrollToSection(item.href)}
                                            className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-all duration-200 font-serif font-medium tracking-wide cursor-pointer rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                        >
                                            {item.label}
                                        </button>
                                    )}
                                </div>
                            ))}

                            {/* Mobile Get Started Button */}
                            <div className="pt-4">
                                <button
                                    onClick={() => scrollToSection('/contact')}
                                    className="navbar-btn-primary w-full py-3 text-base font-medium flex items-center justify-center space-x-2"
                                    aria-label="Get started with WE Org on mobile"
                                >
                                    <span>Get Started</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

