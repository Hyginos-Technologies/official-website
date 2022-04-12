import React from 'react'
import './CareerContent.css'

import IMG from '../../../img//about-us-new.png'

const CareerContent = () => {
  return (
    <section className='container my-5' id='career'>
    <div className='news-title'>
        <h2>We're hiring !</h2>
        <hr />
    </div>

    <div className='row'>
        <div className='blog'>
            <div class="card">
            <div class="card-body">

              <div className='header'>
                 <img class="card-img-top" src={IMG} alt="Card image cap" />

                 <div className='header-title'>
                  <h5 class="card-title">IOS + Flutter Developer</h5>
                    <div className='location'>
                    <i class="fa-solid fa-location-dot"></i><p>Kakinada , Andhra Pradesh</p>
                    </div>
                 </div>
              </div>
                <br />
                <p>Transportation : NOT Available</p>
                <p>Salary : As Per Company Standard</p>
                
                <div className='footer-card'>
                  <p>Experience : 3 -6 Years</p>
                  <a href='mailto:career@Hyginostechnologies.com'>career@Hyginostechnologies.com</a>
                </div>

            </div>
            </div>
        </div>
    </div>

</section>
  )
}

export default CareerContent