import React from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import './Header.css'

export default function Header({darkModeSet, setdarkModeSet}) {
  
  const handleModeChange = () => {
    setdarkModeSet(!darkModeSet)
    console.log(darkModeSet)
  }

  return (
    <div className={`headerContainer ${darkModeSet? "dark" : ""}` }>
      <h1> Where in the world? </h1>
      <div className='darkMode' onClick={handleModeChange}>
        {darkModeSet? <IoIosMoon size={30} className="moon" /> : <IoMoonOutline size={30} className="moon" />}
        <p> {darkModeSet? "Dark Mode" : "Light Mode"} </p>
      </div>
    </div>
  )
}
 