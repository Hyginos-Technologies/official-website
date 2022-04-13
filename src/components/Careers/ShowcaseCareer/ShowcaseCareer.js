import React from 'react'
import './ShowcaseCareer.css'

import LOGO from '../../../img/logo.png'
import MainNav from '../../main-component/MainNav'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';


const ShowcaseCareer = () => {
  return (
    <header>
    <nav>
    <Link to='/'><h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1></Link>

    <MainNav />

    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
    <Zoom left cascade><p className='showcase-content-caption'>Our Careers</p></Zoom>
    <Zoom left cascade><p className='showcase-title'>Be a Part of our Team.</p></Zoom><br/>
    </div>

    </div>
  </header>
  )
}

export default ShowcaseCareer