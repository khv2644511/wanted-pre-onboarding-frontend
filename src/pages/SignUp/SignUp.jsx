import React, { useEffect, useState } from "react";
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

  const [{ email, password }, onChange] = useInput({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const checkValid = !(email.includes("@") && password.length >= 8);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkValid) {
      signup();
    } else {
      setError("아이디 혹은 비밀번호를 확인하세요");
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
      return navigate("/signin");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      navigate("/todo");
    }
  }, [navigate]);

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
          <ErrorMessage>{error}</ErrorMessage>
          <Button
            bgcolor="--accent-color"
            txtcolor="--color-type-02"
            disabled={checkValid}
            data-testid="signup-button"
          >
            Sign Up
          </Button>
        </S.FormContainer>
      </S.Container>
    </main>
  );
}
