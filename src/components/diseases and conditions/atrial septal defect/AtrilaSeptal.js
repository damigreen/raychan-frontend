import React, { Component } from 'react';
import Contact from '../../footer/contact'
import {
  Row,
  Col,
  Typography
} from 'antd'
import image from '../../../images/Image.png'
import '../Diseases.scss'
// import './Treatment.scss'

const { Title, Paragraph } = Typography

class AtrialSeptalDefect extends Component {
  render() {

    
    return (
      <div id="atrial-septal">
        <Title level={2} className="title-block">Atrial Septal Disease</Title>


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
                  An atrial septal defect is a hole in the wall (septum) between the left and right atria. If there is a large hole, oxygen-rich blood from the left atrium flows back into the right atrium and gets pumped back to the lungs again. This causes more work for the heart. If the hole is very small, it is generally termed a patent foramen ovale. In some cases, a patent foramen ovale can be associated with strokes and transient ischemic attacks (TIAs, or “mini-strokes”).

                  If ASD does not close on its own, heart surgery is required to close the defect. In some cases, ASD may be closed interventionally through a closure device.
                  </Paragraph>
                  <Title level={3}>Causes</Title>
                  <Paragraph className="column-paragraph">
                  The cause is usually unknown. Genetic factors can sometimes play a role.
                  </Paragraph>
                  <Title level={3}>Symptoms</Title>
                  <Paragraph className="column-paragraph">
                  An ASD that isn't treated in childhood can lead to health problems later, including an abnormal heart rhythm (an atrial arrhythmia) and problems in how well the heart pumps blood.

                  As kids with ASDs get older, they also might be at an increased risk for stroke because a blood clot could form, pass through the hole in the septum, and travel to the brain. Pulmonary hypertension (high blood pressure in the lungs) also may develop over time in older patients with larger untreated ASDs.

                  Because of these possible complications, doctors usually recommend closing ASDs early in childhood.
                  Signs and symptoms of a large or untreated atrial septal defect may include the following:
                  <ul>
                    <li>Frequent respiratory or lung infections</li>
                    <li>Difficulty breathing</li>
                    <li>Tiring when feeding (infants)</li>
                    <li>Shortness of breath when being active or exercising</li>
                    <li>Skipped heartbeats or a sense of feeling the heartbeat</li>
                    <li>A heart murmur, or a whooshing sound that can be heard with a stethoscope</li>
                    <li>Swelling of legs, feet, or stomach area</li>
                    <li>Stroke</li>
                  </ul>
                  </Paragraph>
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

export default AtrialSeptalDefect;
