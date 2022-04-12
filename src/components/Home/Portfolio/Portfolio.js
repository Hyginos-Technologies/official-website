import React from 'react'

import './Portfolio.css'
import GP from '../../../img/google-play.png'
import LOGO from '../../../img/logo-f.svg'
import { Link } from 'react-router-dom'



const Portfolio = () => {
  return (
    <section className='portfolio-home'>
        <div className='container'>
            <h2>Portfolio</h2>

            <div className='portfolio-card'>
              <Link to='/portfolio/petyez' style={{textDecoration:'none',color:'#313131'}}>
                <div className='inner-portfolio-card'>
                <h1>Petyez</h1>
                <img src={LOGO} className='logo-petyez' /><br />
                <img src={GP} className='google-play-logo' />
                </div>
                </Link>
            </div>

          

        </div>
    </section>
  )
}

export default Portfolio