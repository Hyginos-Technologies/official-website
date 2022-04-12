import React from 'react'
import './SocialBar.css'

const SocialBar = () => {
  return (
      <div className='sticky-wrapper'>
    <div className="sticky-container">
    <ul className="sticky" id='social-bar'>
      <li>
        <a href='https://web.facebook.com/Hyginosofficial' target='_blank'>
        <img width="32" height="32" title="" alt="" src="https://drive.google.com/uc?id=1j7LLn1ZuJh_U-Ff4swbYqw41nAbabwWw" />
        <p>Facebook</p>
        </a>
      </li>

      <li>
      <a href='https://twitter.com/Hyginosofficial' target='_blank'>
        <img width="32" height="32" title="" alt="" src="https://drive.google.com/uc?id=1qbielCGRqeH480vWlo9UJljepi8wEpWj" />
        <p>Twitter</p>
        </a>
      </li>

      <li>
      <a href='https://www.instagram.com/hyginosofficial/' target='_blank'>
        <img width="32" height="32" title="" alt="" src="https://seeklogo.com/images/I/instagram-new-2016-logo-4773FE3F99-seeklogo.com.png" />
        <p>Instagram</p>
        </a>
      </li>

      <li>
        <a href='#' target='_blank'>
        <img width="32" height="32" title="" alt="" src="https://drive.google.com/uc?id=1rXD704smmLePEebevlOoxJDWLFVIm4YB" />
        <p>Linkedin</p>
        </a>
      </li>

    </ul>
  </div>

  

    <div className="sticky-left-container">
      <ul className="sticky-left" id='social-bar'>

        <li>
          <a href='tel:+08842955152' target='_blank'>
          <img width="32" height="32" title="" alt="" src="https://drive.google.com/uc?id=1yz1jMRdqLQWBx10eFLSWTMGWmKrL9sM6"/>
          <p>Phone</p>
          </a>
        </li>

        <li>
        <a href='https://wa.me/+919573505152' target='_blank'>
          <img width="32" height="32" title="" alt="" src="https://drive.google.com/uc?id=1ha6UAQlGBFXnExIXUMgs2l1QwUNgE09K" />
          <p>Whatsapp</p>
        </a>
        </li>
        <li>
        <a href='mailto:info@Hyginostechnologies.com' target='_blank'>
          <img width="32" height="32" title="" alt="" src="https://drive.google.com/uc?id=1Jthmdc-CZpBoymeHEW06x9OTj8_lW7gM" />
          <p>Email</p>
          </a>
      </li>
    </ul>
  </div>
  </div>
  )
}

export default SocialBar