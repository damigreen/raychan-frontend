import React, { Component } from 'react';
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

class SickleCell extends Component {
  constructor(props) {
    super(props);

    // this.props.addToCart = this.addToCart.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = { lowSpermCountShop: {} }
  }

  handleAddToCart (e) {
    const itemId = 1;
    this.props.addToCart(itemId)
  }


  render() {
    const { products = [], shopItems, handleDelete, subtotal, getSubtotal } = this.props
    const {sickleCellShop = {} } = this.state;

    return (
      <div id="sickle-cell" className="diseases">

        <div id="disease">
          <Title level={2} className="disease-title main">Sickle Cell Anemia</Title>


          <Row>
            <Col span={14}>
              <Row className="disease-row">
                  <Col id="disease-column">
                    <Title className="disease-title" level={3}>Introduction</Title>
                    <Paragraph className="disease-text">
                      Sickle Cell Anemia over the years has been perceived as one of the most threatening disorder to man-kind,
                      some homes has been broken and couples separated, early death and delayed marriage due to this disorder.
                      Millions of people around the world are actually living with this disorder
                    </Paragraph>
                    <Title className="disease-title" level={3}>Causes</Title>
                    <Paragraph className="disease-text">
                      Sickle cell anemia disease is a genetic condition that is present at birth. It is inherited when a child receives two sickle cell genes—one from each parent.
                    </Paragraph>
                    <Title className="disease-title" level={3}>Symptoms</Title>
                    <Paragraph className="disease-text">
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
                    <Title className="disease-title" level={3}>Key Facts</Title>
                    <ul>
                      <li>Sickle cell disease affects nearly 250 million people worldwide</li>
                      <li>A child gets sickle cell dissease when he or she recieves two sickle cell gene. One from each parent</li>
                      <li>The world known cure for Sickle Cell Anemia is Bone Marrow Transplant (BMT).</li>
                      <li>The average price of a bone marrow transplant for a child is $55,400 and even more expensive for adults</li>
                    </ul>
                  </Col>

                  <Divider plain>NATURE CURES</Divider>

                  <Col span={24}>
                          <Row>
                            <div id="cure-wrap">
                              <Col span={12}>
                                  <div className="cure-image">
                                    <img src={cureImage} alt="Diseases cure image" />
                                  </div>
                                  
                              </Col>
                              <Col span={12}>
                                <div className="cure-info">
                                  <div>
                                    <p className="cure-name overflow">LOW SPERM COUNT HERBAL MIXTURE</p>
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

            <Col span={10} id="contact-form" className="sidebar">
              <div className='form-wrap'>
              <Title className="form-title" level={3}>REQUEST FOR YOUR CURE</Title>
                <Contact />
              </div>

              <div>
               <ShopCart 
                sickleCellShop={sickleCellShop}
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

export default SickleCell;
