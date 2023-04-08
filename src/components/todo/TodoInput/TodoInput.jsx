import todoApi from "../../../services/api/todo";
import { S } from "./TodoInputStyle";
import { AiOutlinePlus } from "react-icons/ai";
import useInput from "../../../hooks/common/useInput";

export default function TodoInput() {
  const [{ todo }, onChange] = useInput({ todo: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await todoApi.createTodo(todo);
    console.log(res);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Input
        onChange={onChange}
        type="text"
        data-testid="new-todo-input"
        placeholder="할 일을 입력하세요."
        value={todo}
        name="todo"
      />
      <S.Button data-testid="new-todo-add-button">
        <AiOutlinePlus />
      </S.Button>
    </S.FormContainer>
  );
}
