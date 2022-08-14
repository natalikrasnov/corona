import { useState } from 'react'
import './ImportedCases.style.scss'

import Card from '../Card/Card.component'
import { TOPICS_Imported_Cases } from '../../constants/topics'

function ImportedCases() {

  return (
      <div className="imported-cases">
         <div className='section-row '>
        {TOPICS_Imported_Cases.map((topic, index) => {
          if (index <3) return <Card key={index} title={topic} />
        })}
      </div>
      <div className='section-row'>
        {TOPICS_Imported_Cases.map((topic, index) => {
          if (index > 2) return <Card key={index} title={topic} />
        })}
      </div>
    </div>
  )
}

export default ImportedCases
