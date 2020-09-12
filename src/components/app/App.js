import React, { Component } from 'react';
import Home from '../home/Home'
import About from '../about/About'
import Treatments from '../treatments/Treatments'
import Contact from '../contact/Contact'
import TabBar from '../tabs/TabBar'
import TabPanel from '../tabs/TabPanel'
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import {
  Menu,
  Layout,
} from 'antd'
import Ailments from '../treatments/Ailments';

const { Header, Content, Footer } = Layout

class App extends Component {
  render() {
    const tabs = [
      {name: 'home', label: 'Home', component: Home },
      {name: 'about', label: 'About', component: About },
      {name: 'treatments', label: 'Treatments', component: Treatments },
      {name: 'contact', label: 'Contact', component: Contact },
    ]

    this.state = {
      current: 'home'
    }

    return (
      <div id="App">
        <Router>
          <Layout id="layout">
            <Header id="header" >
              <div className="nav-wrap"> 
                <TabBar tabs={tabs} />
              </div>
            </Header>
            <Content id="content">
              <section id="home">
                <Route exact path="/" render={() => (
                  <Home />
                )}
                />
              </section>
              <section id="content-wrapper">
                <TabPanel tabs={tabs} />
              </section>
              <Route path="/Ailments" render={() => (
                <Ailments />
              )}
              />
            </Content>
          </Layout>
        </Router>

      </div>
    );
  }
}

export default App;
