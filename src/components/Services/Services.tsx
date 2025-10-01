import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useScrollGlow } from '@/hooks/useScrollGlow'
import { ChaosIcon, FunnelIcon, ClockIcon, RaceIcon } from '@/components/Icons/Icons'

interface Problem {
  key: string
  icon: React.ReactNode
  title: string
  description: string
  solution: string
}

const Services: React.FC = () => {
  const { t } = useTranslation()
  const { ref: titleRef, isInView } = useScrollGlow(0.3)

  const problems: Problem[] = [
    {
      key: 'chaos',
      icon: <ChaosIcon size={48} className="text-cyan-400" />,
      title: t('services.chaos.title'),
      description: t('services.chaos.description'),
      solution: t('services.chaos.solution')
    },
    {
      key: 'funnel',
      icon: <FunnelIcon size={48} className="text-cyan-400" />,
      title: t('services.funnel.title'),
      description: t('services.funnel.description'),
      solution: t('services.funnel.solution')
    },
    {
      key: 'time',
      icon: <ClockIcon size={48} className="text-cyan-400" />,
      title: t('services.time.title'),
      description: t('services.time.description'),
      solution: t('services.time.solution')
    },
    {
      key: 'competitors',
      icon: <RaceIcon size={48} className="text-cyan-400" />,
      title: t('services.competitors.title'),
      description: t('services.competitors.description'),
      solution: t('services.competitors.solution')
    }
  ]

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-800/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-white mb-6 title-glow-on-scroll ${isInView ? 'in-view' : ''}`}
          >
            {t('services.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div
              key={problem.key}
              className="tech-card digital-noise rounded-2xl p-8 group hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Icon with glow effect */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full scale-150 group-hover:scale-200 transition-transform duration-300"></div>
                  <div className="relative z-10">{problem.icon}</div>
                </div>
              </div>

              {/* Title - Problem */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {problem.title}
              </h3>

              {/* Description - Problem statement */}
              <p className="text-slate-300 mb-4 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {problem.description}
              </p>

              {/* Solution - How AI helps */}
              <div className="pt-4 border-t border-cyan-400/20">
                <p className="text-sm text-cyan-400/90 font-semibold leading-relaxed">
                  {problem.solution}
                </p>
              </div>

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

        {/* CTA Section - Buy Me a Coffee */}
        <div className="text-center mt-12">
          <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
            {t('services.ctaText')}
          </p>
          <a
            href="https://www.buymeacoffee.com/nordai.agency"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book Fast-Track Session via Buy Me a Coffee"
            className="inline-block transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://img.buymeacoffee.com/button-api/?text=Book Fast-Track Session&emoji=&slug=nordai.agency&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
              alt="Buy Me a Coffee button to book Fast-Track Session"
              className="h-14"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services