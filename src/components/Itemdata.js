import React from 'react'
import './Itemdata.css'

const Itemdata = ({date,month,year}) => {
   
  return (
    <div className='mfg-date'>
        <span>{date}</span>
        <span> {month}</span>

        <span> {year}</span>


    </div>
  )
}

export default Itemdata