import React from 'react'
import TranslationProvider from './components/TranslationProvider'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Capabilities from './components/Capabilities/Capabilities'
import AgentsGallery from './components/AgentsGallery/AgentsGallery'
import DataShowcase from './components/DataShowcase/DataShowcase'
import Approach from './components/Approach/Approach'
import Difference from './components/Difference/Difference'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CallbackWidget from './components/CallbackWidget/CallbackWidget'
import './styles/globals.css'

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
        <Navigation />
        <Hero />
        <Services />
        <Capabilities />
        <AgentsGallery />
        <DataShowcase />
        <Approach />
        <Difference />
        <Team />
        <Contact />
        <Footer />
        <CallbackWidget />
      </div>
    </TranslationProvider>
  )
}

export default App