import { useState } from 'react'
import './Header.style.scss'

function Header({setDarkMode, isDarkMode}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handelMenu = () => setIsMenuOpen(!isMenuOpen)
  

  return (
    <div className="header">
      <div className={"menu "+ (isMenuOpen ? "clicked" : "")} onClick={handelMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img className='title-img' src="https://datadashboard.health.gov.il/COVID-19/assets/images/logo_DAshboard-01.png" />
      <div className="title">
        <label>נגיף הקורונה בישראל - תמונת מצב כללית  |</label>
        <label>עדכון אחרון: 12 באוגוסט 2022 | 17:50</label>
      </div>
      <div className='leng'>
        <span>A | א
        </span>
      </div>
      <div className='dark-mode-button' onClick={setDarkMode}>
        {
          !isDarkMode
            ?
            <img src="https://datadashboard.health.gov.il/COVID-19/assets/images/brightness_light.png" />
            :
            <img src="https://datadashboard.health.gov.il/COVID-19/assets/images/brightness_dark.png"/>
        }
      </div>
     
    </div>
  )
}

export default Header
