import React from "react";
import { S } from "./InputStyle";

export default function Input({
  onChange,
  name,
  label,
  type,
  placeholder,
  required,
  value,
  ...rest
}) {
  console.log({ ...rest });
  return (
    <>
      <S.Label htmlFor={type}>{label}</S.Label>
      <S.Input
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        {...rest}
      />
    </>
  );
}
