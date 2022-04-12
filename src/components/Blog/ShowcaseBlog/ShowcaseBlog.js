import React from 'react'
import './ShowcaseBlog.css'

import LOGO from '../../../img/logo.png'

const ShowcaseBlog = () => {
  return (
    <header>
    <nav>
      <h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
      <p className='showcase-content-caption'>Blog</p>
      <p className='showcase-title'>Stay in Touch with our News.</p><br/>
    </div>
    </div>
  </header>
  )
}

export default ShowcaseBlog