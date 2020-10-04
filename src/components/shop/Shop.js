import React, { Component} from 'react'

export default class Shop extends Component {
  render() {
    return (
      <div id="shop">
        <h1>Shop</h1>

        <div id="card">
          <img />
          <div>

          </div>
        </div>
        <section id="categories">
          <Categories />
        </section>
        <section>
          <ShopCart />
        </section>
      </div>
    )
  }
}

class Categories extends Component {
  render() {

    return (
      <div id="categories">
        <h1>Categories</h1>
      </div>
    )
  }
}

class ShopCart extends Component {
  render() {

    return (
      <div id="shop-cart">
        <h1>Cart</h1>
        <p></p>
      </div>
    )
  }
}
