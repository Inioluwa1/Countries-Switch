import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import './Search.css'

export default function Search({darkModeSet, selectedRegion, setselectedRegion, setCountries}) {
  const [searchedCountry, setsearchedCountry] = useState("")

  //set the region selected by the user
  const handleRegionChange = (e) => {
    setselectedRegion(e.target.value)    
  } 

  //change the countries displayed based on the region selected by the user
  useEffect(() => {
    async function updateCountriesbyRegion(){
      if (selectedRegion === "") {
        const response =  await fetch("https://restcountries.com/v3.1/all")
        const country = await response.json()
        setCountries(country)
        return
      };

      try{
        const response = await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`);
        const countrybyRegion = await response.json();
        // console.log(countrybyRegion)
        setCountries(countrybyRegion);
        // console.log(countries)

      } catch(error) {
          console.log("Error fetching data;", error) 
      }
    }
    updateCountriesbyRegion();
  }, [selectedRegion])

  //set the country searched by the user
  const handleCountryChange = (e) => {
    setsearchedCountry(e.target.value)
    // console.log(searchedCountry)
  }
  //change the country displayed based on the country searched by the user
  const updateCountriesbyRegion = async () => {
    try{
      const response = await fetch(`https://restcountries.com/v3.1/name/${searchedCountry}?fullText=true`)
      if(!response.ok){
        alert(`${searchedCountry} not found. Please try another country`)
        return
      }

      const countrybySearch = await response.json();
      setCountries(countrybySearch)


    } catch (error){
      console.log("Error fetchung data:", error)
    }
  }

  return (
    <div className={`searchContainer ${darkModeSet? "dark" : ""} `}>

      <div className={`search ${darkModeSet? "dark" : ""}`} >
        <IoIosSearch size={50} className='searchIcon' />
        <input type='text'  value={searchedCountry} onChange={handleCountryChange} placeholder='Search for a country...' className={`input ${darkModeSet? "dark" : ""}`} />
        <FaArrowRight size={40} className='searchIcon' onClick={updateCountriesbyRegion} />
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
