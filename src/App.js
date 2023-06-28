import React, { useState, useEffect } from "react";
import { Tabs, Input, Button, Radio, Space, Checkbox } from "antd";
import "./App.css";
import Completed from "./components/Completed";
import All from "./components/All";
import Active from "./components/Active";

const App = () => {
  const storageItem = JSON.parse(localStorage.getItem("todo"));
  const [todo, setTodo] = useState(storageItem ?? []);

  const [title, setTitle] = useState("");

  const handleAdd = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 100000).toString(16),
      isDoing: false,
      title: title,
    };
    setTitle("");
    setTodo([...todo, newTodo]);
  };
  const handleChangeAll = (event) => {
    setTitle(event.target.value);
  };

  const handleTodo = (i) => {
    const a = todo.map((item) => {
      if (item.id === i.id) {
        return { ...item, isDoing: !item.isDoing };
      } else {
        return item;
      }
    });
    setTodo(a);
  };

  const handleDeleteTodo = () => {
    setTodo([]);
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  // Saving in LocalStorage
  const getLocalTodos = () => {
    const itemJSON = JSON.stringify(todo);
    localStorage.setItem("item", itemJSON);
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todo]);

  return (
    <>
      <div className="container">
        <div className="mt-2" style={{ display: "flex" }}>
          <Input onChange={handleChangeAll} placeholder="add details" />
          <Button
            onClick={handleAdd}
            style={{ marginLeft: "5px" }}
            type="primary"
          >
            Add
          </Button>
        </div>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "All",
              key: "1",
              children: <All todoList={todo} handleTodo={handleTodo} />,
            },
            {
              label: "Active",
              key: "2",
              children: <Active todoList={todo} handleTodo={handleTodo} />,
            },
            {
              label: "Completed",
              key: "3",
              children: (
                <Completed
                  todoList={todo}
                  handleTodo={handleTodo}
                  handleDeleteTodo={handleDeleteTodo}
                />
              ),
            },
          ]}
        />
      </div>
    </>
  );
};

export default App;
