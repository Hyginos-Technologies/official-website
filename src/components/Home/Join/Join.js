import React from 'react'

import './Join.css'

const Join = () => {
  return (
    <section className='container'>
        <div className='join-us'>
            <h1>Subscribe to our Newsletter </h1>
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