import React, { useRef } from 'react'
import './Testimonials.scss'
import { Typography} from 'antd'

const { Title } = Typography


function Testimonials() {
  /* 
  TODO
  * make testimonials a carousel
    * fix ant design carousel
  */

  let carousel = React.createRef();

  const next = () => carousel.next();
  const prev = () => carousel.prev();

  return(
    <div id="testimonials">
      <div className="row-md">
        <div className="testimonial-header">
          <Title className="content-title small" level={4}>Testimonials</Title>
          <Title className="content-title large" level={1}>What Our Customers Say</Title>

        </div>

        <div className="testimonials-text">
          <p className="content-style">My baby's temperature has been very high over the past few weeks, we have given her all every drug the doctors prescribed. After using the medicine, my baby's temperature is stable now and she is smiling again. <span style={{display: 'block', marginTop: '1rem', fontSize: '0.9899rem', marginLeft: '1rem', color: '#391a45', fontWeight: '400', fontStyle: 'italic'}}>Miss. Mary S. </span></p>
          <p className="content-style">My son experiences some pains within his body that usually keeps him down and can sometimes last days, but within some days after taking the medicine, he was completely relieved of his pain and became strong, started eating well and can do anything now.<span style={{display: 'block', fontSize: '0.9899rem', marginLeft: '1rem', color: '#391a45', fontWeight: '400', fontStyle: 'italic'}}>Sarah</span></p>
          <p className="content-style">I must confess, he has not had any crisis since he started taking the drug, he complained of slight pain this morning and he was feeling OK the next minute.<span style={{display: 'block', marginTop: '1rem', fontSize: '0.9899rem', marginLeft: '1rem', color: '#391a45', fontWeight: '400', fontStyle: 'italic'}}>Mr. Ayomide Samuel</span></p>
        </div>

      </div>
    </div>
  )
}

export default Testimonials
