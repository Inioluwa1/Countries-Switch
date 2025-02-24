import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Search from './Components/Search'
import Countries from './Components/Countries'
import './App.css'

function App() {
  const [darkModeSet, setdarkModeSet] = useState("false")

  return (
      <Router className={`root ${darkModeSet ? 'dark' : ''}`}>
        <Header darkModeSet={darkModeSet} setdarkModeSet={setdarkModeSet} />
        <Search darkModeSet={darkModeSet} />
        <Countries darkModeSet={darkModeSet} setdarkModeSet={setdarkModeSet} />
      </Router>
  )
}

export default App
