import { useRegistEmploymentMutation } from "@/services/Employment/mutation";
import { QUERY_KEYS, RegistEmploymentRequest } from "@/stories/core";
import { useQueryInvalidates, useUploadImage } from "@/stories/hooks";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useRegistEmployment = () => {
  const { ...hooks } = useUploadImage();
  const navigate = useNavigate();
  const { queryInvalidates } = useQueryInvalidates();

  const [content, setContent] = useState("");

  const [data, setData] = useState<
    Omit<RegistEmploymentRequest, "location" | "role" | "careerYear" | "urls">
  >({
    title: "",
    content: "",
    specialNote: "",
    tagList: [],
  });

  const { title, specialNote, tagList } = data;

  const [detailData, setDetailData] = useState<
    Omit<
      RegistEmploymentRequest,
      "tagList" | "title" | "content" | "specialNote" | "urls"
    >
  >({
    location: "",
    role: "",
    careerYear: 0,
  });

  const { location, role, careerYear } = detailData;

  const isBlank =
    content.trim() === "" ||
    title.trim() === "" ||
    specialNote.trim() === "" ||
    tagList.length === 0 ||
    location.trim() === "" ||
    role.trim() === "" ||
    careerYear === 0;

  const [tag, setTag] = useState("");

  const registEmployment = useRegistEmploymentMutation();
  const { rollingToast } = useRollingToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "tagList") {
      setTag(e.target.value);
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleTagEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setData((prev) => ({ ...prev, tagList: [...prev.tagList, tag] }));
      setTag("");
    }
  };

  const handleContentChange = (e: React.FormEvent<HTMLSpanElement>) => {
    setContent(e.currentTarget.innerText.trim()!);
  };

  const handlePostSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isBlank) {
      return rollingToast("채용 정보를 작성해주세요!", "info");
    }

    registEmployment.mutate(
      {
        ...data,
        content,
        urls: hooks.imgUrl,
        ...detailData,
      },
      {
        onSuccess: () => {
          rollingToast("채용 공고를 등록하였습니다!", "success");
          queryInvalidates([QUERY_KEYS.employment.getListEmployment]);
          navigate("/category/employment");
        },
        onError: (e) => {
          rollingToast("채용 공고를 등록하지 못했습니다!", "error");
        },
      }
    );
  };

  return {
    ...hooks,

    data,
    setData,
    tag,

    detailData,
    setDetailData,
    isBlank,

    handleChange,
    handleContentChange,
    handleTagEnter,

    handlePostSubmit,
  };
};
