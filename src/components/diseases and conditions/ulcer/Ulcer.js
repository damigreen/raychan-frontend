import React, { Component } from "react";
import {
  Row,
  Col,
  Typography,
  Button,

} from 'antd'
import Contact from '../../footer/contact/'
import '../Diseases.scss'
import cureImage from '../../../images/treatments/CureImage.png'
import { Divider } from 'antd';
import ShopCart from '../../cart/ShopCart';

const { Title, Paragraph } = Typography


class Ulcer extends Component {
  constructor(props) {
    super(props);

    // this.props.addToCart = this.addToCart.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = { ulcerShop: {} }
  }

  handleAddToCart (e) {
    const itemId = 1;
    this.props.addToCart(itemId);
  }


  render() {
    const { products = [], shopItems, handleDelete, subtotal, getSubtotal } = this.props
    const {ulcerShop = {} } = this.state;

    return (
      <div id="ulcer" className="diseases">

        <div id="disease">
          <Title level={2} className="disease-title main">Ulcer</Title>


          <Row>
          <Col span={14} xs={24} md lg={14} xl={16} xxl>
              <Row className="disease-row">
                  <Col id="disease-column">
                    <Title className="disease-title" level={3}>Introduction</Title>
                    <Paragraph className="disease-text">
                      Have you ever rolled on the floor, holding your belly in pains in the middle of the night and feeling uncomfortable? Do you wish you could figure out how to do away with ulcer for good?

                      Has your ulcer resulted in any of the following conditions: Gnawing or burning pain in the abdomen, loss of appetite, nausea, vomiting, bloating and weight loss?
                    </Paragraph>
                    <Title className="disease-title" level={3}>Causes</Title>
                    <Paragraph className="disease-text">
                      Ulcer are painful sores in the stomach lining. Stomach ulcers are a type of peptic ulcer disease. Peptic ulcers are any ulcers that affect both the stomach and small intestines.
                    </Paragraph>
                    <Title className="disease-title" level={3}>Symptoms</Title>
                    <Paragraph className="disease-text">
                    The most common symptom is a burning sensation or pain in the middle of your abdomen between your chest and belly button. Typically, the pain will be more intense when your stomach is empty, and it can last for a few minutes to several hours.
                      {/* <ul>
                        <li>Acute Chest Syndrome</li>
                        <li>pain, mild to severe</li>
                        <li>Vision Loss</li>
                        <li>Leg Ulcers</li>
                        <li>Tiredness</li>
                        <li>Irritability</li>
                        <li>A fast heart rate</li>
                        <li>Difficulty breathing</li>
                      </ul> */}
                    </Paragraph>
                    {/* <Title className="disease-title" level={3}>Key Facts</Title>
                    <ul>
                      <li>Sickle cell disease affects nearly 250 million people worldwide</li>
                      <li>A child gets sickle cell dissease when he or she recieves two sickle cell gene. One from each parent</li>
                      <li>The world known cure for Sickle Cell Anemia is Bone Marrow Transplant (BMT).</li>
                      <li>The average price of a bone marrow transplant for a child is $55,400 and even more expensive for adults</li>
                    </ul> */}
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
                                    <p className="cure-name overflow">ULCER HERBAL MIXTURE</p>
                                  </div>
                                  <h1 className="cure-price"><span className="currency">₦</span>65 000</h1>
                                  <p className="cure-quantity">

                                  </p>
                                  <div className="btn-wrap">
                                    <Button style={{backgroundColor: '#B0D4C5', color: "#391A45", fontWeight: "600"}} href="#contact-form">ORDER NOW</Button>
                                    <Button style={{backgroundColor: '#F55B40', color: "#fff", marginLeft: '.5em', fontWeight: "600"}} onClick={this.handleAddToCart}>ADD TO CART</Button>
                                  </div>
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
                ulcerShop={ulcerShop}
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

export default Ulcer;
