import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  ROLE,
} from "@/constants/Auth/constant";
import Token from "@/libs/Token/Token";
import { useSignInMutation } from "@/services/Auth/mutation";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { useState } from "react";
import { useNavigate } from "react-router";

export const useSignIn = () => {
  const [content, setContent] = useState({
    email: "",
    password: "",
  });

  const { email, password } = content;

  const postSignIn = useSignInMutation();
  const { rollingToast } = useRollingToast();
  const navigate = useNavigate();

  const isBlank = email.trim() === "" || password.trim() === "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isBlank) {
      return rollingToast("로그인 정보를 입력해주세요!", "info");
    }

    postSignIn.mutate(content, {
      onSuccess: (res) => {
        Token.setCookie(ACCESS_TOKEN_KEY, res.data.accessToken);
        Token.setCookie(REFRESH_TOKEN_KEY, res.data.refreshToken);
        Token.setCookie(ROLE, res.data.type);
        navigate("/");
      },
      onError: (e) => {
        rollingToast("로그인에 실패하였습니다", "error");
      },
    });
  };

  return { content, handleChange, handleSubmit, isBlank };
};
