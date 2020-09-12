import React from 'react'
import { Menu } from 'antd'
import { Link, Route } from 'react-router-dom'
import './Tabs.scss'
// import logo from '../../images/Mask Group.png'
import {
  Row,
  Col,
} from 'antd'

const TabBar = (props) => {
  const { tabs, onClick, ...otherProps } = props

  return(
    <Row  id="menu" className="flex-row">
        <Col className="nav-background">
            {/* <Link to="/"><img className="background-image" src={logo} alt="Header logo"></img></Link> */}
            <Link to="/">Raychan Herbal Healthcare</Link>
        </Col>

        <Col className="nav-col">
          <Menu className="nav-item" mode="horizontal">
              <Menu.Item className="nav-bar" key="about">
                <Link to="/About">ABOUT</Link>
              </Menu.Item>
              <Menu.Item className="nav-bar" key="treatments">
                <Link to="/Treatments">TREATMENTS</Link>
              </Menu.Item>
              <Menu.Item className="nav-bar" key="contact">
                <Link to="/Contact">CONTACT</Link>
              </Menu.Item>
          </Menu>    
        </Col>

      </Row>


  )
}

export default TabBar
