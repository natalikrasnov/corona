import { useReducer, useEffect } from 'react'
import './Table.style.scss'

import tableDataReducer, { initialTableDataState } from '../../reducers/TableData.reducer'
import { initDataAction, sortDataAction , filterDataAction} from '../../actions/TableData.action'

function Table({ data, notIndex, filter, backgroundStyle, displayPercent }) {

  const [tableData, dispatchTableData] = useReducer(tableDataReducer, initialTableDataState)
  
  useEffect(() => dispatchTableData(initDataAction(data)) , []) 
  useEffect(() => dispatchTableData(filterDataAction(filter)), [filter])
  
  useEffect(()=> console.log("tabelData Change (debug)", tableData), [tableData])
 
  const getStyle = (index, object) => {
    if (backgroundStyle && backgroundStyle.index && backgroundStyle.index.includes(index)) {
      const color = backgroundStyle.getColor(object)
      return  color
    }
  }

  const doSort = (index) => dispatchTableData(sortDataAction(index))

  const isPercent = (value, i) =>
      displayPercent && displayPercent.includes(i) && !(/[^(\d+)$.]+/g.test(value))
  
  const GetTable = ({ initialData }) => {
    return initialData.map((title, index) => 
        index > 0 && (
          <tr key={index}>
            {Object.values(initialData[index]).map((value, i) =>  !notIndex.includes(i) && (
              <td key={i}>
                <div className='td-content'>
                  <span className={getStyle(i, initialData[index])}>
                    {index === 9 && initialData[index]["__EMPTY_4"] && console.log(initialData[index]["__EMPTY_4"])}
                    {value}
                  </span>
                    
                  {
                    isPercent(value,i) &&
                    <span>
                      <span className='percent-block'>
                        <span
                          className={'percent-fill '+ ( i===1 ? 'green': (i===2 ? 'orange' : "blue"))}
                          style={{ width: value + '%' }}
                        />
                        </span>
                        <span> % </span>
                    </span>
                  }
                </div>
              </td>
            ))}
          </tr>
        )
          )
  }

  return (
  <div className='table-component'>
    <div className= "title_table">
        {tableData && Object.values(tableData[0]).map((value, index) =>  !notIndex.includes(index) && (
          <label key={index} onClick={()=>doSort(index)}>{value}</label>
        ))}
      </div>
  <div className='table-container'>
    <table className='table'>
    
      <tbody>
      {tableData && <GetTable initialData={tableData.filtered? tableData.filtered : tableData}/>}
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
