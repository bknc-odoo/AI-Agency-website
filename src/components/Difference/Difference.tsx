import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { SpeedIcon, CustomIcon, SupportIcon } from '@/components/Icons/Icons'

const Difference: React.FC = () => {
  const { t } = useTranslation()

  const stats = [
    {
      key: 'speed',
      value: t('difference.stats.speed.value'),
      title: t('difference.stats.speed.title'),
      description: t('difference.stats.speed.description'),
      icon: <SpeedIcon size={32} className="text-cyan-400" />
    },
    {
      key: 'custom',
      value: t('difference.stats.custom.value'),
      title: t('difference.stats.custom.title'),
      description: t('difference.stats.custom.description'),
      icon: <CustomIcon size={32} className="text-cyan-400" />
    },
    {
      key: 'support',
      value: t('difference.stats.support.value'),
      title: t('difference.stats.support.title'),
      description: t('difference.stats.support.description'),
      icon: <SupportIcon size={32} className="text-cyan-400" />
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-900/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-glow">
            {t('difference.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('difference.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="tech-card digital-noise rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full scale-150 group-hover:scale-200 transition-transform duration-300"></div>
                <div className="relative z-10 w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.value}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {stat.title}
              </h3>
              <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {stat.description}
              </p>

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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 glow-effect hover:scale-105">
            {t('difference.cta')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Difference