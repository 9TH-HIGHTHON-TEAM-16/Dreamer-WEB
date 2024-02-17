import { PropsWithChildren } from "@/stories/core";
import GlobalStyle from "@/stories/core/design-token/GlobalStlye";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const Provider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <>{children}</>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Provider;
