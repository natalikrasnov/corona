import { MAIN_TOPICS } from '../../../constants/topics'
import './Navbar.style.scss'
import { useRef , useEffect, useState} from 'react'

function Navbar({ active, activateTopic }) {

  // const [activeTopic, setActiveTopic] = useState(0)

  const topicRef = useRef(null)

  const scrollToElement = (index) => topicRef.current.children[0].children[index].scrollIntoView(true)

  useEffect(() => {
    scrollToElement(active)
  }, [active])

  return (
    <div className="navbar"  ref={topicRef}>
      <ul>
        {
          Object.values(MAIN_TOPICS).map((title, index) =>
            <li className={index === active ? 'active' : ''} key={title} id={ index} onClick={()=> activateTopic(index)}>
              {title}
            </li>
          )
        }
      </ul>
      
      
    </div>
  )
}

export default Navbar
