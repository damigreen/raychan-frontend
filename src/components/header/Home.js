import React, { Component } from 'react';
import './Home.scss'
import { Layout } from 'antd';

const { Header } = Layout;


class Home extends Component {
  render() {

    return (
      <div id="wrap" className="home">
        <h1>Raychan Home</h1>
      </div>
    );
  }
}

export default Home;
