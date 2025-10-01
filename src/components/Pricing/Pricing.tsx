import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useScrollGlow } from '@/hooks/useScrollGlow'

const Pricing: React.FC = () => {
  const { t } = useTranslation()
  const { ref: titleRef, isInView } = useScrollGlow(0.3)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/20" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-white mb-6 title-glow-on-scroll ${isInView ? 'in-view' : ''}`}
          >
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Start Small */}
          <div className="tech-card rounded-xl overflow-hidden p-8 relative hover:border-cyan-400/50 transition-all duration-300">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
              {t('pricing.badge')}
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t('pricing.plans.startSmall.name')}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-cyan-400">$300</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-sm text-green-400 font-semibold mb-4">{t('pricing.plans.startSmall.highlight')}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {(() => {
                const features = t('pricing.plans.startSmall.features');
                return (Array.isArray(features) ? features : []).map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-cyan-400 flex-shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ));
              })()}
            </ul>

            <button
              onClick={scrollToContact}
              className="w-full px-6 py-3 rounded-lg bg-slate-800 border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-slate-700 hover:border-cyan-400 transition-all duration-300"
            >
              {t('pricing.cta')}
            </button>
          </div>

          {/* Go Big */}
          <div className="tech-card rounded-xl overflow-hidden p-8 relative hover:border-cyan-400/50 transition-all duration-300 md:scale-105 border-cyan-400/40">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
              {t('pricing.badge')}
            </div>

            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-400 to-emerald-500 text-slate-900 text-xs font-bold px-4 py-1 rounded-full">
              ⭐ {t('pricing.popular')}
            </div>

            <div className="mb-6 mt-2">
              <h3 className="text-2xl font-bold text-white mb-2">{t('pricing.plans.goBig.name')}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-cyan-400">$600</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-sm text-green-400 font-semibold mb-4">{t('pricing.plans.goBig.highlight')}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {(() => {
                const features = t('pricing.plans.goBig.features');
                return (Array.isArray(features) ? features : []).map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-cyan-400 flex-shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ));
              })()}
            </ul>

            <button
              onClick={scrollToContact}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
            >
              {t('pricing.cta')}
            </button>
          </div>

          {/* Full Involvement */}
          <div className="tech-card rounded-xl overflow-hidden p-8 relative hover:border-cyan-400/50 transition-all duration-300">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
              {t('pricing.badge')}
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t('pricing.plans.fullInvolvement.name')}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-cyan-400">$1,200+</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-sm text-green-400 font-semibold mb-4">{t('pricing.plans.fullInvolvement.highlight')}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {(() => {
                const features = t('pricing.plans.fullInvolvement.features');
                return (Array.isArray(features) ? features : []).map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-cyan-400 flex-shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ));
              })()}
            </ul>

            <button
              onClick={scrollToContact}
              className="w-full px-6 py-3 rounded-lg bg-slate-800 border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-slate-700 hover:border-cyan-400 transition-all duration-300"
            >
              {t('pricing.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
