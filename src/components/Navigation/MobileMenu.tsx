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
        <nav className="flex flex-col items-center space-y-8">
          <a
            href="#services"
            className="text-2xl text-foreground hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            {t('nav.services')}
          </a>
          <a
            href="#approach"
            className="text-2xl text-foreground hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            {t('nav.approach')}
          </a>
          <a
            href="#team"
            className="text-2xl text-foreground hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            {t('nav.team')}
          </a>

          <button
            className="btn-primary text-lg px-6 py-3"
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