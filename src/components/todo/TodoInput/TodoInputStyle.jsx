import styled from "styled-components";

const FormContainer = styled.form`
  position: relative;
  width: 80%;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 20px;
  align-items: center;
`;
const Button = styled.button`
  position: absolute;
  right: 0;
  height: 25px;
  width: 25px;
  /* width: auto; */
  background-color: var(--color-type-01);
  border: none;
  border-radius: 20%;
  padding: 3px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

const Input = styled.input`
  flex-basis: 80%;
  height: 23px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: var(--color-type-03);
`;
export const S = {
  FormContainer,
  Button,
  Input,
};
