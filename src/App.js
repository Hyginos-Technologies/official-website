import './App.css';

import MainHome from './components/main-component/MainHome';
import MainAbout from './components/main-component/MainAbout';
import MainServices from './components/main-component/MainServices';
import MainContactUs from './components/main-component/MainContactUs';
import MainPortfolio from './components/main-component/MainPortfolio';
import MainCareers from './components/main-component/MainCareers';
import Footer from './components/Home/Footer/Footer';
import SocialBar from './components/SocialBar/SocialBar';

import MainPetyez from './components/main-component/MainSinglePortfolio/MainPetyez';

import MainUIUX from './components/main-component/MainSingleServices/MainUIUX';
import MainDMarketing from './components/main-component/MainSingleServices/MainDMarketing';
import MainGraphicDesign from './components/main-component/MainSingleServices/MainGraphicDesign';
import MainWebDev from './components/main-component/MainSingleServices/MainWebDev';
import NotFound from './components/main-component/404/NotFound';
import Thankyou from './components/main-component/Thank-You/thankyou';


import { BrowserRouter, Routes, Route   } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/services" element={<MainServices />} />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="/services/digital-marketing" element={<MainDMarketing />} />
        <Route path="/services/graphic-design" element={<MainGraphicDesign />} />
        <Route path="/services/ui-ux" element={<MainUIUX />} />
        <Route path="/services/web-dev" element={<MainWebDev />} />
        <Route path="/careers" element={<MainCareers />} />
        <Route path="/portfolio" element={<MainPortfolio />} />
        <Route path="/contact-us" element={<MainContactUs />} />
        <Route path="/portfolio/petyez" element={<MainPetyez />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
      <SocialBar />
      <Footer />
    </div>
  );
}

export default App;
