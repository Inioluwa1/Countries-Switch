import React from 'react'
import './CountryCard.css'

export default function CountryCard({indcountry, darkModeSet, navigate, setSearch}) {

  const handleNavigation = () => {
    navigate('./country', { state: {indcountry}})
    setSearch(false)
  }

  return (
    <div className={`Countrycard ${darkModeSet? "dark" : ""} `} onClick={handleNavigation} >
      <img src={indcountry.flags.png} alt={indcountry.flags.alt} className={`countryImage ${darkModeSet? "dark" : ""}`} />
      <div className={`detailscontainer ${darkModeSet? "dark" : ""}`}>
        <h1> {indcountry.name.common} </h1>
        <div className='details'>
          <p> <strong> Population: </strong> {indcountry.population} </p>
          <p> <strong> Region: </strong> {indcountry.region} </p>
          <p> <strong> Capital: </strong> {indcountry.capital} </p>
        </div>
      </div>
    </div>
  )
}
 