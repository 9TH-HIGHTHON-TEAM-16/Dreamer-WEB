import { CssFlex } from "@/stories/layout";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 130px;
  ${CssFlex({ alignItems: "center", justifyContent: "center" })}
`;

export const Box = styled.div`
  width: 400px;
  ${CssFlex({ flexDirection: "column", rowGap: "30px" })}
`;

export const Title = styled.div`
  width: 100%;
  padding-bottom: 50px;
  ${CssFlex({ flexDirection: "column", rowGap: "8px" })}
`;

export const MainTitle = styled.p`
  font-size: 27px;
  line-height: 30px;
  font-family: "Pretendard-Bold" !important;
`;

export const SubTitle = styled.p`
  color: #37383c9c;
  font-family: "Pretendard-SemiBold" !important;
`;

export const Form = styled.form`
  width: 100%;
  ${CssFlex({ flexDirection: "column", alignItems: "center", rowGap: "20px" })}
`;

export const InputWrap = styled.div`
  width: 100%;

  p {
    font-size: 13px;
    color: #37383c9c;
    font-family: "Pretendard-SemiBold" !important;
  }

  input {
    width: 100%;
    height: 45px;

    outline: none;
    padding: 0 10px;

    border: 1px solid #ddd;
    border-radius: 5px;

    transition: all 0.2s ease-in-out;
    &:focus {
      border: 1px solid #b77dff;
    }

    font-size: 15px;
    font-family: "Pretendard-Variable" !important;
    &::placeholder {
      color: #b8b8b8;
      font-size: 14px;
    }
  }

  ${CssFlex({ flexDirection: "column", rowGap: "8px" })}
`;

export const Warn = styled.div`
  width: 100%;
  padding-left: 5px;
  padding-bottom: 30px;

  img {
    width: 12px;
    height: 12px;
  }

  p {
    color: #b8b8b8;
    font-size: 12px;
    font-family: "Pretendard-SemiBold" !important;
  }
  ${CssFlex({ alignItems: "center", columnGap: "3px" })}
`;

export const Button = styled.button<{ isBlank: boolean }>`
  width: 100%;
  height: 45px;

  border: none;
  outline: none;
  font-size: 17px;
  color: ${({ isBlank }) => (isBlank ? "#37383c9c" : "#fff")};
  background-color: ${({ isBlank }) => (isBlank ? "#f4f4f5" : "#b77dff")};
  border-radius: 5px;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  &:active {
    opacity: 0.7;
  }
`;

export const SuggestSignUp = styled.p`
  padding-top: 15px;
  font-size: 13px;
  color: #37383c9c;

  span {
    font-family: "Pretendard-SemiBold" !important;
    cursor: pointer;
  }
`;
