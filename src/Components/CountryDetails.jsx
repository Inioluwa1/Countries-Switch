import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import './CountryDetails.css'

export default function CountryDetails() {

  const navigate = useNavigate()
  const location = useLocation()
  const country = location.state?.indcountry;

  const goBackHome = () => {
    navigate('/')
    // console.log('Navigating back to home page')
  }

  console.log(country)

  return (
    <div className='CountryDetails'>

      <div className='backButton' onClick={goBackHome}>
        <FaArrowLeftLong size={20} />
        <p> Back </p>
      </div>

      <div className='Details'> 
        <div className='flag'> 
          <img src={country?.flags.svg} />
        </div>

        <div className='NameDetails'>
          <h1 className='Countryname'> {country?.name.common} </h1>
          <div className='DetailsInfo'>
            <div className=''>
              <p> <strong> Native name: </strong> {(country?.altSpellings[0])} </p>
              <p> <strong> Population: </strong> {country?.population} </p>
              <p> <strong> Region: </strong> {country?.region} </p>
              <p> <strong> Sub Region: </strong> {country?.subregion} </p>
              <p> <strong> Capital: </strong> {country?.capital} </p>
            </div>
            <div className='oDetails'>
              <span> <strong> Top Level Domain: </strong> </span>
              {Object.entries(country?.tld).map(([tldname, tldvalue], index) => (
                <span key={index}> {tldvalue} </span> 
              ))} <br></br>
              <span> <strong> Currencies: </strong> </span> 
              {Object.entries(country?.currencies).map(([currencyname, currencyvalue], index) => (
                <span key={index}> {currencyvalue.name} </span>
              ))} <br></br>
              <span> <strong> Languages: </strong></span>
              {Object.entries(country?.languages).map(([languagename, languagevalue], index) => (
                <span key={index}> {languagevalue} </span>
              ))}
            </div>
          </div>
          <div className='BorderCountries' >
            <p> <strong>Border Countries: </strong> </p>
            {country.borders? country?.borders.map((border, index) => (
              <p className='bordercountry' key={index}> {border} </p>
            )) : <p className='bordercountry'> No border countries available to display </p> }
          </div>
        </div>
      </div>      
    </div>
  )
}
