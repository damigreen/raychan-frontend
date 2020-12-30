import React from 'react'
import { Menu } from 'antd'
import { Link as Li } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import './Tabs.scss'
import navLogo from '../../images/navigation/nav-logo.png'
import {
  Row,
  Col,
} from 'antd'

const { SubMenu } = Menu;

const TabBar = (props) => {
  /* 
  TODO
  * Put the logo image in front of the nav-bar
  * Fix the height of the navigation items on hover/* 
  * Reset the color of .nav-icon
  * 
  * 
  * 
  {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
  }
  */

 
  return(
    <Row id="menu" className="flex-row">
      <div>
        <Col span={6} xs={4} md={2} lg={4} xl={4} xxl={4} className="nav-icon">
            <Link to="/"><img className="nav-icon-img" alt="Navigation Logo" src={navLogo} /></Link>
        </Col>

        <Col span={12} xs={18} md={20} lg={12} xl={12} xxl={12} className="nav-col">
            <Menu className="menu-bar" mode="horizontal">
                <SubMenu id="submenu" icon title="ABOUT">
                    <Menu.Item key="rayckan">
                      <Link to='/#about'>Rayckan Herbal Healthcare</Link>
                    </Menu.Item>
                    <Menu.Item key="treatments">
                      <Link to='/#treatments'>Treatments</Link>
                    </Menu.Item>
                    <Menu.Item key="testimonials">
                      <Link to='/#testimonials'>Testimonials</Link>
                    </Menu.Item>
                </SubMenu>

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
                    <Menu.Item key="Ulcer">
                      <Li to='/ulcer'>Ulcer</Li>
                    </Menu.Item>
                </SubMenu>

                <Menu.Item className="nav-item" key="treatments">
                  <Link className="menu-link" to="/#treatments">TREATMENTS</Link>
                </Menu.Item>
                
                {/* <Menu.Item className="nav-item" key="testimonials">
                  <Link className="menu-link" to="/#testimonials">TESTIMONIALS</Link>
                </Menu.Item>
                 */}
                <Menu.Item className="nav-item" key="shop">
                  <Link className="menu-link" to="/cart">CART</Link>
                </Menu.Item>
                
                <Menu.Item className="nav-item" key="contact">
                  <Link className="menu-link" to="/Contact">CONTACT</Link>
                </Menu.Item>
            </Menu>    
        </Col>
      </div>

      </Row>
  )
  
}

export default TabBar
