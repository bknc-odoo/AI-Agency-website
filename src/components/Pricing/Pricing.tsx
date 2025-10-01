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
        {/* Title & Introduction */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-white mb-6 title-glow-on-scroll ${isInView ? 'in-view' : ''}`}
          >
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {t('pricing.intro')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Start Small */}
          <div className="tech-card rounded-xl overflow-hidden p-6 relative hover:border-cyan-400/50 transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-3">{t('pricing.plans.startSmall.name')}</h3>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-cyan-400">$300</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <div className="text-sm text-slate-400">
                  <p>{t('pricing.plans.startSmall.discount6m')}</p>
                  <p>{t('pricing.plans.startSmall.discount12m')}</p>
                </div>
              </div>

              {/* Time Dedication */}
              <div className="flex items-center gap-2 text-sm text-green-400 mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>{t('pricing.plans.startSmall.timeDedication')}</span>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-cyan-400 mb-3">{t('pricing.whatsIncluded')}</h4>
              <ul className="space-y-2">
                {(() => {
                  const features = t('pricing.plans.startSmall.features');
                  return (Array.isArray(features) ? features : []).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-cyan-400 flex-shrink-0 mt-0.5">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ));
                })()}
              </ul>
            </div>

            {/* Advantages */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-green-400 mb-3">{t('pricing.advantages')}</h4>
              <ul className="space-y-2">
                {(() => {
                  const advantages = t('pricing.plans.startSmall.advantages');
                  return (Array.isArray(advantages) ? advantages : []).map((advantage: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-green-400">✓</span>
                      <span>{advantage}</span>
                    </li>
                  ));
                })()}
              </ul>
            </div>

            <button
              onClick={scrollToContact}
              className="w-full px-6 py-3 rounded-lg bg-slate-800 border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-slate-700 hover:border-cyan-400 transition-all duration-300"
            >
              {t('pricing.cta')}
            </button>
          </div>

          {/* Go Big */}
          <div className="tech-card rounded-xl overflow-visible p-6 relative hover:border-cyan-400/50 transition-all duration-300 md:scale-105 border-cyan-400/40">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-400 to-emerald-500 text-slate-900 text-xs font-bold px-4 py-1 rounded-full z-10 whitespace-nowrap">
              ⭐ {t('pricing.popular')}
            </div>

            <div className="mb-6 mt-2">
              <h3 className="text-2xl font-bold text-white mb-3">{t('pricing.plans.goBig.name')}</h3>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-cyan-400">$600</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <div className="text-sm text-slate-400">
                  <p>{t('pricing.plans.goBig.discount6m')}</p>
                  <p>{t('pricing.plans.goBig.discount12m')}</p>
                </div>
              </div>

              {/* Time Dedication */}
              <div className="flex items-center gap-2 text-sm text-green-400 mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>{t('pricing.plans.goBig.timeDedication')}</span>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-cyan-400 mb-3">{t('pricing.whatsIncluded')}</h4>
              <ul className="space-y-2">
                {(() => {
                  const features = t('pricing.plans.goBig.features');
                  return (Array.isArray(features) ? features : []).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-cyan-400 flex-shrink-0 mt-0.5">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ));
                })()}
              </ul>
            </div>

            {/* Advantages */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-green-400 mb-3">{t('pricing.advantages')}</h4>
              <ul className="space-y-2">
                {(() => {
                  const advantages = t('pricing.plans.goBig.advantages');
                  return (Array.isArray(advantages) ? advantages : []).map((advantage: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-green-400">✓</span>
                      <span>{advantage}</span>
                    </li>
                  ));
                })()}
              </ul>
            </div>

            <button
              onClick={scrollToContact}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
            >
              {t('pricing.cta')}
            </button>
          </div>

          {/* Full Involvement */}
          <div className="tech-card rounded-xl overflow-hidden p-6 relative hover:border-cyan-400/50 transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-3">{t('pricing.plans.fullInvolvement.name')}</h3>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-cyan-400">$1,200+</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <div className="text-sm text-slate-400">
                  <p>{t('pricing.plans.fullInvolvement.discount6m')}</p>
                  <p>{t('pricing.plans.fullInvolvement.discount12m')}</p>
                </div>
              </div>

              {/* Time Dedication */}
              <div className="flex items-center gap-2 text-sm text-green-400 mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>{t('pricing.plans.fullInvolvement.timeDedication')}</span>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-cyan-400 mb-3">{t('pricing.whatsIncluded')}</h4>
              <ul className="space-y-2">
                {(() => {
                  const features = t('pricing.plans.fullInvolvement.features');
                  return (Array.isArray(features) ? features : []).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-cyan-400 flex-shrink-0 mt-0.5">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ));
                })()}
              </ul>
            </div>

            {/* Advantages */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-green-400 mb-3">{t('pricing.advantages')}</h4>
              <ul className="space-y-2">
                {(() => {
                  const advantages = t('pricing.plans.fullInvolvement.advantages');
                  return (Array.isArray(advantages) ? advantages : []).map((advantage: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-green-400">✓</span>
                      <span>{advantage}</span>
                    </li>
                  ));
                })()}
              </ul>
            </div>

            <button
              onClick={scrollToContact}
              className="w-full px-6 py-3 rounded-lg bg-slate-800 border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-slate-700 hover:border-cyan-400 transition-all duration-300"
            >
              {t('pricing.cta')}
            </button>
          </div>
        </div>

        {/* Long-term vs Monthly Comparison */}
        <div className="max-w-5xl mx-auto mb-8">
          <h3 className="text-3xl font-bold text-white text-center mb-8">{t('pricing.comparison.title')}</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Long-term Benefits */}
            <div className="tech-card rounded-xl p-6 border-green-400/30">
              <div className="flex items-center gap-2 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-400">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h4 className="text-xl font-bold text-green-400">{t('pricing.comparison.longTerm.title')}</h4>
              </div>
              <ul className="space-y-3">
                {(() => {
                  const benefits = t('pricing.comparison.longTerm.benefits');
                  return (Array.isArray(benefits) ? benefits : []).map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ));
                })()}
              </ul>
            </div>

            {/* Monthly Risks */}
            <div className="tech-card rounded-xl p-6 border-orange-400/30">
              <div className="flex items-center gap-2 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-orange-400">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h4 className="text-xl font-bold text-orange-400">{t('pricing.comparison.monthly.title')}</h4>
              </div>
              <ul className="space-y-3">
                {(() => {
                  const risks = t('pricing.comparison.monthly.risks');
                  return (Array.isArray(risks) ? risks : []).map((risk: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <span className="text-orange-400 flex-shrink-0">⚠</span>
                      <span>{risk}</span>
                    </li>
                  ));
                })()}
              </ul>
            </div>
          </div>
        </div>

        {/* Scarcity Note */}
        <div className="text-center">
          <p className="text-lg text-yellow-400 font-semibold">
            {t('pricing.scarcity')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
