import React from 'react'

import './Showcase.css'
import LOGO from '../../../img/logo.png'

import MainNav from '../../main-component/MainNav'
import { Link } from 'react-router-dom'


const Showcase = () => {
  return (
    <header>
      <nav>
        <h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1>
  
      <MainNav />
      

      </nav>

      <div className='wrap-showcase-content'>
      <div className='showcase-content'>
        <p className='showcase-content-caption'>IT Design & Consulting</p>
        <p className='showcase-title'>Our Intelligent Technology Solutions and Services.</p><br/>
      </div>

      <div className='showcase-link-container'>
      <Link to='/services' className='showcase-link'>Our Services</Link>
      </div>

      </div>



    </header>
  )
}

export default Showcase