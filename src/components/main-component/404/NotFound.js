import React from 'react'
import './NotFound.css'

import LOGO from '../../../img/logo.png'
import MainNav from '../MainNav'
import { Link } from 'react-router-dom'



const NotFound = () => {
  return (
    <header>
    <nav>
      <Link to='/'><h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1></Link>

    <MainNav />
    

    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
      <p className='showcase-content-caption'>This is not the web page you are looking for.</p>
      <p className='showcase-title'>404</p><br/>
    </div>

    <div className='showcase-link-container'>
    <Link to='/' className='showcase-link'>Go Home</Link>
    </div>

    </div>



  </header>

  )
}

export default NotFound