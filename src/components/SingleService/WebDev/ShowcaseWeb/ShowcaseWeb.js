import React from 'react'
import './ShowcaseWeb.css'
import LOGO from '../../../../img/logo.png'

import MainNav from '../../../main-component/MainNav'
import { Link } from 'react-router-dom'



const ShowcaseWeb = () => {
  return (
    <header>
    <nav>
    <Link to='/'><h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1></Link>

      <MainNav />

    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
      <p className='showcase-content-caption'>Web Development</p>
      <p className='showcase-title'>We Development Efficient & High Quality Web Products.</p><br/>
    </div>

    </div>
  </header>
  )
}

export default ShowcaseWeb