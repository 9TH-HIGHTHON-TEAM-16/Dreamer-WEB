import styled from "styled-components";
import { CssFlex } from "@/stories/layout";
import { css } from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100%;
  padding-top: 30px;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  input {
    width: 100%;
    outline: none;
    border: none;
  }
`;

export const TitleInput = styled.input`
  height: 60px;
  font-size: 27px;
  font-family: "Pretendard-Semibold" !important;

  &::placeholder {
    color: #b8b8b8;
  }
`;

export const SpecialNote = styled.div`
  width: 100%;
  height: 38px;
  img {
    width: 27px;
    height: 27px;
  }

  input {
    width: 100%;
    font-size: 16px;
  }

  ${CssFlex({ alignItems: "center", columnGap: "7px" })}
`;

export const Link = styled.div`
  width: 100%;
  margin-top: 5px;
  img {
    width: 27px;
    height: 27px;
  }

  input {
    width: 100%;
    font-size: 16px;
  }

  ${CssFlex({ alignItems: "center", columnGap: "7px" })}
`;

export const ContentInputContainer = styled.div`
  width: 100%;
  padding-bottom: 35px;
  margin-top: 20px;
`;

export const ContentInput = styled.span<{ placeholder: string }>`
  width: 100%;
  height: 100%;
  min-height: 100px;

  display: block;

  outline: none;
  border: none;

  font-size: 17px;
  line-height: 18px;
  white-space: pre-wrap;
  word-break: break-word;

  ${({ placeholder }) =>
    placeholder &&
    css`
      cursor: text;
      &:empty:before {
        content: attr(placeholder);
        color: #64748b;
        line-height: 20px;
        font-family: "Pretendard-Light" !important;
      }
    `};
`;
