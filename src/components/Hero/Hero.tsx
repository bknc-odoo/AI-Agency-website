import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const Hero: React.FC = () => {
  const { t, language } = useTranslation()

  const renderSubtitle = () => {
    const subtitle = t('hero.subtitle')

    if (language === 'ua' && subtitle === 'Обери ШІ.') {
      return (
        <>
          <span className="gradient-text">Обери </span>
          <span className="gradient-text-animated">ШІ</span>
          <span className="gradient-text">.</span>
        </>
      )
    }

    return <span className="gradient-text">{subtitle}</span>
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/20 rounded-full animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">
              {t('hero.title')}
              <br />
            </span>
{renderSubtitle()}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex justify-center">
            <button className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4 glow-effect hover:scale-105 transition-transform">
              {t('hero.cta')}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero