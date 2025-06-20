import { useState } from 'react'

import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'
import LanguageContext from './Context'

const App = () => {
  const [activeLanguage, setActiveLanguage] = useState('EN')

  const changeLanguage = (language) => {
    setActiveLanguage(language)
  }

  return (
    <LanguageContext.Provider
      value={{
        activeLanguage,
        changeLanguage,
      }}>
      <Header />
      <LandingSection />
      <FeaturesSection />
    </LanguageContext.Provider>
  )
}

export default App
