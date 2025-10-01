import React from 'react'
import TranslationProvider from './components/TranslationProvider'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Approach from './components/Approach/Approach'
import CaseStudies from './components/CaseStudies/CaseStudies'
import Community from './components/Community/Community'
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
        <Approach />
        <CaseStudies />
        <Community />
        <Team />
        <Contact />
        <Footer />
        <CallbackWidget />
      </div>
    </TranslationProvider>
  )
}

export default App