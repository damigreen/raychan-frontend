import React, { Component } from 'react';
import {
  Row,
  Col,
  Typography
} from 'antd'
import Contact from '../../footer/contact/'
import '../Diseases.scss'
import sickleCell from '../../../images/sicklecell.png'
import image from '../../../images/Image.png'
// import './Treatment.scss'


const { Title, Paragraph } = Typography

class SickleCell extends Component {
  render() {

    return (
      <div id="sickle-cell">
        <Title level={2} className="title-block">Sickle Cell Anemia</Title>


        <Row>
          <Col span={14}>
            <Row className="disease-row">
                {/* <Col span={8} className="image-block">
                  <img className="image-product" src={image} alt="Sickle cell image" />
                </Col>
                */}

                <Col id="column-content">
                  <Title level={3}>Introduction</Title>
                  <Paragraph className="column-paragraph">
                    Sickle Cell Anemia over the years has been perceived as one of the most threatening disorder to man-kind,
                    some homes has been broken and couples separated, early death and delayed marriage due to this disorder.
                    Millions of people around the world are actually living with this disorder
                  </Paragraph>
                  <Title level={3}>Causes</Title>
                  <Paragraph className="column-paragraph">
                    Sickle cell anemia disease is a genetic condition that is present at birth. It is inherited when a child receives two sickle cell genes—one from each parent.
                  </Paragraph>
                  <Title level={3}>Symptoms</Title>
                  <Paragraph className="column-paragraph">
                    The symptoms Sickle Cell Anemia ranges from pain, which can start suddenly, be mild to severe, and can last for any length of time.
                    <ul>
                      <li>Acute Chest Syndrome</li>
                      <li>pain, mild to severe</li>
                      <li>Vision Loss</li>
                      <li>Leg Ulcers</li>
                      <li>Tiredness</li>
                      <li>Irritability</li>
                      <li>A fast heart rate</li>
                      <li>Difficulty breathing</li>
                    </ul>
                  </Paragraph>
                  <Title level={3}>Key Facts</Title>
                  <ul>
                    <li>Sickle cell disease affects nearly 250 million people worldwide</li>
                    <li>A child gets sickle cell dissease when he or she recieves two sickle cell gene. One from each parent</li>
                    <li>The world known cure for Sickle Cell Anemia is Bone Marrow Transplant (BMT).</li>
                    <li>The average price of a bone marrow transplant for a child is $55,400 and even more expensive for adults</li>
                  </ul>
                </Col>
              </Row>
          </Col>

          <Col span={10} id="contact-form" className>
            <Contact />
          </Col>
        </Row>
        

      </div>

    );
  }
}

export default SickleCell;
