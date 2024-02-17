import { useRegistCertificateMutation } from "@/services/Certificate/mutation";
import { QUERY_KEYS, RegistCertificateRequest } from "@/stories/core";
import { useQueryInvalidates, useUploadImage } from "@/stories/hooks";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useRegistCertificate = () => {
  const { ...hooks } = useUploadImage();
  const navigate = useNavigate();
  const { queryInvalidates } = useQueryInvalidates();

  const [content, setContent] = useState("");

  const [data, setData] = useState<Omit<RegistCertificateRequest, "urls">>({
    title: "",
    content: "",
    specialNote: "",
    url: "",
  });

  const { title, specialNote, url } = data;
  const isBlank =
    content.trim() === "" ||
    title.trim() === "" ||
    specialNote.trim() === "" ||
    url.trim() === "";

  const registCertificate = useRegistCertificateMutation();
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
      return rollingToast("자격증 정보를 작성해주세요!", "info");
    }

    registCertificate.mutate(
      {
        ...data,
        content,
        urls: hooks.imgUrl,
      },
      {
        onSuccess: () => {
          rollingToast("자격증 정보를 등록하였습니다!", "success");
          queryInvalidates([QUERY_KEYS.certificate.getListCertificate]);
          navigate("/category/certificate");
        },
        onError: (e) => {
          rollingToast("자격증 정보를 등록하지 못했습니다!", "error");
        },
      }
    );
  };

  return {
    ...hooks,
    data,
    setData,
    isBlank,
    handleChange,
    handleContentChange,
    handlePostSubmit,
  };
};
