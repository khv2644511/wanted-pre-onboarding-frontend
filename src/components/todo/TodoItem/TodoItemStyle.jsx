import styled from "styled-components";

const TodoItemList = styled.li`
  display: flex;
  border-bottom: 2px solid var(--color-type-03);
  margin-bottom: 20px;
  margin: 0 5px 20px;
  padding-bottom: 5px;
  justify-content: space-between;
  align-items: center;
  margin-top: 3px;
  label {
    display: flex;
    flex-basis: auto;
    max-width: 85%;
  }
`;

const TodoText = styled.span`
  width: 300px;
  font-size: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin: 0 10px;
  line-height: normal;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 7px;
`;

const ModifyInput = styled.input`
  flex-basis: 100%;
  width: 80%;
  height: 25px;
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  padding: 7px;
  margin-left: 10px;
`;

export const S = {
  TodoItemList,
  TodoText,
  ButtonContainer,
  Form,
  ModifyInput,
};
