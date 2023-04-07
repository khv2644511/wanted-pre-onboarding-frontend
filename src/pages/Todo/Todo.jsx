import React from "react";
import { S } from "./TodoStyle";
import LogoutButton from "../../components/todo/LogoutButton/LogoutButton";
import TodoInput from "../../components/todo/TodoInput/TodoInput";
import ToDoList from "../../components/todo/TodoList/TodoList";

export default function Todo() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Todo List</S.Title>
        <LogoutButton />
      </S.Header>
      <S.TodoContainer>
        <TodoInput />
        <ToDoList />
      </S.TodoContainer>
    </S.Container>
  );
}
