import Button from "../../components/common/Button/Button";
import React from "react";
import { S } from "./SignInStyle";

export default function SignIn() {
  return (
    <main>
      <h1 className="ir-hidden">로그인페이지</h1>
      <S.Container>
        <S.Title>Login</S.Title>
        <S.FormContainer>
          <label>Email</label>
          <input type="email" placeholder="email" width="auto" />
          <label>Password</label>
          <input type="password" placeholder="password" />
          <Button theme={""}>Sign In</Button>
        </S.FormContainer>
      </S.Container>
    </main>
  );
}
