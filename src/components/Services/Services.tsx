import React, { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { StrategyIcon, RobotIcon, AnalyticsIcon, AutomationIcon } from '@/components/Icons/Icons'
import enTranslations from '@/translations/en.json'
import uaTranslations from '@/translations/ua.json'

interface Service {
  key: string
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const Services: React.FC = () => {
  const { t, language } = useTranslation()
  const translations = language === 'en' ? enTranslations : uaTranslations
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const services: Service[] = [
    {
      key: 'strategy',
      icon: <StrategyIcon size={48} className="text-cyan-400" />,
      title: t('services.strategy.title'),
      description: t('services.strategy.description'),
      features: translations.services.strategy.features
    },
    {
      key: 'agents',
      icon: <RobotIcon size={48} className="text-cyan-400" />,
      title: t('services.agents.title'),
      description: t('services.agents.description'),
      features: translations.services.agents.features
    },
    {
      key: 'analytics',
      icon: <AnalyticsIcon size={48} className="text-cyan-400" />,
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
      features: translations.services.analytics.features
    },
    {
      key: 'automation',
      icon: <AutomationIcon size={48} className="text-cyan-400" />,
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      features: translations.services.automation.features
    }
  ]

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-800/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-glow">
            {t('services.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.key}
              className="tech-card digital-noise rounded-2xl p-8 group hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              onClick={() => setSelectedService(service)}
            >
              {/* Icon with glow effect */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full scale-150 group-hover:scale-200 transition-transform duration-300"></div>
                  <div className="relative z-10">{service.icon}</div>
                </div>
              </div>

              {/* Title with gradient effect */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {service.description}
              </p>

              {/* Learn More Button */}
              <button
                className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-400/10 to-blue-500/10 text-cyan-400 font-semibold hover:from-cyan-400/20 hover:to-blue-500/20 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedService(service)
                }}
              >
                Learn More
              </button>

              {/* Holographic border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Selected Service Modal */}
        {selectedService && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-slate-900 rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-cyan-400/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Service Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full scale-150"></div>
                  <div className="relative z-10">{selectedService.icon}</div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 text-center">{selectedService.title}</h3>
              <p className="text-slate-300 mb-8 text-center text-lg">{selectedService.description}</p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {selectedService.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-800/30 rounded-lg p-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Additional Information */}
              <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">Implementation Process</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center font-bold">1</span>
                    <p className="text-slate-300">Initial consultation to understand your needs</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center font-bold">2</span>
                    <p className="text-slate-300">Custom solution design and planning</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center font-bold">3</span>
                    <p className="text-slate-300">Implementation and integration</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center font-bold">4</span>
                    <p className="text-slate-300">Ongoing support and optimization</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                  onClick={() => setSelectedService(null)}
                >
                  Get Started
                </button>
                <button
                  className="px-8 py-3 rounded-lg border border-slate-600 text-slate-300 font-semibold hover:border-cyan-400 hover:text-white transition-colors"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services