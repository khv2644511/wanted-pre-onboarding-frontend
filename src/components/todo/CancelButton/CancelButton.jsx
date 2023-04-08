import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { S } from "./CancelButtonStyle";

export default function CancelButton({ onclick }) {
  return (
    <S.Button onClick={onclick} data-testid="cancel-button">
      <ImCancelCircle />
    </S.Button>
  );
}
