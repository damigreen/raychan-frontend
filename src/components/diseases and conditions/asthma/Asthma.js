import React, { Component } from 'react';
import Contact from '../../footer/contact';
import {
  Button,
  Row,
  Col,
  Typography
} from 'antd';
import '../Diseases.scss';
import cureImage from '../../../images/treatments/CureImage.png';
import ShopCart from '../../cart/ShopCart';


const { Title, Paragraph } = Typography;
  
class Asthma extends Component {
  /* 
  TODO
  * Move the margin of the contact column down
  * Use a pattern for the background of the (Raychan Herbal cure)
  */
 constructor(props) {
  super(props);

  // this.props.addToCart = this.addToCart.bind(this)
  this.handleAddToCart = this.handleAddToCart.bind(this);
  this.state = { asthmaShop: {} }
}

handleAddToCart (e) {
  const itemId = 4;
  this.props.addToCart(itemId);
}
  
  render() {
    const { products = [], shopItems, handleDelete, subtotal, getSubtotal } = this.props;
    const { asthmaShop= [] } = this.state;
    console.log(asthmaShop);


    return (
      <div id="asthma" className="diseases">
        <div id="disease">
          <Title className="disease-title main" level={2}>Asthma</Title>

          <Row>
            <Col span={14} xs={24} md lg={14} xl={16} xxl>
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
                                    <Button className="cure-btns" style={{backgroundColor: '#B0D4C5', color: "#391A45", fontWeight: "600", marginLeft: "none"}} href="#contact-form">ORDER NOW</Button>
                                    <Button classname="cure-btns" style={{backgroundColor: '#F55B40', color: "#fff", fontWeight: "600"}} onClick={this.handleAddToCart}>ADD TO CART</Button>
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
                asthmaShop={asthmaShop}
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

export default Asthma;
