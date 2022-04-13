import React from 'react'
import './ShowcaseGD.css'
import LOGO from '../../../../img/logo.png'

import MainNav from '../../../main-component/MainNav'
import { Link } from 'react-router-dom'

import Zoom from 'react-reveal/Zoom';

const ShowcaseGD = () => {
  return (
    <header>
    <nav>
    <Link to='/'><h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1></Link>

      <MainNav />
    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
    <Zoom left cascade><p className='showcase-content-caption'>Graphic Desgin</p></Zoom>
    <Zoom left cascade><p className='showcase-title'>We Design High Quality Graphics for Your Business.</p></Zoom><br/>
    </div>

    </div>
  </header>
  )
}

export default ShowcaseGD