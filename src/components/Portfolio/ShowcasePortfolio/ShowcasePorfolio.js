import React from 'react'
import './ShowcasePortfolio.css'
import LOGO from '../../../img/logo.png'

import MainNav from '../../main-component/MainNav'

const ShowcasePorfolio = () => {
  return (
    <header>
    <nav>
      <h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1>

      <MainNav />

    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
      <p className='showcase-content-caption'>Our Portfolio</p>
      <p className='showcase-title'>Some of Our Best Work are Showcased Below.</p><br/>
    </div>

    </div>

  </header>
  )
}

export default ShowcasePorfolio