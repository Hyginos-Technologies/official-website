import React from 'react'
import './HowWeWork.css'

import MI from '../../../img/home-about-us.png';
import B1 from '../../../img/group-b-1.png';
import R1 from '../../../img/group-r-1.png';
import { Link } from 'react-router-dom';

const HowWeWork = () => {
  return (
    <section className='container'>
        <div className='how-we-work row'>

            <div className='col-md-6 how-we-work-left'>
                <div>
                <h2>HOW WE WORK</h2>
                <p><span>“</span>Rinixweb is a creative and an ingenious web design firm; we take the time to understand your business from web usability and search techniques.brands by creating for them websites that push the users.</p>

                <p>Rinixweb is a creative and an ingenious web design firm; we take the time to understand your business from web usability and search techniques.brands by creating for them websites that push the users..</p>

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