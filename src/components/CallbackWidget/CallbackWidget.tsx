import React, { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface CallbackForm {
  name: string
  email: string
  phone: string
  preferredTime: string
  message: string
}

const CallbackWidget: React.FC = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<CallbackForm>({
    name: '',
    email: '',
    phone: '',
    preferredTime: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create lead with voice opener generation (single secure API call)
      const response = await fetch('/api/create-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      })

      if (response.ok) {
        setSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false)
          setShowForm(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            preferredTime: '',
            message: ''
          })
        }, 3000)
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Callback request failed:', error)
      // You might want to show an error message here
    } finally {
      setIsSubmitting(false)
    }
  }

  const makePhoneCall = () => {
    window.location.href = 'tel:+1234567890' // Replace with your phone number
  }

  const openTelegram = () => {
    window.open('https://t.me/nordai_bot', '_blank') // Replace with your Telegram username
  }

  return (
    <>
      {/* Floating Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Main Call Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center group hover:scale-110 glow-effect"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:animate-pulse">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>

            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-full bg-blue-600 opacity-30 animate-ping"></div>
          </button>

          {/* Quick Actions */}
          {isOpen && (
            <div className="absolute bottom-20 right-0 space-y-3 animate-fade-in">
              {/* Callback Form Button */}
              <div className="relative group">
                <button
                  onClick={() => setShowForm(true)}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center hover:scale-110 glow-effect"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </button>
                <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('callback.scheduleTooltip')}
                </div>
              </div>

              {/* Direct Call */}
              <div className="relative group">
                <button
                  onClick={makePhoneCall}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center hover:scale-110 glow-effect"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </button>
                <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('callback.callTooltip')}
                </div>
              </div>

              {/* Telegram */}
              <div className="relative group">
                <button
                  onClick={openTelegram}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center hover:scale-110 glow-effect"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </button>
                <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('callback.telegramTooltip')}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Callback Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl p-8 max-w-md w-full border border-cyan-400/30 digital-noise">
            {!submitted ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('callback.modalTitle')}</h3>
                  <p className="text-slate-300">{t('callback.modalSubtitle')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder={t('callback.namePlaceholder')}
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t('callback.phonePlaceholder')}
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder={t('callback.emailPlaceholder')}
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>


                  <div>
                    <textarea
                      name="message"
                      placeholder={t('callback.messagePlaceholder')}
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 glow-effect"
                    >
                      {isSubmitting ? t('callback.requesting') : t('callback.requestButton')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-semibold hover:border-cyan-400 transition-colors"
                    >
                      {t('callback.cancelButton')}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('callback.successTitle')}</h3>
                <p className="text-slate-300">{t('callback.successMessage')}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default CallbackWidget