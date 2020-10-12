import React, { Component } from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';
import xyz from '../../images/treatments/lowSpermCount/lowSpermCount.jpg';
import './Cart.scss';

export default class ShopCart extends Component {
  /* 
  * Add cancel botton on the image
  * Fix the images for the treatments
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
                    <img src={'../../images/treatments/lowSpermCount/' + item.image} />
                  </td>
                  <td>
                    {item.description}<br />
                    {item.currency}{item.price}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}
