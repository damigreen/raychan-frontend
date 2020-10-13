import React, { Component } from 'react';
import { Row, Col } from 'antd'


export default class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log('Click ========>');
  }

  componentDidMount() {
    this.getSubtotal();
  }
  
  render() {
    const { subtotal, getSubtotal } = this.props;

    console.log(subtotal)

    return (
      <div id="cart">
        <Row>
          <h1>Shopping Carts {}</h1>
          <h1>{subtotal}}</h1>
          <Col>

          </Col>

          <Col>

          </Col>
        </Row>
      </div>
    )
  }
}
