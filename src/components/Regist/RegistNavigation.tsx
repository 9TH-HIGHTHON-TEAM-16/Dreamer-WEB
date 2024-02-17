import styled, { css } from "styled-components";
import leftArrow from "@/stories/assets/icons/leftArrow.svg";
import { CssFlex } from "@/stories/layout";
import { useNavigate } from "react-router-dom";

interface Props {
  isBlank: boolean;
  handlePostSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RegistNavigation = ({ ...attr }: Props) => {
  const navigate = useNavigate();
  return (
    <NavigationBox isBlank={attr.isBlank}>
      <PrevArrowIcon
        src={leftArrow}
        onClick={() => navigate(-1)}
        alt="이전 페이지로 이동"
      />
      <button onClick={attr.handlePostSubmit}>등록하기</button>
    </NavigationBox>
  );
};

export default RegistNavigation;

export const NavigationBox = styled.div<{ isBlank?: boolean }>`
  width: 100%;
  height: 60px;

  border-bottom: 1px solid #ddd;
  padding: 0 15px 0 10px;

  button {
    padding: 10px;
    font-family: "Pretendard-Medium" !important;

    outline: none;
    border: none;
    cursor: pointer;

    border-radius: 7px;
    border: 1px solid #ddd;

    transition: all 0.3s ease-in-out;
    ${({ isBlank }) =>
      isBlank
        ? css`
            background-color: #0000000d;
            color: gray;
          `
        : css`
            background-color: #b77dff;
            color: #fff;
          `}

    &:active {
      opacity: 0.7;
    }
  }

  ${CssFlex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const PrevArrowIcon = styled.img`
  width: 35px;
  height: 35px;

  cursor: pointer;
  padding: 3px;
  border-radius: 7px;

  transition: all 0.3s ease-in-out;
  transform: scale(1);
  &:hover {
    transform: scale(0.91);
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
  }
`;
