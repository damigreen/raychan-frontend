import React, { Component } from 'react'
import './Cart.scss';

export default class ShopCart extends Component {
  render() {
    const { products = [] } = this.props;
    console.log(products)

    /* 

    * products.description === state

    *                             Cart
      Product Name                           UNIT PRICE    QUANTITY   TOTAL  
      LOW SPERM COUNT HERBAL MIXTURES         23 000          4      92 000
      SICKLE-CELL HERBAL MIXTURES             80 000          3      276 000
      ASTHMA HERBAL MIXTURES                  90 000          9      810 000

    *                             ShopCart
            
    */
    return (

      <div id="shop-cart">
        Yeah yeah

        <table id="cart-table">
          <thead>
            <th>PRODUCT NAME</th>
            <th>UNIT PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </thead>
          <tbody>
            <tr>

            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
