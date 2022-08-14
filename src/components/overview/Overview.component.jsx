import { useState } from 'react'
import { TOPICS_Overview } from '../../constants/topics'
import Card from '../Card/Card.component'
import LastWeek from './lastweek/Lastweek.component'
import './Overview.style.scss'

function Overview() {


  return (
      <div className="overview">
      <div className='section-row row2'>
        {TOPICS_Overview.map((topic, index) => {
          if (index < TOPICS_Overview.length-1) return <Card key={index} title={topic} />
        })}
      </div>
      < LastWeek data={TOPICS_Overview[TOPICS_Overview.length - 1]} />

    </div>
  )
}

export default Overview
