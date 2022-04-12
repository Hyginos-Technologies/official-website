import React from 'react'
import './GraphicDesign.css'
import IMG from '../../../img/Design Process-pana.svg'
import { Link } from 'react-router-dom'



const GraphicDesign = () => {
  return (
    <section className='container' id='service-content'>

    {/* 1 */}
    <div className='one-service my-2'>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
            <li class="breadcrumb-item"><Link to='/services'>Services</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Graphic Design</li>
        </ol>
    </nav>

    <h2>Graphic Design</h2>
    
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing</p>

    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

    <h3>By industrializing data integration, big data management, and AI/ML initiatives through our accelerators and frameworks, we help turn data into decisions, at scale.</h3>

    <div className='one-service-content'>

    <div className='one-service-sub-content'>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing</p>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>

    <ul>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</li>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</li>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</li>
    </ul>
    </div>

        <img src={IMG} />

    </div>



    </div>


    </section>
  )
}

export default GraphicDesign