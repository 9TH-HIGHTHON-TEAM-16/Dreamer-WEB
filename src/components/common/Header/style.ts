import { CssFlex } from "@/stories/layout";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 3;
  background-color: #fff;
  border-bottom: 1px solid #0000000d;
  white-space: nowrap;

  ${CssFlex({ justifyContent: "center" })}
`;

export const Wrapper = styled.div`
  width: 1060px;
  height: 100%;

  ${CssFlex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const Content = styled.div`
  ${CssFlex({ alignItems: "center" })}

  ul {
    padding-left: 80px;
    ${CssFlex({ alignItems: "center", columnGap: "50px" })}
  }
`;

export const List = styled.li<{ isSelect: boolean }>`
  font-size: 15px;
  color: ${({ isSelect }) => (isSelect ? "#b77dff" : "#333;")};
  cursor: pointer;
  font-family: "Pretendard-SemiBold" !important;

  transition: all 0.1s ease-in-out;
  &:hover {
    color: #b77dff;
  }
`;

export const Logo = styled.div`
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
  }

  p {
    font-size: 22px;
    font-family: "Pretendard-Medium" !important;
  }

  ${CssFlex({ alignItems: "center" })}
`;

export const Etc = styled.div`
  img {
    cursor: pointer;
  }

  div {
    border: 1px solid #ddd;
    border-radius: 10px;
    cursor: pointer;
    color: #b77dff;

    padding: 10px;
    font-size: 13px;
    font-family: "Pretendard-SemiBold" !important;

    transition: all 0.13s ease-in-out;
    &:hover {
      background-color: #eee;
    }
  }

  ${CssFlex({ alignItems: "center", columnGap: "10px" })}
`;

export const Search = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Profile = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;

  border-radius: 100px;
  border: 1px solid #ddd;
`;
