import { CssFlex } from "@/stories/layout";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 45px 0;
`;

export const ListWrap = styled.div`
  width: 100%;
  padding-top: 40px;

  flex-wrap: wrap;
  ${CssFlex({ columnGap: "23px", rowGap: "60px" })}
`;
