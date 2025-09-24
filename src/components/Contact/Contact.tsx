import React, { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const Contact: React.FC = () => {
  const { t } = useTranslation()
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
    <section id="contact" className="py-20 px-4 bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div key={benefit.key} className="text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl w-24 h-24 mx-auto"></div>
                <div className="relative bg-slate-800/50 rounded-full w-24 h-24 mx-auto flex items-center justify-center border border-cyan-400/30">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {t('contact.form.title')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Describe your AI needs and objectives..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 glow-effect"
              >
                Start Your AI Journey
              </button>
            </form>

            <p className="text-center text-sm text-slate-400 mt-6">
              We'll respond within 24 hours to schedule your consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact