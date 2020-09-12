import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
} from 'antd'
import './About.scss'
import profileImage from '../../images/profile-image.png'



class About extends Component {
  render() {
    
    // console.log(document.getElementById('about').offsetWidth)
    // console.log(document.getElementById('about').offsetHeight)
    // console.log(document.getElementById('about').getBoundingClientRect())
    
    return (
        <Row id="about">
          <Col span={10} className="image-block">
            <img src={profileImage} alt="Company profile image"></img>
          </Col>

          <Col span={14} id="content-column">
            <article>
              <header >
                <h1 className="about-header">About Us</h1>
              </header>
              <p>The uses of medicinal herbs is to prevent and treat diseases, ailment and to promote health and healing
              If you are looking for Herbal Medicine or supplement that are actually effective for sickle cell and that would safe you the stress from taken pills everyday ,going through series of crisis and complications *Rayckan Herbal Health Care medicine is the solution...
              </p>
            </article>
            <Button className="button">LEARN MORE</Button>
          </Col>
        </Row>
    );
  }
}

export default About;
