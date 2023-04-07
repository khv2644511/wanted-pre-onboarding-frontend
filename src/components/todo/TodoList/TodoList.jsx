import ModifyButton from "../ModifyButton/ModifyButton";
import RemoveButton from "../RemoveButton/RemoveButton";
import { S } from "./TodoListStyle";

export default function ToDoList() {
  return (
    <S.ContainerUl>
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
    </S.ContainerUl>
  );
}
