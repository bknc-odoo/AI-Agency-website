export type Language = 'en' | 'ua'

export interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

export interface NavigationItem {
  key: string
  href: string
  label: string
}