import React from 'react'

import './About.css'

import Rocket from '../../../img/group-r.png';
import Box from '../../../img/group-b.png';
import AboutImage from '../../../img/about-us-new.png';
import LOGOBLACK from '../../../img/logo-black.png'

import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <section className='container'>
        <div className='row home-about-us'>

            
            <div className='col-sm-12 col-md-6 home-about-us-left'>
                <img src={AboutImage} className='image-main-about' />
                <h1><span className='logo'><img src={LOGOBLACK} /></span>Hyginos technologies</h1>
                <img src={Rocket} className='image-r-about' />
                <img src={Box} className='image-b-about' />
            </div>
          

            <div className='col-sm-12 col-md-6 home-about-us-right'>
                <div>
                <Fade top cascade><h3>About Us</h3></Fade>

                <p>Welcome to Hyginos technologies private limited, your number one source for all IT Products. We're dedicated to giving you the very best Services, with a focus on Design and Development.
                Founded in 2020 by Konambhotla Murthy, Hyginos technologies private limited has come a long way from its beginnings in Yanam (Puducherry, India). When Konambhotla Murthy first started out, His passion for IT Solutions drove them to do tons of research so that Hyginos technologies private limited can offer you the world's most advanced solutions to clients. We now serve customers all over the world.
                I hope you enjoy our services as much as I enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                </p>

                <br />
                <br />
                <p style={{margin:0}}>Sincerely,</p>
                <p>Konambhotla Murthy</p>

                
                </div>
            </div>
        </div>
    </section>
  )
}

export default About