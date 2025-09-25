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
          className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all duration-300 ${
            language === 'en'
              ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white border-transparent shadow-md'
              : 'bg-transparent text-white border-slate-600 hover:border-blue-500 hover:bg-blue-500/10'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => handleLanguageChange('ua')}
          className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all duration-300 ${
            language === 'ua'
              ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white border-transparent shadow-md'
              : 'bg-transparent text-white border-slate-600 hover:border-blue-500 hover:bg-blue-500/10'
          }`}
        >
          UA
        </button>
      </div>
    )
  }

  return (
    <div className={`hidden md:flex items-center bg-slate-800/50 rounded-lg p-1 border border-slate-600/30 ${className}`}>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-300 ${
          language === 'en'
            ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white shadow-md'
            : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('ua')}
        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-300 ${
          language === 'ua'
            ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white shadow-md'
            : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
        }`}
      >
        UA
      </button>
    </div>
  )
}

export default LanguageSwitcher