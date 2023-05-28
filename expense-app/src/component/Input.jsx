import React, { useState } from "react";
import  "../style/input.css"

const Input = () => {


  const [listData,setListData] = useState
([
    { id: 1, content: "expense 1", amount: 50, date: "2023-05-11" },
    { id: 2, content: "expense 2", amount: 10, date: "2022-04-26" },
    { id: 3, content: "expense 3", amount: 20, date: "2021-10-22" },
    { id: 4, content: "expense 4", amount: 40, date: "2024-06-15" },
  ]);


    const [editTable, setEditTable] = useState(false);
    const [newContent, setNewContent] = useState("");
    const [newAmount, setNewAmount] = useState(0);
    const [newDate, setNewDate] = useState("");
  
    const handleCreateExpense = (e) => {
      e.preventDefault();
      if (!newContent || !newAmount || !newDate) {
        alert("Please fill all input");
        return;
      } }
      //   newInput(newContent, newAmount, newDate);
      //   setNewContent("");
      //   setNewAmount(0);
      //   setNewDate("");
      //   setEditTable(false);
      // }
    // };
  	const handleAddNew = () => {
      const newData = {
        date: newDate,
        content: newContent,
        amount: newAmount,
      };
  
      setListData([...listData, newData]);
    };




	const handleChangeContent = (event) => {
		setNewContent(event.target.value);
	};
	const handleChangeDate = (event) => {
		setNewDate(event.target.value);
	};
	const handleChangeAmount = (event) => {
		setNewAmount(event.target.value);
	};
    return (
      <div className='container'>
        {editTable ? (
          <form
            className="open-expense-form"
            onSubmit={handleAddNew}
          >
            <div className="input-container">
              <div className="input-form">
              <label>Name</label>
              <input value={newContent} type="text"  className='input' onChange={handleChangeContent} />
            </div>
            <div className="input-form">
              <label>Amount</label>
              <input
                type="number"
                value={newAmount}
                className='input'
                onChange={handleChangeAmount}
              />
            </div>
            <div className="input-form">
              <label>Date</label>
              <input type="date"  value={newDate} className='input' onChange={handleChangeDate} />
            </div>
            <div className="buttons">
              <button type="submit" className="add" onClick={handleAddNew}>Add</button>
              <button type="button" className="cancel" onClick={() => setEditTable(false)}>
                Cancel
              </button>
              </div>
            </div>
          </form>
        ) : (
          <button onClick={() => setEditTable(true)} className="add-new">ADD NEW EXPENSE</button>
        )}
      </div>
    );
}

export default Input;