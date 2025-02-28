import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CountryCard from './CountryCard'
import './Countries.css'

export default function Countries({darkModeSet, setdarkModeSet, selectedRegion, countries, setCountries, setSearch}) {
    const navigate = useNavigate()

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
            <CountryCard indcountry={indcountry} darkModeSet={darkModeSet} navigate={navigate} setSearch={setSearch} />
        </div>
      ))}
    </div>
  )
}
