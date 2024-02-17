import React from "react";
import styled from "styled-components";
import { CssFlex } from "../../layout";
import Token from "@/libs/Token/Token";
import { ACCESS_TOKEN_KEY, ROLE } from "@/constants/Auth/constant";

export type TitleProps = {
  title: string;
  onClick: () => void;
};

export const Title = ({ title, onClick }: TitleProps) => {
  const accessToken = Token.getCookie(ACCESS_TOKEN_KEY);
  const role = Token.getCookie(ROLE);

  return (
    <Container>
      <p>{title}</p>
      {accessToken && role === "ADMIN" && (
        <button onClick={onClick}>등록하기</button>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;

  p {
    font-family: "Pretendard-Bold" !important;
    font-size: 26px;
  }

  button {
    padding: 10px 22px;
    cursor: pointer;
    margin-bottom: 2px;

    background-color: #b77dff;
    outline: none;
    border: none;

    font-size: 15px;
    color: #fff;
    border-radius: 10px;

    transition: all 0.2s ease-in-out;
    &:active {
      opacity: 0.7;
    }
  }

  ${CssFlex({ alignItems: "center", justifyContent: "space-between" })}
`;
