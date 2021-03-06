import React from 'react'
import './Message.css'
import IMG from '../../../img/founder.jpeg'
import Fade from 'react-reveal/Fade';

const Message = () => {
  return (
    <section className='container text-center' id='message'>
        <Fade top cascade><h2>MESSAGE FROM OUR FOUNDER</h2></Fade>

        <div className='message-n-image row'>
            <div className='col-sm-12'>
              <img src={IMG}  />
            </div>

            <div className='message-wrap col-sm-12'>
            <p>Welcome to Hyginos technologies private limited, your number one source for all IT Products. We're dedicated to giving you the very best Services, with a focus on Design and Development.
                Founded in 2020 by Konambhotla Murthy, Hyginos technologies private limited has come a long way from its beginnings in Yanam (Puducherry, India). When Konambhotla Murthy first started out, His passion for IT Solutions drove them to do tons of research so that Hyginos technologies private limited can offer you the world's most advanced solutions to clients. We now serve customers all over the world.
                I hope you enjoy our services as much as I enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p><br />

            <p style={{margin:0}}>Sincerely,</p>
                <p>Konambhotla Murthy</p>
            </div>

        </div>

    </section>
  )
}

export default Message