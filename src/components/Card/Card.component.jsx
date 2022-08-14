import { useState } from 'react'
import './Card.style.scss'

function Card({title, info, isShowMenu, shareFunction, downloadFunction, filter, children}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const getFilterComponent = () => {
    switch (filter.type) {
      case 'select': 
        return <select onChange={filter.onChange}> </select>
    }
  }

  return (
    <div className="card">
      <div className='card_header'>
     {title && <label className="card_title">{title}</label>}
      {info && <div className='info'>
          <label className='info_img'>i</label>
          <div className='info_popup'>
            <span >{info}</span>
            </div>
      </div>}
      {isShowMenu && <div className='menu'>
        <a className='menu_button'>&#8285;</a>
        <div className='menu-functions'>
          <a onClick={shareFunction}>share</a>
          <a onClick={downloadFunction}>download</a>
        </div>
        </div>}
      </div>  
      {filter && <div className='filter'>
        {getFilterComponent}
      </div>}

      {children}

    </div>
  )
}

export default Card
