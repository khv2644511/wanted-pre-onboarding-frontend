import React from "react";
import { S } from "./InputStyle";

export default function Input({ label, type, placeholder, width }) {
  return (
    <>
      <S.Label>{label}</S.Label>
      <S.Input type={type} placeholder={placeholder} width={width} />
      <span>{}</span>
    </>
  );
}
