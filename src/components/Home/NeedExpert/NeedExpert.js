import React from 'react'
import './NeedExpert.css'

import E1 from '../../../img/e-1.png'
import E2 from '../../../img/e-2.png'
import E3 from '../../../img/e-3.png'
import E4 from '../../../img/e-4.png'
import B1 from '../../../img/group-b.png'

import Fade from 'react-reveal/Fade';

const NeedExpert = () => {
  return (
    <section className='container'>
        <div className='need-experts'>
            <div className='main-content-expert'>
            <Fade top cascade><h2>MEET OUR CREATEIVE TEAM</h2></Fade>
            </div>

        <div className='row'>
            <div className='col-md-4 text-center expert-image-left expert-image-right'>
                <img src={B1} className='box-left' />
                <img src={E1} alt='e' className='e-image' />
                <div className='expert-content'>
                <h5>GAVARRAJU RAJAPANTHULA</h5>
                <p>CEO/IT INDUSTRY</p>
                </div>

                  {/* Social Media */}
                  <div className='social-single-link'>
                    <a href='#'><i class="fa-brands fa-twitter"></i></a>
                    <a href='#'><i class="fa-brands fa-facebook"></i></a>
                </div>

            </div>

            <div className='col-md-4 text-center expert-image-right'>
                <img src={E2} alt='m' className='e-image' />
                <div className='expert-content'>
                <h5>GIMNA KATUGAMPALA</h5>
                <p>SOFTWARE ENGINEER</p>
                </div>

                  {/* Social Media */}
                  <div className='social-single-link'>
                    <a href='https://twitter.com/kavishkagimna' target='_blank'><i class="fa-brands fa-twitter"></i></a>
                    <a href='https://web.facebook.com/gimna.katugampala' target='_blank'><i class="fa-brands fa-facebook"></i></a>
                </div>

            </div>

            <div className='col-md-4 text-center expert-image-right'>
                <img src={B1} className='box-right' />
                <img src={E3} alt='4' className='e-image' />
                <div className='expert-content'>
                <h5>ABU BAKKAR</h5>
                <p>UI/UX DESIGNER</p>
                </div>

                  {/* Social Media */}
                  <div className='social-single-link'>
                    <a href='#'><i class="fa-brands fa-twitter"></i></a>
                    <a href='#'><i class="fa-brands fa-facebook"></i></a>
                </div>

            </div>

             <div className='col-md-4 text-center expert-image-right'>
                <img src={B1} className='box-right' />
                <img src={E4} alt='4' className='e-image' />
                <div className='expert-content'>
                <h5>AYODEJI</h5>
                <p>FLUTTER DEVELOPER</p>
                </div>

                {/* Social Media */}
                <div className='social-single-link'>
                    <a href='#'><i class="fa-brands fa-twitter"></i></a>
                    <a href='#'><i class="fa-brands fa-facebook"></i></a>
                </div>

            </div>

        </div>

        </div>
    </section>
  )
}

export default NeedExpert