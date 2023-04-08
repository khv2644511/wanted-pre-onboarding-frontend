import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { S } from "./CancelButtonStyle";

export default function CancelButton() {
  return (
    <S.Button>
      <ImCancelCircle />
    </S.Button>
  );
}
