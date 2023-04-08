import React from "react";
import { GiConfirmed } from "react-icons/gi";
import { S } from "./SubmitButtonStyel";

export default function SubmitButtonStyel() {
  return (
    <S.Button>
      <GiConfirmed />
    </S.Button>
  );
}
