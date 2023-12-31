import { Route, Routes } from "react-router-dom";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";
import { Home } from "../pages/Home";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/page1" element={<Page1 />} />
    <Route path="/page2" element={<Page2 />} />
  </Routes>
);

export default routes;
