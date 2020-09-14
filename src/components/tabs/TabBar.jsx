import React from 'react'
import { Menu } from 'antd'
import { Link as Li } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import './Tabs.scss'
// import logo from '../../images/Mask Group.png'
import {
  Row,
  Col,
} from 'antd'

const { SubMenu } = Menu

const TabBar = (props) => {
  const { tabs, onClick, ...otherProps } = props

  return(
    <Row id="menu" className="flex-row">
        <Col className="nav-background">
            {/* <Link to="/"><img className="background-image" src={logo} alt="Header logo"></img></Link> */}
            <Link to="/">Raychan Herbal Healthcare</Link>
        </Col>

        <Col className="nav-col">
          <Menu className="nav-item" mode="horizontal">
              <Menu.Item className="nav-bar" key="about">
                <Link to="/#about">ABOUT</Link>
              </Menu.Item>

              <SubMenu icon title="DISEASE AND CONDITIONS">
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

              <Menu.Item className="nav-bar" key="treatments">
                <Link to="/#treatments">TREATMENTS</Link>
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
