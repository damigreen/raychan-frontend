import React, { useRef } from 'react'
import './Testimonials.scss'
import quote from '../../images/icons/quote-left-50.png'
import { Row, Col, Typography, Carousel } from 'antd'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

const { Title } = Typography

const contentStyle = {
  // height: '160px',
  // color: '#fff',
  // lineHeight: '160px',
  // margin: 0,
  textAlign: 'center',
  // width: '50%'
  // background: '#364d79',
};


function Testimonials() {
  /* 
  TODO
  * make testimonials a carousel
    * fix ant design carousel
  */

  let carousel = React.createRef()


  const next = () => carousel.next()
  const prev = () => carousel.prev()

  return(
    <div id="testimonials">
      <Row>
        <Col span={24}>
          <Title className="header-small" level={4}>Testimonials</Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title className="header-big" level={1}>What Our Customers are Saying</Title>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <img className="quote-img" src={quote} alt="testimonial quote" />
        </Col>
      </Row>

      <Row className="carousel-row" span={24}>
        <Col span={4}>
          <LeftCircleOutlined className="left-arrow" onClick={prev} />
        </Col>
        <Col span={16}>
          <Carousel ref={node =>carousel = node} className="carousel-block" arrows>
          <div>
            <p className="content-style">My baby's temperature has been very high over the past few weeks, we have given her all every drug the doctors prescribed. After using the medicine, my baby's temperature is stable now and she is smiling again.
            </p>
          </div>
          <div>
            <p className="content-style">My son experiences some pains within his body that usually keeps him down and can sometimes last days, but within some days after taking the medicine, he was completely relieved of his pain and became strong, started eating well and can do anything now.
            </p>
          </div>
          <div>
            <p className="content-style">I must confess, he has not had any crisis since he started taking the drug, he complained of slight pain this morning and he was feeling OK the next minute.
            </p>
          </div>
          </Carousel>
        </Col>
        <Col className="right-arrow" span={4}>
          <RightCircleOutlined className="right-arrow" onClick={next} />
        </Col>
      </Row>

    </div>
  )
}

export default Testimonials
