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
        <p>Petyez helps users to post their pets for adoption, mating and disappear. With petyez, users can also find pets according to their location or particular category such as Dogs, Birds, Cats and Exotic pets for adoption, mating or disappear purpose.You can select a particular pet or search for pet and view all the information associated to the selected pet such as pictures of the pet, details of the pet, and contact details of the pet owner.You can find pets according to various categories and also filter by Breeds, Sex, Age, Vaccinated, Registered, Pet for (Adoption, Mating & Disappear), Sort by (Price and Date).A simple chat page is provided which enables the user to contact with the owner of the pet, it helps the user to find extra details of the pet by chatting with the owner.</p>
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