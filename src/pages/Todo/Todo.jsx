import React, { useEffect } from "react";
import { S } from "./TodoStyle";
import LogoutButton from "../../components/todo/LogoutButton/LogoutButton";
import TodoInput from "../../components/todo/TodoInput/TodoInput";
import ToDoList from "../../components/todo/TodoList/TodoList";
import useGetTodo from "../../hooks/todo/useGetTodo";

export default function Todo() {
  const [isLoading, todos, getTodos] = useGetTodo();

  useEffect(() => {
    getTodos();
  }, [getTodos, todos]);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Todo List</S.Title>
        <LogoutButton />
      </S.Header>
      <S.TodoContainer>
        <TodoInput />
        <ToDoList todos={todos} isLoading={isLoading} getTodos={getTodos} />
      </S.TodoContainer>
    </S.Container>
  );
}
