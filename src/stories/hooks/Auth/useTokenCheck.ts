import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/Auth/constant";
import Token from "@/libs/Token/Token";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useTokenCheck = () => {
  const accessToken = Token.getCookie(ACCESS_TOKEN_KEY);
  const refreshToken = Token.getCookie(REFRESH_TOKEN_KEY);

  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      window.alert("로그인이 필요한 서비스입니다!");

      Token.removeCookie(ACCESS_TOKEN_KEY);
      Token.removeCookie(REFRESH_TOKEN_KEY);

      navigate("/category/employment");
    }
  }, [accessToken, refreshToken]);
};
