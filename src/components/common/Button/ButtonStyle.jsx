import styled from "styled-components";

const Button = styled.button`
  background-color: var(${(props) => props.bgcolor});
  color: var(${(props) => props.txtcolor});
  border: none;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  :disabled {
    background-color: var(--color-type-03);
    cursor: default;
  }
`;

export const S = { Button };
