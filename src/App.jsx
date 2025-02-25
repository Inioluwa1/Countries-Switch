import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Search from './Components/Search' 
import Countries from './Components/Countries'
import CountryDetails from './Components/CountryDetails'
import './App.css'

function App() {
  const [selectedRegion, setselectedRegion] = useState("")
  const [darkModeSet, setdarkModeSet] = useState("false")
  const [countries, setCountries] = useState([])
  


  return (
    <div className={`root ${darkModeSet ? 'dark' : ''}`}>
      <Router>
        <Header 
          darkModeSet={darkModeSet} 
          setdarkModeSet={setdarkModeSet} 
        />
        <Search 
          darkModeSet={darkModeSet} 
          selectedRegion={selectedRegion} 
          setselectedRegion={setselectedRegion} 
          countries={countries} 
          setCountries={setCountries} 
        />
        <Routes>
          <Route path='/' element={<Countries 
                                      darkModeSet={darkModeSet} 
                                      setdarkModeSet={setdarkModeSet} 
                                      selectedRegion={selectedRegion} 
                                      countries={countries} 
                                      setCountries={setCountries} 
                                    />} />
          <Route path='/country/name' element={<CountryDetails />} />
        </Routes>
      </Router>
      </div>
  )
}

export default App
