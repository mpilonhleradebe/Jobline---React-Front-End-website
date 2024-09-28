import React from 'react'
import Logo from './Logo'
const Navbar = () => {
  return (
      <nav className='navBar'>
          <a href=""><Logo /></a>
          <ul className='nav-list'>
              <li><a href="">Find Jobs</a></li>
              <li><a href="">People</a></li>
              <li><a href="">Hiring site</a></li>
              <li><a href="">Resumes</a></li>
          </ul>
          <div className="signButtons">
          <button>Sign Up</button>
          <button style={{backgroundColor: "#3C5E33", color: "white",}}>Sign In</button>
          </div>
          {/* <div className="lang-options">
          <label for="Languages"><img src="https://img.icons8.com/glyph-neue/64/globe--v1.png" alt="" /></label>
          <select name="Languages" id="Lang">
              <option value="English - US">English - US</option>
              <option value="English - UK">English - UK</option>
              <option value="Afrikaans">Afrikaans</option>
          </select>
          </div> */}
    </nav>
  )
}

export default Navbar