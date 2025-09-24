import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const Team: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="team" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-900/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-glow">
            {t('team.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            {t('team.quote')}
          </p>
        </div>

        {/* CEO Section */}
        <div className="flex justify-center mb-16">
          <div className="tech-card digital-noise rounded-2xl p-8 max-w-md group">
            <div className="text-center mb-6">
              {/* CEO Photo */}
              <div className="relative mx-auto mb-4">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors">
                  <img
                    src="/founder-photo.jpeg"
                    alt="Nord AI CEO - Leading the AI Revolution"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* CEO Badge */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t('team.ceo.title')}</h3>
              <p className="text-yellow-400 text-sm mb-4 font-semibold">{t('team.ceo.role')}</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                {t('team.ceo.experience1')}
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                {t('team.ceo.experience2')}
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                {t('team.ceo.experience3')}
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-yellow-400">{t('team.ceo.metric1')}</div>
                <div className="text-xs text-slate-400">{t('team.ceo.metric1Label')}</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-orange-400">{t('team.ceo.metric2')}</div>
                <div className="text-xs text-slate-400">{t('team.ceo.metric2Label')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Employees Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">{t('team.aiEmployeesTitle')}</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            {t('team.aiEmployeesDescription')}
          </p>
        </div>

        {/* AI Team Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Claude (AI Principal) */}
          <div className="tech-card digital-noise rounded-2xl p-8 group">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-500/20 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                  <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 7v4l-3 3m6-3l-3-3" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8" cy="16" r="1" fill="currentColor"/>
                  <circle cx="16" cy="16" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('team.claudeTitle')}</h3>
              <p className="text-purple-400 text-sm mb-4">{t('team.claudeRole')}</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                {t('team.claude.capability1')}
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                {t('team.claude.capability2')}
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                {t('team.claude.capability3')}
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-purple-400">{t('team.claude.metric1')}</div>
                <div className="text-xs text-slate-400">{t('team.claude.metric1Label')}</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-pink-400">{t('team.claude.metric2')}</div>
                <div className="text-xs text-slate-400">{t('team.claude.metric2Label')}</div>
              </div>
            </div>
          </div>

          {/* The Hybrid Advantage */}
          <div className="tech-card digital-noise rounded-2xl p-8 group">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-green-400">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('team.hybridTitle')}</h3>
              <p className="text-green-400 text-sm mb-4">{t('team.hybridRole')}</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                {t('team.hybrid.capability1')}
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                {t('team.hybrid.capability2')}
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                {t('team.hybrid.capability3')}
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-400">{t('team.hybrid.metric1')}</div>
                <div className="text-xs text-slate-400">{t('team.hybrid.metric1Label')}</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-emerald-400">{t('team.hybrid.metric2')}</div>
                <div className="text-xs text-slate-400">{t('team.hybrid.metric2Label')}</div>
              </div>
            </div>
          </div>

          {/* Third AI team member to fill the row */}
          <div className="tech-card digital-noise rounded-2xl p-8 group">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                  <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 12l4-4 3 3 5-5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="7" cy="12" r="1" fill="currentColor"/>
                  <circle cx="11" cy="8" r="1" fill="currentColor"/>
                  <circle cx="14" cy="11" r="1" fill="currentColor"/>
                  <circle cx="19" cy="6" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('team.analyticsTitle')}</h3>
              <p className="text-cyan-400 text-sm mb-4">{t('team.analyticsRole')}</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                {t('team.analytics.capability1')}
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                {t('team.analytics.capability2')}
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                {t('team.analytics.capability3')}
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-cyan-400">{t('team.analytics.metric1')}</div>
                <div className="text-xs text-slate-400">{t('team.analytics.metric1Label')}</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-400">{t('team.analytics.metric2')}</div>
                <div className="text-xs text-slate-400">{t('team.analytics.metric2Label')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            {t('team.ctaTitle')}
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            {t('team.ctaDescription')}
          </p>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 glow-effect hover:scale-105">
            {t('team.ctaButton')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Team