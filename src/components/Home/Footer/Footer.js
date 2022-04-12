import React from 'react'
import './Footer.css'
import SocialBar from '../../SocialBar/SocialBar'
import LOGO from '../../../img/logo.png'

const Footer = () => {
  return (
    <footer className='container-fluid w-100 row'>
    <div className='col-md-12 '>
    <h1 className='footer-logo-cover'><span className='logo'><img src={LOGO} /></span>Hyginos technologies</h1>
    </div>

    <div className='col-md-4'>
    <h2 className='py-2'>About Us</h2>
    <p>Whether you’re an artist, songwriter, musician, label or music publisher, Kobalt's full range of service.</p>
    <a href='https://twitter.com/Hyginosofficial' target='_blank'>
        <i class="fa-brands fa-twitter"></i>
    </a>
    <a href='https://www.instagram.com/hyginosofficial/' target='_blank'>
    <i class="fa-brands fa-instagram"></i>
    </a>
    <a href='#' target='_blank'>
    <i class="fa-brands fa-linkedin-in"></i>
    </a>
    </div>

    <div className='col-md-4'>
    <h2 className='py-2'>Digital Agency</h2>
    <p>Participant became a Certified B Corporation in 2017. B Corps are a new type of company that uses the power of business to solve social and environmental problems. B Corp certification is to business what Fair Trade certification is to coffee or USDA Organic certification is to milk.</p>
    </div>

    <div className='col-md-4'>
    <h2 className='py-2 px-3'>Contact Us</h2>
    <ul>
        <li><span className='key'>Phone No:</span><span className='value'>0884 - 2955152</span></li>
        <li><span className='key'>Email:</span><span className='value'>Info@Hyginostechnologies.com</span></li>
        <li><span className='key'>Address:</span><span className='value'>5-1-87, suryaraopet,
kakinada Urban - 533001</span></li>
    </ul>
    </div>

    <hr />

    <div className='col-md-4'></div>
    <div className='col-md-4 text-center'>
        <p>© Copyright 2022 Hyginos technologies Private Limited. All Rights Reserved.</p>
    </div>
    <div className='col-md-4'></div>

   

    </footer>
  )
}

export default Footer