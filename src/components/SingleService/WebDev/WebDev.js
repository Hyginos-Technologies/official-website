import React from 'react'
import './WebDev.css'
import IMG from '../../../img/Website Creator-rafiki.svg'
import { Link } from 'react-router-dom'



const WebDev = () => {
  return (
    <section className='container' id='service-content'>

    {/* 1 */}
    <div className='one-service my-2'>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
            <li class="breadcrumb-item"><Link to='/services'>Services</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Web Development</li>
        </ol>
    </nav>

    <h2>Web Development</h2>
    
    <p>Despite conventional wisdom, the core part of website development and design is not necessary for the coding process. Indeed, such technologies as HTML, CSS, and JavaScript give the web we know its shape and define the way we interact with the information. But what usually stays behind the scenes and, at the same time, remains the crucial part of the website development life cycle are the stages of preliminary information gathering, detailed planning, and post-launch maintenance.</p>

    <p>Website development is a way to make people aware of the services and/or products you are offering, understand why your products are relevant and even necessary for them to buy or use, and see which of your company's qualities set it apart from competitors.</p>

    <h3>By Using Front-End Languages & Back-End Languages we Develop most reliable application for your business.</h3>

    <div className='one-service-content'>

    <div className='one-service-sub-content'>
    <p>Communicate with your visitors effectively. Interacting with your audience is vital when it comes to generating more business. It is viable to make a website that enables you to get in touch with your customers and prospects, and you can produce valuable content for the audience associated with the industry or business you're in. Afterwards, post the content on your blog, share it on social media networks and respond to customers' comments and feedback promptly. This will show  clients the extent to which you’re concerned about their satisfaction and responsive to their needs.</p>

    <p>Our Web Development Process contains seven steps:</p>

    <ul>
        <li>Information Gathering</li>
        <li>Planning</li>
        <li>Design</li>
        <li>Content Writing and Assembly</li>
        <li>Coding</li>
        <li>Testing, Review and Launch</li>
        <li>Maintenance</li>
    </ul>
    </div>

        <img src={IMG} />

    </div>



    </div>


    </section>
  )
}

export default WebDev