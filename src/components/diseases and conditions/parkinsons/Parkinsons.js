import React, { Component } from 'react';
import Contact from '../../footer/contact'
import {
  Row,
  Col,
  Typography,
  Button,
  Divider
} from 'antd'
import '../Diseases.scss'
import cureImage from '../../../images/treatments/CureImage.png'
import ShopCart from '../../cart/ShopCart';


const { Title, Paragraph } = Typography

class Parkinsons extends Component {
  constructor(props) {
    super(props);

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = { parkinsonsShop: {} };

  }

  handleAddToCart (e) {
    const itemId = 2;
    this.props.addToCart(itemId)
  }


  render() {
    const { products = [], shopItems, handleDelete, subtotal, getSubtotal } = this.props;
    const { parkinsonsShop = {} } = this.state;
    
    return (
      <div id="parkinsons" className="diseases">
        <div id="disease">
          <Title className="disease-title main"level={2}>Parkinsons Disease</Title>
          <Row>
          <Col span={14} xs={24} md lg={14} xl={16} xxl>
              <Row className="disease-row">
                  {/* <Col span={8} className="image-block">
                    <img className="image-product" src={image} alt="Sickle cell image" />
                  </Col>
                  */}

                  <Col id="disease-column">
                    <Title className="disease-title" level={3}>Introduction</Title>
                    <Paragraph className="disease-text">
                    Parkinson’s disease is a progressive disorder of the nervous system that affects your movement. It develops gradually, sometimes starting with a barely noticeable tremor in just one hand. But while a tremor may be the most well-known sign of Parkinson’s disease, the disorder also commonly causes stiffness or slowing of movement.
                    </Paragraph>
                    <Title className="disease-title" level={3}>Causes</Title>
                    <Paragraph className="disease-text">
                    Parkinson's disease is caused by a loss of nerve cells in the part of the brain which are responsible for the production of chemical called dopamine

                    Dopamine acts as a messenger between the parts of the brain and nervous system that help control and co-ordinate body movements.
                    If these nerve cells die or become damaged, the amount of dopamine in the brain is reduced.
                    This means the part of the brain controlling movement cannot work as well as normal, causing movements to become slow and abnormal.

                    </Paragraph>
                    <Title className="disease-title" level={3}>Symptoms</Title>
                    <Paragraph className="disease-text">
                    In the early stages of Parkinson’s disease, your face may show little or no expression or your arms may not swing when you walk. Your speech may become soft or slurred. Parkinson’s disease symptoms worsen as your condition progresses over time.
                    Some of the early symptoms of Parkinson’s can come before motor problems by several years. These earliest signs include:
                    <ul>
                      <li><b>Decreased ability to smell (anosmia): </b>Over time, Parkinson's disease may reduce your ability to smell</li>
                      <li><b>Constipation: </b>You will also experience constipation from time to time as you continue living with this disease</li>
                      <li><b>Small, cramped handwriting: </b>It may become difficult to write, and your writing may appear small.</li>
                      <li><b>Voice changes: </b>You may experience a change in the tone of voice. Your speech will become monotonic rather than have the usual inflections.</li>
                      <li><b>Stooped posture: </b>Your posture may become stooped, or you may have balance problems as a result of Parkinson's disease.</li>
                      <li><b>Rigid muscles: </b>Muscle stiffness may occur in any part of your body. The stiff muscles can be painful and limit your range of motion.</li>
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
                                    <p className="cure-name overflow">PARKINSONS HERBAL MIXTURE</p>
                                  </div>
                                  <h1 className="cure-price"><span className="currency">₦</span>65 000</h1>
                                  <p className="cure-quantity">

                                  </p>
                                  {/* <div className="btn-wrap"> */}
                                    <Button style={{backgroundColor: '#74ABB4', color: "#391A45", fontWeight: "600"}} href="#contact-form">ORDER NOW</Button>
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
                parkinsonsShop={parkinsonsShop}
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

export default Parkinsons;
