import React from 'react'
import { Menu } from 'antd'
import { Link, Route } from 'react-router-dom'


const TabBar = (props) => {
  const { tabs, onClick, ...otherProps } = props

  const tabItems = tabs.map(tabInfo => {
    const { name, label } = tabInfo


    return (
      <div>
          <Menu.Item
            key={name}
            label={label}
          >
            <Link to={`/${name}`}>{label}</Link>
          </Menu.Item>
        
      </div>
    )
  })

  const tabPanels = tabs.map(tabInfo => {
    const { name, label, component: TabComponent } = tabInfo;

    return (
      <Route path={`/${name}`}>
        <TabComponent />
      </Route>
      )
  })

  return(
    <div>
      <Menu>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        {tabItems}
      </Menu>

      {tabPanels}
    </div>
  )

}

export default TabBar