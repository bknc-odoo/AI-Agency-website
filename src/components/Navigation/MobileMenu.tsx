import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation()

  const handleLinkClick = () => {
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
          <a
            href="#services"
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={handleLinkClick}
          >
            {t('nav.services')}
          </a>
          <a
            href="#approach"
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={handleLinkClick}
          >
            {t('nav.approach')}
          </a>
          <a
            href="#team"
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={handleLinkClick}
          >
            {t('nav.team')}
          </a>
          <a
            href="https://www.nordgaimer.coach"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={handleLinkClick}
          >
            {t('nav.mentorship')}
          </a>

          <button
            className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-6 py-3 text-lg font-semibold text-slate-900 transition-colors hover:bg-cyan-300"
            onClick={handleLinkClick}
          >
            {t('nav.getStarted')}
          </button>

          <LanguageSwitcher variant="mobile" className="mt-8" />
        </nav>
      </div>
    </>
  )
}

export default MobileMenu