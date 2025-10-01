import React, { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useScrollGlow } from '@/hooks/useScrollGlow'

const Contact: React.FC = () => {
  const { t } = useTranslation()
  const { ref: titleRef, isInView } = useScrollGlow(0.3)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const benefits = [
    {
      key: 'consultation',
      title: t('contact.benefits.consultation.title'),
      description: t('contact.benefits.consultation.description'),
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
          <circle cx="9" cy="11" r="1" fill="currentColor"/>
          <circle cx="15" cy="11" r="1" fill="currentColor"/>
          <path d="M9 14c1 1 2 1 3 1s2 0 3-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      key: 'proposal',
      title: t('contact.benefits.proposal.title'),
      description: t('contact.benefits.proposal.description'),
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
          <path d="M7 8h10M7 12h6M7 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="17" cy="16" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
        </svg>
      )
    },
    {
      key: 'implementation',
      title: t('contact.benefits.implementation.title'),
      description: t('contact.benefits.implementation.description'),
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
          <path d="M13 10h8l-10 12v-8H3l10-12v8z" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-900/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-white mb-6 title-glow-on-scroll ${isInView ? 'in-view' : ''}`}
          >
            {t('contact.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.key}
              className="tech-card digital-noise rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full scale-150 group-hover:scale-200 transition-transform duration-300"></div>
                <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">{benefit.title}</h3>
              <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">{benefit.description}</p>

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

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="tech-card digital-noise rounded-2xl p-8 group">
            <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-cyan-300 transition-colors duration-300">
              {t('contact.form.title')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  {t('contact.form.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder={t('contact.form.companyPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 glow-effect hover:scale-105"
              >
                {t('contact.cta')}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>

            <div className="mt-6 space-y-4">
              <p className="text-center text-sm text-slate-400">
                {t('contact.form.note')}
              </p>

              {/* Direct Contact */}
              <p className="text-center text-sm text-slate-300">
                {t('contact.form.directContact')}
              </p>

              {/* Buy Me a Coffee Button */}
              <div className="text-center">
                <p className="text-sm text-slate-400 mb-3">{t('contact.form.buyMeCoffee')}</p>
                <a
                  href="https://buymeacoffee.com/nordgaimer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
                >
                  <span>☕</span>
                  <span>Buy Me a Coffee</span>
                </a>
              </div>

              {/* Guarantee Badge */}
              <div className="flex items-center justify-center gap-2 p-3 bg-green-400/10 border border-green-400/30 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-400 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm text-green-400 font-semibold">
                  {t('contact.form.guarantee')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact