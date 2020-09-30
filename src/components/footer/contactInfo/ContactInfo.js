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
      <Row className="contact-row">
        <Col span={2} className="icon-col">
          <EnvironmentOutlined />
        </Col>
        <Col span={22}>
          <p>123, Loren Ipsum street, Lagos Nigeria</p>
        </Col>
      </Row>
      <Row className="contact-row">
        <Col span={2} className="icon-col">
          <PhoneOutlined />
        </Col>
        <Col span={22} className="icon-col">
          <p>+2347033902012</p>
        </Col>
      </Row>

      <Row className="contact-row">
        <Col span={2} className="icon-col">
          <MailOutlined />
        </Col>
        <Col span={22}>
          <p>Rayckanherbalhealthcare@gmail.com</p>
        </Col>
      </Row>
      <div className="flex-column social-icons">
        <img src={facebookIcon} />
        <img src={twitterIcon} />
        <img src={instagramIcon} />
      </div>
    </div>
  )
}

export default ContactInfo
