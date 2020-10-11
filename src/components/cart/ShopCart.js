import React, { Component } from 'react'
import './Cart.scss';

export default class ShopCart extends Component {
  constructor(props) {
    super(props);

    // this.addToShopCart = this.addToShopCart.bind(this);
  }

  // foo (props) {
  //   const item = this.props.lowSpermCountShop;
  //   let itemsInShop = this.state.itemsInShop;
  //   itemsInShop.push(item);
  // }

  // componentDidMount(props) {
  //   // componentWillUpdate() {
  //   // const appended = this.state.
  //   // get the props {lowSpermCountProps}
  //   // Append the property to the state

  //   const item = this.props.lowSpermCountShop;
  //   console.log(item)
  //   let itemInShop = this.state.shopItems;

  //   if(item.name) {
  //     itemInShop.push(item);
  //   }

  //   this.setState({
  //     shopItems: itemInShop
  //   })
    
  // }

  render() { 
    const { lowSpermCountShop = {} } = this.props;
    const { shopItems = [] } = this.state;



    console.log(this.state)
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
            {/* <tr>
              <td>{lowSpermCountShop.description}</td>         
              <td>{lowSpermCountShop.currency}{lowSpermCountShop.price}</td>         
              <td>{lowSpermCountShop.quantity}</td>         
              <td>{lowSpermCountShop.currency}20 000</td>         
            </tr> */}
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
