import React from 'react'

import Showcase from '../AboutUs/Showcase/Showcase'
import Message from '../AboutUs/Message/Message'
import WhoWeAre from '../AboutUs/WhoWeAre/WhoWeAre'
import OurTeam from '../Home/NeedExpert/NeedExpert'
import Footer from '../Home/Footer/Footer'

const MainAbout = () => {
  return (
    <>
        <Showcase />
        <WhoWeAre />
        <Message />
        <OurTeam />
    </>
  )
}

export default MainAbout