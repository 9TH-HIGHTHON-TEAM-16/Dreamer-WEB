import { CommonResponse } from "../common";

export interface UserInfoResponse extends CommonResponse {
  data: {
    name: string;
  };
}
