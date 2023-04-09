import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 5px 20px;
  min-height: 500px;
  background-color: var(--color-type-02);
  border: 2px solid var(--color-type-03);
  border-radius: 10px;
  text-align: center;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  align-items: center;
`;
const Title = styled.h2`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 2rem;
  width: 100%;
  padding: 10px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  color: var(--color-type-01);
`;

const TodoContainer = styled.section`
  width: 100%;
  height: 100%;
`;

export const S = {
  Container,
  Header,
  Title,
  TodoContainer,
};
