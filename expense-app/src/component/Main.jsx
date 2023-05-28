import React, { useState } from "react";
import  "../style/main.css"
import Input  from './Input';
import Chart from './Chart';
import Item from './Item';
import expenseData from '../expenseData';

function Main() {
  const [data, setData] = useState(expenseData);
  const [filterYear, setFilterYear] = useState("All");

  const createExpense = (content, amount, date) => {
    const newExpense = {
      id: Date.now(),
      content,
      amount: Number(amount),
      date,
    };

    setData([...data, newExpense]);
  };

  const result = data.filter((item) => {
    const year = item.date.split("-")[0];
    return filterYear == year;
  });

  const filteredYear = filterYear == "All" ? data : result;

  return (
    <div>
      <Input onCreateExpense={createExpense}></Input>
      <div className="main-container">
        <div className="main-head">
          <span>Filter by years</span>
          <select
            value={filterYear}
            className="dropdown"
            onChange={(e) => {
              setFilterYear(e.target.value);
            }}
          >
            <option value={"All"}>All</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </select>
        </div>
        <Chart data={filteredYear}></Chart>

        <div className="expense-list">
        {filteredYear.map((item) => {
          return (
            <Item
             key={item.id}
             content={item.content}
             amount={item.amount}
            date={item.date}
            ></Item>
          );
        })}
</div>
      </div>
    </div>
  );
}

export default Main;
