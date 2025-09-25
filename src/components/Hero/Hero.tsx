import React from 'react'

const Hero: React.FC = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-premium">
      {/* Advanced AI Background Elements */}
      <div className="absolute inset-0">
        {/* Neural network gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-neural-50" />

        {/* AI-themed floating elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-neural-100 to-primary-100 rounded-full opacity-60 blur-3xl animate-neural-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-tech-100 to-primary-100 rounded-full opacity-40 blur-2xl animate-float" />
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-br from-primary-200 to-neural-200 rounded-full opacity-30 blur-xl animate-pulse-soft" />

        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Animated connection lines */}
        <div className="absolute top-20 left-10 neural-connection opacity-30" style={{height: '200px'}} />
        <div className="absolute top-40 right-20 neural-connection opacity-20" style={{height: '150px'}} />
        <div className="absolute bottom-32 left-1/3 neural-connection opacity-25" style={{height: '180px'}} />

        {/* Data flow streams */}
        <div className="absolute top-1/2 left-0 data-stream opacity-20" />
        <div className="absolute top-2/3 left-0 data-stream opacity-15" style={{animationDelay: '2s'}} />

        {/* AI nodes */}
        <div className="absolute top-24 right-32 ai-node" />
        <div className="absolute bottom-48 left-20 ai-node" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 right-16 ai-node" style={{animationDelay: '2.5s'}} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Hero Headline */}
          <h1 className="text-display mb-6 tracking-tight">
            <span className="block text-foreground animate-slide-up">
              Transform Your Business
            </span>
            <span className="block neural-text mt-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              with AI Solutions That Actually Work
            </span>
          </h1>

          {/* Hero Description */}
          <p className="text-body-large mb-12 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
            Partner with Nord AI to implement custom AI solutions that increase revenue,
            reduce costs, and automate complex processes. Real results in 8 weeks, guaranteed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <button className="btn-primary text-lg px-8 py-4 premium-glow hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              Get Free AI Strategy Session
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

            {/* Secondary CTA with AI processing indicator */}
            <button className="btn-ghost text-lg px-6 py-4 group">
              <div className="processing-indicator mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
              See AI Solutions
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* AI Success Metrics */}
          <div className="mt-16 pt-12 border-t border-border animate-slide-up" style={{animationDelay: '0.8s'}}>
            <p className="text-sm text-foreground-light mb-8 uppercase tracking-wider font-medium">
              Proven AI Implementation Results
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-3xl font-bold neural-text mb-1 group-hover:scale-110 transition-transform">40%</div>
                <div className="text-xs text-foreground-muted uppercase tracking-wide">Revenue Increase</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold tech-text mb-1 group-hover:scale-110 transition-transform">60%</div>
                <div className="text-xs text-foreground-muted uppercase tracking-wide">Cost Reduction</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform">8</div>
                <div className="text-xs text-foreground-muted uppercase tracking-wide">Weeks to ROI</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold neural-text mb-1 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-xs text-foreground-muted uppercase tracking-wide">AI Automation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
          <span className="text-xs text-foreground-light font-medium uppercase tracking-wider group-hover:text-primary transition-colors">Explore AI Solutions</span>
          <div className="w-6 h-10 border-2 border-border group-hover:border-primary rounded-full flex justify-center transition-colors">
            <div className="w-1 h-3 bg-gradient-to-b from-primary to-neural-500 rounded-full mt-2 animate-pulse-soft group-hover:h-4 transition-all" />
          </div>
          <div className="ai-node opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  )
}

export default Hero