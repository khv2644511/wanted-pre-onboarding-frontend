import Button from "../../components/common/Button/Button";
import React from "react";
import { S } from "./SignInStyle";
import Input from "../../components/common/Input/Input";

export default function SignIn() {
  return (
    <main>
      <h1 className="ir-hidden">로그인페이지</h1>
      <S.Container>
        <S.Title>Login</S.Title>
        <S.FormContainer>
          <Input
            label="email"
            type="email"
            placeholder="Enter Email"
            width="auto"
          />
          <Input
            label="Password"
            type="Password"
            placeholder="Enter Password"
            width="auto"
          />
          <Button
            bgcolor="--accent-color"
            txtcolor="--color-type-02"
            disabled={false}
          >
            Sign In
          </Button>
        </S.FormContainer>
      </S.Container>
    </main>
  );
}
