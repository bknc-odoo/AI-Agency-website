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
      // Replace with your webhook URL
      const webhookUrl = 'https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/' // You'll need to provide this

      const payload = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'website_callback_widget',
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct'
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false)
          setIsOpen(false)
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
                  onClick={() => {}}
                  className="w-12 h-12 rounded-full bg-purple-500 text-white shadow-lg hover:shadow-purple-400/50 transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  📅
                </button>
                <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('callback.scheduleTooltip')}
                </div>
              </div>

              {/* Direct Call */}
              <div className="relative group">
                <button
                  onClick={makePhoneCall}
                  className="w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:shadow-green-400/50 transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  📞
                </button>
                <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('callback.callTooltip')}
                </div>
              </div>

              {/* Telegram */}
              <div className="relative group">
                <button
                  onClick={openTelegram}
                  className="w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:shadow-blue-400/50 transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  ✈️
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
      {isOpen && (
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
                      onClick={() => setIsOpen(false)}
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