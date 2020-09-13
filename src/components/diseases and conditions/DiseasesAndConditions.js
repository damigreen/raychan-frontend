import React from 'react'
import SickleCell from './sickle-cell/SickleCell'
import Asthma from './asthma/Asthma';
import AtrialSeptalDefect from './atrial septal defect/AtrilaSeptal';
import LowSpermCount from './low sperm count/LowSpermCount';
import Parkinsons from './parkinsons/Parkinsons';

import {
  Route,
  Switch,
} from 'react-router-dom'

function DiseasesAndConditions() {

  return(
    <div>
      <Switch>
        <Route exact path="/sickle-cell" render={() => (
          <SickleCell />
        )}
        />
        <Route exact path="/asthma" render={() => (
          <Asthma />
        )}
        />
        <Route exact path="/asthma" component={Asthma} />
        <Route exact path="/atrial-septal-defect" render={() => (
          <AtrialSeptalDefect />
        )}
        />
        <Route exact path="/low-sperm-count" render={() => (
          <LowSpermCount />
        )}
        />
        <Route exact path="/parkinsons-disease" render={() => (
          <Parkinsons />
        )}
        />

      </Switch>
    </div>
  )
}

export default DiseasesAndConditions
