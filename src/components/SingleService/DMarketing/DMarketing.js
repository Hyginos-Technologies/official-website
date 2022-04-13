import React from 'react'
import './DMarketing.css'
import IMG from '../../../img/Marketing-cuate.svg'
import { Link } from 'react-router-dom'

const DMarketing = () => {
  return (
    <section className='container' id='service-content'>

    {/* 1 */}
    <div className='one-service my-2'>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
            <li class="breadcrumb-item"><Link to='/services'>Services</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Digital Marketing</li>
        </ol>
    </nav>

    <h2>Digital Marketing</h2>
    
    <p>At a high level, digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps. Using these online media channels, digital marketing is the method by which companies endorse goods, services, and brands. Consumers heavily rely on digital means to research products. For example, Think with Google marketing insights found that 48% of consumers start their inquiries on search engines, while 33% look to brand websites and 26% search within mobile applications.</p>

    <p>While modern day digital marketing is an enormous system of channels to which marketers simply must onboard their brands, advertising online is much more complex than the channels alone. In order to achieve the true potential of digital marketing, marketers have to dig deep into today’s vast and intricate cross-channel world to discover strategies that make an impact through engagement marketing. Engagement marketing is the method of forming meaningful interactions with potential and returning customers based on the data you collect over time. By engaging customers in a digital landscape, you build brand awareness, set yourself as an industry thought leader, and place your business at the forefront when the customer is ready to buy.</p>

    <h3>By Using Digital Marketing you can enhance the use of your product or service.</h3>

    <div className='one-service-content'>

    <div className='one-service-sub-content'>
    <p>To optimize your marketing strategies, digital is mandatory. Digital marketing can help you to get to know your audience, learn important data about them, and provide metrics that will give your marketing team credibility.</p>

    <p>Tactics that we use inorder to get more customers for your product or service :</p>

    <ul>
        <li>Search engine optimization (SEO)</li>
        <li>Social media marketing</li>
        <li>Video marketing</li>
        <li>Email marketing</li>
        <li>Blogging & affiliate marketing</li>
        <li>Website marketing</li>
        <li>Search engine marketing</li>
    </ul>
    </div>

        <img src={IMG} />

    </div>



    </div>


    </section>
  )
}

export default DMarketing