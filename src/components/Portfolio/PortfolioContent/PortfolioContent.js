import React from 'react'
import './PortfolioContent.css'
import IMG from '../../../img/logo-f.svg'
import { Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade';

const PortfolioContent = () => {
  return (
    <section id="portfolio-content" className='container my-3'>

      <div className='portoflio-title'>
      <Fade top cascade><h2>OUR PORTFOLIO</h2></Fade>
        <hr />
      </div>

      <div className='row'>

        <div className='col-md-12 my-5'>
          <div className='row portfolio-single'>
            <img src={IMG} className='col-sm-12 col-md-6' alt='PORTFOLIO' />

            <div className='col-sm-12 col-md-6 portfolio-desc'>
            <h3>Petyez</h3>
            <p>Petyez helps users to post their pets for adoption, mating and disappear. With petyez, users can also find pets according to their location or particular category such as Dogs, Birds, Cats and Exotic pets for adoption, mating or disappear purpose.</p>

            <Link to="/portfolio/petyez" style={{color:'#666'}}><i class="fa-solid fa-arrow-right"></i></Link>
            
            </div>

          </div>
        </div>

      </div>




    </section>
  )
}

export default PortfolioContent