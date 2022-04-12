import React from 'react'
import './ShowcaseCareer.css'

import LOGO from '../../../img/logo.png'
import MainNav from '../../main-component/MainNav'

const ShowcaseCareer = () => {
  return (
    <header>
    <nav>
      <h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1>

    <MainNav />

    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
      <p className='showcase-content-caption'>Our Careers</p>
      <p className='showcase-title'>Be a Part of our Team.</p><br/>
    </div>

    </div>
  </header>
  )
}

export default ShowcaseCareer