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
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('difference.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('difference.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl"></div>
                <div className="relative bg-slate-800/50 rounded-full w-32 h-32 mx-auto flex items-center justify-center border border-cyan-400/30">
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">{stat.icon}</div>
                    <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{stat.title}</h3>
              <p className="text-slate-300 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 glow-effect">
            Experience the Nord Difference
          </button>
        </div>
      </div>
    </section>
  )
}

export default Difference