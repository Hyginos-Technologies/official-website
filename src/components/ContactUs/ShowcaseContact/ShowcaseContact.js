import React from 'react'
import './ShowcaseContact.css'
import LOGO from '../../../img/logo.png'

import MainNav from '../../main-component/MainNav'

const ShowcaseContact = () => {
  return (
    <header>
    <nav>
      <h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1>

      <MainNav />

    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
      <p className='showcase-content-caption'>Contact Us</p>
      <p className='showcase-title'>For all enquiries ,please email us using the form below.</p><br/>
    </div>

    </div>
  </header>
  )
}

export default ShowcaseContact