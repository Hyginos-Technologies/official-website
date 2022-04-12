import React from 'react'

import './ServicesProvide.css';

import GD from '../../../img/graphic-design.png';
import EC from '../../../img/ecommerce.png';
import UI from '../../../img/ux-interface.png';
import DM from '../../../img/megaphone.png'
import { Link } from 'react-router-dom';

const ServicesProvide = () => {
  return (
    <section className='container p-5' id='service-card-container'>
        <div className='service-provide-title'>
        <h2>Service Details</h2>
        <h5><span>Home / </span>Service</h5>
        </div>

        <div className='row' id='services-card'>
            <Link className='col-md-3' to='/services/graphic-design' style={{textDecoration:'none'}}>
            <div class="card" >
                <div class="card-body">
                    <img src={GD} />
                    <h5 class="card-title text-dark">Graphic Design</h5>
                    <p class="card-text">Rinixweb is a creative and an ingenious web design firm; we take the time to understand your business from web usability and search techniques.brands by creating for them websites that push the users.</p>
                </div>
            </div>

            </Link>

            <Link className='col-md-3' to='/services/ui-ux'  style={{textDecoration:'none'}}>
            <div class="card" >
                <div class="card-body">
                    <img src={UI} />
                    <h5 class="card-title text-dark">UI/UX design</h5>
                    <p class="card-text">Rinixweb is a creative and an ingenious web design firm; we take the time to understand your business from web usability and search techniques.brands by creating for them websites that push the users.</p>
                </div>
            </div>
            </Link>

            <Link className='col-md-3' to='/services/digital-marketing'  style={{textDecoration:'none'}}>

            <div class="card" >
                <div class="card-body">
                    <img src={DM} />
                    <h5 class="card-title text-dark">Digital Marketing</h5>
                    <p class="card-text">Rinixweb is a creative and an ingenious web design firm; we take the time to understand your business from web usability and search techniques.brands by creating for them websites that push the users.</p>
                </div>
            </div>
            </Link>

            <Link className='col-md-3' to='/services/web-dev'  style={{textDecoration:'none'}}>
            <div class="card" >
                <div class="card-body">
                    <img src={EC} />
                    <h5 class="card-title text-dark">Web Development</h5>
                    <p class="card-text">Rinixweb is a creative and an ingenious web design firm; we take the time to understand your business from web usability and search techniques.brands by creating for them websites that push the users.</p>
                </div>
            </div>
            </Link>
        </div>

    </section>
  )
}

export default ServicesProvide