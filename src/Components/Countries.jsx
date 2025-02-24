import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import './Countries.css'

export default function Countries({darkModeSet, setdarkModeSet}) {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        async function fetchCountries() {
            const response =  await fetch("https://restcountries.com/v3.1/all")
            const country = await response.json()
            console.log(country)
            setCountries(country)
            setdarkModeSet(false)
        }
        fetchCountries() 
    }, [])

    const getCountries = async () => {
        try{

        } catch(error) {
            console.log("Error fetching data;", error)
        }
    }

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
