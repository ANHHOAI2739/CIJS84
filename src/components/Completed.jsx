import React from "react";
import { Space, Checkbox, Button } from "antd";
const All = (props) => {
  const { todoList, handleTodo, handleDeleteTodo } = props;
  return (
    <>
      <div>
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
      </div>
      <Button onClick={handleDeleteTodo} type="primary" danger>
        Delete all
      </Button>
    </>
  );
};
export default All;
