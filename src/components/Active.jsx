import React from "react";
import { Space, Checkbox } from "antd";

const Active = (props) => {
  const { todoList, handleTodo } = props;
  const newTodoList = todoList.filter((item) => item.isDoing === false);
  return (
    <Checkbox.Group>
      <Space direction="vertical">
        {newTodoList.map((item, index) => (
          <Checkbox
            onChange={() => handleTodo(item)}
            className={`${item.isDoing ? "checked " : ""}`}
            checked={item.isDoing}
            value={item.id}
          >
            {item.title}
          </Checkbox>
        ))}
      </Space>
    </Checkbox.Group>
  );
};
export default Active;
