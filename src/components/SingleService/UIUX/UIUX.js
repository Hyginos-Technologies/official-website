import React from 'react'
import './UIUX.css'
import IMG from '../../../img/Design tools-amico.svg'
import { Link } from 'react-router-dom'



const UIUX = () => {
  return (
    <section className='container' id='service-content'>

    {/* 1 */}
    <div className='one-service my-2'>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
            <li class="breadcrumb-item"><Link to='/services'>Services</Link></li>
            <li class="breadcrumb-item active" aria-current="page">UI / UX Design</li>
        </ol>
    </nav>

    <h2>UI / UX Design</h2>
    
    <p>A user interface is a place where interactions between humans and machines occur. It allows users to effectively operate a machine to complete a task or achieve a specific goal, like making a purchase or downloading an app.</p>

    <p>User experience is the experience that a person has as they interact with a product. The term was coined by Don Norman back in the 90s when he worked at Apple. Don Norman says that ‘‘User experience’ encompasses all aspects of the end-users interaction with the company, its services, and its products.”</p>

    <h3>Using Customized Designs built by our Team We make sure that you get the best possible Designs out there.</h3>

    <div className='one-service-content'>

    <div className='one-service-sub-content'>
    <p>The meanings of UX and UI imply that they are related design disciplines, yet they are very different in nature. The UI design is more concerned with the visual properties of design as well as the overall feel it conveys. But without great UX, even the most beautifully designed UI will cause a bad user experience.</p>

    <p>Down Below are Some of the Tools we Use</p>

    <ul>
        <li>Figma</li>
        <li>Behance</li>
        <li>Dribble</li>
        <li>Mobbin</li>
    </ul>
    </div>

        <img src={IMG} />

    </div>



    </div>


    </section>
  )
}

export default UIUX