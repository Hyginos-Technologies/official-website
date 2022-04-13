import React from 'react'
import {  Link } from "react-router-dom";
import './MainNav.css'

const MainNav = () => {
  return (
    <>
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