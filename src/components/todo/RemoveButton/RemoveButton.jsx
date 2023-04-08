import { useCallback } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { S } from ".//RemoveButtonStyle";
import todoApi from "../../../services/api/todo";

export default function RemoveButton({ todoId, getTodos }) {
  const handleDelete = useCallback(
    async (todoId) => {
      const res = await todoApi.deleteTodo(todoId);
      console.log(res);
      getTodos();
    },
    [getTodos]
  );

  return (
    <S.Button onClick={() => handleDelete(todoId)} data-testid="delete-button">
      <BsFillTrash3Fill />
    </S.Button>
  );
}
