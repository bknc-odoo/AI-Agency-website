import React, { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useScrollGlow } from '@/hooks/useScrollGlow'
import enTranslations from '@/translations/en.json'
import uaTranslations from '@/translations/ua.json'

interface CaseStudy {
  id: string
  title: string
  problem: string
  work: string
  outcome: string
  roiBreakdown: string
  icon: string
}

const CaseStudies: React.FC = () => {
  const { t, language } = useTranslation()
  const translations = language === 'en' ? enTranslations : uaTranslations
  const { ref: titleRef, isInView } = useScrollGlow(0.3)
  const [currentIndex, setCurrentIndex] = useState(0)

  const cases: CaseStudy[] = translations.caseStudies.cases || []

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= cases.length ? 0 : prevIndex + 3
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(0, cases.length - 3) : prevIndex - 3
    )
  }

  const visibleCases = cases.slice(currentIndex, currentIndex + 3)

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'contacts':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 'email':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13l-3-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="8" r="2" fill="currentColor"/>
          </svg>
        )
      case 'phone':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="2"/>
          </svg>
        )
      case 'dashboard':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 'video':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
            <circle cx="18" cy="10" r="1.5" fill="currentColor"/>
          </svg>
        )
      case 'map':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 2v16M16 6v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 'users':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 'database':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="2"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="case-studies" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-900/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-white mb-6 title-glow-on-scroll ${isInView ? 'in-view' : ''}`}
          >
            {t('caseStudies.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('caseStudies.subtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-slate-800/80 border border-cyan-400/30 text-cyan-400 hover:bg-slate-800 hover:border-cyan-400 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous cases"
            disabled={currentIndex === 0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-slate-800/80 border border-cyan-400/30 text-cyan-400 hover:bg-slate-800 hover:border-cyan-400 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next cases"
            disabled={currentIndex + 3 >= cases.length}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Carousel Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-12 mb-8">
            {visibleCases.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="tech-card rounded-xl overflow-hidden p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                    {getIcon(caseStudy.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 text-center">{caseStudy.title}</h3>

                {/* Problem */}
                <div className="mb-3">
                  <p className="text-xs text-cyan-400 font-semibold mb-1">{t('caseStudies.problemLabel')}</p>
                  <p className="text-sm text-slate-300">{caseStudy.problem}</p>
                </div>

                {/* Our Work */}
                <div className="mb-3">
                  <p className="text-xs text-cyan-400 font-semibold mb-1">{t('caseStudies.workLabel')}</p>
                  <p className="text-sm text-slate-300">{caseStudy.work}</p>
                </div>

                {/* Outcome */}
                <div className="mb-3">
                  <p className="text-xs text-cyan-400 font-semibold mb-1">{t('caseStudies.outcomeLabel')}</p>
                  <p className="text-sm text-slate-300">{caseStudy.outcome}</p>
                </div>

                {/* ROI Breakdown */}
                <div className="mt-4 pt-4 border-t border-cyan-400/20">
                  <p className="text-xs text-green-400 font-semibold mb-1">{t('caseStudies.roiLabel')}</p>
                  <p className="text-sm text-slate-300">{caseStudy.roiBreakdown}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: Math.ceil(cases.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 3) === index
                    ? 'w-8 bg-cyan-400'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl text-slate-300 mb-6">
            {t('caseStudies.ctaText')}
          </p>
          <a
            href="#pricing"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            {t('caseStudies.ctaButton')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
