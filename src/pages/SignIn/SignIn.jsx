import React, { useState } from "react";
import Button from "../../components/common/Button/Button";
import { S } from "./SignInStyle";
import Input from "../../components/common/Input/Input";
import useInput from "../../hooks/common/useInput";
import authApi from "../../services/api/auth";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/common/ErrorMessage/ErrorMessage";

export default function SignIn() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [{ email, password }, onChange] = useInput({
    email: "",
    password: "",
  });

  const checkValid = email.includes("@") && password.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValid) {
      login();
    } else {
      setError("비밀번호를 8자 이상 입력하세요");
    }
  };

  const loginData = {
    email: email,
    password: password,
  };

  const login = async () => {
    const res = await authApi.signIn(loginData);
    const { access_token } = res.data;
    if (res?.status === 401) {
      return setError(res.data.message);
    }
    if (res?.status === 404) {
      return setError(res.data.message);
    }
    if (res?.status === 200 && access_token) {
      localStorage.setItem("access_token", JSON.stringify(access_token));

      return navigate("/todo");
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
          <ErrorMessage>{error}</ErrorMessage>
          <Button
            bgcolor="--accent-color"
            txtcolor="--color-type-02"
            disabled={false}
            data-testid="signin-button"
          >
            Sign In
          </Button>
          <S.SingUpLink to="/signup">회원가입 하러가기 ➡</S.SingUpLink>
        </S.FormContainer>
      </S.Container>
    </main>
  );
}
