import { useState } from 'react'
import './Deaths.style.scss'
import Card from '../Card/Card.component'
import { TOPICS_Deaths } from '../../constants/topics'
function Deaths() {

  return (
      <div className="deaths">
       <div className='section-row'>
        {TOPICS_Deaths.map((topic, index) => {
           if(index < 3)return <Card key={index} title={topic} />
        })}
      </div>
    </div>
  )
}

export default Deaths
