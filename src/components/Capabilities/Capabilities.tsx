import React, { useState } from 'react'

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
      category: "Voice AI Agents",
      color: "from-cyan-400 to-blue-500",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="2"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      items: [
        {
          title: "24/7 Customer Service Agent",
          description: "Stop losing customers to long wait times and inconsistent support. AI agent handles every inquiry instantly",
          metrics: "95% customer satisfaction, 70% cost reduction"
        },
        {
          title: "Sales & Lead Qualification Agent",
          description: "End the frustration of cold prospects and unqualified leads. AI agent finds and nurtures ready-to-buy customers",
          metrics: "3x more qualified leads, 60% conversion rate"
        },
        {
          title: "Appointment Booking Agent",
          description: "Stop the back-and-forth email chains for scheduling. AI agent books, reschedules, and confirms automatically",
          metrics: "100% accuracy, 85% time saved"
        },
        {
          title: "Order Processing & Support Agent",
          description: "End order mix-ups and processing delays. AI agent handles everything from order to delivery tracking",
          metrics: "99.9% order accuracy, instant processing"
        }
      ]
    },
    {
      category: "Knowledge Base Agents",
      color: "from-purple-400 to-pink-500",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 13a3 3 0 1 0-6 0" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      items: [
        {
          title: "Internal Knowledge Assistant",
          description: "Stop employees from asking 'where do I find...' every day. AI agent knows every policy and procedure instantly",
          metrics: "90% faster information retrieval, 24/7 availability"
        },
        {
          title: "Customer FAQ & Support Agent",
          description: "End repetitive support tickets flooding your inbox. AI agent answers every common question automatically",
          metrics: "80% ticket reduction, instant responses"
        },
        {
          title: "Training & Onboarding Agent",
          description: "Stop new hires from feeling lost and overwhelmed. AI agent guides them through everything step-by-step",
          metrics: "50% faster onboarding, 95% completion rate"
        },
        {
          title: "Technical Documentation Agent",
          description: "End developers wasting hours searching for code examples. AI agent finds exactly what they need instantly",
          metrics: "75% less development time, 100% accuracy"
        }
      ]
    },
    {
      category: "Process Automation Agents",
      color: "from-green-400 to-emerald-500",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 3v9l4 4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      items: [
        {
          title: "Data Entry & Processing Agent",
          description: "Stop wasting hours on mind-numbing data entry. AI agent extracts and processes everything automatically",
          metrics: "99.8% accuracy, 10x faster processing"
        },
        {
          title: "Invoice & Payment Agent",
          description: "End late payments and billing errors that hurt cash flow. AI agent handles everything from invoice to payment",
          metrics: "Zero human errors, 30-day payment cycles"
        },
        {
          title: "Email & Communication Agent",
          description: "Stop drowning in your inbox every morning. AI agent sorts, responds, and manages all communications",
          metrics: "80% email volume reduction, instant responses"
        },
        {
          title: "Report Generation Agent",
          description: "End the monthly scramble to compile reports. AI agent generates everything automatically and on-time",
          metrics: "100% consistent reports, real-time updates"
        }
      ]
    },
    {
      category: "Custom Business Agents",
      color: "from-orange-400 to-red-500",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M20 7h-9" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 17H5" stroke="currentColor" strokeWidth="2"/>
          <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M5 17a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 7a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      items: [
        {
          title: "Industry-Specific Expert Agent",
          description: "Stop losing deals due to lack of industry expertise. Custom AI trained on your sector's regulations and best practices",
          metrics: "Never miss compliance requirements again"
        },
        {
          title: "Workflow Integration Agent",
          description: "End the chaos of switching between 15+ tools daily. One AI agent that connects everything seamlessly",
          metrics: "No more manual data entry between systems"
        },
        {
          title: "Decision Support Agent",
          description: "Stop making decisions based on gut feeling. Get data-driven recommendations for every strategic choice",
          metrics: "Turn hours of analysis into instant insights"
        },
        {
          title: "Custom API & Tool Agent",
          description: "Stop saying 'our system can't do that'. Build AI agents that work exactly how your business operates",
          metrics: "Unlimited customization for your unique needs"
        }
      ]
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Business AI Automation Hub
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Custom AI agents and automation tools that transform your business operations from day one
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
            Start Your AI Automation Journey
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17l9.2-9.2M17 17V7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Capabilities