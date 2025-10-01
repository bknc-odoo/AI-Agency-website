import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useScrollGlow } from '@/hooks/useScrollGlow'

const HowItWorks: React.FC = () => {
  const { t } = useTranslation()
  const { ref: titleRef, isInView } = useScrollGlow(0.3)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      const offset = 80
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const steps = [
    {
      key: 'step1',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <path d="M8 12h8M8 8h8M8 16h5M3 4h18a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" opacity="0.1"/>
          <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
          <path d="M17 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      key: 'step2',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <path d="M3 3h18v18H3z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 3v18M17 3v18M3 7h18M3 17h18" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        </svg>
      )
    },
    {
      key: 'step3',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
        </svg>
      )
    },
    {
      key: 'step4',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        </svg>
      )
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-900/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-white mb-6 title-glow-on-scroll ${isInView ? 'in-view' : ''}`}
          >
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className="relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Connecting Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[calc(50%+24px)] w-[calc(100%+2rem)] h-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent" />
              )}

              <div className="tech-card digital-noise rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 relative overflow-visible">
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-slate-900 font-bold text-sm shadow-lg z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full scale-150 group-hover:scale-200 transition-transform duration-300"></div>
                  <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {t(`howItWorks.steps.${step.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  {t(`howItWorks.steps.${step.key}.description`)}
                </p>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini FAQ */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="tech-card rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">
                      {t(`howItWorks.miniFaq.q${num}.question`)}
                    </h4>
                    <p className="text-sm text-slate-300">
                      {t(`howItWorks.miniFaq.q${num}.answer`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 glow-effect hover:scale-105"
          >
            {t('howItWorks.cta')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
