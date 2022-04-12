import React from 'react'

import './GetInTouch.css'
import IMG from '../../../img/contact-us.png'
import R1 from '../../../img/group-r.png'
import B1 from '../../../img/group-b.png'

const GetInTouch = () => {
  return (
    <section className='container my-4'>
        <div className='get-in-touch'>
            <h1 className='get-in-touch-title'>Contact Us</h1>

            <div className='row'>
                <div className='col-md-5'>  
                <div className='contact-im-container'>
                <img src={R1} className='contact-r' />
                <img src={IMG} className='main-image' />
                <img src={B1} className='contact-b' />
                </div>
                </div>

                <form className='col-md-7' action="https://formsubmit.co/contact@hyginostechnologies.com" method="POST">

                <input type="hidden" name="_next" value="/thank-you" />
                <input type="hidden" name="_subject" value="New Client!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <h3>Get In Touch</h3>
                <div className='row'>
                <div className='col-md-6 col-sm-12 my-2'>
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" placeholder="Your Name" />
                </div>

                <div className='col-md-6 col-sm-12 my-2'>
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" placeholder="Email" />
                </div>

                <div className='col-md-12 col-sm-12 my-2'>
                    <label class="form-label">Subject</label>
                    <input type="text" class="form-control" placeholder="Subject" />
                </div>

                <div className='col-md-12 col-sm-12 my-2'>
                <label class="form-label">Message</label>
                <textarea class="form-control" placeholder='Message' rows="5"></textarea>
                </div>

                <div className='col-md-12 col-sm-12 my-2 '>
                <button class="btn btn-dark w-100" type="button">Submit Now</button>
                </div>

                </div>

            </form>

            </div>
            
      

        </div>
    </section>
  )
}

export default GetInTouch