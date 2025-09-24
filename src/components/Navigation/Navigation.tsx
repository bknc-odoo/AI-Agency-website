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

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-lg border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="text-foreground">Nord</span>
              <span className="gradient-text">AI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#services"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t('nav.services')}
              </a>
              <a
                href="#approach"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t('nav.approach')}
              </a>
              <a
                href="#team"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t('nav.team')}
              </a>
              <button className="btn-primary">
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