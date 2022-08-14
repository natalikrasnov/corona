import { useState , Fragment} from 'react'
import { TOPICS_Overview_last } from '../../../constants/topics'
import Card from '../../Card/Card.component'
import './Lastweek.style.scss'

function LastWeek() {
  return (
      <Card title="סיכום 7 ימים אחרונים" >
        {<div className="inner-card row2">{TOPICS_Overview_last.map((topic, index) => <Card key={index} title={topic} />)}</div>}
      </Card>
  )
}

export default LastWeek
