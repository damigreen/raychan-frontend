import React, { Component } from 'react';
import Hero from '../header/Hero'
import About from '../about/'
import Treatments from '../treatments/'
import Contact from '../footer/contact/'
import SiteLinks from '../footer/siteLinks'
import ContactInfo from '../footer/contactInfo/'
import Copyright from '../footer/copyright/'
import TabBar from '../tabs/TabBar'
import DiseasesAndConditions from '../diseases and conditions/'
import Testimonials from '../testimonials/'
import Cart from '../cart/'
import Shop from '../shop/Shop';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {
  Layout,
  Row,
  Col,
  Typography
} from 'antd'
import axios from 'axios';


import './media-queries.scss';


const { Content, Footer } = Layout
const { Title } = Typography


class App extends Component {
  /* 
  TODO:
  * create a router for each disaeses and conditions
  * * Responsive
  * Fix Navigation
  * Fix the footer 
  * fix the layout body width
  * Adjust the size of the hero image
  * ... 
  */

  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.getData = this.getData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.getSubtotal = this.getSubtotal.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);

    this.state = {
      products: [],
      shopItems: [
        {
          "name": "Sickle-cell",
          "description": "Sickle-cell herbal mixture",
          "currency": "₦",
          "price": 48000,
          "image": "sickle-cell.png",
          "quantity": 2,
          // "id": 1
        },
        {
          "name": "Parkinsons Disease",
          "description": "Parkinsons Disease herbal mixture",
          "price": 52000,
          "image": "parkinsons.png",
          "currency": "₦",
          "quantity": 4,
          // "id": 2
        }
      ],
      subtotal: 0,
    }
  }

  getData () {
    axios.get('/products.json')
    .then(response => {
        this.setState(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  componentDidMount() {
    this.getData();
  }
  
  // Add items clicked to the shopItems state
  // Get id from the diseases component
  addToCart (id) {
    console.log(`Adding to cart ==========================`)
    const item = this.state.products.find(i => i.id === id);
    let itemsInShop = this.state.shopItems; // []
    // Check if item in cliked in product 
    //  is in the items in the shop 
    const itemAlreadyInShop = itemsInShop.find(item => item.id === id)
    if (!itemAlreadyInShop) {
      // Add clicked item to item in shop
      itemsInShop.push(item);
    }
    
    const shopSubtotal = this.state.shopItems.reduce((acc, cur) => {
      return acc + (cur.quantity * cur.price)
    }, 0)

    console.log(shopSubtotal)

    this.setState({
      ...this.state, itemsInShop, subtotal: shopSubtotal
    })
  }
  
  handleDelete (id) {
    const updatedShopItems = this.state.shopItems.filter(item => item.id != id);

    this.setState({
      ...this.state, shopItems: updatedShopItems
    })
  }
  
  getSubtotal () {
    const shopSubtotal = this.state.shopItems.reduce((acc, cur) => {
      return acc + (cur.quantity * cur.price)
    }, 0)

    this.setState({
      ...this.state, subtotal: shopSubtotal
    })
  }

  updateQuantity (qty, id) {
    console.log('updating quantity-----------------------------------------');
    console.log(qty);
    this.state.shopItems.map(item => item.id === id ? item.quantity = qty : item.quantity);
  }

  
  render() {
    const { products = [], shopItems = [], subtotal } = this.state;

    const tabs = [
      { name: 'hero', label: 'Hero', component: Hero },
      { name: 'about', label: 'About', component: About },
      { name: 'treatments', label: 'Treatments', component: Treatments },
      { name: 'contact', label: 'Contact', component: Contact },
    ]
    

    
    console.log(this.state)
    return (
      <div id="App">
        <Router>
          <Layout id="layout">
            <div>
              <TabBar tabs={tabs} />
            </div>

            <Route exact path='/' component={Hero} />

            <Content id="content">
              <Route exact path='/' component={About} />
              <Route exact path='/' component={Treatments} />
              <DiseasesAndConditions
                products={products}
                addToCart={this.addToCart}
                shopItems={shopItems}
                handleDelete={this.handleDelete}
                getSubtotal={this.getSubtotal}
                subtotal={subtotal}
              />
              <Route exact path="/cart" render={() => (
                <Cart
                  shopItems={shopItems}
                  subtotal={subtotal}
                  updateQuantity={this.updateQuantity}
                  getSubtotal={this.getSubtotal}
                />
              )} />
              <Route exact path='/' component={Testimonials} />
            </Content>

            <Footer id="footer">
              <Row className="flex-column footer-row">
                {/* xl={10} xxl={10} lg={8} */}
                <Col className="footer-col" span={10} xs={20} sm={20} md={10} lg={10} xl={10} xxl={10} id="contact">
                  <Title className="footer-title contact" level={4}>CONTACT US</Title>
                  <Contact />
                </Col>
                <Col className="footer-col" span={6} xs={20} sm={20} md={6} lg={6} xl={6} xxl={6} id="site-links">
                  <Title className="footer-title link" level={4}>LINKS</Title>
                  <SiteLinks />
                </Col>
                <Col className="footer-col" span={8} xs={20} sm={20} md={8} lg={8} xl={8} xxl={8} id="contact-info">
                  <Title className="footer-title contact-info" level={4}>CONTACT INFO</Title>
                  <ContactInfo />
                </Col>
              </Row>
            </Footer>

            <Row id="copyright-wrap">
              <Col className="copyright-column" span={24}>
                <Copyright />
              </Col>
            </Row>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
