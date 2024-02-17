import { CommonResponse } from "../common";

export interface RegistPolicyRequest {
  title: string;
  content: string;
  subject: string;
  url: string;
  urls: string[];
}

export interface ListPolicyResponse extends CommonResponse {
  data: {
    title: string;
    content: string;
    subject: string;
    urls: string[];
  }[];
}
