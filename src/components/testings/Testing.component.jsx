import { useState } from 'react'
import './Testing.style.scss'
import Card from '../Card/Card.component'
import { TOPICS_Testing } from '../../constants/topics'
function Testing() {

  return (
      <div className="testing">
           <div className='section-row'>
        {TOPICS_Testing.map((topic, index) => {
           if(index < 3)return <Card key={index} title={topic} />
        })}
      </div>
       <div className='section-row'>
        {TOPICS_Testing.map((topic, index) => {
           if(index >2)return <Card key={index} title={topic} />
        })}
      </div>
    </div>
  )
}

export default Testing
