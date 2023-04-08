import TodoItem from "../TodoItem/TodoItem";
import { S } from "./TodoListStyle";

export default function ToDoList({ todos, isLoading }) {
  return (
    <S.ContainerUl>
      {isLoading ? (
        <p>Loading...</p>
      ) : todos.length !== 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo.todo} />)
      ) : (
        <p>Todo를 작성해보세요!</p>
      )}
    </S.ContainerUl>
  );
}
