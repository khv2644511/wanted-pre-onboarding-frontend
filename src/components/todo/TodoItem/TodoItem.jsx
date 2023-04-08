import React, { useState } from "react";
import { S } from "./TodoItemStyle";
import ModifyButton from "../ModifyButton/ModifyButton";
import RemoveButton from "../RemoveButton/RemoveButton";
import CheckBox from "../CheckBox/CheckBox";
import CancelButton from "../CancelButton/CancelButton";
import SubmitButton from "../SubmitButton/SubmitButton";

export default function TodoItem({ todoData, getTodos }) {
  const { todo, id } = todoData;
  const [modifyClick, setModifyClick] = useState(true);

  return (
    <S.TodoItemList>
      {modifyClick ? (
        <S.Form>
          <CheckBox todoData={todoData} />
          <S.ModifyInput type="text" />
          <SubmitButton />
          <CancelButton />
        </S.Form>
      ) : (
        <>
          <label>
            <CheckBox todoData={todoData} />
            <S.TodoText>{todo}</S.TodoText>
          </label>
          <S.ButtonContainer>
            <ModifyButton
              onclick={() => {
                setModifyClick((prev) => !prev);
              }}
            />
            <RemoveButton todoId={id} getTodos={getTodos} />
          </S.ButtonContainer>{" "}
        </>
      )}
    </S.TodoItemList>
  );
}
