import React from 'react'
import './ServicesContent.css'
import WEB from '../../../img/Website Creator-rafiki.svg'
import DM from '../../../img/Marketing-cuate.svg'
import GD from '../../../img/Design Process-pana.svg'
import UI from '../../../img/Design tools-amico.svg'
import { Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';

const ServicesContent = () => {
  return (
    <section className='container' id="service-container">

    <div className='single-service'>
        <Link to="/services/web-dev">
        <Fade top cascade><h2 className='text-dark'>WEB DEVELOPMENT</h2></Fade>
            <div className='image-container'>
            <RubberBand><img src={WEB} /></RubberBand>
            </div>
            <p>We are a Web development company in india. we are specializes in digital products and custom website design and development services that includes we application design,Prototyping,UI/UX designs and business consulting. Our web development company has a 2+ years of experience and a team of 15+ we deliver excellent web solutions to clients.</p>
        </Link>
    </div>

    <div className='single-service'>
        <Link to="/services/digital-marketing">
        <Fade top cascade><h2 className='text-dark'>DIGITAL MARKETING</h2></Fade>
            <div className='image-container'>
            <RubberBand><img src={DM} /></RubberBand>
            </div>
            <p>Hyginos Technologies digital marketing team help you develop an online marketing strategy to drive more qualified visitors to your site and convert those visitors into leads and sales. What are you waiting for? <Link to="/contact-us">Contact us.</Link></p>
        </Link>
    </div>

    <div className='single-service'>
    <Link to="/services/graphic-design">
    <Fade top cascade><h2 className='text-dark'>GRAPHIC DESIGN</h2></Fade>
        <div className='image-container'>
        <RubberBand><img src={GD} /></RubberBand>
        </div>

        <p>HYGINOS TECHNOLOGIES is a passionate graphic design service provider in the online market. Our creative designers offer outstanding and attention-grabbing visuals for brochures, banners, flyers, business cards, e-books, and many more.Our graphic designs can develop a great impression on your prospect’s mind. With a complete mixture of professionalism and stunning creativity skills, our expert designers can establish a bright profile for your business in the online world.</p>
    </Link>
    </div>

    <div className='single-service'>
    <Link to="/services/ui-ux">
    <Fade top cascade><h2 className='text-dark'>UX\UI DESIGN</h2></Fade>
        <div className='image-container'>
        <RubberBand><img src={UI} /></RubberBand>
        </div>
        <p>Our UI/UX design and development services are focused on creating interfaces that make every digital interaction a delightful user experience. We work as an extended UX/UI team for companies and startups, bringing an in-depth understanding of the business, design and technical aspects so as to build digital products with a great user experience that affirms the business goals</p>
    </Link>
    </div>



    </section>
  )
}

export default ServicesContent