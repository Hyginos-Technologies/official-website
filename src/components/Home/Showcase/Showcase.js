import React from 'react'

import './Showcase.css'
import LOGO from '../../../img/logo.png'

import MainNav from '../../main-component/MainNav'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';


const Showcase = () => {
  return (
    <header>
      <nav>
        <Link to='/'><h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1></Link>
  
      <MainNav />
      

      </nav>

      <div className='wrap-showcase-content'>
      <div className='showcase-content'>
      <Zoom left cascade><p className='showcase-content-caption'>IT Design & Consulting</p></Zoom>
      <Zoom left cascade><p className='showcase-title'>Our Intelligent Technology Solutions and Services.</p></Zoom><br/>
      </div>

      <Rotate top left><div className='showcase-link-container'>
      <Link to='/services' className='showcase-link'>Our Services</Link>
      </div></Rotate>

      </div>



    </header>
  )
}

export default Showcase