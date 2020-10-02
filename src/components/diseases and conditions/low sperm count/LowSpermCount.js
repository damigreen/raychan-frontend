import React, { Component } from 'react';
import Contact from '../../footer/contact'
import {
  Row,
  Col,
  Typography
} from 'antd'
import '../Diseases.scss'

const { Title, Paragraph } = Typography

class LowSpermCount extends Component {
  render() {
    return (
      <div id="diseases">
        <div id="disease">
          <Title className="disease-title main" level={2}>Low Sperm Count</Title>


          <Row>
            <Col span={14}>
              <Row className="disease-row">
                  {/* <Col span={8} className="image-block">
                    <img className="image-product" src={image} alt="Sickle cell image" />
                  </Col>
                  */}
                  <Col id="disease-column">
                    <Title className="disease-title" level={3}>Introduction</Title>
                    <Paragraph className="disease-text">
                    Low sperm count occurs when the fluid (semen) you ejaculate during an orgasm contains fewer sperm than normal. Medically, Your sperm count is considered lower than normal if you have fewer than 15 million sperm per milliliter of semen.
                    </Paragraph>
                    <Title className="disease-title" level={3}>Causes</Title>
                    <Paragraph className="disease-text">
                    Low sperm count can be caused by a number of health issues and medical treatments. Some of these include:
                    
                      <ul>
                        <li><b>Infection: </b>Some infections can interfere with sperm production or sperm health or can cause scarring that blocks the passage of sperm.</li>
                        <li><b>Overheating the testicles: </b>Elevated temperatures impair sperm production and function.</li>
                        <li><b>tobacco smoke: </b> Men who smoke might have a lower sperm count than do those who don't smoke.</li>
                        <li><b>Drug use: </b>Excessive Use of drugs like cocaine, methamphetamemes, might reduce the number and quality of your sperm as well.</li>
                        <li><b>Depression: </b>Being depressed may negatively affect sperm concentration</li>
                        <li><b>Alcohol use: </b>Drinking alcohol can lower testosterone levels and cause decreased sperm production.</li>
                      </ul>
                    </Paragraph>
                    <Title className="disease-title" level={3}>Symptoms</Title>
                    <Paragraph className="disease-text">
                    The main sign of low sperm count is the inability to conceive a child. There might be no other obvious signs or symptoms. Other symptoms may include
                    <ul>
                      <li>Problems with sexual function — for example, low sex drive or difficulty maintaining an erection (erectile dysfunction)</li>
                      <li>Pain, swelling or a lump in the testicle area</li>
                      <li>Decreased facial or body hair or other signs of a chromosome or hormone abnormality</li>
                    </ul>
                    </Paragraph>
                  </Col>

                  
                  <Col id="disease-cure" className="bottom-content">
                    <Title level={3} className="disease-title cure">Rayckan Herbal Healthcare</Title>
                    <Title className="disease-title bottom-a" level={5}>Nature Cures</Title>
                    <Title className="disease-title bottom-b" level={5}>Never underestimate the power of Herbs</Title>
                    <p>
                      Good news for all asthmatic patients, Rayckan Herbal Medicine has prepared a combination of the power of herbs and organic materials for  the treatment of the diseases of the bronchial tubes, <em>without side effect..</em>
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

export default LowSpermCount;
