<<<<<<< HEAD
import LanguageContext from '../../Context'
=======
import LanguageContext from '../Context.jsx'
>>>>>>> ba9a3fe3fa66adc043de41040eed812791dcff02
import './index.css'

const languageOptions = [
  {id: 1, value: 'EN', language: 'English'},
  {id: 2, value: 'HI', language: 'हिंदी'},
  {id: 3, value: 'TE', language: 'తెలుగు'},
]

<<<<<<< HEAD
const Header = () => (
  <LanguageContext.Consumer>
    {value => {
      const  {activeLanguage, changeLanguage} = value
      const onChangeLanguage = event => {
        changeLanguage(event.target.value)
      }
      return (
      <nav className="nav-header">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/windows-logo-img.png"
        alt="website logo"
      />
      <select
        className="language-dropdown"
        value={activeLanguage}
        onChange={onChangeLanguage}
      >
        {languageOptions.map(eachOption => (
          <option key={eachOption.id} value={eachOption.value}>
            {eachOption.language}
          </option>
        ))}
      </select>
    </nav>
    )
    }}
  </LanguageContext.Consumer>
)
=======
const Header = () => {
  return (
    <LanguageContext.Consumer>
      {value => {
        const {activeLanguage, changeLanguage} = value
         const onChangeLanguage = event => {
            changeLanguage(event.target.value)
          }

        return (
          <nav className="nav-header">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/windows-logo-img.png"
            alt="website logo"
          />
          <select
            className="language-dropdown"
            value={activeLanguage}
            onChange={onChangeLanguage}
          >
            {languageOptions.map(eachOption => (
              <option key={eachOption.id} value={eachOption.value}>
                {eachOption.language}
              </option>
            ))}
          </select>
        </nav>
        )
      }}

    </LanguageContext.Consumer>
    
  )
}

>>>>>>> ba9a3fe3fa66adc043de41040eed812791dcff02
export default Header
