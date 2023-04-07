import React from "react";
import Button from "../../components/common/Button/Button";
import { S } from "./SignupStyle";
import Input from "../../components/common/Input/Input";
import useInput from "../../hooks/common/useInput";

export default function SignUp() {
  const [{ email, password, confirmpassword }, onChange] = useInput({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const checkValid =
    email.includes("@") &&
    password.length >= 8 &&
    confirmpassword.length >= 8 &&
    password === confirmpassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValid) {
      console.log(email, password, confirmpassword);
    }
  };

  return (
    <main>
      <h1 className="ir-hidden">회원가입페이지</h1>
      <S.Container>
        <S.Title>Sign Up</S.Title>
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
          <Input
            onChange={onChange}
            name="confirmpassword"
            value={confirmpassword}
            label="confirm password"
            type="Password"
            placeholder="Please Enter Again"
            required={true}
            data-testid="password-input"
          />
          <Button
            bgcolor="--accent-color"
            txtcolor="--color-type-02"
            disabled={false}
            data-testid="signup-button"
          >
            Sign Up
          </Button>
        </S.FormContainer>
      </S.Container>
    </main>
  );
}
