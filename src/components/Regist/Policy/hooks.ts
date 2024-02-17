import { useRegistPolicyMutation } from "@/services/Policy/mutation";
import { QUERY_KEYS, RegistPolicyRequest } from "@/stories/core";
import { useQueryInvalidates, useUploadImage } from "@/stories/hooks";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useRegistPolicy = () => {
  const { ...hooks } = useUploadImage();
  const navigate = useNavigate();
  const { queryInvalidates } = useQueryInvalidates();

  const [content, setContent] = useState("");

  const [data, setData] = useState<Omit<RegistPolicyRequest, "urls">>({
    title: "",
    content: "",
    subject: "",
    url: "",
  });

  const { title, subject, url } = data;

  const isBlank =
    content.trim() === "" ||
    title.trim() === "" ||
    subject.trim() === "" ||
    url.trim() === "";

  const registPolicy = useRegistPolicyMutation();
  const { rollingToast } = useRollingToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContentChange = (e: React.FormEvent<HTMLSpanElement>) => {
    setContent(e.currentTarget.innerText.trim()!);
  };

  const handlePostSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isBlank) {
      return rollingToast("제도 정보를 작성해주세요!", "info");
    }

    registPolicy.mutate(
      {
        ...data,
        content,
        urls: hooks.imgUrl,
      },
      {
        onSuccess: () => {
          rollingToast("관련 제도 정보를 등록하였습니다!", "success");
          queryInvalidates([QUERY_KEYS.policy.getListPolicy]);
          navigate("/category/policy");
        },
        onError: (e) => {
          rollingToast("관련 제도 정보를 등록하지 못했습니다!", "error");
        },
      }
    );
  };

  return {
    ...hooks,
    data,
    isBlank,
    setData,
    handleChange,
    handleContentChange,
    handlePostSubmit,
  };
};
