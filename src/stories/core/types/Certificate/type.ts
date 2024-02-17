import { CommonResponse } from "../common";

export interface RegistCertificateRequest {
  title: string;
  content: string;
  specialNote: string;
  url: string;
  urls: string[];
}

export interface ListCertificateResponse extends CommonResponse {
  data: {
    id: number;
    title: string;
    content: string;
    specialNote: string;
    url: string;
    urls: string[];
  }[];
}
