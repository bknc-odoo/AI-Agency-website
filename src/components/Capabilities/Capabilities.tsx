import React, { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import enTranslations from '@/translations/en.json'
import uaTranslations from '@/translations/ua.json'

interface Capability {
  category: string
  icon: React.ReactNode
  color: string
  items: {
    title: string
    description: string
    metrics: string
  }[]
}

const Capabilities: React.FC = () => {
  const { t, language } = useTranslation()
  const translations = language === 'en' ? enTranslations : uaTranslations
  const [activeCategory, setActiveCategory] = useState(0)

  const capabilities: Capability[] = [
    {
      category: t('capabilities.categories.voice'),
      color: "from-cyan-400 to-blue-500",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="2"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      items: translations.capabilities.items.voice
    },
    {
      category: t('capabilities.categories.knowledge'),
      color: "from-purple-400 to-pink-500",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 13a3 3 0 1 0-6 0" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      items: translations.capabilities.items.knowledge
    },
    {
      category: t('capabilities.categories.automation'),
      color: "from-green-400 to-emerald-500",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 3v9l4 4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      items: translations.capabilities.items.automation
    },
    {
      category: t('capabilities.categories.custom'),
      color: "from-orange-400 to-red-500",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M20 7h-9" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 17H5" stroke="currentColor" strokeWidth="2"/>
          <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M5 17a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 7a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      items: translations.capabilities.items.custom
    }
  ]

  return (
    <section id="capabilities" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-glow">
            {t('capabilities.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('capabilities.subtitle')}
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {capabilities.map((cap, index) => (
            <button
              key={cap.category}
              onClick={() => setActiveCategory(index)}
              className={`
                flex items-center gap-3 px-6 py-3 rounded-lg border transition-all duration-300
                ${activeCategory === index
                  ? 'bg-gradient-to-r ' + cap.color + ' text-white border-transparent shadow-lg shadow-cyan-400/25'
                  : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-cyan-400/50'
                }
              `}
            >
              <div className="w-8 h-8">{cap.icon}</div>
              <span className="font-semibold">{cap.category}</span>
            </button>
          ))}
        </div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities[activeCategory].items.map((item, index) => (
            <div
              key={item.title}
              className="tech-card digital-noise rounded-xl p-6 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-300 mb-4">{item.description}</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm text-cyan-400 font-mono">{item.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 hidden">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 glow-effect hover:scale-105">
            {t('capabilities.cta')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17l9.2-9.2M17 17V7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Capabilities