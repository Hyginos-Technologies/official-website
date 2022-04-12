import React from 'react'
import './thankyou.css'

import LOGO from '../../../img/logo.png'
import { Link } from 'react-router-dom'

import MainNav from '../MainNav'

const thankyou = () => {
  return (
    <header>
    <nav>
    <Link to='/'><h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1></Link>

      <MainNav />
      
    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
      <p className='showcase-content-caption'>Thank You </p>
      <p className='showcase-title'>Thank You For Contacting Us We Will Get Back To You Soon..</p><br/>
    </div>

    <div className='showcase-link-container'>
      <Link to='/' className='showcase-link'>Go Home</Link>
      </div>

    </div>
  </header>
  )
}

export default thankyou