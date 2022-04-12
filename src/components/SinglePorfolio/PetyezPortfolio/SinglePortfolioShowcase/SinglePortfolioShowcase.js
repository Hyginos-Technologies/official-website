import React from 'react'
import './SinglePortfolioShowcase.css'
import LOGO from '../../../../img/logo.png'

import MainNav from '../../../main-component/MainNav'
import { Link } from 'react-router-dom'


const SinglePortfolioShowcase = () => {
  return (
    <header>
    <nav>
    <Link to='/'><h1><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1></Link>

      <MainNav />

    </nav>

    <div className='wrap-showcase-content'>
    <div className='showcase-content'>
      <p className='showcase-content-caption'>Petyez</p>
      <p className='showcase-title'>Petyez is a Pet's Dealing online shop.</p><br/>
    </div>

    </div>
  </header>
  )
}

export default SinglePortfolioShowcase