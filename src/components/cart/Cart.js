import React, { Component } from 'react';


export default class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log('Click ========>');
  }
  
  render() {
    return (
      <div id="carts">
        <h1>Carts</h1>
      </div>
    )
  }
}
