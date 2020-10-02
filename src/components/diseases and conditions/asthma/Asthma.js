import React, { Component } from 'react';
import Contact from '../../footer/contact'
import {
  Row,
  Col,
  Typography
} from 'antd'
import '../Diseases.scss'

const { Title, Paragraph } = Typography

class Asthma extends Component {
  /* 
  TODO
  * Move the margin of the contact column down
  * Use a pattern for the background of the (Raychan Herbal cure)
  */


  render() {

    return (
      <div id="diseases">

        <div id="disease">
          <Title className="disease-title main" level={2}>Asthma</Title>


          <Row>
            <Col span={14}>
              <Row className="disease-row">
                  <Col id="disease-column">
                    <Title className="disease-title" level={3}>Introduction</Title>
                    <Paragraph className="disease-text">
                    Asthma is a disease affecting the airways that carry air to and from your lungs. If you have asthma your airways are always inflamed. They become even more swollen and the muscles around the airways can tighten when something triggers your symptoms. This makes it difficult for air to move in and out of the lungs. People who suffer from this chronic condition (long-lasting or recurrent) are said to be asthmatic.
                    </Paragraph>
                    <Title className="disease-title" level={3}>Causes</Title>
                    <Paragraph className="disease-text">
                      According to the W.H.O, The strongest risk factors for developing asthma are a combination of genetic predisposition with environmental exposure to inhaled substances and particles that may provoke allergic reactions or irritate the airways, such as:
                      indoor allergens (for example, house dust mites in bedding, carpets and stuffed furniture, pollution and pet dander)
                      <ul>
                        <li>outdoor allergens (such as pollens and moulds)</li>
                        <li>tobacco smoke</li>
                        <li>air pollution.</li>
                        <li>chemical irritants in the workplace</li>
                      </ul>
                    </Paragraph>
                    <Title className="disease-title" level={3}>Symptoms</Title>
                    <Paragraph className="disease-text">
                    The most common symptom is coughing and wheezing. This is a irritating or whistling sound they someone with asthma make when breathing. Other symptoms include:    
                    <ul>
                      <li>Shortness of breath</li>
                      <li>Chronic coughing</li>
                      <li>Chest tightness or pain</li>
                      <li>Trouble sleeping due to coughing or wheezing</li>
                    </ul>
                    </Paragraph>
                    <Title className="disease-title" level={3}>Key Facts</Title>
                    <ul>
                      <li>It was estimated that more than 339 million people had Asthma globally.</li>
                      <li>It is the most common chronic disease among children.</li>
                      <li>Asthma occurs in all countries regardless of level of development</li>
                      <li>Asthma is one of the major noncommunicable diseases</li>
                      <li>Symptoms may occur several times in a day or week</li>
                    </ul>
                  </Col>

                  <Col>
                    <Title level={3} className="disease-title">Rayckan Herbal Healthcare</Title>
                      <Title className="disease-title bottom" level={5}>Nature Cures</Title>
                      <Title className="disease-title bottom" level={5}>Never underestimate the power of Herbs</Title>
                      <p>
                        Goodd news for all asthmatic patients, Rayckan Herbal Medicine has
                        prepared a combination of the power of herbs and organic materials for  the treatment of the  diseases of the
                          bronchial tubes, <em>without side effect..</em>
                      </p>
                  </Col>
                </Row>
            </Col>

            <Col span={10} id="contact-form" className="sidebar">
              <div className='form-wrap'>
              <Title className="form-title" level={3}>REQUEST FOR YOUR CURE</Title>
                <Contact />
              </div>
            </Col>
          </Row>
        </div>
      </div>

    );
  }
}

export default Asthma;
