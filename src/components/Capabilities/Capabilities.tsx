import React, { useState } from 'react'
import NeuralNetwork3D from '@/components/Effects/NeuralNetwork3D'

interface Capability {
  category: string
  icon: React.ReactNode
  color: string
  items: {
    title: string
    description: string
    metrics: string
  }[]
}

const Capabilities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const capabilities: Capability[] = [
    {
      category: "Computer Vision AI",
      color: "from-cyan-400 to-blue-500",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="1" fill="currentColor"/>
        </svg>
      ),
      items: [
        {
          title: "Object Detection & Tracking",
          description: "Real-time identification and tracking of objects in video streams",
          metrics: "99.9% accuracy, <50ms latency"
        },
        {
          title: "Facial Recognition",
          description: "Secure biometric authentication and emotion analysis",
          metrics: "1:1M matching in 200ms"
        },
        {
          title: "Document OCR Processing",
          description: "Extract text from any document format with structure preservation",
          metrics: "98% accuracy, 50+ languages"
        },
        {
          title: "Medical Image Analysis",
          description: "AI-powered diagnosis assistance and anomaly detection",
          metrics: "FDA-approved algorithms"
        }
      ]
    },
    {
      category: "Natural Language AI",
      color: "from-purple-400 to-pink-500",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="1" fill="currentColor"/>
          <circle cx="8" cy="12" r="1" fill="currentColor"/>
          <circle cx="16" cy="12" r="1" fill="currentColor"/>
        </svg>
      ),
      items: [
        {
          title: "Sentiment Analysis",
          description: "Understand customer emotions across all channels",
          metrics: "95% accuracy, real-time"
        },
        {
          title: "Multi-Language Translation",
          description: "Instant translation preserving context and tone",
          metrics: "100+ languages, 99% fluency"
        },
        {
          title: "Content Generation",
          description: "Create human-quality content at scale",
          metrics: "SEO-optimized, brand-aligned"
        },
        {
          title: "Voice Assistants",
          description: "Natural conversation AI for customer service",
          metrics: "90% first-call resolution"
        }
      ]
    },
    {
      category: "Predictive Analytics",
      color: "from-green-400 to-emerald-500",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 12l4-4 3 3 5-5" stroke="currentColor" strokeWidth="2"/>
          <circle cx="7" cy="12" r="1" fill="currentColor"/>
          <circle cx="11" cy="8" r="1" fill="currentColor"/>
          <circle cx="14" cy="11" r="1" fill="currentColor"/>
          <circle cx="19" cy="6" r="1" fill="currentColor"/>
        </svg>
      ),
      items: [
        {
          title: "Sales Forecasting",
          description: "Predict revenue with machine learning models",
          metrics: "±5% accuracy, 3-year horizon"
        },
        {
          title: "Risk Assessment",
          description: "Identify and quantify business risks automatically",
          metrics: "85% risk prevention rate"
        },
        {
          title: "Churn Prediction",
          description: "Identify at-risk customers before they leave",
          metrics: "92% prediction accuracy"
        },
        {
          title: "Demand Planning",
          description: "Optimize inventory with AI-driven demand forecasts",
          metrics: "30% reduction in stock-outs"
        }
      ]
    },
    {
      category: "Generative AI",
      color: "from-orange-400 to-red-500",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
          <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      items: [
        {
          title: "Code Generation",
          description: "AI writes production-ready code from requirements",
          metrics: "10x faster development"
        },
        {
          title: "Design Creation",
          description: "Generate UI/UX designs and marketing materials",
          metrics: "1000+ variations per hour"
        },
        {
          title: "Synthetic Data",
          description: "Create realistic test data preserving privacy",
          metrics: "GDPR compliant, infinite scale"
        },
        {
          title: "3D Model Generation",
          description: "Create 3D assets from text descriptions",
          metrics: "Production-ready quality"
        }
      ]
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* 3D Neural Network Background */}
      <NeuralNetwork3D />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Capabilities Matrix
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore the full spectrum of AI technologies we can deploy for your business
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {capabilities.map((cap, index) => (
            <button
              key={cap.category}
              onClick={() => setActiveCategory(index)}
              className={`
                flex items-center gap-3 px-6 py-3 rounded-lg border transition-all duration-300
                ${activeCategory === index
                  ? 'bg-gradient-to-r ' + cap.color + ' text-white border-transparent shadow-lg shadow-cyan-400/25'
                  : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-cyan-400/50'
                }
              `}
            >
              <div className="w-8 h-8">{cap.icon}</div>
              <span className="font-semibold">{cap.category}</span>
            </button>
          ))}
        </div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities[activeCategory].items.map((item, index) => (
            <div
              key={item.title}
              className="tech-card digital-noise rounded-xl p-6 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-300 mb-4">{item.description}</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm text-cyan-400 font-mono">{item.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 glow-effect">
            Explore Your AI Solution
          </button>
        </div>
      </div>
    </section>
  )
}

export default Capabilities