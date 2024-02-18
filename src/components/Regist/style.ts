import { CssFlex } from "@/stories/layout";
import styled, { css } from "styled-components";

export const RegistContainer = styled.div`
  width: 100%;
  height: 100%;
  ${CssFlex({ justifyContent: "center" })}
`;

export const RegistWrap = styled.div`
  width: 800px;
  height: 100vh;

  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  background-color: #fff;

  padding-bottom: 30px;

  ${CssFlex({ flexDirection: "column", alignItems: "center" })}
`;

export const AttachImageBox = styled.div`
  width: 100%;
  ${CssFlex({ flexDirection: "column", rowGap: "15px" })}
`;

export const AttachImageWrap = styled.div<{ isDrop: boolean }>`
  width: 100%;
  height: 130px;

  border-radius: 7px;
  transition: all 0.2s ease-in-out;
  border: 1.7px dashed #ddd;

  ${({ isDrop }) =>
    isDrop &&
    css`
      transform: scale(0.97);
      background-color: #f9f9f9;
      border: 1.5px dashed #b77dff;
    `};

  ${CssFlex({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: "15px",
  })};

  input {
    display: none;
  }

  button {
    padding: 6px 7px;
    border-radius: 5px;
    background-color: transparent;

    cursor: pointer;
    outline: none;
    border: 1px solid #000;

    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #eee;
    }
    &:active {
      background-color: #ddd;
    }

    p {
      font-size: 14px;
      font-family: "Pretendard-Medium" !important;
    }

    ${CssFlex({ alignItems: "center", columnGap: "5px" })}
  }
`;

export const AttachImageText = styled.p`
  font-size: 14px;
  color: #64748b;
`;

export const UploadIcon = styled.img`
  width: 22px;
  height: 22px;
`;

export const PreviewAttachImageBox = styled.div`
  width: 100%;
  padding-left: 2px;

  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const PreviewImageWrap = styled.div`
  width: 205px;
  height: 140px;

  border-radius: 5px;
  border: 1px solid #ddd;
  overflow: hidden;

  position: relative;
`;

export const CancelPreviewImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 0 0 0 5px;

  position: absolute;
  top: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;

  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgba(255, 55, 66, 0.89);
  }
  ${CssFlex({ alignItems: "center", justifyContent: "center" })}
`;

export const CancelIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: 1px 0 0 1px;
  cursor: pointer;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  transform: scale(1);
  &:hover {
    transform: scale(1.07);
  }
`;
