import React, { Component } from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'


export default class Cart extends Component {
  constructor(props) {
    super(props)

    // this.handleClick = this.handleClick.bind(this);
    this.handleMinus = this.handleMinus.bind(this)
    this.handlePlus = this.handlePlus.bind(this)
    
    this.state = { counter: 1 };
  }

  /* 
  * Issues 
  Set the counter to the quantitu of the shop item you want to update

  */

  handleMinus(id) {
    console.log('Minus----------------');
    // Set the quantity of the shop items to the counter 
    const itemQuantity = this.props.shopItems.find(item => item.id === id).quantity;
    // console.log(itemQuantity);
    const removeItem = itemQuantity - 1;
    
    this.setState({
      ...this.state, counter: removeItem
    })
    
    // const itemToUpdate = this.props.shopItems.find(item => item.id === id);
    console.log(this.state.counter)
    // console.log(this.props.updateQuantity)
    // console.log(id)
    
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
  
  
  /*
  TODO
  * Product Name    Unit    price   Quantity    Subtotal
  *
  * * Data 
  * update the cart quantity to reflect the state of the app
  * 
  */
  render() {
    // const { subtotal, getSubtotal } = this.props;
    const { shopItems = [], counter, updateQuantity  } = this.props;


    console.log(this.state)
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
