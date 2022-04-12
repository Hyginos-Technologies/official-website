import React from 'react'
import './ShowcaseUIUX.css'
import LOGO from '../../../../img/logo.png'

import MainNav from '../../../main-component/MainNav'

const ShowcaseUIUX = () => {
  return (
    <header>
    <nav>
      <h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1>

      <MainNav />

    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
      <p className='showcase-content-caption'>UI /UX Design</p>
      <p className='showcase-title'>We Design Creative & Attractive UI Designs.</p><br/>
    </div>

    </div>
  </header>
  )
}

export default ShowcaseUIUX