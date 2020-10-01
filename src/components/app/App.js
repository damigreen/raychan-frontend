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
import './App.scss';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
import {
  Menu,
  Layout,
  Row,
  Col,
  Typography
} from 'antd'


const { Header, Content, Footer } = Layout
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
  */


  render() {
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

            <Header id="header" >
              <Route exact path='/' component={Hero} />
            </Header>

            <Content id="content">
              <Route exact path='/' component={About} />
              <Route exact path='/' component={Treatments} />
              <DiseasesAndConditions />
              <Route exact path='/' component={Testimonials} />
            </Content>

            <Footer id="footer">
              <Row className="flex-column">
                <Col className="footer-col" span={10} xs={20} sm={18} md={14} id="contact">
                  <Title className="footer-title contact" level={4}>CONTACT US</Title>
                  <Contact />
                </Col>
                <Col className="footer-col" span={6} xs={20} sm={18} md={14} id="site-links">
                  <Title className="footer-title link" level={4}>LINKS</Title>
                  <SiteLinks />
                </Col>
                <Col className="footer-col" span={8} xs={20} sm={18} md={14} id="contact-info">
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
