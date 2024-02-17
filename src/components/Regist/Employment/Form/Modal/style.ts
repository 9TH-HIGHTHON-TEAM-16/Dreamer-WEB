import { CssFlex } from "@/stories/layout";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 3;
  ${CssFlex({ alignItems: "center", justifyContent: "center" })}
`;

export const Box = styled.div`
  width: 500px;
  background-color: #fff;
  border-radius: 10px;

  padding: 25px 20px;

  ${CssFlex({ flexDirection: "column", alignItems: "center", rowGap: "15px" })}
`;

export const InputWrap = styled.div`
  width: 100%;
  ${CssFlex({ flexDirection: "column", rowGap: "7px" })}

  p {
    font-size: 18px;
    font-family: "Pretendard-Variable" !important;
  }

  input {
    width: 100%;
    border-radius: 4px;

    padding: 10px;
    outline: none;

    font-size: 16px;
    border: 1px solid #ddd;
    color: #b77dff;

    &::placeholder {
      color: #b8b8b8;
    }
  }

  select {
    width: 100%;
    border-radius: 4px;

    padding: 10px;
    outline: none;

    font-size: 16px;
    border: 1px solid #ddd;
    color: #b77dff;
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  ${CssFlex({ alignItems: "center", justifyContent: "flex-end" })}
`;

export const Button = styled.button`
  padding: 10px 30px;
  border-radius: 7px;
  background-color: #b77dff;

  outline: none;
  border: none;
  cursor: pointer;

  font-size: 15px;
  color: #fff;

  transition: all 0.2s ease-in-out;
  &:active {
    opacity: 0.7;
  }
`;
