import React from 'react'
import './ShowcaseDM.css'
import LOGO from '../../../../img/logo.png'

import MainNav from '../../../main-component/MainNav'
import { Link } from 'react-router-dom'



const ShowcaseDM = () => {
  return (
    <header>
    <nav>
    <Link to='/'><h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1></Link>

      <MainNav />

    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
      <p className='showcase-content-caption'>Digital Marketing</p>
      <p className='showcase-title'>We Provide Digital Marketing using new Technologies.</p><br/>
    </div>

    </div>
  </header>
  )
}

export default ShowcaseDM