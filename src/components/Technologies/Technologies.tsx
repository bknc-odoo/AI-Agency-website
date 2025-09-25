import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useScrollGlow } from '@/hooks/useScrollGlow'

const Technologies: React.FC = () => {
  const { t } = useTranslation()
  const { ref: titleRef, isInView } = useScrollGlow(0.3)

  const technologies = [
    {
      name: 'ChatGPT',
      category: 'Language Model',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-400">
          <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8V4C10 2.9 10.9 2 12 2Z" fill="currentColor"/>
          <path d="M12 14C13.1 14 14 14.9 14 16V20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20V16C10 14.9 10.9 14 12 14Z" fill="currentColor"/>
          <path d="M4 12C4 10.9 4.9 10 6 10H10C11.1 10 12 10.9 12 12C12 13.1 11.1 14 10 14H6C4.9 14 4 13.1 4 12Z" fill="currentColor"/>
          <path d="M14 12C14 10.9 14.9 10 16 10H20C21.1 10 22 10.9 22 12C22 13.1 21.1 14 20 14H16C14.9 14 14 13.1 14 12Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Claude',
      category: 'AI Assistant',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-orange-400">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
          <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="8" r="2" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'ElevenLabs',
      category: 'Voice AI',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-purple-400">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 19v4" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 23h8" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'n8n',
      category: 'Workflow Automation',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-red-400">
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
        </svg>
      )
    },
    {
      name: 'Make',
      category: 'Automation Platform',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
          <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.5"/>
          <circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.5"/>
        </svg>
      )
    },
    {
      name: 'Midjourney',
      category: 'Image Generation',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-pink-400">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5-5 5 5M12 5v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
        </svg>
      )
    },
    {
      name: 'Zapier',
      category: 'Integration Platform',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-yellow-400">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
          <path d="M9 9h6M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'Hugging Face',
      category: 'ML Platform',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.1"/>
        </svg>
      )
    },
    {
      name: 'OpenAI API',
      category: 'AI Platform',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'LangChain',
      category: 'AI Framework',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-indigo-400">
          <path d="M4 12a8 8 0 018-8 8.2 8.2 0 013.2.7 8 8 0 010 14.6A8.2 8.2 0 0112 20a8 8 0 01-8-8z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Anthropic',
      category: 'AI Safety',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-violet-400">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
        </svg>
      )
    },
    {
      name: 'Stability AI',
      category: 'Image Generation',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-rose-400">
          <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
          <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Cohere',
      category: 'Language AI',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-teal-400">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'Replicate',
      category: 'ML Platform',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-amber-400">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
          <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'Pinecone',
      category: 'Vector Database',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-lime-400">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
          <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="7" r="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Runway ML',
      category: 'Video Generation',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-fuchsia-400">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 8l5-5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'Cursor',
      category: 'AI Code Editor',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-sky-400">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
          <path d="M10 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'GitHub Copilot',
      category: 'Code Assistant',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-400">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'Perplexity',
      category: 'AI Search',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-emerald-500">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
          <circle cx="11" cy="11" r="3" fill="currentColor" opacity="0.3"/>
        </svg>
      )
    },
    {
      name: 'Weaviate',
      category: 'Vector Database',
      logo: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-orange-500">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6v6l4 4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      )
    }
  ]

  // Duplicate the technologies array for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-900/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-white mb-6 title-glow-on-scroll ${isInView ? 'in-view' : ''}`}
          >
            {t('technologies.title') || 'Cutting-Edge AI Technologies'}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('technologies.subtitle') || 'We leverage the most advanced AI technologies and platforms to build solutions that define the future of business automation.'}
          </p>
        </div>

        {/* Running Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient fade effects on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

          {/* Carousel Container */}
          <div className="flex gap-6 animate-scroll">
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-none w-36 h-24 tech-card digital-noise rounded-xl p-3 text-center group hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
              >
                {/* Tech Logo */}
                <div className="relative mb-1">
                  <div className="w-8 h-8 mx-auto rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-slate-800/70 transition-colors duration-300">
                    {tech.logo}
                  </div>
                </div>

                {/* Tech Info */}
                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 text-center leading-tight">
                  {tech.name}
                </h3>

                {/* Holographic border effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-300 mb-6 text-lg">
            {t('technologies.cta_text') || 'Ready to harness the power of these cutting-edge technologies?'}
          </p>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 glow-effect hover:scale-105">
            {t('technologies.cta') || 'Explore Our AI Solutions'}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

    </section>
  )
}

export default Technologies