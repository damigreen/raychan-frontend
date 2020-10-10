import React, { Component } from 'react'
import './Cart.scss';

export default class ShopCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shopItems: [
        {
          "name": "Sickle-cell",
          "description": "Sickle-cell herbal mixture",
          "currency": "₦",
          "price": "48000",
          "image": "image1.png",
          "quantity": 2,
          "id": 1
        },
        {
          "name": "Parkinsons Disease",
          "description": "Parkinsons Disease herbal mixture",
          "price": "52000",
          "image": "image2.png",
          "currency": "₦",
          "quantity": 4,
          "id": 2
        }
      ]
    }
  }

  render() {
    /* 
    * STATE
    * products.description
    
    *                             Cart
    Product Name                           UNIT PRICE    QUANTITY   TOTAL  
    LOW SPERM COUNT HERBAL MIXTURES         23 000          4      92 000
      SICKLE-CELL HERBAL MIXTURES             80 000          3      276 000
      ASTHMA HERBAL MIXTURES                  90 000          9      810 000
      
      *                             ShopCart
      
    * Append the object to the state shopItems 
    * Display all the items in the shop on the shop cart
    */

    const { lowSpermCountShop = {} } = this.props;


    return (

      <div id="shop-cart">
        <table id="cart-table">
          <thead>
            <th>PRODUCT NAME</th>
            <th>UNIT PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </thead>
          <tbody>
            <tr>
              <td>{lowSpermCountShop.description}</td>         
              <td>{lowSpermCountShop.currency}{lowSpermCountShop.price}</td>         
              <td>{lowSpermCountShop.quantity}</td>         
              <td>{lowSpermCountShop.currency}20 000</td>         
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
