import { Route, Routes } from "react-router-dom";
import { ROUTER_ITEMS } from "./constant";

const Router = () => {
  return (
    <Routes>
      {ROUTER_ITEMS.map((item, idx) => (
        <Route key={idx} path={item.path} element={<item.element />} />
      ))}
    </Routes>
  );
};

export default Router;
