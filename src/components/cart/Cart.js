import React, { Component } from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'


export default class Cart extends Component {
  constructor(props) {
    super(props)

    this.handleMinus = this.handleMinus.bind(this)
    this.handlePlus = this.handlePlus.bind(this)
    
    this.state = { counter: 1 };
  }

  /* 
  TODO
  * Style Cart
  */

  handleMinus(id) {
    console.log('Minus----------------');
    // Set the quantity of the shop items to the counter 
    const itemQuantity = this.props.shopItems.find(item => item.id === id).quantity;
    const removeItem = itemQuantity - 1;
    
    this.setState({
      ...this.state, counter: removeItem
    })
    
    
    this.props.updateQuantity(removeItem, id);
  }
  
  handlePlus(id) {
    console.log('Plus----------------') ;
    const itemQuantity = this.props.shopItems.find(item => item.id === id).quantity;
    const addItem = itemQuantity + 1;


    this.setState({
      counter: addItem
    })

    this.props.updateQuantity(addItem, id);
  }
  
  
  render() {
    const { shopItems = [], counter, updateQuantity  } = this.props;


    return (
      <div id="cart" className="container">

        <div className="title">
          <h1>Shopping Carts {}</h1>
        </div>

        {/* Header */}
        <div className="header">
          <div className="item">
            Item
          </div>

          <div>
            Unit Price
          </div>

          <div>
            Quantity
          </div>

          <div>
            subtotal
          </div>

        </div>

          {
            shopItems.map(item => (
              <form className="shopping-items">
                <div className="item-image">
                  {/* Link to buy now*/}
                  <a href>
                    <img src={require('../../images/treatments/thumbnail/' + item.image)} />
                  </a>
                </div>

                <div className="item-description">
                    <span>{item.name}</span>
                </div>

                <div className="item-price">
                  {item.currency}{item.price}
                </div>

                <div className="item-quantity">
                  <span><MinusCircleOutlined  onClick={() => this.handleMinus(item.id)} /></span>
                  <span>{item.quantity}</span>
                  <span><PlusCircleOutlined onClick={() => this.handlePlus(item.id)} /></span>
                </div>

                <div className="item-subtotal">
                  {item.currency} {item.quantity * item.price}
                </div>
              </form>
            ))
          }

      </div>
    )
  }
}
