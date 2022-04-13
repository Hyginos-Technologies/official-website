import React from 'react'
import './NotFound.css'

import LOGO from '../../../img/logo.png'
import MainNav from '../MainNav'
import { Link } from 'react-router-dom'

import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';

const NotFound = () => {
  return (
    <header>
    <nav>
      <Link to='/'><h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1></Link>

    <MainNav />
    

    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
    <Zoom left cascade><p className='showcase-content-caption'>This is not the web page you are looking for.</p></Zoom>
    <Zoom left cascade><p className='showcase-title'>404</p></Zoom><br/>
    </div>

    <Rotate top left><div className='showcase-link-container'>
    <Link to='/' className='showcase-link'>Go Home</Link>
    </div></Rotate>

    </div>



  </header>

  )
}

export default NotFound