import React from 'react';
import { Row, Col } from 'antd'
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import facebookIcon from '../../../images/icons/facebook.svg';
import instagramIcon from '../../../images/icons/instagram.svg';
import twitterIcon from '../../../images/icons/twitter-squared.svg';
import '../footer.scss';


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
        {/* <Col span={2} className="icon-col">
          <EnvironmentOutlined />
        </Col> */}
        {/* <Col span={22}>
          <p>123, Loren Ipsum street, Lagos Nigeria</p>
        </Col> */}
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
        <Col span={22}>
        </Col>
        <Col span={22}>
        </Col>
        <Col span={22}>
          <p>Connect with us on Whatsapp with 07033902012</p>
        </Col>
      </Row>
      <img alt="Facebook Icon" src={facebookIcon} />
      <div className="flex-column social-icons">
        <div>
          <img alt="Twitter Icon" src={twitterIcon} />
          <p>Follow us on Twitter @RayckanC</p>
        </div>
        <div>
          <img alt="Instagram Icon" src={instagramIcon} />
          <p>Follow us on Instagram @Rayckanherbalhealthcare</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
