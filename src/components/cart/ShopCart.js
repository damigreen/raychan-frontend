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
  }
  
  componentDidUpdate() {
    
    this.props.getSubtotal();
  }

  render() { 
    const { lowSpermCountShop = {}, shopItems = [], handleDelete } = this.props;
    const cartItemLen = shopItems.length;

    const subtotal = () =>
      shopItems.reduce((acc, cur) => {
      const value = acc + (cur.quantity * cur.price);
      console.log(value)
      // const valueString = value.toString();

      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });

      return formatter.format(value);
    }, 0);


    console.log(subtotal());
    return (
      <div id="shop-cart">

    
        <Row className="shop-cart-head">
            <Col span={12}>
              <div >
                {cartItemLen} ITEMS
              </div>
            </Col>

            <Col span={12}>
              <div>
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

                  <Col span={13}>
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

        <Row>
          <Col span={20}>
            SUBTOTAL:
          </Col>

          <Col span={4}>
            ₦{subtotal()}
          </Col>
        </Row>
        <Button className="btn btn-checkout">CHECKOUT</Button>
      </div>
    )
  }
}
