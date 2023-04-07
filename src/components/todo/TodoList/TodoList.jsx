import TodoItem from "../TodoItem/TodoItem";
import { S } from "./TodoListStyle";

export default function ToDoList() {
  return (
    <S.ContainerUl>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </S.ContainerUl>
  );
}
