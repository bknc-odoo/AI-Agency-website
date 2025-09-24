import React, { useState, useEffect, ReactNode } from 'react'
import { TranslationContext, getTranslation } from '@/hooks/useTranslation'
import { Language } from '@/types'

interface TranslationProviderProps {
  children: ReactNode
}

const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('nordai-lang') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ua')) {
      setLanguageState(savedLanguage)
    }

    // Update document language attribute
    document.documentElement.lang = savedLanguage === 'ua' ? 'uk' : 'en'
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('nordai-lang', lang)
    document.documentElement.lang = lang === 'ua' ? 'uk' : 'en'
  }

  const t = (key: string): string => {
    return getTranslation(language, key)
  }

  const value = {
    language,
    setLanguage,
    t,
  }

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

export default TranslationProvider