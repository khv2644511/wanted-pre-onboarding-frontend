import React from "react";
import Button from "../../components/common/Button/Button";
import { S } from "./SignInStyle";
import Input from "../../components/common/Input/Input";
import useInput from "../../hooks/common/useInput";

export default function SignIn() {
  const [{ email, password }, onChange] = useInput({
    email: "",
    password: "",
  });

  const checkValid = email.includes("@") && password.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValid) {
      console.log(email, password);
    }
  };

  return (
    <main>
      <h1 className="ir-hidden">로그인페이지</h1>
      <S.Container>
        <S.Title>Login</S.Title>
        <S.FormContainer onSubmit={handleSubmit}>
          <Input
            onChange={onChange}
            name="email"
            value={email}
            label="email"
            type="email"
            placeholder="Enter Email"
            required={true}
            data-testid="email-input"
          />
          <Input
            onChange={onChange}
            name="password"
            value={password}
            label="Password"
            type="Password"
            placeholder="Enter Password"
            required={true}
            data-testid="password-input"
          />
          <Button
            bgcolor="--accent-color"
            txtcolor="--color-type-02"
            disabled={false}
            data-testid="signin-button"
          >
            Sign In
          </Button>
        </S.FormContainer>
      </S.Container>
    </main>
  );
}
