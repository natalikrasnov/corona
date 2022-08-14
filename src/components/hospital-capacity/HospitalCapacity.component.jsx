import { useState } from 'react'
import './HospitalCapacity.style.scss'

import Card from '../Card/Card.component'
import { TOPICS_Overall_Hospital_Capacity } from '../../constants/topics'

function HospitalCapacity() {

  return (
    <div className="hospital-capacity">
      <div className='section-row'>
          {TOPICS_Overall_Hospital_Capacity.map((topic, index) => {
            return <Card key={index} title={topic} />
          })}
      </div>
    </div>
  )
}

export default HospitalCapacity
