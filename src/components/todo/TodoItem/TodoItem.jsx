import React, { useCallback, useState } from "react";
import { S } from "./TodoItemStyle";
import ModifyButton from "../ModifyButton/ModifyButton";
import RemoveButton from "../RemoveButton/RemoveButton";
import CancelButton from "../CancelButton/CancelButton";
import SubmitButton from "../SubmitButton/SubmitButton";
import todoApi from "../../../services/api/todo";

export default function TodoItem({ todoData, getTodos }) {
  const { todo, id, isCompleted } = todoData;
  const [isModify, setIsModify] = useState(false);
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const value = e.currentTarget.todoInput.value;
    await todoApi.updateTodo(id, value, isModify);
    getTodos();
    setIsModify(false);
  };

  const handleOnChange = useCallback(async () => {
    setIsChecked((prev) => !prev);
    const res = await todoApi.updateTodo(id, todo, !isChecked);
    console.log(res);
  }, [id, todo, isChecked]);

  return (
    <S.TodoItemList>
      {isModify ? (
        <S.Form onSubmit={handleUpdate}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleOnChange}
          />
          <S.ModifyInput type="text" defaultValue={todo} name="todoInput" />
          <SubmitButton />
          <CancelButton onclick={() => setIsModify((prev) => !prev)} />
        </S.Form>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleOnChange}
            />
            <S.TodoText>{todo}</S.TodoText>
          </label>
          <S.ButtonContainer>
            <ModifyButton
              onclick={() => {
                setIsModify((prev) => !prev);
              }}
            />
            <RemoveButton todoId={id} getTodos={getTodos} />
          </S.ButtonContainer>{" "}
        </>
      )}
    </S.TodoItemList>
  );
}
