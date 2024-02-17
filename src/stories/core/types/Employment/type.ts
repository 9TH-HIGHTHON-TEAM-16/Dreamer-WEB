import { CommonResponse } from "../common";

export interface RegistEmploymentRequest {
  title: string;
  content: string;
  specialNote: string;
  location: string;
  role: string;
  careerYear: number;
  tagList: string[];
  urls: string[];
}

export interface RoleEmploymentResponse extends CommonResponse {
  data: {
    role: string;
    details: string[];
  }[];
}

export interface LocationEmploymentResponse extends CommonResponse {
  data: {
    location: string;
    details: string[];
  }[];
}

export interface ListEmploymentResponse extends CommonResponse {
  data: [
    {
      title: string;
      content: string;
      specialNote: string;
      tags: string[];
      urls: string[];
    }
  ];
}
