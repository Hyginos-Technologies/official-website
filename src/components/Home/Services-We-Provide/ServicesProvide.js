import React from 'react'

import './ServicesProvide.css';

import GD from '../../../img/graphic-design.png';
import EC from '../../../img/ecommerce.png';
import UI from '../../../img/ux-interface.png';
import DM from '../../../img/megaphone.png'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';

const ServicesProvide = () => {
  return (
    <section className='container p-5' id='service-card-container'>
        <div className='service-provide-title'>
        <Fade top cascade><h2>Service Details</h2></Fade>
        <h5><span>Home / </span>Service</h5>
        </div>

        <div className='row' id='services-card'>
            <Link className='col-md-3 col-sm-12' to='/services/graphic-design' style={{textDecoration:'none'}}>
            <Jump>
                <div class="card" >
                    <div class="card-body">
                        <img src={GD} />
                        <h5 class="card-title text-dark">Graphic Design</h5>
                        <p class="card-text">We Design Images & Video with the Best Software out there.We Design those images with great quality.We have a commited & Dedicated team to create great pice of design.We Gurantee that we would provide the best possible graphic Design.</p>
                    </div>
                </div>
            </Jump>
            </Link>

            <Link className='col-md-3 col-sm-12' to='/services/ui-ux'  style={{textDecoration:'none'}}>
            <Jump>
            <div class="card" >
                <div class="card-body">
                    <img src={UI} />
                    <h5 class="card-title text-dark">UI/UX design</h5>
                    <p class="card-text">UI/UX is a huge part build an Application.The Way an application is viewed by a user is very important.We will make sure that the Application can we design is very catchy to the users.Our team will make sure you will get the best.</p>
                </div>
            </div>
            </Jump>
            </Link>

            <Link className='col-md-3 col-sm-12' to='/services/digital-marketing'  style={{textDecoration:'none'}}>
            <Jump>
            <div class="card" >
                <div class="card-body">
                    <img src={DM} />
                    <h5 class="card-title text-dark">Digital Marketing</h5>
                    <p class="card-text">Digital Marketing is an important part in promoting your product / service we will use our digital marketing tools to promote your product / service to as much people as possible.Using Digital Campaigns</p>
                </div>
            </div>
            </Jump>
            </Link>

            <Link className='col-md-3 col-sm-12' to='/services/web-dev'  style={{textDecoration:'none'}}>
            <Jump>
            <div class="card" >
                <div class="card-body">
                    <img src={EC} />
                    <h5 class="card-title text-dark">Web Development</h5>
                    <p class="card-text">Having a Website for your business is very essential.To reach your customers or clients fast and respond fast.We will make sure that you will get the most attractive and eye catching website a business can possibly get.</p>
                </div>
            </div>
            </Jump>
            </Link>
        </div>

    </section>
  )
}

export default ServicesProvide