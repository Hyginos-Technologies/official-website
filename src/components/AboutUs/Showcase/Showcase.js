import React from 'react'
import './Showcase.css'

import LOGO from '../../../img/logo.png'
import MainNav from '../../main-component/MainNav'
import { Link } from 'react-router-dom'



const Showcase = () => {
  return (
    <header>
    <nav>
    <Link to='/'><h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1></Link>

      <MainNav />
      
    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
      <p className='showcase-content-caption'>About Us</p>
      <p className='showcase-title'>Our Team who Creative & Commited to Fulfill Your Needs.</p><br/>
    </div>

    </div>
  </header>
  )
}

export default Showcase