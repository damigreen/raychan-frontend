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
// import Carts from '../Carts/';
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
import axios from 'axios'


const { Content, Footer } = Layout
const { Title } = Typography


class App extends Component {
  /* 
  TODO:
  * create a router for each disaeses and conditions
  * 
  * Restyle the Contact form
  * Change Address from ContactInfo
  * Change the app fonts
  * set background color for elements
  * Make link closer to contact info
    * Add route to link on footer
  * Include a pattern on the about section
  * add checkout section in diseases sidebar
  * Complete the remainng database from lowwSpermCount
  * 
  * ShopCart
    * select items from product using id and update it on the shop cart
    * update the products on the shoping cart
    * *
    * Move the cart state to app
    * 
  */

  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this)
    this.state = {
      products: [],
      shopItems: [
        {
          "name": "Sickle-cell",
          "description": "Sickle-cell herbal mixture",
          "currency": "₦",
          "price": "48000",
          "image": "image1.png",
          "quantity": 2,
          "id": 1
        },
        {
          "name": "Parkinsons Disease",
          "description": "Parkinsons Disease herbal mixture",
          "price": "52000",
          "image": "image2.png",
          "currency": "₦",
          "quantity": 4,
          "id": 2
        }
      ]
    }
  }

  /* 
   */
  
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

  render() {
    const { products = [] } = this.state;

    const tabs = [
      { name: 'hero', label: 'Hero', component: Hero },
      { name: 'about', label: 'About', component: About },
      { name: 'treatments', label: 'Treatments', component: Treatments },
      { name: 'contact', label: 'Contact', component: Contact },
    ]

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
              <DiseasesAndConditions products={products} />
              <Route path="/shop" render={() => (
                <Shop />
              )} />
              <Route exact path="/carts" render={() => (
                <Cart />
              )} />
              <Route exact path='/' component={Testimonials} />
            </Content>

            <Footer id="footer">
              <Row className="flex-column footer-row">
                <Col className="footer-col" span={10} id="contact">
                  <Title className="footer-title contact" level={4}>CONTACT US</Title>
                  <Contact />
                </Col>
                <Col className="footer-col" span={6} id="site-links">
                  <Title className="footer-title link" level={4}>LINKS</Title>
                  <SiteLinks />
                </Col>
                <Col className="footer-col" span={8} id="contact-info">
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
