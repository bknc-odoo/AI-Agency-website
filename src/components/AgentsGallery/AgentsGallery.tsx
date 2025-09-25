import React, { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import enTranslations from '@/translations/en.json'
import uaTranslations from '@/translations/ua.json'

interface Agent {
  id: string
  name: string
  role: string
  description: string
  capabilities: string[]
  metrics: {
    efficiency: string
    accuracy: string
  }
  gradient: string
}

const AgentsGallery: React.FC = () => {
  const { t, language } = useTranslation()
  const translations = language === 'en' ? enTranslations : uaTranslations
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const agents: Agent[] = translations.agentsGallery.agents || []

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= agents.length ? 0 : prevIndex + 3
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(0, agents.length - 3) : prevIndex - 3
    )
  }

  const visibleAgents = agents.slice(currentIndex, currentIndex + 3)

  return (
    <section id="agents-gallery" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-glow">
            {t('agentsGallery.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('agentsGallery.subtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-slate-800/80 border border-cyan-400/30 text-cyan-400 hover:bg-slate-800 hover:border-cyan-400 transition-all duration-300"
            aria-label="Previous agents"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-slate-800/80 border border-cyan-400/30 text-cyan-400 hover:bg-slate-800 hover:border-cyan-400 transition-all duration-300"
            aria-label="Next agents"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Carousel Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-12">
            {visibleAgents.map((agent) => (
              <div
                key={agent.id}
                className="group relative tech-card rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedAgent(agent)}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${agent.gradient}`} />

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{agent.name}</h3>
                      <p className="text-cyan-400 text-sm">{agent.role}</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                        <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 7v4l-3 3m6-3l-3-3" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="8" cy="16" r="1" fill="currentColor"/>
                        <circle cx="16" cy="16" r="1" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4">{agent.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-center">
                      <p className="text-xs text-slate-500">Efficiency</p>
                      <p className="text-sm font-bold text-cyan-400">{agent.metrics.efficiency}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500">Accuracy</p>
                      <p className="text-sm font-bold text-green-400">{agent.metrics.accuracy}</p>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full py-2 rounded-lg bg-cyan-400/10 text-cyan-400 font-semibold hover:bg-cyan-400/20 transition-colors duration-300">
                    View Details
                  </button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(agents.length / 3) }).map((_, index) => (
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

        {/* Selected Agent Modal */}
        {selectedAgent && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedAgent(null)}
          >
            <div
              className="bg-slate-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-cyan-400/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-2 bg-gradient-to-r ${selectedAgent.gradient} rounded-full mb-6`} />

              <h3 className="text-3xl font-bold text-white mb-2">{selectedAgent.name}</h3>
              <p className="text-cyan-400 mb-4">{selectedAgent.role}</p>
              <p className="text-slate-300 mb-6">{selectedAgent.description}</p>

              <h4 className="text-xl font-semibold text-white mb-4">Full Capabilities</h4>
              <div className="space-y-3 mb-6">
                {selectedAgent.capabilities.map((cap, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                    <p className="text-slate-300">{cap}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <p className="text-slate-500 mb-1">Efficiency</p>
                  <p className="text-2xl font-bold text-cyan-400">{selectedAgent.metrics.efficiency}</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <p className="text-slate-500 mb-1">Accuracy</p>
                  <p className="text-2xl font-bold text-green-400">{selectedAgent.metrics.accuracy}</p>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                  onClick={() => setSelectedAgent(null)}
                >
                  Get Started with This Agent
                </button>
                <button
                  className="px-8 py-3 rounded-lg border border-slate-600 text-slate-300 font-semibold hover:border-cyan-400 hover:text-white transition-colors"
                  onClick={() => setSelectedAgent(null)}
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

export default AgentsGallery