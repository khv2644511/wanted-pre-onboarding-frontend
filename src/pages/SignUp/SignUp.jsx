import React, { useState } from "react";
import Button from "../../components/common/Button/Button";
import { S } from "./SignupStyle";
import Input from "../../components/common/Input/Input";
import useInput from "../../hooks/common/useInput";
import { useNavigate } from "react-router-dom";
import authApi from "../../services/api/auth";
import ErrorMessage from "../../components/common/ErrorMessage/ErrorMessage";

export default function SignUp() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      signup();
    } else if (password !== confirmpassword) {
      setError("비밀번호를 동일하게 작성해주세요");
    } else {
      setError("비밀번호를 8자 이상 입력하세요");
    }
  };

  const signupData = {
    email: email,
    password: password,
  };

  const signup = async () => {
    const res = await authApi.signUp(signupData);
    console.log(res);
    if (res?.status === 400) {
      return setError(res.data.message);
    }
    if (res?.status === 201) {
      console.log("회원가입 정상동작");

      return navigate("/signin");
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
          <ErrorMessage>{error}</ErrorMessage>
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
