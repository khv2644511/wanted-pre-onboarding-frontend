import todoApi from "../../../services/api/todo";
import { S } from "./TodoInputStyle";
import { AiOutlinePlus } from "react-icons/ai";
import useInput from "../../../hooks/common/useInput";

export default function TodoInput({ getTodos }) {
  const [{ todo }, onChange, setValue] = useInput({ todo: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!todo) {
      return alert("투두를 입력해주세요.");
    }

    await todoApi.createTodo(todo);
    getTodos();
    setValue("todo", "");
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
