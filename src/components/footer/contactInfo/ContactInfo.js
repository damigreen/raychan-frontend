import React from 'react'
import { Row, Col } from 'antd'
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import facebookIcon from '../../../images/icons/facebook.svg'
import instagramIcon from '../../../images/icons/instagram.svg'
import twitterIcon from '../../../images/icons/twitter-squared.svg'
import '../footer.scss'


function ContactInfo() {
  /* 
  TODO
  * Add address, email, phonenumber, 
  * Include social media links
  * * include icons
  *  Columns
    * Address
    * Phone  
    * email
    * 

  */
  return(
    <div id="contact-info">
      <Row>
        <Col>
          <EnvironmentOutlined />
        </Col>
        <Col>
          <p>123, Loren Ipsum street, Lagos Nigeria</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <PhoneOutlined />
        </Col>
        <Col>
          <p>+2347033902012</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <MailOutlined />
        </Col>
        <Col>
          <p>Rayckanherbalhealthcare@gmail.com</p>
        </Col>
      </Row>
      <div className="flex-column">
        <img src={facebookIcon} />
        <img src={twitterIcon} />
        <img src={instagramIcon} />
      </div>
    </div>
  )
}

export default ContactInfo
