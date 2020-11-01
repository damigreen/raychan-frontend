import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'antd'
import './About.scss'



class About extends Component {
  render() {
    /* 
    TODO
    * Create a collage of healthy people to go with the about 
    */
    // console.log(document.getElementById('about').offsetWidth)
    // console.log(document.getElementById('about').offsetHeight)
    // console.log(document.getElementById('about').getBoundingClientRect())
    return (
      <Row id="about">
        <Col span={24} className="content-column">
          <article className="content-article">
            <header >
              <h1 className="content-header">We Provide You With Natural Herbal Cure for a Healthy Living</h1>
            </header>

            <p className="content-body">The uses of medicinal herbs is to prevent and treat diseases, ailment and to promote health and healing
            If you are looking for Herbal Medicine or supplement that are actually effective for sickle cell and that would safe you the stress from taken pills everyday, going through series of crisis and complications <span style={{color: '#228B22'}}>Rayckan Herbal Health Care medicine is the solution</span>
            </p>
          </article>
        </Col>

      </Row>
    );
  }
}

export default About;
