import React, { Component } from 'react';
import Contact from '../../footer/contact'
import {
  Row,
  Col,
  Typography, Button
} from 'antd'
import '../Diseases.scss'
import cureImage from '../../../images/treatments/CureImage.png'
import { Divider } from 'antd';
import ShopCart from '../../cart/ShopCart';


const { Title, Paragraph } = Typography

class AtrialSeptalDefect extends Component {
  constructor(props) {
    super(props);

    // this.props.addToCart = this.addToCart.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = { atrialSeptalShop: {} }
  }

  handleAddToCart (e) {
    const itemId = 3;
    this.props.addToCart(itemId);
  }
    

  render() {
    const { products = [], shopItems, handleDelete, subtotal, getSubtotal } = this.props
    const {atrialSeptalShop = {} } = this.state;


    return (
      <div id="lsd" className="diseases">
        <div id="disease">
          <Title className="disease-title main" level={2}>Atrial Septal Disease</Title>
          <Row>
          <Col span={14} xs={24} md lg={14} xl={16} xxl>
              <Row className="disease-row">
                <Col id="disease-column">
                  <Title className="disease-title" level={3}>Introduction</Title>
                  <Paragraph className="disease-text">
                    An atrial septal defect is a hole in the wall (septum) between the left and right atria. If there is a large hole, oxygen-rich blood from the left atrium flows back into the right atrium and gets pumped back to the lungs again. This causes more work for the heart. If the hole is very small, it is generally termed a patent foramen ovale. In some cases, a patent foramen ovale can be associated with strokes and transient ischemic attacks (TIAs, or “mini-strokes”).

                    If ASD does not close on its own, heart surgery is required to close the defect. In some cases, ASD may be closed interventionally through a closure device.
                    </Paragraph>
                  <Title className="disease-title" level={3}>Causes</Title>
                  <Paragraph className="disease-text">
                    The cause is usually unknown. Genetic factors can sometimes play a role.
                    </Paragraph>
                  <Title className="disease-title" level={3}>Symptoms</Title>
                  <Paragraph className="disease-text">
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

                <Divider plain>NATURE CURES</Divider>

                <Col span={24}>
                          <Row>
                            <div id="cure-wrap">
                            <Col span={10} xs={8} sm={10} xl={12} lg={4} xxl={10}>
                                  <div className="cure-image">
                                    <img src={cureImage} alt="Diseases cure image" />
                                  </div>
                                  
                              </Col>
                              <Col span={12} sm={14} md={24} lg={12} xl={12}>
                                <div className="cure-info">
                                  <div>
                                    <p className="cure-name overflow">LOW SPERM COUNT HERBAL MIXTURE</p>
                                  </div>
                                  <h1 className="cure-price"><span className="currency">₦</span>65 000</h1>
                                  <p className="cure-quantity">

                                  </p>
                                  {/* <div className="btn-wrap"> */}
                                    <Button style={{backgroundColor: '#B0D4C5', color: "#391A45", fontWeight: "600"}} href="#contact-form">ORDER NOW</Button>
                                    <Button style={{backgroundColor: '#F55B40', color: "#fff", marginLeft: '.5em', fontWeight: "600"}} onClick={this.handleAddToCart}>ADD TO CART</Button>
                                  {/* </div> */}
                                </div>
                              </Col>
                            </div>
                          </Row>

                  </Col>
              </Row>
            </Col>

            <Col span={10} xs={24} sm={24} lg={10} xl={8} id="contact-form" className="sidebar">
              <div className='form-wrap'>
              <Title className="form-title" level={3}>REQUEST FOR YOUR CURE</Title>
                <Contact />
              </div>

              <div>
               <ShopCart 
                atrialSeptalShop={atrialSeptalShop}
                shopItems={shopItems}
                handleDelete={handleDelete}
                subtotal={subtotal}
                getSubtotal={getSubtotal}
              />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AtrialSeptalDefect;
