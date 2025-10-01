import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useScrollGlow } from '@/hooks/useScrollGlow'
import { SearchIcon, BlueprintIcon, RobotIcon, ChartUpIcon } from '@/components/Icons/Icons'

const Approach: React.FC = () => {
  const { t } = useTranslation()
  const { ref: titleRef, isInView } = useScrollGlow(0.3)

  const steps = [
    {
      key: 'discovery',
      number: '01',
      title: t('approach.steps.discovery.title'),
      description: t('approach.steps.discovery.description'),
      altText: t('approach.steps.discovery.altText'),
      icon: <SearchIcon size={40} className="text-cyan-400" />
    },
    {
      key: 'strategy',
      number: '02',
      title: t('approach.steps.strategy.title'),
      description: t('approach.steps.strategy.description'),
      altText: t('approach.steps.strategy.altText'),
      icon: <BlueprintIcon size={40} className="text-cyan-400" />
    },
    {
      key: 'development',
      number: '03',
      title: t('approach.steps.development.title'),
      description: t('approach.steps.development.description'),
      altText: t('approach.steps.development.altText'),
      icon: <RobotIcon size={40} className="text-cyan-400" />
    },
    {
      key: 'integration',
      number: '04',
      title: t('approach.steps.integration.title'),
      description: t('approach.steps.integration.description'),
      altText: t('approach.steps.integration.altText'),
      icon: <ChartUpIcon size={40} className="text-cyan-400" />
    }
  ]

  return (
    <section id="approach" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-800/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-white mb-6 title-glow-on-scroll ${isInView ? 'in-view' : ''}`}
          >
            {t('approach.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('approach.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.key} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent z-10"></div>
              )}

              <div
                className="tech-card digital-noise rounded-2xl p-8 h-full group hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative mr-4" role="img" aria-label={step.altText}>
                    <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full scale-150 group-hover:scale-200 transition-transform duration-300"></div>
                    <div className="relative z-10">{step.icon}</div>
                  </div>
                  <span className="text-4xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">{step.number}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">{step.description}</p>

                {/* Holographic border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
            {t('approach.ctaText')}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Approach