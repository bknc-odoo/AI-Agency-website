import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const Team: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
                {t('team.tagline')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                {t('team.title')}
              </h2>
            </div>

            <blockquote className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 italic">
              {t('team.quote')}
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-cyan-300">
                Schedule a Call
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-400 px-6 py-3 text-sm font-semibold text-cyan-400 transition-colors hover:bg-cyan-400/10">
                View LinkedIn
              </button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 border border-slate-700/50">
              {/* Placeholder for founder image */}
              <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center mb-6">
                <div className="text-6xl">👨‍💼</div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Nord AI Founder</h3>
                <p className="text-slate-400 mb-4">Principal AI Strategist</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-cyan-400">5+</div>
                    <div className="text-sm text-slate-400">Years AI</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-cyan-400">50+</div>
                    <div className="text-sm text-slate-400">Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team