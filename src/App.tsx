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

        {/* Placeholder sections */}
        <section id="services" className="section-padding">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-8">Services Section</h2>
            <p className="text-center text-muted-foreground">Services content coming soon...</p>
          </div>
        </section>

        <section id="approach" className="section-padding bg-card/30">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-8">Approach Section</h2>
            <p className="text-center text-muted-foreground">Approach content coming soon...</p>
          </div>
        </section>

        <section id="team" className="section-padding">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-8">Team Section</h2>
            <p className="text-center text-muted-foreground">Team content coming soon...</p>
          </div>
        </section>
      </div>
    </TranslationProvider>
  )
}

export default App