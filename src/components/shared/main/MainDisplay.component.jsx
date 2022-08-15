import { useEffect, useRef , useState} from 'react'
import './MainDisplay.style.scss'

import { MAIN_TOPICS } from '../../../constants/topics'
import Overview from '../../overview/Overview.component';
import KeyData from '../../key-data/KeyData.component';
import HospitalCapacity from '../../hospital-capacity/HospitalCapacity.component';
import ChildCasesHospitralizations from '../../child-cases-hospitralizations/ChildCasesHospitralizations.component'
import ImportedCases from '../../imported-cases/ImportedCases.component'
import VaccitationsEffectivness from '../../vaccitations-effectivness/VaccitationsEffectivness.component'
import Hospitalizations from '../../hospitalizations/Hospitalizations.component'
import Deaths from '../../deaths/Deaths.component'
import Testing from '../../testings/Testing.component'
import AdditionalData from '../../additional-data/AdditionalData.component'
import Recovery from '../../recovery/Recovery.component'
import Vaccitations from '../../vaccination/Vaccitations.component'
import CommunityData from '../../community-data/CommunityData.component'

function MainDisplay({active, activateTopic, isDarkMode}) {

  const getComponent = (key) => {
    switch (key) {
      case MAIN_TOPICS.Overview:
        return <Overview />
      case MAIN_TOPICS.Key_Data:
        return <KeyData />
    case MAIN_TOPICS.Overall_Hospital_Capacity:
        return <HospitalCapacity />
      case MAIN_TOPICS.Child_Cases_and_Hospitalizations:
        return <ChildCasesHospitralizations />
    case MAIN_TOPICS.Imported_Cases:
        return <ImportedCases />
      case MAIN_TOPICS.Vaccination_Effectiveness:
        return <VaccitationsEffectivness />
    case MAIN_TOPICS.Hospitalizations:
        return <Hospitalizations />
      case MAIN_TOPICS.Deaths:
        return <Deaths />
    case MAIN_TOPICS.Testing:
        return <Testing />
      case MAIN_TOPICS.Additional_Data:
        return <AdditionalData />
    case MAIN_TOPICS.Reinfection_and_Recovery:
        return <Recovery />
      case MAIN_TOPICS.Vaccination:
        return <Vaccitations />
    case MAIN_TOPICS.Community_Data:
        return <CommunityData />
      default:
        break;
    }
  }

  const topicRef = useRef(null)
  const curTopicRef = Object.keys(MAIN_TOPICS).map(() => useRef(null))
  // const [visibleElements, setVisibleElements] = useState({})

  const scrollToElement = (index) => topicRef.current.children[index].scrollIntoView();
  
  const onScroll = ([event]) => {
    console.log("on scroll",event.target.id)
    if (event && event.target.id && event.isIntersecting) {
      //activateTopic(event.target.id)
    }
  }
 
  const observer = new IntersectionObserver(onScroll)

  useEffect(() => {
   curTopicRef.map(ref => observer.observe(ref.current))
    return ()=> observer.disconnect
  }, [])

  useEffect(() => {
    if(active) scrollToElement(active)
  }, [active])
 
  
  return (
    <div className={"main-display "+ (isDarkMode? "dark-mode": '')} ref={topicRef} >
      {Object.keys(MAIN_TOPICS).map((topic, index) =>
        <div key={index} id={topic} className="topic" ref={curTopicRef[index]} >
          <label className='topic_title'> {MAIN_TOPICS[topic]} </label>
          {getComponent(MAIN_TOPICS[topic])}
        </div>
      )}
    </div>
  )
}

export default MainDisplay
