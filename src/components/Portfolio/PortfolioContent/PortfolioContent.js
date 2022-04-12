import React from 'react'
import './PortfolioContent.css'
import IMG from '../../../img/logo-f.svg'
import { Link } from 'react-router-dom'

const PortfolioContent = () => {
  return (
    <section id="portfolio-content" className='container my-3'>

      <div className='portoflio-title'>
        <h2>OUR PORTFOLIO</h2>
        <hr />
      </div>

      <div className='row'>

        <div className='col-md-12 my-5'>
          <div className='portfolio-single'>
            <img src={IMG} alt='PORTFOLIO' />

            <div className='portfolio-desc'>
            <h3>Petyez</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <Link to="/portfolio/petyez"><i class="fa-solid fa-arrow-right"></i></Link>
            
            </div>

          </div>
        </div>

      </div>




    </section>
  )
}

export default PortfolioContent