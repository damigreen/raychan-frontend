import React from 'react'
import SickleCell from './sickle-cell/'
import Asthma from './asthma/';
import AtrialSeptalDefect from './atrial septal defect/';
import LowSpermCount from './low sperm count/';
import Parkinsons from './parkinsons/';
import Ulcer from './ulcer/';
import './Diseases.scss';

import {
  Route,
} from 'react-router-dom'

function DiseasesAndConditions({products, addToCart, shopItems, handleDelete, subtotal, getSubtotal}) {

  const diseases = [
    { name: 'sickle cell', label: 'sickle-cell', component: SickleCell },
    { name: 'asthma', label: 'asthma', component: Asthma },
    { name: 'atrial septal defect', label: 'atrial-septal-defect', component: AtrialSeptalDefect },
    { name: 'low sperm count', label: 'low-sperm-count', component: LowSpermCount },
    { name: 'parkinsons disease', label: 'parkinsons-disease', component: Parkinsons },
    { name: 'ulcer', label: 'ulcer', component: Ulcer },
  ];

  const diseasesMenu = diseases.map(diseasesInfo => {
    const { label, component: DiseasesComponent } = diseasesInfo

    return(
      <div key={label}>
          <Route path={`/${label}`} render={() => (
            <DiseasesComponent
              products={products}
              addToCart={addToCart}
              shopItems={shopItems}
              handleDelete={handleDelete}
              subtotal={subtotal}
              getSubtotal={getSubtotal}
            />
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
