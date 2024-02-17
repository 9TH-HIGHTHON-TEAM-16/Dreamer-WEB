import { GetText } from "../../utils";
import { Column, CssFlex } from "../../layout";
import styled from "styled-components";

interface Props {
  title: string;
  subTitle: string;
  image: string;
}

export const ListItem = ({ title, subTitle, image }: Props) => {
  const getText = new GetText(subTitle);

  return (
    <Box>
      <ImageWrap>
        <Image src={image} alt="이미지" />
      </ImageWrap>

      <Column rowGap={10}>
        <Title>{title}</Title>
        <SubTitle>{getText.stringEllipsis(30)}</SubTitle>
      </Column>
    </Box>
  );
};

const Box = styled.div`
  width: 247px;
  cursor: pointer;
  ${CssFlex({ flexDirection: "column", rowGap: "15px" })}
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 183px;
  border-radius: 14px;
  overflow: hidden;

  border: 1px solid #ddd;
  background-color: #000;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transform: scale(1);
  transition: all 0.25s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.p`
  font-size: 20px;
  font-family: "Pretendard-SemiBold" !important;
`;

const SubTitle = styled.p`
  font-size: 17px;
  color: #b8b8b8;
`;
