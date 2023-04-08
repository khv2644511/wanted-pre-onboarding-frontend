import React from "react";
import { GiConfirmed } from "react-icons/gi";
import { S } from "./SubmitButtonStyel";

export default function SubmitButtonStyel() {
  return (
    <S.Button data-testid="submit-button">
      <GiConfirmed />
    </S.Button>
  );
}
