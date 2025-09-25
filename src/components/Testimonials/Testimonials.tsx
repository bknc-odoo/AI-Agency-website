import React from 'react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "CEO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "NordAI transformed our customer service with their custom AI agents. We've reduced response time by 70% while maintaining exceptional quality.",
      result: "70% faster response time",
      industry: "SaaS"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "VP Operations, LogiCorp",
      company: "LogiCorp International",
      content: "The AI automation system NordAI built for us eliminated manual data entry entirely. Our team now focuses on strategic work instead of repetitive tasks.",
      result: "100% automation of data entry",
      industry: "Logistics"
    },
    {
      id: 3,
      name: "Emily Thompson",
      title: "Marketing Director, GrowthLab",
      company: "GrowthLab Marketing",
      content: "Their predictive analytics solution helped us identify our best leads 3x faster. Our conversion rate improved dramatically within the first month.",
      result: "3x faster lead qualification",
      industry: "Marketing"
    }
  ]

  return (
    <section className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real results from businesses that trusted NordAI to accelerate their digital transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
              {/* Quote */}
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400/60 mb-4">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
                </svg>
                <p className="text-slate-300 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Result Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  {testimonial.result}
                </span>
              </div>

              {/* Author Info */}
              <div className="border-t border-slate-700/50 pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.title}</p>
                    <p className="text-slate-500 text-sm">{testimonial.company}</p>
                    <span className="inline-block mt-2 text-xs text-cyan-400/70 bg-cyan-400/5 px-2 py-1 rounded">
                      {testimonial.industry}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-300 mb-6">Ready to join our success stories?</p>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 glow-effect hover:scale-105">
            Start Your AI Journey
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials