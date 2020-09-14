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
} from 'antd'

const { Header, Content, Footer } = Layout

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
    */
    return (
      <div id="App">
        <Router>
          <Layout id="layout">
            <Header id="header" >
              <div className="nav-wrap"> 
                <TabBar tabs={tabs} />
              </div>
              <Home />
            </Header>

            <Content id="content">
              <Route exact path='/' component={About} />
              <Route exact path='/' component={Treatments}/>
              <DiseasesAndConditions />

            </Content>

            <Footer id="footer">
              <Row className="flex-column">
                <Col span={10} id="contact">
                  <Contact />
                </Col>
                <Col span={6} id="site-links">
                  <SiteLinks />
                </Col>
                <Col span={8} id="contact-info">
                  <ContactInfo />
                </Col>
              </Row>

              <Row>
                <Col>
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
