import React from "react";
import { S } from "./TodoItemStyle";
import ModifyButton from "../ModifyButton/ModifyButton";
import RemoveButton from "../RemoveButton/RemoveButton";

export default function TodoItem() {
  return (
    <S.TodoItemList>
      <label>
        <input type="checkbox" />
        <S.TodoText>오늘 할일 1</S.TodoText>
      </label>
      <S.ButtonContainer>
        <ModifyButton />
        <RemoveButton />
      </S.ButtonContainer>
    </S.TodoItemList>
  );
}
