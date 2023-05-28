import React, { useState } from 'react'
import  "../style/main.css"
import { Chart } from './Chart'
import { Item } from './Item'

export const Main = () => {
  const [listData, setListData]  = useState ([
    {
      date: '01/01/2022',
      content: 'Some books',
      price: '$ 50',
    }
  ]);
  return (

    <>
    <div className='main-container'>
      <div className='main-head'>
        <span>
          Filter by year
        </span>
        <span>

        </span>
      </div>
      <div><Chart/></div>
      <div>
        {listData.map((data, index) => {
          return (
            <Item
            date={data.date}
            content={data.content}
            price={data.price}
            />
          );
        })}
      </div>
    </div>
    </>
  )
}
