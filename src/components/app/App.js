import React, { Component } from 'react';
import Home from '../home/Home'
import About from '../about/'
import Treatments from '../treatments/'
import Contact from '../footer/contact/'
import ContactInfo from '../footer/contactInfo/'
import TabBar from '../tabs/TabBar'
import TabPanel from '../tabs/TabPanel'
import DiseasesAndConditions from '../diseases and conditions/'


import './App.scss';
import {
  BrowserRouter as Router,
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
    * Create a contact component
    * create a router for each disaeses and conditions
    * 
    */
    return (
      <div id="App">
        <Router>
          <Layout id="layout">
            <Header id="header" >
              <div className="nav-wrap"> 
                <TabBar tabs={tabs} />
              </div>
              <div>
                <h1>Header</h1>
              </div>
            </Header>

            <Content id="content">

              {/* <section id="content-wrapper">
                <TabPanel tabs={tabs} />
              </section> */}

              <section>
                <About />
                <Treatments />
                <Footer />
              </section>

              <DiseasesAndConditions />
            </Content>

            <Footer id="footer">
              <Row className="flex-column">
                <Col>
                  <Contact />
                </Col>
                <Col>
                  <ContactInfo />
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
