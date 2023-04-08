import React, { useCallback, useState } from "react";
import todoApi from "../../../services/api/todo";

export default function CheckBox({ todoData }) {
  const { todo, id, isCompleted } = todoData;
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleOnChange = useCallback(async () => {
    setIsChecked((prev) => !prev);
    await todoApi.updateTodo(id, todo, !isChecked);
  }, [id, todo, isChecked]);
  return (
    <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
  );
}
