import React from "react";
import { Space, Checkbox } from "antd";
const All = (props) => {
  const { todoList, handleTodo } = props;
  return (
    <Checkbox.Group>
      <Space direction="vertical">
        {todoList.map((item, index) => (
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
export default All;
