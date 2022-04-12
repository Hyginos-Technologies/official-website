import React from 'react'
import './Showcase.css'
import LOGO from '../../../img/logo.png'

import MainNav from '../../main-component/MainNav'

const Showcase = () => {
  return (
    <header>
    <nav>
      <h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1>

      <MainNav />

    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
      <p className='showcase-content-caption'>Our Services</p>
      <p className='showcase-title'>Providing Vast Array of Services for Your Business.</p><br/>
    </div>

    </div>
  </header>
  )
}

export default Showcase