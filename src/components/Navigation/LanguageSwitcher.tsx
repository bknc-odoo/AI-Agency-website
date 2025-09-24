import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { Language } from '@/types'

interface LanguageSwitcherProps {
  className?: string
  variant?: 'default' | 'mobile'
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  variant = 'default'
}) => {
  const { language, setLanguage } = useTranslation()

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
  }

  if (variant === 'mobile') {
    return (
      <div className={`flex gap-4 ${className}`}>
        <button
          onClick={() => handleLanguageChange('en')}
          className={`px-6 py-3 border-2 border-primary rounded-lg font-semibold transition-all ${
            language === 'en'
              ? 'bg-primary text-primary-foreground'
              : 'bg-transparent text-white hover:bg-primary/20'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => handleLanguageChange('ua')}
          className={`px-6 py-3 border-2 border-primary rounded-lg font-semibold transition-all ${
            language === 'ua'
              ? 'bg-primary text-primary-foreground'
              : 'bg-transparent text-white hover:bg-primary/20'
          }`}
        >
          UA
        </button>
      </div>
    )
  }

  return (
    <div className={`hidden md:flex items-center bg-card/80 rounded-lg p-1 border border-primary/20 ${className}`}>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
          language === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('ua')}
        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
          language === 'ua'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        UA
      </button>
    </div>
  )
}

export default LanguageSwitcher