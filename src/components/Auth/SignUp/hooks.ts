import { useSignUpMutation } from "@/services/Auth/mutation";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { useState } from "react";
import { useNavigate } from "react-router";

export const useSignUp = () => {
  const [content, setContent] = useState({
    email: "",
    password: "",
    name: "",
    number: "",
  });

  const { email, password, name, number } = content;

  const postSignUp = useSignUpMutation();
  const { rollingToast } = useRollingToast();
  const navigate = useNavigate();

  const isBlank =
    email.trim() === "" ||
    password.trim() === "" ||
    name.trim() === "" ||
    number.trim() === "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isBlank) {
      return rollingToast("회원가입 정보를 입력해주세요!", "info");
    }

    postSignUp.mutate(
      { ...content, residentNumber: "" },
      {
        onSuccess: () => {
          rollingToast("회원가입이 성공적으로 완료되었습니다!", "success");
          navigate("/signin");
        },
        onError: (e) => {
          rollingToast("회원가입에 실패하였습니다", "error");
        },
      }
    );
  };

  return { content, handleChange, handleSubmit, isBlank };
};
