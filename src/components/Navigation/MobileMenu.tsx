import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation()

  const handleLinkClick = (sectionId?: string) => {
    if (sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-white hover:text-cyan-400 transition-colors"
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <nav className="flex flex-col items-center space-y-8">
          <button
            onClick={() => handleLinkClick()}
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {t('nav.home')}
          </button>

          <button
            onClick={() => handleLinkClick('approach')}
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {t('nav.approach')}
          </button>

          <button
            onClick={() => handleLinkClick('case-studies')}
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {t('nav.outcomes')}
          </button>

          <button
            onClick={() => handleLinkClick('community')}
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {t('nav.community')}
          </button>

          <button
            onClick={() => handleLinkClick('pricing')}
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {t('nav.subscriptions')}
          </button>

          <button
            onClick={() => handleLinkClick('faq')}
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {t('nav.faq')}
          </button>

          <button
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:shadow-md hover:shadow-blue-500/25 hover:scale-105"
            onClick={() => handleLinkClick('contact')}
          >
            {t('nav.contact')}
          </button>

          <LanguageSwitcher variant="mobile" className="mt-8" />
        </nav>
      </div>
    </>
  )
}

export default MobileMenu
