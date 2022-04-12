import React from 'react'
import './NeedExpert.css'

import E1 from '../../../img/e-1.png'
import E2 from '../../../img/e-2.png'
import E3 from '../../../img/e-3.png'
import B1 from '../../../img/group-b.png'

const NeedExpert = () => {
  return (
    <section className='container'>
        <div className='need-experts'>
            <div className='main-content-expert'>
            <h2>MEET OUR CREATEIVE TEAM</h2>
            </div>

        <div className='row'>
            <div className='col-md-4 text-center expert-image-left'>
                <img src={B1} className='box-left' />
                <img src={E1} alt='e' />
                <div className='expert-content'>
                <h5>MADAM QUERY</h5>
                <p>CEO/IT INDUSTRY</p>
                </div>
            </div>

            <div className='col-md-4 text-center'>
                <img src={E2} alt='m' />
                <div className='expert-content'>
                <h5>JOHN ABARAHAM</h5>
                <p>WEB DEVELOPER</p>
                </div>
            </div>

            <div className='col-md-4 text-center expert-image-right'>
                <img src={B1} className='box-right' />
                <img src={E3} alt='4' />
                <div className='expert-content'>
                <h5>MADAM QUERY</h5>
                <p>WEB DESIGNER</p>
                </div>
            </div>

        </div>

        </div>
    </section>
  )
}

export default NeedExpert