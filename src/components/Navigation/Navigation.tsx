import React, { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'

const Navigation: React.FC = () => {
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="text-2xl font-bold cursor-pointer hover:scale-105 transition-transform"
              onClick={scrollToTop}
            >
              <span className="text-white">Nord</span>
              <span className="gradient-text">AI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToTop()
                }}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.home')}
              </a>

              <a
                href="#approach"
                onClick={(e) => scrollToSection(e, 'approach')}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.approach')}
              </a>

              <a
                href="#case-studies"
                onClick={(e) => scrollToSection(e, 'case-studies')}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.outcomes')}
              </a>

              <a
                href="#community"
                onClick={(e) => scrollToSection(e, 'community')}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.community')}
              </a>

              <a
                href="#pricing"
                onClick={(e) => scrollToSection(e, 'pricing')}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.subscriptions')}
              </a>

              <a
                href="#faq"
                onClick={(e) => scrollToSection(e, 'faq')}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.faq')}
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
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-md hover:shadow-blue-500/25 hover:scale-105"
              >
                {t('nav.contact')}
              </button>
            </div>

            {/* Desktop Language Switcher */}
            <div className="flex items-center space-x-3">
              <LanguageSwitcher />

              {/* Mobile Hamburger */}
              <button
                className="md:hidden flex flex-col space-y-1 p-2"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <span
                  className={`w-5 h-0.5 bg-white transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-white transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-white transition-transform duration-300 ${
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
