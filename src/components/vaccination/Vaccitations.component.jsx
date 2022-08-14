import { useState } from 'react'
import './Vaccitations.style.scss'

import Card from '../Card/Card.component'
import VictoryChart from '../charts/BarGraph'
import FillAllGraph from '../charts/FillAllGraph'
import VictoryChartLinerFill from '../charts/LinerGraph'
import Table from '../Table/Tabel.component'

import { TOPICS_Vaccination } from '../../constants/topics'
import { vaccineted } from '../../data/covidData'
import {data} from '../../data/covidCityV'
import he from '../../locale/he.json'

function Vaccitations() {

  const GetInnerComponent = ({topic, index}) => {
  //  console.log(topic, vaccineted.find(element => element.id === 'vaccinated').data)
    switch (index) {
      case 0:
        const vaccinetedData = vaccineted.find(element => element.id === 'vaccinated').data
        return (<VictoryChart
          dataElements={[vaccinetedData]}
          xTitle="Day_Date"
          yTitle={["vaccinated", "vaccinated_seconde_dose", "vaccinated_third_dose", "vaccinated_fourth_dose"]} />)
      case 1:
        return (<VictoryChartLinerFill />)
      case 2:
        //  const data = vaccineted.find(element => element.id === 'vaccinated').data
        return (<FillAllGraph
          
        // dataElements={[data]}
        // xTitle="Day_Date"
        // yTitle={["vaccinated", "vaccinated_seconde_dose", "vaccinated_third_dose", "vaccinated_fourth_dose"]} 
        />)
      case 3:
        const getColor = (row) => {
          if(!Object.values(row)[7]) return 
          return Object.keys(he)[Object.values(he).findIndex(ob=> ob === Object.values(row)[7])]
        }

        return (
          <Table
            data={data}
            notIndex={[7,4]}
            backgroundStyle={{ getColor, index: [6] }}
            displayPercent={[1, 2, 3]}
           />
        )

     }
  }

  const getFilterContext = (topic, index) => { 
    switch (index) {
      case 3:
        return {type: 'select'}
    }
  }

  return (
      <div className="vaccitations">
          <div className='section-row'>
        {TOPICS_Vaccination.map((topic, index) => {
          if (index < 3) return <Card key={index} title={topic} >
            <GetInnerComponent topic={topic} index={index} />
          </Card> 
            })}
      </div>
      <div className='section-row'>
            {TOPICS_Vaccination.map((topic, index) => {
              if (index == 3) return <Card
                key={index}
                isShowMenu={true}
                info="ישובים בהם יותר מ-2,000 תושבים. לכל ישוב מוצגים: -אחוז מקבלי חיסון מנה ראשונה, מנה שניה ומנה שלישית -מספר חולים פעילים לכל 10,000 תושבים -הציון היומי המחושב לישוב מתוכנית הרמזור"
                title={topic} >
            <GetInnerComponent topic={topic} index={index} />
          </Card> 
            })}
      </div>
      <div className='section-row'>
            {TOPICS_Vaccination.map((topic, index) => {
              if (index >3) return <Card key={index} title={topic} >
            <GetInnerComponent topic={topic} index={index} />
          </Card>
            })}
      </div>
    </div>
  )

}

export default Vaccitations
