import React from 'react'
import './Careers.css'
import Fade from 'react-reveal/Fade';

const Careers = () => {
  return (
      <section className='careers-container'>
        <Fade top cascade><h2 className='career-title'>Careers</h2></Fade>
        <div className='careers-container-inner'>
            <div className='container'>
                <div className='inner-container'>
                   
                    <h2>We’re Hiring!</h2>
                    <p>Immediate Hiring for Mobile Application Developer (IOS + Flutter Developer)</p>
                    <p>Experience: 3-6 Years</p>
                    <p>Location: kakinada , Andhra Pradesh</p>
                    <p>Salary: As per company standard</p>
                    <p>Transport: Not available</p>
                    <h4>Contact: Career@Hyginostechnologies.Com</h4>
                  
                </div>

            </div>
        </div>
    </section>
  )
}

export default Careers