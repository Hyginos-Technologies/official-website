import React from 'react'

import Showcase from '../Home/Showcase/Showcase'
import Services from '../Home/Services-We-Provide/ServicesProvide'
import HomeWeWork from '../Home/How-we-work/HowWeWork'
import AboutUs from '../Home/AboutUs/About'
import Careers from '../Home/Careers/Careers'
import Clients from '../Home/ClientUs/ClientUs'
import GetInTouch from '../Home/Get-In-Touch/GetInTouch'
import Join from '../Home/Join/Join'
import NeedExpert from '../Home/NeedExpert/NeedExpert'
import OurProcess from '../Home/OurProcess/OurProcess'
import Portfolio from '../Home/Portfolio/Portfolio'


const MainHome = () => {

  return (
      <>
        <Showcase />
        <Services />
        <OurProcess />
        <AboutUs />
        <NeedExpert />
        <Portfolio />
        <HomeWeWork />
        <Careers />
        <GetInTouch />
        <Clients />
        <Join />
      </>
  )
}

export default MainHome