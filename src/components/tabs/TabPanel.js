import React from 'react'
import { Route } from 'react-router-dom'


const TabPanel = ({tabs}) => {

  const panel = tabs.map(tabInfo => {
    const { label, component: TabComponent } = tabInfo;

    return (
      <div>
        <Route path={`/${label}`} render={() => (
          <TabComponent />
        )}
        />
      </div>
    )
  })

  return(
    <div>
      {panel}
    </div>
  )

}



export default TabPanel
