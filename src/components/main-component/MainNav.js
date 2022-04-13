import React from 'react'
import {  Link } from "react-router-dom";
import './MainNav.css'

import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import LOGO from '../../img/logo-black.png'

const MainNav = () => {
  return (
    <>

<Navbar collapseOnSelect expand="lg">
  <Container fluid>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    > 
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"><img src={LOGO} id='dropdown-image' />  Hyginos Technologies</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/careers">Careers</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contact-us">Contact Us</Nav.Link>
         
        </Nav>

      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

 <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul> 

    
    </>
  )
}

export default MainNav