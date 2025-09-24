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
                href="#services"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.services')}
              </a>

              {/* AI Solutions Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsAiSolutionsOpen(!isAiSolutionsOpen)}
                >
                  {t('nav.aiSolutions')}
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
                  className={`absolute top-full left-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-lg rounded-lg border border-slate-700 py-2 transition-all duration-200 ${
                    isAiSolutionsOpen
                      ? 'opacity-100 visible transform translate-y-0'
                      : 'opacity-0 invisible transform -translate-y-2'
                  }`}
                >
                  <a
                    href="#capabilities"
                    className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                    onClick={() => setIsAiSolutionsOpen(false)}
                  >
                    {t('nav.aiCapabilities')}
                  </a>
                  <a
                    href="#agents-gallery"
                    className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                    onClick={() => setIsAiSolutionsOpen(false)}
                  >
                    {t('nav.customAgents')}
                  </a>
                  <a
                    href="#data-showcase"
                    className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                    onClick={() => setIsAiSolutionsOpen(false)}
                  >
                    {t('nav.dataProcessing')}
                  </a>
                </div>
              </div>

              <a
                href="#approach"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.approach')}
              </a>
              <a
                href="#team"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.team')}
              </a>
              <a
                href="https://www.nordgaimer.coach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.mentorship')}
              </a>
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-cyan-300">
                {t('nav.getStarted')}
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