import React from 'react'
import './CountryCard.css'

export default function CountryCard({indcountry, darkModeSet}) {
  return (
    <div className={`Countrycard ${darkModeSet? "dark" : ""} `}>
      <img src={indcountry.flags.png} alt={indcountry.name.common} className={`countryImage ${darkModeSet? "dark" : ""}`} />
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
 