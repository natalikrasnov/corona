import { useState } from 'react'
import './KeyData.style.scss'

import Card from '../Card/Card.component'
import { TOPICS_Key_Data } from '../../constants/topics'

function KeyData() {

  return (
      <div className="key-data">
    <div className='section-row'>
        {TOPICS_Key_Data.map((topic, index) => {
          if (index <TOPICS_Key_Data.length-1) return <Card key={index} title={topic} />
        })}
      </div>
      < Card data={TOPICS_Key_Data[TOPICS_Key_Data.length - 1]} />

    </div>
  )
}

export default KeyData
