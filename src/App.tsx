import React from 'react'
import TranslationProvider from './components/TranslationProvider'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import './styles/globals.css'

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <Hero />

        {/* AI Services Section */}
        <section id="services" className="section-padding section-neural">
          <div className="container">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-section-title mb-4 neural-text">AI Solutions That Drive Results</h2>
              <p className="text-body-large max-w-3xl mx-auto">
                Custom AI implementations designed for your industry, delivered with guaranteed ROI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* AI Strategy & Implementation */}
              <div className="card-interactive group">
                <div className="icon-container-large mb-6 neural-glow">
                  <div className="processing-indicator" />
                </div>
                <h3 className="text-card-title mb-4 group-hover:neural-text transition-all">AI Strategy & Implementation</h3>
                <p className="text-body mb-6">End-to-end AI transformation from strategy to deployment. We analyze your processes and implement custom AI solutions.</p>
                <div className="flex items-center tech-text font-semibold">
                  <span className="text-2xl font-bold mr-2">40%</span>
                  <span className="text-sm">Average Revenue Increase</span>
                </div>
              </div>

              {/* Custom AI Agents */}
              <div className="card-interactive group">
                <div className="icon-container-large mb-6 tech-glow">
                  <div className="ai-node scale-150" />
                </div>
                <h3 className="text-card-title mb-4 group-hover:tech-text transition-all">Custom AI Agents</h3>
                <p className="text-body mb-6">Intelligent AI assistants tailored to your business needs. Customer support, sales, operations - fully automated.</p>
                <div className="flex items-center neural-text font-semibold">
                  <span className="text-2xl font-bold mr-2">24/7</span>
                  <span className="text-sm">Automated Operations</span>
                </div>
              </div>

              {/* Data Analytics & Automation */}
              <div className="card-interactive group">
                <div className="icon-container-large mb-6 premium-glow">
                  <div className="flex space-x-1">
                    <div className="processing-indicator" style={{animationDelay: '0.5s'}} />
                    <div className="processing-indicator" style={{animationDelay: '1s'}} />
                  </div>
                </div>
                <h3 className="text-card-title mb-4 group-hover:gradient-text transition-all">Data Analytics & Automation</h3>
                <p className="text-body mb-6">Transform your data into actionable insights with AI-powered analytics and automated reporting systems.</p>
                <div className="flex items-center gradient-text font-semibold">
                  <span className="text-2xl font-bold mr-2">60%</span>
                  <span className="text-sm">Time Savings</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Implementation Process */}
        <section id="approach" className="section-padding section-tech">
          <div className="container">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-section-title mb-4">Your 8-Week AI Transformation</h2>
              <p className="text-body-large max-w-3xl mx-auto">
                Our proven methodology delivers measurable results in just 8 weeks
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Week 1-2: Discovery */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-neural-400 to-neural-600 flex items-center justify-center text-white font-bold text-xl shadow-neural">
                    1-2
                  </div>
                  <div className="absolute -top-2 -right-2 ai-node" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:neural-text transition-colors">Discovery & Analysis</h3>
                <p className="text-sm text-foreground-muted">Deep dive into your processes, identify AI opportunities, and create implementation roadmap</p>
              </div>

              {/* Week 3-4: Design */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-tech-400 to-tech-600 flex items-center justify-center text-white font-bold text-xl shadow-tech">
                    3-4
                  </div>
                  <div className="absolute -top-2 -right-2 processing-indicator" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:tech-text transition-colors">Design & Architecture</h3>
                <p className="text-sm text-foreground-muted">Custom AI solution design, integration planning, and proof of concept development</p>
              </div>

              {/* Week 5-6: Development */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-xl shadow-colored">
                    5-6
                  </div>
                  <div className="absolute -top-2 -right-2 ai-node" style={{animationDelay: '1s'}} />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:gradient-text transition-colors">Development & Testing</h3>
                <p className="text-sm text-foreground-muted">AI solution development, rigorous testing, and performance optimization</p>
              </div>

              {/* Week 7-8: Deployment */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-neural-500 to-primary-500 flex items-center justify-center text-white font-bold text-xl neural-glow">
                    7-8
                  </div>
                  <div className="absolute -top-2 -right-2 processing-indicator" style={{animationDelay: '2s'}} />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:neural-text transition-colors">Deployment & Results</h3>
                <p className="text-sm text-foreground-muted">Full deployment, team training, and immediate ROI tracking with ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section-padding">
          <div className="container">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-section-title mb-4">AI Expertise You Can Trust</h2>
              <p className="text-body-large max-w-3xl mx-auto">
                Led by AI specialists with proven track records in enterprise implementations
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="card text-center lg:text-left lg:flex lg:items-center lg:space-x-8">
                <div className="mb-6 lg:mb-0">
                  <div className="w-32 h-32 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-neural-100 to-primary-100 flex items-center justify-center shadow-premium">
                    <div className="text-4xl font-bold neural-text">IA</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 neural-text">Ivan Nordgaimer</h3>
                  <p className="tech-text font-semibold mb-4">AI Solutions Architect & Founder</p>
                  <p className="text-body mb-6">
                    10+ years in AI/ML development, former tech lead at enterprise companies.
                    Specialized in custom AI implementations that deliver measurable business results.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <span className="px-3 py-1 bg-neural-100 text-neural-700 rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="px-3 py-1 bg-tech-100 text-tech-700 rounded-full text-sm font-medium">Process Automation</span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">AI Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </TranslationProvider>
  )
}

export default App