import React from 'react'
import  "../style/item.css"

export const Item = (props) => {
  return (
    <div className='main-item'>
        <div className='date'>
            {props.date}
        </div>
        <div className='content'>
            {props.content}
        </div>
        <div className='amount'>
            {props.price}
        </div>
    </div>
  )
}
