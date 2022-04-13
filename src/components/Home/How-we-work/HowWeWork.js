import React from 'react'
import './HowWeWork.css'

import MI from '../../../img/home-about-us.png';
import B1 from '../../../img/group-b-1.png';
import R1 from '../../../img/group-r-1.png';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

const HowWeWork = () => {
  return (
    <section className='container'>
        <div className='how-we-work row'>

            <div className='col-md-6 how-we-work-left'>
                <div>
                <Fade top cascade><h2>HOW WE WORK</h2></Fade>
                <p><span>“</span>We have an amazing team who are dedicated and motivated to work for our company.We at Hyginos Technologies treat our team as our own family.</p>

                <p>Interms of working environment we have a great collabrative environment that increases our productivity and do our best work possible.</p>

                <Link to='/about' className='home-about'>Visit Now</Link>
                </div>
            </div>

            <div className='col-md-6 how-we-work-right'>
                <img src={R1} className='how-we-work-r-1' />
                <img src={MI} className='how-we-work-main-1' />
                <img src={B1} className='how-we-work-b-1' />
            </div>

        </div>
    </section>
  )
}

export default HowWeWork