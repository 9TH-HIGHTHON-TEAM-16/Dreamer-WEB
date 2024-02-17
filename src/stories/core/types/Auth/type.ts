import { CommonResponse } from "../common";

export type AccessTokenResponse = {
  accessToken: string;
};

export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
  number: string;
  residentNumber: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse extends CommonResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    email: string;
    name: string;
    type: "ADMIN" | "USER";
  };
}
