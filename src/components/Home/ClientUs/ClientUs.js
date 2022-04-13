import React from 'react'
import './ClientUs.css'

import C1 from '../../../img/client-1.png'

import Fade from 'react-reveal/Fade';

const ClientUs = () => {
  return (
    <section className='client-us'>
        <div className='container'>
            <div className='content-client'>
            <Fade top cascade><h1>What Client Say About Us</h1></Fade>
                <p>“Rinixweb is a creative and an ingenious web design firm; we take the time to understand your business from web usability and search techniques.brands by creating for them websites that push the users.”</p>
                <div className='client-profile'>
                    <img src={C1} />
                    <div>
                        <h6>John Malik</h6>
                        <p>CEO,Fransico</p>
                    </div>
                </div>

                <div className='slide-icons'>
                <i class="fa-solid fa-minus"></i>
                <i class="fa-solid fa-minus"></i>
                <i class="fa-solid fa-minus"></i>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ClientUs