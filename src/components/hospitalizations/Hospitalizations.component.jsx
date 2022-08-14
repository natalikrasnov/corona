import { useState } from 'react'
import './Hospitalizations.style.scss'
import Card from '../Card/Card.component'
import { TOPICS_Child_Cases_and_Hospitalizations } from '../../constants/topics'
function Hospitalizations() {

  return (
      <div className="hospitalizations">
            <div className='section-row'>
        {TOPICS_Child_Cases_and_Hospitalizations.map((topic, index) => {
           return <Card key={index} title={topic} />
        })}
      </div>
    </div>
  )
}

export default Hospitalizations
