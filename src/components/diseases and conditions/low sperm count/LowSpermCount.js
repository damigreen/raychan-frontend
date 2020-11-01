import React, { Component } from 'react';
import Contact from '../../footer/contact'
import {
  Row,
  Col,
  Typography,
  Button,
  Divider,
} from 'antd'
import '../Diseases.scss'
import cureImage from '../../../images/treatments/CureImage.png'
import ShopCart from '../../cart/ShopCart';

const { Title, Paragraph } = Typography

/* 
 #diseases .diseases-mobile
 disease-column
*/
class LowSpermCount extends Component {
  constructor(props) {
    super(props);

    // this.props.addToCart = this.addToCart.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = { lowSpermCountShop: {} }
  }

  handleAddToCart (e) {
    const itemId = 6
    this.props.addToCart(itemId)
  }
    
    render() {
      const { products = [], shopItems, handleDelete, subtotal, getSubtotal } = this.props
      const {lowSpermCountShop = []} = this.state;
      
      const lowSpermCountData = products.find(p => p.id === 6)
      
      if (!lowSpermCountData) {
      return null;
    }

    return (
      <div id="lsd" className="diseases">
        <div id="disease">
          <Title className="disease-title main" level={2}>{lowSpermCountData.name}</Title>

          <Row className="diseases-mobile">
            <Col span={14} sm={24}>
              <Row className="disease-row">
                  <Col span={24} id="disease-column">
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

                  <Divider plain>NATURE CURES</Divider>

                  
                  <Col span={24}>
                    <Row>
                      <div id="cure-wrap">
                {/* xs={20} sm={18} md={14} lg={11} xl={8} */}
                        <Col span={12} sm={16} lg={24} md={20} >
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

            <Col span={10} sm={24} id="contact-form" className="sidebar">
              <div className='form-wrap'>
              <Title className="form-title" level={3}>REQUEST FOR YOUR CURE</Title>
                <Contact />
              </div>

              <div>
               <ShopCart 
                lowSpermCountShop={lowSpermCountShop}
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

export default LowSpermCount;
