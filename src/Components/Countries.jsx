import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import './Countries.css'

export default function Countries({darkModeSet, setdarkModeSet, selectedRegion, countries, setCountries}) {

    //call the API and display all countries on mount
    useEffect(() => {
        async function fetchCountries() {
            const response =  await fetch("https://restcountries.com/v3.1/all")
            const country = await response.json()
            setdarkModeSet(false)
            setCountries(country)
            // console.log(country)
        }
        fetchCountries() 
    }, [])

  return (
    <div className='countryContainer'>
      {countries.map((indcountry, index) => (
        <div key={index}> 
            <CountryCard indcountry={indcountry} darkModeSet={darkModeSet} />
        </div>
      ))}
    </div>
  )
}
