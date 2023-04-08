import React from "react";
import { S } from "./TodoItemStyle";
import ModifyButton from "../ModifyButton/ModifyButton";
import RemoveButton from "../RemoveButton/RemoveButton";

export default function TodoItem({ todoData, getTodos }) {
  const { todo, id } = todoData;

  return (
    <S.TodoItemList>
      <label>
        <input type="checkbox" />
        <S.TodoText>{todo}</S.TodoText>
      </label>
      <S.ButtonContainer>
        <ModifyButton />
        <RemoveButton todoId={id} getTodos={getTodos} />
      </S.ButtonContainer>
    </S.TodoItemList>
  );
}
