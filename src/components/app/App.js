import React, { Component } from 'react';
import Home from '../home/Home'
import About from '../about/'
import Treatments from '../treatments/'
import Contact from '../footer/contact/'
import SiteLinks from '../footer/siteLinks'
import ContactInfo from '../footer/contactInfo/'
import Copyright from '../footer/copyright/'
import TabBar from '../tabs/TabBar'
import TabPanel from '../tabs/TabPanel'
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
const { Title  } = Typography

class App extends Component {
  render() {
    const tabs = [
      {name: 'home', label: 'Home', component: Home },
      {name: 'about', label: 'About', component: About },
      {name: 'treatments', label: 'Treatments', component: Treatments },
      {name: 'contact', label: 'Contact', component: Contact },
    ]

    // this.state = {
    //   current: 'home'
    // }

    /* 
    TODO:
    * create a router for each disaeses and conditions
    * Include header from the header component
    * * Group sickness into
      * Overview / Introduction
      * Causes
      * Symptoms
      * 
    * Restyle the Contact form
      *  Align the header to the middle
    * Change Address from ContactInfo
    */
    return (
      <div id="App">
        <Router>
          <Layout id="layout">
            <Header id="header" >
              <div className="nav-wrap"> 
                <TabBar tabs={tabs} />
              </div>
              <div id="hero">
                <Route exact path='/' component={Home} />
              </div>
            </Header>

            <Content id="content">
              <Route exact path='/' component={About} />
              <Route exact path='/' component={Treatments}/>
              <DiseasesAndConditions />
              <Route exact path='/' component={Testimonials} />
            </Content>

            <Footer id="footer">
              <Row className="flex-column">
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

              <Row>
                <Col span={24}>
                  <Copyright />
                </Col>
              </Row>
            </Footer>

          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
