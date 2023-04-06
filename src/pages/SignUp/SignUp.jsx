import React from "react";
import Button from "../../components/common/Button/Button";
import { S } from "./SignupStyle";

export default function SignUp() {
  return (
    <main>
      <h1 className="ir-hidden">로그인페이지</h1>
      <S.Container>
        <S.Title>Sign Up</S.Title>
        <S.FormContainer>
          <label>Email</label>
          <input type="email" placeholder="email" width="auto" />
          <label>Password</label>
          <input type="password" placeholder="password" />
          <label>Confirm Password</label>
          <input type="password" placeholder="password" />
          <Button theme={""}>Sign In</Button>
        </S.FormContainer>
      </S.Container>
    </main>
  );
}
