import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  ROLE,
} from "@/constants/Auth/constant";
import Token from "@/libs/Token/Token";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { useNavigate } from "react-router";

export const useLogout = () => {
  const { rollingToast } = useRollingToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    const answer = window.confirm("로그아웃 하시겠습니까?");
    if (answer) {
      Token.removeCookie(ACCESS_TOKEN_KEY);
      Token.removeCookie(REFRESH_TOKEN_KEY);
      Token.removeCookie(ROLE);

      rollingToast("로그아웃 되었습니다!", "info");
      navigate("/");
    }
  };

  return { handleLogout };
};
