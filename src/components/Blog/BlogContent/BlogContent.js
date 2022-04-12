import React from 'react'
import './BlogContent.css'
import IMG from '../../../img/about-us-new.png'

const BlogContent = () => {
  return (
    <section className='container my-5' id='news'>
        <div className='news-title'>
            <h2>News</h2>
            <hr />
        </div>

        <div className='row'>
            <div className='blog'>
                <div class="card">
                <img class="card-img-top" src={IMG} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark">Read More</a>
                </div>
                </div>
            </div>

            <div className='blog'>
                <div class="card">
                <img class="card-img-top" src={IMG} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark">Read More</a>
                </div>
                </div>
            </div>

            <div className='blog'>
                <div class="card">
                <img class="card-img-top" src={IMG} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark">Read More</a>
                </div>
                </div>
            </div>

            <div className='blog'>
                <div class="card">
                <img class="card-img-top" src={IMG} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark">Read More</a>
                </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default BlogContent