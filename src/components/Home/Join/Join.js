import React from 'react'

import './Join.css'
import Fade from 'react-reveal/Fade';

const Join = () => {
  return (
    <section className='container'>
        <div className='join-us'>
        <Fade top cascade><h1>Subscribe to our Newsletter </h1></Fade>
            <p>Signup for our weekly newsletter to get the latest news updates delivered directly in your inbox.</p>

            <form className='subscribe row'  action="https://formsubmit.co/contact@hyginostechnologies.com" method="POST">

                <input type="hidden" name="_next" value="/thank-you" />
                <input type="hidden" name="_subject" value="New Subscriber!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

            <input type="email" class="form-control col-sm-12 col-md-10"  placeholder="email@gmail.com" />
            <button type='submit' className='btn btn-dark col-sm-12 col-md-2'>Subscribe Now</button>
            </form>
        </div>
    </section>
  )
}

export default Join