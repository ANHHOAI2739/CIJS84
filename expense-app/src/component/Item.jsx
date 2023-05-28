import React from "react";
import "../style/item.css";

const Item = ({ content, amount, date }) => {
    return (
        <div className='main-item'>
          <div className='date'>{date}</div>
          <div className='content'>{content}</div>
          <div className='amount'>${amount}</div>
        </div>
      );
};

export default Item;
