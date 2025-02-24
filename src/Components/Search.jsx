import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import './Search.css'

export default function Search({darkModeSet}) {
  const [selectedRegion, setselectedRegion] = useState("")

  const handleRegionChange = (e) => {
    setselectedRegion(e.target.value)
    console.log(selectedRegion)
  } 

  return (
    <div className={`searchContainer ${darkModeSet? "dark" : ""} `}>
      <div className={`search ${darkModeSet? "dark" : ""}`} >
        <IoIosSearch size={50} className='searchIcon' />
        <input type='text' placeholder='Search for a country...' className={`input ${darkModeSet? "dark" : ""}`} />
      </div>
      <div className={`selectRegionContainer ${darkModeSet? "dark" : ""}`} >
        <select className={`selectRegion ${darkModeSet? "dark" : ""}`} value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Filter by Region</option>
          <option value="Africa"> Africa </option>
          <option value="America"> America </option>
          <option value="Asia"> Asia </option>
          <option value="Europe"> Europe </option>
          <option value="Oceania"> Oceania </option>
        </select>
      </div>
    </div>
  )
}
