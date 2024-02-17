import { ROLE } from "@/constants/Auth/constant";
import Token from "@/libs/Token/Token";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAdminCheck = () => {
  const role = Token.getCookie(ROLE);
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "ADMIN") {
      window.alert("관리자만 사용가능한 기능입니다.");
      navigate("/category/employment");
    }
  }, [role]);
};
