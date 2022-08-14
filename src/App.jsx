import { useState } from 'react'
import './App.css'
import Header from './components/shared/header/Header.component'
import MainDisplay from './components/shared/main/MainDisplay.component'
import Navbar from './components/shared/navbar/Navbar.component'

function App() {
  const [activeComponent, setActiveComponent] = useState(0)

  const [activeTopic, setActiveTopic] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const activateTopic = (index) => {
    setActiveTopic(index)
  }

  const activateComponent = (index) => {
    setActiveComponent(index)
  }

  
  const setDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="App">
      <Header setDarkMode={setDarkMode} isDarkMode={ isDarkMode} />
      <Navbar active={activeTopic} activateTopic={ activateComponent} />
      <MainDisplay active={activeComponent} activateTopic={activateTopic} isDarkMode={ isDarkMode} />
    </div>
  )
}

export default App
