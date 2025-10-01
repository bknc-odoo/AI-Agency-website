import React, { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import ParticleNetwork from '@/components/Effects/ParticleNetwork'
import CircuitPattern from '@/components/Effects/CircuitPattern'
import NeuralNetwork3D from '@/components/Effects/NeuralNetwork3D'

const Hero: React.FC = () => {
  const { t, language } = useTranslation()
  const [displayedText, setDisplayedText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const fullText = t('hero.title')

  useEffect(() => {
    setDisplayedText('')
    setIsTypingComplete(false)

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTypingComplete(true)
      }
    }, 50) // Clean typing speed

    return () => clearInterval(typingInterval)
  }, [fullText])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderSubtitle = () => {
    const subtitle = t('hero.subtitle')

    if (language === 'ua' && subtitle === 'Швидкий старт з ШІ') {
      return (
        <>
          <span className="gradient-text">Швидкий старт з </span>
          <span className="gradient-text-animated">ШІ</span>
        </>
      )
    }

    if (language === 'en' && subtitle === 'Fast-Track with AI') {
      return (
        <>
          <span className="gradient-text">Fast-Track with </span>
          <span className="gradient-text-animated">AI</span>
        </>
      )
    }

    return <span className="gradient-text">{subtitle}</span>
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden digital-noise">
      {/* 3D Neural Network Background */}
      <NeuralNetwork3D />

      {/* Particle Network Background */}
      <ParticleNetwork />

      {/* Circuit Pattern */}
      <CircuitPattern />

      {/* Tech Grid Background */}
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 opacity-95" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">
              {displayedText}
              <span className="inline-block w-1 h-12 md:h-16 lg:h-20 ml-2 bg-cyan-400 animate-pulse" style={{
                opacity: isTypingComplete ? 0 : 1,
                transition: 'opacity 0.5s'
              }} />
              <br />
            </span>
            <span className={`inline-block transition-all duration-500 neon-glow ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {renderSubtitle()}
            </span>
          </h1>

          <p className={`text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {t('hero.description')}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 glow-effect hover:scale-105"
            >
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
            <button
              onClick={() => {
                const servicesSection = document.getElementById('services')
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-cyan-400/50 px-8 py-4 text-lg font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:scale-105"
            >
              {t('hero.ctaSecondary')}
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