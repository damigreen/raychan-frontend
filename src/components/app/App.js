import React, { Component } from 'react';
import Home from '../home/Home'
import About from '../about/About'
import Products from '../products/Products'
import Contact from '../contact/Contact'
import TabBar from '../tabs/TabBar'
import './App.css';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";

import {
  Menu,
  Layout,
} from 'antd'

const { Header, Content, Footer } = Layout

class App extends Component {
  render() {
    const tabs = [
      {name: 'about', label: 'About', component: About },
      {name: 'products', label: 'Products', component: Products },
      {name: 'contact', label: 'Contact', component: Contact },
    ]

    this.state = {
      current: 'home'
    }

    return (
      <Router>
        <Layout>
          <Header>
            <Home />
            <TabBar tabs={tabs} />
          </Header>
        </Layout>
      </Router>
    );
  }
}

export default App;
