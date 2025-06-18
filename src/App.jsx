import {Component} from 'react'

import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'
import LanguageContext from './components/Context.jsx'

class App extends Component {
  state = {activeLanguage: 'EN'}

  changeLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }
  render() {
    const {activeLanguage} = this.state
    return (
      <LanguageContext.Provider value={{ activeLanguage: this.state.activeLanguage, changeLanguage: this.changeLanguage }}>
        <Header />
        <LandingSection activeLanguage={activeLanguage} />
        <FeaturesSection activeLanguage={activeLanguage} />
      </LanguageContext.Provider>
    )
  }
}

export default App
