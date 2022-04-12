import React from 'react'
import './PetyezPortfolio.css'
import IMG from '../../../../img/logo-f.svg'
import GP from '../../../../img/google-play.png'

import P from '../../../../img/petyez/unnamed.webp'
import P1 from '../../../../img/petyez/unnamed-1.webp'
import P2 from '../../../../img/petyez/unnamed-2.webp'
import P3 from '../../../../img/petyez/unnamed-3.webp'
import P4 from '../../../../img/petyez/unnamed-4.webp'
import P5 from '../../../../img/petyez/unnamed-5.webp'
import P6 from '../../../../img/petyez/unnamed-6.webp'
import P7 from '../../../../img/petyez/unnamed-7.webp'

const PetyezPortfolio = () => {
  return (
    <section className='container my-5' id='single-portfolio'>

      <div className='desc'>
        <h2>PETYEZ</h2>
        <img src={IMG} className='logo' />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        <div className='image-google-play'>
        <a href='https://play.google.com/store/apps/details?id=com.pet_animals' target='_blank'><img src={GP} /></a>
      </div>
      </div>

      <h3>See the App</h3>

      <ul className='sample-portfolio'>
        <li><img src={P} /></li>
        <li><img src={P1} /></li>
        <li><img src={P2} /></li>
        <li><img src={P3} /></li>
        <li><img src={P4} /></li>
        <li><img src={P5} /></li>
        <li><img src={P6} /></li>
        <li><img src={P7} /></li>
      </ul>

    </section>
  )
}

export default PetyezPortfolio