import { useState } from 'react'
import './CommunityData.style.scss'
import Card from '../Card/Card.component'
import { TOPICS_Community_Data } from '../../constants/topics'

function CommunityData() {

  return (
      <div className="community-data">
      <div className='section-row'>
        {TOPICS_Community_Data.map((topic, index) => {
          if (index <2) return <Card key={index} title={topic} />
        })}
      </div>
      <div className='section-row'>
        {TOPICS_Community_Data.map((topic, index) => {
          if (index >1) return <Card key={index} title={topic} />
        })}
      </div>

    </div> 
  )
}

export default CommunityData
