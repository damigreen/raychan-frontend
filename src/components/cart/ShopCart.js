import React, { Component } from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';
import xyz from '../../images/treatments/lowSpermCount/lowSpermCount.jpg';
import './Cart.scss';
import { Row, Col, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export default class ShopCart extends Component {
  /* 
  * Add cancel botton on the image
  * Fix the images for the treatments
  * Sum all the products on the treatment and get the subtotal
  * Change text colors
  * 
  */
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSubtotal();
  }
  
  componentDidUpdate() {
  }

  render() { 
    const { lowSpermCountShop = {}, asthmaShop, shopItems = [], handleDelete, subtotal, getSubtotal } = this.props;
    const cartItemLen = shopItems.length;


    var formatter = new Intl.NumberFormat('en-US', {
      // style: 'currency',
      // currency: 'NGN',
    
      // These options are needed to round to whole numbers if that's what you want.
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    // const shopSubtotal = formatter.format(subtotal);
    formatter.format(subtotal);


    // console.log(subTotal());
    console.log(subtotal);
    return (
      <div id="shop-cart">

    
        <Row className="shop-cart-head">
            <Col span={12}>
              <div className="shop-cart-item">
                {cartItemLen} ITEMS
              </div>
            </Col>

            <Col span={12}>
              <div className="shop-cart-view">
                VIEW CART
              </div>
            </Col>
        </Row>

        
        {
          shopItems.map(item => (
            <div>
              <Row className="shop-cart-body">
                  <Col span={7}>
                      <a>
                        <img src={require('../../images/treatments/thumbnail/' + item.image)} />
                      </a>
                  </Col>

                  <Col style={{marginLeft: "0.5em"}} span={12}>
                  {/* <Col span={12}> */}
                    {item.description}<br />
                    {item.quantity} x {item.currency}{item.price}
                  </Col>

                  <Col span={4}>
                    <Button onClick={() => handleDelete(item.id)} className="remove-from-cart">
                      x
                    </Button>
                  </Col>
              </Row>
            </div>
          ))
        }

        <Row className="shop-cart-subtotal-wrap">
          <Col className="shop-cart-subtotal" span={20}>
            SUBTOTAL:
          </Col>

          <Col span={4}>
              ₦{subtotal}
              {/* ₦{shopSubtotal} */}
          </Col>
        </Row>
        <Button href="#contact" className="btn btn-buynow">BUY NOW</Button>
      </div>
    )
  }
}
