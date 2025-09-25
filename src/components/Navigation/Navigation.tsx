import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'

const Navigation: React.FC = () => {
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAiSolutionsOpen, setIsAiSolutionsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAiSolutionsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsAiSolutionsOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-soft'
            : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="text-2xl font-bold font-heading cursor-pointer hover:scale-105 transition-transform"
              onClick={scrollToTop}
            >
              <span className="text-foreground">Nord</span>
              <span className="gradient-text">AI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="nav-link"
              >
                {t('nav.services')}
              </a>

              {/* AI Solutions Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsAiSolutionsOpen(true)}
                onMouseLeave={() => setIsAiSolutionsOpen(false)}
              >
                <button
                  className="flex items-center nav-link"
                  onClick={() => setIsAiSolutionsOpen(!isAiSolutionsOpen)}
                >
                  AI Solutions
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`ml-1 transform transition-transform ${
                      isAiSolutionsOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-xl shadow-medium py-2 transition-all duration-200 ${
                    isAiSolutionsOpen
                      ? 'opacity-100 visible transform translate-y-0'
                      : 'opacity-0 invisible transform -translate-y-2'
                  }`}
                >
                  <a
                    href="#capabilities"
                    className="block px-4 py-3 text-foreground-muted hover:text-foreground hover:bg-background-secondary transition-colors rounded-lg mx-2"
                    onClick={(e) => scrollToSection(e, 'capabilities')}
                  >
                    AI Capabilities
                  </a>
                  <a
                    href="#agents-gallery"
                    className="block px-4 py-3 text-foreground-muted hover:text-foreground hover:bg-background-secondary transition-colors rounded-lg mx-2"
                    onClick={(e) => scrollToSection(e, 'agents-gallery')}
                  >
                    Custom Agents
                  </a>
                  <a
                    href="#data-showcase"
                    className="block px-4 py-3 text-foreground-muted hover:text-foreground hover:bg-background-secondary transition-colors rounded-lg mx-2"
                    onClick={(e) => scrollToSection(e, 'data-showcase')}
                  >
                    Data Processing
                  </a>
                </div>
              </div>

              <a
                href="#approach"
                onClick={(e) => scrollToSection(e, 'approach')}
                className="nav-link"
              >
                {t('nav.approach')}
              </a>
              <a
                href="#team"
                onClick={(e) => scrollToSection(e, 'team')}
                className="nav-link"
              >
                {t('nav.team')}
              </a>

              <button
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('contact')
                  if (element) {
                    const offset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - offset
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    })
                  }
                }}
                className="btn-primary"
              >
                {t('nav.getStarted')}
              </button>
            </div>

            {/* Right side - Language Switcher and Mobile Menu */}
            <div className="flex items-center space-x-3">
              <LanguageSwitcher />

              {/* Mobile Hamburger */}
              <button
                className="md:hidden flex flex-col space-y-1 p-2 focus-ring"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <span
                  className={`w-5 h-0.5 bg-foreground transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-foreground transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-foreground transition-transform duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}

export default Navigation