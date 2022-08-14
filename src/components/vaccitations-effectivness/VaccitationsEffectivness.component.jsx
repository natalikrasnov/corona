import { useState } from 'react'
import { TOPICS_Vaccination_Effectiveness } from '../../constants/topics'
import './VaccitationsEffectivness.style.scss'
import Card from '../Card/Card.component'
function VaccitationsEffectivness() {

  return (
      <div className="vaccitations-effectivness">
          <div className='section-row'>
        {TOPICS_Vaccination_Effectiveness.map((topic, index) => {
           return <Card key={index} title={topic} />
        })}
      </div>
    </div>
  )
}

export default VaccitationsEffectivness
