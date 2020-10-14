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


  handleMinus() {
   console.log('Minus----------------');
   this.setState({
     counter: this.state.counter - 1
   })
  }
  
  handlePlus() {
    console.log('Plus----------------') ;
    this.setState({
      counter: this.state.counter + 1
    })
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
    const { shopItems = [], counter } = this.props;


    console.log(this.state)
    console.log(counter)
    return (
      <div id="cart" className="container">

        {/* Title */}
        <div className="title">
          <h1>Shopping Carts {}</h1>
          {/* <h1>{subtotal}}</h1> */}
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
                  <span><MinusCircleOutlined  onClick={this.handleMinus} /></span>
                  <span>{item.quantity}</span>
                  <span><PlusCircleOutlined onClick={this.handlePlus} /></span>
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
