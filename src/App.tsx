import Provider from "@/components/provider/Provider";
import Router from "@/router/Router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Router />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
