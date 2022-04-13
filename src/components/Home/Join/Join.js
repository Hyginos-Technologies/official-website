import React from 'react'

import './Join.css'
import Fade from 'react-reveal/Fade';

const Join = () => {
  return (
    <section className='container'>
        <div className='join-us'>
        <Fade top cascade><h1>Subscribe to our Newsletter </h1></Fade>
            <p>Signup for our weekly newsletter to get the latest news updates delivered directly in your inbox.</p>

            <form className='subscribe'>
            <input type="email" class="form-control"  placeholder="email@gmail.com" />
            <button className='btn btn-dark'>Subscribe Now</button>
            </form>
        </div>
    </section>
  )
}

export default Join