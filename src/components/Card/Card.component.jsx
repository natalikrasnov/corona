import { useState } from 'react'
import './Card.style.scss'

function Card({title, info, isShowMenu, shareFunction, downloadFunction, filter, children}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const GetFilterComponent = () => {
    switch (filter.type) {
      case 'select': 
        return <input type="select" onChange={filter.updateFilter}> </input>
      case 'input':
        console.log("filter object=> ",filter)
        return (
          <div>
            <input type="text" name="city" list="citynames" placeholder='כלל הישובים' onInput={filter.updateFilter}/>
            <div>
            <datalist id="citynames">
              {filter.data.map((el,i) => <option key={i}  value={el.city}></option>)}
                <div className='datalist-buttons'>
                  <button > אישור</button>
                  <button > ביטול</button>
                </div>
              </datalist>
             
            </div>
          </div>
        )
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
        <a className='menu_button' onClick={()=> setIsMenuOpen(!isMenuOpen)}>&#8285;</a>
        {isMenuOpen && <div className='menu-functions'>
          <a onClick={shareFunction}>share</a>
          <a onClick={downloadFunction}>download</a>
        </div>}
        </div>}
      </div>  
      {filter && <div className='filter'>
        <GetFilterComponent />
      </div>}

      {children}

    </div>
  )
}

export default Card
