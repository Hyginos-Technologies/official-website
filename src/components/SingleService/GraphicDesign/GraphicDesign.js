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
    
    <p>Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users’ specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.</p>

    <p>A graphic design project may involve the stylization and presentation of existing text and either preexisting imagery or images developed by the graphic designer. Elements can be incorporated in both traditional and digital form, which involves the use of visual arts, typography, and page layout techniques. Graphic designers organize pages and optionally add graphic elements. Graphic designers can commission photographers or illustrators to create original pieces. Designers use digital tools, often referred to as interactive design, or multimedia design. Designers need communication skills to convince an audience and sell their designs.</p>

    <h3>By Using High End Graphic Design Tools to build Images we Provide a Quality Service For Our Clients.</h3>

    <div className='one-service-content'>

    <div className='one-service-sub-content'>
    <p>Our designers are expected to be proficient in software programs for image-making, typography and layout. Adobe Photoshop (a raster-based program for photo editing) and Adobe Illustrator (a vector-based program for drawing) are often used in the final stage.Our Designers often use pre-designed raster images and vector graphics in their work from online design databases. Raster images are edited in Adobe Photoshop, vector logos and illustrations in Adobe Illustrator and CorelDraw, and the final product assembled in one of the major page layout programs, such as Adobe InDesign, Serif PagePlus and QuarkXpress.</p>

    <p>Down below are some of the Types of Graphic designs that we offer :</p>

    <ul>
        <li>Visual identity graphic design</li>
        <li>Marketing & advertising graphic design</li>
        <li>User interface graphic design</li>
        <li>Publication graphic design</li>
        <li>Packaging graphic design</li>
        <li>Motion graphic design</li>
        <li>Environmental graphic design</li>
        <li>Art and illustration for graphic design</li>
    </ul>
    </div>

        <img src={IMG} />

    </div>



    </div>


    </section>
  )
}

export default GraphicDesign