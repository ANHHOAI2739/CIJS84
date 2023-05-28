import React, { useState } from 'react'
import  "../style/input.css"

// export const Input = () => {
//   const CreateExpenseForm = ({ onCreateExpense }) => {
//     const [editTable, setEditTable] = useState(false);
//     const [newName, setNewName] = useState("");
//     const [newAmnout, setNewAmount] = useState(0);
//     const [newDate, setNewDate] = useState("");
  
//     const handleCreateExpense = (e) => {
//       e.preventDefault();
//       if (!newName || !newAmnout || !newDate) {
//         alert("Please fill all input");
//         return;
//       } else {
//         onCreateExpense(newName, newAmnout, newDate);
//         setNewName("");
//         setNewAmount(0);
//         setNewDate("");
//         setEditTable(false);
//       }
//     };
  
  //   const [listData, setListData]  = useState ([
  //   {
  //     date: '01/01/2022',
  //     content: 'Some books',
  //     price: '$ 50',
  //   }
  // ]);
  // const [date, setDate] = useState(null);
  // const [content, setContent] = useState(null);
  // const [price, setPrice] = useState(null);

  // const addItem = () => {
  //   const newData = {
  //     date: date,
  //     content: content,
  //     price: price,
  //   };
  //   setListData([...listData, newData]);
  // }

  // const newDate = (event) => {
  //   setDate(event.target.value);

  // }
  // const newContent = (event) => {
  //   setContent(event.target.value);

  // }
  // const newPrice = (event) => {
  //   setPrice(event.target.value);

  // }
//   return (
    
//     <div className='container'>
//       <div className='input-container'>
//       <div className='inputForm'>
//         <label className='label'>Name</label>
//         <input className='input' 
//         // value={content} 
//         // onChange={newContent} 
//         onChange={(e) => setNewName(e.target.value)}
//         type="text"  placeholder='Enter name here...'/>
//     </div>
//     <div className='inputForm'>
//         <label className='label'>Amount</label>
//         <input className='input' 
//         // value={price} 
//         // onChange={newPrice}  
//         onChange={(e) => setNewAmount(e.target.value)}
//         type="text"  placeholder='Enter amount here...'/>
//     </div>
//     <div className='inputForm'>
//         <label className='label'>Date</label>
//         <input className='input' 
//         // value={date} 
//         // onChange={newDate}  
//         onChange={(e) => setNewDate(e.target.value)}
//         type="date" name="" id="" />
//     </div>  
//       </div>
//       <div className='buttons'>
//         <button className='add' 
//         type="submit"
//         // onClick={addItem}
//         >ADD</button>
//         <button 
//                 onClick={() => setEditTable(false)}
//                 className='cancel'>CANCEL</button>
//       </div>
//     </div>
//   )
// }}


const Input = ({ onCreateExpense }) => {
  const [editTable, setEditTable] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAmnout, setNewAmount] = useState(0);
  const [newDate, setNewDate] = useState("");

  const handleCreateExpense = (e) => {
    e.preventDefault();
    if (!newName || !newAmnout || !newDate) {
      alert("Please fill all input");
      return;
    } else {
      onCreateExpense(newName, newAmnout, newDate);
      setNewName("");
      setNewAmount(0);
      setNewDate("");
      setEditTable(false);
    }
  };

  return (
    <div className="create-expense-form">
      {editTable ? (
        <form
          className="open-expense-form"
          onSubmit={(e) => handleCreateExpense(e)}
        >
          <div>
            <label>Name</label>
            <input type="text" onChange={(e) => setNewName(e.target.value)} />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              onChange={(e) => setNewAmount(e.target.value)}
            />
          </div>
          <div>
            <label>Date</label>
            <input type="date" onChange={(e) => setNewDate(e.target.value)} />
          </div>
          <div>
            <button type="submit">Add</button>
            <button type="button" onClick={() => setEditTable(false)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button onClick={() => setEditTable(true)}>Add new expense</button>
      )}
    </div>
  );
};

export default Input;
