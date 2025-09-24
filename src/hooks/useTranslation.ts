import { createContext, useContext } from 'react'
import { Language, TranslationContextType } from '@/types'
import enTranslations from '@/translations/en.json'
import uaTranslations from '@/translations/ua.json'

const translations = {
  en: enTranslations,
  ua: uaTranslations,
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

export const getTranslation = (language: Language, key: string): string => {
  const keys = key.split('.')
  let value: any = translations[language]

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      console.warn(`Translation key "${key}" not found for language "${language}"`)
      return key
    }
  }

  return typeof value === 'string' ? value : key
}