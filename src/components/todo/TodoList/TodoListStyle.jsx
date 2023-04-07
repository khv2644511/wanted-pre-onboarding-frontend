import styled from "styled-components";

const ContainerUl = styled.ul`
  height: 100%;
`;
const TodoItemList = styled.li`
  display: flex;
  border-bottom: 2px solid var(--color-type-03);
  margin-bottom: 20px;
  margin: 0 5px 20px;
  padding-bottom: 5px;
  justify-content: space-between;
  align-items: center;
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

export const S = {
  ContainerUl,
  TodoItemList,
  TodoText,
  ButtonContainer,
};
