import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useScrollGlow } from '@/hooks/useScrollGlow'

const Team: React.FC = () => {
  const { t } = useTranslation()
  const { ref: titleRef, isInView } = useScrollGlow(0.3)

  return (
    <section id="team" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-900/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-white mb-6 title-glow-on-scroll ${isInView ? 'in-view' : ''}`}
          >
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
                    alt="Ivan Nordgaimer - Leading the AI Revolution"
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

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-yellow-400">{t('team.ceo.metric1')}</div>
                <div className="text-xs text-slate-400">{t('team.ceo.metric1Label')}</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-orange-400">{t('team.ceo.metric2')}</div>
                <div className="text-xs text-slate-400">{t('team.ceo.metric2Label')}</div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/ivan.nordgaimer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center text-pink-400 hover:text-pink-300 hover:scale-110 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/nordgaimer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.nordgaimer.coach"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:scale-110 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </a>
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
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 glow-effect hover:scale-105">
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