import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
} from 'antd'
import './About.scss'
import profileImage from '../../images/profile-image.png'
import aboutImage from '../../images/about/AboutImage.png'



class About extends Component {
  render() {
    // console.log(document.getElementById('about').offsetWidth)
    // console.log(document.getElementById('about').offsetHeight)
    // console.log(document.getElementById('about').getBoundingClientRect())
    return (
        <Row id="about">
            <div className="about-row">
              <Col span={12} className="img-col">
                {/* <img className="image-block" src={aboutImage} alt="Company profile image"></img> */}
                <div className="about-img"> </div>
              </Col>

              <Col span={12} id="content-column">
                <article>
                  <header >
                    <h1 className="about-header">About Us</h1>
                    {/* <h1 className="about-header">Welcome</h1> */}
                  </header>
                  <p classname>The uses of medicinal herbs is to prevent and treat diseases, ailment and to promote health and healing
                  If you are looking for Herbal Medicine or supplement that are actually effective for sickle cell and that would safe you the stress from taken pills everyday, going through series of crisis and complications *Rayckan Herbal Health Care medicine is the solution...
                  </p>
                </article>
                <Button className="button">LEARN MORE</Button>
              </Col>

            </div>

        </Row>
    );
  }
}

export default About;
