import React from 'react'
import { Link } from 'react-router-dom'

import './OurProcess.css'

const OurProcess = () => {
  return (
    <section className='our-process'>
        <div className='container'>
        <h2>Our Process</h2>

        <div className='row'>

            <div className='col-md-4'>
                <div className='card'>
                <div className='header-card'>
                    <h1>01</h1>
                    <h3>Design</h3>
                    <hr />
                </div>

                    <p>Rinixweb is a creative and an ingenious web design firm; we take the time to understand your business from web usability and search techniques.brands by creating for them websites that push the users.</p>

                    <Link to="/services" className='home-read-more'>Read More</Link>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='card'>
                <div className='header-card'>
                    <h1>02</h1>
                    <h3>Develop</h3>
                    <hr />
                </div>

                    <p>Rinixweb is a creative and an ingenious web design firm; we take the time to understand your business from web usability and search techniques.brands by creating for them websites that push the users.</p>

                    <Link to="/services" className='home-read-more'>Read More</Link>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='card'>
                <div className='header-card'>
                    <h1>03</h1>
                    <h3>Deliver</h3>
                    <hr />
                </div>

                    <p>Rinixweb is a creative and an ingenious web design firm; we take the time to understand your business from web usability and search techniques.brands by creating for them websites that push the users.</p>

                    <Link to="/services" className='home-read-more'>Read More</Link>
                </div>
            </div>

        </div>
        </div>
    </section>
  )
}

export default OurProcess