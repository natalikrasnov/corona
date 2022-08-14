import { useState } from 'react'
import { TOPICS_Additional_Data } from '../../constants/topics'
import Card from '../Card/Card.component'
import './AdditionalData.style.scss'

function AdditionalData() {

  return (
      <div className="additional-data">
         <div className='section-row'>
        {TOPICS_Additional_Data.map((topic, index) => {
          if (index < 3) return <Card key={index} title={topic} />
        })}
      </div>
    <div className='section-row'>
        {TOPICS_Additional_Data.map((topic, index) => {
          if (index > 2&& index <5) return <Card key={index} title={topic} />
        })}
      </div>
      <div className='section-row'>
        {TOPICS_Additional_Data.map((topic, index) => {
          if (index > 4) return <Card key={index} title={topic} />
        })}
      </div>
    </div>
  )
}

export default AdditionalData
