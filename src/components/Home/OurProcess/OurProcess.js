import React from 'react'
import { Link } from 'react-router-dom'

import './OurProcess.css'
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

const OurProcess = () => {
  return (
    <section className='our-process'>
        <div className='container'>
        <Fade top cascade><h2>Our Process</h2></Fade>

        <div className='row'>

            <div className='col-md-4 col-sm-12'>
            <Pulse>
                <div className='card'>
                <div className='header-card'>
                    <h1>01</h1>
                    <h3>Design</h3>
                    <hr />
                </div>

                    <p>Our UI/Ux Designers will make sure that your dream application is designed as please.We Will Design your idea or application with the newest technologies in the industry.</p>

                    <Link to="/services" className='home-read-more'>Read More</Link>
                </div>
                </Pulse>
            </div>

            <div className='col-md-4 col-sm-12'>
            <Pulse>
                <div className='card'>
                <div className='header-card'>
                    <h1>02</h1>
                    <h3>Develop</h3>
                    <hr />
                </div>

                    <p>After finishing the desinging part our developer will Develop our application perfectly with the functinalities that you wish to have.Our applications will be realiable and secure.</p>

                    <Link to="/services" className='home-read-more'>Read More</Link>
                </div>
                </Pulse>
            </div>

            <div className='col-md-4 col-sm-12'>
            <Pulse>
                <div className='card'>
                <div className='header-card'>
                    <h1>03</h1>
                    <h3>Deliver</h3>
                    <hr />
                </div>

                    <p>After Finish Developing we will go through bunch of testing of the application and make sure that the application is user friendly.After those tests are done we will package it for deploy.</p>

                    <Link to="/services" className='home-read-more'>Read More</Link>
                </div>
                </Pulse>
            </div>

        </div>
        </div>
    </section>
  )
}

export default OurProcess