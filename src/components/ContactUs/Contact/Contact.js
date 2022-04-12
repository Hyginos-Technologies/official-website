import React from 'react'
import './Contact.css'
import Form from 'react-bootstrap/Form'

const Contact = () => {
  return (
      <>
    <section className="container my-5">

        <ul className="contact-info row">
          <li className="col-md-4">
            <i className="fa-solid fa-phone"></i> <div><h5>Call Us : </h5> <a href="tel:+08842955152">0884 - 2955152</a></div>
          </li>
    
          <li className="col-md-4">
            <i className="fa-solid fa-envelope"></i> <div><h5>Email Us :  </h5><a href="mailto:Info@Hyginostechnologies.com">Info@Hyginostechnologies.com</a></div>
          </li>
    
          <li className="col-md-4">
            <i className="fa-solid fa-location-dot"></i> 
            <div><h5>Address : </h5>
            <p>5-1-87, Suryaraopet, Kakinada Urban - 533001</p></div>
          </li>
        </ul>
    </section>

    
    <Form action="https://formsubmit.co/contact@hyginostechnologies.com" method="POST">    
      <input type="hidden" name="_next" value="/thank-you" />
        <input type="hidden" name="_subject" value="New Client!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

       <div className="container">
           <div id="contact-title">
           <h2>Get in Touch with Us</h2>
           <hr />
        </div>
        <div className="row mb-4">

          <div className="col">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
          </div>

          <div className="col">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
          </div>
        </div>
      
       
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email Address" />
        </Form.Group>
      
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Adress" />
        </Form.Group>
            
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Company Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Compnay Email" />
        </Form.Group>
      
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="Enter Phone Number" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
            
            
       
        <button type="submit" className="w-100 btn btn-dark btn-block mb-4">Send</button>
        </div>
      </Form>
      </>
  )
}

export default Contact