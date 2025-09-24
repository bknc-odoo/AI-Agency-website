import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { SearchIcon, TargetIcon, CodeIcon, RocketIcon } from '@/components/Icons/Icons'

const Approach: React.FC = () => {
  const { t } = useTranslation()

  const steps = [
    {
      key: 'discovery',
      number: '01',
      title: t('approach.steps.discovery.title'),
      description: t('approach.steps.discovery.description'),
      icon: <SearchIcon size={40} className="text-cyan-400" />
    },
    {
      key: 'strategy',
      number: '02',
      title: t('approach.steps.strategy.title'),
      description: t('approach.steps.strategy.description'),
      icon: <TargetIcon size={40} className="text-cyan-400" />
    },
    {
      key: 'development',
      number: '03',
      title: t('approach.steps.development.title'),
      description: t('approach.steps.development.description'),
      icon: <CodeIcon size={40} className="text-cyan-400" />
    },
    {
      key: 'integration',
      number: '04',
      title: t('approach.steps.integration.title'),
      description: t('approach.steps.integration.description'),
      icon: <RocketIcon size={40} className="text-cyan-400" />
    }
  ]

  return (
    <section id="approach" className="py-20 px-4 bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
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

              <div className="tech-card rounded-2xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="mr-4">{step.icon}</div>
                  <span className="text-4xl font-bold text-cyan-400">{step.number}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach