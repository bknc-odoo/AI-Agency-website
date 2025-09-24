import React from 'react'
import TranslationProvider from './components/TranslationProvider'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Approach from './components/Approach/Approach'
import Difference from './components/Difference/Difference'
import Testimonials from './components/Testimonials/Testimonials'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import './styles/globals.css'

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
        <Navigation />
        <Hero />
        <Services />
        <Approach />
        <Difference />
        <Testimonials />
        <Team />
        <Contact />
      </div>
    </TranslationProvider>
  )
}

export default App