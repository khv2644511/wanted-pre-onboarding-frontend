import { S } from "./TodoInputStyle";
import { AiOutlinePlus } from "react-icons/ai";

export default function TodoInput() {
  return (
    <S.FormContainer>
      <S.Input
        type="text"
        data-testid="new-todo-input"
        placeholder="할 일을 입력하세요."
      />
      <S.Button data-testid="new-todo-add-button">
        <AiOutlinePlus />
      </S.Button>
    </S.FormContainer>
  );
}
