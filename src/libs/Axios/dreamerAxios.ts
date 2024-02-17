import axios from "axios";
import Token from "../Token/Token";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "@/constants/Auth/constant";
import { responseHandler } from "./responseHandler";
import { requestHandler } from "./requestHandler";
import CONFIG from "@/config/config.json";

export const dreamerAxios = axios.create({
  baseURL: CONFIG.SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getCookie(ACCESS_TOKEN_KEY)}`,
  },
});

// dreamerAxios.interceptors.request.use(requestHandler, (response) => response);
// dreamerAxios.interceptors.response.use((response) => response, responseHandler);
