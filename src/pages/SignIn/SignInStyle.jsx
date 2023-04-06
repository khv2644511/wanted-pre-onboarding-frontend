import styled from "styled-components";

const Container = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 320px;
  background-color: var(--color-type-02);
  border: 2px solid var(--color-type-03);
  border-radius: 10px;
  text-align: center;
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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

export const S = { Container, Title, FormContainer };
