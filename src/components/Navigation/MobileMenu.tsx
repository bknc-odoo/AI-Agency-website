import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation()
  const [isSolutionsOpen, setIsSolutionsOpen] = React.useState(false)

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
    setIsSolutionsOpen(false)
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

        <nav className="flex flex-col items-center space-y-6">
          <button
            onClick={() => handleLinkClick()}
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {t('nav.home')}
          </button>

          {/* Solutions Accordion */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              {t('nav.solutions')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`}>
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Solutions Submenu */}
            <div className={`flex flex-col items-center space-y-4 mt-4 overflow-hidden transition-all duration-300 ${isSolutionsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <button
                onClick={() => handleLinkClick('approach')}
                className="text-lg text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {t('nav.solutionsDropdown.approach')}
              </button>
              <button
                onClick={() => handleLinkClick('case-studies')}
                className="text-lg text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {t('nav.solutionsDropdown.outcomes')}
              </button>
              <button
                onClick={() => handleLinkClick('how-it-works')}
                className="text-lg text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {t('nav.solutionsDropdown.howItWorks')}
              </button>
              <button
                onClick={() => handleLinkClick('pricing')}
                className="text-lg text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {t('nav.solutionsDropdown.subscriptions')}
              </button>
            </div>
          </div>

          <button
            onClick={() => handleLinkClick('community')}
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {t('nav.community')}
          </button>

          <button
            onClick={() => handleLinkClick('faq')}
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {t('nav.faq')}
          </button>

          <a
            href="https://mentorship.nordai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
          >
            {t('nav.mentorship')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

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
