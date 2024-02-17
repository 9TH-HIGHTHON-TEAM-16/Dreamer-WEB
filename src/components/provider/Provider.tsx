import { PropsWithChildren } from "@/stories/core";
import GlobalStyle from "@/stories/core/design-token/GlobalStlye";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useLocation } from "react-router-dom";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import Header from "../common/Header/Header";
import { CssFlex } from "@/stories/layout";
import { RollingToastProvider } from "@stubee2/stubee2-rolling-toastify";

const Provider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const { pathname } = useLocation();

  const isRegist = pathname.includes("regist");

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RollingToastProvider>
          <GlobalStyle />
          <Container>
            {!isRegist && <Header />}
            <Wrapper isRegist={isRegist}>{children}</Wrapper>
          </Container>
        </RollingToastProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Provider;

const Container = styled.div`
  width: 100%;
  height: 100%;

  ${CssFlex({
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  })}
`;

const Wrapper = styled.div<{ isRegist: boolean }>`
  width: ${({ isRegist }) => (isRegist ? "100%" : "1060px")};
  height: 100%;
  background-color: ${({ isRegist }) => isRegist && "#f4f4f4"};
  padding-top: ${({ isRegist }) => !isRegist && "60px"};
`;
