import { useState } from 'react'
import { TOPICS_Reinfection_and_Recovery } from '../../constants/topics'
import './Recovery.style.scss'
import Card from '../Card/Card.component'
function Recovery() {

  return (
      <div className="recovery">
          <div className='section-row'>
        {TOPICS_Reinfection_and_Recovery.map((topic, index) => {
           return <Card key={index} title={topic} />
        })}
      </div>
    </div>
  )
}

export default Recovery
