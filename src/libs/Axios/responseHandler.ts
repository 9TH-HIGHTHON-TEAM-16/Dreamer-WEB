import { AxiosError } from "axios";
import Token from "../Token/Token";
import AuthApi from "@/services/Auth/api";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/constants/Auth/constant";
import { dreamerAxios } from "./dreamerAxios";

export const responseHandler = async (error: AxiosError) => {
  const access_token = Token.getCookie(ACCESS_TOKEN_KEY);
  const refresh_token = Token.getCookie(REFRESH_TOKEN_KEY);
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    if (access_token && refresh_token && status === 401) {
      try {
        const { accessToken: newAccessToken } = await AuthApi.postRefreshToken(
          refresh_token
        );

        Token.setCookie(ACCESS_TOKEN_KEY, newAccessToken);

        dreamerAxios.defaults.headers.common[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${newAccessToken}`;

        return dreamerAxios(originalRequest);
      } catch (e) {
        Token.removeCookie(ACCESS_TOKEN_KEY);
        Token.removeCookie(REFRESH_TOKEN_KEY);
        window.alert("토큰이 만료되었습니다!");
        window.location.href = "/";
      }
    }
  }
  return Promise.reject(error);
};
