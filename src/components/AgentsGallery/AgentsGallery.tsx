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

  const agents: Agent[] = translations.agentsGallery.agents || [
    {
      id: 'executive',
      name: 'Executive Assistant AI',
      role: 'C-Suite Support',
      description: 'Your 24/7 executive assistant that manages calendars, prepares briefings, and handles communications.',
      capabilities: [
        'Smart calendar management',
        'Meeting preparation & notes',
        'Email prioritization & drafting',
        'Travel coordination',
        'Report generation'
      ],
      metrics: {
        efficiency: '80% time saved',
        accuracy: '99.9% scheduling accuracy'
      },
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'sales',
      name: 'Sales Hunter AI',
      role: 'Lead Generation',
      description: 'Autonomous sales agent that finds, qualifies, and engages prospects at scale.',
      capabilities: [
        'Lead discovery & enrichment',
        'Automated outreach sequences',
        'Meeting booking',
        'CRM synchronization',
        'Performance analytics'
      ],
      metrics: {
        efficiency: '10x more outreach',
        accuracy: '85% response rate'
      },
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 'customer',
      name: 'Customer Success AI',
      role: 'Support Automation',
      description: 'Intelligent agent that provides instant, personalized customer support across all channels.',
      capabilities: [
        'Multi-channel support',
        'Sentiment analysis',
        'Issue resolution',
        'Knowledge base management',
        'Escalation handling'
      ],
      metrics: {
        efficiency: '90% first-contact resolution',
        accuracy: '95% satisfaction score'
      },
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'analyst',
      name: 'Data Analyst AI',
      role: 'Business Intelligence',
      description: 'Advanced analytics agent that turns raw data into actionable insights.',
      capabilities: [
        'Automated reporting',
        'Anomaly detection',
        'Predictive modeling',
        'Data visualization',
        'Trend analysis'
      ],
      metrics: {
        efficiency: '100x faster analysis',
        accuracy: '98% prediction accuracy'
      },
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'developer',
      name: 'Code Assistant AI',
      role: 'Development Support',
      description: 'Pair programmer that writes, reviews, and optimizes code.',
      capabilities: [
        'Code generation',
        'Bug detection & fixing',
        'Code review',
        'Documentation writing',
        'Test creation'
      ],
      metrics: {
        efficiency: '3x faster development',
        accuracy: '90% bug prevention'
      },
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      id: 'marketing',
      name: 'Marketing Creator AI',
      role: 'Content Generation',
      description: 'Creative agent that produces marketing content and campaigns.',
      capabilities: [
        'Content writing',
        'Social media management',
        'Ad copy generation',
        'SEO optimization',
        'Campaign analytics'
      ],
      metrics: {
        efficiency: '20x content output',
        accuracy: '2x engagement rate'
      },
      gradient: 'from-teal-500 to-green-600'
    }
  ]

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-glow">
            {t('agentsGallery.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('agentsGallery.subtitle')}
          </p>
        </div>

        {/* Agent Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
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

                {/* Capabilities Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.capabilities.slice(0, 3).map((cap, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-slate-800/50 text-slate-400 rounded"
                    >
                      {cap}
                    </span>
                  ))}
                  {agent.capabilities.length > 3 && (
                    <span className="text-xs px-2 py-1 text-slate-500">
                      +{agent.capabilities.length - 3} more
                    </span>
                  )}
                </div>

              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
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

              <div className="flex justify-center">
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