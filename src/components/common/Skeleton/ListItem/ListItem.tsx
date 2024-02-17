import styled from "styled-components";
import * as S from "../style";
import { CssFlex } from "@/stories/layout";

const ListItemSkeleton = () => {
  return (
    <>
      {Array.from({ length: 16 }).map((_, idx) => (
        <Box key={idx}>
          <S.SkeletonBox
            width="100%"
            height="183px"
            customStyle={{ borderRadius: "15px" }}
          />
          <S.SkeletonBox width="150px" height="20px" />
          <S.SkeletonBox width="120px" height="15px" />
        </Box>
      ))}
    </>
  );
};

export default ListItemSkeleton;

const Box = styled.div`
  width: 247px;
  cursor: pointer;
  ${CssFlex({ flexDirection: "column", rowGap: "15px" })}
`;
