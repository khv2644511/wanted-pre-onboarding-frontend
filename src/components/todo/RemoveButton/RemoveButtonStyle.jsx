import styled from "styled-components";

const Button = styled.button`
  font-size: 20px;
  color: var(--color-type-01);
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

export const S = { Button };
