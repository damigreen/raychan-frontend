import React, { Component } from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';
import xyz from '../../images/treatments/lowSpermCount/lowSpermCount.jpg';
import './Cart.scss';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export default class ShopCart extends Component {
  /* 
  * Add cancel botton on the image
  * Fix the images for the treatments
  * Sum all the products on the treatment and get the subtotal
  * 
  */
  constructor(props) {
    super(props);
  }

  render() { 
    const { lowSpermCountShop = {}, shopItems = [] } = this.props;
    const cartItemLen = shopItems.length;
    
    return (
      
      <div id="shop-cart">
        <table id="cart-table" className="shop-cart-table">
          <thead className="shop-cart-head">
            <th>{cartItemLen} ITEMS</th>
            <th>
              <Link to="/Cart">VIEW CART</Link>
            </th>
          </thead>
          <tbody className="shop-cart-body">
            {
              shopItems.map(item => (
                <tr className="shop-cart-row" key={item.id}>
                  <td className="item-image">
                    <a>
                      <img src={require('../../images/treatments/thumbnail/' + item.image)} />
                    </a>
                  </td>
                  <td>
                    {item.description}<br />
                    {item.currency}{item.price}
                  </td>
                  <td>
                    <a className="remove-from-cart">
                      {/* <CloseOutlined /> */}
                      x
                    </a>
                  </td>
                </tr>
              ))
            }
            <tr>
              <td>
                Subtotal
              </td>
              <td>
                #400 000
              </td>
            </tr>
          </tbody>
        </table>
        <Button>CHECKOUT</Button>
      </div>
    )
  }
}
