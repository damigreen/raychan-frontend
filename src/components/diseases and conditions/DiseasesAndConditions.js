import React from 'react'
import SickleCell from './sickle-cell/'
import Asthma from './asthma/';
import AtrialSeptalDefect from './atrial septal defect/';
import LowSpermCount from './low sperm count/';
import Parkinsons from './parkinsons/';
import './Diseases.scss';

import {
  Route,
} from 'react-router-dom'

function DiseasesAndConditions() {

  const diseases = [
    { name: 'sickle cell', label: 'sickle-cell', component: SickleCell },
    { name: 'asthma', label: 'asthma', component: Asthma },
    { name: 'atrial septal defect', label: 'atrial-septal-defect', component: AtrialSeptalDefect },
    { name: 'low sperm count', label: 'low-sperm-count', component: LowSpermCount },
    { name: 'parkinsons disease', label: 'parkinsons-disease', component: Parkinsons },
  ]

  const diseasesMenu = diseases.map(diseasesInfo => {
    const { label, component: DiseasesComponent } = diseasesInfo

    return(
      <div>
          <Route path={`/${label}`} render={() => (
            <DiseasesComponent />
          )}
          />
      </div>
    )
  })

  return(
    <div>
      {diseasesMenu}
    </div>
  )
}

export default DiseasesAndConditions
