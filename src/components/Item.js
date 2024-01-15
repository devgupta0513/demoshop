import React from 'react'
import './Item.css'
const Item = ({name,children}) => {
  
  return (
    <div>

    <p className='nirma'>{name}</p>
     {children}
    </div>
    
  )
}

export default Item;