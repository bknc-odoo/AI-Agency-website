import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const Services: React.FC = () => {
  const { t } = useTranslation()

  const services = [
    {
      key: 'strategy',
      icon: '🎯',
      title: t('services.strategy.title'),
      description: t('services.strategy.description'),
      features: ['Strategic Planning', 'ROI Analysis', 'Implementation Roadmap', 'Risk Assessment']
    },
    {
      key: 'agents',
      icon: '🤖',
      title: t('services.agents.title'),
      description: t('services.agents.description'),
      features: ['Executive Assistant Agents', 'Content Creation Agents', 'Lead Generation Agents', 'Internal Strategy Agents']
    },
    {
      key: 'analytics',
      icon: '📊',
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Data Mining', 'Business Intelligence']
    },
    {
      key: 'automation',
      icon: '⚡',
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      features: ['Workflow Automation', 'RPA Integration', 'Smart Chatbots', 'AI Analysts']
    }
  ]

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services