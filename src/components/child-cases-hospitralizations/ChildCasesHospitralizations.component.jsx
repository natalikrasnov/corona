import { useState } from 'react'
import { TOPICS_Child_Cases_and_Hospitalizations } from '../../constants/topics'
import './ChildCasesHospitralizations.style.scss'
import Card from '../Card/Card.component'

function ChildCasesHospitralizations() {

  return (
      <div className="child-cases-hospitralizations">
               <div className='section-row'>
        {TOPICS_Child_Cases_and_Hospitalizations.map((topic, index) => {
          if (index <TOPICS_Child_Cases_and_Hospitalizations.length-2) return <Card key={index} title={topic} />
        })}
      </div>
      <div className='section-row'>
        {TOPICS_Child_Cases_and_Hospitalizations.map((topic, index) => {
           if (index > 2) return <Card key={index} title={topic} />
        })}
      </div>

    </div>
  )
}

export default ChildCasesHospitralizations
