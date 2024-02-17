import { AxiosRequestConfig } from "axios";
import Token from "../Token/Token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/constants/Auth/constant";

export const requestHandler = (config: AxiosRequestConfig) => {
  const access_token = Token.getCookie(ACCESS_TOKEN_KEY);
  const refresh_token = Token.getCookie(REFRESH_TOKEN_KEY);

  if (access_token || refresh_token) {
    config.headers = {
      "Content-Type": "application/json",
      [REQUEST_TOKEN_KEY]: `Bearer ${access_token}`,
    };
  }
  return config;
};
