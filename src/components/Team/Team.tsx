import React from 'react'

const Team: React.FC = () => {

  return (
    <section id="team" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-900/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-glow">
            Meet Our AI + Human Hybrid Team
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            The future of business is human creativity enhanced by AI intelligence. We're the first team where AI employees work alongside human experts to deliver unprecedented results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Human Expert */}
          <div className="tech-card digital-noise rounded-2xl p-8 group">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Human AI Strategist</h3>
              <p className="text-cyan-400 text-sm mb-4">Principal & Mentor-Trained Expert</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                15+ years business strategy experience
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                Trained by industry-leading AI mentors
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                100+ successful AI implementations
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-cyan-400">15+</div>
                <div className="text-xs text-slate-400">Years Experience</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-400">100+</div>
                <div className="text-xs text-slate-400">AI Projects</div>
              </div>
            </div>
          </div>

          {/* AI Team Member */}
          <div className="tech-card digital-noise rounded-2xl p-8 group">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-500/20 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                  <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 7v4l-3 3m6-3l-3-3" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8" cy="16" r="1" fill="currentColor"/>
                  <circle cx="16" cy="16" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Claude (AI Principal)</h3>
              <p className="text-purple-400 text-sm mb-4">Lead AI Development & Strategy</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                Advanced reasoning & problem solving
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                Real-time code generation & optimization
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                24/7 availability & continuous learning
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-purple-400">24/7</div>
                <div className="text-xs text-slate-400">Availability</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-pink-400">∞</div>
                <div className="text-xs text-slate-400">Processing Power</div>
              </div>
            </div>
          </div>

          {/* Hybrid Approach */}
          <div className="tech-card digital-noise rounded-2xl p-8 group">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-green-400">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">The Hybrid Advantage</h3>
              <p className="text-green-400 text-sm mb-4">Human Creativity + AI Efficiency</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                Human intuition guides AI execution
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                AI handles complex tasks at scale
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                Continuous learning & improvement
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-400">10x</div>
                <div className="text-xs text-slate-400">Faster Results</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-emerald-400">99%</div>
                <div className="text-xs text-slate-400">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Experience AI + Human Collaboration?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to see how our hybrid team can transform your business with the perfect blend of human expertise and AI capabilities.
          </p>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 glow-effect hover:scale-105">
            Schedule Strategy Session
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Team