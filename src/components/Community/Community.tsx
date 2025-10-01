import React, { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useScrollGlow } from '@/hooks/useScrollGlow'

const Community: React.FC = () => {
  const { t } = useTranslation()
  const { ref: titleRef, isInView } = useScrollGlow(0.3)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setShowForm(false)
      setSubmitted(false)
      setFormData({ name: '', email: '' })
    }, 3000)
  }

  const highlights = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 7h8M8 11h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: t('community.highlights.knowledge.title'),
      description: t('community.highlights.knowledge.description')
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t('community.highlights.support.title'),
      description: t('community.highlights.support.description')
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: t('community.highlights.access.title'),
      description: t('community.highlights.access.description')
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-900/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-semibold">
              {t('community.badge')}
            </span>
          </div>
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-white mb-6 title-glow-on-scroll ${isInView ? 'in-view' : ''}`}
          >
            {t('community.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('community.subtitle')}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="tech-card rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                  {highlight.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-center">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
            {t('community.cta')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Waitlist Form Modal */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => !submitted && setShowForm(false)}
        >
          <div
            className="bg-slate-900 rounded-2xl p-8 max-w-md w-full border border-cyan-400/30"
            onClick={(e) => e.stopPropagation()}
          >
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-2">{t('community.form.title')}</h3>
                <p className="text-slate-300 mb-6">{t('community.form.subtitle')}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      {t('community.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder={t('community.form.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      {t('community.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder={t('community.form.emailPlaceholder')}
                    />
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t('community.form.submitting') : t('community.form.submit')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-semibold hover:border-cyan-400 hover:text-white transition-colors"
                    >
                      {t('community.form.cancel')}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-green-400">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('community.form.successTitle')}</h3>
                <p className="text-slate-300">{t('community.form.successMessage')}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Community
