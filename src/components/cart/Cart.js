import React, { Component } from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';


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

  
  componentDidMount() {
    this.props.getSubtotal();
  }
  
  
  render() {
    const { shopItems = [], subtotal  } = this.props;
    const itemLen = shopItems.length;


    return (
      <div id="cart" className="container">
        <div className="title">
          {/* <h1>Shopping Carts {(itemLen)}</h1> */}
          <h1>Shopping Carts ({itemLen})</h1>
        </div>

        <div className="cart-content">


            {/* Header */}
            <div className="header">
              <div className="item">
                ITEM
              </div>

              <div className="price">
                UNIT PRICE
              </div>

              <div className="quantity">
                QUANTITY
              </div>

              <div className="subtotal">
                SUBTOTAL
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
                        <span>{item.description}</span>
                    </div>

                    <div className="item-price">
                      {item.currency}{item.price}
                    </div>

                    <div className="item-quantity">
                      <span><MinusCircleOutlined style={{marginRight: "2px", backgroundColor: "#f4f4f4"}} onClick={() => this.handleMinus(item.id)} /></span>
                      <span>{item.quantity}</span>
                      <span><PlusCircleOutlined style={{marginLeft: "2px", backgroundColor: "#f4f4f4"}} onClick={() => this.handlePlus(item.id)} /></span>
                    </div>

                    <div className="item-subtotal">
                      {item.currency} {item.quantity * item.price}
                    </div>
                  </form>
                ))
              }
          </div>

          <div className="total-wrap">
            <div className="total-text">TOTAL</div>
            <div className="total-value">₦{subtotal}</div>
          </div>
          <div className="order-now">ORDER NOW</div>
        </div>
    )
  }
}
