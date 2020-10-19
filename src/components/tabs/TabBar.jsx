import React from 'react'
import { Menu } from 'antd'
import { Link as Li } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import './Tabs.scss'
import navLogo from '../../images/navigation/nav-logo.png'
// import logo from '../../images/Mask Group.png'
import {
  Row,
  Col,
} from 'antd'

const { SubMenu } = Menu

const TabBar = (props) => {
  /* 
  TODO
  * Put the logo image in front of the nav-bar
  * Fix the height of the navigation items on hover/* 
  * Reset the color of .nav-icon
  *
  */
 
  return(
    <div className="nav-wrap">
    <Row id="menu" className="flex-row">
      <div>
        <Col span={6} className="nav-icon">
            <Link to="/"><img alt="Navigation Logo" src={navLogo} /></Link>
            <h2>Rayckan Herbal Healthcare</h2>
        </Col>

        <Col span={12} className="nav-col">
          <Row className="nav-row" span={24}> 
            <Menu className="menu-bar" mode="horizontal">
                <Menu.Item className="nav-item" key="about">
                  <Link className="menu-link" to="/#about">ABOUT</Link>
                </Menu.Item>

                <SubMenu id="submenu" icon title="DISEASES &amp; CONDITIONS">
                    <Menu.Item key="sickle-cell">
                      <Li to='/sickle-cell'>Sickle Cell Anemia</Li>
                    </Menu.Item>
                    <Menu.Item key="asthma">
                      <Li to='/asthma'>Asthma</Li>
                    </Menu.Item>
                    <Menu.Item key="low-sperm-count">
                      <Li to='/low-sperm-count'>Low Sperm Count</Li>
                    </Menu.Item>
                    <Menu.Item key="Atrial">
                      <Li to='/atrial-septal-defect'>Atrial Septal Defect</Li>
                    </Menu.Item>
                    <Menu.Item key="Parkinsons">
                      <Li to='/parkinsons-disease'>Parkinsons Disease</Li>
                    </Menu.Item>
                </SubMenu>

                <Menu.Item className="nav-item" key="treatments">
                  <Link className="menu-link" to="/#treatments">TREATMENTS</Link>
                </Menu.Item>
                
                <Menu.Item className="nav-item" key="testimonials">
                  <Link className="menu-link" to="/#testimonials">TESTIMONIALS</Link>
                </Menu.Item>
                
                <Menu.Item className="nav-item" key="shop">
                  <Link className="menu-link" to="/cart">CART</Link>
                </Menu.Item>
                
                <Menu.Item className="nav-item" key="contact">
                  <Link className="menu-link" to="/Contact">CONTACT</Link>
                </Menu.Item>
            </Menu>    

          </Row>



        </Col>
      </div>

      </Row>
    </div>
  )
  
}

export default TabBar
