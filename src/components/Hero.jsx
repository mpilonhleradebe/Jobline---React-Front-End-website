import React, { useState } from 'react'
import search from '../assets/icons/search.svg';
import location from '../assets/icons/map-pin.svg'
const Hero = () => {
    const [city, setCity] = useState("Newcastle")
  return (
      <div className="heroDiv">
          <h1 className='find-title'>Find your <div className="dream-jobs">dream jobs</div> in <br />{city}</h1>
          <p className='paragraph'>When you're searching for a job, there are a few things you can do <br />to get the most out of your search </p>
          <div className="search-bar">
              <div className="iconBackground"><img src={search} alt="search icon" /></div>
              <input type="text" id='jobSearch' placeholder='Job title or keyword' />
              <div className="locationSelector">
                  <img src={location} alt="location pin" /> 
                  <p >Any location </p> 
              </div>
          </div>
    </div>
  )
}

export default Hero
