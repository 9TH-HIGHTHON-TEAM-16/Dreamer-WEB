import { PropsWithChildren } from "@/stories/core";
import GlobalStyle from "@/stories/core/design-token/GlobalStlye";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import Header from "../common/Header/Header";
import { CssFlex } from "@/stories/layout";
import { RollingToastProvider } from "@stubee2/stubee2-rolling-toastify";

const Provider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <RollingToastProvider>
            <GlobalStyle />
            <Container>
              <Header />
              <Wrapper>{children}</Wrapper>
            </Container>
          </RollingToastProvider>
        </BrowserRouter>
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

const Wrapper = styled.div`
  width: 1060px;
  height: 100%;
  padding-top: 60px;
`;
